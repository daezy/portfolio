"use client";
import React, { useEffect, useRef } from "react";
import Container from "../../Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const p3Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const listeners: Array<{
      el: Element;
      event: string;
      handler: EventListener;
    }> = [];

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from(h2Ref.current, {
          scrollTrigger: {
            trigger: h2Ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          x: -60,
          duration: 0.9,
          ease: "power4.out",
        });

        const paragraphs = [p1Ref.current, p2Ref.current, p3Ref.current];

        // Single trigger on the section so stagger works as designed
        gsap.from(paragraphs, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 40,
          stagger: 0.18,
          duration: 0.85,
          ease: "power3.out",
        });

        paragraphs.forEach((p) => {
          if (!p) return;
          const handleMouseEnter = () => {
            gsap.to(p, { x: 5, duration: 0.3, ease: "power2.out" });
          };
          const handleMouseLeave = () => {
            gsap.to(p, { x: 0, duration: 0.3, ease: "power2.out" });
          };
          p.addEventListener("mouseenter", handleMouseEnter);
          p.addEventListener("mouseleave", handleMouseLeave);
          listeners.push({ el: p, event: "mouseenter", handler: handleMouseEnter });
          listeners.push({ el: p, event: "mouseleave", handler: handleMouseLeave });
        });
      }, sectionRef);

      return () => {
        ctx.revert();
        listeners.forEach(({ el, event, handler }) =>
          el.removeEventListener(event, handler),
        );
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <Container>
        <h2 ref={h2Ref} className="font-display font-bold text-h2 text-white mb-3">
          About Me
        </h2>
        <p ref={p1Ref}>
          I&apos;m a software developer with over 4 years of professional
          experience building modern web applications, with a focus on
          full-stack development using JavaScript, TypeScript, and React. I
          specialize in creating responsive, user-friendly interfaces and robust
          backend services that scale. My approach to development balances
          performance, maintainability, and clear communication — whether
          I&apos;m collaborating with designers, working with cross-functional
          teams, or debugging complex technical issues.
        </p>
        <p ref={p2Ref}>
          Throughout my career, I&apos;ve contributed to projects ranging from
          early-stage MVPs to enterprise-grade platforms. I enjoy taking
          ownership of features from planning to deployment and am always
          looking for ways to improve systems, automate workflows, and reduce
          technical debt. Clean code, thoughtful architecture, and meaningful
          user impact are what drive me.
        </p>
        <p ref={p3Ref}>
          Outside of work, I&apos;m an avid learner — currently exploring Rust
          and cloud-native technologies. I also enjoy mentoring junior
          developers, participating in open source when I can, and staying up to
          date with the evolving tech landscape. When I&apos;m not coding,
          you&apos;ll probably find me on a hiking trail, experimenting with a
          new side project, or playing strategy games.
        </p>
      </Container>
    </div>
  );
};

export default About;
