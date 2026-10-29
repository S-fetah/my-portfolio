import { useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { PROFILE } from "../../data/content";
import { isEmailConfigured, sendEmail } from "./email";
import styles from "./Contact.module.css";

const EMPTY = { name: "", email: "", message: "", company: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  } else if (values.name.length > 80) {
    errors.name = "Please keep your name under 80 characters.";
  }

  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  } else if (values.email.length > 120) {
    errors.email = "Please keep your email under 120 characters.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Please add a little more detail (at least 10 characters).";
  } else if (values.message.length > 2000) {
    errors.message = "Please keep the message under 2,000 characters.";
  }

  return errors;
}

function Form() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const statusRef = useRef(null);
  const fieldRefs = {
    name: useRef(null),
    email: useRef(null),
    message: useRef(null),
  };

  const update = (field) => (event) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const focusStatus = () => {
    window.requestAnimationFrame(() => statusRef.current?.focus());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;

    /* Honeypot: real people never fill this hidden field. */
    if (values.company) {
      setStatus("success");
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = ["name", "email", "message"].find(
      (field) => nextErrors[field]
    );
    if (firstInvalid) {
      fieldRefs[firstInvalid].current?.focus();
      return;
    }

    setStatus("sending");

    try {
      await sendEmail({
        from_name: values.name.trim(),
        from_email: values.email.trim(),
        message: values.message.trim(),
      });
      setValues(EMPTY);
      setStatus("success");
      focusStatus();
    } catch {
      setStatus("error");
      focusStatus();
    }
  };

  const reset = () => {
    setStatus("idle");
    setErrors({});
    window.requestAnimationFrame(() => fieldRefs.name.current?.focus());
  };

  if (status === "success") {
    return (
      <div
        ref={statusRef}
        className={styles.success}
        tabIndex={-1}
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 size={26} aria-hidden="true" />
        <h3>Message sent</h3>
        <p>
          Thanks for reaching out. I&apos;ll reply by email as soon as I can —
          usually within a couple of days.
        </p>
        <button type="button" className={styles.resetButton} onClick={reset}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-name">Name</label>
          <input
            ref={fieldRefs.name}
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            maxLength={80}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            placeholder="Your name"
            required
          />
          {errors.name && (
            <p id="contact-name-error" className={styles.fieldError}>
              {errors.name}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-email">Email</label>
          <input
            ref={fieldRefs.email}
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={update("email")}
            maxLength={120}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            placeholder="you@example.com"
            required
          />
          {errors.email && (
            <p id="contact-email-error" className={styles.fieldError}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <div className={styles.labelRow}>
          <label htmlFor="contact-message">Message</label>
          <span className={styles.counter} aria-hidden="true">
            {values.message.length}/2000
          </span>
        </div>
        <textarea
          ref={fieldRefs.message}
          id="contact-message"
          name="message"
          rows={6}
          value={values.message}
          onChange={update("message")}
          maxLength={2000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          placeholder="A role, a project, or a question — a sentence or two is enough."
          required
        />
        {errors.message && (
          <p id="contact-message-error" className={styles.fieldError}>
            {errors.message}
          </p>
        )}
      </div>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={update("company")}
        />
      </div>

      {!isEmailConfigured() && (
        <p className={styles.configNote}>
          The form is not configured in this environment. You can email{" "}
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a> directly.
        </p>
      )}

      {status === "error" && (
        <div
          ref={statusRef}
          className={styles.error}
          role="alert"
          tabIndex={-1}
        >
          <AlertCircle size={18} aria-hidden="true" />
          <div>
            <p>The message could not be sent.</p>
            <p>
              Please try again, or email{" "}
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a> directly.
            </p>
          </div>
        </div>
      )}

      <div className={styles.footer}>
        <button
          type="submit"
          className={styles.submit}
          disabled={status === "sending"}
        >
          {status === "sending" ? (
            <>
              <span className={styles.spinner} aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Send size={15} aria-hidden="true" />
            </>
          )}
        </button>
        <p className={styles.privacy}>
          Your email is only used to reply to you.
        </p>
      </div>
    </form>
  );
}

export default Form;
