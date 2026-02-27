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

      // Card animations with stagger
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
        scale: 0.8,
        y: 100,
        rotation: -5,
        stagger: 0.15,
        duration: 1,
        ease: "back.out(1.4)",
      });

      // Image parallax and reveal animations
      const images = sectionRef.current?.querySelectorAll("img");
      images?.forEach((img, index) => {
        // Reveal animation
        gsap.from(img, {
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          scale: 0.5,
          rotation: index % 2 === 0 ? -10 : 10,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
          delay: 0.3,
        });

        // Parallax effect
        gsap.to(img, {
          scrollTrigger: {
            trigger: img.closest("div"),
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
          y: -30,
          ease: "none",
        });
      });

      // Card hover animations
      cards.forEach((card) => {
        if (!card) return;

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.02,
            y: -10,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
            duration: 0.4,
            ease: "power2.out",
          });

          // Animate card content
          const heading = card.querySelector("h3");
          const text = card.querySelector("p");
          const img = card.querySelector("img");

          gsap.to(heading, {
            x: 10,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(text, {
            x: 5,
            duration: 0.3,
            ease: "power2.out",
          });

          if (img) {
            gsap.to(img, {
              scale: 1.1,
              rotation: 5,
              duration: 0.4,
              ease: "power2.out",
            });
          }
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
            duration: 0.4,
            ease: "power2.out",
          });

          const heading = card.querySelector("h3");
          const text = card.querySelector("p");
          const img = card.querySelector("img");

          gsap.to([heading, text], {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });

          if (img) {
            gsap.to(img, {
              scale: 1,
              rotation: 0,
              duration: 0.4,
              ease: "power2.out",
            });
          }
        });
      });

      // Continuous floating animation for images
      images?.forEach((img, index) => {
        gsap.to(img, {
          y: "+=15",
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      });

      // Animate "Other skills include" heading
      gsap.from(otherSkillsHeadingRef.current, {
        scrollTrigger: {
          trigger: otherSkillsHeadingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      // Animate small skill cards
      const smallCards =
        otherSkillsRef.current?.querySelectorAll(".small-card");
      if (smallCards) {
        gsap.from(smallCards, {
          scrollTrigger: {
            trigger: otherSkillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          scale: 0.9,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(1.7)",
        });

        // Hover animations for small cards
        smallCards.forEach((card) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -5,
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(28, 102, 194, 0.3)",
              duration: 0.3,
              ease: "power2.out",
            });

            const star = card.querySelector("img");
            if (star) {
              gsap.to(star, {
                rotation: 360,
                scale: 1.2,
                duration: 0.5,
                ease: "back.out(1.7)",
              });
            }
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
              duration: 0.3,
              ease: "power2.out",
            });

            const star = card.querySelector("img");
            if (star) {
              gsap.to(star, {
                rotation: 0,
                scale: 1,
                duration: 0.5,
                ease: "power2.out",
              });
            }
          });
        });

        // Continuous subtle rotation for stars
        const stars =
          otherSkillsRef.current?.querySelectorAll(".small-card img");
        stars?.forEach((star, index) => {
          gsap.to(star, {
            rotation: 10,
            duration: 2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <Container>
        <h2 ref={h2Ref} className="text-white font-bold text-[48px] mb-3">
          Skills
        </h2>
        <p ref={pRef}>
          I work across the full stack, with a focus on clean code, performance,
          and adaptability to evolving project needs.
        </p>

        <div className="grid grid-cols-8 gap-6 mt-8 mb-5">
          {/* Front-End Development */}
          <div
            ref={card1Ref}
            className="bg-[#131415] rounded-[24px] p-10 flex flex-col justify-between min-h-[400px] col-span-4 row-span-2 gap-[20px] relative overflow-hidden"
          >
            <div>
              <h3 className="text-white font-bold text-[32px] mb-4 leading-8">
                Front-End Development
              </h3>
              <p className="text-[#C5C8D3] text-[15px] leading-6">
                I design and develop user interfaces for websites, web
                applications, mobile applications, DApps and utilities focusing
                on creating responsive, visually appealing, and user-friendly,
                seamless, interactive frontends that integrate effectively with
                secure backend systems.
              </p>
            </div>
            <div className="mt-6 absolute bottom-0 left-0">
              <Image
                src={FrontendImage}
                alt="Front-End Development"
                width={430}
              />
            </div>
          </div>

          {/* Backend Development */}
          <div
            ref={card2Ref}
            className="bg-[#131415] rounded-[24px] p-8 flex flex-col col-span-4 row-span-1 relative overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-white font-bold text-[32px] mb-4 leading-8">
                    Backend Development
                  </h3>
                  <p className="text-[#C5C8D3] text-[15px] leading-6">
                    I build and manage server-side applications, ensuring they
                    are efficient, secure, and scalable for handling data and
                    user requests.
                  </p>
                </div>
                <div className="absolute right-10 -top-2">
                  <Image
                    src={BackendImage}
                    alt="Backend Development"
                    width={500}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Web3 Development */}
          <div
            ref={card3Ref}
            className="bg-[#131415] rounded-[24px] p-8 flex flex-col col-span-4 row-span-1 relative overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  <Image
                    src={Web3Image}
                    alt="Web3 Development"
                    width={270}
                    className="absolute -top-7 left-0"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[32px] mb-4 leading-8">
                    Web3 Development
                  </h3>
                  <p className="text-[#C5C8D3] text-[15px] leading-6">
                    I develop decentralized applications (dApps) and web3
                    utilities on blockchain platforms, primarily using EVM-based
                    chains and Solana, to create secure, scalable, and
                    user-friendly solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Development */}
          <div
            ref={card4Ref}
            className="bg-[#131415] rounded-[24px] p-8 flex flex-col col-span-8 row-span-1 relative overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <div className="grid grid-cols-2 gap-4 items-center justify-center">
                <div className="">
                  <div className="h-[200px]">
                    <Image
                      src={MobileImage}
                      alt="Mobile Development"
                      width={500}
                      className="absolute bottom-0 left-8"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-[32px] mb-4 leading-8">
                    Mobile Development
                  </h3>
                  <p className="text-[#C5C8D3] text-[15px] leading-6">
                    I develop mobile apps that are fast, intuitive, and
                    cross-platform ready. Whether it&apos;ss building with React
                    Native or optimizing for iOS and Android, I focus on
                    performance, clean architecture, and delivering a seamless
                    user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={otherSkillsRef} className="text-center">
          <h5 ref={otherSkillsHeadingRef} className="mb-6 text-xl">
            Other skills include
          </h5>
          <div className="flex items-center justify-center gap-6">
            <div className="small-card bg-[#131415] p-4 flex gap-3 items-center rounded-[8px]">
              <Image src={StarImage} alt="Star" width={24} />
              <p>Smart contracts (for Solana using Rust)</p>
            </div>
            <div className="small-card bg-[#131415] p-4 flex gap-3 items-center rounded-[8px]">
              <Image src={StarImage} alt="Star" width={24} />
              <p>AI Powered Platforms</p>
            </div>
            <div className="small-card bg-[#131415] p-4 flex gap-3 items-center rounded-[8px]">
              <Image src={StarImage} alt="Star" width={24} />
              <p>Automated bots (on Telegram and X)</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
