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
    const listeners: Array<{
      el: Element;
      event: string;
      handler: EventListener;
    }> = [];

    const ctx = gsap.context(() => {
      // Initial state - GSAP owns all transforms to avoid inline style conflicts
      gsap.set([h1Ref.current, pRef.current, btnGroupRef.current], {
        opacity: 0,
        y: 50,
      });
      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 0.8,
      });

      // Create timeline for hero entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(h1Ref.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
      })
        .to(
          pRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.8",
        )
        .to(
          btnGroupRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.6",
        )
        .to(
          imageRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
          },
          "-=1",
        );

      // Floating animation for image
      gsap.to(imageRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Button hover animations
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
        listeners.push({
          el: button,
          event: "mouseenter",
          handler: handleEnter,
        });
        listeners.push({
          el: button,
          event: "mouseleave",
          handler: handleLeave,
        });
      });
    }, heroRef);

    return () => {
      ctx.revert();
      listeners.forEach(({ el, event, handler }) =>
        el.removeEventListener(event, handler),
      );
    };
  }, []);

  return (
    <header ref={heroRef} className="hero-image flex items-center relative">
      <div className="hero-content max-w-[1280px] mx-auto w-full py-32 flex items-center justify-between gap-20 px-5">
        <div className="">
          <h1 ref={h1Ref} className="font-bold text-[64px] leading-[63px] mb-5">
            Hey, I&apos;m Daniel <br /> Ezet Onoriode
          </h1>
          <p
            ref={pRef}
            className="text-[#C5C8D3] text-[20px] font-normal tracking-wide"
          >
            Software Engineer with 5+ years of experience. Turning <br />
            Ideas into Powerful Digital Experiences.
          </p>
          <div ref={btnGroupRef} className="btn-group flex gap-3 mt-5">
            <button className="bg-[#1C66C2] border border-[#FFFFFF33] text-white px-9 py-4 rounded-full hover:bg-[#1C66C2] transition text-[14px] font-semibold">
              View Resume
            </button>
            <button className="bg-transparent border border-[#1C66C2] text-[#1C66C2] px-9 py-4 rounded-full hover:bg-[#1C66C2] transition text-[14px] font-semibold">
              Contact Me
            </button>
          </div>
        </div>
        <div ref={imageRef} className="img-hero">
          <Image src={Me} alt="me" className="rounded-full" />
        </div>

        <HeroCarousel />
      </div>
    </header>
  );
};

export default Hero;
