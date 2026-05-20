import { Link, useParams } from "react-router-dom";
import { achievements, projects, skills } from "../data/portfolioData";
import { DataPanel, GlassCard, Icon, PrimaryButton, ProgressBar, SectionHeader, Tag } from "../components/UI";

const flowContent = {
  recruiter: {
    eyebrow: "Recruiter Path",
    title: "Career Signal Report",
    description:
      "A hiring-focused route showing role fit, project credibility, skills, experience, and proof points without forcing recruiters to dig.",
    icon: "badge",
    panels: [
      ["ROLE_FIT", "AI / Full-Stack Engineer"],
      ["STACK_CORE", "React · FastAPI · Flutter"],
      ["LOCATION", "Egypt / Remote"],
      ["STATUS", "Selective Opportunities"]
    ]
  },
  client: {
    eyebrow: "Founder / Client Path",
    title: "Product Execution Brief",
    description:
      "A client-focused route highlighting what can be built, how risk is reduced, and which previous products prove execution ability.",
    icon: "rocket_launch",
    panels: [
      ["OFFER", "AI MVPs + Full-Stack"],
      ["DELIVERY", "Architecture → Build → QA"],
      ["SPECIALTY", "LLM Product Systems"],
      ["STATUS", "Open for Selected Work"]
    ]
  },
  technical: {
    eyebrow: "Technical Reviewer Path",
    title: "Architecture Audit Mode",
    description:
      "A technical route for engineers, CTOs, and reviewers who want to inspect stack logic, design decisions, testing, and maintainability.",
    icon: "database",
    panels: [
      ["FRONTEND", "React / Flutter"],
      ["BACKEND", "FastAPI / Node"],
      ["DATABASE", "Firebase / SQL / NoSQL"],
      ["QUALITY", "Postman + Browser QA"]
    ]
  },
  "fast-scan": {
    eyebrow: "Fast Scan Mode",
    title: "60-Second Executive Brief",
    description:
      "A compressed proof route: who I am, what I build, strongest projects, stack, and contact CTA in one screen.",
    icon: "timer",
    panels: [
      ["WHO", "AI Product Builder"],
      ["TOP_BUILD", "CalorieLens"],
      ["STACK", "React · Flutter · FastAPI"],
      ["CTA", "Start Mission"]
    ]
  }
};

export default function FlowPage() {
  const { type = "fast-scan" } = useParams();
  const content = flowContent[type] || flowContent["fast-scan"];
  const topProjects = projects.slice(0, 3);

  return (
    <main className="page-shell">
      <SectionHeader {...content} />

      <div className="mb-lg grid grid-cols-2 gap-sm md:grid-cols-4">
        {content.panels.map(([label, value]) => (
          <DataPanel key={label} label={label} value={value} accent={type === "client" ? "tertiary" : "primary"} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-md lg:grid-cols-12">
        <GlassCard className="p-md lg:col-span-7">
          <div className="mb-md flex items-center gap-sm">
            <Icon name={content.icon} className="text-3xl text-primary" fill />
            <h2 className="font-display text-2xl font-semibold">Path Checklist</h2>
          </div>
          <div className="space-y-sm">
            {[
              "Clear role positioning and viewer-specific messaging.",
              "Project proof with stack, role, status, and business/technical value.",
              "Fast navigation to case studies, contact, skills, and experience.",
              "Reusable data-driven React screens instead of duplicated HTML."
            ].map((item) => (
              <div key={item} className="flex gap-sm border-b border-outline-variant/20 pb-sm">
                <Icon name="check_circle" className="mt-1 text-sm text-primary" />
                <p className="text-on-surface-variant">{item}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-md lg:col-span-5">
          <h3 className="mb-md font-display text-2xl font-semibold">Skill Signal</h3>
          <div className="space-y-md">
            {skills.flatMap((group) => group.nodes.slice(0, 1)).map((skill) => (
              <div key={skill.name}>
                <div className="mb-xs flex justify-between font-mono text-xs uppercase">
                  <span className="text-on-surface">{skill.name}</span>
                  <span className="text-primary">{skill.level}</span>
                </div>
                <ProgressBar value={skill.value} accent="primary" />
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <section className="mt-xl">
        <div className="mb-md flex items-end justify-between gap-sm">
          <div>
            <p className="label-caps text-secondary">Recommended Proof</p>
            <h2 className="font-display text-3xl font-semibold">Top Missions</h2>
          </div>
          <Link to="/builds" className="label-caps text-secondary hover:text-primary">View All</Link>
        </div>

        <div className="grid grid-cols-1 gap-md md:grid-cols-3">
          {topProjects.map((project) => (
            <GlassCard key={project.slug} className="p-md">
              <p className="label-caps mb-xs text-secondary">{project.category}</p>
              <h3 className="mb-xs font-display text-xl font-semibold">{project.title}</h3>
              <p className="mb-sm text-sm text-on-surface-variant">{project.description}</p>
              <div className="flex flex-wrap gap-xs">
                {project.tags.slice(0, 3).map((tag) => <Tag key={tag}>{tag}</Tag>)}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <div className="mt-xl flex flex-wrap gap-sm">
        <PrimaryButton to="/contact" icon="rocket_launch">Launch Mission</PrimaryButton>
        <PrimaryButton to="/proof" icon="verified" variant="outline">View Proof</PrimaryButton>
      </div>
    </main>
  );
}
