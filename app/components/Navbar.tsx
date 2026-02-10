"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "./LanguageContext"; // Para acessar o idioma e as traduções

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [completion, setCompletion] = useState(0);
  
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Mudar fundo ao rolar
      setScrolled(window.scrollY > 20);

      // Calcular progresso da linha fininha
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Links vindos do arquivo de tradução
  const navLinks = [
    { name: t.nav.home, href: "#" },
    { name: t.nav.about, href: "#sobre" },
    { name: t.nav.projects, href: "#projetos" },
    { name: t.nav.contact, href: "#contato" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm" 
        : "py-5 bg-transparent"
    }`}>
      {/* LINHA DE PROGRESSO (A fininha) */}
      <div 
        className="absolute top-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(37,99,235,0.5)]"
        style={{ width: `${completion}%` }}
      />

      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-slate-900 dark:text-white group italic">
          Gustavo<span className="text-blue-600 dark:text-blue-400 group-hover:animate-pulse">Rizzo</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-800 pl-6">
            {/* Seletor de Idioma */}
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1  rounded-lg">
              {["pt", "en", "es"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-0.5 text-[10px] cursor-pointer font-bold rounded uppercase transition-all ${
                    language === lang 
                      ? "bg-blue-600 text-white shadow-md" 
                      : "text-slate-500 hover:text-blue-600"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-900 dark:text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 md:hidden animate-in fade-in slide-in-from-top-5">
          <div className="flex flex-col p-6 gap-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
            {/* Seletor de Idioma Mobile */}
            <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 w-full justify-center ">
              {["pt", "en", "es"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => { setLanguage(lang); setIsOpen(false); }}
                  className={`px-4 py-2 text-sm font-bold rounded-xl uppercase ${
                    language === lang ? "bg-blue-600 text-white" : "text-slate-500"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}