# Portfolio Redesign — Architectural & Design Decisions

> **Document Type:** Architectural Decision Record (ADR) & Design Specification  
> **Author:** Antigravity Engineering & Design  
> **Project:** Personal Portfolio of Safiddine Abdelfetah (`myportfolio`)  
> **Date:** October 2026  
> **Repository:** `https://github.com/S-fetah/my-portfolio.git`  
> **Baseline:** `PROJECT_AUDIT.md`  

---

## 1. Architectural Strategy & Component Foundation

### Context & Problem
The legacy portfolio suffered from mixed styling patterns, unused heavy dependencies (`@mui/material` and `@emotion/*` imported exclusively for a single loading spinner and backdrop), absence of route-level URLs for deep case studies, and severe mobile viewport overflow caused by fixed-width diagram SVGs.

### Decision: Pure CSS Modules + Custom Design Tokens (No Tailwind / No Heavy Component Libraries)
We evaluated two paths outlined in the creative brief:
1. **Migration to Tailwind CSS + shadcn/ui**: Would require introducing Tailwind Preflight (which risks colliding with legacy element resets), adding 30+ boilerplate components, and introducing utility-class noise into semantic editorial typography.
2. **Standardized CSS Modules + CSS Custom Property Tokens**: Preserves 100% encapsulation, eliminates runtime styling overhead, retains zero Preflight conflicts, and grants precise mathematical control over clamp-based typography scales, custom spring easings, and contrast ratios.

**Adopted Approach:**
- **CSS Modules + Design Tokens**: Chosen as the single styling authority across all components.
- **Dependency Cleanup**: Uninstalled `@mui/material`, `@emotion/react`, and `@emotion/styled`. Replaced with lightweight, accessible native HTML primitives and SVG icons.
- **Icons**: Adopted `lucide-react` for consistent, accessible interface iconography.
- **Animations**: Subtle, spring-calibrated micro-interactions using native CSS transitions and `framer-motion` for meaningful route and scroll presence, strictly respecting `prefers-reduced-motion`.

---

## 2. Creative Direction & Visual Language

### Visual Concept: "Premium Editorial Engineering"
Rather than a generic electric-blue SaaS template or dark-purple glow aesthetic, the redesign adopts a sophisticated editorial identity reminiscent of high-end design ateliers and technical publications.

### Typographic System
The type hierarchy communicates structural rigor and editorial warmth through three self-hosted Latin subsets in `public/fonts/`:
1. **Display & Headings**: `Newsreader` (Variable wght 200–800, normal & italic). A refined serif that conveys depth and craftsmanship for major headlines.
2. **Body Content**: `Manrope` (Variable wght 200–800). A modern, geometric sans-serif engineered for high legibility across long-form case studies and technical explanations.
3. **Technical Metadata & Code**: `IBM Plex Mono` (400 normal, 500 normal). A precise monospaced face used for system metrics, category tags, timestamps, and architectural labels.

### Color Palette & Token System
The application provides equally polished Light and Dark themes, keyed off semantic CSS variables:

| Token | Light Theme | Dark Theme (`[data-theme="dark"]`) | Role |
|---|---|---|---|
| `--bg` | `#f4f0e8` (Warm Paper) | `#121110` (Deep Ink) | Primary canvas |
| `--surface` | `#faf7f1` (Card surface) | `#1a1917` (Dark card) | Elevated panels |
| `--text` | `#191713` (Near-black) | `#eae5dc` (Off-white) | Primary typography |
| `--text-muted` | `#6d685d` (Muted ochre) | `#8a8477` (Muted ash) | Secondary copy & metadata |
| `--border` | `#d1c9ba` | `#2c2a26` | Hairline dividers |
| `--accent` | `#9a3f1b` (Deep Copper) | `#e07a52` (Warm Terracotta) | Interactive focus & branding |
| `--success` | `#2d6a4f` (Forest Green) | `#52b788` | Production status indicators |

---

## 3. Information Architecture & URL Routing

### Routing Architecture
Previously, deep case studies existed only inside ephemeral modal dialogs without shareable URLs. We implemented a lightweight, zero-dependency client history router backed by Vite static site pre-rendering:

