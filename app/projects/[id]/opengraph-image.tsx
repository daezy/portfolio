import { ImageResponse } from "next/og";
import { OgCard, ogCardText, ogContentType, ogSize, loadOgFonts } from "@/lib/og";
import { projects, getProject } from "@/lib/projects";

export const contentType = ogContentType;

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

/**
 * Declaring the image here rather than via a static `alt` export is what lets
 * each project ship its own og:image:alt instead of one shared generic string.
 */
export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProject(id);

  return [
    {
      id: "card",
      size: ogSize,
      contentType: ogContentType,
      alt: project
        ? `${project.title} — ${project.projectType} built by Daniel Ezet Onoriode`
        : "Project by Daniel Ezet Onoriode",
    },
  ];
}

/** Titles read "Veilo – Solana Privacy Wallet"; the card only needs the name. */
function projectName(title: string): string {
  return title.split(/\s+[–—-]\s+/)[0].trim();
}

/** Keeps the blurb to roughly two rendered lines, cutting on a word boundary. */
function clamp(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:—–-]$/, "")}…`;
}

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProject(id);

  const card = project
    ? {
        eyebrow: project.projectType,
        title: projectName(project.title),
        description: clamp(project.description, 130),
        tags: project.technologies.slice(0, 5),
      }
    : {
        eyebrow: "Portfolio",
        title: "Daniel Ezet Onoriode",
        description: "Software engineer building web, mobile, and Web3 applications.",
        tags: [],
      };

  return new ImageResponse(<OgCard {...card} />, {
    ...ogSize,
    fonts: await loadOgFonts(ogCardText(card)),
  });
}
