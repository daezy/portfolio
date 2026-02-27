"use client";
import React, { useEffect, useRef } from "react";
import Container from "../../Container";
import Project1 from "@/public/images/projects/1.png";
import Project2 from "@/public/images/projects/2.png";
import Project3 from "@/public/images/projects/3.png";
import Project4 from "@/public/images/projects/4.png";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsCaretRight } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animations
      gsap.from(h2Ref.current, {
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(pRef.current, {
        scrollTrigger: {
          trigger: pRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      // Project card animations with stagger
      const cards = [
        card1Ref.current,
        card2Ref.current,
        card3Ref.current,
        card4Ref.current,
      ];

      gsap.from(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 80,
        scale: 0.95,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      });

      // Card hover animations
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
            gsap.to(image, {
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out",
            });
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
              gsap.to(icon, {
                x: 5,
                duration: 0.3,
                ease: "power2.out",
              });
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
            gsap.to(image, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
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
              gsap.to(icon, {
                x: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            }
          }
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <Container>
        <h2 ref={h2Ref} className="text-white font-bold text-[48px] mb-3">
          Projects
        </h2>
        <p ref={pRef}>
          Here are some things I've built — from passion projects to real-world
          apps — that showcase how I think, code, and solve problems.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-8 mb-5">
          <div
            ref={card1Ref}
            className="bg-[#131415] rounded-[24px] p-8 flex flex-col justify-between gap-[20px] relative overflow-hidden"
          >
            <div className="project-image rounded-[24px] mb-3">
              <Image src={Project1} alt="Project 1" className="w-full" />
            </div>
            <div>
              <h3 className="text-white font-bold text-[32px] mb-4 leading-8">
                TaskPilot – Productivity Task Manager
              </h3>
              <p className="text-[#C5C8D3] text-[15px] leading-6">
                A Kanban-style productivity app with drag-and-drop features,
                real-time collaboration using WebSockets, and user
                authentication via JWT.
              </p>

              <button className="bg-[#27292B] text-white px-8 mt-4 py-3 rounded-full transition text-[14px] font-semibold flex items-center gap-2">
                View Project <BsCaretRight />
              </button>
            </div>
            <div className="mt-6 absolute bottom-0 left-0"></div>
          </div>

          <div
            ref={card2Ref}
            className="bg-[#131415] rounded-[24px] p-8 flex flex-col justify-between gap-[20px] relative overflow-hidden"
          >
            <div className="project-image rounded-[24px] mb-3">
              <Image src={Project2} alt="Project 1" className="w-full" />
            </div>
            <div>
              <h3 className="text-white font-bold text-[32px] mb-4 leading-8">
                DevDeck – Developer Portfolio Builder
              </h3>
              <p className="text-[#C5C8D3] text-[15px] leading-6">
                Create and deploy fully customizable portfolio websites without
                writing a single line of code — designers, and creatives who
                want a professional online presence with ease.
              </p>

              <button className="bg-[#27292B] text-white px-8 mt-4 py-3 rounded-full transition text-[14px] font-semibold flex items-center gap-2">
                View Project <BsCaretRight />
              </button>
            </div>
            <div className="mt-6 absolute bottom-0 left-0"></div>
          </div>

          <div
            ref={card3Ref}
            className="bg-[#131415] rounded-[24px] p-8 flex flex-col justify-between gap-[20px] relative overflow-hidden"
          >
            <div className="project-image rounded-[24px] mb-3">
              <Image src={Project3} alt="Project 1" className="w-full" />
            </div>
            <div>
              <h3 className="text-white font-bold text-[32px] mb-4 leading-8">
                BugSquash – Lightweight Issue Tracker
              </h3>
              <p className="text-[#C5C8D3] text-[15px] leading-6">
                A simplified bug and issue tracking system designed for solo
                devs or small teams. Features task management, tagging,
                filtering, and real-time updates for streamlined workflows.
              </p>

              <button className="bg-[#27292B] text-white px-8 mt-4 py-3 rounded-full transition text-[14px] font-semibold flex items-center gap-2">
                View Project <BsCaretRight />
              </button>
            </div>
            <div className="mt-6 absolute bottom-0 left-0"></div>
          </div>

          <div
            ref={card4Ref}
            className="bg-[#131415] rounded-[24px] p-8 flex flex-col justify-between gap-[20px] relative overflow-hidden"
          >
            <div className="project-image rounded-[24px] mb-3">
              <Image src={Project4} alt="Project 1" className="w-full" />
            </div>
            <div>
              <h3 className="text-white font-bold text-[32px] mb-4 leading-8">
                HabitForge – Habit Tracker
              </h3>
              <p className="text-[#C5C8D3] text-[15px] leading-6">
                A personal habit tracker that helps users build routines and
                track progress with visual stats. Set daily goals, monitor
                streaks, and stay accountable with a clean, interactive
                dashboard.
              </p>

              <button className="bg-[#27292B] text-white px-8 mt-4 py-3 rounded-full transition text-[14px] font-semibold flex items-center gap-2">
                View Project <BsCaretRight />
              </button>
            </div>
            <div className="mt-6 absolute bottom-0 left-0"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
