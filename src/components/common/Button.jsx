import PropTypes from "prop-types";
import Link from "../../router/Link";
import styles from "./Button.module.css";

function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  ...rest
}) {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external || href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary", "ghost"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
  external: PropTypes.bool,
};

export default Button;
