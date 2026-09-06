import { skillGroups } from "../data/portfolioData";
import { GlassCard, Icon, SectionHeader, Tag, accentClasses } from "../components/UI";
import useDocumentMeta from "../hooks/useDocumentMeta";

const levelColors = {
  Advanced: "text-primary border-primary",
  Strong: "text-secondary border-secondary",
  "Working Knowledge": "text-tertiary border-tertiary",
  Learning: "text-outline border-outline"
};

export default function SkillTree() {
  useDocumentMeta({
    title: "Technical Capabilities — AI, Computer Vision & Full-Stack",
    description:
      "AI systems, computer vision, full-stack engineering, data infrastructure, and DevOps capabilities behind Mohamed Boghdaddy's products.",
    path: "/skills"
  });

  return (
    <main className="page-shell">
      <SectionHeader
        eyebrow="Technical Profile"
        title="Skills"
        description="Grouped by area with honest confidence levels — each tied to real project work."
        icon="hub"
      />

      <div className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const ac = accentClasses[group.accent];
          return (
            <GlassCard key={group.group} className={`border-l-4 ${ac.borderLeft} p-md`} accent={group.accent}>
              <div className="mb-sm flex items-center gap-sm">
                <Icon name={group.icon} className={`text-3xl ${ac.text}`} fill />
                <h2 className={`font-display text-xl font-semibold ${ac.text}`}>{group.group}</h2>
              </div>

              <div className="mb-md space-y-xs">
                {group.nodes.map((node) => {
                  const levelStyle = levelColors[node.level] || "text-outline border-outline";
                  return (
                    <div key={node.name} className="flex items-center justify-between gap-sm rounded bg-surface-container-low px-sm py-xs">
                      <span className="text-sm font-medium text-on-surface">{node.name}</span>
                      <span className={`border px-xs py-0.5 font-mono text-[10px] uppercase ${levelStyle}`}>
                        {node.level}
                      </span>
                    </div>
                  );
                })}
              </div>

              {group.relatedProjects && (
                <div className="border-t border-outline-variant/20 pt-sm">
                  <p className="mb-xs font-mono text-[10px] uppercase text-outline">Related projects</p>
                  <div className="flex flex-wrap gap-xs">
                    {group.relatedProjects.map((proj) => (
                      <Tag key={proj} accent={group.accent}>{proj}</Tag>
                    ))}
                  </div>
                </div>
              )}
            </GlassCard>
          );
        })}
      </div>

      <div className="mt-xl">
        <GlassCard className="p-md" accent="secondary">
          <h3 className="mb-sm font-display text-xl font-semibold text-secondary">Confidence Scale</h3>
          <div className="grid grid-cols-2 gap-sm md:grid-cols-4">
            {[
              ["Advanced", "Production-level. Used across multiple shipped builds.", "text-primary border-primary"],
              ["Strong", "Solid working knowledge. Used in real projects.", "text-secondary border-secondary"],
              ["Working Knowledge", "Comfortable using it. Deeper learning ongoing.", "text-tertiary border-tertiary"],
              ["Learning", "Actively building familiarity.", "text-outline border-outline"]
            ].map(([level, desc, style]) => (
              <div key={level} className="rounded border border-outline-variant/20 bg-surface-container-low p-sm">
                <span className={`mb-xs block border px-xs py-0.5 font-mono text-[10px] uppercase w-fit ${style}`}>
                  {level}
                </span>
                <p className="text-xs text-on-surface-variant">{desc}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </main>
  );
}
