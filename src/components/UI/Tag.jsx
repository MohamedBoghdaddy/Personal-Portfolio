const accentClassMap = {
  primary: "border-primary/30 bg-primary/10 text-primary",
  secondary: "border-secondary/30 bg-secondary/10 text-secondary",
  tertiary: "border-tertiary/30 bg-tertiary/10 text-tertiary",
  error: "border-error/30 bg-error/10 text-error"
};

export default function Tag({ children, accent = "secondary", className = "" }) {
  return (
    <span className={`inline-flex border px-xs py-[3px] font-mono text-[10px] uppercase tracking-wider ${accentClassMap[accent] || accentClassMap.secondary} ${className}`}>
      {children}
    </span>
  );
}

