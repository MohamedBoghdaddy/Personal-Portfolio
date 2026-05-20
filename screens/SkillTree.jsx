import { skills } from "../data/portfolioData";
import { GlassCard, Icon, ProgressBar, SectionHeader, VisualPlaceholder } from "../components/UI";

export default function SkillTree() {
  return (
    <main className="page-shell">
      <SectionHeader
        eyebrow="System Capabilities"
        title="Skill Tree"
        description="Grouped technical capabilities with a game-like HUD view. Replace percentages with your real confidence levels before publishing."
        icon="hub"
      />

      <div className="grid grid-cols-1 gap-md lg:grid-cols-3">
        {skills.map((group) => (
          <section key={group.group}>
            <div className="mb-sm flex items-center gap-sm">
              <Icon name={group.icon} className={`text-3xl text-${group.accent}`} fill />
              <h2 className={`font-display text-2xl font-semibold text-${group.accent}`}>{group.group}</h2>
            </div>
            <div className="space-y-sm">
              {group.nodes.map((node) => (
                <GlassCard key={node.name} className={`border-l-2 border-${group.accent} p-sm`}>
                  <div className="mb-sm flex items-start justify-between">
                    <span className="label-caps text-on-surface">{node.name}</span>
                    <span className={`border border-${group.accent}/30 px-xs py-0.5 font-mono text-[10px] uppercase text-${group.accent}`}>
                      {node.level}
                    </span>
                  </div>
                  <ProgressBar value={node.value} accent={group.accent} />
                </GlassCard>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-xl grid grid-cols-1 gap-md md:grid-cols-2">
        <GlassCard className="p-lg">
          <div className="absolute right-4 top-4 opacity-10">
            <Icon name="cloud" className="text-[120px]" />
          </div>
          <h3 className="mb-md flex items-center gap-xs font-display text-2xl font-semibold text-error">
            <Icon name="settings_suggest" />
            DevOps
          </h3>
          <div className="grid grid-cols-2 gap-sm">
            {[
              ["DOCKER", "82%"],
              ["CI/CD", "76%"],
              ["POSTMAN", "90%"],
              ["BROWSER_QA", "88%"]
            ].map(([label, value]) => (
              <div key={label} className="border border-outline-variant bg-surface-container-low p-sm">
                <p className="label-caps mb-xs text-outline">{label}</p>
                <p className="font-display text-2xl font-semibold text-on-surface">{value}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-lg">
          <div className="absolute right-4 top-4 opacity-10">
            <Icon name="architecture" className="text-[120px]" />
          </div>
          <h3 className="mb-md flex items-center gap-xs font-display text-2xl font-semibold">
            <Icon name="draw" />
            Product Engineering
          </h3>
          <ul className="space-y-sm font-mono text-sm">
            {["MVP Design", "User Flows", "Prompt Specs", "Architecture Reviews"].map((item) => (
              <li key={item} className="flex justify-between border-b border-outline-variant pb-xs">
                <span className="text-outline">{item}</span>
                <span className="text-primary-fixed-dim">COMPLETED</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>

      <VisualPlaceholder
        icon="device_hub"
        title="CORE SYSTEM CONNECTIVITY"
        accent="primary"
        className="mt-xl rounded-xl"
      />
    </main>
  );
}
