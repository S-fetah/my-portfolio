import { useMemo } from "react";
import PropTypes from "prop-types";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Link from "../router/Link";
import { FEATURED_PROJECTS, PROFILE } from "../data/content";
import { getMetaForPath } from "../lib/seo";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import FennecArchitecture from "../components/common/diagrams/FennecArchitecture";
import SahaMindSystem from "../components/common/diagrams/SahaMindSystem";
import StatusBadge from "../components/common/StatusBadge";
import styles from "./CaseStudyPage.module.css";

function Diagram({ project }) {
  const isFennec = project.id === "fennec-platform";
  return (
    <figure className={styles.figure}>
      <p className={styles.scrollHint}>Scroll to pan the diagram</p>
      <div
        className={styles.diagramScroll}
        tabIndex={0}
        role="group"
        aria-label="Architecture diagram. Scroll horizontally on small screens."
      >
        {isFennec ? <FennecArchitecture /> : <SahaMindSystem />}
      </div>
      <figcaption>
        {isFennec
          ? "Sanitized high-level integration architecture. Proprietary schemas and internal endpoints are omitted."
          : "The four-agent pipeline and supporting infrastructure, as designed for the dissertation."}
      </figcaption>
    </figure>
  );
}

function EvaluationTable({ evaluation }) {
  const systems = evaluation.columns.slice(1);
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <caption>{evaluation.caption}</caption>
        <thead>
          <tr>
            <th scope="col">{evaluation.columns[0]}</th>
            {systems.map((system, index) => (
              <th
                key={system}
                scope="col"
                className={index === systems.length - 1 ? styles.highlight : ""}
              >
                {system}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {evaluation.rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              {row.values.map((value, index) => (
                <td
                  key={`${row.label}-${systems[index]}`}
                  className={
                    index === row.values.length - 1 ? styles.highlight : ""
                  }
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Diagram.propTypes = {
  project: PropTypes.object.isRequired,
};

EvaluationTable.propTypes = {
  evaluation: PropTypes.object.isRequired,
};

function CaseStudyPage({ project }) {
  const meta = useMemo(() => getMetaForPath(project.route), [project.route]);
  useDocumentMeta(meta);

  const nextProject =
    FEATURED_PROJECTS.find((item) => item.id !== project.id) ??
    FEATURED_PROJECTS[0];

  return (
    <article className={styles.page}>
      <div className={styles.topbar}>
        <div className="container">
          <Link to="/#work" className={styles.backLink}>
            <ArrowLeft size={15} aria-hidden="true" />
            All work
          </Link>
          <span className={styles.topbarIndex}>
            Case study / {project.slug === "fennec-booking" ? "01" : "02"}
          </span>
        </div>
      </div>

      <header className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroMain}>
            <p className={styles.kicker}>{project.category}</p>
            <h1>{project.title}</h1>
            <p className={styles.subtitle}>{project.subtitle}</p>
            <p className={styles.lede}>{project.lede}</p>
          </div>

          <aside className={styles.facts} aria-label="Project facts">
            <div className={styles.factStatus}>
              <span className={styles.factLabel}>Status</span>
              <StatusBadge status={project.status} kind={project.statusKind} />
            </div>
            <dl>
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>{project.period}</dd>
              </div>
              <div>
                <dt>Context</dt>
                <dd>{project.category}</dd>
              </div>
            </dl>
            <ul className={styles.stack} aria-label="Technology stack">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.links.length > 0 && (
              <div className={styles.externalLinks}>
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </aside>
        </div>
      </header>

      <div className={styles.metricsBand}>
        <div className="container">
          <dl className={styles.metrics}>
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className={`container ${styles.layout}`}>
        <aside className={styles.toc} aria-label="On this page">
          <p className={styles.tocLabel}>On this page</p>
          <ol>
            {project.caseStudy.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.heading}
                </a>
              </li>
            ))}
            <li>
              <a href="#outcomes">
                <span aria-hidden="true">
                  {String(project.caseStudy.length + 1).padStart(2, "0")}
                </span>
                Outcomes
              </a>
            </li>
          </ol>
        </aside>

        <div className={styles.content}>
          {project.caseStudy.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={styles.section}
              aria-labelledby={`${section.id}-heading`}
            >
              <h2 id={`${section.id}-heading`}>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}

              {section.bullets && (
                <ul className={styles.bullets}>
                  {section.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 40)}>{bullet}</li>
                  ))}
                </ul>
              )}

              {section.id === "architecture" && <Diagram project={project} />}

              {section.id === "evaluation" && project.evaluation && (
                <EvaluationTable evaluation={project.evaluation} />
              )}

              {section.callout && (
                <aside className={styles.callout}>
                  <p>{section.callout}</p>
                </aside>
              )}
            </section>
          ))}

          <section
            id="outcomes"
            className={styles.section}
            aria-labelledby="outcomes-heading"
          >
            <h2 id="outcomes-heading">Outcomes</h2>
            <ul className={styles.outcomes}>
              {project.outcomes.map((outcome) => (
                <li key={outcome.slice(0, 40)}>
                  <Check size={15} aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </section>

          {project.disclaimer && (
            <aside className={styles.disclaimer}>
              <p className={styles.disclaimerLabel}>Scope note</p>
              <p>{project.disclaimer}</p>
            </aside>
          )}

          {project.confidentiality && (
            <p className={styles.confidentiality}>{project.confidentiality}</p>
          )}

          <div className={styles.closing}>
            <div>
              <p className={styles.closingLabel}>Next case study</p>
              <Link to={nextProject.route} className={styles.nextLink}>
                {nextProject.title}
                <ArrowRight size={20} aria-hidden="true" />
              </Link>
              <p className={styles.nextSub}>{nextProject.subtitle}</p>
            </div>

            <div className={styles.contactCta}>
              <p>Building something with similar constraints?</p>
              <Link to="/#contact" className={styles.contactLink}>
                Start a conversation
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              <a
                href={`mailto:${PROFILE.email}`}
                className={styles.contactEmail}
              >
                {PROFILE.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

CaseStudyPage.propTypes = {
  project: PropTypes.object.isRequired,
};

export default CaseStudyPage;
