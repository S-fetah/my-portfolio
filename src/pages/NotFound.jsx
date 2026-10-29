import { useMemo } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "../router/Link";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { SITE_URL } from "../lib/seo";
import styles from "./NotFound.module.css";

function NotFound() {
  const meta = useMemo(
    () => ({
      title: "Page not found — Abdelfetah Safiddine",
      description:
        "The requested page does not exist. Explore selected work and case studies instead.",
      canonical: `${SITE_URL}/404`,
      image: `${SITE_URL}/og/home.png`,
      imageAlt: "Abdelfetah Safiddine — portfolio",
      type: "website",
      noindex: true,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Page not found",
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
    }),
    []
  );
  useDocumentMeta(meta);

  return (
    <section className={styles.page} aria-labelledby="not-found-heading">
      <div className={`container ${styles.inner}`}>
        <p className={styles.code}>Error 404</p>
        <h1 id="not-found-heading">This page isn&apos;t part of the system.</h1>
        <p className={styles.lede}>
          The link may be outdated, or the page may have moved. The work is
          still where it should be.
        </p>
        <div className={styles.actions}>
          <Link to="/#work" className={styles.primary}>
            Explore selected work
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <Link to="/" className={styles.secondary}>
            <ArrowLeft size={15} aria-hidden="true" />
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
