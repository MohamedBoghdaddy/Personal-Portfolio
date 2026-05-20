import { Link } from "react-router-dom";
import { identity } from "../data/portfolioData";
import { mainProjects } from "../data/projectsData";
import { Button, GlassCard, Icon, SectionHeader, Tag, accentClasses } from "../components/UI";

const proofCards = [
  { icon: "psychology", label: "AI Product Systems", desc: "LLM APIs, RAG, prompt engineering", accent: "tertiary" },
  { icon: "phone_iphone", label: "Flutter Mobile Apps", desc: "BLoC, Firebase, camera flows", accent: "primary" },
  { icon: "dns", label: "FastAPI Backends", desc: "REST APIs, structured outputs", accent: "secondary" },
  { icon: "cloud_done", label: "Firebase / Firestore", desc: "Auth, rules, real-time data", accent: "primary" },
  { icon: "fact_check", label: "QA & Production Readiness", desc: "Postman, browser QA, release checks", accent: "secondary" }
];

const featuredSlugs = ["calorielens", "pregen-ai-lms", "ai-cyber-defense-lab"];

export default function Home() {
  const featuredProjects = featuredSlugs
    .map((slug) => mainProjects.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden px-5 py-20 md:px-8">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-secondary/10" />
          <div className="absolute inset-0 hud-grid opacity-40" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-col justify-center gap-8 lg:col-span-7">
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-primary/20 bg-surface-container-low px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-sm uppercase tracking-[0.1em] text-primary">
                Available for selected opportunities
              </span>
            </div>

            <div>
              <h2 className="mb-4 font-display text-2xl font-semibold uppercase tracking-widest text-primary/80">
                {identity.name}
              </h2>
              <h1 className="font-display text-5xl font-semibold leading-tight tracking-tight text-on-background lg:text-7xl">
                I build <span className="italic text-primary">AI-powered</span> products from idea to production.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
                Full-Stack AI Engineer building web and mobile products with React, Flutter, FastAPI, Firebase, LLM APIs, and RAG workflows. I care about clean UI, working integrations, and real QA before shipping.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button to="/projects" icon="grid_view">View Projects</Button>
              <Button href={identity.cvUrl} icon="description" variant="secondary" download="Mohamed-Boghdady-CV.pdf">
                Download CV
              </Button>
              <Button to="/contact" icon="alternate_email" variant="ghost">Contact Me</Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:col-span-5">
            <div className="relative aspect-square w-full max-w-[500px]">
              <div className="absolute inset-0 rounded-full border-[12px] border-surface-container-highest p-4">
                <div className="h-full w-full overflow-hidden rounded-full border border-primary/30 bg-surface-container">
                  <img
                    className="h-full w-full object-cover opacity-80 grayscale transition duration-500 hover:opacity-95 hover:grayscale-0"
                    src={identity.portraitImage}
                    alt="Mohamed Boghdady"
                  />
                </div>
                <div className="absolute -inset-8 animate-[spin_60s_linear_infinite] rounded-full border border-dashed border-primary/20" />
                <div className="absolute -inset-12 animate-[spin_100s_linear_infinite_reverse] rounded-full border-2 border-secondary/10" />
              </div>

              <GlassCard className="absolute -right-1 top-2 max-w-[190px] p-sm shadow-2xl" hover={false}>
                <div className="mb-xs flex items-center gap-xs text-primary">
                  <Icon name="psychology" className="text-sm" />
                  <span className="font-mono text-[10px] uppercase">AI Systems</span>
                </div>
                <h4 className="mb-xs font-display text-sm font-semibold">LLM + RAG</h4>
                <div className="h-1 w-full overflow-hidden rounded-full bg-surface-container-highest">
                  <div className="h-full w-4/5 bg-primary" />
                </div>
              </GlassCard>

              <GlassCard className="absolute -left-4 bottom-12 border-l-4 border-tertiary p-sm shadow-2xl md:-left-12" hover={false} accent="tertiary">
                <div className="mb-xs flex items-center gap-xs text-tertiary">
                  <Icon name="layers" className="text-sm" />
                  <span className="font-mono text-[10px] uppercase">Full-Stack</span>
                </div>
                <h4 className="font-display text-sm font-semibold">React + FastAPI</h4>
                <p className="text-[10px] text-on-surface-variant">Flutter mobile too</p>
              </GlassCard>

              <GlassCard className="absolute -bottom-2 right-4 border-l-2 border-secondary p-sm shadow-2xl" hover={false} accent="secondary">
                <div className="text-[10px] font-mono uppercase text-secondary">QA Mindset</div>
                <p className="mt-xs text-xs text-on-surface-variant">Postman · browser QA · release checks</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Cards */}
      <section className="page-shell">
        <SectionHeader
          eyebrow="What I Build"
          title="Core Capabilities"
          description="The engineering areas I work across — each backed by real projects."
          icon="hub"
        />
        <div className="grid grid-cols-1 gap-md sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {proofCards.map((card) => {
            const ac = accentClasses[card.accent];
            return (
              <GlassCard key={card.label} className={`border-l-4 ${ac.borderLeft} p-md text-center`} accent={card.accent}>
                <Icon name={card.icon} className={`mx-auto mb-sm text-4xl ${ac.text}`} />
                <h3 className="mb-xs font-display text-base font-semibold">{card.label}</h3>
                <p className="text-xs text-on-surface-variant">{card.desc}</p>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="page-shell">
        <SectionHeader
          eyebrow="Featured Work"
          title="Strongest Projects"
          description="Three builds that demonstrate AI, mobile, and full-stack depth."
          icon="star"
        />
        <div className="grid grid-cols-1 gap-md md:grid-cols-3">
          {featuredProjects.map((project) => {
            const ac = accentClasses[project.accent];
            return (
              <GlassCard key={project.slug} className={`group flex flex-col border-l-4 ${ac.borderLeft} overflow-hidden`} accent={project.accent}>
                <div className="relative aspect-video overflow-hidden bg-surface-container-high">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="font-display text-4xl font-bold text-primary/30">
                        {project.title.split(" ").slice(0,2).map(w => w[0]).join("")}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-md">
                  <p className={`label-caps mb-xs ${ac.text}`}>{project.category}</p>
                  <h3 className="mb-sm font-display text-xl font-semibold">{project.title}</h3>
                  <p className="mb-sm flex-1 text-sm leading-relaxed text-on-surface-variant">{project.description}</p>
                  <div className="mb-md flex flex-wrap gap-xs">
                    {(project.tech || []).slice(0, 3).map((tag) => <Tag key={tag} accent={project.accent}>{tag}</Tag>)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase text-outline">{project.status}</span>
                    <Link
                      to={`/projects/${project.slug}`}
                      className={`focus-ring label-caps ${ac.text} hover:text-primary`}
                    >
                      View Case Study →
                    </Link>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
        <div className="mt-lg flex justify-center gap-md">
          <Button to="/projects" icon="grid_view">All Projects</Button>
          <Button to="/contact" icon="alternate_email" variant="secondary">Contact Me</Button>
        </div>
      </section>
    </main>
  );
}
