"use client";
import React, { createContext, useContext, useState } from "react";
import { translations } from "../translations"; // Arquivo com as traduções para cada idioma

type Language = "pt" | "en" | "es";
const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);