import type { Project } from "./projects";
import Vaultspin1 from "@/public/images/projects/vaultspin1.png";
import Vaultspin2 from "@/public/images/projects/vaultspin2.png";
import Vaultspin3 from "@/public/images/projects/vaultspin3.png";
import Areaa1 from "@/public/images/projects/areaa1.png";
import Areaa2 from "@/public/images/projects/areaa2.png";
import Areaa3 from "@/public/images/projects/areaa3.png";
import Spiderpig1 from "@/public/images/projects/spiderpig1.png";
import Spiderpig2 from "@/public/images/projects/spiderpig2.png";
import Spiderpig3 from "@/public/images/projects/spiderpig3.jpg";
import Dogemeat1 from "@/public/images/projects/dogemea1.png";
import Dogemeat2 from "@/public/images/projects/dogemeat2.png";
import Dogemeat3 from "@/public/images/projects/dogemeat3.png";
import Libra1 from "@/public/images/projects/libra1.png";
import Libra2 from "@/public/images/projects/libra2.png";
import Libra3 from "@/public/images/projects/libra3.png";

/**
 * Parked work — kept intact but deliberately not rendered.
 *
 * The public list in `projects.ts` is capped at five so the portfolio reads as
 * depth in one area rather than a contract-work grab bag. Everything below is
 * still real, shipped work; it just dilutes the signal when shown alongside the
 * protocol and real-time systems projects.
 *
 * To promote one back, move its object into the `projects` array in
 * `projects.ts` (and move its image imports with it). Nothing imports this file,
 * so it costs nothing in the bundle.
 */
export const archivedProjects: Project[] = [
  {
    id: "areaa",
    title: "AREAA – Campus Commerce & Discovery Platform",
    description:
      "A campus-focused marketplace that connects students with vendors, service providers, and delivery riders. Features product discovery, service listings, orders, payments, delivery flow, reviews, and admin management.",
    longDescription:
      "AREAA is a campus commerce and discovery platform built to help students find quality goods and services around their campus. The platform connects buyers, vendors, service providers, riders, and admins in one system. It supports vendor onboarding, product and service listings, search and filtering, order placement, payment links, delivery tasks, reviews, and dispute handling. The goal is to make campus buying, selling, service booking, and delivery more organized and accessible.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "AWS S3",
      "Paystack",
      "Google OAuth",
      "Leaflet",
      "Zustand",
      "React Query",
    ],
    date: "2026",
    projectType: "Campus Commerce Platform",
    client: "AREAA",
    url: "https://areaa.com.ng",
    image: Areaa1,
    gallery: [Areaa1, Areaa2, Areaa3],
  },
  {
    id: "vaultspin",
    title: "VaultSpin – Pack Opening & Gaming Platform",
    description:
      "A gamified pack-opening platform where users can open packs, receive items based on odds, forge items, and interact with real-time gaming mechanics.",
    longDescription:
      "VaultSpin is a pack-opening and gaming platform inspired by digital mystery box and collectible systems. It allows users to open packs, receive items based on probability, forge items, and participate in interactive game-style flows. The platform combines real-time updates, reward logic, and marketplace-style mechanics to create a more engaging digital gaming experience.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "Redis",
      "BullMQ",
      "WebSockets",
      "Solana",
      "Ethers.js",
      "AWS S3",
      "Zustand",
    ],
    date: "2025",
    projectType: "Gaming Platform",
    client: "VaultSpin",
    url: "https://vaultspin-optimized.vercel.app/",
    image: Vaultspin1,
    gallery: [Vaultspin1, Vaultspin2, Vaultspin3],
  },
  {
    id: "dogemeat-pay",
    title: "Dogemeat Pay – Solana Merchant Payment Platform",
    description:
      "A Solana-based merchant payment platform that allows stores to create products, generate crypto payment links, accept Solana Pay transactions, and verify payments on-chain.",
    longDescription:
      "Dogemeat Pay is a Solana merchant payment platform designed to help businesses accept crypto payments through a simple store and checkout experience. The platform allows merchants to create stores, list products, generate Solana Pay QR codes, verify on-chain transactions, and manage payment activity from a merchant dashboard. It was built to make crypto payments more practical for online sellers while supporting platform fee logic and future premium access features.",
    technologies: [
      "Solana",
      "Solana Pay",
      "TypeScript",
      "Next.js",
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Helius",
      "Paystack",
    ],
    date: "2025",
    projectType: "Crypto Payment / Merchant Platform",
    client: "Dogemeat Pay",
    url: "https://www.dogemeatpay.info/",
    image: Dogemeat1,
    gallery: [Dogemeat1, Dogemeat2, Dogemeat3],
  },
  {
    id: "libra",
    title: "Libra – Solana Staking & Mining Protocol",
    description:
      "A Solana-based staking and mining protocol built around fixed APY reward models, user deposits, reward tracking, and protocol-driven earning mechanics.",
    longDescription:
      "Libra is a staking and mining protocol built on Solana. The platform allowed users to participate in fixed-APY staking and mining-style reward flows, with deposits, reward calculations, user positions, and claim mechanics managed through a structured protocol experience. It was designed to make on-chain participation simple while handling the core logic required for fixed reward plans, user balances, and protocol activity tracking.",
    technologies: [
      "Solana",
      "Rust",
      "Anchor",
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
    ],
    date: "2024",
    projectType: "Solana Staking / Mining Protocol",
    client: "Libra",
    url: "https://libra-finance-app.vercel.app/",
    image: Libra1,
    gallery: [Libra1, Libra2, Libra3],
  },
  {
    id: "spiderpig-bnb",
    title: "SpiderPig BNB – AI Meme Generator & Web3 Meme Platform",
    description:
      "An AI-powered meme generation platform built for a Web3 meme project on BNB Chain. Features meme caption generation, image-based meme creation, template selection, and a branded meme-token experience.",
    longDescription:
      "SpiderPig BNB is an AI meme generator and Web3 meme platform built around a branded meme-token identity. The platform allows users to generate meme content using AI, create meme images from prompts or templates, and interact with a playful Web3 experience centered around the SpiderPig brand. It combines AI-assisted content creation with crypto-native branding, giving the community a fun way to create, share, and engage with meme content.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "OpenAI API",
      "BNB Chain",
      "Web3.js",
      "MongoDB",
    ],
    date: "2025",
    projectType: "AI Meme Generator / Web3 Meme Platform",
    client: "SpiderPig BNB",
    url: "https://www.spiderpigbnb.wtf/",
    image: Spiderpig1,
    gallery: [Spiderpig1, Spiderpig2, Spiderpig3],
  },
];
