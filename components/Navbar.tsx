"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="navbar fixed bg-[#17181A4D] border border-[#596573] max-w-[800px] w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-full top-5 left-1/2 transform -translate-x-1/2 rounded-full flex gap-7 items-center justify-between px-5 py-3 backdrop-blur-sm z-50">
        <div className="logo shrink-0">
          <Link href="/" aria-label="Home" className="image-wrapper block rounded-full overflow-hidden">
            <Image src="/images/me.png" alt="Daniel Ezet" width={45} height={45} />
          </Link>
        </div>

        <div className="nav-links hidden md:flex w-full items-center justify-center gap-9 font-medium">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-1 shrink-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`fixed top-[88px] left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-[800px] bg-[#17181A] border border-[#596573] rounded-2xl p-6 z-40 md:hidden transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col gap-5 font-medium text-center text-[#C5C8D3]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors py-1"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
