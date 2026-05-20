import { achievements } from "../data/portfolioData";
import { GlassCard, Icon, PrimaryButton, SectionHeader, Tag, VisualPlaceholder } from "../components/UI";

export default function Achievements() {
  return (
    <main className="page-shell">
      <SectionHeader
        eyebrow="Proof Protocol"
        title="Unlocked Achievements"
        description="Validated milestones and technical deployments. Use this page to prove output, not just claim skills."
        icon="verified"
      />

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        {achievements.map((achievement, index) => (
          <GlassCard
            key={achievement.title}
            className={`p-md ${index === 0 ? "md:col-span-8" : index === 1 ? "md:col-span-4 border-l-2 border-tertiary" : "md:col-span-4"}`}
          >
            <div className="flex flex-col gap-sm md:flex-row md:items-start">
              <div className="w-fit rounded-xl border border-outline-variant bg-surface-container-highest p-sm">
                <Icon name={achievement.icon} className="text-4xl text-primary" fill={index === 0} />
              </div>
              <div>
                <p className="label-caps mb-xs text-secondary">{achievement.type}</p>
                <h3 className="mb-xs font-display text-2xl font-semibold">{achievement.title}</h3>
                <p className="mb-sm text-sm leading-relaxed text-on-surface-variant">{achievement.description}</p>
                <div className="flex flex-wrap gap-xs">
                  {achievement.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <section className="mt-xl grid grid-cols-1 items-center gap-lg md:grid-cols-2">
        <VisualPlaceholder icon="security" title="VALIDATION COMMAND CENTER" accent="secondary" className="aspect-video rounded-lg" />
        <div>
          <h2 className="mb-sm font-display text-3xl font-semibold uppercase">The Validation Protocol</h2>
          <p className="mb-md text-on-surface-variant">
            Every portfolio claim should map to a project, a file, a live screen, a repository, a demo, or a clear case-study section.
          </p>
          <ul className="mb-md space-y-sm">
            {["CODE_QUALITY_AUDIT: PASSED", "SCALABILITY_THINKING: ACTIVE", "AI_LOGIC_COHESION: OPTIMIZED"].map((item) => (
              <li key={item} className="flex items-center gap-sm font-mono text-sm text-on-surface">
                <Icon name="check_circle" className="text-sm text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <PrimaryButton to="/contact" icon="description" variant="outline">
            Request Architecture Docs
          </PrimaryButton>
        </div>
      </section>
    </main>
  );
}
