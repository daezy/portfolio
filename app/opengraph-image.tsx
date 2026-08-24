import { ImageResponse } from "next/og";
import { OgCard, ogCardText, ogContentType, ogSize, loadOgFonts } from "@/lib/og";

export const alt = "Daniel Ezet Onoriode — Software Engineer";
export const size = ogSize;
export const contentType = ogContentType;

const card = {
  eyebrow: "Portfolio",
  title: "Hey, I'm Daniel Ezet Onoriode",
  description:
    "Software engineer with 5+ years building web, mobile, and Web3 applications.",
  tags: ["Next.js", "TypeScript", "React Native", "Solana", "Node.js"],
};

export default async function Image() {
  return new ImageResponse(<OgCard {...card} />, {
    ...size,
    fonts: await loadOgFonts(ogCardText(card)),
  });
}
