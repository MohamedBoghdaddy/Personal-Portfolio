import { aboutContent, identity } from "../data/portfolioData";
import { Button, GlassCard, Icon, SectionHeader } from "../components/UI";
import useDocumentMeta from "../hooks/useDocumentMeta";

export default function About() {
  useDocumentMeta({
    title: "About — Technical Founder & Full Stack AI Engineer",
    description:
      "Background, approach, and education of Mohamed Boghdaddy, a Technical Founder and Full Stack AI Engineer based in Cairo, Egypt.",
    path: "/about"
  });

  return (
    <main className="page-shell">
      <SectionHeader
        eyebrow="Who I Am"
        title="About Me"
        description="The person behind the portfolio — background, approach, education, and what I'm building."
        icon="person"
      />

      <div className="grid grid-cols-1 gap-md lg:grid-cols-12">
        {/* Left column */}
        <div className="space-y-md lg:col-span-4">
          <GlassCard className="overflow-hidden p-0" accent="primary">
            <div className="relative aspect-square w-full">
              <img
                src="/images/projects/portrait.jpg"
                alt="Mohamed Boghdady"
                loading="lazy"
                className="h-full w-full object-cover opacity-90 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-md">
                <h2 className="font-display text-2xl font-bold text-on-background">{identity.name}</h2>
                <p className="font-mono text-sm text-primary">{identity.subtitle}</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-md" accent="secondary">
            <h3 className="mb-sm font-display text-lg font-semibold text-secondary">Quick Facts</h3>
            <div className="space-y-xs">
              {[
                ["location_on", identity.location],
                ["mail", identity.email],
                ["school", aboutContent.education.degree]
              ].map(([icon, text]) => (
                <div key={text} className="flex items-start gap-sm text-sm text-on-surface-variant">
                  <Icon name={icon} className="mt-0.5 flex-shrink-0 text-sm text-secondary" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Languages */}
          <GlassCard className="p-md" accent="primary">
            <h3 className="mb-sm font-display text-base font-semibold">Languages</h3>
            <div className="space-y-xs">
              {aboutContent.languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <span className="text-sm text-on-surface-variant">{lang.name}</span>
                  <span className="font-mono text-[10px] uppercase text-primary">{lang.level}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="flex flex-col gap-sm">
            <Button to="/contact" icon="alternate_email" className="w-full">
              Contact Me
            </Button>
            <Button href={identity.cvUrl} icon="description" variant="secondary" download="Mohamed-Boghdady-CV.pdf" className="w-full">
              Download CV
            </Button>
            <div className="grid grid-cols-2 gap-sm">
              <Button href={identity.linkedinUrl} icon="share" variant="ghost" className="w-full" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Button>
              <Button href={identity.githubUrl} icon="code" variant="ghost" className="w-full" target="_blank" rel="noopener noreferrer">
                GitHub
              </Button>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-md lg:col-span-8">
          <GlassCard className="border-l-4 border-l-primary p-md" accent="primary">
            <h3 className="mb-sm flex items-center gap-sm font-display text-xl font-semibold text-primary">
              <Icon name="person" />
              Introduction
            </h3>
            <p className="text-lg leading-relaxed text-on-surface-variant">{aboutContent.intro}</p>
          </GlassCard>

          <GlassCard className="p-md" accent="secondary">
            <h3 className="mb-sm flex items-center gap-sm font-display text-xl font-semibold text-secondary">
              <Icon name="hub" />
              What I Focus On
            </h3>
            <p className="leading-relaxed text-on-surface-variant">{aboutContent.focus}</p>
          </GlassCard>

          <GlassCard className="p-md" accent="tertiary">
            <h3 className="mb-sm flex items-center gap-sm font-display text-xl font-semibold text-tertiary">
              <Icon name="engineering" />
              How I Work
            </h3>
            <div className="space-y-sm">
              {aboutContent.approach.map((item, index) => (
                <div key={index} className="flex gap-sm">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-tertiary/20 font-mono text-xs text-tertiary">
                    {index + 1}
                  </div>
                  <p className="text-on-surface-variant">{item}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-md" accent="primary">
            <h3 className="mb-sm flex items-center gap-sm font-display text-xl font-semibold">
              <Icon name="bolt" className="text-primary" />
              What Makes Me Different
            </h3>
            <p className="leading-relaxed text-on-surface-variant">{aboutContent.differentiation}</p>
          </GlassCard>

          <GlassCard className="p-md" accent="secondary">
            <h3 className="mb-sm flex items-center gap-sm font-display text-xl font-semibold text-secondary">
              <Icon name="explore" />
              Currently Interested In
            </h3>
            <div className="flex flex-wrap gap-sm">
              {aboutContent.currentInterests.map((interest) => (
                <div key={interest} className="flex items-center gap-xs rounded-full border border-secondary/30 bg-secondary/10 px-sm py-xs">
                  <Icon name="arrow_right" className="text-sm text-secondary" />
                  <span className="text-sm text-on-surface-variant">{interest}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Continuous Learning */}
          <GlassCard className="p-md" accent="tertiary">
            <h3 className="mb-sm flex items-center gap-sm font-display text-xl font-semibold text-tertiary">
              <Icon name="school" />
              Continuous Learning
            </h3>
            <div className="grid grid-cols-1 gap-xs sm:grid-cols-2">
              {aboutContent.courses.map((course) => (
                <div key={course.name} className="flex items-start gap-xs rounded bg-surface-container-low px-sm py-xs">
                  <Icon name="check_circle" className="mt-0.5 flex-shrink-0 text-sm text-tertiary" />
                  <div>
                    <p className="text-xs font-medium text-on-surface">{course.name}</p>
                    <p className="font-mono text-[10px] text-outline">{course.provider}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}
