import { productEngineering, skillGroups } from "../data/portfolioData";
import { GlassCard, Icon, ProgressBar, SectionHeader, VisualPlaceholder, accentClasses } from "../components/UI";

export default function SkillTree() {
  return (
    <main className="page-shell">
      <SectionHeader
        eyebrow="System Capabilities"
        title="Skill Tree"
        description="Grouped technical abilities with realistic confidence labels and capability nodes."
        icon="hub"
      />

      <div className="grid grid-cols-1 gap-md lg:grid-cols-3">
        {skillGroups.map((group) => {
          const ac = accentClasses[group.accent];
          return (
            <section key={group.group}>
              <div className="mb-sm flex items-center gap-sm">
                <Icon name={group.icon} className={`text-3xl ${ac.text}`} fill />
                <h2 className={`font-display text-2xl font-semibold ${ac.text}`}>{group.group}</h2>
              </div>
              <div className="space-y-sm">
                {group.nodes.map((node) => (
                  <GlassCard key={node.name} className={`border-l-2 ${ac.borderLeft} p-sm`} accent={group.accent}>
                    <div className="mb-sm flex items-start justify-between gap-sm">
                      <span className="label-caps text-on-surface">{node.name}</span>
                      <span className={`border px-xs py-0.5 font-mono text-[10px] uppercase ${ac.text} ${ac.border}`}>
                        {node.level}
                      </span>
                    </div>
                    <ProgressBar value={node.value} accent={group.accent} />
                  </GlassCard>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-xl grid grid-cols-1 gap-md md:grid-cols-2">
        <GlassCard className="overflow-hidden p-lg" accent="error">
          <div className="absolute right-4 top-4 opacity-10">
            <Icon name="cloud" className="text-[120px]" />
          </div>
          <h3 className="mb-md flex items-center gap-xs font-display text-2xl font-semibold text-error">
            <Icon name="settings_suggest" />
            DevOps & QA
          </h3>
          <div className="grid grid-cols-1 gap-sm sm:grid-cols-2">
            {["Docker", "CI/CD", "Postman", "Browser QA"].map((item) => (
              <div key={item} className="border border-outline-variant bg-surface-container-low p-sm">
                <p className="label-caps mb-xs text-outline">{item}</p>
                <p className="font-display text-xl font-semibold text-on-surface">Working practice</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="overflow-hidden p-lg">
          <div className="absolute right-4 top-4 opacity-10">
            <Icon name="architecture" className="text-[120px]" />
          </div>
          <h3 className="mb-md flex items-center gap-xs font-display text-2xl font-semibold">
            <Icon name="draw" />
            Product Engineering
          </h3>
          <ul className="space-y-sm font-mono text-sm">
            {productEngineering.map((item) => (
              <li key={item} className="flex justify-between gap-sm border-b border-outline-variant pb-xs">
                <span className="text-outline">{item}</span>
                <span className="text-primary">Used in builds</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>

      <VisualPlaceholder
        icon="device_hub"
        title="Core System Connectivity"
        accent="primary"
        className="mt-xl rounded-xl"
      />
    </main>
  );
}

