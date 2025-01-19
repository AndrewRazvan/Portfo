import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true); // Navbar visibility state
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // If scrolling down and passed 50px, hide the navbar
      setIsVisible(false);
    } else {
      // If scrolling up, show the navbar
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY); // Update the last scroll position
  };

  const handleSmoothScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <a
        onClick={() => handleSmoothScroll("hero")}
        className="logo"
        style={{ cursor: "pointer" }}
      >
        Andrew Ungureanu
      </a>
      <ul className="nav-links">
        <li className="nav-item">
          <button
            onClick={() => handleSmoothScroll("experience")}
            className="nav-link"
          >
            Experience
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => handleSmoothScroll("projects")}
            className="nav-link"
          >
            Projects
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => handleSmoothScroll("skills")}
            className="nav-link"
          >
            Skills
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => handleSmoothScroll("contactme")}
            className="nav-link"
          >
            Contact Me
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;