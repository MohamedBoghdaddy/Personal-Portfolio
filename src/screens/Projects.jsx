import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { allProjects, mainProjects, earlierBuilds, projectFilters } from "../data/projectsData";
import { Button, GlassCard, SectionHeader, Tag, accentClasses } from "../components/UI";
import useDocumentMeta from "../hooks/useDocumentMeta";

function projectMatchesFilter(project, filter) {
  if (filter === "All") return true;
  if (filter === "Earlier Builds") return project.earlierBuild === true;
  return project.filterTags?.some((t) => t === filter);
}

function ProjectImage({ src, alt, title, className = "" }) {
  if (!src) {
    const initials = (title || alt)
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
    return (
      <div className={`flex items-center justify-center bg-surface-container-high ${className}`} role="img" aria-label={alt}>
        <span className="font-display text-4xl font-bold text-primary/40" aria-hidden="true">{initials}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${className}`}
    />
  );
}

function imageAlt(project) {
  return `${project.title} — ${project.descriptor || project.category} interface`;
}

function ProjectCard({ project, wide = false }) {
  const ac = accentClasses[project.accent] || accentClasses.primary;
  return (
    <GlassCard
      className={`group flex flex-col overflow-hidden ${wide ? "md:col-span-6" : "md:col-span-4"}`}
      accent={project.accent}
    >
      <div className="relative aspect-video overflow-hidden bg-surface-container-high">
        <ProjectImage src={project.image} alt={imageAlt(project)} title={project.title} />
        <div className="absolute right-2 top-2">
          <span className="rounded-full bg-surface/80 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-on-surface backdrop-blur-sm">
            {project.status}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-md">
        <p className={`label-caps mb-xs ${ac.text}`}>{project.category}</p>
        <h3 className="font-display text-xl font-semibold">{project.title}</h3>
        {project.descriptor && (
          <p className="font-mono text-xs uppercase tracking-wide text-on-surface-variant">{project.descriptor}</p>
        )}
        <p className="mb-xs mt-xs font-mono text-[10px] uppercase text-outline">Role: {project.role}</p>
        <p className="mb-sm flex-1 text-sm leading-relaxed text-on-surface-variant">{project.description}</p>

        <div className="mb-sm flex flex-wrap gap-xs">
          {(project.tech ?? []).slice(0, 4).map((t) => <Tag key={t} accent={project.accent}>{t}</Tag>)}
          {(project.tech ?? []).length > 4 && (
            <span className="font-mono text-[10px] text-outline">+{project.tech.length - 4} more</span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-xs">
          {project.caseStudy && (
            <Link
              to={`/projects/${project.slug}`}
              className={`focus-ring label-caps border px-sm py-xs transition hover:bg-primary/10 ${ac.text} ${ac.border}`}
            >
              Case Study
            </Link>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring label-caps border border-outline-variant px-sm py-xs text-on-surface-variant transition hover:border-secondary hover:text-secondary"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring label-caps border border-outline-variant px-sm py-xs text-on-surface-variant transition hover:border-primary hover:text-primary"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

function FeaturedCard({ project }) {
  const ac = accentClasses[project.accent] || accentClasses.primary;
  return (
    <GlassCard
      className={`group md:col-span-8 overflow-hidden border-l-4 ${ac.borderLeft}`}
      accent={project.accent}
    >
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-video overflow-hidden bg-surface-container-high md:aspect-auto">
          <ProjectImage src={project.image} alt={imageAlt(project)} title={project.title} />
        </div>
        <div className="flex flex-col justify-between p-md">
          <div>
            <div className="mb-sm flex items-center justify-between">
              <p className={`label-caps ${ac.text}`}>{project.category}</p>
              <span className="font-mono text-[10px] uppercase text-outline">{project.status}</span>
            </div>
            <h2 className="font-display text-3xl font-semibold">{project.title}</h2>
            {project.descriptor && (
              <p className="mb-xs font-mono text-xs uppercase tracking-wide text-on-surface-variant">{project.descriptor}</p>
            )}
            <p className="mb-xs mt-xs font-mono text-[10px] uppercase text-outline">Role: {project.role}</p>
            <p className="mb-sm text-sm leading-relaxed text-on-surface-variant">{project.description}</p>
            <div className="mb-sm flex flex-wrap gap-xs">
              {project.tech.slice(0, 5).map((t) => <Tag key={t} accent={project.accent}>{t}</Tag>)}
            </div>
          </div>
          <div className="flex flex-wrap gap-sm">
            {project.caseStudy && (
              <Button to={`/projects/${project.slug}`} icon="visibility">Case Study</Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} icon="code" variant="secondary">GitHub</Button>
            )}
            {project.liveUrl && (
              <Button href={project.liveUrl} icon="open_in_new" variant="ghost">Live Demo</Button>
            )}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function TierDivider({ title }) {
  return (
    <div className="mb-lg mt-2xl flex items-center gap-md">
      <div className="flex-1 border-t border-outline-variant/30" />
      <h2 className="font-display text-2xl font-semibold text-on-surface-variant">{title}</h2>
      <div className="flex-1 border-t border-outline-variant/30" />
    </div>
  );
}

export default function Builds() {
  useDocumentMeta({
    title: "Products & Projects — AI, Computer Vision & Full-Stack Engineering",
    description:
      "PartIQ, HunterFlow, Kiwi, and other AI products built by Mohamed Boghdaddy — computer vision, LLM systems, and full-stack platforms.",
    path: "/projects"
  });

  const [activeFilter, setActiveFilter] = useState("All");

  const visibleMain = useMemo(
    () => mainProjects.filter((p) => projectMatchesFilter(p, activeFilter)),
    [activeFilter]
  );
  const visibleEarlier = useMemo(
    () => earlierBuilds.filter((p) => projectMatchesFilter(p, activeFilter)),
    [activeFilter]
  );

  const flagship = visibleMain.filter((p) => p.tier === "flagship");
  const infrastructure = visibleMain.filter((p) => p.tier === "infrastructure");
  const applied = visibleMain.filter((p) => p.tier === "applied");
  const engineering = visibleMain.filter((p) => !["flagship", "infrastructure", "applied"].includes(p.tier));

  const heroProject = flagship.find((p) => p.featured) || flagship[0];
  const flagshipRest = flagship.filter((p) => p.slug !== heroProject?.slug);

  const showEarlier = activeFilter === "All" || activeFilter === "Earlier Builds" || visibleEarlier.length > 0;

  return (
    <main className="page-shell">
      <SectionHeader
        eyebrow="Portfolio"
        title="Products & Projects"
        description="Ordered by commercial and strategic importance — flagship products first, followed by infrastructure, applied builds, and earlier engineering work."
        icon="grid_view"
      />

      {/* Filter tabs */}
      <div className="mb-lg flex flex-wrap items-center gap-xs" aria-label="Project filters">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            className={`focus-ring label-caps px-sm py-xs transition ${
              activeFilter === filter
                ? "bg-primary text-on-primary"
                : "border border-outline-variant bg-surface-container-high text-on-surface-variant hover:border-primary/40 hover:text-primary"
            }`}
            type="button"
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Tier 1 — Featured Products */}
      {flagship.length > 0 && (
        <>
          <h2 className="sr-only">Featured Products</h2>
          <div className="grid grid-cols-1 gap-md md:grid-cols-12">
            {heroProject && <FeaturedCard project={heroProject} />}
            {/* sidebar stat card */}
            <GlassCard className="flex flex-col justify-between p-md md:col-span-4" accent="primary">
              <div>
                <p className="label-caps mb-sm text-primary">Build Profile</p>
                <div className="space-y-sm">
                  {[
                    ["Total Projects", allProjects.length.toString()],
                    ["Live / Deployed", allProjects.filter((p) => p.liveUrl).length.toString()],
                    ["Open Source", allProjects.filter((p) => p.githubUrl).length.toString()],
                    ["Active Builds", mainProjects.filter((p) => p.status.toLowerCase().includes("active")).length.toString()]
                  ].map(([label, val]) => (
                    <div key={label} className="flex items-center justify-between border-b border-outline-variant/20 pb-xs">
                      <span className="font-mono text-xs text-outline">{label}</span>
                      <span className="font-display text-xl font-semibold text-primary">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button to="/contact" icon="alternate_email" className="mt-md w-full">
                Start a Project
              </Button>
            </GlassCard>

            {flagshipRest.map((project) => (
              <ProjectCard key={project.slug} project={project} wide />
            ))}
          </div>
        </>
      )}

      {visibleMain.length === 0 && (
        <p className="py-xl text-center text-on-surface-variant">No projects match this filter.</p>
      )}

      {/* Tier 2 — Infrastructure & Commerce */}
      {infrastructure.length > 0 && (
        <div>
          <TierDivider title="Infrastructure & Commerce" />
          <div className="grid grid-cols-1 gap-md md:grid-cols-12">
            {infrastructure.map((project) => (
              <ProjectCard key={project.slug} project={project} wide />
            ))}
          </div>
        </div>
      )}

      {/* Tier 3 — Applied Intelligence */}
      {applied.length > 0 && (
        <div>
          <TierDivider title="Applied Intelligence" />
          <div className="grid grid-cols-1 gap-md md:grid-cols-12">
            {applied.map((project) => (
              <ProjectCard key={project.slug} project={project} wide />
            ))}
          </div>
        </div>
      )}

      {/* Tier 4 — Additional Engineering Work */}
      {engineering.length > 0 && (
        <div>
          <TierDivider title="Additional Engineering Work" />
          <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3">
            {engineering.map((project) => (
              <EarlierCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Earlier Builds */}
      {showEarlier && visibleEarlier.length > 0 && (
        <div>
          <TierDivider title="Early & Experimental Work" />
          <p className="mb-lg text-center text-sm text-outline">
            Internship work, research builds, ML experiments, and earlier full-stack projects.
          </p>
          <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3">
            {visibleEarlier.map((project) => (
              <EarlierCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

function EarlierCard({ project }) {
  const ac = accentClasses[project.accent] || accentClasses.primary;
  return (
    <GlassCard className="group flex flex-col overflow-hidden" accent={project.accent}>
      <div className="relative h-36 overflow-hidden bg-surface-container-high">
        <ProjectImage src={project.image} alt={imageAlt(project)} title={project.title} />
      </div>
      <div className="flex flex-1 flex-col p-sm">
        <p className={`label-caps mb-xs text-[9px] ${ac.text}`}>{project.category}</p>
        <h3 className="mb-xs font-display text-base font-semibold">{project.title}</h3>
        <p className="mb-sm flex-1 text-xs leading-relaxed text-on-surface-variant line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-xs">
          {project.caseStudy && (
            <Link
              to={`/projects/${project.slug}`}
              className={`focus-ring label-caps text-[9px] border px-xs py-0.5 transition hover:bg-surface-container-high ${ac.text} ${ac.border}`}
            >
              Case Study
            </Link>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`focus-ring label-caps text-[9px] border px-xs py-0.5 transition hover:bg-surface-container-high ${ac.text} ${ac.border}`}
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring label-caps text-[9px] border border-primary/30 px-xs py-0.5 text-primary transition hover:bg-primary/10"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
