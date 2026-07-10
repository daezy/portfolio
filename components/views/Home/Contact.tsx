"use client";
import React, { useEffect, useRef } from "react";
import Container from "../../Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { useForm, ValidationError } from "@formspree/react";

gsap.registerPlugin(ScrollTrigger);

// Formspree form IDs are public by design — they identify the endpoint, not a secret.
const FORMSPREE_FORM_ID = "mykqreap";

const fieldClasses =
  "flex-1 bg-[#1E1E1E] text-[#C5C8D3] placeholder-[#6B7280] rounded-2xl px-6 py-4 text-base outline-none focus:ring-1 focus:ring-[#338FFF] transition";

const errorClasses = "text-[#F87171] text-sm mt-1";

const Contact = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);
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
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.from(subtitleRef.current, {
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 18,
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.from(formRef.current, {
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 20,
          duration: 0.55,
          ease: "power2.out",
        });

        gsap.from(btnRef.current, {
          scrollTrigger: {
            trigger: btnRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 14,
          duration: 0.45,
          ease: "power2.out",
        });

        gsap.from(socialsRef.current, {
          scrollTrigger: {
            trigger: socialsRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 14,
          duration: 0.45,
          ease: "power2.out",
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={sectionRef} id="contact">
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

        {state.succeeded ? (
          <div
            role="status"
            className="w-full max-w-[960px] mx-auto bg-[#1E1E1E] rounded-2xl px-6 py-10 text-center"
          >
            <p className="text-white text-lg font-medium mb-2">
              Thanks for reaching out!
            </p>
            <p className="text-[#C5C8D3] text-base">
              Your message is on its way — I&apos;ll get back to you shortly.
            </p>
          </div>
        ) : (
          <>
            <form
              ref={formRef}
              id="contact-form"
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-5 max-w-[960px] mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1">
                  <label className="sr-only" htmlFor="contact-name">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Full Name"
                    className={`w-full ${fieldClasses}`}
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className={errorClasses}
                  />
                </div>
                <div className="flex-1">
                  <label className="sr-only" htmlFor="contact-email">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Email Address"
                    className={`w-full ${fieldClasses}`}
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className={errorClasses}
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  placeholder="Write your message"
                  rows={8}
                  className="w-full bg-[#1E1E1E] text-[#C5C8D3] placeholder-[#6B7280] rounded-2xl px-6 py-4 text-base outline-none focus:ring-1 focus:ring-[#338FFF] transition resize-none"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className={errorClasses}
                />
              </div>

              <ValidationError errors={state.errors} className={errorClasses} />
            </form>

            <button
              ref={btnRef}
              type="submit"
              form="contact-form"
              disabled={state.submitting}
              className="mx-auto mt-8 flex items-center gap-2 bg-[#338FFF] hover:bg-[#1C66C2] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-8 py-3.5 rounded-full transition-colors duration-300 text-base"
            >
              {state.submitting ? "Sending..." : "Send Message"}
              <FiArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </>
        )}

        <div
          ref={socialsRef}
          className="mt-16 flex flex-col items-center gap-5 mx-auto"
        >
          <p className="text-[#C5C8D3] text-base">
            Here are my socials, can&apos;t wait to hear from you
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://x.com/DanielEzet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Daniel on X (Twitter)"
              className="text-[#C5C8D3] hover:text-white transition-colors duration-200"
            >
              <FaXTwitter className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-onoriode-ezet-48324a303/"
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
