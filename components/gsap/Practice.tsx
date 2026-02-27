"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Practice = () => {
  useGSAP(() => {
    // GSAP animation code here
    gsap.to("#red-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      duration: 2,
      rotation: 360,
      ease: "elastic",
    });

    gsap.from("#green-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      duration: 2,
      rotation: 360,
      ease: "power1.inOut",
    });

    gsap.fromTo(
      "#purple-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        borderRadius: "100%",
        duration: 2,
        rotation: 360,
        ease: "bounce.out",
      }
    );
  }, []);
  return (
    <div className="py-9 container mx-auto px-9">
      <div className="bg-red-500 w-24 h-24 p-7 rounded-3xl" id="red-box"></div>
      <div
        className="bg-green-500 w-24 h-24 p-7 rounded-3xl"
        id="green-box"
      ></div>
      <div
        className="bg-purple-500 w-24 h-24 p-7 rounded-3xl"
        id="purple-box"
      ></div>
    </div>
  );
};

export default Practice;
