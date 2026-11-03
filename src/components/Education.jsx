import { FaGraduationCap } from "react-icons/fa";
import { useLang } from "../i18n/LangContext";
import SectionHeader from "./SectionHeader";
import "./Education.css";

const Education = () => {
  const { t } = useLang();
  const edu = t.education;

  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeader index="04" {...t.sections.education} />

        <article className="card education-card reveal">
          <header className="education-header">
            <span className="education-icon" aria-hidden="true">
              <FaGraduationCap />
            </span>
            <div className="education-heading">
              <h3>{edu.school}</h3>
              <p className="education-degree">{edu.degree}</p>
            </div>
            <p className="education-dates mono">
              {edu.dates}
              <span>{edu.location}</span>
            </p>
          </header>

          <ul className="education-bullets">
            {edu.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <h4 className="education-courses-title mono">{edu.coursesTitle}</h4>
          <ul className="tag-list">
            {edu.courses.map((course) => (
              <li key={course} className="tag">{course}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Education;
