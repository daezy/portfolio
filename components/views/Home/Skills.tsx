"use client";
import Container from "@/components/Container";
import React, { useEffect, useRef } from "react";
import BackendImage from "@/public/images/skills/backend.png";
import FrontendImage from "@/public/images/skills/frontend.png";
import MobileImage from "@/public/images/skills/mobile.png";
import Web3Image from "@/public/images/skills/web3.png";
import StarImage from "@/public/images/skills/star.png";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const otherSkillsRef = useRef<HTMLDivElement>(null);
  const otherSkillsHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const listeners: Array<{
        el: Element;
        event: string;
        handler: EventListener;
      }> = [];

      const ctx = gsap.context(() => {
        gsap.from(h2Ref.current, {
          scrollTrigger: {
            trigger: h2Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: -24,
          duration: 0.55,
          ease: "power4.out",
        });

        gsap.from(pRef.current, {
          scrollTrigger: {
            trigger: pRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 16,
          duration: 0.5,
          ease: "power3.out",
        });

        // Cards enter from their grid direction
        gsap.from(card1Ref.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: -24,
          duration: 0.55,
          ease: "power4.out",
        });

        gsap.from(card2Ref.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: 24,
          duration: 0.55,
          ease: "power4.out",
          delay: 0.08,
        });

        gsap.from(card3Ref.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: 24,
          duration: 0.55,
          ease: "power4.out",
          delay: 0.16,
        });

        gsap.from(card4Ref.current, {
          scrollTrigger: {
            trigger: card4Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 24,
          duration: 0.55,
          ease: "power4.out",
        });

        // Image reveals — desktop only, since images are hidden on mobile
        const images = sectionRef.current?.querySelectorAll(".skill-card-image");
        images?.forEach((img) => {
          gsap.from(img, {
            scrollTrigger: {
              trigger: img.closest(".skill-card"),
              start: "top 80%",
              toggleActions: "play none none none",
            },
            opacity: 0,
            scale: 0.96,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.15,
          });

          gsap.to(img, {
            scrollTrigger: {
              trigger: img.closest(".skill-card"),
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
            y: -20,
            ease: "none",
          });
        });

        // Card hover — lift and shadow only
        const cards = [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
        ];

        cards.forEach((card) => {
          if (!card) return;
          const img = card.querySelector(".skill-card-image");

          const handleEnter = () => {
            gsap.to(card, {
              y: -8,
              boxShadow: "0 24px 48px rgba(0, 0, 0, 0.35)",
              duration: 0.35,
              ease: "power2.out",
            });
            if (img)
              gsap.to(img, { scale: 1.04, duration: 0.4, ease: "power2.out" });
          };

          const handleLeave = () => {
            gsap.to(card, {
              y: 0,
              boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
              duration: 0.35,
              ease: "power2.out",
            });
            if (img)
              gsap.to(img, { scale: 1, duration: 0.4, ease: "power2.out" });
          };

          card.addEventListener("mouseenter", handleEnter);
          card.addEventListener("mouseleave", handleLeave);
          listeners.push({ el: card, event: "mouseenter", handler: handleEnter });
          listeners.push({ el: card, event: "mouseleave", handler: handleLeave });
        });

        gsap.from(otherSkillsHeadingRef.current, {
          scrollTrigger: {
            trigger: otherSkillsHeadingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 16,
          duration: 0.5,
          ease: "power3.out",
        });

        const smallCards = otherSkillsRef.current?.querySelectorAll(".small-card");
        if (smallCards) {
          gsap.from(smallCards, {
            scrollTrigger: {
              trigger: otherSkillsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            opacity: 0,
            y: 20,
            stagger: 0.08,
            duration: 0.5,
            ease: "power4.out",
          });

          smallCards.forEach((card) => {
            const star = card.querySelector("img");

            const handleEnter = () => {
              gsap.to(card, {
                y: -4,
                scale: 1.03,
                boxShadow: "0 10px 28px rgba(28, 102, 194, 0.25)",
                duration: 0.3,
                ease: "power2.out",
              });
              if (star)
                gsap.to(star, { rotation: 45, duration: 0.4, ease: "power3.out" });
            };

            const handleLeave = () => {
              gsap.to(card, {
                y: 0,
                scale: 1,
                boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
                duration: 0.3,
                ease: "power2.out",
              });
              if (star)
                gsap.to(star, { rotation: 0, duration: 0.4, ease: "power3.out" });
            };

            card.addEventListener("mouseenter", handleEnter);
            card.addEventListener("mouseleave", handleLeave);
            listeners.push({ el: card, event: "mouseenter", handler: handleEnter });
            listeners.push({ el: card, event: "mouseleave", handler: handleLeave });
          });

          const stars = otherSkillsRef.current?.querySelectorAll(".small-card img");
          stars?.forEach((star, index) => {
            gsap.to(star, {
              rotation: 8,
              duration: 2.5 + index * 0.4,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: index * 0.3,
            });
          });
        }
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
    <div ref={sectionRef} id="skills">
      <Container>
        <h2 ref={h2Ref} className="font-display font-bold text-h2 text-white mb-3">
          Skills
        </h2>
        <p ref={pRef}>
          I work across the full stack, with a focus on clean code, performance,
          and adaptability to evolving project needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-6 mt-8 mb-5">

          {/* Front-End Development — left half on desktop, full width on mobile/tablet */}
          <div
            ref={card1Ref}
            className="skill-card bg-[#131415] rounded-[24px] p-6 lg:p-10 flex flex-col justify-between lg:min-h-[400px] col-span-1 md:col-span-2 lg:col-span-4 lg:row-span-2 gap-5 relative overflow-hidden"
          >
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-[32px] text-white mb-4 leading-tight">
                Front-End Development
              </h3>
              <p className="text-[#C5C8D3] text-base leading-7">
                I design and develop user interfaces for websites, web
                applications, mobile applications, DApps and utilities focusing
                on creating responsive, visually appealing, and user-friendly,
                seamless, interactive frontends that integrate effectively with
                secure backend systems.
              </p>
            </div>
            <div className="hidden lg:block absolute bottom-0 left-0 skill-card-image">
              <Image src={FrontendImage} alt="Front-End Development" width={430} draggable={false} />
            </div>
          </div>

          {/* Backend Development — right half on desktop */}
          <div
            ref={card2Ref}
            className="skill-card bg-[#131415] rounded-[24px] p-6 lg:p-8 flex flex-col col-span-1 lg:col-span-4 lg:row-span-1 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-[32px] text-white mb-4 leading-tight">
                  Backend Development
                </h3>
                <p className="text-[#C5C8D3] text-base leading-7">
                  I build and manage server-side applications, ensuring they
                  are efficient, secure, and scalable for handling data and
                  user requests.
                </p>
              </div>
              <div className="hidden lg:flex items-center absolute inset-y-0 right-10 skill-card-image">
                <Image src={BackendImage} alt="Backend Development" width={500} draggable={false} />
              </div>
            </div>
          </div>

          {/* Web3 Development — right half on desktop */}
          <div
            ref={card3Ref}
            className="skill-card bg-[#131415] rounded-[24px] p-6 lg:p-8 flex flex-col col-span-1 lg:col-span-4 lg:row-span-1 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="hidden lg:block">
                <Image
                  src={Web3Image}
                  alt="Web3 Development"
                  width={270}
                  className="skill-card-image absolute inset-y-0 my-auto left-0"
                  draggable={false}
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-[32px] text-white mb-4 leading-tight">
                  Web3 Development
                </h3>
                <p className="text-[#C5C8D3] text-base leading-7">
                  I develop decentralized applications (dApps) and web3
                  utilities on blockchain platforms, primarily using EVM-based
                  chains and Solana, to create secure, scalable, and
                  user-friendly solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Development — full width on desktop, full width on mobile/tablet */}
          <div
            ref={card4Ref}
            className="skill-card bg-[#131415] rounded-[24px] p-6 lg:p-8 flex flex-col col-span-1 md:col-span-2 lg:col-span-8 lg:row-span-1 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:items-center">
              <div className="hidden lg:block">
                <div className="h-[200px]">
                  <Image
                    src={MobileImage}
                    alt="Mobile Development"
                    width={500}
                    className="skill-card-image absolute bottom-0 left-8"
                    draggable={false}
                  />
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-[32px] text-white mb-4 leading-tight">
                  Mobile Development
                </h3>
                <p className="text-[#C5C8D3] text-base leading-7">
                  I develop mobile apps that are fast, intuitive, and
                  cross-platform ready. Whether it&apos;s building with React
                  Native or optimizing for iOS and Android, I focus on
                  performance, clean architecture, and delivering a seamless
                  user experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div ref={otherSkillsRef} className="text-center">
          <h5 ref={otherSkillsHeadingRef} className="mb-6 text-xl">
            Other skills include
          </h5>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <div className="small-card bg-[#131415] p-4 flex gap-3 items-center rounded-[8px]">
              <Image src={StarImage} alt="" aria-hidden="true" width={24} draggable={false} />
              <p>Smart contracts (for Solana using Rust)</p>
            </div>
            <div className="small-card bg-[#131415] p-4 flex gap-3 items-center rounded-[8px]">
              <Image src={StarImage} alt="" aria-hidden="true" width={24} draggable={false} />
              <p>AI Powered Platforms</p>
            </div>
            <div className="small-card bg-[#131415] p-4 flex gap-3 items-center rounded-[8px]">
              <Image src={StarImage} alt="" aria-hidden="true" width={24} draggable={false} />
              <p>Automated bots (on Telegram and X)</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
