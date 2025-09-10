import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar absolute bg-[#17181A4D] border border-[#596573] max-w-[800px] w-full top-5 left-1/2 transform -translate-x-1/2 rounded-full flex gap-7 items-center justify-between overflow-hidden px-5 py-3 backdrop-blur-sm z-10">
      <div className="logo">
        <div className="image-wrapper rounded-full overflow-hidden ">
          <Image src="/images/me.png" alt="Logo" width={45} height={45} />
        </div>
      </div>
      <div className="nav-links w-full flex items-center justify-center gap-9 font-medium">
        <a href="#about">About</a>
        <a href="#projects">Skills</a>
        <a href="#contact">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
