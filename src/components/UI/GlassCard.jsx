import HudCorner from "./HudCorner";

export default function GlassCard({
  children,
  className = "",
  as: Component = "div",
  hover = true,
  accent = "primary",
  corners = true
}) {
  return (
    <Component className={`glass-panel relative ${hover ? "glass-panel-hover" : ""} ${className}`}>
      {corners && <HudCorner accent={accent} />}
      {children}
    </Component>
  );
}

