import cvPdf from "../assets/cv/Mohamed-Boghdaddy.pdf";
import portraitImage from "../assets/images/Me6.jpg";
import pregenImage from "../assets/images/pregen.png";
import byteGuardImage from "../assets/images/ByteGuard.png";
import foundItImage from "../assets/images/foundit.png";
import swarmImage from "../assets/images/swarm.png";
import financeImage from "../assets/images/FinanceAI1.jpg";
import tabeebImage from "../assets/images/Tabeeb.png";
import bugPilotImage from "../assets/images/vscode.jpg";
import intellektImage from "../assets/images/education.png";
import worldPulseImage from "../assets/images/workspace.png";

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/builds" },
  { label: "Experience", to: "/experience" },
  { label: "Skills", to: "/skill-tree" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" }
];

export const identity = {
  name: "Mohamed Boghdady",
  alias: "BOGHDADDY OS",
  title: "Full-Stack AI Engineer",
  subtitle: "AI Product Engineer · LLMs + Full Stack Systems",
  headline: "I build AI-powered products from idea to production.",
  summary:
    "Builds production-grade AI systems combining LLM pipelines with scalable full-stack architectures. Delivers real-world products that automate workflows, improve accuracy, and reduce operational overhead.",
  location: "Cairo, Egypt / Remote",
  email: "mohamedhammad3.142@gmail.com",
  phone: "+20 112 413 5316",
  cvUrl: cvPdf,
  portraitImage,
  githubUrl: "https://github.com/MohamedBoghdaddy",
  linkedinUrl: "https://www.linkedin.com/in/mohamed-el-boghdaddy/"
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
      "Career signal, role fit, experience logs, skills matrix, CV access, and proof points for hiring review.",
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
      "Product-building proof for AI MVPs, backend integrations, mobile flows, case studies, and delivery thinking.",
    bullets: ["AI MVP Scope", "Build Roadmaps", "Business Value"],
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
      "Architecture choices, stack decisions, QA approach, repository links, and implementation tradeoffs.",
    bullets: ["Stack Audit", "Repo Review", "System Design"]
  },
  {
    key: "fast-scan",
    title: "Fast Scan Mode",
    protocol: "PROT:FST-04",
    icon: "timer",
    accent: "error",
    to: "/flows/fast-scan",
    description:
      "A compressed summary for quick evaluation: role, strongest builds, main stack, and contact path.",
    bullets: ["Short Summary", "Top Projects", "Contact CTA"]
  }
];

export const capabilities = [
  {
    title: "LLM Product Systems",
    protocol: "System Protocol 01",
    icon: "psychology",
    accent: "primary",
    description:
      "RAG workflows, LLM APIs, structured outputs, grounded responses, prompt hardening, and useful AI product loops."
  },
  {
    title: "Full-Stack Core",
    protocol: "System Protocol 02",
    icon: "layers",
    accent: "secondary",
    description:
      "React interfaces, FastAPI services, Firebase/Firestore backends, REST APIs, authentication flows, and deployment-ready architecture."
  },
  {
    title: "Mobile AI Apps",
    protocol: "System Protocol 03",
    icon: "phone_iphone",
    accent: "tertiary",
    description:
      "Flutter apps with BLoC, go_router, Firebase Auth, Firestore rules, camera flows, dashboards, localization, and paywall logic."
  },
  {
    title: "QA & Release Discipline",
    protocol: "System Protocol 04",
    icon: "fact_check",
    accent: "secondary",
    description:
      "Postman flows, browser QA, regression checks, error states, form validation, and launch-readiness reports."
  }
];

