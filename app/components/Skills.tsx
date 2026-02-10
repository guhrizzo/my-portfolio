export default function Skills() {
  const tech = [
    "Next.js", "TypeScript", "React", "Node.js", 
    "Tailwind CSS", "Prisma", "PostgreSQL", "Docker", 
    "Git", "Figma", "Firebase", "Storybook"
  ];

  return (
    <section className="py-12 bg-blue-600 dark:bg-blue-500 overflow-hidden skew-y-1">
      <div className="flex whitespace-nowrap -skew-y-1">
        {/* Renderizamos duas vezes para o loop ser infinito */}
        <div className="flex animate-marquee gap-8 items-center">
          {tech.map((item, i) => (
            <span key={i} className="text-white text-2xl md:text-4xl font-black uppercase italic mx-4 opacity-80">
              {item} •
            </span>
          ))}
        </div>
        <div className="flex animate-marquee gap-8 items-center" aria-hidden="true">
          {tech.map((item, i) => (
            <span key={i} className="text-white text-2xl md:text-4xl font-black uppercase italic mx-4 opacity-80">
              {item} •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}