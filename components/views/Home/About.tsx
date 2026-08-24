"use client";
import React, { useEffect, useRef } from "react";
import Container from "../../Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const p3Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
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
          x: -24,
          duration: 0.55,
          ease: "power4.out",
        });

        const body = [
          statusRef.current,
          p1Ref.current,
          p2Ref.current,
          p3Ref.current,
        ];

        // Single trigger on the section so stagger works as designed
        gsap.from(body, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 20,
          stagger: 0.12,
          duration: 0.55,
          ease: "power3.out",
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={sectionRef} id="about">
      <Container>
        <h2 ref={h2Ref} className="font-display font-bold text-h2 text-white mb-3">
          About Me
        </h2>

        {/* Availability and timezone up front — the two things a recruiter needs
            before they can decide which role you're even eligible for. */}
        <div ref={statusRef} className="flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#4ADE80]/30 bg-[#4ADE80]/[0.07] px-4 py-2 text-[#4ADE80] font-medium">
            <span
              className="w-2 h-2 rounded-full bg-[#4ADE80]"
              aria-hidden="true"
            />
            Open to Senior &amp; Founding Engineer roles
          </span>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-[#131415] px-4 py-2 text-[#C5C8D3]">
            Remote &middot; Lagos, Nigeria (WAT / UTC+1)
          </span>
        </div>

        <p ref={p1Ref}>
          I&apos;m a software engineer with 5+ years building production systems
          end to end. I&apos;m currently one of five founding engineers at Veilo,
          a privacy protocol on Solana, where I co-designed the Rust and Anchor
          programs and the off-chain services behind shielded balances,
          username-based private transfers, and in-wallet swaps — with
          zero-knowledge proofs generated on the user&apos;s device and settled
          through a relayer network.
        </p>
        <p ref={p2Ref}>
          In parallel I lead a five-developer team at Alpha Developments, owning
          architecture, sprint planning, and code review across several Web3
          product lines — a real-time trading system, a live-streaming platform,
          and an AI agent marketplace with 2,500+ registered users. Most of that
          work sits where a hard backend problem meets an interface someone
          actually has to use: NestJS and Node services, PostgreSQL, MongoDB and
          Redis, queue-backed pipelines and WebSocket infrastructure, with
          Next.js and React Native clients on top.
        </p>
        <p ref={p3Ref}>
          I&apos;d rather own something from design through production than hand
          it off at the API boundary — the schema, the deploy pipeline, the
          monitoring, and the bug report that lands three weeks later. I&apos;ve
          shipped to web, iOS, Android, and browser extensions, and I&apos;m
          equally at home writing a Solana program in Rust or cutting a release
          for the App Store.
        </p>
      </Container>
    </div>
  );
};

export default About;
