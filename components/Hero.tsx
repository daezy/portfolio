import React from "react";
import Me from "@/public/images/me.png";
import Image from "next/image";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <header className="hero-image flex items-center relative">
      <div className="hero-content max-w-[1280px] mx-auto w-full py-32 flex items-center justify-between gap-20 px-5">
        <div className="">
          <h1 className="font-bold text-[64px] leading-[63px] mb-5">
            Hey, I&apos;m Daniel <br /> Ezet Onoriode
          </h1>
          <p className="text-[#C5C8D3] text-[20px] font-normal tracking-wide">
            Software Engineer with 5+ years of experience. Turning <br />
            Ideas into Powerful Digital Experiences.
          </p>
          <div className="btn-group flex gap-3 mt-5">
            <button className="bg-[#1C66C2] border border-[#FFFFFF33] text-white px-9 py-4 rounded-full hover:bg-[#1C66C2] transition text-[14px] font-semibold">
              View Resume
            </button>
            <button className="bg-transparent border border-[#1C66C2] text-[#1C66C2] px-9 py-4 rounded-full hover:bg-[#1C66C2] transition text-[14px] font-semibold">
              Contact Me
            </button>
          </div>
        </div>
        <div className="img-hero">
          <Image src={Me} alt="me" className="rounded-full" />
        </div>

        <HeroCarousel />
      </div>
    </header>
  );
};

export default Hero;
