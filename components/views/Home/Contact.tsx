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
  }, []);

  return (
    <div ref={sectionRef}>
      <Container>
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-white font-bold text-[48px] text-center mb-3"
        >
          Get in touch
        </h2>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-[#C5C8D3] text-lg text-center mb-7 max-w-[512px] mx-auto"
        >
          Have an exciting project in mind? Let&apos;s bring it to life. Feel
          free to reach out via email or connect with me on my social channels,
          i&apos;d love to hear what you&apos;re working on.
        </p>

        {/* Form */}
        <form
          ref={formRef}
          className="w-full flex flex-col gap-5 max-w-[960px] mx-auto"
        >
          {/* Name + Email row */}
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Full Name"
              className="flex-1 bg-[#1E1E1E] text-[#C5C8D3] placeholder-[#6B7280] rounded-2xl px-6 py-4 text-[15px] outline-none focus:ring-1 focus:ring-[#338FFF] transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-[#1E1E1E] text-[#C5C8D3] placeholder-[#6B7280] rounded-2xl px-6 py-4 text-[15px] outline-none focus:ring-1 focus:ring-[#338FFF] transition"
            />
          </div>

          {/* Message textarea */}
          <textarea
            placeholder="Write your message"
            rows={8}
            className="w-full bg-[#1E1E1E] text-[#C5C8D3] placeholder-[#6B7280] rounded-2xl px-6 py-4 text-[15px] outline-none focus:ring-1 focus:ring-[#338FFF] transition resize-none"
          />
        </form>

        {/* Send button */}
        <button
          ref={btnRef}
          className="mx-auto mt-8 flex items-center gap-2 bg-[#338FFF] hover:bg-[#1C66C2] text-white font-medium px-8 py-3.5 rounded-full transition-colors duration-300 text-[15px]"
        >
          Send Message
          <FiArrowRight className="w-4 h-4" />
        </button>

        {/* Socials */}
        <div
          ref={socialsRef}
          className="mt-16 flex flex-col items-center gap-5 mx-auto"
        >
          <p className="text-[#C5C8D3] text-[15px]">
            Here are my socials, can&apos;t wait to hear from you
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5C8D3] hover:text-white transition-colors duration-200"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5C8D3] hover:text-white transition-colors duration-200"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/daezy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5C8D3] hover:text-white transition-colors duration-200"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="mailto:your@email.com"
              className="text-[#C5C8D3] hover:text-white transition-colors duration-200"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
