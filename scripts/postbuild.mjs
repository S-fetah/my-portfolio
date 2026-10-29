import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FEATURED_PROJECTS, PROFILE, SITE, SOCIALS } from "../src/data/content.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const PUBLIC = path.join(ROOT, "public");
const SITE_URL = (process.env.VITE_SITE_URL || SITE.url).replace(/\/+$/, "");
const BUILT = new Date().toISOString().slice(0, 10);

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const personSchema = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: PROFILE.name,
  givenName: PROFILE.firstName,
  familyName: PROFILE.lastName,
  jobTitle: [PROFILE.title, PROFILE.secondaryTitle],
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og/home.png`,
  description: SITE.description,
  email: `mailto:${PROFILE.email}`,
  telephone: PROFILE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Médéa",
    addressCountry: "DZ",
  },
  knowsLanguage: ["Arabic", "French", "English"],
  knowsAbout: [
    "Node.js",
    "TypeScript",
    "Backend Architecture",
    "REST APIs",
    "API Development",
    "PostgreSQL",
    "Redis",
    "Docker",
    "React",
    "Full-Stack Development",
  ],
  worksFor: { "@type": "Organization", name: "Fennec Booking" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Yahia Farès University of Médéa",
  },
  sameAs: [SOCIALS.linkedin, SOCIALS.github, SOCIALS.twitter],
};

function homeSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      personSchema,
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: `${SITE_URL}/`,
        name: `${PROFILE.name} | ${PROFILE.title} & ${PROFILE.secondaryTitle}`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: `${PROFILE.name} — Portfolio`,
        description: SITE.description,
        publisher: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en",
      },
    ],
  };
}

function caseSchema(project) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      personSchema,
      {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}${project.route}#case-study`,
        name: project.title,
        headline: project.subtitle,
        description: project.metaDescription,
        url: `${SITE_URL}${project.route}`,
        image: `${SITE_URL}${project.ogImage}`,
        author: { "@id": `${SITE_URL}/#person` },
        creator: { "@id": `${SITE_URL}/#person` },
        keywords: project.stack.join(", "),
        genre: project.category,
        inLanguage: "en",
      },
    ],
  };
}

function setMeta(html, attribute, key, value) {
  const pattern = new RegExp(
    `<meta\\s+${attribute}=["']${key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["'][^>]*>`,
    "i"
  );
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`;
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setCanonical(html, href) {
  const tag = `<link rel="canonical" href="${escapeHtml(href)}" />`;
  const pattern = /<link\s+rel="canonical"[^>]*>/i;
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setSchema(html, schema) {
  const tag = `<script type="application/ld+json" id="page-schema">\n${JSON.stringify(
    schema,
    null,
    2
  )}\n    </script>`;
  const pattern =
    /<script type="application\/ld\+json" id="page-schema">[\s\S]*?<\/script>/;
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setNoscript(html, bodyHtml) {
  const tag = `<noscript>\n${bodyHtml}\n      </noscript>`;
  const pattern = /<noscript>[\s\S]*?<\/noscript>/;
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html;
}

function applyMeta(html, meta) {
  let output = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(meta.title)}</title>`
  );
  output = setMeta(output, "name", "description", meta.description);
  output = setMeta(output, "name", "author", PROFILE.name);
  output = setMeta(output, "name", "robots", meta.robots ?? "index, follow");
  output = setCanonical(output, meta.canonical);
  output = setMeta(output, "property", "og:type", meta.type);
  output = setMeta(output, "property", "og:site_name", PROFILE.name);
  output = setMeta(output, "property", "og:title", meta.title);
  output = setMeta(output, "property", "og:description", meta.description);
  output = setMeta(output, "property", "og:url", meta.canonical);
  output = setMeta(output, "property", "og:image", meta.image);
  output = setMeta(output, "property", "og:image:width", "1200");
  output = setMeta(output, "property", "og:image:height", "630");
  output = setMeta(output, "property", "og:image:alt", meta.imageAlt);
  output = setMeta(output, "name", "twitter:card", "summary_large_image");
  output = setMeta(output, "name", "twitter:site", "@abdelfetah78");
  output = setMeta(output, "name", "twitter:creator", "@abdelfetah78");
  output = setMeta(output, "name", "twitter:title", meta.title);
  output = setMeta(output, "name", "twitter:description", meta.description);
  output = setMeta(output, "name", "twitter:image", meta.image);
  output = setMeta(output, "name", "twitter:image:alt", meta.imageAlt);
  output = setSchema(output, meta.schema);
  if (meta.noscript) {
    output = setNoscript(output, meta.noscript);
  }
  return output;
}

async function writeRoute(route, html) {
  const clean = route.replace(/^\/+/, "");
  const directory = path.join(DIST, clean);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), html, "utf8");
  await writeFile(path.join(DIST, `${clean}.html`), html, "utf8");
}

