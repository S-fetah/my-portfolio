import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import resumePdf from "../../assets/Safiddine-Abdelfetah.pdf";
import Link from "../../router/Link";
import { useRouter } from "../../router/routerContext";
import { NAV_LINKS, PROFILE, SOCIALS } from "../../data/content";
import { useThemeContext } from "../common/ThemeContext";
import { GitHubIcon, LinkedInIcon, XIcon } from "../common/BrandIcons";
import styles from "./Nav.module.css";

const MENU_ID = "primary-navigation";

function Nav() {
  const { pathname } = useRouter();
  const { theme, toggleTheme } = useThemeContext();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const menuButtonRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.href.slice(1))
    ).filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-32% 0px -58% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll(
      'a[href], button:not([disabled])'
    );
    focusables?.[0]?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px)");
    const onChange = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const onHome = pathname === "/";

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        menuOpen ? styles.menuOpen : ""
      }`}
    >
      <nav className={styles.nav} aria-label="Primary">
        <Link to="/" className={styles.brand} aria-label="Abdelfetah Safiddine — home">
          <span className={styles.brandMark} aria-hidden="true">
            AS
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>Abdelfetah Safiddine</span>
            <span className={styles.brandRole}>{PROFILE.roleLine}</span>
          </span>
        </Link>

        <ul className={styles.links}>
          {NAV_LINKS.map((link) => {
            const target = link.href.slice(1);
            const isActive = onHome && active === target;
            return (
              <li key={link.href}>
                <Link
                  to={onHome ? link.href : `/${link.href}`}
                  className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                  aria-current={isActive ? "location" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          <a
            href={resumePdf}
            download="Safiddine-Abdelfetah.pdf"
            className={styles.resume}
          >
            <Download size={15} aria-hidden="true" />
            <span>Download CV</span>
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <m.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <m.div
              id={MENU_ID}
              ref={panelRef}
              className={styles.panel}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.panelTop}>
                <span className={styles.panelLabel}>Menu</span>
                <button
                  type="button"
                  className={styles.panelClose}
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <ul className={styles.panelLinks}>
                {NAV_LINKS.map((link, index) => (
                  <li key={link.href}>
                    <Link
                      to={onHome ? link.href : `/${link.href}`}
                      className={styles.panelLink}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className={styles.panelIndex}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {link.label}
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className={styles.panelFooter}>
                <a
                  href={resumePdf}
                  download="Safiddine-Abdelfetah.pdf"
                  className={styles.panelCv}
                >
                  <Download size={16} aria-hidden="true" />
                  Download CV
                </a>
                <ul className={styles.panelSocials} aria-label="Social links">
                  <li>
                    <a
                      href={SOCIALS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                    >
                      <LinkedInIcon size={18} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={SOCIALS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub profile"
                    >
                      <GitHubIcon size={18} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={SOCIALS.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X profile"
                    >
                      <XIcon size={17} />
                    </a>
                  </li>
                </ul>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Nav;
