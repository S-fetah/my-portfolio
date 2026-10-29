/* Central content source.
   Every claim below is grounded in the CV, the production systems described,
   public repositories, or the dissertation. Project maturity is labelled
   honestly; confidential employer details are intentionally omitted. */

export const SITE = {
  url: "https://myportfolio-nu-bay.vercel.app",
  name: "Safiddine Abdelfetah",
  title: "Backend Lead Developer & Full-Stack Engineer",
  description:
    "Safiddine Abdelfetah is a Backend Lead Developer and Full-Stack Engineer in Médéa, Algeria. He builds production backends, multi-provider integrations, and full-stack products — with applied LLM research from his Master's dissertation.",
  ogImage: "/og/home.png",
};

export const PROFILE = {
  name: "Safiddine Abdelfetah",
  firstName: "Safiddine",
  lastName: "Abdelfetah",
  title: "Backend Lead Developer",
  secondaryTitle: "Full-Stack Engineer",
  roleLine: "Backend Lead Developer · Full-Stack Engineer",
  location: "Médéa, Algeria",
  timezone: "UTC+1",
  phone: "+213 659 235 442",
  email: "fettahsafi.6@gmail.com",
  availability: "Open to backend & full-stack roles",
  valueProp:
    "I build the systems behind real products: production backends, multi-provider integrations, and full-stack applications that hold up under load, failure, and change.",
  shortBio:
    "Backend Lead Developer at Fennec Booking, where I run the production backend of a multi-vertical travel commerce platform. Master's research in applied LLM systems.",
  about: [
    "I care about the part of software that has to keep working: the data model, the integration boundary, the retry path, the payment that must reconcile. At Fennec Booking I lead the backend behind a travel platform that sells across eight verticals through one API, connecting external suppliers to unified booking, pricing, payment, and support workflows.",
    "My background spans the full stack — React and React Native clients, Node.js and FastAPI services, PostgreSQL, Redis, and Docker — alongside applied AI research. My Master's dissertation designed a four-agent LLM pipeline for psychological assessment, evaluated on 1,000 clinical queries. I am most useful where the model, the API, and the interface have to agree.",
  ],
  principles: [
    {
      title: "Unify the contract",
      body: "Provider APIs are messy by nature. The job is to give the rest of the product one dependable interface.",
    },
    {
      title: "Assume failure",
      body: "Retries, reconciliation, and recovery belong in the design — not in the incident review.",
    },
    {
      title: "Own the lifecycle",
      body: "From schema and endpoint to deployment, monitoring, and the client that consumes it.",
    },
  ],
};

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/abdelfetah-safiddine-46582b263/",
  github: "https://github.com/S-fetah",
  twitter: "https://x.com/abdelfetah78",
};

export const METRICS = [
  { value: "8", label: "travel verticals", note: "behind one platform API" },
  { value: "10k+", label: "registered users", note: "on the production platform" },
  { value: "4", label: "LLM agents", note: "in the dissertation system" },
  { value: "0.811", label: "cosine similarity", note: "evaluated on 1,000 queries" },
];

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

/* Skill groups are nouns, not sentence-length chips. The evidence line names
   where the work actually shipped. */
export const SKILL_GROUPS = [
  {
    id: "backend",
    title: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "FastAPI",
      "Go",
      "REST API design",
      "JWT & OAuth 2.0",
      "Socket.IO",
      "Bull + Redis",
    ],
    evidence: "Production at Fennec Booking · Makseb · Medi-Care",
  },
  {
    id: "frontend",
    title: "Frontend Development",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    evidence: "Fennec web · Saha Mind dashboard · client sites",
  },
  {
    id: "databases",
    title: "Databases",
    items: [
      "PostgreSQL",
      "Prisma",
      "Redis",
      "MongoDB",
      "Supabase",
      "Firestore",
      "SQL & migrations",
    ],
    evidence: "Relational modeling in production · managed data across projects",
  },
  {
    id: "integrations",
    title: "APIs & Integrations",
    items: [
      "SATIM (CIB / Edahabia)",
      "SendGrid",
      "Firebase",
      "Cloudinary",
      "Google Maps",
      "Swagger / OpenAPI",
      "HMAC request signing",
      "AES-256-GCM",
    ],
    evidence: "Travel suppliers · payments · notifications · document uploads",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    items: [
      "React Native",
      "Expo",
      "Deep linking",
      "WebView sessions",
      "FCM push",
      "Offline states",
    ],
    evidence: "Fennec mobile client · Saha Mind patient app",
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    items: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "LoRA fine-tuning",
      "RAG · LangChain · FAISS",
      "DistilBERT",
      "Mistral 7B",
      "Vision OCR",
    ],
    evidence: "Saha Mind dissertation · passport extraction in production",
  },
  {
    id: "devops",
    title: "DevOps & Deployment",
    items: [
      "Linux / Ubuntu VPS",
      "Docker & Compose",
      "Nginx",
      "PM2",
      "GitHub Actions",
      "Vercel",
      "Sentry",
    ],
    evidence: "Production deployment · CI/CD · monitoring",
  },
  {
    id: "workflow",
    title: "Tools & Workflow",
    items: ["Git & GitHub", "Postman", "OpenAPI docs", "CI/CD", "Sentry"],
    evidence: "Day-to-day delivery and production operations",
  },
];

