import { ArrowUpRight } from "lucide-react";
import Link from "../../router/Link";
import { EDUCATION, EXPERIENCE } from "../../data/content";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";
import styles from "./Experience.module.css";

const [flagship, ...earlierRoles] = EXPERIENCE;

function Experience() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
    >
      <div className="sectionInner">
        <SectionHeader
          index="02"
          kicker="Experience"
          id="experience-heading"
          title={
            <>
              Responsibility, not a{" "}
              <em className="displayItalic">job title.</em>
            </>
          }
          lead="Most recent first: the production platform I lead today, then freelance delivery and an earlier academic build."
        />

        <Reveal>
          <article className={styles.flagship}>
            <div className={styles.flagshipMeta}>
              <p className={styles.current}>
                <span aria-hidden="true" />
                Current role
              </p>
              <h3 className={styles.role}>{flagship.role}</h3>
              <p className={styles.company}>
                {flagship.company}
                <span aria-hidden="true">·</span>
                {flagship.period}
              </p>
              <p className={styles.summary}>{flagship.summary}</p>

              <dl className={styles.achievements}>
                {flagship.achievements.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>

              <Link to={flagship.caseStudy} className={styles.caseLink}>
                Read the full case study
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.groups}>
              {flagship.groups.map((group) => (
                <section key={group.title} className={styles.group}>
                  <h4>{group.title}</h4>
                  <ul>
                    {group.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 32)}>{bullet}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </article>
        </Reveal>

        <div className={styles.archive}>
          <Reveal>
            <h3 className={styles.subhead}>Earlier experience</h3>
          </Reveal>

          <ol className={styles.roles}>
            {earlierRoles.map((role, index) => (
              <Reveal key={role.id} delay={index * 0.05}>
                <li className={styles.roleRow}>
                  <div className={styles.rolePeriod}>{role.period}</div>
                  <div className={styles.roleBody}>
                    <h4>{role.role}</h4>
                    <p className={styles.roleCompany}>{role.company}</p>
                    <p>{role.summary}</p>
                    <ul className={styles.stack} aria-label={`Stack for ${role.role}`}>
                      {role.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className={styles.education}>
          <Reveal>
            <h3 className={styles.subhead}>Education</h3>
          </Reveal>
          <div className={styles.eduGrid}>
            {EDUCATION.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.06}>
                <article className={styles.eduCard}>
                  <p className={styles.eduPeriod}>{item.period}</p>
                  <h4>{item.degree}</h4>
                  <p className={styles.eduSchool}>{item.school}</p>
                  <p className={styles.eduDetail}>{item.detail}</p>
                  {item.link && (
                    <Link to={item.link} className={styles.eduLink}>
                      Read the research case study
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