function generateCaseStudyNoscript(project) {
  return `        <div style="max-width: 760px; margin: 3rem auto; padding: 0 1.5rem; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #191D1B;">
          <header style="margin-bottom: 2rem;">
            <p style="font-family: monospace; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; color: #A65F43; font-weight: 600; margin-bottom: 0.5rem;"><a href="/" style="color: #A65F43; text-decoration: none;">&larr; Back to Abdelfetah Safiddine Portfolio</a></p>
            <h1 style="font-size: 2.5rem; line-height: 1.15; margin: 0.5rem 0 0.5rem 0; font-weight: 700;">${escapeHtml(project.title)} — ${escapeHtml(project.subtitle)}</h1>
            <p style="font-family: monospace; font-size: 0.9rem; color: #626B66;">${escapeHtml(project.category)} · ${escapeHtml(project.period)} · ${escapeHtml(project.role)}</p>
            <p style="font-size: 1.15rem; color: #191D1B; margin: 1rem 0;">${escapeHtml(project.description)}</p>
          </header>

          <section style="margin-bottom: 2rem;">
            <h2 style="font-size: 1.4rem; border-bottom: 1px solid #E3E6E0; padding-bottom: 0.4rem;">Key Outcomes</h2>
            <ul style="padding-left: 1.25rem;">
              ${project.outcomes.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n              ")}
            </ul>
          </section>

          <section style="margin-bottom: 2rem;">
            <h2 style="font-size: 1.4rem; border-bottom: 1px solid #E3E6E0; padding-bottom: 0.4rem;">Tech Stack</h2>
            <p>${escapeHtml(project.stack.join(" · "))}</p>
          </section>

          ${project.caseStudy
            .map(
              (section) => `
          <section style="margin-bottom: 1.75rem;">
            <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">${escapeHtml(section.heading)}</h3>
            ${(section.paragraphs || []).map((p) => `<p>${escapeHtml(p)}</p>`).join("\n            ")}
            ${
              section.bullets
                ? `<ul style="padding-left: 1.25rem;">\n              ${section.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("\n              ")}\n            </ul>`
                : ""
            }
          </section>`
            )
            .join("\n")}

          <footer style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid #E3E6E0;">
            <p><a href="/" style="color: #A65F43; font-weight: 600;">&larr; Return to Abdelfetah Safiddine Official Portfolio</a></p>
          </footer>
        </div>`;
}

async function main() {
  const base = await readFile(path.join(DIST, "index.html"), "utf8");

  const homeHtml = applyMeta(base, {
    title: `${PROFILE.name} | ${PROFILE.title} & ${PROFILE.secondaryTitle}`,
    description: SITE.description,
    canonical: `${SITE_URL}/`,
    image: `${SITE_URL}${SITE.ogImage}`,
    imageAlt: `${PROFILE.name} — ${PROFILE.roleLine}`,
    type: "website",
    schema: homeSchema(),
  });
  await writeFile(path.join(DIST, "index.html"), homeHtml, "utf8");

  for (const project of FEATURED_PROJECTS) {
    const html = applyMeta(base, {
      title: `${project.metaTitle} — ${PROFILE.name}`,
      description: project.metaDescription,
      canonical: `${SITE_URL}${project.route}`,
      image: `${SITE_URL}${project.ogImage}`,
      imageAlt: `${project.title} — case study by ${PROFILE.name}`,
      type: "article",
      schema: caseSchema(project),
      noscript: generateCaseStudyNoscript(project),
    });
    await writeRoute(project.route, html);
    console.log(`static route: ${project.route}/index.html`);
  }

  const notFoundHtml = applyMeta(base, {
    title: `Page not found — ${PROFILE.name}`,
    description:
      "The requested page does not exist. Explore selected work and case studies instead.",
    canonical: `${SITE_URL}/404`,
    image: `${SITE_URL}${SITE.ogImage}`,
    imageAlt: `${PROFILE.name} — portfolio`,
    type: "website",
    robots: "noindex, nofollow",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Page not found",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    noscript: `        <div style="max-width: 600px; margin: 4rem auto; padding: 0 1.5rem; font-family: system-ui, sans-serif;">
          <h1>Page Not Found</h1>
          <p>The requested page does not exist. Please return to the <a href="/" style="color: #A65F43;">Abdelfetah Safiddine homepage</a>.</p>
        </div>`,
  });
  await writeFile(path.join(DIST, "404.html"), notFoundHtml, "utf8");

  const urls = [
    { loc: `${SITE_URL}/`, priority: "1.0", changefreq: "weekly" },
    ...FEATURED_PROJECTS.map((project) => ({
      loc: `${SITE_URL}${project.route}`,
      priority: "0.8",
      changefreq: "monthly",
    })),
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, priority, changefreq }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${BUILT}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
  await writeFile(path.join(DIST, "sitemap.xml"), sitemap, "utf8");
  await writeFile(path.join(PUBLIC, "sitemap.xml"), sitemap, "utf8");

  const robots = `User-agent: *
Allow: /
Disallow: /404

Sitemap: ${SITE_URL}/sitemap.xml
`;
  await writeFile(path.join(DIST, "robots.txt"), robots, "utf8");
  await writeFile(path.join(PUBLIC, "robots.txt"), robots, "utf8");

  console.log(`sitemap: ${urls.length} URLs (written to dist and public)`);
  console.log(`robots: written to dist and public`);
  console.log(`canonical base: ${SITE_URL}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
