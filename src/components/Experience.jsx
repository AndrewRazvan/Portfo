import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-container">
        {/* Work Experience Box */}
        <div className="experience-box">
          <h3>Work Experience</h3>
          <div className="experience-item">
            <h4>Technologies and Operations Intern</h4>
            <p>Desjardins, Montreal, Quebec</p>
            <p className="experience-duration">Sept 2024 - Dec 2024</p>
            <ul>
              <li>
                <strong>Automated data transfer</strong> from <strong>Excel</strong> to <strong>BlueMatrix</strong>, improving efficiency and reducing manual errors.
              </li>
              <li>
                <strong>Automated data transfer</strong> from <strong>MySQL</strong> to <strong>PowerBI</strong>, improving efficiency and reducing manual errors.
              </li>
              <li>
                <strong>Cleaned and corrected</strong> critical internal databases, enhancing data accuracy and reliability.
              </li>
              <li>
                <strong>Performed various administrative tasks</strong> to support the Capital Markets team and streamline daily operations.
              </li>
            </ul>

          </div>
        </div>

        {/* Education Box */}
        <div className="education-box">
          <h3>Education</h3>
          <div className="education-item">
            <h4>Bachelor of Engineering – Software Engineering Co-op</h4>
            <p>Concordia University, Montreal, QC</p>
            <p className="education-duration">Sept 2023 - May 2027</p>
            <ul>
              <li>Member of the Institute for Co-operative Education</li>
              <li>
                Relevant Courses: Data Structure and Algorithms, Object Oriented Programming (Java I & II), Web Development, Principle of Programming Languages
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;