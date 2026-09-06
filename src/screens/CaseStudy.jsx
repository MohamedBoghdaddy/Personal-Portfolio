import { Navigate, useParams } from "react-router-dom";
import { allProjects } from "../data/projectsData";
import { Button, GlassCard, Icon, SectionHeader, Tag, accentClasses } from "../components/UI";
import useDocumentMeta, { SITE_URL } from "../hooks/useDocumentMeta";

function fallbackCaseStudy(project) {
  return {
    duration: "Project cycle",
    status: project.status,
    summary:
      "Turn the product idea into a usable build with clear flows, reliable data handling, and a maintainable technical shape.",
    problemSpace: [
      `${project.title} needed a clear product story beyond a static demo.`,
      "The interface needed practical states for loading, empty data, errors, and review.",
      "The architecture needed to stay understandable for future iteration."
    ],
    architecture: [
      { title: "Input Layer", detail: "User actions, product data, and role-specific flows." },
      { title: "System Core", detail: "Business logic, backend or AI services, and storage decisions." },
      { title: "Experience Layer", detail: "Responsive UI, feedback states, and case-study-ready presentation." }
    ],
    features: [
      "Reusable UI and data structures.",
      "Responsive interface with accessible controls.",
      "QA-minded copy, validation, and navigation states."
    ],
    outcomes: [
      "A clearer product artifact for portfolio review.",
      "A maintainable foundation for future iterations.",
      "A reusable case-study shape for similar builds."
    ],
    role: [
      "Translated requirements into product flows.",
      "Implemented the UI and integration shape.",
      "Reviewed usability, responsiveness, and edge cases."
    ],
    challenges: [
      {
        title: "Keeping the work honest and specific",
        resolution:
          "I used qualitative status labels and project evidence instead of unsupported performance claims."
      }
    ]
  };
}

