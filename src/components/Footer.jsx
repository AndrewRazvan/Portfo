import { FaArrowUp } from "react-icons/fa";
import { useLang } from "../i18n/LangContext";
import "./Footer.css";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="mono">
          © {new Date().getFullYear()} · {t.footer.built}
        </p>
        <a href="#top" className="footer-top">
          {t.footer.top}
          <FaArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
