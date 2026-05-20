import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/portfolioData";
import { Button, GlassCard, Icon, SectionHeader, Tag, VisualPlaceholder, accentClasses } from "../components/UI";

const filters = ["All", "AI", "Full-Stack", "Mobile", "FinTech", "Healthcare"];

function projectMatchesFilter(project, filter) {
  if (filter === "All") {
    return true;
  }
  const haystack = `${project.category} ${project.tags.join(" ")}`.toUpperCase();
  return haystack.includes(filter.toUpperCase().replace("-", " "));
}

function LinkButton({ url, label, icon, variant = "secondary" }) {
  return (
    <Button href={url || undefined} icon={icon} variant={variant} disabled={!url}>
      {url ? label : `${label} TODO`}
    </Button>
  );
}

export default function Builds() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = useMemo(
    () => projects.filter((project) => projectMatchesFilter(project, activeFilter)),
    [activeFilter]
  );
  const featured = visibleProjects.find((project) => project.featured) || visibleProjects[0] || projects[0];
  const others = visibleProjects.filter((project) => project.slug !== featured.slug);

  return (
    <main className="page-shell">
      <SectionHeader
        eyebrow="Portfolio"
        title="My Projects"
        description="AI systems, mobile products, full-stack builds, research prototypes, and automation workflows — each with role, stack, and status."
        icon="grid_view"
      />

      <div className="mb-lg flex flex-wrap items-center gap-sm" aria-label="Project filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`focus-ring label-caps px-md py-xs transition ${
              activeFilter === filter
                ? "bg-primary text-on-primary"
                : "border border-outline-variant bg-surface-container-high text-on-surface-variant hover:border-secondary"
            }`}
            type="button"
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-md md:grid-cols-12">
        <ProjectFeature project={featured} />

        {others.map((project, index) => (
          <ProjectCard key={project.slug} project={project} wide={index % 3 !== 0} />
        ))}
      </div>
    </main>
  );
}

function ProjectFeature({ project }) {
  const ac = accentClasses[project.accent];

  return (
    <GlassCard className={`p-md md:col-span-8 border-l-4 ${ac.borderLeft}`} accent={project.accent}>
      <div className="flex flex-col gap-md">
        <div className="flex flex-col justify-between gap-sm md:flex-row">
          <div>
            <p className={`label-caps mb-xs ${ac.text}`}>{project.category}</p>
            <h2 className="font-display text-3xl font-semibold">{project.title}</h2>
          </div>
          <div className="font-mono text-xs uppercase md:text-right">
            <p className="text-primary">STATUS: {project.status}</p>
            <p className="text-on-surface-variant">ROLE: {project.role}</p>
          </div>
        </div>

        <div className="grid gap-md md:grid-cols-2">
          <div>
            <p className="mb-sm border border-outline-variant/30 bg-surface-container-lowest/50 p-sm text-on-surface-variant">
              {project.description}
            </p>
            <div className="mb-md flex flex-wrap gap-xs">
              {project.tags.map((tag) => <Tag key={tag} accent={project.accent}>{tag}</Tag>)}
            </div>
            <div className="space-y-xs font-mono text-xs">
              <div className="flex justify-between gap-sm"><span className="text-on-surface-variant">ROLE</span><span>{project.role}</span></div>
              <div className="flex justify-between gap-sm"><span className="text-on-surface-variant">BUILD_STATE</span><span>{project.status}</span></div>
            </div>
          </div>

          <VisualPlaceholder image={project.image} icon="dashboard" title={`${project.title} Visual Node`} accent={project.accent} className="rounded-lg" />
        </div>

        <div className="flex flex-wrap gap-sm">
          <Button to={`/case-studies/${project.slug}`} icon="visibility">Case Study</Button>
          <LinkButton url={project.links.github} label="GitHub" icon="code" />
          <LinkButton url={project.links.demo} label="Demo" icon="open_in_new" variant="ghost" />
        </div>
      </div>
    </GlassCard>
  );
}

function ProjectCard({ project, wide }) {
  const ac = accentClasses[project.accent];

  return (
    <GlassCard className={`${wide ? "md:col-span-6" : "md:col-span-4"} p-md`} accent={project.accent}>
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
      <div className="flex flex-wrap items-center gap-sm">
        <Link to={`/case-studies/${project.slug}`} className="focus-ring label-caps text-secondary hover:text-primary">
          Case Study →
        </Link>
        {!project.links.github && <span className="font-mono text-[10px] uppercase text-outline">GitHub TODO</span>}
      </div>
    </GlassCard>
  );
}

