import { createContext, useContext } from "react";

export const LangContext = createContext(null);

// Returns { lang, setLang, t } where t is the content for the current language
export const useLang = () => useContext(LangContext);
