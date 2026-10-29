import PropTypes from "prop-types";
import styles from "./StatusBadge.module.css";

function StatusBadge({ status, kind = "default", dot = true }) {
  return (
    <span className={styles.badge} data-kind={kind}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {status}
    </span>
  );
}

StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
  kind: PropTypes.oneOf([
    "production",
    "research",
    "prototype",
    "development",
    "default",
  ]),
  dot: PropTypes.bool,
};

export default StatusBadge;
