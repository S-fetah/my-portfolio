import emailjs from "@emailjs/browser";

/* EmailJS public identifiers are safe to ship in a browser bundle — they are
   domain-restricted in the EmailJS dashboard. Keep all values in Vite env
   variables so no account identifier is committed to the repository. */
const config = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};

export function isEmailConfigured() {
  return Boolean(config.publicKey && config.serviceId && config.templateId);
}

export function sendEmail(templateParams) {
  if (!isEmailConfigured()) {
    return Promise.reject(new Error("EmailJS is not configured"));
  }

  return emailjs.send(
    config.serviceId,
    config.templateId,
    templateParams,
    { publicKey: config.publicKey }
  );
}
