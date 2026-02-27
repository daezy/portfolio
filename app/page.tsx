import Practice from "@/components/gsap/Practice";
import Timeline from "@/components/gsap/Timeline";
import Hero from "@/components/Hero";
import About from "@/components/views/Home/About";
import Experience from "@/components/views/Home/Experience";
import Projects from "@/components/views/Home/Projects";
import Skills from "@/components/views/Home/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      {/* <Practice /> */}
      {/* <Timeline /> */}
      <About />
      <Skills />
      <Projects />
      <Experience />
    </main>
  );
}