const defaultCaseStudy = {
  duration: "Project cycle",
  status: "Documented",
  missionBrief:
    "Turn a product idea into a usable build with clear flows, reliable data handling, and a maintainable technical shape.",
  problemSpace: [
    "The product needed clear user flows instead of a one-screen demo.",
    "The system needed practical architecture choices that could keep evolving.",
    "The work needed QA-friendly states for loading, validation, errors, and handoff."
  ],
  architecture: [
    { title: "Input Layer", detail: "User flows, form data, assets, and role-specific actions." },
    { title: "System Core", detail: "Business logic, APIs, AI services, Firebase, or backend modules depending on scope." },
    { title: "Experience Layer", detail: "Responsive UI, dashboard views, feedback states, and launch-ready polish." }
  ],
  features: [
    "Responsive interface with clear navigation.",
    "Reusable data and UI structures.",
    "Validation, feedback states, and QA-minded interactions."
  ],
  outcomes: [
    "A portfolio-ready build with a stronger product story.",
    "Clearer architecture for future iterations.",
    "Reusable patterns for related AI and full-stack work."
  ],
  role: [
    "Translated requirements into product flows.",
    "Designed the frontend/backend integration shape.",
    "Reviewed the experience for responsiveness, errors, and clarity."
  ],
  challenges: [
    {
      title: "Keeping the build useful beyond the demo",
      resolution:
        "I focused on reusable data, route-based structure, and clear states instead of hardcoded one-off screens."
    }
  ]
};

