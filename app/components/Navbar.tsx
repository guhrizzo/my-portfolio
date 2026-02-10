"use client"; // Necessário para gerenciar o estado do menu mobile e scroll

import { useState, useEffect } from "react";
import { Menu, X, Monitor, Moon, Sun } from "lucide-react";
import ThemeToggle from "./ThemeToggle";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para mudar o estilo da navbar ao rolar a página
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Projetos", href: "#projetos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm" 
        : "py-5 bg-transparent"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-slate-900 dark:text-white group">
          Gustavo<span className="text-blue-600 dark:text-blue-400 group-hover:animate-pulse">Rizzo</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
            <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
           <button className="p-2 text-slate-600 dark:text-slate-400">
            <Moon size={20} />
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 dark:text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 md:hidden animate-in fade-in slide-in-from-top-5">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-600 dark:text-slate-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}