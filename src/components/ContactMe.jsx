import React from "react";
import "./ContactMe.css";
import { FaEnvelope, FaLinkedin, FaPhone, FaGithub } from "react-icons/fa"; // Install react-icons if not already done

const ContactMe = () => {
  return (
    <section id="contactme" className="contactme-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me through any of the platforms below:</p>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:andrewrazvanu@gmail.com" className="contact-link">
            andrewrazvanu@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/andrew-razvan-ungureanu-22b7402aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn Profile
          </a>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span className="contact-link">438-406-4068</span>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a
            href="https://github.com/AndrewRazvan"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;