import { Code2, GraduationCap, Coffee, Globe } from "lucide-react";
import Navbar from "./Navbar";

export default function About() {
  const stats = [
    { icon: <Code2 size={24} />, label: "Experiência", value: "2+ Anos" },
   
    { icon: <Globe size={24} />, label: "Localização", value: "Brasil" },
    { icon: <Coffee size={24} />, label: "Paixão", value: "Café & Código" },
  ];

  return (
    <section id="sobre" className="py-20 bg-slate-100/50 dark:bg-slate-900/20">
        
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Lado Esquerdo: Imagem ou Decoração */}
          <div className="flex-1 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Moldura Azul decorativa */}
              <div className="absolute -inset-4 border-2 border-blue-600/30 dark:border-blue-400/30 rounded-2xl rotate-6 -z-10"></div>
              <div className="absolute -inset-4 border-2 border-slate-900/10 dark:border-white/10 rounded-2xl -rotate-3 -z-10"></div>
              
              {/* Imagem (Substitua o src pela sua foto) */}
              <div className="w-full h-full rounded-2xl bg-blue-600 overflow-hidden shadow-2xl">
                <img 
                  src="https://github.com/seu-usuario.png" 
                  alt="Sua Foto"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Lado Direito: Texto */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Sobre <span className="text-blue-600 dark:text-blue-400">Mim</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Sou um desenvolvedor apaixonado por criar soluções digitais que unem performance e design. 
              Minha jornada começou com a curiosidade de entender como as coisas funcionam na web, 
              e hoje foco em tecnologias como <span className="text-blue-600 dark:text-blue-400 font-semibold">Next.js, React e Node.js</span>.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Acredito que um bom código é aquele que resolve problemas reais e escala com facilidade. 
              Quando não estou programando, estou estudando novas tendências ou contribuindo para projetos open-source.
            </p>

            {/* Grid de Stats Rápidos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center lg:items-start shadow-sm"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-2">
                    {stat.icon}
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}