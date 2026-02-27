"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { use } from "react";

const Timeline = () => {
  const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

  useGSAP(() => {
    timeline.to("#red-box", {
      x: 250,
      duration: 2,
      rotation: 360,
      borderRadius: "100%",
      ease: "back.inOut",
    });

    timeline.to("#red-box", {
      y: 250,
      scale: 2,
      duration: 2,
      rotation: 360,
      borderRadius: "100%",
      ease: "back.inOut",
    }); // Overlap with previous animation by 1.5 seconds

    timeline.to("#red-box", {
      x: 500,
      scale: 1,
      duration: 2,
      rotation: 360,
      borderRadius: "8px",
      ease: "back.inOut",
    });
  }, []);
  return (
    <div className="py-9 container mx-auto px-9">
      <div className="bg-red-500 w-24 h-24 p-7 rounded-3xl" id="red-box"></div>
      <button
        className="mt-5 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => timeline.play()}
      >
        Play Timeline
      </button>
      <button
        className="mt-5 ml-3 bg-gray-500 text-white px-4 py-2 rounded"
        onClick={() => timeline.pause()}
      >
        Pause Timeline
      </button>
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

export default Timeline;
