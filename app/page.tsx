import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import Contact from "./components/Contact";
import About from "./components/about";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* 1. Impacto inicial */}
        <Hero />
        
        {/* 2. Quem é você (Humaniza o dev) */}
        <About />
        
        {/* 3. O que você domina (Efeito visual do Marquee/Grid) */}
        <Skills />
        
        {/* 4. Prova real (Seus códigos e projetos) */}
        <div id="projetos">
          <ProjectGrid />
        </div>
        
        {/* 5. Prova social (O que os outros dizem) */}
        <Testimonials />
        
        {/* 6. Conversão final (Call to Action) */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}