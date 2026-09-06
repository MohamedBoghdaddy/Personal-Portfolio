import { useMemo, useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { contactTopics, identity } from "../data/portfolioData";
import { Button, GlassCard, Icon, ProgressBar, SectionHeader } from "../components/UI";
import useDocumentMeta from "../hooks/useDocumentMeta";

const emailServiceId = "service_qm8alrw"; // "Gmail personal portfolio" — connected as mohamedhammad3.142@gmail.com
const emailTemplateId = "template_t64w4wp";
const emailPublicKey = "PV9slaOWlMSALkZ3v";

const RATE_LIMIT_KEY = "contact_last_submit_at";
const RATE_LIMIT_MS = 60 * 1000; // one submission per minute per browser

const opportunityTypes = [
  "Job Opportunity",
  "AI / Software Project",
  "Technical Partnership",
  "Startup / Product Collaboration",
  "Consulting",
  "Other"
];

export default function Contact() {
  useDocumentMeta({
    title: "Contact — Let's Build Something",
    description:
      "Reach Mohamed Boghdaddy for job opportunities, AI/software projects, technical partnerships, or consulting.",
    path: "/contact"
  });

  const [activeTab, setActiveTab] = useState("quick");
  const [messageStatus, setMessageStatus] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      opportunityType: "",
      topic: contactTopics[0],
      projectType: "AI MVP / Product Build",
      timeline: "",
      message: "",
      terms: false,
      website: "" // honeypot — real users never see or fill this field
    }
  });

  const watched = watch();
  const completion = useMemo(() => {
    const required = [watched.firstName, watched.lastName, watched.email, watched.topic, watched.message, watched.terms];
    const done = required.filter(Boolean).length;
    return Math.round((done / required.length) * 100);
  }, [watched]);

  const onSubmit = async (data) => {
    setMessageStatus(null);

    // Honeypot: bots fill every field, real visitors never see this one.
    if (data.website) {
      setMessageStatus({ type: "success", text: "Message sent successfully. I'll get back to you soon." });
      reset();
      return;
    }

    // Lightweight client-side rate limit to deter accidental double-submits and spam bursts.
    try {
      const lastSubmit = Number(window.localStorage.getItem(RATE_LIMIT_KEY) || 0);
      if (Date.now() - lastSubmit < RATE_LIMIT_MS) {
        setMessageStatus({
          type: "error",
          text: `Please wait a moment before sending another message, or email me directly at ${identity.email}.`
        });
        return;
      }
    } catch {
      // localStorage unavailable (private browsing, etc.) — proceed without rate limiting.
    }

    const fullName = `${data.firstName} ${data.lastName}`.trim().slice(0, 120);
    const subject = `Portfolio Contact — ${data.topic}`;

    try {
      const response = await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          ...data,
          fullName,
          subject,
          company: data.company?.trim() || "Not provided",
          opportunityType: data.opportunityType || "Not specified",
          message: data.message.trim().slice(0, 800),
          source: "boghdaddy-personal-portfolio.vercel.app",
          reply_to: data.email
        },
        emailPublicKey
      );

      if (response.status === 200) {
        try {
          window.localStorage.setItem(RATE_LIMIT_KEY, String(Date.now()));
        } catch {
          // ignore storage errors
        }
        setMessageStatus({ type: "success", text: "Message sent successfully. I'll get back to you soon." });
        reset();
      } else {
        setMessageStatus({
          type: "error",
          text: `Something went wrong while sending your message. Please try again or email me directly at ${identity.email}.`
        });
      }
    } catch (error) {
      setMessageStatus({
        type: "error",
        text: `Something went wrong while sending your message. Please try again or email me directly at ${identity.email}.`
      });
    }
  };

  return (
    <main className="page-shell">
      <SectionHeader
        eyebrow="Get in Touch"
        title={<>Let's Build Something <span className="text-primary">Useful</span></>}
        description="Whether you're hiring, building an AI product, exploring a technical partnership, or solving a difficult software problem, I'd like to hear about it."
        icon="alternate_email"
      />

      <div className="grid grid-cols-1 gap-md lg:grid-cols-12">
        <div className="space-y-md lg:col-span-5">
          <GlassCard className="p-md">
            <div className="mb-md flex items-center justify-between border-b border-outline-variant pb-sm">
              <span className="label-caps text-on-surface-variant">Availability</span>
              <div className="flex items-center gap-xs">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                </span>
                <span className="font-mono text-sm text-primary">Available</span>
              </div>
            </div>

            <div className="mb-md space-y-sm">
              <div className="border-l-2 border-tertiary bg-surface-container-high p-sm">
                <h3 className="mb-xs font-display text-2xl font-semibold">Role Focus</h3>
                <p className="text-sm text-on-surface-variant">
                  Open to AI integration, full-stack architecture, Flutter mobile, and product engineering roles.
                </p>
              </div>
              <div className="flex items-center gap-sm text-on-surface-variant">
                <Icon name="location_on" className="text-secondary" />
                <span className="font-mono text-sm">{identity.location} / Remote</span>
              </div>
            </div>

            <div className="grid gap-sm">
              <Button href={`mailto:${identity.email}`} icon="mail" className="w-full">
                Send Email
              </Button>
              <div className="grid grid-cols-2 gap-sm">
                <Button
                  href={identity.linkedinUrl}
                  icon="share"
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Button>
                <Button
                  href={identity.githubUrl}
                  icon="code"
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
              </div>
              <Button href={identity.cvUrl} icon="description" variant="ghost" download="Mohamed-Boghdady-CV.pdf" className="w-full">
                Download CV
              </Button>
            </div>
          </GlassCard>

          <GlassCard className="p-md">
            <div className="mb-xs flex justify-between gap-sm label-caps text-on-surface-variant">
              <span>Form Progress</span>
              <span>{completion}% Complete</span>
            </div>
            <ProgressBar value={completion} accent={completion === 100 ? "primary" : "secondary"} />
            <p className="mt-sm font-mono text-[11px] italic text-outline">
              [Name: {watched.firstName ? "OK" : "needed"}] [Email: {watched.email ? "OK" : "needed"}] [Message: {watched.message ? "OK" : "needed"}]
            </p>
          </GlassCard>
        </div>

        <div className="lg:col-span-7">
          <GlassCard className="h-full overflow-hidden">
            <div className="flex border-b border-outline-variant">
              {[
                ["quick", "Quick Contact"],
                ["brief", "Project Brief"]
              ].map(([key, label]) => (
                <button
                  key={key}
                  className={`focus-ring flex-1 px-md py-md label-caps transition ${
                    activeTab === key ? "border-b-2 border-primary bg-primary/5 text-primary" : "text-on-surface-variant hover:text-on-surface"
                  }`}
                  type="button"
                  onClick={() => setActiveTab(key)}
                >
                  {label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-md p-md" noValidate>
              {/* Honeypot field — hidden from real visitors via CSS, bots fill every input they find. */}
              <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
              </div>

              <div className="grid grid-cols-1 gap-md md:grid-cols-2">
                <Field label="First Name" error={errors.firstName?.message}>
                  <input
                    className="field-input"
                    placeholder="Mohamed"
                    type="text"
                    {...register("firstName", {
                      required: "First name is required",
                      pattern: { value: /^[A-Za-z\s'-]+$/, message: "Use letters only" }
                    })}
                  />
                </Field>
                <Field label="Last Name" error={errors.lastName?.message}>
                  <input
                    className="field-input"
                    placeholder="Boghdady"
                    type="text"
                    {...register("lastName", {
                      required: "Last name is required",
                      pattern: { value: /^[A-Za-z\s'-]+$/, message: "Use letters only" }
                    })}
                  />
                </Field>
              </div>

              <Field label="Email Address" error={errors.email?.message}>
                <input
                  className="field-input"
                  placeholder="you@example.com"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "Invalid email format" }
                  })}
                />
              </Field>

              {activeTab === "quick" ? (
                <>
                  <Field label="Subject / Project Type" error={errors.topic?.message}>
                    <select className="field-input" {...register("topic", { required: "Please select a topic" })}>
                      {contactTopics.map((topic) => <option key={topic}>{topic}</option>)}
                    </select>
                  </Field>
                  <div className="grid grid-cols-1 gap-md md:grid-cols-2">
                    <Field label="Company (optional)">
                      <input className="field-input" placeholder="Your company" type="text" maxLength={120} {...register("company")} />
                    </Field>
                    <Field label="Opportunity Type (optional)">
                      <select className="field-input" {...register("opportunityType")}>
                        <option value="">Select if applicable</option>
                        {opportunityTypes.map((type) => <option key={type}>{type}</option>)}
                      </select>
                    </Field>
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-1 gap-md md:grid-cols-2">
                  <Field label="Project Type">
                    <select className="field-input" {...register("projectType")}>
                      <option>AI MVP / Product Build</option>
                      <option>Flutter Mobile App</option>
                      <option>Full-Stack Web App</option>
                      <option>Technical Review</option>
                    </select>
                  </Field>
                  <Field label="Timeline">
                    <input className="field-input" placeholder="Flexible / target date" type="text" {...register("timeline")} />
                  </Field>
                </div>
              )}

              <Field label="Message" error={errors.message?.message}>
                <textarea
                  className="field-input min-h-[170px] resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  {...register("message", {
                    required: "Message cannot be empty",
                    minLength: { value: 10, message: "Message must be at least 10 characters" },
                    maxLength: { value: 800, message: "Message cannot exceed 800 characters" }
                  })}
                />
              </Field>

              <label className="flex items-start gap-xs font-mono text-xs text-on-surface-variant">
                <input className="mt-1 accent-primary" type="checkbox" {...register("terms", { required: "Please confirm this is a real message" })} />
                <span>I confirm this is a genuine message, not spam or automated.</span>
              </label>
              {errors.terms && <p className="font-mono text-xs text-error">{errors.terms.message}</p>}

              {messageStatus && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`border p-sm font-mono text-sm ${messageStatus.type === "success" ? "border-primary/30 bg-primary/10 text-primary" : "border-error/30 bg-error/10 text-error"}`}
                >
                  {messageStatus.text}
                </div>
              )}

              <p className="text-center font-mono text-xs text-outline">
                You can also reach me directly at{" "}
                <a href={`mailto:${identity.email}`} className="text-primary underline underline-offset-2">
                  {identity.email}
                </a>
                .
              </p>

              <button
                className="focus-ring group relative flex w-full items-center justify-center gap-sm overflow-hidden bg-primary py-md font-display text-xl font-semibold uppercase tracking-widest text-on-primary transition hover:scale-[1.01] active:scale-95 md:text-2xl"
                type="submit"
                disabled={isSubmitting}
              >
                <span className="relative z-10 flex items-center gap-sm">
                  <Icon name="send" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <div className="absolute inset-0 bg-primary-strong opacity-0 transition group-hover:opacity-100" />
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block space-y-xs">
      <span className="ml-1 block font-display text-[10px] uppercase tracking-[0.18em] text-on-surface-variant">
        {label}
      </span>
      {children}
      {error && <span className="block font-mono text-xs text-error">{error}</span>}
    </label>
  );
}

