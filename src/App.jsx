import { useEffect } from "react";
import "./App.css";
import { useLang } from "./i18n/LangContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  const { lang, t } = useLang();

  // Fade elements in as they scroll into view (re-run so new nodes after a language switch are picked up)
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal:not(.is-visible)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [lang]);

  return (
    <>
      <a href="#main" className="skip-link">
        {t.skip}
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <ContactMe />
      </main>
      <Footer />
    </>
  )
}

export default App