export const projects = [
  {
    slug: "calorielens",
    title: "CalorieLens",
    category: "Mobile AI",
    status: "Active build",
    role: "Mobile + AI Product Engineer",
    description:
      "Flutter AI calorie-tracking product with onboarding, scan flow, dashboard, groups, profile/legal/support screens, localization, Firebase Auth/Firestore, and backend integrations.",
    tags: ["Flutter", "BLoC", "FastAPI", "Firebase", "Firestore"],
    accent: "primary",
    image: null,
    featured: true,
    // TODO: Add real CalorieLens GitHub/demo URLs when they are ready.
    links: { github: null, demo: null },
    caseStudy: {
      ...defaultCaseStudy,
      duration: "Active build",
      status: "In progress",
      missionBrief:
        "Build an AI-assisted nutrition product that makes scanning, tracking, groups, profile management, and subscription flows feel coherent on mobile.",
      problemSpace: [
        "Food tracking needs fast input without hiding important context from the user.",
        "Mobile AI flows need camera, backend, and dashboard states to feel reliable.",
        "Subscription, localization, and support screens need production-level polish."
      ],
      architecture: [
        { title: "Flutter Client", detail: "Onboarding, scan flow, dashboard, groups, profile, legal, and support screens." },
        { title: "Firebase Core", detail: "Auth, Firestore data, app configuration, and user/session state." },
        { title: "AI Backend", detail: "FastAPI integration surface for image analysis and structured calorie outputs." }
      ],
      features: [
        "BLoC-based state organization.",
        "Camera and scan journey with clear loading and result states.",
        "Localized UI surfaces and subscription-aware navigation."
      ],
      outcomes: [
        "Active product build with strong mobile architecture.",
        "Reusable scan and dashboard patterns for future AI mobile apps.",
        "Production-minded handling of auth, groups, and support flows."
      ],
      role: [
        "Built mobile UI flows in Flutter.",
        "Structured state, routing, and Firebase integration.",
        "Prepared backend integration and QA notes for launch readiness."
      ]
    }
  },
  {
    slug: "pregen-ai-lms",
    title: "PreGen AI LMS",
    category: "AI Education Platform",
    status: "QA-tested",
    role: "Full-Stack AI Engineer",
    description:
      "Generative LMS platform with AI-generated practice, reports, student/teacher flows, backend APIs, QA iterations, and modern React UI.",
    tags: ["React", "FastAPI", "LLM", "Reports", "QA"],
    accent: "tertiary",
    image: pregenImage,
    links: {
      github: "https://github.com/MohamedBoghdaddy/PreGen",
      demo: "https://preprod-pregen.netlify.app/"
    },
    caseStudy: {
      ...defaultCaseStudy,
      duration: "Iterative build",
      status: "QA-tested",
      missionBrief:
        "Create a learning system where AI-assisted practice generation, reports, and role-based workflows support students and instructors.",
      problemSpace: [
        "Manual practice creation slows down learning operations.",
        "Students need feedback that explains direction, not only grades.",
        "Teacher and student flows need different interfaces without splitting the product story."
      ],
      architecture: [
        { title: "Student Layer", detail: "Practice flows, dashboard states, progress context, and feedback views." },
        { title: "AI/Backend Core", detail: "FastAPI endpoints, prompt orchestration, structured outputs, and report generation." },
        { title: "Teacher Layer", detail: "Management views, report previews, QA states, and role-aware navigation." }
      ],
      features: [
        "AI practice generation and report surfaces.",
        "Role-specific student and teacher flows.",
        "QA iteration around errors, blockers, and UI clarity."
      ],
      outcomes: [
        "Portfolio-ready LMS case study with real product depth.",
        "Clearer learning workflow across roles.",
        "Reusable architecture for future educational AI products."
      ],
      role: [
        "Implemented React UI flows and product screens.",
        "Worked across FastAPI integration and AI output handling.",
        "Used QA passes to improve reliability and screen polish."
      ],
      challenges: [
        {
          title: "Making AI output reviewable",
          resolution:
            "I kept outputs structured, visible, and attached to clear report states so users can verify what the system generated."
        }
      ]
    }
  },
  {
    slug: "ai-cyber-defense-lab",
    title: "AI Cyber Defense Lab",
    category: "Security AI",
    status: "Prototype",
    role: "AI Systems Builder",
    description:
      "Security AI concept lab covering prompt injection, phishing detection, and traffic-risk analysis with explainable outputs.",
    tags: ["FastAPI", "React", "Tailwind", "Security ML"],
    accent: "secondary",
    image: byteGuardImage,
    links: {
      github: "https://github.com/MohamedBoghdaddy/ByteGuard",
      // TODO: Add a real live demo URL if this lab is deployed.
      demo: null
    },
    caseStudy: {
      ...defaultCaseStudy,
      status: "Prototype",
      missionBrief:
        "Prototype a security-focused AI lab that explains risk, classifies suspicious inputs, and presents findings in a reviewer-friendly UI.",
      problemSpace: [
        "Security AI outputs need clarity and caution, not dramatic claims.",
        "Prompt-injection and phishing workflows need explainable reasoning.",
        "Prototype tools need safe language around what is detected versus what is inferred."
      ],
      architecture: [
        { title: "Input Capture", detail: "Suspicious text, prompt payloads, URLs, or traffic summaries." },
        { title: "Analysis Layer", detail: "ML/LLM-assisted classification with explicit risk language." },
        { title: "Review UI", detail: "Findings, severity context, and next-step recommendations." }
      ],
      features: [
        "Risk-focused dashboards.",
        "Explainable classification outputs.",
        "Safe prototype copy that avoids unsupported claims."
      ]
    }
  },
  {
    slug: "foundit",
    title: "FoundIt",
    category: "Mobile Ecosystem",
    status: "MVP",
    role: "Mobile Lead",
    description:
      "Flutter lost-and-found app with AI-generated ownership questionnaire, matching logic, structured answers, and ranking flow.",
    tags: ["Flutter", "Firebase", "AI Matching", "Mobile"],
    accent: "primary",
    image: foundItImage,
    links: {
      github: "https://github.com/MohamedBoghdaddy/FoundIt",
      // TODO: Add real FoundIt demo or store URL when available.
      demo: null
    }
  },
  {
    slug: "swarm-negotiation-mpso",
    title: "Swarm Negotiation MPSO",
    category: "AI Optimization",
    status: "Research build",
    role: "AI Optimization Engineer",
    description:
      "Particle Swarm Optimization powered negotiation platform for decision support and multi-objective price negotiation experiments.",
    tags: ["Python", "PSO", "MERN", "Optimization"],
    accent: "tertiary",
    image: swarmImage,
    links: {
      github: "https://github.com/MohamedBoghdaddy/Swarm_Negotiation_MPSO",
      // TODO: Add real deployed demo URL if the project is published.
      demo: null
    }
  },
  {
    slug: "financial-ai-advisor",
    title: "Financial AI Advisor",
    category: "FinTech",
    status: "Concept / MVP",
    role: "AI Product Engineer",
    description:
      "AI financial advisory product concept for recommendation workflows, decision support, and finance-oriented dashboard thinking.",
    tags: ["LLM", "FinTech", "Analytics", "React"],
    accent: "secondary",
    image: financeImage,
    links: {
      github: "https://github.com/MohamedBoghdaddy/FinancialAIAdvisor",
      // TODO: Add real deployed demo URL if published.
      demo: null
    }
  },
  {
    slug: "bugpilot",
    title: "BugPilot",
    category: "Developer Tooling",
    status: "Prototype",
    role: "AI Tool Builder",
    description:
      "AI-assisted debugging concept focused on issue triage, reproduction notes, test suggestions, and developer handoff clarity.",
    tags: ["LLM", "QA", "React", "Developer Tools"],
    accent: "secondary",
    image: bugPilotImage,
    // TODO: Add real BugPilot GitHub/demo URLs when available.
    links: { github: null, demo: null }
  },
  {
    slug: "intellekt",
    title: "Intellekt",
    category: "AI Learning",
    status: "Prototype",
    role: "AI Product Builder",
    description:
      "Learning assistant concept centered on structured study flows, content generation, and readable progress feedback.",
    tags: ["LLM", "Education", "React", "UX"],
    accent: "tertiary",
    image: intellektImage,
    // TODO: Add real Intellekt GitHub/demo URLs when available.
    links: { github: null, demo: null }
  },
  {
    slug: "worldpulse-daily",
    title: "WorldPulse Daily",
    category: "Data Product",
    status: "Prototype",
    role: "Full-Stack Builder",
    description:
      "Daily intelligence briefing concept for summarizing signals, organizing sources, and presenting digestible updates.",
    tags: ["React", "APIs", "Summaries", "Data UX"],
    accent: "primary",
    image: worldPulseImage,
    // TODO: Add real WorldPulse Daily GitHub/demo URLs when available.
    links: { github: null, demo: null }
  },
  {
    slug: "tabeeb",
    title: "Tabeeb",
    category: "Healthcare Mobile",
    status: "MVP",
    role: "Flutter Developer",
    description:
      "Healthcare-focused Flutter mobile app with smooth flows, clean UI, and a scalable app structure.",
    tags: ["Flutter", "Healthcare", "Mobile", "UX"],
    accent: "primary",
    image: tabeebImage,
    links: {
      github: "https://github.com/MohamedBoghdaddy/Tabeeb",
      // TODO: Add real Tabeeb demo or store URL when available.
      demo: null
    }
  }
];

