import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <Contact />
      <Footer />
    </div>
  );
}
