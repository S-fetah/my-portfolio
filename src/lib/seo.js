import { FEATURED_PROJECTS, PROFILE, PRODUCTION_URL, SITE, SOCIALS } from "../data/content";

// Always prioritize the official custom production domain. If VITE_SITE_URL is injected,
// ensure it never falls back to or leaks a staging/vercel.app URL into canonicals.
const configuredUrl =
  typeof import.meta !== "undefined" &&
  import.meta.env?.VITE_SITE_URL &&
  !import.meta.env.VITE_SITE_URL.includes("vercel.app")
    ? import.meta.env.VITE_SITE_URL
    : PRODUCTION_URL || SITE.url;

export const SITE_URL = configuredUrl.replace(/\/+$/, "");

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

function personSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PROFILE.name,
    givenName: PROFILE.firstName,
    familyName: PROFILE.lastName,
    jobTitle: [PROFILE.title, PROFILE.secondaryTitle],
    url: `${SITE_URL}/`,
    image: absoluteUrl(SITE.ogImage),
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
    worksFor: {
      "@type": "Organization",
      name: "Fennec Booking",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Yahia Farès University of Médéa",
    },
    sameAs: [SOCIALS.linkedin, SOCIALS.github, SOCIALS.twitter],
  };
}

export function getMetaForPath(pathname = "/") {
  const normalized =
    pathname && pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
  const project = FEATURED_PROJECTS.find(
    (item) => item.route === normalized
  );

  if (!project) {
    return {
      title: `${PROFILE.name} | ${PROFILE.title} & ${PROFILE.secondaryTitle}`,
      description: SITE.description,
      path: "/",
      canonical: `${SITE_URL}/`,
      image: absoluteUrl(SITE.ogImage),
      imageAlt: `${PROFILE.name} — ${PROFILE.roleLine}`,
      type: "website",
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          personSchema(),
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
      },
    };
  }

  return {
    title: `${project.metaTitle} — ${PROFILE.name}`,
    description: project.metaDescription,
    path: project.route,
    canonical: absoluteUrl(project.route),
    image: absoluteUrl(project.ogImage),
    imageAlt: `${project.title} — case study by ${PROFILE.name}`,
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        personSchema(),
        {
          "@type": "CreativeWork",
          "@id": `${absoluteUrl(project.route)}#case-study`,
          name: project.title,
          headline: project.subtitle,
          description: project.metaDescription,
          url: absoluteUrl(project.route),
          image: absoluteUrl(project.ogImage),
          author: { "@id": `${SITE_URL}/#person` },
          creator: { "@id": `${SITE_URL}/#person` },
          keywords: project.stack.join(", "),
          genre: project.category,
          inLanguage: "en",
        },
      ],
    },
  };
}