export const skillGroups = [
  {
    group: "AI & LLM Systems",
    icon: "psychology",
    accent: "tertiary",
    relatedProjects: ["PreGen AI LMS", "AI Cyber Defense Lab", "BugPilot", "RAG Chatbot"],
    nodes: [
      { name: "LLM APIs (OpenAI, Gemini)", level: "Advanced" },
      { name: "Prompt Engineering", level: "Advanced" },
      { name: "RAG Workflows", level: "Strong" },
      { name: "LangChain", level: "Strong" },
      { name: "Structured JSON Outputs", level: "Strong" },
      { name: "AI Agents", level: "Working Knowledge" }
    ]
  },
  {
    group: "Frontend",
    icon: "web",
    accent: "secondary",
    relatedProjects: ["PreGen AI LMS", "HuntFlow", "AI Cyber Defense Lab", "Hedj"],
    nodes: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Strong" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "TypeScript", level: "Strong" },
      { name: "Angular", level: "Working Knowledge" }
    ]
  },
  {
    group: "Mobile — Flutter",
    icon: "phone_iphone",
    accent: "primary",
    relatedProjects: ["CalorieLens", "FoundIt", "Tabeeb", "MASAR"],
    nodes: [
      { name: "Flutter / Dart", level: "Advanced" },
      { name: "BLoC State Management", level: "Advanced" },
      { name: "go_router", level: "Strong" },
      { name: "ARB Localization", level: "Strong" },
      { name: "React Native", level: "Working Knowledge" }
    ]
  },
  {
    group: "Backend",
    icon: "dns",
    accent: "secondary",
    relatedProjects: ["PreGen AI LMS", "CalorieLens", "Document Management System"],
    nodes: [
      { name: "Node.js / Express", level: "Advanced" },
      { name: "FastAPI / Python", level: "Strong" },
      { name: "REST API Design", level: "Advanced" },
      { name: "Microservices", level: "Strong" },
      { name: "Docker", level: "Strong" }
    ]
  },
  {
    group: "Databases & Cloud",
    icon: "cloud_done",
    accent: "primary",
    relatedProjects: ["CalorieLens", "FoundIt", "PreGen AI LMS"],
    nodes: [
      { name: "MongoDB", level: "Advanced" },
      { name: "Firebase Auth & Firestore", level: "Advanced" },
      { name: "PostgreSQL", level: "Strong" },
      { name: "Firestore Security Rules", level: "Strong" },
      { name: "Firebase Storage", level: "Strong" }
    ]
  },
  {
    group: "Machine Learning & CV",
    icon: "biotech",
    accent: "tertiary",
    relatedProjects: ["MammoAI", "Sportify AI", "Stock Prediction", "AutoAI Suite"],
    nodes: [
      { name: "TensorFlow / Keras", level: "Strong" },
      { name: "Scikit-learn / XGBoost", level: "Strong" },
      { name: "LSTM / ARIMA", level: "Strong" },
      { name: "YOLOv8 / OpenCV", level: "Working Knowledge" },
      { name: "PyTorch", level: "Working Knowledge" }
    ]
  },
  {
    group: "Languages",
    icon: "code",
    accent: "secondary",
    relatedProjects: [],
    nodes: [
      { name: "JavaScript / TypeScript", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "Dart", level: "Advanced" },
      { name: "SQL", level: "Strong" },
      { name: "C / C++", level: "Working Knowledge" }
    ]
  },
  {
    group: "QA & DevOps",
    icon: "fact_check",
    accent: "primary",
    relatedProjects: ["PreGen AI LMS", "CalorieLens", "Geidea UAT"],
    nodes: [
      { name: "Postman / API Testing", level: "Strong" },
      { name: "UAT & Regression Testing", level: "Strong" },
      { name: "CI/CD Pipelines", level: "Strong" },
      { name: "Docker Deployment", level: "Strong" },
      { name: "Linux / Shell", level: "Working Knowledge" }
    ]
  }
];

