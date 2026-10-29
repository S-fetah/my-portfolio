import { ArrowUpRight, MapPin } from "lucide-react";
import { PROFILE, SOCIALS } from "../../data/content";
import { GitHubIcon, LinkedInIcon, XIcon } from "../common/BrandIcons";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";
import Form from "./Form";
import styles from "./Contact.module.css";

const SOCIAL_ITEMS = [
  { label: "LinkedIn", href: SOCIALS.linkedin, icon: LinkedInIcon },
  { label: "GitHub", href: SOCIALS.github, icon: GitHubIcon },
  { label: "X", href: SOCIALS.twitter, icon: XIcon },
];

function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="sectionInner">
        <SectionHeader
          index="05"
          kicker="Contact"
          id="contact-heading"
          title={
            <>
              Tell me what you&apos;re{" "}
              <em className="displayItalic">building.</em>
            </>
          }
          lead="I'm open to backend and full-stack roles, and to focused engineering work where reliability matters. The form goes straight to my inbox."
        />

        <div className={styles.grid}>
          <Reveal className={styles.info}>
            <div className={styles.direct}>
              <p className={styles.label}>Direct</p>
              <a href={`mailto:${PROFILE.email}`} className={styles.email}>
                {PROFILE.email}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>

            <dl className={styles.details}>
              <div>
                <dt>Location</dt>
                <dd>
                  <MapPin size={14} aria-hidden="true" />
                  {PROFILE.location} · {PROFILE.timezone}
                </dd>
              </div>
              <div>
                <dt>Availability</dt>
                <dd>{PROFILE.availability}</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>Arabic · French · English</dd>
              </div>
            </dl>

            <div className={styles.socialBlock}>
              <p className={styles.label}>Elsewhere</p>
              <ul className={styles.socials} aria-label="Social links">
                {SOCIAL_ITEMS.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} profile`}
                    >
                      <Icon size={18} />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.06} className={styles.formPanel}>
            <p className={styles.formLabel}>Send a message</p>
            <Form />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
