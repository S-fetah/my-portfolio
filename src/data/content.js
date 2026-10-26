/* Central content source — update copy/data here instead of hunting through JSX.

   Content policy: every claim below is backed by a verifiable artifact —
   the CV (src/assets/Safiddine-Abdelfetah.pdf), local project source code,
   public GitHub repos, or the live production systems themselves.
   Anything not verifiable is either omitted or explicitly labelled
   (e.g. "concept", "in development", "not published here"). */

export const PROFILE = {
  name: "Safiddine Abdelfetah",
  firstName: "Safiddine",
  lastName: "Abdelfetah",
  aka: "Fettah Safi",
  title: "Backend Lead Developer",
  location: "Médéa, Algeria",
  phone: "+213 659 235 442",
  email: "fettahsafi.6@gmail.com",
  valueProp:
    "I build backend systems and full-stack products that turn complex workflows into reliable software — currently leading the backend of a multi-vertical travel commerce platform, backed by applied LLM & multi-agent systems research from my Master's thesis.",
  about: [
    "I'm a Backend Lead Developer at Fennec Booking, where I design, build, and operate the production backend of an Algerian travel commerce platform. One API serves eight business verticals — flights, hotels, transfers, vacation packages, e-visas, eSIMs, travel insurance, and ferries — normalizing multiple external providers behind unified booking, pricing, and payment workflows for web and mobile clients.",
    "Alongside production backend engineering, I completed my Master's research (2024–2025) in Computer Science at Yahia Farès University on applied AI: designing and developing a psychological assessment system powered by a 4-agent LLM pipeline (LoRA-fine-tuned LLaMA 3.2, LangChain & FAISS RAG, DistilBERT sentiment profiling, and quantized Mistral 7B clinical report generation). I'm comfortable across the entire lifecycle — from data modeling and model fine-tuning to production APIs, mobile apps, and cloud deployment.",
  ],
};

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/abdelfetah-safiddine-46582b263/",
  github: "https://github.com/S-fetah",
  twitter: "https://x.com/abdelfetah78",
};

/* Each group names where the skills actually ship — no logo wall. */
export const SKILL_GROUPS = [
  {
    title: "Backend Engineering",
    note: "Ships in: Fennec backend (production) · Makseb SaaS (in development)",
    skills: [
      "Node.js",
      "Express.js",
      "REST API design",
      "Authentication & authorization (JWT, OAuth 2.0)",
      "Socket.IO (real-time)",
      "Bull + Redis (background jobs)",
      "NestJS",
      "Golang",
    ],
  },
  {
    title: "Databases & Data Modeling",
    note: "Relational modeling in production · Supabase & Firestore across projects",
    skills: [
      "PostgreSQL",
      "Prisma ORM",
      "Relational modeling & migrations",
      "SQL",
      "Redis",
      "MongoDB",
      "Supabase",
      "Firestore",
    ],
  },
  {
    title: "Frontend & Mobile",
    note: "Ships in: Fennec web + mobile, Saha Mind, FMD Store, client sites",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive interfaces",
      "React Native",
      "Expo",
      "WebView integration & deep linking",
    ],
  },
  {
    title: "AI & LLM Engineering",
    note: "Saha Mind multi-agent system (Master's thesis) · passport OCR in production",
    skills: [
      "Multi-agent LLM systems (4-agent orchestration)",
      "Parameter-efficient fine-tuning (LoRA on LLaMA 3.2)",
      "Retrieval-Augmented Generation (RAG via LangChain & FAISS)",
      "Dense sentence embeddings (SentenceTransformers MiniLM)",
      "Sentiment classification (fine-tuned DistilBERT)",
      "Model quantization & local inference (quantized Mistral 7B)",
      "Empirical evaluation (Cosine similarity, LLM-as-a-judge, WordNet)",
      "AI vision APIs for structured data extraction",
      "Python, FastAPI, PyTorch, Hugging Face Transformers",
    ],
  },
  {
    title: "Deployment & Operations",
    note: "Production deployment & system operations",
    skills: [
      "Linux / Ubuntu VPS",
      "Docker & Docker Compose",
      "Nginx",
      "PM2",
      "Git & GitHub",
      "GitHub Actions CI/CD",
      "Vercel",
      "Sentry monitoring",
    ],
  },
  {
    title: "Security & Integrations",
    note: "Production-hardened patterns from real integrations",
    skills: [
      "HMAC request signing",
      "AES-256-GCM encryption",
      "Helmet · CORS · rate limiting",
      "bcrypt",
      "SATIM payments (CIB / Edahabia)",
      "SendGrid email",
      "Firebase",
      "Cloudinary",
      "Swagger / OpenAPI",
    ],
  },
];

