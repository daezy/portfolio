import { ImageResponse } from "next/og";
import { OgCard, ogCardText, ogContentType, ogSize, loadOgFonts } from "@/lib/og";
import { projects } from "@/lib/projects";

export const alt = "Projects by Daniel Ezet Onoriode";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  const card = {
    eyebrow: "Selected Work",
    title: "Projects",
    description: `${projects.length} projects across Web3, AI, real-time systems, marketplaces, and developer tooling.`,
    tags: ["Solana", "Next.js", "NestJS", "React Native", "AI"],
  };

  return new ImageResponse(<OgCard {...card} />, {
    ...size,
    fonts: await loadOgFonts(ogCardText(card)),
  });
}
