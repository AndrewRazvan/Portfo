import { FaGithub, FaYoutube, FaTrophy } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { useLang } from "../i18n/LangContext";
import SectionHeader from "./SectionHeader";
import "./Projects.css";

const linkIcons = { code: FaGithub, demo: FaYoutube, devpost: SiDevpost };

// Labelled Code / Demo / Devpost links; renders nothing when a project has none
const ProjectLinks = ({ links, title }) => {
  const { t } = useLang();
  const entries = Object.entries(links);
  if (entries.length === 0) return null;

  return (
    <ul className="link-list">
      {entries.map(([kind, href]) => {
        const Icon = linkIcons[kind];
        return (
          <li key={kind}>
            <a
              href={href}
              className="link-pill"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.links[kind]}: ${title}`}
            >
              <Icon aria-hidden="true" />
              {t.links[kind]}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const Projects = () => {
  const { t } = useLang();

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader index="02" {...t.sections.projects} />

        <div className="projects-grid">
          {t.projects.map((project, index) => (
            <article
              key={project.id}
              className={`card project-card reveal ${project.featured ? "featured" : ""}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="project-meta">
                <span className="mono">{project.dates}</span>
                {project.award && (
                  <span className="project-award">
                    <FaTrophy aria-hidden="true" />
                    {project.award}
                  </span>
                )}
              </div>
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <ul className="tag-list" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">{tag}</li>
                ))}
              </ul>
              <ProjectLinks links={project.links} title={project.title} />
            </article>
          ))}
        </div>

        <div className="hackathons reveal">
          <h3 className="hackathons-title mono">{t.hackathonsTitle}</h3>
          <ul className="hackathon-list">
            {t.hackathons.map((hack) => (
              <li key={hack.id} className="hackathon">
                <div className="hackathon-text">
                  <p className="hackathon-name">
                    {hack.title}
                    <span className="hackathon-event mono">{hack.event}</span>
                  </p>
                  <p className="hackathon-description">{hack.description}</p>
                </div>
                <ProjectLinks links={hack.links} title={hack.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
