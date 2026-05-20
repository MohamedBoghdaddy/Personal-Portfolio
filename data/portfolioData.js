export const navItems = [
  { label: "Boot", to: "/" },
  { label: "Missions", to: "/missions" },
  { label: "Skill Tree", to: "/skill-tree" },
  { label: "Logs", to: "/experience" },
  { label: "Proof", to: "/proof" },
  { label: "Contact", to: "/contact" }
];

export const identity = {
  name: "Mohamed Boghdady",
  alias: "BOGHDADDY OS",
  title: "Full-Stack AI Engineer",
  subtitle: "I build AI-powered products from idea to production.",
  summary:
    "Full-stack AI engineer focused on LLM product systems, Flutter apps, FastAPI backends, Firebase/Firestore, RAG workflows, and production-ready user experiences.",
  location: "Egypt / Remote",
  email: "mohamedhammad3.142@gmail.com",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/"
};

export const missionPaths = [
  {
    key: "recruiter",
    title: "Recruiter Mode",
    protocol: "PROT:RCR-01",
    icon: "badge",
    accent: "secondary",
    to: "/flows/recruiter",
    description:
      "Access career telemetry, experience logs, skills matrix, CV highlights, and verified proof of execution.",
    bullets: ["Experience Logs", "Skills Matrix", "CV Snapshot"]
  },
  {
    key: "client",
    title: "Founder / Client",
    protocol: "PROT:FND-02",
    icon: "rocket_launch",
    accent: "tertiary",
    to: "/flows/client",
    description:
      "Explore AI products, MVP architecture, system strategy, delivery scope, and business-ready case studies.",
    bullets: ["Product Benchmarks", "MVP Roadmaps", "ROI Thinking"],
    featured: true
  },
  {
    key: "technical",
    title: "Technical Reviewer",
    protocol: "PROT:REV-03",
    icon: "database",
    accent: "secondary",
    to: "/flows/technical",
    description:
      "Deep-dive into architecture, repositories, stack decisions, testing, API integrity, and deployment logic.",
    bullets: ["Stack Audit", "Repo Insights", "System Design"]
  },
  {
    key: "fast",
    title: "Fast Scan Mode",
    protocol: "PROT:FST-04",
    icon: "timer",
    accent: "error",
    to: "/flows/fast-scan",
    description:
      "A compressed 60-second executive summary of strengths, projects, stack, and contact options.",
    bullets: ["60s Summary", "Top Projects", "Contact CTA"]
  }
];

export const capabilities = [
  {
    title: "LLM Product Systems",
    protocol: "System Protocol 01",
    icon: "psychology",
    accent: "primary",
    description:
      "RAG pipelines, LLM APIs, structured outputs, model evaluation, prompt hardening, and intelligent product workflows."
  },
  {
    title: "Full-Stack Core",
    protocol: "System Protocol 02",
    icon: "layers",
    accent: "secondary",
    description:
      "React, FastAPI, Node.js, Firebase, PostgreSQL, MongoDB, API design, and clean deployment-ready architecture."
  },
  {
    title: "Mobile AI Apps",
    protocol: "System Protocol 03",
    icon: "phone_iphone",
    accent: "tertiary",
    description:
      "Flutter apps with BLoC, go_router, Firebase Auth, Firestore rules, camera flows, dashboards, and paywall logic."
  },
  {
    title: "AI Evaluation & QA",
    protocol: "System Protocol 04",
    icon: "fact_check",
    accent: "secondary",
    description:
      "Golden sets, groundedness checks, regression testing, Postman flows, live browser QA, and production blockers."
  }
];