export const LANGUAGES = ["Arabic", "French", "English"];

export const EXPERIENCE = [
  {
    id: "fennec",
    role: "Backend Lead Developer",
    company: "Fennec Booking",
    period: "Oct 2025 — Present",
    summary:
      "Leading the production backend of a multi-vertical travel commerce platform used by web and mobile clients.",
    achievements: [
      { value: "8", label: "verticals" },
      { value: "10k+", label: "registered users" },
      { value: "1", label: "unified API" },
    ],
    groups: [
      {
        title: "Platform & integrations",
        bullets: [
          "Lead the design, build, and operation of the production backend across flights, hotels, transfers, packages, e-visas, eSIMs, insurance, and ferries.",
          "Architected unified booking, pricing, and payment workflows that normalize multiple third-party travel suppliers behind one cohesive API.",
        ],
      },
      {
        title: "Payments & operations",
        bullets: [
          "Integrated SATIM card payments (CIB / Edahabia) and engineered pricing, commission, reconciliation, and automated wallet workflows.",
          "Implemented fault-tolerant background processing with automated retries and recovery for asynchronous booking fulfillment.",
        ],
      },
      {
        title: "Real-time & reliability",
        bullets: [
          "Built real-time customer support with presence tracking, live messaging, and instant status updates over Socket.IO and Redis.",
          "Integrated an AI-powered vision pipeline for structured passport extraction in e-visa applications.",
        ],
      },
      {
        title: "Security & delivery",
        bullets: [
          "Engineered token-based authentication, request signing, encrypted handoffs, rate limiting, and automated CI/CD deployment pipelines.",
        ],
      },
    ],
    stack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Docker",
      "CI/CD",
    ],
    caseStudy: "/work/fennec-booking",
  },
  {
    id: "freelance",
    role: "Freelance Full-Stack Developer",
    company: "Self-employed",
    period: "2022 — 2023",
    summary:
      "End-to-end client delivery with the MERN stack — interface, APIs, and database design.",
    bullets: [
      "Built fast, dynamic websites for independent clients with MongoDB, Express.js, React, and Node.js.",
      "Delivered a book printing shop site, a library management site, and a clothing e-commerce site.",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    id: "driver",
    role: "Backend Developer — Driver Mobile App",
    company: "Academic project",
    period: "2021 — 2022",
    summary:
      "Backend and server/client logic for a location-focused mobile application.",
    bullets: [
      "Built the CRUD backend for a mobile app helping drivers locate hotels, mechanics, spare parts, parking, and towing.",
      "Used Node.js/Express, MongoDB, React Native, and Google Maps APIs for location accuracy.",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "React Native", "Google Maps"],
  },
];

export const EDUCATION = [
  {
    id: "master",
    school: "Yahia Farès University of Médéa",
    degree: "Master's in Computer Science — System Engineering & Web Technologies",
    period: "2023 — 2025",
    detail:
      "Dissertation: a psychological assessment tool built on a four-agent LLM pipeline, co-authored with Said Seghir Akram and supervised by Dr. Rahim Messaoud.",
    link: "/work/saha-mind",
  },
  {
    id: "licence",
    school: "Yahia Farès University of Médéa",
    degree: "Bachelor's Degree (Licence), Computer Systems",
    period: "2023",
    detail:
      "Foundations in algorithms, data structures, relational databases, operating systems, and computer architecture.",
  },
];