export const productEngineering = [
  "MVP design",
  "User flows",
  "Prompt specs",
  "Architecture reviews",
  "QA reports",
  "Release checklists"
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
      "Implemented core mobile product surfaces including scan, dashboard, groups, profile, localization, and Firebase-backed flows.",
    tags: ["Flutter", "BLoC", "Firebase"]
  },
  {
    title: "Built AI Cyber Defense Concepts",
    subtitle: "Security AI Lab",
    type: "Prototype: Security",
    icon: "security",
    description:
      "Created AI-assisted security modules for prompt injection, phishing review, and risk-focused analysis workflows.",
    tags: ["Security", "ML", "FastAPI"]
  },
  {
    title: "Shipped Full-Stack MVPs",
    subtitle: "Multiple Builds",
    type: "Execution",
    icon: "layers",
    description:
      "Built end-to-end products across web, mobile, backend APIs, AI workflows, and cloud-connected databases.",
    tags: ["React", "Python", "Firebase"]
  },
  {
    title: "Practiced FinTech QA/UAT Thinking",
    subtitle: "Quality Systems",
    type: "Validation",
    icon: "payments",
    description:
      "Uses Postman, browser QA, blockers, regression checks, and release-readiness notes to keep product work grounded.",
    tags: ["QA", "Postman", "UAT"]
  }
];

export const validationProtocol = [
  "Every strong claim should map to a project, repo, screen, case study, or artifact.",
  "Metrics are only shown when verified; otherwise the copy stays qualitative.",
  "AI outputs are framed as assisted workflows, not magic guarantees.",
  "Contact submission reports success only when EmailJS returns a successful response."
];

