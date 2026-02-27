import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#338FFF] w-full px-4 sm:px-8 pt-8 pb-0 overflow-hidden relative flex flex-col justify-between">
      {/* Top row */}
      <div className="flex items-center justify-between w-full relative z-10 mb-20 sm:mb-32">
        <span className="text-[#0A0A0A] font-bold text-[52px] leading-none tracking-[-0.04em] font-[family-name:var(--font-inter-tight)] uppercase">
          {currentYear}
        </span>
        <span className="text-[#0A0A0A] font-bold text-[64px] leading-none tracking-[-0.04em] font-[family-name:var(--font-inter-tight)]">
          ©
        </span>
      </div>

      {/* Big name */}
      <div className="w-full flex justify-center items-end leading-none mb-6">
        <h1
          className="text-black font-bold tracking-tighter text-center w-full translate-y-[2%]"
          style={{
            fontSize: "21.4vw",
            letterSpacing: "-0.06em",
            lineHeight: 0.8,
          }}
        >
          Daniel Ezet
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
