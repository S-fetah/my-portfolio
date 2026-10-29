import { ArrowUpRight } from "lucide-react";
import Link from "../../router/Link";
import { LANGUAGES, PROFILE } from "../../data/content";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";
import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="sectionInner">
        <SectionHeader
          index="01"
          kicker="Profile"
          id="about-heading"
          title={
            <>
              I build the part that has to{" "}
              <em className="displayItalic">keep working.</em>
            </>
          }
          lead="Production backend engineering, full-stack delivery, and applied AI research — with a bias toward systems that survive real usage."
        />

        <div className={styles.grid}>
          <Reveal className={styles.prose}>
            {PROFILE.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}

            <div className={styles.links}>
              <Link to="/work/fennec-booking" className={styles.textLink}>
                Read the Fennec case study
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              <Link to="/#contact" className={styles.textLinkMuted}>
                Talk about a role or project
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08} className={styles.aside}>
            <div className={styles.principles}>
              <p className={styles.asideLabel}>How I work</p>
              <ol>
                {PROFILE.principles.map((principle, index) => (
                  <li key={principle.title}>
                    <span className={styles.number}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <dl className={styles.facts}>
              <div>
                <dt>Based in</dt>
                <dd>{PROFILE.location}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Backend systems &amp; full-stack products</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>{LANGUAGES.join(" · ")}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{PROFILE.availability}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