export const LANGUAGES = ["Arabic", "French", "English"];

export const EXPERIENCE = [
  {
    role: "Backend Lead Developer",
    company: "Fennec Booking",
    period: "Oct 2025 – Present",
    bullets: [
      "Lead the design, build, and operation of the production backend for a multi-vertical travel platform — flights, hotels, transfers, packages, e-visas, eSIMs, insurance, and ferries — serving +10k registered users across web and mobile clients.",
      "Architected unified booking, pricing, and payment workflows normalizing multiple third-party travel suppliers and inventory feeds behind one cohesive API.",
      "Integrated secure payment gateways (CIB / Edahabia) and engineered pricing, commission, reconciliation, and automated wallet workflows.",
      "Built real-time customer support with presence tracking, live messaging, and instant status updates.",
      "Implemented fault-tolerant background processing with automated retries and recovery for asynchronous booking fulfillment.",
      "Integrated an AI-powered vision pipeline for structured passport data extraction to streamline e-visa applications.",
      "Engineered production security: token-based authentication, request signing, encrypted handoffs, rate limiting, and automated CI/CD deployment pipelines.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    period: "2022 – 2023",
    bullets: [
      "Built fast, dynamic websites for independent clients using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Delivered end-to-end projects including a book printing shop website, a library management website, and a clothing e-commerce site — covering UI, backend APIs, and database design.",
    ],
  },
  {
    role: "Backend Developer — Driver Mobile App",
    company: "Academic Project",
    period: "2021 – 2022",
    bullets: [
      "Built the backend and server/client logic (CRUD processes) for a mobile app helping drivers locate exact places, plus supporting front-end pages.",
      "Used Node.js/Express for the server, MongoDB for data, and React Native for the mobile front-end, integrating Google Maps and other APIs for location accuracy.",
    ],
  },
];

export const EDUCATION = [
  {
    school: "Yahia Farès University of Médéa",
    degree: "Master's in Computer Science — System Engineering & Web Technologies",
    period: "2023 – 2025",
    detail:
      "Master's Dissertation: “Design And Development Of A Psychological Assessment Tool Based On LLM Agents” — co-authored with Said Seghir Akram, supervised by Dr. Rahim Messaoud. Architected a 4-agent collaborative LLM pipeline (T5 grammar normalization, fine-tuned LLaMA 3.2 Instruct + LoRA with LangChain/FAISS RAG, DistilBERT sentiment profiling, and quantized Mistral 7B clinical report generation). Evaluated on 1,000 clinical test queries achieving 0.811 cosine similarity and 0.835 LLM semantic similarity, with cross-platform clients in bare React Native and Next.js.",
  },
  {
    school: "Yahia Farès University of Médéa",
    degree: "Bachelor's Degree (Licence), Computer Systems",
    period: "2023",
    detail: "Core foundation in algorithms, data structures, relational databases, operating systems, and computer systems architecture.",
  },
];

/* ------------------------------------------------------------------ */
/* Projects — three tiers: featured case studies, more projects,      */
/* earlier client/academic work. Featured cards open a full case      */
/* study; every claim below maps to code, docs, or a live system.     */
/* ------------------------------------------------------------------ */

export const FEATURED_PROJECTS = [
  {
    id: "fennec-platform",
    title: "Fennec Booking — Travel Commerce Platform",
    category: "Production backend · Professional work",
    status: "In production",
    statusKind: "production",
    role: "Backend Lead Developer (Oct 2025 – present)",
    description:
      "The production backend behind an Algerian travel commerce platform: one API unifying eight verticals and multiple external providers behind reliable booking, pricing, and payment workflows.",
    stack: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Multi-Provider Aggregation",
      "Payment Gateways",
      "Docker",
      "CI/CD",
    ],
    links: [],
    diagram: "fennec",
    caseStudy: [
      {
        heading: "The platform",
        paragraphs: [
          "Fennec Booking sells travel through one product: flights, hotels, transfers, vacation packages, e-visas, eSIMs, travel insurance, and ferry tickets — with a Next.js web app and an Expo/React Native mobile app as clients. I lead the backend that all of it runs on, from data model to deployment.",
        ],
      },
      {
        heading: "The engineering problem",
        paragraphs: [
          "Every vertical talks to external providers with their own APIs, quoting styles, currencies, and failure modes. On top of that sit business rules the providers know nothing about: agency pricing and commissions, SATIM card payments as used in Algeria, long-lived booking state that must survive retries and deployments, and customers who expect real-time support while a booking is in flight.",
        ],
      },
      {
        heading: "Platform & integration architecture",
        paragraphs: [
          "A service-oriented integration architecture engineered to seamlessly aggregate multiple external travel suppliers and deliver real-time booking capabilities:",
        ],
        bullets: [
          "Provider Integration Layer: Normalizes disparate third-party travel APIs into standardized contracts for flights, hotels, transfers, eSIMs, e-visas, and ferries.",
          "Unified Transaction Lifecycle: Coordinates multi-step booking, server-side price validation, and automated ticket/voucher fulfillment.",
          "Payment Processing: Integrates local card payment gateways with automated reconciliation and wallet management.",
          "Fault-Tolerant Operations: Implements background processing, automatic retries, and failure recovery for reliable booking completion.",
        ],
      },
      {
        heading: "Key workflows I built",
        bullets: [
          "Unified booking and payment flows across providers, with server-side price validation end to end.",
          "SATIM (CIB / Edahabia) payment integration with pricing, commission, reconciliation, and wallet logic.",
          "E-visa pipeline including AI-powered passport data extraction (vision OCR) for structured applicant data.",
          "PDF voucher generation and transactional email (SendGrid) for booking confirmations.",
          "Real-time customer support with presence tracking over Socket.IO and Redis Pub/Sub.",
        ],
      },
      {
        heading: "Clients and tooling",
        paragraphs: [
          "On the client side I also work on the Expo/React Native app — Google OAuth through deep links, WebView session handling, and FCM push notifications — and on internal tooling such as a Python financial reporting job that produces Excel and PDF statements for the team.",
        ],
      },
      {
        heading: "Confidentiality & NDA boundaries",
        paragraphs: [
          "Live in production since 2025, serving +10k registered users. In strict compliance with non-disclosure agreements (NDA), all proprietary database schemas, internal endpoint specifications, infrastructure credentials, and commercial partner contracts are confidential and omitted from this public portfolio.",
        ],
      },
    ],
  },
  {
    id: "saha-mind",
    title: "Saha Mind — Psychological Assessment with LLM Agents",
    category: "Applied AI · Master's dissertation",
    status: "Research · 2024–2025",
    statusKind: "research",
    role: "Co-author with Said Seghir Akram · Supervised by Dr. Rahim Messaoud · Built mobile client, backend pipeline & fine-tuning workflows",
    description:
      "My Master's dissertation: an AI-driven psychological assessment and therapeutic support platform coordinating four specialized LLM agents across a React Native mobile app and Next.js clinical dashboard.",
    stack: [
      "LLaMA 3.2 (LoRA)",
      "LangChain / RAG",
      "FAISS",
      "DistilBERT",
      "Quantized Mistral 7B",
      "React Native",
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Supabase",
    ],
    links: [
      {
        label: "Mobile client (GitHub)",
        url: "https://github.com/S-fetah/Saha_Mind_Mobile",
      },
      {
        label: "Clinician dashboard (GitHub)",
        url: "https://github.com/S-fetah/pfe-dashboard",
      },
    ],
    diagram: "saha",
    caseStudy: [
      {
        heading: "Research context & clinical challenge",
        paragraphs: [
          "Master's Degree in Computer Science (System Engineering & Web Technologies, Yahia Farès University of Médéa, Promotion 2024–2025), co-authored with Said Seghir Akram and supervised by Dr. Rahim Messaoud. Mental health systems globally struggle with accessibility, specialist shortages, and limited continuity between episodic consultations. Our thesis investigated how a modular, multi-agent LLM framework can provide continuous emotional support for patients and automated diagnostic documentation for clinicians — without replacing the human therapist.",
        ],
      },
      {
        heading: "4-Agent collaborative architecture",
        paragraphs: [
          "Instead of relying on a monolithic model, the system divides psychological workflow across four specialized language models orchestrated via FastAPI and LangChain:",
        ],
        bullets: [
          "Prompt Formatting Agent (vennify/t5-base-grammar-correction, <0.2s): Normalizes grammatical noise, cleans raw user queries, and structures inputs into role-defining, domain-specific instruction prompts with safety constraints.",
          "Therapeutic Conversational Agent 'Jarvis' (Fine-tuned LLaMA 3.2 Instruct + LoRA, <2s): Trained on psycho-counseling datasets and augmented via LangChain RAG. Uses 384-dimensional dense sentence embeddings (SentenceTransformers paraphrase-MiniLM-L6-v2) and FAISS vector similarity search against PsychoCounseling.npy to deliver contextually grounded, empathetic dialogue.",
          "Sentiment Analysis Agent (Fine-tuned DistilBERT, <3s): Processes multi-turn conversation history to extract emotional valence and mental health distress markers (anxiety, depression, irritability) across sessions.",
          "Medical Report Generation Agent (Quantized Mistral 7B, <12s): Synthesizes patient transcripts, sentiment trajectories, and clinician notes into structured diagnostic reports and DSM-aligned clinical summaries.",
        ],
      },
      {
        heading: "Full-stack client & cloud ecosystem",
        paragraphs: [
          "The architecture was implemented and tested end-to-end across two complementary client applications backed by cloud infrastructure:",
        ],
        bullets: [
          "Patient Mobile App (React Native, TypeScript — open source on GitHub): Daily mood tracker with timeline emojis, streak tracking, wellness tips, up to 5 daily self-assessment quizzes, and real-time chat with Jarvis and assigned clinicians.",
          "Practitioner Web Dashboard (Next.js, TypeScript, ShadCN UI — open source on GitHub): Centralized patient registry, 7-day emotional trend analysis, interactive regional distribution map of Algeria (Médéa, Béjaïa, Adrar), appointment calendar, and automated clinical report review.",
          "Backend & Orchestration: Python FastAPI backend running ASGI/Uvicorn with Pyngrok tunnels to Google Colab GPU runtimes for model inference, paired with Supabase (managed PostgreSQL, real-time sync, Auth, and role-based access control).",
        ],
      },
      {
        heading: "Quantitative benchmarks & evaluation results",
        paragraphs: [
          "We benchmarked the system on 1,000 real-world sample test pairs evaluated across three semantic similarity dimensions against base LLaMA 3.2, phi-2+RAG, and GPT-2 Large:",
        ],
        bullets: [
          "Cosine Similarity (Sentence Transformers): Jarvis + RAG achieved 0.811 (outperforming base LLaMA 3.2 at 0.636, phi-2+RAG at 0.700, and GPT-2 Large at 0.486).",
          "LLM-as-a-Judge Semantic Score: Jarvis + RAG scored 0.835 (vs 0.660 base LLaMA 3.2, 0.721 phi-2+RAG, and 0.523 GPT-2 Large).",
          "WordNet Lexical/Semantic Similarity: Jarvis + RAG reached 0.784 (vs 0.588 base LLaMA 3.2, 0.699 phi-2+RAG, and 0.517 GPT-2 Large).",
          "Qualitative Findings: Baseline models exhibited transactional, overly analytical, or prematurely diagnostic behavior. In contrast, the fine-tuned Jarvis agent consistently prioritized emotional validation, non-judgmental listening, and collaborative empowerment ('we can work together to heal').",
        ],
      },
      {
        heading: "Ethical boundaries & clinical safeguards",
        paragraphs: [
          "The system incorporates strict ethical boundaries: patient-facing summaries are explicitly separated from full medical diagnoses to prevent self-misinterpretation, and the platform is designed strictly as an assistive tool to empower licensed psychologists rather than operate autonomously.",
        ],
      },
    ],
  },
];