export const experiences = [
  {
    role: "Full-Stack AI Engineer",
    company: "PreGen",
    period: "Oct 2025 – Present",
    status: "Active",
    bullets: [
      "Delivered a MERN + Python AI platform reducing manual content creation by approximately 70%.",
      "Built scalable APIs supporting AI workflows and real-time processing.",
      "Integrated LLM pipelines for generation, evaluation, and structured outputs.",
      "Led architecture, Docker deployment, and CI/CD setup improving system reliability."
    ],
    tags: ["MERN", "Python", "LLM", "FastAPI", "Docker", "CI/CD"]
  },
  {
    role: "Prompt Engineer",
    company: "Freelance",
    period: "Jul 2024 – Present",
    status: "Active",
    bullets: [
      "Designed prompt pipelines improving accuracy and reducing hallucinations across AI workflows.",
      "Built LLM systems for financial analysis, structured extraction, and automated content generation.",
      "Integrated AI workflows into production APIs for client products."
    ],
    tags: ["LLM", "Prompt Engineering", "RAG", "OpenAI", "Gemini"]
  },
  {
    role: "UAT Engineer",
    company: "Geidea for Technologies",
    period: "Aug 2025 – Nov 2025",
    status: "Completed",
    bullets: [
      "Conducted UAT for financial and payment platforms.",
      "Validated business requirements against system behavior and identified functional gaps.",
      "Reported and tracked defects across Agile sprints.",
      "Coordinated with engineering and product teams to ensure release readiness."
    ],
    tags: ["UAT", "QA", "Agile", "FinTech", "Payment Systems"]
  },
  {
    role: "Full-Stack MERN Intern",
    company: "ATOS",
    period: "Jul 2024 – Oct 2024",
    status: "Completed",
    bullets: [
      "Engineered a Document Management System using MERN and PERN stacks.",
      "Developed and optimized RESTful APIs for secure document handling.",
      "Improved frontend performance using modular React components.",
      "Applied clean architecture principles to enhance maintainability."
    ],
    tags: ["React", "Node.js", "PostgreSQL", "MongoDB", "REST APIs"]
  },
  {
    role: "Microservices Software Developer Intern",
    company: "Relief and Emergency Foundation",
    period: "May 2024 – Aug 2024",
    status: "Completed",
    bullets: [
      "Implemented microservices architecture for WordPress and MERN platforms.",
      "Designed modular backend services using Node.js.",
      "Applied best practices for service separation and API communication."
    ],
    tags: ["Node.js", "Microservices", "MERN", "WordPress", "REST APIs"]
  },
  {
    role: "Machine Learning Intern",
    company: "Code Alpha",
    period: "Feb 2024 – May 2024",
    status: "Completed",
    bullets: [
      "Developed ML models including recommender systems and stock market forecasting.",
      "Performed data preprocessing, feature engineering, and model evaluation.",
      "Built LSTM-based time-series models using Python for financial prediction."
    ],
    tags: ["Python", "LSTM", "Scikit-learn", "XGBoost", "Time Series"]
  },
  {
    role: "Web Development Intern",
    company: "Prodigy Info Tech",
    period: "Jan 2024 – Feb 2024",
    status: "Completed",
    bullets: [
      "Built responsive landing pages and interactive web applications.",
      "Developed a stopwatch web app with precise timing logic using vanilla JS."
    ],
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"]
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
      "Mohamed Boghdady builds AI-powered products across mobile, web, backend systems, LLM workflows, and QA-ready user experiences.",
    facts: [
      ["ROLE", "FULL_STACK_AI_ENGINEER"],
      ["FOCUS", "AI_PRODUCTS"],
      ["LOCATION", "EGYPT_REMOTE"],
      ["STATUS", "AVAILABLE_SELECTIVELY"]
    ]
  },
  projects: {
    title: "PROJECT INDEX",
    body:
      "CalorieLens, PreGen AI LMS, AI Cyber Defense Lab, FoundIt, Swarm Negotiation MPSO, Financial AI Advisor, BugPilot, Intellekt, WorldPulse Daily, and Tabeeb.",
    facts: [
      ["MODE", "CASE_STUDIES"],
      ["STACK", "REACT_FASTAPI_FLUTTER"],
      ["AI_LAYER", "LLM_RAG_QA"],
      ["ROUTE", "/builds"]
    ]
  },
  skills: {
    title: "KERNEL CAPABILITIES",
    body:
      "LLM APIs, RAG, React, FastAPI, Flutter, Firebase, Firestore rules, Postman, browser QA, and product implementation.",
    facts: [
      ["AI", "ADVANCED"],
      ["FRONTEND", "ADVANCED"],
      ["MOBILE", "ADVANCED"],
      ["BACKEND", "STRONG"]
    ]
  },
  stack: {
    title: "STACK MANIFEST",
    body:
      "React and Tailwind for UI, Flutter for mobile, FastAPI and Node for services, Firebase/Firestore for product data, and LLM systems where AI creates real workflow value.",
    facts: [
      ["FRONTEND", "REACT_TAILWIND"],
      ["MOBILE", "FLUTTER"],
      ["BACKEND", "FASTAPI_NODE"],
      ["DATA", "FIREBASE_SQL_NOSQL"]
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
      ["CONTACT", "/contact"]
    ]
  },
  contact: {
    title: "CONTACT CHANNELS",
    body:
      "Use the Launch Mission form, direct email, or CV button. LinkedIn and missing public URLs are marked as TODO until real links are added.",
    facts: [
      ["EMAIL", identity.email],
      ["FORM", "/contact"],
      ["CV", "AVAILABLE"],
      ["LINKEDIN", "TODO"]
    ]
  }
};

