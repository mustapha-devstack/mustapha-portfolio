import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Education from "@/components/Education";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