export const projects = [
  {
    slug: "calorielens",
    title: "CalorieLens",
    category: "Mobile AI",
    status: "Active Build",
    level: "BOSS-LEVEL_10",
    role: "Mobile + AI Product Engineer",
    description:
      "Flutter AI calorie-tracking product with onboarding, scan flow, dashboard, paywall, groups, Firebase Auth/Firestore, localization, and backend integrations.",
    tags: ["Flutter", "BLoC", "FastAPI", "Firebase", "Firestore"],
    accent: "primary"
  },
  {
    slug: "pregen-ai-lms",
    title: "PreGen AI LMS",
    category: "AI Education Platform",
    status: "Shipped / Iterating",
    level: "BOSS-LEVEL_09",
    role: "Full-Stack AI Engineer",
    description:
      "Generative LMS platform with AI-generated practice, reports, student and teacher flows, backend APIs, QA iterations, and modern React/Tailwind UI.",
    tags: ["React", "FastAPI", "LLM", "PDF Reports", "QA"],
    accent: "tertiary",
    featured: true
  },
  {
    slug: "ai-cyber-defense-lab",
    title: "AI Cyber Defense Lab",
    category: "Security AI",
    status: "Prototype",
    level: "BOSS-LEVEL_08",
    role: "AI Systems Builder",
    description:
      "ML-powered security analysis lab covering prompt injection, phishing defense, and DoS simulation with risk scores and LLM analysis.",
    tags: ["FastAPI", "React", "Tailwind", "Security ML"],
    accent: "secondary"
  },
  {
    slug: "foundit",
    title: "FoundIt",
    category: "Mobile Ecosystem",
    status: "MVP",
    level: "BOSS-LEVEL_07",
    role: "Mobile Lead",
    description:
      "Flutter lost-and-found application with AI-generated ownership questionnaire, matching system, structured answers, and ranking logic.",
    tags: ["Flutter", "Firebase", "AI Matching", "Mobile"],
    accent: "primary"
  },
  {
    slug: "swarm-negotiation-mpso",
    title: "Swarm Negotiation MPSO",
    category: "AI Optimization",
    status: "Research Build",
    level: "BOSS-LEVEL_08",
    role: "AI Optimization Engineer",
    description:
      "Particle Swarm Optimization powered negotiation platform for price negotiation and intelligent decision support.",
    tags: ["Python", "PSO", "MERN", "Optimization"],
    accent: "tertiary"
  },
  {
    slug: "financial-ai-advisor",
    title: "Financial AI Advisor",
    category: "FinTech",
    status: "Concept / MVP",
    level: "BOSS-LEVEL_07",
    role: "AI Product Engineer",
    description:
      "AI financial advisory product concept for assisting users with financial decisions, recommendations, and decision intelligence.",
    tags: ["LLM", "FinTech", "Analytics", "React"],
    accent: "secondary"
  }
];

export const skills = [
  {
    group: "AI & LLM Systems",
    icon: "psychology",
    accent: "tertiary",
    nodes: [
      { name: "LLM APIs", level: "Advanced", value: 92 },
      { name: "RAG", level: "Strong", value: 88 },
      { name: "Agents", level: "Advanced", value: 86 },
      { name: "Prompt Engineering", level: "Advanced", value: 94 }
    ]
  },
  {
    group: "Full-Stack Engineering",
    icon: "layers",
    accent: "secondary",
    nodes: [
      { name: "React", level: "Advanced", value: 92 },
      { name: "FastAPI", level: "Strong", value: 87 },
      { name: "Node.js", level: "Strong", value: 84 },
      { name: "Databases", level: "Strong", value: 86 }
    ]
  },
  {
    group: "Mobile & Cloud",
    icon: "cloud_done",
    accent: "primary",
    nodes: [
      { name: "Flutter", level: "Advanced", value: 90 },
      { name: "Firebase", level: "Advanced", value: 88 },
      { name: "Docker", level: "Strong", value: 82 },
      { name: "CI/CD", level: "Growing", value: 76 }
    ]
  }
];

export const achievements = [
  {
    title: "Built AI LMS Platform",
    subtitle: "PreGen",
    type: "Deployment: Platform",
    icon: "school",
    description:
      "Designed and iterated on a generative learning platform with AI practice generation, reporting, role-based flows, and full-stack QA.",
    tags: ["React", "FastAPI", "LLM Ops"]
  },
  {
    title: "Built CalorieLens Mobile Product",
    subtitle: "AI Mobile App",
    type: "Deployment: Mobile",
    icon: "phone_iphone",
    description:
      "Implemented onboarding, scan, dashboard, groups, profile/legal/support, localization, subscription logic, and Firebase-backed architecture.",
    tags: ["Flutter", "BLoC", "Firebase"]
  },
  {
    title: "Built AI Cyber Defense Concepts",
    subtitle: "ByteGuard / AI Security Lab",
    type: "Concepts",
    icon: "security",
    description:
      "Created security AI modules for prompt injection, phishing detection, and DoS/DDoS traffic analysis with risk scoring.",
    tags: ["Security", "ML", "FastAPI"]
  },
  {
    title: "Shipped Full-Stack MVPs",
    subtitle: "Multiple Builds",
    type: "Execution",
    icon: "layers",
    description:
      "Built end-to-end products across web, mobile, backend APIs, AI workflows, and cloud-connected databases.",
    tags: ["React", "Node", "Python"]
  },
  {
    title: "Worked on FinTech UAT/QA Thinking",
    subtitle: "Quality Systems",
    type: "Validation",
    icon: "payments",
    description:
      "Strong testing mindset using Postman, browser QA, blockers, regression checks, and clean release-readiness reports.",
    tags: ["QA", "Postman", "UAT"]
  }
];

