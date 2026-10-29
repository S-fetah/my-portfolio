import { ArrowUpRight } from "lucide-react";
import Link from "../../router/Link";
import { SKILL_GROUPS } from "../../data/content";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="sectionInner">
        <SectionHeader
          index="03"
          kicker="Capabilities"
          id="skills-heading"
          title={
            <>
              A stack grouped by where it{" "}
              <em className="displayItalic">actually shipped.</em>
            </>
          }
          lead="No proficiency bars and no chip wall — just the tools behind the work above, grouped by the problem they solve."
        />

        <div className={styles.matrix}>
          {SKILL_GROUPS.map((group, index) => (
            <Reveal key={group.id} delay={Math.min(index, 3) * 0.04}>
              <article className={styles.group}>
                <div className={styles.heading}>
                  <span className={styles.index} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{group.title}</h3>
                </div>
                <ul className={styles.items}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className={styles.evidence}>
                  <span aria-hidden="true">↳</span>
                  {group.evidence}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className={styles.footnote}>
            Looking for proof rather than a list?{" "}
            <Link to="/work/fennec-booking" className={styles.link}>
              The Fennec case study
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>{" "}
            shows how the backend stack fits together in production.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
