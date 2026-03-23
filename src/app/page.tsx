import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="border-t border-[rgb(var(--border)/0.5)]" />
        <About />
        <div className="border-t border-[rgb(var(--border)/0.5)]" />
        <Experience />
        <div className="border-t border-[rgb(var(--border)/0.5)]" />
        <Projects />
        <div className="border-t border-[rgb(var(--border)/0.5)]" />
        <Skills />
        <div className="border-t border-[rgb(var(--border)/0.5)]" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