export const experiences = [
  {
    role: "AI / Full-Stack Product Builder",
    company: "Independent + Client Projects",
    period: "2024 — Present",
    status: "ACTIVE",
    bullets: [
      "Built AI-powered systems using LLMs, FastAPI, React, Flutter, Firebase, and production-minded QA workflows.",
      "Worked on CalorieLens, PreGen LMS, AI Cyber Defense Lab, FoundIt, Swarm Negotiation MPSO, and automation products.",
      "Prepared deployment, testing, API, UI/UX, and architecture prompts for real engineering execution."
    ],
    tags: ["LLM", "FastAPI", "React", "Flutter", "Firebase"]
  },
  {
    role: "Software House Project Contributor",
    company: "Sahlaa.ai",
    period: "Recent",
    status: "ARCHIVED",
    bullets: [
      "Worked on two shipping/logistics websites and contributed to the CalorieLens product direction.",
      "Handled implementation thinking across product flows, backend integration, and frontend polish."
    ],
    tags: ["Web", "Logistics", "Product"]
  },
  {
    role: "AI / Computer Vision Project Builder",
    company: "Academic + R&D Projects",
    period: "Ongoing",
    status: "ARCHIVED",
    bullets: [
      "Explored computer vision workflows for healthcare, surgery tracking, image processing, and AI-assisted analysis.",
      "Worked on structured data generation, annotation logic, and model-oriented pipelines."
    ],
    tags: ["CV", "ML", "Python", "Research"]
  }
];

export const archiveItems = [
  {
    title: "Stopwatch",
    version: "v0.0.1",
    icon: "timer",
    description: "High-precision timing kernel for measuring execution cycles.",
    tags: ["Vanilla JS", "RAF Logic"]
  },
  {
    title: "Tic-Tac-Toe",
    version: "v0.1.4",
    icon: "grid_view",
    description: "Early heuristic testing ground for restricted-state decision logic.",
    tags: ["Minimax", "CSS Grid"]
  },
  {
    title: "Template Matching",
    version: "v0.2.2",
    icon: "pattern",
    description: "Sub-region image detection experiment for computer vision workflows.",
    tags: ["Computer Vision", "Canvas"]
  },
  {
    title: "Data Parser",
    version: "v0.3.0",
    icon: "database",
    description: "Regex-based telemetry extraction for raw diagnostic feeds.",
    tags: ["Regex", "JSON Streams"]
  }
];

export const terminalCommands = {
  whoami: {
    title: "BOGHDADDY // FULL-STACK AI ENGINEER",
    body:
      "AI product builder specializing in LLM systems, full-stack architecture, Flutter apps, and production-minded QA.",
    facts: [
      ["CLASS", "AI_PRODUCT_BUILDER"],
      ["LEVEL", "GROWING_FAST"],
      ["LOCATION", "EGYPT_REMOTE"],
      ["STATUS", "AVAILABLE"]
    ]
  },
  projects: {
    title: "PROJECT INDEX",
    body: "CalorieLens, PreGen AI LMS, FoundIt, AI Cyber Defense Lab, Swarm Negotiation MPSO, Financial AI Advisor.",
    facts: [
      ["ACTIVE_BUILDS", "6+"],
      ["PRIMARY_STACK", "REACT_FASTAPI_FLUTTER"],
      ["AI_LAYER", "LLM_RAG_AGENTS"],
      ["QA_MODE", "ENABLED"]
    ]
  },
  skills: {
    title: "KERNEL CAPABILITIES",
    body: "LLM APIs, RAG, React, FastAPI, Flutter, Firebase, Firestore Rules, Docker, Postman, and UI/UX implementation.",
    facts: [
      ["AI", "ADVANCED"],
      ["FRONTEND", "ADVANCED"],
      ["MOBILE", "ADVANCED"],
      ["BACKEND", "STRONG"]
    ]
  },
  hire_status: {
    title: "AVAILABILITY PROTOCOL: ACTIVE",
    body:
      "Open to selected AI integration, full-stack, mobile AI, and product engineering opportunities.",
    facts: [
      ["FREELANCE", "OPEN"],
      ["FULL_TIME", "SELECTIVE"],
      ["REMOTE", "READY"],
      ["RESPONSE", "FAST"]
    ]
  }
};
