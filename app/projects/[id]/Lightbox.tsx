"use client";
import React, { useCallback, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { IoClose } from "react-icons/io5";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";

interface LightboxProps {
  images: StaticImageData[];
  index: number;
  title: string;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export default function Lightbox({
  images,
  index,
  title,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const count = images.length;
  const hasMultiple = count > 1;

  const goPrev = useCallback(
    () => onIndexChange((index - 1 + count) % count),
    [index, count, onIndexChange],
  );
  const goNext = useCallback(
    () => onIndexChange((index + 1) % count),
    [index, count, onIndexChange],
  );

  // Keyboard controls + lock background scroll while open.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft" && hasMultiple) goPrev();
      else if (e.key === "ArrowRight" && hasMultiple) goNext();
    };
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, goPrev, goNext, hasMultiple]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — image viewer`}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-[#1C1E20] border border-white/[0.14] text-white flex items-center justify-center hover:bg-[#27292B] transition-colors z-10"
      >
        <IoClose size={22} />
      </button>

      {/* Counter */}
      {hasMultiple && (
        <span className="absolute top-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium tabular-nums">
          {index + 1} / {count}
        </span>
      )}

      {/* Prev */}
      {hasMultiple && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous image"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#1C1E20] border border-white/[0.14] text-white flex items-center justify-center hover:bg-[#27292B] transition-colors z-10"
        >
          <BsCaretLeft size={20} />
        </button>
      )}

      {/* Image — object-contain shows the full, uncropped screenshot */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full flex items-center justify-center"
      >
        <Image
          src={images[index]}
          alt={`${title} — screenshot ${index + 1}`}
          placeholder="blur"
          draggable={false}
          className="w-auto h-auto max-w-[92vw] max-h-[82vh] sm:max-h-[86vh] object-contain rounded-lg select-none"
        />
      </div>

      {/* Next */}
      {hasMultiple && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next image"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#1C1E20] border border-white/[0.14] text-white flex items-center justify-center hover:bg-[#27292B] transition-colors z-10"
        >
          <BsCaretRight size={20} />
        </button>
      )}
    </div>
  );
}
