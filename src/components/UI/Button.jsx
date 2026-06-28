import { Link } from "react-router-dom";
import Icon from "./Icon";

const variantClasses = {
  primary:
    "bg-primary text-on-primary hover:shadow-glow hover:brightness-105 active:scale-95",
  secondary:
    "border border-secondary bg-transparent text-secondary hover:bg-secondary/10 active:scale-95",
  ghost:
    "border border-outline-variant bg-surface-container/60 text-on-surface hover:border-primary/40 hover:bg-primary/10 active:scale-95",
  danger:
    "border border-error bg-transparent text-error hover:bg-error/10 active:scale-95"
};

export default function Button({
  to,
  href,
  children,
  icon,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
  download,
  onClick,
  ariaLabel,
  target
}) {
  const classes = `focus-ring inline-flex items-center justify-center gap-xs px-md py-sm font-display text-[12px] font-bold uppercase tracking-[0.16em] transition ${variantClasses[variant] || variantClasses.primary} ${
    disabled ? "pointer-events-none cursor-not-allowed opacity-45" : ""
  } ${className}`;

  const content = (
    <>
      {icon && <Icon name={icon} className="text-[18px]" />}
      <span>{children}</span>
    </>
  );

  if (to && !disabled) {
    return (
      <Link className={classes} to={to} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href && !disabled) {
    return (
      <a className={classes} href={href} target={download ? undefined : (target ?? "_blank")} rel={download ? undefined : "noopener noreferrer"} download={download} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type={type} disabled={disabled} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  );
}

