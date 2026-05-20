import { missionPaths } from "../data/portfolioData";
import { GlassCard, Icon, PrimaryButton, SectionHeader, accentClasses } from "../components/UI";

export default function MissionSelector() {
  return (
    <main className="page-shell">
      <SectionHeader
        eyebrow="Mission Selector v2.04"
        title="Choose Your Mission"
        description="Different viewers need different proof. Pick the path that matches what you want to evaluate."
        icon="sensors"
      />

      <div className="grid grid-cols-1 items-stretch gap-md md:grid-cols-4">
        {missionPaths.map((path) => {
          const ac = accentClasses(path.accent);
          return (
            <GlassCard key={path.key} className={`flex h-full flex-col p-md ${path.featured ? "border-l-4 border-l-tertiary" : ""}`}>
              <div className="mb-lg flex items-start justify-between">
                <Icon name={path.icon} className={`text-4xl ${ac.text}`} fill={path.featured} />
                <span className="font-mono text-xs text-outline opacity-60">{path.protocol}</span>
              </div>

              {path.featured && (
                <div className="absolute right-3 top-3 rounded-full bg-tertiary-container px-2 py-0.5 text-[8px] font-bold uppercase tracking-tighter text-on-tertiary-container">
                  AI Agent Active
                </div>
              )}

              <h3 className="mb-sm font-display text-2xl font-semibold text-on-surface">{path.title}</h3>
              <p className="mb-lg flex-grow text-sm leading-relaxed text-on-surface-variant">{path.description}</p>

              <div className="mb-lg space-y-xs">
                {path.bullets.map((bullet) => (
                  <div key={bullet} className={`flex items-center gap-xs font-mono text-xs ${ac.text}`}>
                    <Icon name="check_circle" className="text-sm" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <PrimaryButton to={path.to} variant={path.featured ? "primary" : "outline"} icon="open_in_new" className="w-full">
                Open Path
              </PrimaryButton>
            </GlassCard>
          );
        })}
      </div>

      <div className="mt-lg flex flex-col items-center justify-between gap-md md:flex-row">
        <div className="flex flex-wrap items-center gap-md">
          <div>
            <span className="label-caps text-outline">System Load</span>
            <p className="font-mono text-sm text-primary">0.024ms // Stable</p>
          </div>
          <div className="hidden h-8 w-px bg-outline/20 md:block" />
          <div>
            <span className="label-caps text-outline">Active Instances</span>
            <p className="font-mono text-sm text-primary">Portfolio Nodes Online</p>
          </div>
        </div>

        <div className="flex gap-sm">
          <div className="glass-panel flex items-center gap-xs px-sm py-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="font-mono text-[10px] uppercase text-on-surface">Remote_Op: Ready</span>
          </div>
          <div className="glass-panel flex items-center gap-xs px-sm py-xs">
            <Icon name="wifi_tethering" className="text-sm text-secondary" />
            <span className="font-mono text-[10px] uppercase text-on-surface">Sync: 100%</span>
          </div>
        </div>
      </div>
    </main>
  );
}
