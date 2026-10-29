# Safiddine Abdelfetah — Engineering Portfolio

Personal portfolio and technical case-study platform of **Safiddine Abdelfetah**, Backend Lead Developer and Full-Stack Engineer.

Built with React 18, Vite 5, CSS Modules, and static site pre-rendering. Designed with an editorial aesthetic ("Premium Editorial Engineering") focusing on backend system architecture, API orchestration, and AI research.

🌐 **Live URL**: [https://myportfolio-nu-bay.vercel.app](https://myportfolio-nu-bay.vercel.app)

---

## Key Features

- **Editorial Typography & Visual Hierarchy**: Self-hosted variable typography (`Newsreader` serif, `Manrope` sans-serif, and `IBM Plex Mono`) paired with a warm paper canvas, near-black ink, and a warm copper accent.
- **Deep Technical Case Studies**: Shareable, crawlable routes for flagship projects:
  - [`/work/fennec-booking`](https://myportfolio-nu-bay.vercel.app/work/fennec-booking): Production travel commerce backend (sanitized per NDA), API orchestration, booking workflows, and high-availability database architecture.
  - [`/work/saha-mind`](https://myportfolio-nu-bay.vercel.app/work/saha-mind): Academic master's thesis on multi-agent LLM psychiatric triage with LoRA fine-tuning benchmarks and safety arbitration.
- **Responsive Architecture**: Zero horizontal layout overflow across all screen sizes (360px to 1920px+). Responsive SVG system diagrams and auto-wrapping content grids.
- **Optimized Asset Pipeline**: 85%+ reduction in asset transfer weight through responsive dual-resolution AVIF and WebP images with intrinsic aspect ratios to prevent layout shift.
- **Accessibility & Standards**: Full keyboard navigation support, high-contrast `:focus-visible` rings, top-level skip link, accessible dialog focus trapping, and strict compliance with `prefers-reduced-motion`.
- **Search & Social Optimization**: Dynamic Open Graph images, Twitter card metadata, canonical link tags, automated XML sitemap generation, and JSON-LD structured data (`Person`, `WebSite`, `TechArticle`).

---

## Tech Stack

| Domain | Technology |
|---|---|
| **Core Framework** | React 18.3, Vite 5.4 |
| **Styling** | Pure CSS Modules + Custom Property Design Tokens (Zero runtime CSS) |
| **Animation** | Framer Motion + Native CSS Transitions |
| **Icons** | Lucide React |
| **Routing** | Zero-dependency client-side history router with SSG HTML pre-rendering |
| **Form Integration**| EmailJS Browser SDK with client-side validation & honeypot anti-spam |
| **Fonts** | Self-hosted WOFF2 (`Newsreader`, `Manrope`, `IBM Plex Mono`) |

---

## Project Structure

```text
myportfolio/
├── public/                 # Static assets, self-hosted fonts, favicon, and manifests
│   ├── fonts/              # WOFF2 subsets for Newsreader, Manrope, IBM Plex Mono
│   ├── og/                 # Generated Open Graph card images
│   ├── _redirects          # SPA fallback rules for static hosting
│   └── site.webmanifest
├── scripts/                # Build and asset optimization utilities
│   ├── optimize-images.py  # Generates responsive AVIF/WebP image sets
│   ├── generate-og.py      # Produces social preview cards
│   └── postbuild.mjs       # SSG static route and sitemap generator
├── src/
│   ├── assets/             # Raw source graphics and downloadable ATS resume
│   │   ├── images/         # Optimized multi-format image variants
│   │   └── Safiddine-Abdelfetah.pdf
│   ├── components/
│   │   ├── About/          # Engineering philosophy and background
│   │   ├── common/         # Primitives (Button, SmartImage, StatusBadge, Reveal)
│   │   ├── Contact/        # Validated contact form with EmailJS integration
│   │   ├── Experience/     # Work history, Fennec Booking tenure, education
│   │   ├── Footer/         # Colophon, status indicator, social links
│   │   ├── Hero/           # Typographic title, proof strip, CTA buttons
│   │   ├── Nav/            # Sticky header, theme switcher, mobile menu drawer
│   │   ├── projects/       # Featured and archived project showcases
│   │   └── skills/         # Categorized 8-domain technical proficiency matrix
│   ├── data/
│   │   └── content.js      # Centralized source of truth for all content & case studies
│   ├── hooks/              # Custom React hooks (useDocumentMeta)
│   ├── pages/              # Route views (HomePage, CaseStudyPage, NotFound)
│   ├── router/             # Custom client router and link components
│   └── styles/
│       ├── fonts.css       # @font-face declarations
│       └── tokens.css      # Core color, typography, spacing, and easing tokens
├── PROJECT_AUDIT.md        # Comprehensive pre-redesign technical and UX audit
└── REDESIGN_DECISIONS.md   # Architectural Decision Records (ADRs) and design specs
```

---

## Development Workflow

### Prerequisites
- Node.js >= 22
- Python 3 (for image and OG generation scripts, optional)

### Scripts

```bash
# Install dependencies
npm install

# Start Vite local development server
npm start

# Run ESLint validation
npm run lint

# Production build with static route pre-rendering
npm run build

# Preview production build locally
npm run preview

# Regenerate responsive AVIF/WebP image assets
npm run images

# Regenerate Open Graph cards
npm run og
```

---

## Verification & Quality Assurance

- **Code Quality**: Clean ESLint check (`0 errors, 0 warnings`).
- **Build Pipeline**: Vite compile + `scripts/postbuild.mjs` SSG output with valid routes and XML sitemaps.
- **Browser Testing**: Verified across Chromium at 360px, 390px, 414px, 768px, 820px, 1024px, 1280px, 1440px, and 1920px in both Light and Dark modes.

---

## License

This project is open-source under the MIT License. Personal assets, project case studies, and biographical text are proprietary to Safiddine Abdelfetah.
