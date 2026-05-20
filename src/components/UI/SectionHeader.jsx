import Icon from "./Icon";

export default function SectionHeader({ eyebrow, title, description, icon = "terminal", children }) {
  return (
    <header className="mb-lg border-l-4 border-primary pl-md">
      {eyebrow && (
        <div className="mb-xs flex items-center gap-xs">
          <Icon name={icon} className="text-[18px] text-secondary" />
          <p className="label-caps text-secondary">{eyebrow}</p>
        </div>
      )}
      <h1 className="font-display text-4xl font-semibold tracking-tight text-on-surface md:text-5xl">
        {title}
      </h1>
      {description && <p className="mt-sm max-w-3xl text-base leading-relaxed text-on-surface-variant md:text-lg">{description}</p>}
      {children}
    </header>
  );
}

