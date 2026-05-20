import { Link, useParams } from "react-router-dom";
import { flowPages, projects, skillGroups } from "../data/portfolioData";
import { Button, GlassCard, Icon, ProgressBar, SectionHeader, Tag, accentClasses } from "../components/UI";

export default function FlowPage() {
  const { type = "fast-scan" } = useParams();
  const content = flowPages[type] || flowPages["fast-scan"];
  const topProjects = projects.slice(0, 3);
  const ac = accentClasses[content.accent];

  return (
    <main className="page-shell">
      <SectionHeader {...content} />

      <div className="mb-lg grid grid-cols-1 gap-sm sm:grid-cols-2 lg:grid-cols-4">
        {content.panels.map(([label, value]) => (
          <GlassCard key={label} className={`border-l-4 ${ac.borderLeft} p-sm`} accent={content.accent}>
            <p className="label-caps mb-xs text-outline">{label}</p>
            <p className={`font-display text-xl font-semibold ${ac.text}`}>{value}</p>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-md lg:grid-cols-12">
        <GlassCard className="p-md lg:col-span-7" accent={content.accent}>
          <div className="mb-md flex items-center gap-sm">
            <Icon name={content.icon} className={`text-3xl ${ac.text}`} fill />
            <h2 className="font-display text-2xl font-semibold">Path Checklist</h2>
          </div>
          <div className="space-y-sm">
            {content.checklist.map((item) => (
              <div key={item} className="flex gap-sm border-b border-outline-variant/20 pb-sm">
                <Icon name="check_circle" className={`mt-1 text-sm ${ac.text}`} />
                <p className="text-on-surface-variant">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-md flex flex-wrap gap-sm">
            <Button to="/contact" icon="rocket_launch">{content.cta}</Button>
            <Button to="/builds" icon="visibility" variant="secondary">Case Studies</Button>
          </div>
        </GlassCard>

        <GlassCard className="p-md lg:col-span-5">
          <h3 className="mb-md font-display text-2xl font-semibold">Skill Signal</h3>
          <div className="space-y-md">
            {skillGroups.map((group) => group.nodes[0]).map((skill) => (
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
          <Link to="/builds" className="focus-ring label-caps text-secondary hover:text-primary">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-md md:grid-cols-3">
          {topProjects.map((project) => (
            <GlassCard key={project.slug} className="p-md" accent={project.accent}>
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
    </main>
  );
}

