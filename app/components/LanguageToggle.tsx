"use client";

import { useLanguage } from "./LanguageContext"; // Vamos criar isso abaixo

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
      {["pt", "en", "es"].map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang as any)}
          className={`px-2 py-1 text-xs font-bold rounded uppercase transition-all ${
            language === lang 
              ? "bg-blue-600 text-white shadow-sm" 
              : "text-slate-500 hover:text-blue-600"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}