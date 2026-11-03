import { FaJava } from "react-icons/fa";
import { TbBrandCSharp, TbBrandAzure } from "react-icons/tb";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiTensorflow,
  SiReact,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiAndroid,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiTerraform,
  SiApachepulsar,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJira,
  SiConfluence,
  SiLinux,
  SiJest,
} from "react-icons/si";
import { useLang } from "../i18n/LangContext";
import SectionHeader from "./SectionHeader";
import "./Skills.css";

// Brand icon + brand colour per skill (keyed by the English name). Colours are
// nudged lighter where the official one disappears on the dark background.
// Skills without an entry render as text-only chips.
const skillIcons = {
  Java: [FaJava, "#f89820"],
  "C#": [TbBrandCSharp, "#b57edc"],
  TypeScript: [SiTypescript, "#3178c6"],
  JavaScript: [SiJavascript, "#f7df1e"],
  Python: [SiPython, "#ffd43b"],
  HTML: [SiHtml5, "#e34f26"],
  CSS: [SiCss3, "#2d8cf0"],
  TensorFlow: [SiTensorflow, "#ff6f00"],
  React: [SiReact, "#61dafb"],
  "React Native": [SiReact, "#61dafb"],
  "Spring Boot": [SiSpringboot, "#6db33f"],
  "Node.js": [SiNodedotjs, "#5fa04e"],
  Express: [SiExpress, "var(--color-text-muted)"],
  Android: [SiAndroid, "#3ddc84"],
  PostgreSQL: [SiPostgresql, "#6b8fe8"],
  MySQL: [SiMysql, "#5d9bc9"],
  MongoDB: [SiMongodb, "#47a248"],
  Azure: [TbBrandAzure, "#0089d6"],
  Docker: [SiDocker, "#2496ed"],
  Terraform: [SiTerraform, "#9b6fd6"],
  Pulsar: [SiApachepulsar, "#188fff"],
  Git: [SiGit, "#f05032"],
  GitHub: [SiGithub, "var(--color-foreground)"],
  GitLab: [SiGitlab, "#fc6d26"],
  Jira: [SiJira, "#2684ff"],
  Confluence: [SiConfluence, "#2684ff"],
  Linux: [SiLinux, "var(--color-foreground)"],
  Jest: [SiJest, "#e0485d"],
};

const Skills = () => {
  const { t } = useLang();

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader index="03" {...t.sections.skills} />

        <div className="skills-grid">
          {t.skills.map((group, index) => (
            <div
              key={group.id}
              className="card skills-card reveal"
              style={{ transitionDelay: `${(index % 3) * 50}ms` }}
            >
              <h3>{group.label}</h3>
              <ul className="skill-chips">
                {group.items.map((item) => {
                  const [Icon, color] = skillIcons[item.id] ?? [];
                  return (
                    <li key={item.id} className="skill-chip">
                      {Icon && <Icon className="skill-chip-icon" style={{ color }} aria-hidden="true" />}
                      {item.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
