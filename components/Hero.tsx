"use client";
import React, { useEffect, useRef } from "react";
import Me from "@/public/images/me.png";
import Image from "next/image";
import HeroCarousel from "./HeroCarousel";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const btnGroupRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const listeners: Array<{
        el: Element;
        event: string;
        handler: EventListener;
      }> = [];

      const ctx = gsap.context(() => {
        gsap.set([h1Ref.current, pRef.current, btnGroupRef.current], {
          opacity: 0,
          y: 50,
        });
        gsap.set(imageRef.current, {
          opacity: 0,
          scale: 0.8,
        });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(h1Ref.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
        })
          .to(
            pRef.current,
            { opacity: 1, y: 0, duration: 1 },
            "-=0.8",
          )
          .to(
            btnGroupRef.current,
            { opacity: 1, y: 0, duration: 0.8 },
            "-=0.6",
          )
          .to(
            imageRef.current,
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power4.out",
            },
            "-=1",
          );

        gsap.to(imageRef.current, {
          y: -20,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });

        const buttons = btnGroupRef.current?.querySelectorAll("button");
        buttons?.forEach((button) => {
          const handleEnter = () => {
            gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
          };
          const handleLeave = () => {
            gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
          };
          button.addEventListener("mouseenter", handleEnter);
          button.addEventListener("mouseleave", handleLeave);
          listeners.push({ el: button, event: "mouseenter", handler: handleEnter });
          listeners.push({ el: button, event: "mouseleave", handler: handleLeave });
        });
      }, heroRef);

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
    <header ref={heroRef} className="hero-image flex items-center relative">
      <div className="hero-content max-w-[1280px] mx-auto w-full pt-20 pb-16 lg:py-44 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-20 px-5 md:px-8">
        <div className="text-center lg:text-left order-last lg:order-first">
          <h1
            ref={h1Ref}
            className="font-display font-extrabold text-hero mb-5"
          >
            Hey, I&apos;m Daniel
            <br className="hidden sm:block" />
            {" "}Ezet Onoriode
          </h1>
          <p
            ref={pRef}
            className="text-[#C5C8D3] text-xl font-normal tracking-wide max-w-[500px] mx-auto lg:mx-0"
          >
            Software Engineer with 5+ years of experience. Turning ideas into powerful digital experiences.
          </p>
          <div ref={btnGroupRef} className="btn-group flex gap-3 mt-5 justify-center lg:justify-start">
            <button
              type="button"
              className="bg-[#1C66C2] border border-[#FFFFFF33] text-white px-9 py-4 rounded-full hover:bg-[#1C66C2] transition text-sm font-semibold"
            >
              View Resume
            </button>
            <button
              type="button"
              className="bg-transparent border border-[#1C66C2] text-[#1C66C2] px-9 py-4 rounded-full hover:bg-[#1C66C2] hover:text-white transition text-sm font-semibold"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div ref={imageRef} className="img-hero w-[180px] sm:w-[220px] lg:w-[381px] flex-shrink-0 order-first lg:order-last">
          <Image src={Me} alt="Daniel Ezet Onoriode" className="rounded-full w-full h-auto" />
        </div>

        <HeroCarousel />
      </div>
    </header>
  );
};

export default Hero;
