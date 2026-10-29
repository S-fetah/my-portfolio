import { useMemo } from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/Contact/Contact";
import { getMetaForPath } from "../lib/seo";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

function HomePage() {
  const meta = useMemo(() => getMetaForPath("/"), []);
  useDocumentMeta(meta);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default HomePage;
