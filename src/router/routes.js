import { CASE_STUDY_ROUTES } from "../data/content";

export function resolveRoute(pathname) {
  const normalized =
    pathname && pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";

  if (normalized === "/") return { type: "home" };

  const project = CASE_STUDY_ROUTES[normalized];
  if (project) return { type: "caseStudy", project };

  return { type: "notFound" };
}
