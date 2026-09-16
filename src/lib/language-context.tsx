import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { TRANSLATIONS } from "./translations";

export type Lang = "gu" | "en";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextValue>({
  lang: "gu",
  setLang: () => {},
  t: (k) => k,
});

export function getLang(): Lang {
  if (typeof window === "undefined") return "gu";
  return (localStorage.getItem("lang") as Lang) ?? "gu";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getLang);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = lang === "gu" ? "gu" : "en";
  }, [lang]);

  const t = (key: string): string => {
    const entry = TRANSLATIONS[key];
    if (!entry) return key;
    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
