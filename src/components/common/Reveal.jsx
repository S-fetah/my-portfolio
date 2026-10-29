import { m, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";

function Reveal({ children, className = "", delay = 0, y = 24 }) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      className={`reveal ${className}`.trim()}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </m.div>
  );
}

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  y: PropTypes.number,
};

export default Reveal;
