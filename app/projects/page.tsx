"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { BsCaretRight } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { projects } from "@/lib/projects";

const socialLinks = [
  { label: "X (formerly Twitter)", href: "https://x.com/DanielEzet", icon: <FaXTwitter size={15} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/daniel-onoriode-ezet-48324a303/", icon: <FaLinkedinIn size={15} /> },
  { label: "GitHub", href: "https://github.com/daezy", icon: <FaGithub size={15} /> },
  { label: "Email", href: "mailto:ezetdaniel@gmail.com", icon: <FiMail size={15} /> },
];

export default function ProjectsPage() {
  const backBtnRef = useRef<HTMLAnchorElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const listeners: Array<{ el: Element; event: string; handler: EventListener }> = [];

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.set(backBtnRef.current, { opacity: 0, y: -16 });
        gsap.set(headingRef.current, { opacity: 0, x: -28 });
        gsap.set(subtitleRef.current, { opacity: 0, y: 18 });
        gsap.set(cardRefs.current, { opacity: 0, y: 28, scale: 0.98 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(backBtnRef.current, { opacity: 1, y: 0, duration: 0.55 })
          .to(headingRef.current, { opacity: 1, x: 0, duration: 0.85, ease: "power4.out" }, "-=0.3")
          .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.65 }, "-=0.5")
          .to(
            cardRefs.current,
            { opacity: 1, y: 0, scale: 1, stagger: 0.11, duration: 0.65, ease: "power2.out" },
            "-=0.45",
          );

        // Back button hover
        if (backBtnRef.current) {
          const btn = backBtnRef.current;
          const icon = btn.querySelector("svg");

          const onBtnEnter = () => {
            gsap.to(btn, { backgroundColor: "#27292B", duration: 0.22, ease: "power2.out" });
            if (icon) gsap.to(icon, { x: 4, duration: 0.2, ease: "power2.out" });
          };
          const onBtnLeave = () => {
            gsap.to(btn, { backgroundColor: "#1C1E20", duration: 0.22, ease: "power2.out" });
            if (icon) gsap.to(icon, { x: 0, duration: 0.2, ease: "power2.out" });
          };

          btn.addEventListener("mouseenter", onBtnEnter);
          btn.addEventListener("mouseleave", onBtnLeave);
          listeners.push(
            { el: btn, event: "mouseenter", handler: onBtnEnter as EventListener },
            { el: btn, event: "mouseleave", handler: onBtnLeave as EventListener },
          );
        }

        cardRefs.current.forEach((card) => {
          if (!card) return;
          const image = card.querySelector(".card-image");
          const btn = card.querySelector(".view-btn");

          const onEnter = () => {
            gsap.to(card, { y: -8, boxShadow: "0 20px 44px rgba(0,0,0,0.55)", duration: 0.28, ease: "power2.out" });
            if (image) gsap.to(image, { scale: 1.05, duration: 0.32, ease: "power2.out" });
            if (btn) {
              gsap.to(btn, { backgroundColor: "#1C66C2", duration: 0.22, ease: "power2.out" });
              const icon = btn.querySelector("svg");
              if (icon) gsap.to(icon, { x: 4, duration: 0.22, ease: "power2.out" });
            }
          };

          const onLeave = () => {
            gsap.to(card, { y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.28, ease: "power2.out" });
            if (image) gsap.to(image, { scale: 1, duration: 0.32, ease: "power2.out" });
            if (btn) {
              gsap.to(btn, { backgroundColor: "#27292B", duration: 0.22, ease: "power2.out" });
              const icon = btn.querySelector("svg");
              if (icon) gsap.to(icon, { x: 0, duration: 0.22, ease: "power2.out" });
            }
          };

          card.addEventListener("mouseenter", onEnter);
          card.addEventListener("mouseleave", onLeave);
          listeners.push(
            { el: card, event: "mouseenter", handler: onEnter as EventListener },
            { el: card, event: "mouseleave", handler: onLeave as EventListener },
          );
        });
      });

      return () => {
        ctx.revert();
        listeners.forEach(({ el, event, handler }) => el.removeEventListener(event, handler));
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#C5C8D3] flex flex-col font-[family-name:var(--font-inter-tight)]">
      {/* Main content */}
      <main className="flex-1 max-w-[1280px] mx-auto w-full px-5 md:px-8 pt-10 md:pt-14 pb-16 md:pb-28">
        <Link
          ref={backBtnRef}
          href="/"
          className="inline-flex items-center gap-2 bg-[#1C1E20] border border-white/[0.14] text-white text-sm font-medium px-5 py-2.5 rounded-full"
        >
          Back to home <BsCaretRight />
        </Link>

        <h1
          ref={headingRef}
          className="font-[family-name:var(--font-bricolage)] font-bold text-h2 text-white mt-12 md:mt-16 mb-4"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Projects
        </h1>
        <p
          ref={subtitleRef}
          className="max-w-[65ch] text-[#C5C8D3] text-[1.0625rem] leading-7 mb-10"
        >
          Here are selected projects I&apos;ve built across Web3, AI, real-time systems,
          marketplaces, and developer-focused products — showcasing how I design, engineer, and
          ship practical software solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="bg-[#131415] rounded-[24px] p-6 md:p-8 flex flex-col gap-5 overflow-hidden"
            >
              {/* Card image */}
              <div className="card-image rounded-[18px] overflow-hidden h-[280px] md:h-[320px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  draggable={false}
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 gap-4">
                <div>
                  <h2 className="text-white font-bold text-[1.15rem] leading-snug mb-3">
                    {project.title}
                  </h2>
                  <p className="text-[#C5C8D3] text-[0.9375rem] leading-7">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <Link href={`/projects/${project.id}`}>
                    <button
                      type="button"
                      className="view-btn bg-[#27292B] text-white text-sm font-semibold px-6 py-2.5 rounded-full flex items-center gap-2"
                    >
                      View Project <BsCaretRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 flex flex-col items-center gap-5">
        <p className="text-[#C5C8D3] text-sm">
          Copyright &copy; {new Date().getFullYear()} Daniel Ezet
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="w-9 h-9 rounded-full bg-[#1C1E20] border border-white/10 flex items-center justify-center text-[#C5C8D3] hover:text-white hover:bg-[#27292B] transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
