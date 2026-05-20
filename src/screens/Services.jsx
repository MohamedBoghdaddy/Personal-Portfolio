import { services } from "../data/portfolioData";
import { Button, GlassCard, Icon, SectionHeader, Tag, accentClasses } from "../components/UI";

export default function Services() {
  return (
    <main className="page-shell">
      <SectionHeader
        eyebrow="What I Offer"
        title="Services"
        description="Clear deliverables for clients and founders — from AI MVPs to full mobile apps and backend integrations."
        icon="build"
      />

      <div className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const ac = accentClasses[service.accent];
          return (
            <GlassCard key={service.title} className={`flex flex-col border-l-4 ${ac.borderLeft} p-md`} accent={service.accent}>
              <div className="mb-md flex items-center gap-sm">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${ac.bgSoft}`}>
                  <Icon name={service.icon} className={`text-3xl ${ac.text}`} />
                </div>
                <h3 className="font-display text-xl font-semibold">{service.title}</h3>
              </div>

              <p className="mb-md flex-1 text-sm leading-relaxed text-on-surface-variant">
                {service.description}
              </p>

              <div className="mb-md flex flex-wrap gap-xs">
                {service.stack.map((tech) => (
                  <Tag key={tech} accent={service.accent}>{tech}</Tag>
                ))}
              </div>

              <div className="mb-md border-t border-outline-variant/20 pt-sm">
                <span className="font-mono text-[10px] uppercase text-outline">Example project</span>
                <p className={`mt-xs font-display text-sm font-semibold ${ac.text}`}>{service.relatedProject}</p>
              </div>

              <Button to="/contact" icon="alternate_email" variant={service.accent === "tertiary" ? "primary" : "secondary"} className="w-full">
                Discuss This
              </Button>
            </GlassCard>
          );
        })}
      </div>

      <div className="mt-xl">
        <GlassCard className="flex flex-col items-center gap-lg p-lg text-center md:flex-row md:text-left" accent="primary">
          <div className="flex-1">
            <h2 className="mb-sm font-display text-3xl font-semibold">Have a project in mind?</h2>
            <p className="max-w-xl text-on-surface-variant">
              I'm open to AI product builds, mobile app development, full-stack projects, and technical consulting. Let's figure out if we're a good fit.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-sm">
            <Button to="/contact" icon="alternate_email">Get in Touch</Button>
            <Button to="/builds" icon="grid_view" variant="secondary">See My Work</Button>
          </div>
        </GlassCard>
      </div>
    </main>
  );
}
