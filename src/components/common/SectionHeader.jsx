import PropTypes from "prop-types";
import styles from "./SectionHeader.module.css";

function SectionHeader({ index, kicker, title, lead, id, tone = "default" }) {
  return (
    <header className={`${styles.header} ${tone === "inverse" ? styles.inverse : ""}`}>
      <div className={styles.meta}>
        <span className={styles.index}>{index}</span>
        <span className={styles.kicker}>{kicker}</span>
      </div>
      <div className={styles.body}>
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
        {lead && <p className={styles.lead}>{lead}</p>}
      </div>
    </header>
  );
}

SectionHeader.propTypes = {
  index: PropTypes.string.isRequired,
  kicker: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  lead: PropTypes.node,
  id: PropTypes.string,
  tone: PropTypes.oneOf(["default", "inverse"]),
};

export default SectionHeader;