export const flowPages = {
  recruiter: {
    eyebrow: "Recruiter Path",
    title: "Career Signal Report",
    description:
      "A hiring-focused route showing role fit, project credibility, skills, experience, and proof points without forcing recruiters to dig.",
    icon: "badge",
    accent: "secondary",
    panels: [
      ["ROLE_FIT", "AI / Full-Stack Engineer"],
      ["STACK_CORE", "React, FastAPI, Flutter"],
      ["LOCATION", "Egypt / Remote"],
      ["STATUS", "Selective opportunities"]
    ],
    checklist: [
      "Review a direct fit for AI product, full-stack, Flutter, and QA-aware engineering roles.",
      "Scan project cards for role, stack, status, and qualitative outcomes.",
      "Jump from this flow to CV, contact, proof, or experience logs."
    ],
    cta: "Contact / CV"
  },
  client: {
    eyebrow: "Founder / Client Path",
    title: "Product Execution Brief",
    description:
      "A client-focused route highlighting what can be built, how risk is reduced, and which products prove execution ability.",
    icon: "rocket_launch",
    accent: "tertiary",
    panels: [
      ["OFFER", "AI MVPs + full-stack"],
      ["DELIVERY", "Architecture -> build -> QA"],
      ["SPECIALTY", "LLM product systems"],
      ["STATUS", "Open for selected work"]
    ],
    checklist: [
      "Translate product ideas into scoped MVPs with usable flows.",
      "Use AI where it helps the workflow, not where it only decorates the UI.",
      "Build with QA, integration, and future iteration in mind."
    ],
    cta: "Start a project brief"
  },
  technical: {
    eyebrow: "Technical Reviewer Path",
    title: "Architecture Audit Mode",
    description:
      "A technical route for engineers, CTOs, and reviewers who want to inspect stack logic, design decisions, testing, and maintainability.",
    icon: "database",
    accent: "secondary",
    panels: [
      ["FRONTEND", "React / Flutter"],
      ["BACKEND", "FastAPI / Node"],
      ["DATABASE", "Firebase / SQL / NoSQL"],
      ["QUALITY", "Postman + browser QA"]
    ],
    checklist: [
      "Inspect route-based structure, shared UI components, and data-driven rendering.",
      "Check how each case study explains architecture and tradeoffs.",
      "Use disabled TODO buttons as a signal that missing links are not being faked."
    ],
    cta: "Review builds"
  },
  "fast-scan": {
    eyebrow: "Fast Scan Mode",
    title: "60-Second Executive Brief",
    description:
      "A compressed proof route: who I am, what I build, strongest projects, stack, and contact CTA in one screen.",
    icon: "timer",
    accent: "error",
    panels: [
      ["WHO", "Full-Stack AI Engineer"],
      ["TOP_BUILD", "CalorieLens"],
      ["STACK", "React, Flutter, FastAPI"],
      ["CTA", "Launch Mission"]
    ],
    checklist: [
      "I build AI-powered web and mobile products.",
      "Strongest current work: CalorieLens, PreGen, AI Cyber Defense Lab.",
      "Main stack: Flutter, React, FastAPI, Firebase, Firestore, LLM systems, RAG, QA/testing."
    ],
    cta: "Launch mission"
  }
};

export const contactTopics = [
  "Career Opportunity",
  "AI Integration Project",
  "Full-Stack Development Project",
  "Flutter / Mobile App Project",
  "Technical Review",
  "Other"
];

