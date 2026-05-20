import { capabilities, identity } from "../data/portfolioData";
import { GlassCard, Icon, PrimaryButton, SectionHeader, Tag, VisualPlaceholder } from "../components/UI";

export default function BootHero() {
  return (
    <main>
      <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden px-5 py-20 md:px-8">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-cyan-500/10" />
          <div className="absolute inset-0 hud-grid opacity-30" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-col justify-center gap-8 lg:col-span-7">
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-primary/20 bg-surface-container-low px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-sm uppercase tracking-[0.1em] text-primary">
                Available for selected opportunities
              </span>
            </div>

            <div>
              <h2 className="mb-4 font-display text-2xl font-semibold uppercase tracking-widest text-primary/80">
                {identity.name}
              </h2>
              <h1 className="font-display text-5xl font-semibold leading-tight tracking-tight text-on-background lg:text-7xl">
                {identity.subtitle.replace("AI-powered", "")}
                <span className="italic text-primary">AI-powered</span> products from idea to production.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
                {identity.summary}
              </p>
            </div>

            <div className="border-l-4 border-primary bg-surface-container-lowest p-4 font-mono text-lg text-primary">
              <span className="opacity-50">&gt;</span> whoami:{" "}
              <span className="text-on-background">{identity.title}</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <PrimaryButton to="/missions" icon="rocket_launch">Start Mission</PrimaryButton>
              <PrimaryButton to="/builds" icon="visibility" variant="outline">View Case Studies</PrimaryButton>
              <PrimaryButton to="/contact" icon="alternate_email" variant="outline">Contact</PrimaryButton>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:col-span-5">
            <div className="relative aspect-square w-full max-w-[500px]">
              <div className="absolute inset-0 rounded-full border-[12px] border-surface-container-highest p-4">
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-primary/30 bg-surface-container">
                  <VisualPlaceholder icon="face" title="AI ENGINEER PROFILE NODE" accent="primary" className="h-full w-full rounded-full border-0" />
                </div>
                <div className="absolute -inset-8 animate-[spin_60s_linear_infinite] rounded-full border border-dashed border-primary/20" />
                <div className="absolute -inset-12 animate-[spin_100s_linear_infinite_reverse] rounded-full border-2 border-cyan-500/10" />
              </div>

              <GlassCard className="absolute -right-1 top-2 max-w-[190px] p-sm shadow-2xl" hover={false}>
                <div className="mb-xs flex items-center gap-xs text-primary">
                  <Icon name="memory" className="text-sm" />
                  <span className="font-mono text-[10px] uppercase">Neural Net</span>
                </div>
                <h4 className="mb-xs font-display text-sm font-semibold">AI Systems</h4>
                <div className="h-1 w-full overflow-hidden rounded-full bg-surface-container">
                  <div className="h-full w-4/5 bg-primary" />
                </div>
              </GlassCard>

              <GlassCard className="absolute -left-4 bottom-12 border-l-4 border-tertiary p-sm shadow-2xl md:-left-12" hover={false}>
                <div className="mb-xs flex items-center gap-xs text-tertiary">
                  <Icon name="layers" className="text-sm" />
                  <span className="font-mono text-[10px] uppercase">Core Architect</span>
                </div>
                <h4 className="font-display text-sm font-semibold">Full-Stack Core</h4>
                <p className="text-[10px] text-on-surface-variant">React // FastAPI // Flutter</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell">
        <SectionHeader
          eyebrow="Capability Bento"
          title="System Capabilities"
          description="A fast overview of the portfolio’s core engineering modes."
          icon="hub"
        />
        <div className="grid grid-cols-1 gap-md md:grid-cols-3">
          {capabilities.map((capability, index) => (
            <GlassCard
              key={capability.title}
              className={`p-md ${index === 0 ? "md:col-span-2" : ""} ${capability.accent === "secondary" ? "border-l-4 border-secondary" : ""} ${capability.accent === "tertiary" ? "border-l-4 border-tertiary" : ""}`}
            >
              <div className="mb-sm flex items-center justify-between">
                <span className="label-caps text-primary">{capability.protocol}</span>
                <Icon name={capability.icon} className={`text-4xl text-${capability.accent}`} />
              </div>
              <h3 className="mb-xs font-display text-2xl font-semibold">{capability.title}</h3>
              <p className="text-on-surface-variant">{capability.description}</p>
              <div className="mt-sm flex flex-wrap gap-xs">
                <Tag accent={capability.accent}>Production</Tag>
                <Tag accent="secondary">AI Ready</Tag>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </main>
  );
}
