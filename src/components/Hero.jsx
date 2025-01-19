import React, { useState } from "react";
import "./Hero.css";
import heroImage from "../assets/hero-img.png"; // Update this with your actual hero image path
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Install react-icons if not already installed

const Hero = () => {
  const [language, setLanguage] = useState("en");

  // Content in both languages
  const content = {
    en: {
      downloadCV: "Download CV (English)",
      cvLink: "/cv-english.pdf",
      intro: "Hi! I’m Andrew Ungureanu, a software engineering student in the Co-op program at Concordia University and a proud member of the Concordia Stingers men’s varsity soccer team. I have a strong passion for developement and enjoy creating innovative applications that address real-world problems. This website showcases some of the projects I’ve worked on throughout my journey as a developer.",
    },
    fr: {
      downloadCV: "Télécharger le CV (Français)",
      cvLink: "/cv-french.pdf",
      intro: "Salut ! Je m’appelle Andrew Ungureanu, étudiant en génie logiciel dans le programme Co-op de l’Université Concordia et fier membre de l’équipe masculine de soccer varsity des Concordia Stingers. Je suis passionné par le développement et j’aime créer des applications innovantes qui répondent à des problèmes concrets. Ce site présente certains des projets sur lesquels j’ai travaillé tout au long de mon parcours en tant que développeur.",
    },
  };

  // Toggle language between English and French
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  return (
    <section id="hero">
      <div className="hero-content">
        {/* Hero Image */}
        <div className="hero-image-container">
          <img src={heroImage} alt="Hero" className="hero-image" />
        </div>

        {/* Hero Text */}
        <div className="hero-text">
          <h1>Welcome to My Website</h1>
          <p>{content[language].intro}</p>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/andrew-razvan-ungureanu-22b7402aa/" // Replace with your LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AndrewRazvan" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
        </div>

        {/* CV Button */}
        <div className="cv-buttons">
          <a href={content[language].cvLink} download className="cv-button">
            {content[language].downloadCV}
          </a>
        </div>

        {/* Toggle Language Button */}
        <button onClick={toggleLanguage} className="toggle-language-button">
          {language === "en" ? "Switch to French" : "Passer à l'anglais"}
        </button>
      </div>
    </section>
  );
};

export default Hero;