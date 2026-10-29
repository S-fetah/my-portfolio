import { useEffect } from "react";

function upsertMeta(attribute, key, content) {
  if (!content) return;
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function upsertSchema(jsonLd) {
  let element = document.getElementById("page-schema");
  if (!element) {
    element = document.createElement("script");
    element.id = "page-schema";
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(jsonLd);
}

export function useDocumentMeta(meta) {
  useEffect(() => {
    document.title = meta.title;
    upsertMeta("name", "description", meta.description);
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:type", meta.type);
    upsertMeta("property", "og:url", meta.canonical);
    upsertMeta("property", "og:image", meta.image);
    upsertMeta("property", "og:image:alt", meta.imageAlt);
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");
    upsertMeta("property", "og:site_name", "Safiddine Abdelfetah");
    upsertMeta("name", "robots", meta.noindex ? "noindex, nofollow" : "index, follow");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", meta.title);
    upsertMeta("name", "twitter:description", meta.description);
    upsertMeta("name", "twitter:image", meta.image);
    upsertMeta("name", "twitter:image:alt", meta.imageAlt);
    upsertLink("canonical", meta.canonical);
    upsertSchema(meta.jsonLd);
  }, [meta]);
}
