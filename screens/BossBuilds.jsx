import { Link } from "react-router-dom";
import { projects } from "../data/portfolioData";
import { GlassCard, Icon, PrimaryButton, SectionHeader, Tag, VisualPlaceholder, accentClasses } from "../components/UI";

export default function BossBuilds() {
  const featured = projects.find((project) => project.featured) || projects[0];
  const others = projects.filter((project) => project.slug !== featured.slug);

  return (
    <main className="page-shell">
      <SectionHeader
        eyebrow="Boss-Level Builds"
        title="Project Missions"
        description="A bento-style archive of real builds, prototypes, AI systems, mobile apps, and full-stack products."
        icon="rocket_launch"
      />

      <div className="mb-lg flex flex-wrap items-center gap-sm">
        {["ALL_SYSTEMS", "AI", "FULL-STACK", "MOBILE", "HEALTHCARE", "FINTECH"].map((filter, index) => (
          <button
            key={filter}
            className={`label-caps rounded-sm px-md py-xs transition ${
              index === 0
                ? "bg-primary text-on-primary"
                : "border border-outline-variant bg-surface-container-high text-on-surface-variant hover:border-secondary"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-md md:grid-cols-12">
        <GlassCard className="md:col-span-8 p-md">
          <div className="flex flex-col gap-md">
            <div className="flex flex-col justify-between gap-sm md:flex-row">
              <div>
                <p className="label-caps mb-xs text-tertiary">{featured.category}</p>
                <h2 className="font-display text-3xl font-semibold">{featured.title}</h2>
              </div>
              <div className="font-mono text-xs uppercase md:text-right">
                <p className="text-primary">STATUS: {featured.status}</p>
                <p className="text-on-surface-variant">LVL: {featured.level}</p>
              </div>
            </div>

            <div className="grid gap-md md:grid-cols-2">
              <div>
                <p className="mb-sm rounded-sm border border-outline-variant/30 bg-surface-container-lowest/50 p-sm text-on-surface-variant">
                  {featured.description}
                </p>
                <div className="mb-md flex flex-wrap gap-xs">
                  {featured.tags.map((tag) => <Tag key={tag} accent={featured.accent}>{tag}</Tag>)}
                </div>
                <div className="space-y-xs font-mono text-xs">
                  <div className="flex justify-between"><span className="text-on-surface-variant">ROLE</span><span>{featured.role}</span></div>
                  <div className="flex justify-between"><span className="text-on-surface-variant">COMPUTATIONAL_LOAD</span><span>HIGH_DENSITY</span></div>
                </div>
              </div>

              <VisualPlaceholder icon="dashboard" title={`${featured.title} VISUAL NODE`} accent={featured.accent} className="rounded-lg" />
            </div>

            <div className="flex flex-wrap gap-sm">
              <PrimaryButton to="/case-studies/pregen-ai-lms" icon="visibility">Case Study</PrimaryButton>
              <PrimaryButton href="#" icon="terminal" variant="outline">Core GitHub</PrimaryButton>
            </div>
          </div>
        </GlassCard>

        {others.map((project, index) => {
          const ac = accentClasses(project.accent);
          const colClass = index === 0 ? "md:col-span-4" : "md:col-span-6";
          return (
            <GlassCard key={project.slug} className={`${colClass} p-md`}>
              <div className="mb-sm flex items-center justify-between">
                <Icon name={project.accent === "tertiary" ? "monitoring" : "deployed_code"} className={`text-3xl ${ac.text}`} />
                <span className="font-mono text-[10px] uppercase text-on-surface-variant">{project.status}</span>
              </div>
              <p className="label-caps mb-xs text-on-surface-variant">{project.category}</p>
              <h3 className="mb-sm font-display text-2xl font-semibold">{project.title}</h3>
              <p className="mb-md text-sm leading-relaxed text-on-surface-variant">{project.description}</p>
              <div className="mb-md flex flex-wrap gap-xs">
                {project.tags.slice(0, 4).map((tag) => <Tag key={tag} accent={project.accent}>{tag}</Tag>)}
              </div>
              <Link to="/case-studies/pregen-ai-lms" className="label-caps text-secondary hover:text-primary">
                View Mission
              </Link>
            </GlassCard>
          );
        })}
      </div>
    </main>
  );
}
