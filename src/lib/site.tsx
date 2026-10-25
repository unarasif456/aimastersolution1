/**
 * Site-wide preferences: language (English / Roman Urdu) and theme (light / dark).
 * Both are saved in localStorage and applied after hydration to avoid SSR mismatch.
 */
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ur";
type Theme = "light" | "dark";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
  /** t("English text", "Roman Urdu text") — returns the active language */
  t: (en: string, ur: string) => string;
};

const SiteCtx = createContext<Ctx | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  // Load saved preferences once on the client
  useEffect(() => {
    const l = localStorage.getItem("ams-lang") as Lang | null;
    const th = localStorage.getItem("ams-theme") as Theme | null;
    if (l) setLangState(l);
    if (th) setTheme(th);
  }, []);

  // Apply theme class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("ams-theme", theme);
  }, [theme]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("ams-lang", l);
  };

  return (
    <SiteCtx.Provider
      value={{
        lang,
        setLang,
        theme,
        toggleTheme: () => setTheme((p) => (p === "dark" ? "light" : "dark")),
        t: (en, ur) => (lang === "en" ? en : ur),
      }}
    >
      {children}
    </SiteCtx.Provider>
  );
}

export function useSite() {
  const c = useContext(SiteCtx);
  if (!c) throw new Error("useSite must be inside SiteProvider");
  return c;
}

/** Shared SEO helper for route head() */
export function seo(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
