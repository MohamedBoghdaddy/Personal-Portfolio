import { useMemo, useState } from "react";
import { identity } from "../data/portfolioData";
import { GlassCard, Icon, PrimaryButton, ProgressBar, SectionHeader } from "../components/UI";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "Full-Stack Development Project", message: "" });

  const completion = useMemo(() => {
    const fields = Object.values(form);
    const done = fields.filter(Boolean).length;
    return Math.round((done / fields.length) * 100);
  }, [form]);

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(form.subject || "Portfolio mission request");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMission:\n${form.message}`
    );
    window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="page-shell">
      <SectionHeader
        eyebrow="Contact: Launch Mission"
        title={<>Start a New <span className="text-primary">Mission</span></>}
        description="Initialize direct communication for high-priority collaborations in AI, mobile, and full-stack product development."
        icon="rocket_launch"
      />

      <div className="grid grid-cols-1 gap-md lg:grid-cols-12">
        <div className="space-y-md lg:col-span-5">
          <GlassCard className="p-md">
            <div className="mb-md flex items-center justify-between border-b border-outline-variant pb-sm">
              <span className="label-caps text-on-surface-variant">Operator Status</span>
              <div className="flex items-center gap-xs">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                </span>
                <span className="font-mono text-sm text-primary">AVAILABLE</span>
              </div>
            </div>

            <div className="mb-md space-y-sm">
              <div className="border-l-2 border-tertiary bg-surface-container-high p-sm">
                <h3 className="mb-xs font-display text-2xl font-semibold">Role Focus</h3>
                <p className="text-sm text-on-surface-variant">Open to AI integration, full-stack architecture, Flutter mobile, and product engineering roles.</p>
              </div>
              <div className="flex items-center gap-sm text-on-surface-variant">
                <Icon name="location_on" className="text-secondary" />
                <span className="font-mono text-sm">{identity.location} / Global Protocol</span>
              </div>
            </div>

            <div className="grid gap-sm">
              <PrimaryButton href={`mailto:${identity.email}`} icon="mail" className="w-full">Initialize Email</PrimaryButton>
              <div className="grid grid-cols-2 gap-sm">
                <PrimaryButton href={identity.linkedin} icon="share" variant="outline">LinkedIn</PrimaryButton>
                <PrimaryButton href="#" icon="description" variant="outline">View CV</PrimaryButton>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-md">
            <div className="mb-xs flex justify-between label-caps text-on-surface-variant">
              <span>Data Transmission Strength</span>
              <span>{completion}% Complete</span>
            </div>
            <ProgressBar value={completion} accent={completion === 100 ? "primary" : "secondary"} />
            <p className="mt-sm font-mono text-[11px] italic text-outline">
              Mission parameters: [Name: {form.name ? "OK" : "PENDING"}] [Email: {form.email ? "OK" : "PENDING"}] [Message: {form.message ? "OK" : "PENDING"}]
            </p>
          </GlassCard>
        </div>

        <div className="lg:col-span-7">
          <GlassCard className="h-full overflow-hidden">
            <div className="flex border-b border-outline-variant">
              <button className="flex-1 border-b-2 border-primary bg-primary/5 px-md py-md label-caps text-primary">
                Quick Contact
              </button>
              <button className="flex-1 px-md py-md label-caps text-slate-500 transition hover:text-on-surface-variant">
                Project Brief
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-md p-md">
              <div className="grid grid-cols-1 gap-md md:grid-cols-2">
                <Field label="Codename / Full Name">
                  <input value={form.name} onChange={(e) => update("name", e.target.value)} className="field-input" placeholder="John Doe" type="text" />
                </Field>
                <Field label="Return Frequency / Email">
                  <input value={form.email} onChange={(e) => update("email", e.target.value)} className="field-input" placeholder="john@example.com" type="email" />
                </Field>
              </div>

              <Field label="Mission Objective / Subject">
                <select value={form.subject} onChange={(e) => update("subject", e.target.value)} className="field-input">
                  <option>Full-Stack Development Project</option>
                  <option>AI Integration Consulting</option>
                  <option>Career Opportunity</option>
                  <option>Technical Review</option>
                  <option>Other System Request</option>
                </select>
              </Field>

              <Field label="Transmission Data / Message">
                <textarea value={form.message} onChange={(e) => update("message", e.target.value)} className="field-input min-h-[160px] resize-none" placeholder="Describe the mission parameters in detail..." rows={6} />
              </Field>

              <button
                className="group relative flex w-full items-center justify-center gap-sm overflow-hidden bg-primary-container py-md font-display text-2xl font-semibold uppercase tracking-widest text-on-primary-container transition hover:scale-[1.01] active:scale-95"
                type="submit"
              >
                <span className="relative z-10 flex items-center gap-sm">
                  <Icon name="rocket_launch" />
                  Launch Mission
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 transition group-hover:opacity-100" />
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}

function Field({ label, children }) {
  return (
    <label className="space-y-xs">
      <span className="ml-1 block font-display text-[10px] uppercase tracking-[0.18em] text-on-surface-variant">
        {label}
      </span>
      {children}
    </label>
  );
}
