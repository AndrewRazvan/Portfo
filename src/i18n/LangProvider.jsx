import { useEffect, useMemo, useState } from "react";
import { LangContext } from "./LangContext";
import { getContent } from "../content";

// Saved choice first, then the browser language, then English
const initialLang = () => {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "fr") return saved;
  } catch {
    // Storage can be blocked (private mode); fall through
  }
  return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
};

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // Ignore: the choice just won't persist
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: getContent(lang) }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export default LangProvider;