/* ------------------------------------------------------------------ */
/* Projects — two case studies, selected work, and a compact archive. */
/* ------------------------------------------------------------------ */

export const FEATURED_PROJECTS = [
  {
    id: "fennec-platform",
    slug: "fennec-booking",
    route: "/work/fennec-booking",
    title: "Fennec Booking",
    subtitle: "Travel commerce platform",
    category: "Production backend · Professional work",
    status: "In production",
    statusKind: "production",
    period: "2025 — Present",
    role: "Backend Lead Developer",
    description:
      "The production backend behind an Algerian travel commerce platform: one API unifying eight verticals and multiple external providers behind reliable booking, pricing, and payment workflows.",
    lede:
      "Eight travel verticals. Multiple suppliers. One booking lifecycle — designed, built, and operated in production.",
    metrics: [
      { value: "8", label: "travel verticals" },
      { value: "10k+", label: "registered users" },
      { value: "1", label: "unified API" },
    ],
    stack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "SATIM",
      "Docker",
      "CI/CD",
    ],
    links: [],
    diagram: "fennec",
    coverType: "fennec",
    metaTitle: "Fennec Booking — Travel Commerce Backend Case Study",
    metaDescription:
      "How Safiddine Abdelfetah leads the production backend of Fennec Booking: eight travel verticals, multi-provider integration, SATIM payments, real-time support, and resilient booking fulfilment.",
    ogImage: "/og/fennec-booking.png",
    outcomes: [
      "Eight travel verticals served through one backend API.",
      "Live in production since 2025, serving 10,000+ registered users.",
      "SATIM card payments, pricing, commission, reconciliation, and wallet workflows in production.",
      "Fault-tolerant background processing protects asynchronous booking fulfilment.",
    ],
    confidentiality:
      "All proprietary schemas, internal endpoints, infrastructure credentials, and commercial partner contracts are omitted in line with non-disclosure agreements.",
    caseStudy: [
      {
        id: "platform",
        heading: "The platform",
        paragraphs: [
          "Fennec Booking sells travel through one product: flights, hotels, transfers, vacation packages, e-visas, eSIMs, travel insurance, and ferry tickets — with a Next.js web app and an Expo/React Native mobile app as clients. I lead the backend that all of it runs on, from data model to deployment.",
        ],
      },
      {
        id: "problem",
        heading: "The engineering problem",
        paragraphs: [
          "Every vertical talks to external providers with their own APIs, quoting styles, currencies, and failure modes. On top of that sit business rules the providers know nothing about: agency pricing and commissions, SATIM card payments as used in Algeria, long-lived booking state that must survive retries and deployments, and customers who expect real-time support while a booking is in flight.",
        ],
      },
      {
        id: "architecture",
        heading: "Platform & integration architecture",
        paragraphs: [
          "A service-oriented integration architecture designed to aggregate multiple external travel suppliers and deliver real-time booking capabilities:",
        ],
        bullets: [
          "Provider integration layer: normalizes disparate third-party travel APIs into standardized contracts for flights, hotels, transfers, eSIMs, e-visas, and ferries.",
          "Unified transaction lifecycle: coordinates multi-step booking, server-side price validation, and automated ticket or voucher fulfilment.",
          "Payment processing: integrates local card payment gateways with automated reconciliation and wallet management.",
          "Fault-tolerant operations: background processing, automatic retries, and failure recovery for reliable booking completion.",
        ],
      },
      {
        id: "workflows",
        heading: "Key workflows I built",
        bullets: [
          "Unified booking and payment flows across providers, with server-side price validation end to end.",
          "SATIM (CIB / Edahabia) payment integration with pricing, commission, reconciliation, and wallet logic.",
          "E-visa pipeline including AI-powered passport data extraction for structured applicant data.",
          "PDF voucher generation and transactional email through SendGrid for booking confirmations.",
          "Real-time customer support with presence tracking over Socket.IO and Redis Pub/Sub.",
        ],
      },
      {
        id: "clients",
        heading: "Clients & tooling",
        paragraphs: [
          "On the client side I also work on the Expo/React Native app — Google OAuth through deep links, WebView session handling, and FCM push notifications — and on internal tooling such as a Python financial reporting job that produces Excel and PDF statements for the team.",
        ],
      },
      {
        id: "confidentiality",
        heading: "Confidentiality & NDA boundaries",
        paragraphs: [
          "Live in production since 2025, serving 10,000+ registered users. In strict compliance with non-disclosure agreements, all proprietary database schemas, internal endpoint specifications, infrastructure credentials, and commercial partner contracts are confidential and omitted from this public portfolio.",
        ],
        callout:
          "The architecture diagram is intentionally sanitized. It shows the shape of the integration model, not proprietary implementation detail.",
      },
    ],
  },
  {
    id: "saha-mind",
    slug: "saha-mind",
    route: "/work/saha-mind",
    title: "Saha Mind",
    subtitle: "Psychological assessment with LLM agents",
    category: "Applied AI · Master's dissertation",
    status: "Research · 2024–2025",
    statusKind: "research",
    period: "2024 — 2025",
    role: "Co-author with Said Seghir Akram · Supervised by Dr. Rahim Messaoud",
    description:
      "My Master's dissertation: an AI-driven psychological assessment and therapeutic support platform coordinating four specialized LLM agents across a React Native mobile app and a Next.js clinical dashboard.",
    lede:
      "Four specialized models, one clinical workflow, and an evaluation designed to test whether the system was actually helpful.",
    metrics: [
      { value: "4", label: "specialized agents" },
      { value: "1,000", label: "evaluation queries" },
      { value: "0.811", label: "cosine similarity" },
    ],
    stack: [
      "LLaMA 3.2 (LoRA)",
      "LangChain / RAG",
      "FAISS",
      "DistilBERT",
      "Quantized Mistral 7B",
      "React Native",
      "Next.js",
      "FastAPI",
      "Supabase",
    ],
    links: [
      {
        label: "Mobile client on GitHub",
        url: "https://github.com/S-fetah/Saha_Mind_Mobile",
      },
      {
        label: "Clinician dashboard on GitHub",
        url: "https://github.com/S-fetah/pfe-dashboard",
      },
    ],
    diagram: "saha",
    coverType: "saha",
    metaTitle: "Saha Mind — LLM Agent Research Case Study",
    metaDescription:
      "Saha Mind: a Master's dissertation using a four-agent LLM pipeline — LoRA, RAG, DistilBERT, and quantized Mistral — evaluated on 1,000 clinical queries with 0.811 cosine similarity.",
    ogImage: "/og/saha-mind.png",
    disclaimer:
      "Research prototype, not a clinical product. Saha Mind was not deployed for patient care and is not a substitute for a licensed therapist.",
    outcomes: [
      "Four specialized agents coordinated across a React Native client and a Next.js dashboard.",
      "Evaluated on 1,000 real-world sample test pairs using three semantic similarity measures.",
      "Jarvis + RAG scored 0.811 cosine similarity and 0.835 on an LLM-as-a-judge semantic score.",
      "The work was documented as assistive clinical tooling, not autonomous diagnosis.",
    ],
    evaluation: {
      caption:
        "Evaluation on 1,000 real-world sample test pairs. Higher is better; the proposed system is highlighted.",
      columns: [
        "Metric",
        "LLaMA 3.2",
        "phi-2 + RAG",
        "GPT-2 Large",
        "Jarvis + RAG",
      ],
      rows: [
        {
          label: "Cosine similarity",
          values: ["0.636", "0.700", "0.486", "0.811"],
        },
        {
          label: "LLM-as-a-judge",
          values: ["0.660", "0.721", "0.523", "0.835"],
        },
        {
          label: "WordNet similarity",
          values: ["0.588", "0.699", "0.517", "0.784"],
        },
      ],
    },
    caseStudy: [
      {
        id: "research",
        heading: "Research context & clinical challenge",
        paragraphs: [
          "Master's Degree in Computer Science (System Engineering & Web Technologies, Yahia Farès University of Médéa, 2024–2025), co-authored with Said Seghir Akram and supervised by Dr. Rahim Messaoud. Mental health systems globally struggle with accessibility, specialist shortages, and limited continuity between consultations. Our thesis investigated how a modular, multi-agent LLM framework can provide continuous emotional support and automated documentation for clinicians — without replacing the human therapist.",
        ],
      },
      {
        id: "architecture",
        heading: "4-agent collaborative architecture",
        paragraphs: [
          "Instead of relying on a monolithic model, the system divides the psychological workflow across four specialized language models orchestrated through FastAPI and LangChain:",
        ],
        bullets: [
          "Prompt Formatting Agent (vennify/t5-base-grammar-correction, <0.2s): normalizes grammatical noise, cleans raw queries, and structures inputs with safety constraints.",
          "Therapeutic Conversational Agent 'Jarvis' (fine-tuned LLaMA 3.2 Instruct + LoRA, <2s): trained on psycho-counseling datasets and augmented with RAG using 384-dimensional MiniLM embeddings and FAISS.",
          "Sentiment Analysis Agent (fine-tuned DistilBERT, <3s): processes multi-turn conversation history to extract emotional valence and distress markers.",
          "Medical Report Generation Agent (quantized Mistral 7B, <12s): synthesizes transcripts, sentiment trajectories, and clinician notes into structured, DSM-aligned clinical summaries.",
        ],
      },
      {
        id: "clients",
        heading: "Full-stack client & cloud ecosystem",
        paragraphs: [
          "The architecture was implemented and tested end-to-end across two complementary client applications backed by cloud infrastructure:",
        ],
        bullets: [
          "Patient mobile app (React Native, TypeScript): mood tracking, streaks, self-assessment quizzes, and real-time chat with Jarvis and assigned clinicians.",
          "Practitioner dashboard (Next.js, TypeScript, shadcn/ui): patient registry, seven-day emotional trend analysis, regional distribution map, appointment calendar, and report review.",
          "Backend and orchestration: Python FastAPI on ASGI/Uvicorn, Pyngrok tunnels to Google Colab GPU runtimes, and Supabase for PostgreSQL, real-time sync, auth, and role-based access.",
        ],
      },
      {
        id: "evaluation",
        heading: "Quantitative benchmarks",
        paragraphs: [
          "We benchmarked the system against base LLaMA 3.2, phi-2 + RAG, and GPT-2 Large across three semantic similarity dimensions. The fine-tuned Jarvis agent with RAG produced the strongest results in every category.",
        ],
      },
      {
        id: "ethics",
        heading: "Ethical boundaries & safeguards",
        paragraphs: [
          "The system incorporates strict ethical boundaries: patient-facing summaries are explicitly separated from full medical diagnoses to prevent self-misinterpretation, and the platform is designed as an assistive tool to empower licensed psychologists rather than operate autonomously.",
        ],
        callout:
          "Research prototype: not validated for clinical use, not deployed for patient care, and not a replacement for professional mental-health support.",
      },
      {
        id: "lessons",
        heading: "What the project reinforced",
        bullets: [
          "Evaluation design matters as much as model choice: the same outputs read differently under cosine, judge, and lexical measures.",
          "Specialization buys control: each agent has a narrow job and an explicit latency budget.",
          "Clinical tooling needs boundaries: patient-facing summaries and diagnostic documentation are different products.",
        ],
      },
    ],
  },
];

