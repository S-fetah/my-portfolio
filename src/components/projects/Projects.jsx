import { ArrowRight, ArrowUpRight } from "lucide-react";
import PropTypes from "prop-types";
import Link from "../../router/Link";
import SmartImage from "../common/SmartImage";
import StatusBadge from "../common/StatusBadge";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";
import {
  ADDITIONAL_PROJECTS,
  FEATURED_PROJECTS,
  SELECTED_PROJECTS,
} from "../../data/content";
import styles from "./Projects.module.css";

function FeaturedCover({ project }) {
  if (project.id === "fennec-platform") {
    return (
      <div className={styles.cover} data-project="fennec">
        <div className={styles.coverTop}>
          <span>Case study 01</span>
          <StatusBadge status={project.status} kind={project.statusKind} />
        </div>
        <div className={styles.coverBody}>
          <p className={styles.coverKicker}>{project.category}</p>
          <p className={styles.coverTitle}>Fennec Booking</p>
          <p className={styles.coverSub}>One API. Eight verticals.</p>
        </div>
        <div className={styles.coverShot}>
          <SmartImage
            image="fennecMobile"
            alt="Fennec Booking mobile app screenshot"
            sizes="(min-width: 900px) 30vw, 80vw"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cover} data-project="saha">
      <div className={styles.coverTop}>
        <span>Case study 02</span>
        <StatusBadge status={project.status} kind={project.statusKind} />
      </div>
      <div className={styles.coverBody}>
        <p className={styles.coverKicker}>{project.category}</p>
        <p className={styles.coverTitle}>Saha Mind</p>
        <p className={styles.coverSub}>Four agents. One clinical workflow.</p>
      </div>
      <div className={styles.agentGrid} aria-hidden="true">
        <span>Prompt</span>
        <span>Jarvis</span>
        <span>Sentiment</span>
        <span>Report</span>
      </div>
    </div>
  );
}

function FeaturedCard({ project, index }) {
  return (
    <article className={styles.featured}>
      <Link
        to={project.route}
        className={styles.coverLink}
        aria-label={`Read the ${project.title} case study`}
      >
        <FeaturedCover project={project} />
      </Link>

      <div className={styles.featuredBody}>
        <div className={styles.featuredHeading}>
          <span className={styles.featuredIndex} aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3>
            <Link to={project.route}>{project.title}</Link>
          </h3>
          <p>{project.subtitle}</p>
        </div>

        <p className={styles.featuredDescription}>{project.description}</p>

        <dl className={styles.metrics}>
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>

        <div className={styles.footerRow}>
          <ul className={styles.stack} aria-label={`${project.title} stack`}>
            {project.stack.slice(0, 5).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link to={project.route} className={styles.caseLink}>
            Read the case study
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function SelectedCard({ project }) {
  return (
    <article className={styles.selected}>
      <div className={styles.selectedVisual}>
        <SmartImage
          image={project.image}
          alt={project.alt}
          sizes="(min-width: 900px) 30vw, (min-width: 620px) 45vw, 90vw"
        />
      </div>
      <div className={styles.selectedBody}>
        <div className={styles.selectedMeta}>
          <span>{project.category}</span>
          <StatusBadge status={project.status} kind={project.statusKind} />
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className={styles.tags} aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {project.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.externalLink}
          >
            {link.label}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        ))}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <div className="sectionInner">
        <SectionHeader
          index="04"
          kicker="Selected work"
          id="work-heading"
          title={
            <>
              Systems built to be{" "}
              <em className="displayItalic">operated, not demoed.</em>
            </>
          }
          lead="Two detailed case studies, three selected products, and an archive of earlier client and academic work."
        />

        <div className={styles.sectionLabelRow}>
          <h3 className={styles.sectionLabel}>Featured case studies</h3>
          <span className={styles.sectionCount}>02</span>
        </div>

        <div className={styles.featuredGrid}>
          {FEATURED_PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <FeaturedCard project={project} index={index} />
            </Reveal>
          ))}
        </div>

        <div className={styles.sectionLabelRow}>
          <h3 className={styles.sectionLabel}>Selected projects</h3>
          <span className={styles.sectionCount}>03</span>
        </div>

        <div className={styles.selectedGrid}>
          {SELECTED_PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={Math.min(index, 2) * 0.05}>
              <SelectedCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className={styles.sectionLabelRow}>
          <h3 className={styles.sectionLabel}>Earlier &amp; additional work</h3>
          <span className={styles.sectionCount}>
            {String(ADDITIONAL_PROJECTS.length).padStart(2, "0")}
          </span>
        </div>

        <ul className={styles.archive}>
          {ADDITIONAL_PROJECTS.map((project) => (
            <li key={project.id} className={styles.archiveRow}>
              <div className={styles.archiveTitle}>
                <h4>{project.title}</h4>
                <span>{project.category}</span>
              </div>
              <p className={styles.archiveDescription}>{project.description}</p>
              <div className={styles.archiveMeta}>
                <StatusBadge status={project.status} kind={project.statusKind} />
                {project.links?.[0] ? (
                  <a
                    href={project.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.archiveLink}
                  >
                    {project.links[0].label}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                ) : (
                  <span className={styles.archiveNote}>
                    {project.tags.slice(0, 2).join(" · ")}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

FeaturedCover.propTypes = {
  project: PropTypes.object.isRequired,
};

FeaturedCard.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

SelectedCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Projects;
