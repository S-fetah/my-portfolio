import { useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./ThemeContext";

const THEME_COLORS = {
  light: "#f4f0e8",
  dark: "#0f0e0b",
};

function getInitialTheme() {
  const current = document.documentElement.dataset.theme;
  if (current === "light" || current === "dark") return current;

  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* storage unavailable */
  }

  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", THEME_COLORS[theme]);

    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* the theme still applies for this session */
    }
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
