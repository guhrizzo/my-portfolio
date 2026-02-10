import { Github, Linkedin, Mail, Twitter } from "lucide-react"; // Opcional: lucide-react para ícones

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 transition-colors ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Lado Esquerdo: Marca/Nome */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Gustavo Rizzo<span className="text-blue-600 dark:text-blue-400">.</span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Desenvolvendo experiências digitais.
            </p>
          </div>

          {/* Centro: Redes Sociais */}
          <div className="flex items-center gap-5">
            <a href="#" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Lado Direito: Copyright */}
          <div className="text-sm text-slate-500 dark:text-slate-500">
            © {currentYear} Gustavo Rizzo — Todos os direitos reservados.
          </div>
        </div>
        
        {/* Linha sutil de gradiente (opcional para dar um charme) */}
        <div className="mt-8 h-px w-full bg-linear-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>
    </footer>
  );
}