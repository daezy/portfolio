"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Sphere from "./Sphere";

const HeroCarousel = () => {
  const text = (
    <>
      <Sphere />
      Software Engineer <Sphere />
      Daniel Ezet
    </>
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const textElement = textRef.current;
    const textWidth = textElement.offsetWidth;

    // Animate continuously from right to left
    gsap.to(textElement, {
      x: -textWidth,
      duration: 2000,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          // When the text goes completely off screen, wrap it back
          return `${parseFloat(x) % textWidth}px`;
        },
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="carousel absolute text-[#FFFFFF80] bottom-0 left-0 overflow-hidden w-full"
    >
      <div className="anim flex whitespace-nowrap">
        <p
          ref={textRef}
          className="inline-block pr-20 text-[40px] mb-5 font-bold"
        >
          {Array(500)
            .fill(text)
            .map((item, index) => (
              <span key={index}>{item} </span>
            ))}
        </p>
      </div>
    </div>
  );
};

export default HeroCarousel;