export const MORE_PROJECTS = [
  {
    id: "fmd-store",
    title: "FMD Store",
    category: "E-commerce · Live product",
    status: "Live",
    statusKind: "production",
    description:
      "A cash-on-delivery storefront for the Algerian market, written in Algerian Darija: curated student products with variant pickers and image carousels, a bundle offer, WhatsApp ordering, and a checkout funnel backed by 80 pickup points.",
    image: "fmdStore",
    alt: "FMD Store product preview",
    links: [{ label: "Visit store", url: "https://fmd-store.vercel.app/" }],
    tags: ["E-commerce", "Darija / Arabic UX", "COD checkout", "Vercel"],
  },
  {
    id: "fennec-mobile",
    title: "Fennec Booking Mobile App",
    category: "Mobile · Professional work",
    status: "In production",
    statusKind: "production",
    description:
      "The platform's Expo/React Native client. My work centered on authentication and session handling: Google OAuth completed through deep links and validated server-side, cookie session injection into the WebView, FCM push notifications, and offline/reconnection states.",
    image: "fennecMobile",
    alt: "Fennec Booking mobile app preview",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase",
      "Deep linking",
      "WebView",
    ],
  },
  {
    id: "medi-care",
    title: "Medi-Care — Healthcare Appointments API",
    category: "Backend · API design",
    status: "Completed",
    statusKind: "default",
    description:
      "Role-based REST API for medical appointments: patient/doctor/admin flows, doctor onboarding with certificate review, appointment slots, bookings, and payment records — on Firebase Auth and Firestore with Cloudinary uploads, fully documented with API docs and a Postman collection.",
    image: "medicare",
    alt: "Medi-Care healthcare platform preview",
    links: [
      { label: "GitHub", url: "https://github.com/S-fetah/medi-care" },
    ],
    tags: ["Fastify", "Firebase Auth", "Firestore", "Cloudinary", "REST"],
  },
  {
    id: "makseb",
    title: "Makseb — Travel-Agency SaaS",
    category: "Backend · Product engineering",
    status: "In development",
    statusKind: "default",
    description:
      "Multi-tenant backend for Algerian travel-agency websites: subscription plans, template-driven site sections, agency users and roles — a NestJS + Prisma schema designed around agency onboarding.",
    image: "makseb",
    alt: "Makseb travel-agency SaaS dashboard preview",
    tags: ["NestJS", "Prisma", "PostgreSQL", "SaaS", "Multi-tenancy"],
  },
  {
    id: "dz-autoimport",
    title: "DZ-AutoImport — Automotive Showroom",
    category: "Full-stack product · Concept",
    status: "Concept",
    statusKind: "concept",
    description:
      "A planned automotive import showroom for the Algerian market: cinematic vehicle presentations, brand and model browsing with specs and availability, 360° media sequences, WhatsApp inquiries, and an admin interface for inventory. Early concept — not yet public.",
    image: "autoImport",
    alt: "DZ-AutoImport automotive showroom preview",
    tags: ["Product design", "Automotive", "Lead generation", "Admin CMS"],
  },
  {
    id: "travel-leads",
    title: "Travel-Agency Lead Discovery",
    category: "Internal tool · Prototype",
    status: "Prototype",
    statusKind: "concept",
    description:
      "Early internal tooling for finding travel-agency prospects: collects travel-related content by country into a structured dataset as the groundwork for area filtering, deduplication, and Excel-exported outreach lists.",
    image: "travelLeads",
    alt: "Travel-agency lead discovery tool preview",
    tags: ["Python", "Apify", "Data collection", "Excel export"],
  },
];

