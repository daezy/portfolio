"use client";
import React, { useEffect, useRef } from "react";
import Container from "../../Container";
import Turbo1 from "@/public/images/projects/turbo1.png";
import Koly1 from "@/public/images/projects/koly1.png";
import Vaultspin1 from "@/public/images/projects/vaultspin1.png";
import Areaa1 from "@/public/images/projects/areaa1.png";
import Image from "next/image";
import Link from "next/link";
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
          <div
            ref={card1Ref}
            className="bg-[#131415] rounded-[24px] p-8 flex flex-col justify-between gap-[20px] relative overflow-hidden"
          >
            <div className="project-image rounded-[24px] mb-3 overflow-hidden h-[300px] md:h-[340px]">
              <Image src={Turbo1} alt="Turbo live streaming platform" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-white font-bold text-h3 mb-4">
                Turbo – Live Streaming Platform
              </h3>
              <p className="text-[#C5C8D3] text-base leading-7">
                A live streaming platform built for creators and viewers,
                featuring real-time video streaming, live chat, creator
                channels, subscriptions, and content discovery.
              </p>
              <Link href="/projects/turbo" className="inline-block">
                <button
                  type="button"
                  className="bg-[#27292B] text-white px-8 mt-4 py-3 rounded-full text-sm font-semibold flex items-center gap-2"
                >
                  View Project <BsCaretRight />
                </button>
              </Link>
            </div>
          </div>

          <div
            ref={card2Ref}
            className="bg-[#131415] rounded-[24px] p-8 flex flex-col justify-between gap-[20px] relative overflow-hidden"
          >
            <div className="project-image rounded-[24px] mb-3 overflow-hidden h-[300px] md:h-[340px]">
              <Image src={Vaultspin1} alt="VaultSpin pack opening and gaming platform" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-white font-bold text-h3 mb-4">
                VaultSpin – Pack Opening & Gaming Platform
              </h3>
              <p className="text-[#C5C8D3] text-base leading-7">
                A gamified pack-opening platform where users can open packs,
                receive items based on odds, forge items, and interact with
                real-time gaming mechanics.
              </p>
              <Link href="/projects/vaultspin" className="inline-block">
                <button
                  type="button"
                  className="bg-[#27292B] text-white px-8 mt-4 py-3 rounded-full text-sm font-semibold flex items-center gap-2"
                >
                  View Project <BsCaretRight />
                </button>
              </Link>
            </div>
          </div>

          <div
            ref={card3Ref}
            className="bg-[#131415] rounded-[24px] p-8 flex flex-col justify-between gap-[20px] relative overflow-hidden"
          >
            <div className="project-image rounded-[24px] mb-3 overflow-hidden h-[300px] md:h-[340px]">
              <Image src={Areaa1} alt="AREAA campus commerce and discovery platform" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-white font-bold text-h3 mb-4">
                AREAA – Campus Commerce & Discovery Platform
              </h3>
              <p className="text-[#C5C8D3] text-base leading-7">
                A campus-focused marketplace that connects students with
                vendors, service providers, and delivery riders — product
                discovery, service listings, orders, payments, and delivery.
              </p>
              <Link href="/projects/areaa" className="inline-block">
                <button
                  type="button"
                  className="bg-[#27292B] text-white px-8 mt-4 py-3 rounded-full text-sm font-semibold flex items-center gap-2"
                >
                  View Project <BsCaretRight />
                </button>
              </Link>
            </div>
          </div>

          <div
            ref={card4Ref}
            className="bg-[#131415] rounded-[24px] p-8 flex flex-col justify-between gap-[20px] relative overflow-hidden"
          >
            <div className="project-image rounded-[24px] mb-3 overflow-hidden h-[300px] md:h-[340px]">
              <Image src={Koly1} alt="KOLy Market crypto KOL prediction markets" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-white font-bold text-h3 mb-4">
                KOLy Market – Crypto KOL Prediction Markets
              </h3>
              <p className="text-[#C5C8D3] text-base leading-7">
                A Solana-based prediction markets platform where users can
                forecast whether crypto influencers will hit specific profit
                targets using real KOL performance data.
              </p>
              <Link href="/projects/koly-market" className="inline-block">
                <button
                  type="button"
                  className="bg-[#27292B] text-white px-8 mt-4 py-3 rounded-full text-sm font-semibold flex items-center gap-2"
                >
                  View Project <BsCaretRight />
                </button>
              </Link>
            </div>
          </div>
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
