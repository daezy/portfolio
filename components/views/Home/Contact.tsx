"use client";
import React, { useEffect, useRef } from "react";
import Container from "../../Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from(headingRef.current, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
        });

        gsap.from(subtitleRef.current, {
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        });

        gsap.from(formRef.current, {
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "power2.out",
        });

        gsap.from(btnRef.current, {
          scrollTrigger: {
            trigger: btnRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power2.out",
        });

        gsap.from(socialsRef.current, {
          scrollTrigger: {
            trigger: socialsRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power2.out",
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <Container>
        <h2
          ref={headingRef}
          className="font-display font-bold text-h2 text-white text-center mb-3"
        >
          Get in touch
        </h2>

        <p
          ref={subtitleRef}
          className="text-[#C5C8D3] text-lg text-center mb-7 max-w-[512px] mx-auto"
        >
          Have an exciting project in mind? Let&apos;s bring it to life. Feel
          free to reach out via email or connect with me on my social channels,
          i&apos;d love to hear what you&apos;re working on.
        </p>

        <form
          ref={formRef}
          className="w-full flex flex-col gap-5 max-w-[960px] mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-5">
            <label className="flex-1 flex flex-col gap-2 sr-only" htmlFor="contact-name">
              Full Name
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="Full Name"
              className="flex-1 bg-[#1E1E1E] text-[#C5C8D3] placeholder-[#6B7280] rounded-2xl px-6 py-4 text-base outline-none focus:ring-1 focus:ring-[#338FFF] transition"
            />
            <label className="flex-1 flex flex-col gap-2 sr-only" htmlFor="contact-email">
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-[#1E1E1E] text-[#C5C8D3] placeholder-[#6B7280] rounded-2xl px-6 py-4 text-base outline-none focus:ring-1 focus:ring-[#338FFF] transition"
            />
          </div>

          <label className="sr-only" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            placeholder="Write your message"
            rows={8}
            className="w-full bg-[#1E1E1E] text-[#C5C8D3] placeholder-[#6B7280] rounded-2xl px-6 py-4 text-base outline-none focus:ring-1 focus:ring-[#338FFF] transition resize-none"
          />
        </form>

        <button
          ref={btnRef}
          type="submit"
          className="mx-auto mt-8 flex items-center gap-2 bg-[#338FFF] hover:bg-[#1C66C2] text-white font-medium px-8 py-3.5 rounded-full transition-colors duration-300 text-base"
        >
          Send Message
          <FiArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>

        <div
          ref={socialsRef}
          className="mt-16 flex flex-col items-center gap-5 mx-auto"
        >
          <p className="text-[#C5C8D3] text-base">
            Here are my socials, can&apos;t wait to hear from you
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Daniel on X (Twitter)"
              className="text-[#C5C8D3] hover:text-white transition-colors duration-200"
            >
              <FaXTwitter className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Daniel on LinkedIn"
              className="text-[#C5C8D3] hover:text-white transition-colors duration-200"
            >
              <FaLinkedinIn className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/daezy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Daniel on GitHub"
              className="text-[#C5C8D3] hover:text-white transition-colors duration-200"
            >
              <FaGithub className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="mailto:ezetdaniel@gmail.com"
              aria-label="Email Daniel"
              className="text-[#C5C8D3] hover:text-white transition-colors duration-200"
            >
              <FiMail className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
