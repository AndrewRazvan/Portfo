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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <a href="#hero" className="logo">Andrew Ungureanu</a>
      <ul className="nav-links">
        <li className="nav-item"><a href="#experience" className="nav-link">Experience</a></li>
        <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
        <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
        <li className="nav-item"><a href="#contactme" className="nav-link">Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;