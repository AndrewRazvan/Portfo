import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { useLang } from "../i18n/LangContext";
import { RESUME_URL, contact } from "../content";
import heroImage from "../assets/andrew-stingers.jpg";
import "./Hero.css";

const Hero = () => {
  const { t } = useLang();

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            {t.hero.status}
          </p>

          <p className="hero-prompt mono" aria-hidden="true">
            <span className="prompt-user">andrew@montreal</span>
            <span className="prompt-path">:~$</span> whoami
            <span className="prompt-cursor" />
          </p>

          <h1>Andrew Ungureanu</h1>
          <p className="hero-role">{t.hero.role}</p>
          <p className="hero-intro">{t.hero.intro}</p>

          <div className="hero-actions">
            <a href={RESUME_URL} className="btn btn-primary" download>
              <FaArrowDown aria-hidden="true" />
              {t.hero.resume}
            </a>
            <a href="#contact" className="btn btn-secondary">
              {t.hero.contact}
            </a>
            <div className="hero-socials">
              <a href={contact.github} className="icon-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub aria-hidden="true" />
              </a>
              <a href={contact.linkedin} className="icon-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Portrait in a terminal-style window */}
        <figure className="hero-photo">
          <div className="window-bar" aria-hidden="true">
            <span className="window-dot" />
            <span className="window-dot" />
            <span className="window-dot" />
            <span className="window-title mono">stingers.jpg</span>
          </div>
          <img
            src={heroImage}
            alt={t.hero.photoAlt}
            width="800"
            height="800"
            fetchPriority="high"
          />
        </figure>
      </div>

    </section>
  );
};

export default Hero;
