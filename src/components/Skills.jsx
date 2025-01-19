import React from "react";
import "./Skills.css";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiJavascript, SiC, SiTensorflow, SiMysql, SiGit } from "react-icons/si";

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {/* Languages */}
        <div className="skills-category">
          <h3>Languages</h3>
          <div className="skills-list">
            <div className="skill-item">
              <FaJava className="skill-icon" />
              <span>Java</span>
            </div>
            <div className="skill-item">
              <FaPython className="skill-icon" />
              <span>Python</span>
            </div>
            <div className="skill-item">
              <SiJavascript className="skill-icon" />
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <SiC className="skill-icon" />
              <span>C</span>
            </div>
            <div className="skill-item">
              <FaHtml5 className="skill-icon" />
              <span>HTML</span>
            </div>
            <div className="skill-item">
              <FaCss3Alt className="skill-icon" />
              <span>CSS</span>
            </div>
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="skills-category">
          <h3>Frameworks & Libraries</h3>
          <div className="skills-list">
            <div className="skill-item">
              <FaReact className="skill-icon" />
              <span>React</span>
            </div>
            <div className="skill-item">
              <SiTensorflow className="skill-icon" />
              <span>TensorFlow</span>
            </div>
            <div className="skill-item">
              <FaNodeJs className="skill-icon" />
              <span>Node.js</span>
            </div>
          </div>
        </div>

        {/* Database */}
        <div className="skills-category">
          <h3>Database</h3>
          <div className="skills-list">
            <div className="skill-item">
              <SiMysql className="skill-icon" />
              <span>SQL</span>
            </div>
          </div>
        </div>

        {/* Version Control */}
        <div className="skills-category">
          <h3>Version Control</h3>
          <div className="skills-list">
            <div className="skill-item">
              <SiGit className="skill-icon" />
              <span>Git</span>
            </div>
            <div className="skill-item">
              <FaGithub className="skill-icon" />
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;