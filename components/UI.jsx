import { Link } from "react-router-dom";

const accentClassMap = {
  primary: {
    text: "text-primary",
    border: "border-primary",
    bgSoft: "bg-primary/10",
    bg: "bg-primary",
    textOn: "text-on-primary",
    shadow: "shadow-glow"
  },
  secondary: {
    text: "text-secondary",
    border: "border-secondary",
    bgSoft: "bg-secondary/10",
    bg: "bg-secondary",
    textOn: "text-on-secondary",
    shadow: "shadow-cyanGlow"
  },
  tertiary: {
    text: "text-tertiary",
    border: "border-tertiary",
    bgSoft: "bg-tertiary/10",
    bg: "bg-tertiary",
    textOn: "text-on-tertiary",
    shadow: "shadow-purpleGlow"
  },
  error: {
    text: "text-error",
    border: "border-error",
    bgSoft: "bg-error/10",
    bg: "bg-error",
    textOn: "text-on-error",
    shadow: ""
  }
};

export function accentClasses(accent = "primary") {
  return accentClassMap[accent] || accentClassMap.primary;
}

export function Icon({ name, className = "", fill = false }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24` }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

export function SectionHeader({ eyebrow, title, description, icon = "terminal" }) {
  return (
    <header className="mb-lg border-l-4 border-primary pl-md">
      {eyebrow && (
        <div className="mb-xs flex items-center gap-xs">
          <Icon name={icon} className="text-secondary text-[18px]" />
          <p className="label-caps text-secondary">{eyebrow}</p>
        </div>
      )}
      <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-on-surface">
        {title}
      </h1>
      {description && (
        <p className="mt-sm max-w-3xl text-base md:text-lg leading-relaxed text-on-surface-variant">
          {description}
        </p>
      )}
    </header>
  );
}

export function GlassCard({ children, className = "", as: Component = "div", hover = true }) {
  return (
    <Component className={`glass-panel hud-corner ${hover ? "glass-panel-hover" : ""} ${className}`}>
      {children}
    </Component>
  );
}

export function PrimaryButton({ to, href, children, icon, variant = "primary", className = "", type = "button" }) {
  const classes =
    variant === "outline"
      ? `inline-flex items-center justify-center gap-xs border border-secondary px-md py-sm label-caps text-secondary transition hover:bg-secondary/10 ${className}`
      : `inline-flex items-center justify-center gap-xs bg-primary px-md py-sm label-caps text-on-primary transition hover:scale-[1.01] hover:shadow-glow active:scale-95 ${className}`;

  if (to) {
    return (
      <Link className={classes} to={to}>
        {icon && <Icon name={icon} className="text-[18px]" />}
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {icon && <Icon name={icon} className="text-[18px]" />}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type}>
      {icon && <Icon name={icon} className="text-[18px]" />}
      {children}
    </button>
  );
}

export function ProgressBar({ value = 70, accent = "primary" }) {
  const ac = accentClasses(accent);
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container-highest">
      <div className={`h-full ${ac.bg} ${ac.shadow}`} style={{ width: `${value}%` }} />
    </div>
  );
}

export function Tag({ children, accent = "secondary" }) {
  const ac = accentClasses(accent);
  return (
    <span className={`rounded-sm border ${ac.border}/30 ${ac.bgSoft} px-xs py-[3px] font-mono text-[10px] uppercase tracking-wider ${ac.text}`}>
      {children}
    </span>
  );
}

export function DataPanel({ label, value, accent = "primary" }) {
  const ac = accentClasses(accent);
  return (
    <div className="border border-outline-variant/30 bg-surface-container-low p-sm">
      <p className="label-caps mb-xs text-outline">{label}</p>
      <p className={`font-display text-2xl font-semibold ${ac.text}`}>{value}</p>
    </div>
  );
}

export function VisualPlaceholder({ icon = "memory", title = "SYSTEM VISUAL", accent = "primary", className = "" }) {
  const ac = accentClasses(accent);
  return (
    <div className={`relative overflow-hidden border border-outline-variant/30 bg-navy ${className}`}>
      <div className="absolute inset-0 hud-grid opacity-50" />
      <div className={`absolute -left-16 -top-16 h-56 w-56 rounded-full blur-3xl ${ac.bgSoft}`} />
      <div className="absolute -bottom-12 -right-12 h-52 w-52 rounded-full bg-secondary/10 blur-3xl" />
      <div className="relative flex h-full min-h-[220px] flex-col items-center justify-center p-md text-center">
        <Icon name={icon} className={`mb-sm text-5xl ${ac.text}`} fill />
        <p className="label-caps text-on-surface-variant">{title}</p>
      </div>
    </div>
  );
}
