"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect garante que o componente só renderize no cliente
  // evitando erros de hidratação (conflito servidor vs cliente)
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="p-2 w-9 h-9" />; // Espaço vazio enquanto carrega

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 cursor-pointer text-blue-600 dark:text-blue-400 
                 hover:ring-2 ring-blue-500 transition-all duration-300 active:scale-90"
      aria-label="Alternar Tema"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}