export const services = [
  {
    title: "AI MVP Development",
    icon: "psychology",
    accent: "tertiary",
    description:
      "I build AI-powered web apps, chatbots, automation dashboards, and LLM workflows from idea to a working product.",
    stack: ["FastAPI", "LLM APIs", "RAG", "React", "Prompt Engineering"],
    relatedProject: "PreGen AI LMS"
  },
  {
    title: "Flutter Mobile Apps",
    icon: "phone_iphone",
    accent: "primary",
    description:
      "I build mobile apps with onboarding, auth flows, dashboards, camera features, paywall, and Firebase backend.",
    stack: ["Flutter", "BLoC", "Firebase Auth", "Firestore", "go_router"],
    relatedProject: "CalorieLens"
  },
  {
    title: "Full-Stack Web Apps",
    icon: "layers",
    accent: "secondary",
    description:
      "React frontend, FastAPI or Node.js backend, database, auth, and a deployment-ready structure.",
    stack: ["React", "Tailwind", "FastAPI", "Node.js", "PostgreSQL"],
    relatedProject: "AI Cyber Defense Lab"
  },
  {
    title: "RAG / LLM Systems",
    icon: "hub",
    accent: "tertiary",
    description:
      "Document ingestion, embeddings, vector search, retrieval, prompt design, and structured answer generation.",
    stack: ["RAG", "Embeddings", "LLM APIs", "FastAPI", "Structured Outputs"],
    relatedProject: "PreGen AI LMS"
  },
  {
    title: "Firebase / Supabase Integration",
    icon: "cloud_done",
    accent: "primary",
    description:
      "Auth, Firestore schemas, security rules, storage, and backend integration for web or mobile products.",
    stack: ["Firebase Auth", "Firestore", "Firestore Rules", "Storage", "Supabase"],
    relatedProject: "FoundIt"
  },
  {
    title: "UI/UX Implementation",
    icon: "web",
    accent: "secondary",
    description:
      "Convert Figma designs or screenshots into clean, responsive React or Flutter interfaces with proper states.",
    stack: ["React", "Tailwind CSS", "Flutter", "Figma", "Responsive Design"],
    relatedProject: "CalorieLens"
  }
];

export const aboutContent = {
  intro:
    "I'm Mohamed Boghdady, a Full-Stack AI Engineer based in Cairo, Egypt. I build production-grade AI systems combining LLM pipelines with scalable full-stack and mobile architectures.",
  focus:
    "My work sits at the intersection of LLM product systems, Flutter mobile development, and full-stack MERN/FastAPI engineering. I care about clean UI, reliable integrations, real QA, and delivery that actually works end-to-end.",
  approach: [
    "I start with the product flow before writing code — understanding what the user actually needs.",
    "I build with architecture in mind: reusable components, clean state, and scalable backend shapes.",
    "I run real QA: Postman tests, browser checks, form validation, and error state handling.",
    "I document clearly so handoffs, iterations, and future changes stay manageable."
  ],
  differentiation:
    "I combine AI engineering depth with practical full-stack execution. I don't just prototype ideas — I build systems that work end-to-end with auth, state, error handling, Docker deployment, and CI/CD readiness.",
  currentInterests: [
    "Building production LLM products with structured outputs and retrieval",
    "Mobile AI apps with Flutter and real camera/scan flows",
    "AI evaluation and QA patterns for reliable outputs",
    "Clean RAG architectures that are maintainable at scale"
  ],
  education: {
    degree: "Bachelor of Science in Computer Science — Artificial Intelligence",
    institution: "Faculty of Computers and Artificial Intelligence"
  },
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Spanish", level: "Intermediate" }
  ],
  courses: [
    { name: "MLOps Specialization", provider: "Coursera" },
    { name: "Meta Front-End Developer", provider: "Coursera" },
    { name: "Google Project Management", provider: "Coursera" },
    { name: "Google UX Design", provider: "Coursera" },
    { name: "Microservices with Node.js and React", provider: "Udemy" },
    { name: "Next.js & React", provider: "Udemy" },
    { name: "Reinforcement Learning in Python", provider: "Udemy" },
    { name: "AI & Meta Heuristics", provider: "Udemy" },
    { name: "Python for Finance", provider: "Udemy" },
    { name: "Agile & Scrum Project Management", provider: "Udemy" },
    { name: "Business Strategy Specialization", provider: "Coursera" },
    { name: "Salesforce Sales Development", provider: "Coursera" }
  ]
};

