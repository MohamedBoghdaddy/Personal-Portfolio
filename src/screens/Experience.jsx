import { experiences } from "../data/portfolioData";
import { Button, GlassCard, Icon, SectionHeader, Tag } from "../components/UI";
import useDocumentMeta from "../hooks/useDocumentMeta";

function ExperienceCard({ exp, highlight = false }) {
  return (
    <div className="relative mb-xl pl-12 last:mb-0">
      <div className={`absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 border-background ${highlight ? "bg-primary shadow-[0_0_10px_rgb(var(--color-primary)/0.6)]" : "bg-outline-variant"}`} />
      <GlassCard className="p-md">
        <div className="mb-sm flex flex-col justify-between gap-xs md:flex-row md:items-center">
          <div>
            <span className={`mb-1 block font-mono text-xs uppercase tracking-widest ${highlight ? "text-primary" : "text-outline"}`}>
              {exp.status}
            </span>
            <h2 className={`font-display text-2xl font-bold uppercase tracking-wide md:text-3xl ${highlight ? "text-primary" : "text-on-background"}`}>
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring underline decoration-2 underline-offset-4 transition hover:opacity-80"
                >
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
            </h2>
            <p className="label-caps mt-0.5 text-on-surface-variant">{exp.role}</p>
          </div>
          <div className="md:text-right">
            <div className="font-mono text-sm text-outline">{exp.period}</div>
          </div>
        </div>

        <div className="mb-md space-y-sm">
          {exp.bullets.map((bullet) => (
            <div key={bullet} className="flex gap-sm">
              <Icon name="arrow_right" className="mt-1 text-sm text-primary" />
              <p className="text-on-surface-variant">{bullet}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-xs border-t border-outline-variant/10 pt-sm">
          {exp.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
      </GlassCard>
    </div>
  );
}

export default function Experience() {
  useDocumentMeta({
    title: "Experience — Founder, Technical Co-Founder & AI Engineer",
    description:
      "Mohamed Boghdaddy's experience as Founder of Gapsmania, Technical Co-Founder at Enara, and Full Stack AI Engineer at PreGen, plus earlier engineering roles.",
    path: "/experience"
  });

  const featured = experiences.filter((exp) => exp.tier === "featured");
  const earlier = experiences.filter((exp) => exp.tier !== "featured");

  return (
    <main className="page-shell">
      <SectionHeader
        eyebrow="Background"
        title="Work Experience"
        description="From founder and technical co-founder work to full-stack and AI engineering roles — product direction, architecture, and hands-on delivery."
        icon="work"
      />

      {featured.length > 0 && (
        <div className="relative ml-4 mt-xl border-l border-outline-variant/40 pb-md md:ml-12">
          {featured.map((exp) => (
            <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} highlight />
          ))}
        </div>
      )}

      {earlier.length > 0 && (
        <>
          <div className="mb-lg mt-2xl flex items-center gap-md">
            <div className="flex-1 border-t border-outline-variant/30" />
            <h2 className="font-display text-2xl font-semibold text-on-surface-variant">
              Earlier Engineering Experience
            </h2>
            <div className="flex-1 border-t border-outline-variant/30" />
          </div>
          <div className="relative ml-4 border-l border-outline-variant/40 pb-xl md:ml-12">
            {earlier.map((exp) => (
              <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} />
            ))}
          </div>
        </>
      )}

      <div className="grid grid-cols-1 gap-md md:grid-cols-3">
        {[
          ["hub", "Iterative", "Build process"],
          ["psychology", "AI-first", "Engineering mindset"],
          ["fact_check", "QA", "Release readiness"]
        ].map(([icon, value, label]) => (
          <GlassCard key={label} className="flex flex-col items-center justify-center p-md text-center">
            <Icon name={icon} className="mb-sm text-4xl text-primary" />
            <div className="font-display text-3xl font-semibold">{value}</div>
            <div className="label-caps mt-xs text-outline">{label}</div>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="mt-xl flex flex-col items-center gap-md p-lg text-center border-l-4 border-l-primary" accent="primary">
        <h2 className="font-display text-2xl font-semibold">Hiring, or have an opportunity?</h2>
        <p className="max-w-xl text-on-surface-variant">
          Open to founder-track roles, technical leadership, and hands-on AI / full-stack engineering work.
        </p>
        <div className="flex flex-wrap justify-center gap-sm">
          <Button to="/contact" icon="alternate_email">Contact Me</Button>
          <Button to="/projects" icon="grid_view" variant="secondary">See the Products</Button>
        </div>
      </GlassCard>
    </main>
  );
}
