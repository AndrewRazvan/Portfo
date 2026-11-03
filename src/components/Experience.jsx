import { useLang } from "../i18n/LangContext";
import SectionHeader from "./SectionHeader";
import hydroQuebecLogo from "../assets/logos/hydro-quebec.svg";
import desjardinsLogo from "../assets/logos/desjardins.svg";
import "./Experience.css";

// Company marks, keyed by experience id
const logos = {
  "hydro-quebec": hydroQuebecLogo,
  desjardins: desjardinsLogo,
};

const Experience = () => {
  const { t } = useLang();

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader index="01" {...t.sections.experience} />

        <ol className="timeline">
          {t.experience.map((job) => (
            <li key={job.id} className={`timeline-item reveal ${job.current ? "current" : ""}`}>
              <article className="card job">
                <header className="job-header">
                  <span className="job-logo">
                    {/* Decorative: the company name is right beside it */}
                    <img src={logos[job.id]} alt="" width="32" height="32" />
                  </span>
                  <div className="job-title">
                    <h3>{job.role}</h3>
                    <p className="job-company">
                      {job.company}
                      <span className="job-location"> · {job.location}</span>
                    </p>
                  </div>
                  <p className="job-dates mono">
                    {job.current && <span className="job-badge">{t.current}</span>}
                    {job.dates}
                  </p>
                </header>
                <ul className="job-bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <ul className="tag-list" aria-label="Technologies">
                  {job.tags.map((tag) => (
                    <li key={tag} className="tag">{tag}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
