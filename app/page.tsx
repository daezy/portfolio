import Hero from "@/components/Hero";
import Contact from "@/components/views/Home/Contact";
import About from "@/components/views/Home/About";
import Experience from "@/components/views/Home/Experience";
import Projects from "@/components/views/Home/Projects";
import Skills from "@/components/views/Home/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