- `/` — Single-page homepage (Hero, Proof Strip, Selected Work, Skills Matrix, Experience & Education, Contact, Footer).
- `/work/fennec-booking` — Flagship travel technology production case study (NDA-safe system architecture, third-party integration pipelines, database strategy, operational metrics).
- `/work/saha-mind` — AI research & dissertation case study (Mental health triage agent, LoRA fine-tuning benchmarks, safety guardrails, multi-agent arbitration).
- `/404` — Custom editorial 404 page with navigation fallbacks.

### Static Route Pre-Rendering (`scripts/postbuild.mjs`)
To guarantee optimal SEO, crawlability, and social sharing:
1. `postbuild.mjs` generates pre-rendered `index.html` files for `/work/fennec-booking` and `/work/saha-mind`.
2. Each route injects customized Open Graph tags, Twitter cards, canonical link headers, and JSON-LD structured data (`Person`, `WebSite`, and `TechArticle`).
3. An XML sitemap (`public/sitemap.xml`) is compiled with canonical URLs pointing to `https://www.abdelfetah-safiddine.com`.

---

## 4. Performance & Asset Optimization

### Image Pipeline (`scripts/optimize-images.py`)
Original image assets totaled **7.62 MB** across uncompressed JPEGs and PNGs.
- Converted all project mockups and portraits to responsive **AVIF** and **WebP** formats with dual resolutions (480w, 800w/960w).
- Encapsulated images in `<SmartImage>` components rendering `<picture>` elements with fallback `<img>`, native `loading="lazy"`, `decoding="async"`, and explicit intrinsic aspect ratios to eliminate cumulative layout shift (CLS).
- Result: Total image transfer payload reduced by over **85%**.

### Font Optimization
- Removed external Google Fonts runtime requests (`fonts.googleapis.com`).
- Fonts are self-hosted in `public/fonts/`, served with `font-display: swap`, and preloaded in `index.html`.

---

## 5. Accessibility, NDA Safety & Mobile Verification

### Accessibility (a11y)
- **Contrast Ratios**: Verified WCAG 2.1 AA compliance across all text and border pairings in both light and dark themes.
- **Keyboard Navigation**: High-contrast `:focus-visible` focus rings (`outline: 2px solid var(--accent)`).
- **Skip Link**: Jump-to-content skip link positioned at the top of the DOM.
- **Mobile Navigation**: Traps focus inside the drawer when opened, restores focus to the trigger on Escape, and locks body scrolling.
- **Reduced Motion**: All CSS animations, marquee transforms, and Framer Motion transitions honor `prefers-reduced-motion: reduce`.

### NDA & Professional Integrity
- **Sanitized Fennec Booking Architecture**: All confidential infrastructure identifiers, private API endpoints, partner contract figures, and internal database connection schemes are generalized to industry-standard architectural service diagrams.
- **Factual Alignment**: Professional title standardized as **"Backend Lead Developer · Full-Stack Engineer"**, aligning the site copy with the downloadable ATS resume (`src/assets/Safiddine-Abdelfetah.pdf`).
- **Project Classification**: Clear, verified badges distinguish between "In production", "Research dissertation", "Live prototype", and "In development".

---

## 6. Verification Results

| Viewport | Device Tested | Document ScrollWidth | Horizontal Overflow? |
|---|---|---|---|
| 360px | Small Phone | 360px | **No (0px)** |
| 390px | iPhone 12/13/14 | 390px | **No (0px)** |
| 414px | iPhone Plus/Max | 414px | **No (0px)** |
| 768px | iPad Portrait | 768px | **No (0px)** |
| 820px | iPad Air | 820px | **No (0px)** |
| 1024px | Small Desktop / Tablet Landscape | 1024px | **No (0px)** |
| 1440px | Standard Desktop | 1440px | **No (0px)** |
| 1920px | Ultrawide / 1080p | 1920px | **No (0px)** |

- **Lint**: 0 errors, 0 warnings (`npm run lint`).
- **Production Build**: Clean exit code 0 (`npm run build`).
- **Automated QA Suite**: 99 / 99 test assertions passed.
