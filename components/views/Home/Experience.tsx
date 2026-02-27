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
      "Developed and maintained the company’s investment web platform using the MERN stack",
      "Built user onboarding, coupons management, investment tracking, and ROI calculation features",
      "Created internal admin tools for managing users and transactions",
      "Fixed production issues and supported ongoing feature updates",
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div ref={sectionRef}>
      <Container>
        <h2 className="text-white font-bold text-[48px] mb-3">Experience</h2>
        <p className="text-gray-400 text-lg mb-12">
          A look at where I&apos;ve worked, what I&apos;ve built, and how
          I&apos;ve grown along the way.
        </p>

        <div className="space-y-6">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleExpand(exp.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#222] transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-white text-2xl font-medium mb-2">
                    {exp.title} -{" "}
                    <span className="text-[#4A9EFF]">{exp.company}</span>
                  </h3>
                </div>
                <svg
                  className={`w-6 h-6 text-white transition-transform duration-300 ${
                    expandedId === exp.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="flex items-center gap-4 mb-6 text-gray-400 italic">
                    <span>{exp.period}</span>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-[#4A9EFF]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
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
                    {exp.responsibilities.map((responsibility, index) => (
                      <li
                        key={index}
                        className="text-gray-300 flex items-start gap-3"
                      >
                        <span className="text-gray-500 mt-1">•</span>
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
