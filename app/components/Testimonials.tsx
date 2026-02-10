"use client";

import { useLanguage } from "./LanguageContext";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Depoimentos",
      subtitle: "O que dizem sobre trabalhar comigo",
      items: [
        { name: "Carlos Silva", role: "CEO na TechFlow", text: "O Gustavo entregou o projeto antes do prazo e com uma qualidade de código excepcional. Recomendo muito!" },
        { name: "Ana Oliveira", role: "Product Manager", text: "Excelente visão de design e usabilidade. Transformou nossa ideia em um produto real." },
        { name: "John Doe", role: "Dev Lead", text: "Código limpo, bem documentado e fácil de manter. Um profissional completo." }
      ]
    },
    en: {
      title: "Testimonials",
      subtitle: "What they say about working with me",
      items: [
        { name: "Carlos Silva", role: "CEO at TechFlow", text: "Gustavo delivered the project ahead of schedule with exceptional code quality. Highly recommend!" },
        { name: "Ana Oliveira", role: "Product Manager", text: "Excellent vision for design and usability. Turned our idea into a real product." },
        { name: "John Doe", role: "Dev Lead", text: "Clean code, well-documented, and easy to maintain. A complete professional." }
      ]
    },
    es: {
      title: "Testimonios",
      subtitle: "Lo que dicen sobre trabajar conmigo",
      items: [
        { name: "Carlos Silva", role: "CEO en TechFlow", text: "Gustavo entregó el proyecto antes de lo previsto con una calidad de código excepcional." },
        { name: "Ana Oliveira", role: "Gerente de Producto", text: "Excelente visión de diseño y usabilidad. Convirtió nuestra idea en un producto real." },
        { name: "John Doe", role: "Líder de Dev", text: "Código limpio, bien documentado y fácil de mantener. Un profesional completo." }
      ]
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950/50 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Título com animação de fade-down */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {t.title.split(' ')[0]} <span className="text-blue-600 dark:text-blue-400">{t.title.split(' ')[1] || ""}</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 italic">
            "{t.subtitle}"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((item, index) => (
            <div 
              key={index}
              // data-aos determina o tipo de animação
              // data-aos-delay cria o efeito cascata (100ms, 200ms, 300ms...)
              data-aos="fade-up"
              data-aos-delay={index * 100} 
              className="relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl hover:border-blue-500/50 transition-all group"
            >
              <Quote className="absolute top-6 right-6 text-blue-600/10 dark:text-blue-400/10 group-hover:text-blue-500/20 transition-colors" size={40} />
              
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed italic">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{item.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}