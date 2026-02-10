"use client"
import { ArrowRight, Github, FileText } from "lucide-react";
import { useEffect } from "react";



export default function Hero() {
    useEffect(() => {
        console.log(
            "%c Olá, recrutador! 👋 ",
            "color: #2563eb; font-size: 20px; font-weight: bold; background: #0f172a; padding: 10px; border-radius: 5px;"
        );
        console.log("Gostou do que viu? Vamos trabalhar juntos!");
    }, []);
    return (
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
            {/* Detalhe de fundo: um brilho azul sutil */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[20%] w-75 h-75 bg-blue-500/10 rounded-full blur-[120px] dark:bg-blue-600/20" />
                <div className="absolute bottom-[10%] right-[20%] w-75 h-75 bg-indigo-500/10 rounded-full blur-[100px] dark:bg-indigo-600/15" />
            </div>

            <div className="container mx-auto px-4 text-center">
                {/* Badge de status */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-xs font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                        Disponível para novos projetos
                    </span>
                </div>

                {/* Título Principal */}
                <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
                    Desenvolvendo o futuro com <br />
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-cyan-300">
                        Código e Design.
                    </span>
                </h1>

                {/* Subtítulo */}
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                    Olá, eu sou o <span className="text-slate-900 dark:text-white font-semibold">Gustavo</span>.
                    Desenvolvedor front-end especializado em Next.js, Tailwind e interfaces que encantam usuários.
                </p>

                {/* Botões de Ação */}
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all transform hover:scale-105 cursor-pointer shadow-lg shadow-blue-500/25">
                        Ver meus projetos
                        <ArrowRight size={20} />
                    </button>

                    <button className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-full cursor-pointer font-bold transition-all hover:bg-slate-50 dark:hover:bg-slate-800">
                        <Github size={20} />
                        GitHub
                    </button>
                </div>
            </div>
        </section>
    );
}