"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "../../Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  responsibilities: string[];
}
const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Development Manager & Solana Developer",
    company: "Alpha Developments",
    period: "Oct 2023 - Present",
    location: "Hybrid (On-site / Remote)",
    responsibilities: [
      "Leading architecture and development of Web3 products including staking protocols, miner systems, and AI-powered DApps",
      "Designed and deployed Solana smart contracts using Anchor and native Rust",
      "Worked on EVM-based products, primarily developing and integrating DApp frontends with smart contracts",
      "Built multi-user trading bots with subscription logic, automated fee systems, and real-time transaction execution",
      "Architected scalable backend services and implemented CI/CD pipelines with Docker",
      "Integrated third-party services including Stripe for subscription-based platforms",
      "Oversaw production deployments and app store compliance processes",
    ],
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Freelance",
    period: "Jul 2021 - Sep 2023",
    location: "Remote",
    responsibilities: [
      "Built full-stack web applications using MongoDB, Express.js, React, and Node.js",
      "Developed authentication systems, REST APIs, and dashboards",
      "Designed responsive UI components with TailwindCSS and modern React patterns",
      "Deployed and maintained applications on cloud infrastructure",
    ],
  },
  {
    id: 3,
    title: "Junior Full-Stack Developer",
    company: "Dives Investments",
    period: "Jan 2021 - Jun 2021",
    location: "Remote",
    responsibilities: [
      "Developed and maintained the company's investment web platform using the MERN stack",
      "Built user onboarding, coupons management, investment tracking, and ROI calculation features",
      "Created internal admin tools for managing users and transactions",
      "Fixed production issues and supported ongoing feature updates",
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const cardRefs = [card1Ref, card2Ref, card3Ref];
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

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

        const cards = [card1Ref.current, card2Ref.current, card3Ref.current];

        cards.forEach((card, index) => {
          if (!card) return;

          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power2.out",
          });

          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -6,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
              duration: 0.3,
              ease: "power2.out",
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              boxShadow: "none",
              duration: 0.3,
              ease: "power2.out",
            });
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
    <div ref={sectionRef}>
      <Container>
        <h2 ref={h2Ref} className="font-display font-bold text-h2 text-white mb-3">
          Experience
        </h2>
        <p ref={pRef} className="text-[#C5C8D3] text-lg mb-7">
          A look at where I&apos;ve worked, what I&apos;ve built, and how
          I&apos;ve grown along the way.
        </p>

        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              ref={cardRefs[index]}
              className="bg-[#1a1a1a] rounded-3xl overflow-hidden transition-all duration-300"
            >
              <button
                type="button"
                onClick={() => toggleExpand(exp.id)}
                className="w-full px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-[#222] transition-colors"
                aria-expanded={expandedId === exp.id}
              >
                <div className="flex-1">
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-medium mb-2">
                    {exp.title} —{" "}
                    <span className="text-[#338FFF]">{exp.company}</span>
                  </h3>
                </div>
                <svg
                  className={`w-6 h-6 text-white transition-transform duration-300 ${
                    expandedId === exp.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedId === exp.id
                    ? "max-h-[600px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 sm:px-8 pb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-6 text-[#C5C8D3] italic text-sm">
                    <span>{exp.period}</span>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-[#4A9EFF]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, i) => (
                      <li
                        key={i}
                        className="text-[#C5C8D3] flex items-start gap-3 text-base"
                      >
                        <span className="text-gray-500 mt-1" aria-hidden="true">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Experience;
