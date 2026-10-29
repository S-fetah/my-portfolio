import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { RouterContext } from "./routerContext";

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

function readLocation() {
  return {
    pathname: normalizePath(window.location.pathname),
    hash: window.location.hash,
    key: `${window.location.pathname}${window.location.hash}`,
  };
}

function RouterProvider({ children }) {
  const [location, setLocation] = useState(readLocation);
  const firstRender = useRef(true);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const onPopState = () => setLocation(readLocation());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      if (!window.location.hash) window.scrollTo(0, 0);
      return;
    }

    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior = reduceMotion ? "auto" : "smooth";

    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior, block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash, location.key]);

  const navigate = useCallback((to, options = {}) => {
    if (typeof to !== "string" || !to.startsWith("/")) return;

    const url = new URL(to, window.location.origin);
    const pathname = normalizePath(url.pathname);
    const hash = url.hash;
    const current = `${normalizePath(window.location.pathname)}${window.location.hash}`;
    const next = `${pathname}${hash}`;

    if (current !== next) {
      window.history[options.replace ? "replaceState" : "pushState"](
        { path: `${pathname}${hash}` },
        "",
        `${pathname}${hash}`
      );
    }

    setLocation({ pathname, hash, key: `${next}:${Date.now()}` });
  }, []);

  return (
    <RouterContext.Provider value={{ ...location, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

RouterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RouterProvider;
