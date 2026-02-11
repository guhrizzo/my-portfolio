"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Adicione aqui a estrutura básica para não dar erro de 'undefined'
const translations = {
  pt: {
    nav: { home: "Início", about: "Sobre", projects: "Projetos", contact: "Contato" },
    hero: { title: "Desenvolvendo", subtitle: "Código", desc: "Olá" }
  },
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact" },
    hero: { title: "Developing", subtitle: "Code", desc: "Hello" }
  },
  es: {
    nav: { home: "Inicio", about: "Sobre", projects: "Proyectos", contact: "Contacto" },
    hero: { title: "Desarrollando", subtitle: "Código", desc: "Hola" }
  }
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("pt");

  const value = {
    language,
    setLanguage,
    t: translations[language as keyof typeof translations] || translations.pt
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  // SEGURANÇA: Se o contexto for null, ele retorna o PT como padrão em vez de quebrar o site
  if (!context) {
    return { language: "pt", setLanguage: () => {}, t: translations.pt };
  }
  return context;
};