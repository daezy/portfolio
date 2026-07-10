import Link from "next/link";
import { BsCaretRight } from "react-icons/bs";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#C5C8D3] flex flex-col items-center justify-center px-5 font-[family-name:var(--font-inter-tight)]">
      <p className="font-[family-name:var(--font-bricolage)] font-extrabold text-[clamp(6rem,20vw,12rem)] leading-none text-white/[0.08] select-none">
        404
      </p>
      <h1 className="font-[family-name:var(--font-bricolage)] font-bold text-h2 text-white -mt-6 mb-4 text-center">
        This page wandered off
      </h1>
      <p className="text-[1.0625rem] leading-7 text-center max-w-[45ch] mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back to something real.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#1C66C2] text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-[#338FFF] transition-colors"
        >
          Back to home <BsCaretRight />
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 bg-transparent border border-[#1C66C2] text-[#1C66C2] text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-[#1C66C2] hover:text-white transition-colors"
        >
          View projects
        </Link>
      </div>
    </div>
  );
}
