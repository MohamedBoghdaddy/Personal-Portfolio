import { Link } from "react-router-dom";
import { GlassCard, Icon, PrimaryButton, SectionHeader, Tag, VisualPlaceholder } from "../components/UI";

export default function CaseStudy() {
  return (
    <main className="page-shell">
      <section className="mb-xl">
        <GlassCard className="flex flex-col items-center gap-lg overflow-hidden rounded-xl p-lg md:flex-row">
          <div className="z-10 flex-1">
            <div className="mb-md flex flex-wrap items-center gap-sm">
              <span className="border border-primary/20 bg-primary/10 px-sm py-xs font-mono text-xs text-primary">PROJECT_042</span>
              <span className="border border-tertiary/20 bg-tertiary/10 px-sm py-xs font-mono text-xs text-tertiary">AI_CORE_INTEGRATED</span>
            </div>
            <h1 className="mb-sm font-display text-4xl font-semibold uppercase tracking-tight md:text-5xl">
              PreGen AI LMS
            </h1>
            <p className="mb-md max-w-2xl text-lg leading-relaxed text-on-surface-variant">
              A generative learning management system case study showing how AI-assisted practice, reports, role flows, and QA-oriented product iteration can come together in a real portfolio project.
            </p>
            <div className="flex flex-wrap gap-sm">
              <PrimaryButton href="#" icon="code">GitHub Repository</PrimaryButton>
              <PrimaryButton href="#" icon="rocket_launch" variant="outline">Live Terminal</PrimaryButton>
            </div>
          </div>
          <VisualPlaceholder icon="psychology" title="PREGEN AI CORE" accent="tertiary" className="aspect-square w-full rounded-lg md:w-1/3" />
        </GlassCard>
      </section>

      <section className="mb-xl grid grid-cols-1 gap-md md:grid-cols-12">
        <GlassCard className="flex flex-col justify-between p-md md:col-span-4">
          <div>
            <h2 className="mb-sm flex items-center gap-xs font-display text-2xl font-semibold uppercase">
              <Icon name="target" className="text-primary" />
              Mission Brief
            </h2>
            <p className="text-on-surface-variant">
              Build a scalable AI-assisted LMS experience that can generate practice, support learning workflows, and export clear reports.
            </p>
          </div>
          <div className="mt-md grid grid-cols-2 gap-sm border-t border-outline-variant pt-md">
            <div>
              <span className="mb-xs block font-mono text-sm uppercase text-primary">Duration</span>
              <span className="font-display text-xl font-semibold">Ongoing</span>
            </div>
            <div>
              <span className="mb-xs block font-mono text-sm uppercase text-primary">Status</span>
              <span className="font-display text-xl font-semibold">Iterating</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="border-l-2 border-tertiary p-md md:col-span-8">
          <h2 className="mb-md flex items-center gap-xs font-display text-2xl font-semibold uppercase">
            <Icon name="report_problem" className="text-tertiary" />
            The Problem Space
          </h2>
          <div className="space-y-sm text-on-surface-variant">
            <p>
              Traditional LMS products are static. The portfolio case study should explain how AI practice generation, reporting, and role-specific dashboards make learning more adaptive.
            </p>
            {[
              "Manual practice creation wastes teacher time.",
              "Students need clearer feedback, not only grades.",
              "A serious LMS needs student, teacher, and admin-friendly flows."
            ].map((problem) => (
              <div key={problem} className="flex gap-sm">
                <Icon name="close" className="mt-1 text-sm text-error" />
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      <section className="mb-xl">
        <h2 className="mb-md text-center font-display text-3xl font-semibold uppercase">System Architecture // v2.0</h2>
        <GlassCard className="rounded-xl p-1">
          <div className="grid grid-cols-1 gap-lg rounded-lg bg-surface-container-low p-lg text-center md:grid-cols-3">
            {[
              ["data_object", "Data Ingest", "Assignments • Course Context • Student Inputs"],
              ["smart_toy", "AI Core", "LLM • Structured Output • Validation"],
              ["display_settings", "Client Layer", "Student UI • Teacher UI • Reports"]
            ].map(([icon, title, desc], index) => (
              <div key={title} className="flex flex-col items-center gap-sm">
                <div className={`flex h-20 w-20 items-center justify-center border-2 ${index === 1 ? "rounded-lg border-primary bg-primary/5 shadow-glow" : "rounded-full border-secondary"}`}>
                  <Icon name={icon} className={`text-4xl ${index === 1 ? "text-primary" : "text-secondary"}`} />
                </div>
                <h4 className="font-display text-lg font-semibold uppercase">{title}</h4>
                <p className="font-mono text-xs text-on-surface-variant">{desc}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      <section className="mb-xl grid grid-cols-1 gap-md md:grid-cols-4">
        {[
          ["Frontend", ["React", "Tailwind", "Role Flows"]],
          ["AI Layer", ["LLM", "Prompting", "Reports"]],
          ["Backend", ["FastAPI", "REST APIs", "Validation"]],
          ["QA", ["Browser Testing", "Postman", "Regression"]]
        ].map(([group, tags]) => (
          <GlassCard key={group} className="p-md">
            <span className="mb-sm block font-mono text-xs uppercase text-primary">{group}</span>
            <div className="flex flex-wrap gap-xs">
              {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
            </div>
          </GlassCard>
        ))}
      </section>

      <section className="mb-xl grid grid-cols-1 gap-md md:grid-cols-3">
        {[
          ["bolt", "Faster", "Practice generation"],
          ["groups", "Role-Based", "Student / Teacher flows"],
          ["trending_up", "Clearer", "Learning feedback"]
        ].map(([icon, value, label], index) => (
          <div key={label} className={`border-t-2 ${index === 0 ? "border-primary" : index === 1 ? "border-secondary" : "border-tertiary"} bg-surface-container-high p-lg text-center`}>
            <Icon name={icon} className={`mb-sm text-4xl ${index === 0 ? "text-primary" : index === 1 ? "text-secondary" : "text-tertiary"}`} />
            <div className="mb-xs font-display text-4xl font-semibold">{value}</div>
            <p className="font-mono text-xs uppercase text-on-surface-variant">{label}</p>
          </div>
        ))}
      </section>

      <section className="mb-xl grid grid-cols-1 gap-lg md:grid-cols-2">
        <GlassCard className="border-l-4 border-secondary p-lg">
          <h2 className="mb-md font-display text-2xl font-semibold uppercase">My Role</h2>
          <ul className="space-y-sm text-on-surface-variant">
            {[
              "Translate product requirements into role-specific screens and flows.",
              "Guide frontend/backend integration decisions.",
              "Use QA reports and blockers to improve production readiness."
            ].map((item, index) => (
              <li key={item} className="flex gap-sm">
                <span className="font-mono text-secondary">0{index + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="border-l-4 border-error p-lg">
          <h2 className="mb-md font-display text-2xl font-semibold uppercase">Critical Challenges</h2>
          <p className="mb-sm text-on-surface-variant">
            The main challenge is not making an AI demo. It is making AI output structured, reviewable, useful, and safe enough for real learning workflows.
          </p>
          <p className="bg-surface-container-low p-sm text-sm italic text-on-surface-variant">
            Solution: add validation layers, strong UI states, report previews, clear errors, and no fake success states.
          </p>
        </GlassCard>
      </section>

      <section className="rounded-2xl border border-primary/10 bg-surface-container-low p-xl text-center">
        <h2 className="mb-sm font-display text-3xl font-semibold">Ready to Deploy?</h2>
        <p className="mx-auto mb-md max-w-xl text-on-surface-variant">
          Use this case-study template for every strong project in your portfolio.
        </p>
        <div className="flex flex-wrap justify-center gap-sm">
          <PrimaryButton to="/contact" icon="rocket_launch">Initiate Contact</PrimaryButton>
          <PrimaryButton to="/builds" icon="arrow_back" variant="outline">Back to Builds</PrimaryButton>
        </div>
      </section>
    </main>
  );
}