export const SELECTED_PROJECTS = [
  {
    id: "fmd-store",
    title: "FMD Store",
    category: "E-commerce · Live product",
    status: "Live",
    statusKind: "production",
    description:
      "A cash-on-delivery storefront for the Algerian market, written in Algerian Darija: curated student products, variant pickers, a bundle offer, WhatsApp ordering, and a checkout funnel backed by 80 pickup points.",
    image: "fmdStore",
    alt: "FMD Store product preview",
    links: [{ label: "Visit store", url: "https://fmd-store.vercel.app/" }],
    tags: ["E-commerce", "Darija UX", "COD checkout", "Vercel"],
    meta: "Storefront · 80 pickup points",
  },
  {
    id: "fennec-mobile",
    title: "Fennec Mobile",
    category: "Mobile · Professional work",
    status: "In production",
    statusKind: "production",
    description:
      "The platform's Expo/React Native client. My work centered on authentication and session handling: Google OAuth through deep links, cookie session injection into the WebView, FCM push notifications, and offline and reconnection states.",
    image: "fennecMobile",
    alt: "Fennec Booking mobile app preview",
    links: [],
    tags: ["React Native", "Expo", "TypeScript", "Firebase", "Deep linking"],
    meta: "iOS & Android client",
  },
  {
    id: "medi-care",
    title: "Medi-Care",
    category: "Backend · API design",
    status: "Completed",
    statusKind: "default",
    description:
      "Role-based REST API for medical appointments: patient, doctor, and admin flows, doctor onboarding with certificate review, appointment slots, bookings, and payment records on Firebase Auth and Firestore.",
    image: "medicare",
    alt: "Medi-Care healthcare platform preview",
    links: [{ label: "GitHub", url: "https://github.com/S-fetah/medi-care" }],
    tags: ["Fastify", "Firebase Auth", "Firestore", "Cloudinary", "REST"],
    meta: "API · documented with Postman",
  },
];

