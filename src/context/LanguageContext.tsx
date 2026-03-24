"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { portfolioConfig, Locale } from "@/config/portfolio";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("preferred-language") as Locale;
    if (saved && (portfolioConfig.locales as any)[saved]) {
      setLocaleState(saved);
    } else {
      // Try to match browser language
      const browserLang = navigator.language.split("-")[0] as Locale;
      if ((portfolioConfig.locales as any)[browserLang]) {
        setLocaleState(browserLang);
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("preferred-language", newLocale);
  };

  const t = (portfolioConfig.locales as any)[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
