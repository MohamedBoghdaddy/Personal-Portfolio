const accentClassMap = {
  primary: "bg-primary shadow-glow",
  secondary: "bg-secondary shadow-cyanGlow",
  tertiary: "bg-tertiary shadow-purpleGlow",
  error: "bg-error"
};

export default function ProgressBar({ value = 70, accent = "primary", label }) {
  return (
    <div>
      {label && <div className="mb-xs label-caps text-on-surface-variant">{label}</div>}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container-highest">
        <div className={`h-full ${accentClassMap[accent] || accentClassMap.primary}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

