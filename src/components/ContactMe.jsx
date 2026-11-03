import { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaPhone, FaGithub, FaCopy, FaCheck } from "react-icons/fa";
import { useLang } from "../i18n/LangContext";
import { contact } from "../content";
import SectionHeader from "./SectionHeader";
import "./ContactMe.css";

const ContactMe = () => {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  // Reset the "Copied!" confirmation after a moment
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
    } catch {
      // Clipboard unavailable; the mailto link still works
    }
  };

  const channels = [
    { id: "linkedin", label: "LinkedIn", value: contact.linkedinLabel, href: contact.linkedin, icon: FaLinkedin, external: true },
    { id: "github", label: "GitHub", value: contact.githubLabel, href: contact.github, icon: FaGithub, external: true },
    { id: "phone", label: t.contactLinks.phone, value: contact.phone, href: contact.phoneHref, icon: FaPhone },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-panel card reveal">
          <SectionHeader index="05" {...t.sections.contact} />

          <div className="contact-email">
            <a href={`mailto:${contact.email}`} className="btn btn-primary">
              <FaEnvelope aria-hidden="true" />
              {contact.email}
            </a>
            <button type="button" className="btn btn-secondary" onClick={copyEmail}>
              {copied ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
              {copied ? t.contactLinks.copied : t.contactLinks.copy}
            </button>
            <span className="visually-hidden" aria-live="polite">
              {copied ? t.contactLinks.copied : ""}
            </span>
          </div>

          <ul className="contact-channels">
            {channels.map(({ id, label, value, href, icon: Icon, external }) => (
              <li key={id}>
                <a
                  href={href}
                  className="contact-channel"
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  <Icon className="contact-channel-icon" aria-hidden="true" />
                  <span>
                    <span className="contact-channel-label mono">{label}</span>
                    <span className="contact-channel-value">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
