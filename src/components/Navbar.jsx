import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLang } from "../i18n/LangContext";
import { RESUME_URL } from "../content";
import "./Navbar.css";

const sectionIds = ["experience", "projects", "skills", "education", "contact"];

const LanguageSwitch = () => {
  const { lang, setLang, t } = useLang();

  return (
    <div className="lang-switch" role="group" aria-label={t.nav.language}>
      {["en", "fr"].map((code) => (
        <button
          key={code}
          className="lang-option"
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          lang={code}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const { t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
  const [scrolled, setScrolled] = useState(false); // Adds a border once the page scrolls
  const [activeId, setActiveId] = useState(""); // Section currently in view

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the link for whichever section crosses the middle of the viewport
  useEffect(() => {
    const sections = ["top", ...sectionIds]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled || menuOpen ? "scrolled" : ""}`}>
      <nav className="navbar-inner container" aria-label="Main">
        <a href="#top" className="logo" onClick={closeMenu}>
          <span className="logo-mark" aria-hidden="true">AU</span>
          <span className="logo-name">Andrew Ungureanu</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <div id="nav-menu" className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link ${activeId === id ? "active" : ""}`}
                  aria-current={activeId === id ? "location" : undefined}
                  onClick={closeMenu}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <LanguageSwitch />
            <a href={RESUME_URL} className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">
              {t.nav.resume}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
