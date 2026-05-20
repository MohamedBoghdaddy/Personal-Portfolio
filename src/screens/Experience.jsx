import { experiences } from "../data/portfolioData";
import { GlassCard, Icon, SectionHeader, Tag } from "../components/UI";

export default function Experience() {
  return (
    <main className="page-shell">
      <SectionHeader
        eyebrow="System Archive // Chronological Deployment History"
        title="Experience Logs"
        description="A chronological timeline for product work, project experience, technical growth, and QA-minded execution."
        icon="history"
      />

      <div className="relative ml-4 mt-xl border-l border-outline-variant/40 pb-xl md:ml-12">
        {experiences.map((exp, index) => (
          <div key={`${exp.company}-${exp.role}`} className="relative mb-xl pl-12 last:mb-0">
            <div className={`absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 border-background ${index === 0 ? "bg-primary shadow-[0_0_10px_rgb(var(--color-primary)/0.6)]" : "bg-outline-variant"}`} />
            <GlassCard className="p-md">
              <div className="mb-sm flex flex-col justify-between gap-xs md:flex-row md:items-center">
                <div>
                  <span className={`mb-1 block font-mono text-xs uppercase tracking-widest ${index === 0 ? "text-primary" : "text-outline"}`}>
                    Deployment: {exp.status}
                  </span>
                  <h2 className="font-display text-2xl font-semibold md:text-3xl">{exp.role}</h2>
                </div>
                <div className="md:text-right">
                  <div className="label-caps text-secondary">{exp.company}</div>
                  <div className="font-mono text-sm text-outline">{exp.period}</div>
                </div>
              </div>

              <div className="mb-md space-y-sm">
                {exp.bullets.map((bullet) => (
                  <div key={bullet} className="flex gap-sm">
                    <Icon name="double_arrow" className="mt-1 text-sm text-primary" />
                    <p className="text-on-surface-variant">{bullet}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-xs border-t border-outline-variant/10 pt-sm">
                {exp.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
              </div>
            </GlassCard>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-md md:grid-cols-3">
        {[
          ["hub", "Iterative", "Build process"],
          ["memory", "AI", "Systems practice"],
          ["cloud_done", "QA", "Release mindset"]
        ].map(([icon, value, label]) => (
          <GlassCard key={label} className="flex flex-col items-center justify-center p-md text-center">
            <Icon name={icon} className="mb-sm text-4xl text-primary" />
            <div className="font-display text-3xl font-semibold">{value}</div>
            <div className="label-caps mt-xs text-outline">{label}</div>
          </GlassCard>
        ))}
      </div>
    </main>
  );
}

