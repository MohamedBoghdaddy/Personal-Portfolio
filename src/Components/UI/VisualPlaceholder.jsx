import Icon from "./Icon";

const accentClassMap = {
  primary: { text: "text-primary", bg: "bg-primary/10", border: "border-primary/30" },
  secondary: { text: "text-secondary", bg: "bg-secondary/10", border: "border-secondary/30" },
  tertiary: { text: "text-tertiary", bg: "bg-tertiary/10", border: "border-tertiary/30" },
  error: { text: "text-error", bg: "bg-error/10", border: "border-error/30" }
};

export default function VisualPlaceholder({
  image,
  icon = "memory",
  title = "SYSTEM VISUAL",
  accent = "primary",
  className = "",
  alt = ""
}) {
  const ac = accentClassMap[accent] || accentClassMap.primary;

  return (
    <div className={`group relative min-h-[220px] overflow-hidden border bg-surface-container-lowest ${ac.border} ${className}`}>
      <div className="absolute inset-0 hud-grid opacity-60" />
      <div className={`absolute -left-16 -top-16 h-56 w-56 rounded-full blur-3xl ${ac.bg}`} />
      <div className="absolute -bottom-12 -right-12 h-52 w-52 rounded-full bg-secondary/10 blur-3xl" />
      {image ? (
        <img
          className="relative h-full min-h-[220px] w-full object-cover opacity-70 grayscale transition duration-500 group-hover:opacity-90 group-hover:grayscale-0"
          src={image}
          alt={alt || title}
        />
      ) : (
        <div className="relative flex h-full min-h-[220px] flex-col items-center justify-center p-md text-center">
          <Icon name={icon} className={`mb-sm text-5xl ${ac.text}`} fill />
          <p className="label-caps text-on-surface-variant">{title}</p>
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-sm">
        <p className={`label-caps ${ac.text}`}>{title}</p>
      </div>
    </div>
  );
}

