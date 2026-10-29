import { ArrowUp } from "lucide-react";
import Link from "../../router/Link";
import { NAV_LINKS, PROFILE, SOCIALS } from "../../data/content";
import { GitHubIcon, LinkedInIcon, XIcon } from "../common/BrandIcons";
import styles from "./Footer.module.css";

function scrollToTop() {
  const reduceMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.identity}>
          <Link to="/" className={styles.brand} aria-label="Safiddine Abdelfetah — home">
            <span className={styles.mark} aria-hidden="true">
              SA
            </span>
            <span className={styles.name}>{PROFILE.name}</span>
          </Link>
          <p className={styles.role}>{PROFILE.roleLine}</p>
          <p className={styles.location}>
            {PROFILE.location} · Open to backend &amp; full-stack roles
          </p>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          <p className={styles.label}>Sections</p>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={`/${link.href}`}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.connect}>
          <p className={styles.label}>Connect</p>
          <a href={`mailto:${PROFILE.email}`} className={styles.email}>
            {PROFILE.email}
          </a>
          <ul className={styles.socials} aria-label="Social links">
            <li>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon size={18} />
              </a>
            </li>
            <li>
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <GitHubIcon size={18} />
              </a>
            </li>
            <li>
              <a
                href={SOCIALS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X profile"
              >
                <XIcon size={17} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {PROFILE.name}. All rights reserved.
        </p>
        <p className={styles.credit}>
          Designed &amp; built with React, Vite, and CSS Modules.
        </p>
        <button type="button" className={styles.toTop} onClick={scrollToTop}>
          Back to top
          <ArrowUp size={14} aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
