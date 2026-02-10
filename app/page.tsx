import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import Contact from "./components/Contact";
import About from "./components/about";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
