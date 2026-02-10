import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Projeto Alpha",
    description: "Uma plataforma de e-commerce com Next.js e Stripe.",
    tech: ["Next.js", "Tailwind", "Prisma"],
    link: "#",
    github: "#",
  },
  {
    title: "DevAzul Blog",
    description: "Blog pessoal focado em tecnologia com Markdown.",
    tech: ["React", "Typescript", "Lucide"],
    link: "#",
    github: "#",
  },
  // Adicione mais projetos aqui
];

export default function ProjectGrid() {
  return (
    <section id="projetos" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 dark:text-white">
          Meus <span className="text-blue-600 dark:text-blue-400">Projetos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div 
              key={i}
              className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-blue-500/10"
            >
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {p.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                {p.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a href={p.github} className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href={p.link} className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}