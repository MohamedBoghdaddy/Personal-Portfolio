import { Navigate, useParams } from "react-router-dom";
import { projects } from "../data/portfolioData";
import { Button, GlassCard, Icon, SectionHeader, Tag, VisualPlaceholder, accentClasses } from "../components/UI";

function fallbackCaseStudy(project) {
  return {
    duration: "Project cycle",
    status: project.status,
    missionBrief:
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
  return (
    <Button href={url || undefined} icon={icon} variant={variant} disabled={!url}>
      {url ? label : `${label} TODO`}
    </Button>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/builds" replace />;
  }

  const caseStudy = project.caseStudy || fallbackCaseStudy(project);
  const ac = accentClasses[project.accent];

  return (
    <main className="page-shell">
      <section className="mb-xl">
        <GlassCard className={`flex flex-col items-center gap-lg overflow-hidden rounded-xl p-lg md:flex-row border-l-4 ${ac.borderLeft}`} accent={project.accent}>
          <div className="z-10 flex-1">
            <div className="mb-md flex flex-wrap items-center gap-sm">
              <Tag accent={project.accent}>{project.category}</Tag>
              <Tag accent="primary">{project.status}</Tag>
            </div>
            <h1 className="mb-sm font-display text-4xl font-semibold uppercase tracking-tight md:text-5xl">
              {project.title}
            </h1>
            <p className="mb-md max-w-2xl text-lg leading-relaxed text-on-surface-variant">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-sm">
              <ActionLink url={project.links.github} label="GitHub Repository" icon="code" variant="primary" />
              <ActionLink url={project.links.demo} label="Live Demo" icon="rocket_launch" />
            </div>
          </div>
          <VisualPlaceholder image={project.image} icon="psychology" title={`${project.title} Dossier`} accent={project.accent} className="aspect-square w-full rounded-lg md:w-1/3" />
        </GlassCard>
      </section>

      <section className="mb-xl grid grid-cols-1 gap-md md:grid-cols-12">
        <GlassCard className="flex flex-col justify-between p-md md:col-span-4" accent={project.accent}>
          <div>
            <h2 className="mb-sm flex items-center gap-xs font-display text-2xl font-semibold uppercase">
              <Icon name="target" className={ac.text} />
              Mission Brief
            </h2>
            <p className="text-on-surface-variant">{caseStudy.missionBrief}</p>
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
            Problem Space
          </h2>
          <div className="space-y-sm text-on-surface-variant">
            {caseStudy.problemSpace.map((problem) => (
              <div key={problem} className="flex gap-sm">
                <Icon name="close" className="mt-1 text-sm text-error" />
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      <section className="mb-xl">
        <h2 className="mb-md text-center font-display text-3xl font-semibold uppercase">System Architecture</h2>
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
          const lists = [project.tags, caseStudy.features, caseStudy.outcomes, caseStudy.role];
          return (
            <GlassCard key={title} className="p-md" accent={project.accent}>
              <span className={`mb-sm block font-mono text-xs uppercase ${ac.text}`}>{title}</span>
              <div className="space-y-xs">
                {lists[index].map((item) => (
                  <div key={item} className="flex gap-xs text-sm text-on-surface-variant">
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
          <h2 className="mb-md font-display text-2xl font-semibold uppercase">Final CTA</h2>
          <p className="mb-md text-on-surface-variant">
            Want the same build discipline applied to your product, hiring review, or technical audit?
          </p>
          <div className="flex flex-wrap gap-sm">
            <Button to="/contact" icon="rocket_launch">Launch Mission</Button>
            <Button to="/builds" icon="arrow_back" variant="secondary">Back to Builds</Button>
          </div>
        </GlassCard>
      </section>

      <SectionHeader
        eyebrow="Reusable Dossier Template"
        title="Built to Scale Beyond One Project"
        description="This page is rendered from project data, so future projects can gain complete case studies without duplicating markup."
        icon="data_object"
      />
    </main>
  );
}
