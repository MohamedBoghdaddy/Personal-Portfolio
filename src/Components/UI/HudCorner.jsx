export default function HudCorner({ accent = "primary" }) {
  const colorMap = {
    primary: "border-primary",
    secondary: "border-secondary",
    tertiary: "border-tertiary",
    error: "border-error"
  };
  const color = colorMap[accent] || colorMap.primary;

  return (
    <>
      <span className={`pointer-events-none absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 ${color}`} />
      <span className={`pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 ${color}`} />
    </>
  );
}

