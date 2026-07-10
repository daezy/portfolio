"use client";
import React, { useEffect, useRef } from "react";
import Container from "../../Container";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsCaretRight } from "react-icons/bs";
import { projects } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

const featured = projects.slice(0, 4);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

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
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: -32,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.from(pRef.current, {
          scrollTrigger: {
            trigger: pRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 18,
          duration: 0.5,
          ease: "power2.out",
        });

        const cards = cardRefs.current;

        gsap.from(cards, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 32,
          stagger: 0.1,
          duration: 0.55,
          ease: "power2.out",
        });

        cards.forEach((card) => {
          if (!card) return;
          const image = card.querySelector(".project-image");
          const button = card.querySelector("button");

          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -8,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
              duration: 0.3,
              ease: "power2.out",
            });
            if (image) {
              gsap.to(image, { scale: 1.05, duration: 0.3, ease: "power2.out" });
            }
            if (button) {
              gsap.to(button, {
                x: 5,
                backgroundColor: "#1C66C2",
                duration: 0.3,
                ease: "power2.out",
              });
              const icon = button.querySelector("svg");
              if (icon) {
                gsap.to(icon, { x: 5, duration: 0.3, ease: "power2.out" });
              }
            }
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
              duration: 0.3,
              ease: "power2.out",
            });
            if (image) {
              gsap.to(image, { scale: 1, duration: 0.3, ease: "power2.out" });
            }
            if (button) {
              gsap.to(button, {
                x: 0,
                backgroundColor: "#27292B",
                duration: 0.3,
                ease: "power2.out",
              });
              const icon = button.querySelector("svg");
              if (icon) {
                gsap.to(icon, { x: 0, duration: 0.3, ease: "power2.out" });
              }
            }
          };

          card.addEventListener("mouseenter", handleMouseEnter);
          card.addEventListener("mouseleave", handleMouseLeave);
          listeners.push({ el: card, event: "mouseenter", handler: handleMouseEnter });
          listeners.push({ el: card, event: "mouseleave", handler: handleMouseLeave });
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
    <div ref={sectionRef} id="projects">
      <Container>
        <h2 ref={h2Ref} className="font-display font-bold text-h2 text-white mb-3">
          Projects
        </h2>
        <p ref={pRef}>
          Here are selected projects I&apos;ve built across Web3, AI, real-time
          systems, marketplaces, and developer-focused products — showcasing how
          I design, engineer, and ship practical software solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-5">
          {featured.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="bg-[#131415] rounded-[24px] p-8 flex flex-col justify-between gap-[20px] relative overflow-hidden"
            >
              <div className="project-image rounded-[24px] mb-3 overflow-hidden h-[300px] md:h-[340px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-h3 mb-4">
                  {project.title}
                </h3>
                <p className="text-[#C5C8D3] text-base leading-7">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-block"
                >
                  <button
                    type="button"
                    className="bg-[#27292B] text-white px-8 mt-4 py-3 rounded-full text-sm font-semibold flex items-center gap-2"
                  >
                    View Project <BsCaretRight />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/projects"
            className="bg-transparent border border-[#1C66C2] text-[#1C66C2] px-9 py-4 rounded-full hover:bg-[#1C66C2] hover:text-white transition text-sm font-semibold flex items-center gap-2"
          >
            View All Projects <BsCaretRight />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
