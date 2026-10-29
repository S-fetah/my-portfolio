import { lazy, Suspense, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { useRouter } from "./router/routerContext";
import { resolveRoute } from "./router/routes";
import styles from "./App.module.css";

const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));

function RouteAnnouncer({ message }) {
  const [announcement, setAnnouncement] = useState("");
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setAnnouncement(message);
  }, [message]);

  return (
    <p className="visuallyHidden" aria-live="polite" aria-atomic="true">
      {announcement}
    </p>
  );
}

RouteAnnouncer.propTypes = {
  message: PropTypes.string.isRequired,
};

function RouteFallback() {
  return (
    <div className={styles.fallback} role="status" aria-live="polite">
      <span className={styles.fallbackLine} aria-hidden="true" />
      Loading case study…
    </div>
  );
}

function App() {
  const { pathname } = useRouter();
  const reduceMotion = useReducedMotion();
  const route = resolveRoute(pathname);
  const pageKey =
    route.type === "caseStudy" ? route.project.route : pathname;
  const announcement =
    route.type === "home"
      ? "Home page"
      : route.type === "caseStudy"
        ? `${route.project.title} case study`
        : "Page not found";

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="skipLink"
          onClick={(event) => {
            event.preventDefault();
            document.getElementById("main")?.focus();
          }}
        >
          Skip to content
        </a>

        <Nav />

        <main id="main" tabIndex={-1}>
          <m.div
            key={pageKey}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            {route.type === "home" && <HomePage />}
            {route.type === "caseStudy" && (
              <Suspense fallback={<RouteFallback />}>
                <CaseStudyPage project={route.project} />
              </Suspense>
            )}
            {route.type === "notFound" && <NotFound />}
          </m.div>
        </main>

        <Footer />
        <RouteAnnouncer message={announcement} />
      </MotionConfig>
    </LazyMotion>
  );
}

export default App;
