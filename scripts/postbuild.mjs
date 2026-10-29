import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FEATURED_PROJECTS, PROFILE, SITE } from "../src/data/content.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
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
  jobTitle: PROFILE.roleLine,
  url: `${SITE_URL}/`,
  email: `mailto:${PROFILE.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Médéa",
    addressCountry: "DZ",
  },
  knowsLanguage: ["Arabic", "French", "English"],
  worksFor: { "@type": "Organization", name: "Fennec Booking" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Yahia Farès University of Médéa",
  },
  sameAs: [
    "https://www.linkedin.com/in/abdelfetah-safiddine-46582b263/",
    "https://github.com/S-fetah",
    "https://x.com/abdelfetah78",
  ],
};

function homeSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      personSchema,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: `${PROFILE.name} — Portfolio`,
        description: SITE.description,
        author: { "@id": `${SITE_URL}/#person` },
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

function applyMeta(html, meta) {
  let output = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(meta.title)}</title>`
  );
  output = setMeta(output, "name", "description", meta.description);
  output = setMeta(output, "name", "robots", meta.robots ?? "index, follow");
  output = setCanonical(output, meta.canonical);
  output = setMeta(output, "property", "og:type", meta.type);
  output = setMeta(output, "property", "og:title", meta.title);
  output = setMeta(output, "property", "og:description", meta.description);
  output = setMeta(output, "property", "og:url", meta.canonical);
  output = setMeta(output, "property", "og:image", meta.image);
  output = setMeta(output, "property", "og:image:alt", meta.imageAlt);
  output = setMeta(output, "name", "twitter:title", meta.title);
  output = setMeta(output, "name", "twitter:description", meta.description);
  output = setMeta(output, "name", "twitter:image", meta.image);
  output = setMeta(output, "name", "twitter:image:alt", meta.imageAlt);
  output = setSchema(output, meta.schema);
  return output;
}

async function writeRoute(route, html) {
  const directory = path.join(DIST, route.replace(/^\/+/, ""));
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), html, "utf8");
}

async function main() {
  const base = await readFile(path.join(DIST, "index.html"), "utf8");

  const homeHtml = applyMeta(base, {
    title: `${PROFILE.name} — ${PROFILE.roleLine}`,
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
  });
  await writeFile(path.join(DIST, "404.html"), notFoundHtml, "utf8");

  const urls = [
    { loc: `${SITE_URL}/`, priority: "1.0" },
    ...FEATURED_PROJECTS.map((project) => ({
      loc: `${SITE_URL}${project.route}`,
      priority: "0.8",
    })),
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, priority }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${BUILT}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
  await writeFile(path.join(DIST, "sitemap.xml"), sitemap, "utf8");

  const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
  await writeFile(path.join(DIST, "robots.txt"), robots, "utf8");

  console.log(`sitemap: ${urls.length} URLs`);
  console.log(`canonical base: ${SITE_URL}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
