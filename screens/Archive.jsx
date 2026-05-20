import { archiveItems } from "../data/portfolioData";
import { GlassCard, Icon, SectionHeader, Tag, VisualPlaceholder } from "../components/UI";

export default function Archive() {
  return (
    <main className="page-shell">
      <SectionHeader
        eyebrow="Early Builds / Archive"
        title="Early Builds"
        description="A chronological index of older builds, experiments, foundational logic tests, and legacy prototypes."
        icon="folder_zip"
      />

      <div className="grid grid-cols-1 items-start gap-md md:grid-cols-12">
        <section className="md:col-span-8">
          <div className="grid grid-cols-1 gap-sm sm:grid-cols-2">
            {archiveItems.map((item) => (
              <GlassCard key={item.title} className="p-md">
                <div className="mb-sm flex items-start justify-between">
                  <Icon name={item.icon} className="text-3xl text-secondary" />
                  <span className="font-mono text-xs text-outline">{item.version}</span>
                </div>
                <h3 className="mb-xs font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mb-md text-sm text-on-surface-variant">{item.description}</p>
                <div className="flex flex-wrap gap-xs">
                  {item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <aside className="space-y-md md:col-span-4">
          <GlassCard className="p-md">
            <div className="mb-sm flex items-center gap-xs">
              <Icon name="terminal" className="text-tertiary" fill />
              <h4 className="label-caps text-on-surface">Archive Statistics</h4>
            </div>
            <div className="space-y-sm">
              {[
                ["Total Artifacts", "14"],
                ["Latest Entry", "2026"],
                ["Status", "Cold Storage"]
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-outline-variant/10 pb-xs font-mono text-sm">
                  <span className="text-outline">{label}</span>
                  <span className={value === "Cold Storage" ? "text-primary" : "text-on-surface"}>{value}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="border-l-2 border-tertiary bg-tertiary/5 p-md">
            <h4 className="label-caps mb-xs text-tertiary">AI Note</h4>
            <p className="text-sm italic text-on-surface-variant">
              Early builds prove the foundation: logic, UI composition, algorithms, and willingness to ship small experiments before scaling.
            </p>
          </div>

          <VisualPlaceholder icon="folder_zip" title="DOWNLOAD FULL REPOSITORY" accent="primary" className="aspect-square" />
        </aside>
      </div>

      <section className="mt-xl border-t border-cyan-900/30 py-lg">
        <div className="mb-md flex items-center justify-between">
          <h2 className="font-display text-3xl font-semibold">System Dependencies</h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-outline">Network Integrity: 100%</span>
        </div>
        <div className="flex flex-wrap gap-sm opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0">
          {["Core_Engine", "Styling_Layer", "REST_Protocol", "Buffer_Logic"].map((dep) => (
            <div key={dep} className="flex items-center gap-xs border border-outline-variant/20 bg-surface-container-high px-sm py-xs">
              <Icon name="api" className="text-secondary" />
              <span className="font-mono text-xs uppercase tracking-widest">{dep}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
