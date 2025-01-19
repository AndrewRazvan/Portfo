import React from "react";
import "./Projects.css";
import { FaGithub, FaYoutube, FaDev } from "react-icons/fa"; // Install react-icons if not already done

const projects = [
  {
    title: "ConUHacks VIII",
    description:
      "Developed a fitness tracking tool using Python, OpenCV, and MediaPipe to assist users in maintaining proper exercise form with real-time video analysis.",
    youtubeLink: "https://www.youtube.com/watch?v=P1QSf3GHF8o",
    devpostLink: "https://devpost.com/software/fitnesscheck-ai",
  },
  {
    title: "Hand Sign Alphabet Recognition System",
    description:
      "Designed a machine learning model with TensorFlow to recognize hand sign alphabets, enhancing accessibility for hearing-impaired individuals.",
    githubLink: "https://github.com/AndrewRazvan/PolyHacks",
  },
  {
    title: "PolyHacks 2024",
    description:
      "Created a sound level monitoring app using Python and PyAudio to alert users of unsafe noise exposure, promoting hearing health.",
    githubLink: "https://github.com/AndrewRazvan/PolyHacks",
    youtubeLink: "https://www.youtube.com/watch?v=Q5OLDDagAJg",
    devpostLink: "https://devpost.com/software/safe-and-sound-zms5nj",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-icons">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="project-icon" />
                </a>
              )}
              {project.youtubeLink && (
                <a
                  href={project.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="project-icon" />
                </a>
              )}
              {project.devpostLink && (
                <a
                  href={project.devpostLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDev className="project-icon" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;