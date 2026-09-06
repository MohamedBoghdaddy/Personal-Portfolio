import cvPdf from "../assets/cv/Mohamed-Boghdaddy.pdf";
import portraitImage from "../assets/images/Me6.jpg";

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Skills", to: "/skills" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" }
];

export const identity = {
  name: "Mohamed Boghdady",
  alias: "BOGHDADDY OS",
  title: "Technical Founder & Full Stack AI Engineer",
  subtitle: "Technical Founder · Full Stack AI Engineer · Applied AI",
  headline: "I design, build, and ship AI-powered products from architecture to production.",
  summary:
    "I work across AI, backend, frontend, and infrastructure — turning business problems into real software products. My work spans LLM pipelines, computer vision, and full-stack platforms across insurance, career services, and ecommerce, increasingly as a founder and technical product builder rather than only an individual contributor.",
  location: "Cairo, Egypt / Remote",
  email: "mohamedhammad3.142@gmail.com",
  phone: "+20 112 413 5316",
  cvUrl: cvPdf,
  portraitImage,
  githubUrl: "https://github.com/MohamedBoghdaddy",
  linkedinUrl: "https://www.linkedin.com/in/mohamed-el-boghdaddy/"
};

export const skillGroups = [
  {
    group: "AI & LLM Systems",
    icon: "psychology",
    accent: "tertiary",
    relatedProjects: ["PreGen", "AI Cyber Defense Lab", "BugPilot", "RAG Chatbot"],
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
    relatedProjects: ["PreGen", "HunterFlow", "AI Cyber Defense Lab", "Hedj"],
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
    relatedProjects: ["PreGen", "CalorieLens", "Document Management System"],
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
    relatedProjects: ["CalorieLens", "FoundIt", "PreGen"],
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
    relatedProjects: ["PartIQ", "MammoAI", "Sportify AI", "Stock Prediction"],
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
    relatedProjects: ["PreGen", "CalorieLens", "Geidea UAT"],
    nodes: [
      { name: "Postman / API Testing", level: "Strong" },
      { name: "UAT & Regression Testing", level: "Strong" },
      { name: "CI/CD Pipelines", level: "Strong" },
      { name: "Docker Deployment", level: "Strong" },
      { name: "Linux / Shell", level: "Working Knowledge" }
    ]
  }
];

export const experiences = [
  {
    role: "Technical Co-Founder",
    company: "Enara",
    companyUrl: "https://enara.app/",
    period: "Aug 2026 – Present",
    status: "Active",
    tier: "featured",
    bullets: [
      "Own product direction and roadmap planning, translating business requirements and user needs into technical priorities.",
      "Lead architecture and major technical decisions across AI and conventional software systems.",
      "Lead end-to-end product development, balancing engineering decisions with product goals, scalability, UX, and delivery speed."
    ],
    tags: ["Product Strategy", "Architecture", "AI Systems", "Full-Stack"]
  },
  {
    role: "Founder",
    company: "Gapsmania",
    companyUrl: "https://www.gapsmania-sol.com/",
    period: "Feb 2026 – Present",
    status: "Active",
    tier: "featured",
    bullets: [
      "Identify product opportunities — gaps in existing workflows — and design technology products around real problems.",
      "Own product strategy, architecture, and rapid experimentation across several products spanning different verticals.",
      "Move concepts from idea through design, architecture, and implementation across AI and software products."
    ],
    tags: ["Founder", "Product Strategy", "AI Products", "Rapid Prototyping"]
  },
  {
    role: "Full-Stack AI Engineer",
    company: "PreGen",
    companyUrl: "https://pregeneg.com/",
    period: "Oct 2025 – Present",
    status: "Active",
    tier: "featured",
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
    tier: "earlier",
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
    tier: "earlier",
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
    tier: "earlier",
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
    tier: "earlier",
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
    tier: "earlier",
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
    tier: "earlier",
    bullets: [
      "Built responsive landing pages and interactive web applications.",
      "Developed a stopwatch web app with precise timing logic using vanilla JS."
    ],
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  }
];

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
    relatedProject: "PreGen"
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
    relatedProject: "PreGen"
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
    "I'm Mohamed Boghdady, a Technical Founder and Full-Stack AI Engineer based in Cairo, Egypt. I build production-grade AI systems combining LLM pipelines, computer vision, and scalable full-stack architectures — and increasingly lead product direction as a founder, not just an individual contributor.",
  focus:
    "My work sits at the intersection of product strategy, LLM systems, computer vision, and full-stack MERN/FastAPI engineering. I care about clean UI, reliable integrations, real QA, and delivery that actually works end-to-end — from architecture decisions down to shipped code.",
  approach: [
    "I start with the product flow before writing code — understanding what the user and business actually need.",
    "I build with architecture in mind: reusable components, clean state, and scalable backend shapes.",
    "I run real QA: Postman tests, browser checks, form validation, and error state handling.",
    "I document clearly so handoffs, iterations, and future changes stay manageable."
  ],
  differentiation:
    "I combine product and architecture thinking with hands-on full-stack and AI execution. I don't just prototype ideas — I turn business problems into shipped systems, with auth, state, error handling, Docker deployment, and CI/CD readiness built in.",
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
