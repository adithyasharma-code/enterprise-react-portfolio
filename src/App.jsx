import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import Stats from "./components/Stats";
import ExecutiveSummary from "./components/ExecutiveSummary";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import WhyMe from "./components/WhyMe";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      <Header />
    
      <Hero />

      <Stats />

      <ExecutiveSummary />

      <Experience />
      
      <Projects />

      <Achievements />

      <Skills />

      <Contact />
      
      <WhyMe />

      <CTA />

      <Footer />

    </div>
  );
}