/* Compact archive — every entry gets a row, not equal visual weight. */
export const ADDITIONAL_PROJECTS = [
  {
    id: "makseb",
    title: "Makseb",
    category: "Travel-agency SaaS",
    status: "In development",
    statusKind: "development",
    description:
      "Multi-tenant backend for Algerian travel-agency websites: subscription plans, template-driven sections, agency users, and roles — a NestJS + Prisma schema designed around onboarding.",
    image: "makseb",
    alt: "Makseb travel-agency SaaS dashboard preview",
    tags: ["NestJS", "Prisma", "PostgreSQL", "SaaS"],
  },
  {
    id: "dz-autoimport",
    title: "DZ-AutoImport",
    category: "Automotive showroom",
    status: "Live prototype",
    statusKind: "prototype",
    description:
      "A trilingual automotive showroom for the Algerian market: vehicle presentations, brand and model browsing, 360° media, WhatsApp inquiries, and an inventory admin interface. Live as a prototype with demonstration data.",
    image: "autoImport",
    alt: "DZ-AutoImport automotive showroom preview",
    links: [{ label: "Visit prototype", url: "https://dz-autoimport.vercel.app" }],
    tags: ["Product design", "Automotive", "Lead generation", "Admin CMS"],
  },
  {
    id: "travel-leads",
    title: "Travel-Agency Lead Discovery",
    category: "Internal tool",
    status: "Prototype",
    statusKind: "prototype",
    description:
      "Internal tooling for finding travel-agency prospects: collects travel-related content by country into a structured dataset as groundwork for filtering, deduplication, and Excel-exported outreach lists.",
    image: "travelLeads",
    alt: "Travel-agency lead discovery tool preview",
    links: [],
    tags: ["Python", "Apify", "Data collection", "Excel"],
  },
  {
    id: "printing-workshop",
    title: "Book Printing Shop",
    category: "Client website",
    status: "Completed",
    statusKind: "default",
    description:
      "End-to-end MERN website for a book printing shop — storefront UI, backend APIs, and database design delivered for an independent client.",
    image: "printerLibrary",
    alt: "Book printing shop website preview",
    links: [],
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    id: "library-site",
    title: "Library Management",
    category: "Client website",
    status: "Completed",
    statusKind: "default",
    description:
      "Full-stack library management website covering catalog UI, backend APIs, and database design for an independent client.",
    image: "library",
    alt: "Library management website preview",
    links: [],
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    id: "driver-app",
    title: "Driver Mobile App",
    category: "Academic project",
    status: "Completed",
    statusKind: "default",
    description:
      "Backend and server/client CRUD logic for a mobile app helping drivers locate hotels, mechanics, spare parts, parking, and towing, with Google Maps integration.",
    image: "driver",
    alt: "Driver mobile app preview",
    links: [],
    tags: ["Node.js", "Express.js", "MongoDB", "React Native"],
  },
  {
    id: "offline-maps",
    title: "Algerian Offline Maps",
    category: "Academic project",
    status: "Completed",
    statusKind: "default",
    description:
      "JavaScript mapping app for Algeria with location discovery and offline-oriented access to hotels and parking.",
    image: "offlineMaps",
    alt: "Algerian offline maps navigation preview",
    links: [],
    tags: ["JavaScript", "Mapping", "Offline-first"],
  },
];

export const CASE_STUDY_ROUTES = FEATURED_PROJECTS.reduce((routes, project) => {
  routes[project.route] = project;
  return routes;
}, {});

export const PROJECT_IMAGE_KEYS = Array.from(
  new Set(
    [
      ...SELECTED_PROJECTS.map((project) => project.image),
      ...ADDITIONAL_PROJECTS.map((project) => project.image),
    ].filter(Boolean)
  )
);
