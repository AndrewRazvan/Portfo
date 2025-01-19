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
      intro: "Hello there! I am Andrew Ungureanu, a software engineer student enrolled in a Co-op program at Concordia University. I am passionate about web development and building innovative applications that solve real-world challenges. On this website, you'll find projects I have created throughout my career as a developer.",
    },
    fr: {
      downloadCV: "Télécharger le CV (Français)",
      cvLink: "/cv-french.pdf",
      intro: "Bonjour! Je suis Andrew Ungureanu, un étudiant en génie logiciel inscrit au programme coopératif de l'Université Concordia. Je suis passionné par le développement web et la création d'applications innovantes qui répondent à des défis du monde réel. Sur ce site, vous trouverez des projets que j'ai réalisés au cours de ma carrière de développeur.",
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