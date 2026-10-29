import PropTypes from "prop-types";
import { useRouter } from "./routerContext";

function Link({ to, onClick, children, ...rest }) {
  const { navigate } = useRouter();

  const handleClick = (event) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Link;
