import { ArrowRight, Download, MapPin } from "lucide-react";
import resumePdf from "../../assets/Safiddine-Abdelfetah.pdf";
import Link from "../../router/Link";
import {
  METRICS,
  PROFILE,
  SOCIALS,
} from "../../data/content";
import { GitHubIcon, LinkedInIcon, XIcon } from "../common/BrandIcons";
import SmartImage from "../common/SmartImage";
import StatusBadge from "../common/StatusBadge";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div className={styles.topline}>
          <StatusBadge status={PROFILE.availability} kind="production" />
          <p className={styles.location}>
            <MapPin size={13} aria-hidden="true" />
            {PROFILE.location}
            <span aria-hidden="true">·</span>
            {PROFILE.timezone}
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>
              Backend systems <span aria-hidden="true">/</span> full-stack
              delivery
            </p>

            <h1 id="hero-heading" className={styles.heading}>
              <span>Safiddine</span>
              <span>
                Abdelfetah<em className={styles.dot}>.</em>
              </span>
            </h1>

            <p className={styles.role}>
              {PROFILE.title}
              <span aria-hidden="true" className={styles.roleDivider}> | </span>
              {PROFILE.secondaryTitle}
            </p>

            <p className={styles.value}>{PROFILE.valueProp}</p>

            <div className={styles.ctas}>
              <Link to="/#work" className={styles.primary}>
                Explore selected work
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/#contact" className={styles.secondary}>
                Start a conversation
              </Link>
              <a
                href={resumePdf}
                download="Safiddine-Abdelfetah.pdf"
                className={styles.cvLink}
              >
                <Download size={15} aria-hidden="true" />
                Download CV
              </a>
            </div>

            <div className={styles.socialRow}>
              <span className={styles.socialLabel}>Elsewhere</span>
              <ul className={styles.socials} aria-label="Social links">
                <li>
                  <a
                    href={SOCIALS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                  >
                    <LinkedInIcon size={17} />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIALS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                  >
                    <GitHubIcon size={17} />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIALS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X profile"
                  >
                    <XIcon size={16} />
                    X
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <aside className={styles.portrait} aria-label="Profile">
            <figure className={styles.figure}>
              <div className={styles.imageFrame}>
                <SmartImage
                  image="profile"
                  alt="Portrait of Safiddine Abdelfetah"
                  sizes="(min-width: 960px) 34vw, 88vw"
                  priority
                />
              </div>
              <figcaption className={styles.caption}>
                <span>Based in Médéa, Algeria</span>
                <span>Leading backend at Fennec Booking</span>
              </figcaption>
            </figure>
          </aside>
        </div>

        <div className={styles.proof}>
          <p className={styles.proofLabel}>Selected proof</p>
          <dl className={styles.metrics}>
            {METRICS.map((metric) => (
              <div key={metric.label} className={styles.metric}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
                <p>{metric.note}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Hero;