function ActionLink({ url, label, icon, variant = "secondary" }) {
  if (!url) return null;
  return (
    <Button href={url} icon={icon} variant={variant}>
      {label}
    </Button>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const project = allProjects.find((item) => item.slug === slug);

  const caseStudy = project ? project.caseStudy || fallbackCaseStudy(project) : null;

  useDocumentMeta({
    title: project ? `${project.title} — ${project.descriptor || project.category}` : "Case Study",
    description: project ? project.description : undefined,
    path: project ? `/projects/${project.slug}` : "/projects",
    jsonLd: project
      ? {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: project.title,
          description: project.description,
          applicationCategory: project.category,
          url: `${SITE_URL}/projects/${project.slug}`,
          ...(project.githubUrl ? { sameAs: [project.githubUrl] } : {}),
          author: { "@type": "Person", name: "Mohamed Boghdaddy" }
        }
      : null
  });

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const ac = accentClasses[project.accent];
  const relatedProject = allProjects.find((p) => p.tier === project.tier && p.slug !== project.slug && p.tier);

  return (
    <main className="page-shell">
      <section className="mb-xl">
        <GlassCard className={`flex flex-col items-center gap-lg overflow-hidden rounded-xl p-lg md:flex-row border-l-4 ${ac.borderLeft}`} accent={project.accent}>
          <div className="z-10 flex-1">
            <div className="mb-md flex flex-wrap items-center gap-sm">
              <Tag accent={project.accent}>{project.category}</Tag>
              <Tag accent="primary">{project.status}</Tag>
            </div>
            <h1 className="font-display text-4xl font-semibold uppercase tracking-tight md:text-5xl">
              {project.title}
            </h1>
            {project.descriptor && (
              <p className="mb-sm mt-xs font-mono text-sm uppercase tracking-wide text-on-surface-variant">{project.descriptor}</p>
            )}
            <p className="mb-md max-w-2xl text-lg leading-relaxed text-on-surface-variant">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-sm">
              <ActionLink url={project.githubUrl} label="GitHub" icon="code" variant="primary" />
              <ActionLink url={project.liveUrl} label="Live Demo" icon="open_in_new" />
            </div>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-surface-container-high md:w-2/5">
            {project.image ? (
              <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-display text-5xl font-bold text-primary/30">
                  {project.title.split(" ").slice(0,2).map(w => w[0]).join("")}
                </span>
              </div>
            )}
          </div>
        </GlassCard>
      </section>

      <section className="mb-xl grid grid-cols-1 gap-md md:grid-cols-12">
        <GlassCard className="flex flex-col justify-between p-md md:col-span-4" accent={project.accent}>
          <div>
            <h2 className="mb-sm flex items-center gap-xs font-display text-2xl font-semibold uppercase">
              <Icon name="info" className={ac.text} />
              Project Summary
            </h2>
            <p className="text-on-surface-variant">{caseStudy.summary}</p>
          </div>
          <div className="mt-md grid grid-cols-2 gap-sm border-t border-outline-variant pt-md">
            <div>
              <span className={`mb-xs block font-mono text-sm uppercase ${ac.text}`}>Duration</span>
              <span className="font-display text-xl font-semibold">{caseStudy.duration}</span>
            </div>
            <div>
              <span className={`mb-xs block font-mono text-sm uppercase ${ac.text}`}>Status</span>
              <span className="font-display text-xl font-semibold">{caseStudy.status}</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard className={`p-md md:col-span-8 border-l-2 ${ac.borderLeft}`} accent={project.accent}>
          <h2 className="mb-md flex items-center gap-xs font-display text-2xl font-semibold uppercase">
            <Icon name="report_problem" className={ac.text} />
            The Problem
          </h2>
          <div className="space-y-sm text-on-surface-variant">
            {caseStudy.problemSpace.map((problem, i) => (
              <div key={i} className="flex gap-sm">
                <Icon name="close" className="mt-1 text-sm text-error" />
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      <section className="mb-xl">
        <h2 className="mb-md text-center font-display text-3xl font-semibold uppercase">Architecture</h2>
        <GlassCard className="rounded-xl p-1" accent={project.accent}>
          <div className="grid grid-cols-1 gap-lg rounded-lg bg-surface-container-low p-lg text-center md:grid-cols-3">
            {caseStudy.architecture.map((layer, index) => (
              <div key={layer.title} className="flex flex-col items-center gap-sm">
                <div className={`flex h-20 w-20 items-center justify-center border-2 ${index === 1 ? "rounded-lg border-primary bg-primary/5 shadow-glow" : "rounded-full border-secondary"}`}>
                  <Icon name={index === 0 ? "data_object" : index === 1 ? "smart_toy" : "display_settings"} className={`text-4xl ${index === 1 ? "text-primary" : "text-secondary"}`} />
                </div>
                <h4 className="font-display text-lg font-semibold uppercase">{layer.title}</h4>
                <p className="font-mono text-xs text-on-surface-variant">{layer.detail}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      <section className="mb-xl grid grid-cols-1 gap-md md:grid-cols-4">
        {["Tech Stack", "Engineering Features", "Results / Outcomes", "My Role"].map((title, index) => {
          const lists = [project.tech || project.tags || [], caseStudy.features, caseStudy.outcomes, caseStudy.role];
          return (
            <GlassCard key={title} className="p-md" accent={project.accent}>
              <span className={`mb-sm block font-mono text-xs uppercase ${ac.text}`}>{title}</span>
              <div className="space-y-xs">
                {lists[index].map((item, i) => (
                  <div key={i} className="flex gap-xs text-sm text-on-surface-variant">
                    <Icon name="check_circle" className={`mt-0.5 text-sm ${ac.text}`} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          );
        })}
      </section>

      <section className="mb-xl grid grid-cols-1 gap-lg md:grid-cols-2">
        {caseStudy.challenges.map((challenge) => (
          <GlassCard key={challenge.title} className="border-l-4 border-l-error p-lg" accent="error">
            <h2 className="mb-md font-display text-2xl font-semibold uppercase">Critical Challenge</h2>
            <p className="mb-sm text-on-surface">{challenge.title}</p>
            <p className="bg-surface-container-low p-sm text-sm italic text-on-surface-variant">
              Resolution: {challenge.resolution}
            </p>
          </GlassCard>
        ))}

        <GlassCard className={`border-l-4 ${ac.borderLeft} p-lg`} accent={project.accent}>
          <h2 className="mb-md font-display text-2xl font-semibold uppercase">Work Together</h2>
          <p className="mb-md text-on-surface-variant">
            Want this kind of build discipline applied to your product? Let's talk.
          </p>
          <div className="flex flex-wrap gap-sm">
            <Button to="/contact" icon="alternate_email">Contact Me</Button>
            <Button to="/projects" icon="arrow_back" variant="secondary">Back to Projects</Button>
          </div>
        </GlassCard>
      </section>

      {relatedProject && (
        <section className="mb-xl">
          <p className="mb-sm label-caps text-on-surface-variant">Related Product</p>
          <GlassCard className={`flex flex-col items-start justify-between gap-sm border-l-4 p-md md:flex-row md:items-center ${accentClasses[relatedProject.accent]?.borderLeft}`} accent={relatedProject.accent}>
            <div>
              <p className={`label-caps ${accentClasses[relatedProject.accent]?.text}`}>{relatedProject.category}</p>
              <h3 className="font-display text-xl font-semibold">{relatedProject.title}</h3>
            </div>
            <Button to={`/projects/${relatedProject.slug}`} icon="arrow_forward" variant="secondary">
              View {relatedProject.title}
            </Button>
          </GlassCard>
        </section>
      )}

      <SectionHeader
        eyebrow="Data-Driven"
        title="Each Project Has Its Own Case Study"
        description="This layout is driven by project data — every project in the portfolio can have a full case study without duplicating markup."
        icon="data_object"
      />
    </main>
  );
}
