"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import { FiMail, FiLink2 } from "react-icons/fi";
import { FiMaximize2 } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { projects, getProject } from "@/lib/projects";
import Lightbox from "./Lightbox";

const socialLinks = [
  { label: "X (formerly Twitter)", href: "https://x.com/DanielEzet", icon: <FaXTwitter size={15} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/daniel-onoriode-ezet-48324a303/", icon: <FaLinkedinIn size={15} /> },
  { label: "GitHub", href: "https://github.com/daezy", icon: <FaGithub size={15} /> },
  { label: "Email", href: "mailto:ezetdaniel@gmail.com", icon: <FiMail size={15} /> },
];

export default function ProjectDetail({ id }: { id: string }) {
  const project = getProject(id);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const listeners: Array<{ el: Element; event: string; handler: EventListener }> = [];

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const galleryImages = galleryRef.current
          ? Array.from(galleryRef.current.querySelectorAll(".gallery-image"))
          : [];

        gsap.set(headerRef.current, { opacity: 0, y: -16 });
        gsap.set(headingRef.current, { opacity: 0, x: -28 });
        gsap.set(subtitleRef.current, { opacity: 0, y: 18 });
        gsap.set(cardRef.current, { opacity: 0, y: 24 });
        gsap.set(actionsRef.current, { opacity: 0, y: 16 });
        gsap.set(galleryImages, { opacity: 0, y: 28 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(headerRef.current, { opacity: 1, y: 0, duration: 0.55 })
          .to(headingRef.current, { opacity: 1, x: 0, duration: 0.85, ease: "power4.out" }, "-=0.3")
          .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.65 }, "-=0.5")
          .to(cardRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.45")
          .to(actionsRef.current, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" }, "-=0.4")
          .to(
            galleryImages,
            { opacity: 1, y: 0, stagger: 0.12, duration: 0.65, ease: "power2.out" },
            "-=0.35",
          );

        // Pill / circle button hovers
        const hoverButtons = document.querySelectorAll(".hover-pill");
        hoverButtons.forEach((btn) => {
          const icon = btn.querySelector("svg");
          const onEnter = () => {
            gsap.to(btn, { backgroundColor: "#27292B", duration: 0.22, ease: "power2.out" });
            if (icon) gsap.to(icon, { x: 3, duration: 0.2, ease: "power2.out" });
          };
          const onLeave = () => {
            gsap.to(btn, { backgroundColor: "#1C1E20", duration: 0.22, ease: "power2.out" });
            if (icon) gsap.to(icon, { x: 0, duration: 0.2, ease: "power2.out" });
          };
          btn.addEventListener("mouseenter", onEnter);
          btn.addEventListener("mouseleave", onLeave);
          listeners.push(
            { el: btn, event: "mouseenter", handler: onEnter as EventListener },
            { el: btn, event: "mouseleave", handler: onLeave as EventListener },
          );
        });

        const visitBtn = document.querySelector(".visit-btn");
        if (visitBtn) {
          const onEnter = () =>
            gsap.to(visitBtn, { scale: 1.04, duration: 0.22, ease: "power2.out" });
          const onLeave = () =>
            gsap.to(visitBtn, { scale: 1, duration: 0.22, ease: "power2.out" });
          visitBtn.addEventListener("mouseenter", onEnter);
          visitBtn.addEventListener("mouseleave", onLeave);
          listeners.push(
            { el: visitBtn, event: "mouseenter", handler: onEnter as EventListener },
            { el: visitBtn, event: "mouseleave", handler: onLeave as EventListener },
          );
        }
      });

      return () => {
        ctx.revert();
        listeners.forEach(({ el, event, handler }) => el.removeEventListener(event, handler));
      };
    });

    return () => mm.revert();
  }, [project]);

  if (!project) return null;

  const index = projects.findIndex((p) => p.id === project.id);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const [mainImage, ...secondaryImages] = project.gallery;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#C5C8D3] flex flex-col font-[family-name:var(--font-inter-tight)]">
      <main className="flex-1 max-w-[1280px] mx-auto w-full px-5 md:px-8 pt-10 md:pt-14 pb-16 md:pb-28">
        {/* Top bar: back circle + back to home */}
        <div ref={headerRef} className="flex items-center justify-between">
          <Link
            href="/projects"
            aria-label="Back to projects"
            className="hover-pill w-12 h-12 rounded-full bg-[#1C1E20] border border-white/[0.14] text-white flex items-center justify-center"
          >
            <BsCaretLeft />
          </Link>
          <Link
            href="/"
            className="hover-pill inline-flex items-center gap-2 bg-[#1C1E20] border border-white/[0.14] text-white text-sm font-medium px-5 py-2.5 rounded-full"
          >
            Back to home <BsCaretRight />
          </Link>
        </div>

        {/* Title */}
        <h1
          ref={headingRef}
          className="font-[family-name:var(--font-bricolage)] font-bold text-h2 text-white mt-12 md:mt-16 mb-4"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          {project.title}
        </h1>
        <p ref={subtitleRef} className="max-w-[75ch] text-[#C5C8D3] text-[1.0625rem] leading-7 mb-10">
          {project.description}
        </p>

        {/* Info card */}
        <div ref={cardRef} className="bg-[#131415] rounded-[24px] p-6 md:p-8">
          <h2 className="text-white font-bold text-lg mb-3">Description</h2>
          <p className="text-[#C5C8D3] text-base leading-7">{project.longDescription}</p>

          <hr className="border-white/10 my-7" />

          <h2 className="text-white font-bold text-lg mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="border border-[#4ADE80]/60 text-[#4ADE80] text-[13px] px-3.5 py-1.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <hr className="border-white/10 my-7" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[560px]">
            <div>
              <h3 className="text-white font-bold text-lg mb-2">Date</h3>
              <p className="text-[#C5C8D3] text-base">{project.date}</p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2">Project Type</h3>
              <p className="text-[#C5C8D3] text-base">{project.projectType}</p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2">Client</h3>
              <p className="text-[#C5C8D3] text-base">{project.client}</p>
            </div>
          </div>
        </div>

        {/* Actions: visit + prev/next */}
        <div ref={actionsRef} className="flex flex-wrap items-center justify-between gap-4 mt-6">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="visit-btn inline-flex items-center gap-2 bg-[#1C66C2] text-white text-sm font-semibold px-7 py-3.5 rounded-full"
          >
            Visit Project <FiLink2 />
          </a>
          <div className="flex items-center gap-3">
            <Link
              href={`/projects/${prev.id}`}
              className="hover-pill inline-flex items-center gap-2 bg-[#1C1E20] border border-white/[0.14] text-white text-sm font-medium px-6 py-3 rounded-full"
            >
              Previous <BsCaretLeft />
            </Link>
            <Link
              href={`/projects/${next.id}`}
              className="hover-pill inline-flex items-center gap-2 bg-[#1C1E20] border border-white/[0.14] text-white text-sm font-medium px-6 py-3 rounded-full"
            >
              Next <BsCaretRight />
            </Link>
          </div>
        </div>

        {/* Gallery — click any image to view it full-size */}
        <div ref={galleryRef} className="mt-10">
          <button
            type="button"
            onClick={() => setLightboxIndex(0)}
            aria-label={`View ${project.title} main screenshot full size`}
            className="gallery-image group relative block w-full rounded-[12px] overflow-hidden cursor-zoom-in"
          >
            <Image
              src={mainImage}
              alt={`${project.title} — main screenshot`}
              className="w-full h-[240px] md:h-[420px] object-cover"
              placeholder="blur"
              draggable={false}
            />
            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors" />
            <span className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/55 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <FiMaximize2 size={16} />
            </span>
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {secondaryImages.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightboxIndex(i + 1)}
                aria-label={`View ${project.title} screenshot ${i + 2} full size`}
                className="gallery-image group relative block w-full rounded-[12px] overflow-hidden cursor-zoom-in"
              >
                <Image
                  src={img}
                  alt={`${project.title} — screenshot ${i + 2}`}
                  className="w-full h-[200px] md:h-[220px] object-cover"
                  placeholder="blur"
                  draggable={false}
                />
                <span className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors" />
                <span className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/55 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiMaximize2 size={16} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>

      {lightboxIndex !== null && (
        <Lightbox
          images={project.gallery}
          index={lightboxIndex}
          title={project.title}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}

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