/* image: key resolved to an imported asset in Projects.jsx. */
export const EARLIER_PROJECTS = [
  {
    id: "printing-workshop",
    title: "Book Printing Shop Website",
    description:
      "End-to-end MERN website for a book printing shop — storefront UI, backend APIs, and database design delivered for an independent client.",
    image: "printerLibrary",
    alt: "Book printing shop website preview",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    id: "library-site",
    title: "Library Management Website",
    description:
      "Full-stack library management website covering catalog UI, backend APIs, and database design for an independent client.",
    image: "library",
    alt: "Library management website preview",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    id: "driver-app",
    title: "Driver Mobile App (Backend)",
    description:
      "Backend and server/client CRUD logic for a mobile app helping drivers locate exact places — hotels, mechanics, spare parts, parking, towing — with Google Maps integration.",
    image: "driver",
    alt: "Driver mobile app preview",
    tags: ["Node.js", "Express.js", "MongoDB", "React Native", "Google Maps API"],
  },
  {
    id: "offline-maps",
    title: "Algerian Offline Maps Application",
    description:
      "JavaScript mapping app for Algeria with location discovery and offline-oriented access to hotels and parking.",
    image: "offlineMaps",
    alt: "Algerian offline maps navigation preview",
    tags: ["JavaScript", "Mapping", "Offline-first"],
  },
];

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
