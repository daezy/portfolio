import { StaticImageData } from "next/image";
import Turbo1 from "@/public/images/projects/turbo1.png";
import Turbo2 from "@/public/images/projects/turbo2.png";
import Turbo3 from "@/public/images/projects/turbo3.png";
import Vaultspin1 from "@/public/images/projects/vaultspin1.png";
import Vaultspin2 from "@/public/images/projects/vaultspin2.png";
import Vaultspin3 from "@/public/images/projects/vaultspin3.png";
import Areaa1 from "@/public/images/projects/areaa1.png";
import Areaa2 from "@/public/images/projects/areaa2.png";
import Areaa3 from "@/public/images/projects/areaa3.png";
import Koly1 from "@/public/images/projects/koly1.png";
import Koly2 from "@/public/images/projects/koly2.png";
import Koly3 from "@/public/images/projects/koly3.png";
import Spiderpig1 from "@/public/images/projects/spiderpig1.png";
import Spiderpig2 from "@/public/images/projects/spiderpig2.png";
import Spiderpig3 from "@/public/images/projects/spiderpig3.jpg";
import Surveypulse1 from "@/public/images/projects/surveypulse1.png";
import Surveypulse2 from "@/public/images/projects/surveypulse2.png";
import Surveypulse3 from "@/public/images/projects/surveypulse3.png";
import Dogemeat1 from "@/public/images/projects/dogemea1.png";
import Dogemeat2 from "@/public/images/projects/dogemeat2.png";
import Dogemeat3 from "@/public/images/projects/dogemeat3.png";
import Libra1 from "@/public/images/projects/libra1.png";
import Libra2 from "@/public/images/projects/libra2.png";
import Libra3 from "@/public/images/projects/libra3.png";
import Veilo1 from "@/public/images/projects/veilo1.png";
import Veilo2 from "@/public/images/projects/veilo2.png";
import Veilo3 from "@/public/images/projects/veilo3.png";
import Aiforge1 from "@/public/images/projects/aiforge1.png";
import Aiforge2 from "@/public/images/projects/aiforge2.png";
import Aiforge3 from "@/public/images/projects/aiforge3.png";
import Mevfury1 from "@/public/images/projects/mevfury1.png";
import Mevfury2 from "@/public/images/projects/mevfury2.png";
import Mevfury3 from "@/public/images/projects/mevfury3.png";
import Nitrobot1 from "@/public/images/projects/nitrobot1.jpeg";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  date: string;
  projectType: string;
  client: string;
  url: string;
  image: StaticImageData;
  gallery: StaticImageData[];
}

// Ordered strongest-first for the projects listing and detail prev/next navigation.
export const projects: Project[] = [
  {
    id: "veilo",
    title: "Veilo – Solana Privacy Wallet & Protocol",
    description:
      "A privacy-focused Solana wallet and on-chain protocol that enables shielded transfers, private balances, temporary dApp wallets, and privacy-preserving asset interactions.",
    longDescription:
      "Veilo is a Solana privacy wallet and protocol designed to give users more control over how they move and interact with assets on-chain. The system uses shielded notes, nullifiers, relayers, vaults, and Merkle-tree based state management to support private transfers and privacy-preserving wallet activity. It also includes SPL token support, dApp wallet flows, private swaps, SDK tooling, documentation, and mobile/extension interfaces for a complete privacy-focused Solana experience.",
    technologies: [
      "Solana",
      "Rust",
      "Anchor",
      "TypeScript",
      "Next.js",
      "React.js",
      "ZK Proofs",
      "SPL Token",
      "Merkle Trees",
      "Chrome Extension",
    ],
    date: "2026",
    projectType: "Privacy Wallet / Solana Protocol",
    client: "Veilo",
    url: "https://github.com/daezy",
    image: Veilo1,
    gallery: [Veilo1, Veilo2, Veilo3],
  },
  {
    id: "koly-market",
    title: "KOLy Market – Crypto KOL Prediction Markets",
    description:
      "A Solana-based prediction markets platform where users can forecast whether crypto influencers will hit specific profit targets using real KOL performance data.",
    longDescription:
      "KOLy Market is a prediction markets platform built around crypto influencer performance. The platform allows users to explore markets tied to KOL profit targets, choose YES or NO positions, track active trades, and view outcomes resolved through an oracle based on real KOL performance data. It also includes demo mode, wallet authentication, KOL rankings, live market activity, portfolio tracking, leaderboards, market creation, and gamified XP levels to make the experience more interactive and data-driven.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Solana",
      "Wallet Adapter",
      "Node.js",
      "Express",
      "MongoDB",
      "WebSockets",
    ],
    date: "2026",
    projectType: "Prediction Markets Platform",
    client: "KOLy Market",
    url: "https://demo.kolymarket.io/",
    image: Koly1,
    gallery: [Koly1, Koly2, Koly3],
  },
  {
    id: "aiforge",
    title: "AiForge – AI Agent Marketplace on 0G Chain",
    description:
      "An AI agent marketplace built on 0G Chain, allowing users to discover, access, and interact with decentralized AI agents across different categories and workflows.",
    longDescription:
      "AiForge is an AI agent marketplace built on 0G Chain, a decentralized AI-focused Layer 1 ecosystem. The platform allows users to explore AI agents, view agent details, and interact with agent-powered tools in a marketplace-style experience. It was designed around the growing intersection of AI and Web3, using 0G's AI-native infrastructure as the foundation for discovering, organizing, and accessing decentralized AI agents.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "0G Chain",
      "EVM",
      "Web3",
      "AI Agents",
      "MongoDB",
    ],
    date: "2026",
    projectType: "AI Agent Marketplace",
    client: "AiForge",
    url: "https://github.com/daezy",
    image: Aiforge1,
    gallery: [Aiforge1, Aiforge2, Aiforge3],
  },
  {
    id: "turbo",
    title: "Turbo – Live Streaming Platform",
    description:
      "A live streaming platform built for creators and viewers, featuring real-time video streaming, live chat, creator channels, subscriptions, and content discovery.",
    longDescription:
      "Turbo is a live streaming platform designed to support creator-led broadcasts and real-time viewer interaction. It includes creator channels, live chat, category-based discovery, follower systems, subscription support, and admin management tools. The platform focuses on delivering a smooth streaming experience while giving creators the tools they need to manage and grow their audience.",
    technologies: [
      "Next.js",
      "Node.js",
      "LiveKit",
      "WebSockets",
      "Stripe",
      "MongoDB",
      "TypeScript",
    ],
    date: "2025",
    projectType: "Live Streaming Platform",
    client: "Turbo",
    url: "https://turbo-streaming-frontend.vercel.app/",
    image: Turbo1,
    gallery: [Turbo1, Turbo2, Turbo3],
  },
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
      "Paystack",
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
    id: "mevfury",
    title: "MEVFury – Solana Telegram Trading Bot",
    description:
      "A Solana-based Telegram trading bot built for fast token trading, automated execution, deposits, take-profit/stop-loss logic, subscriptions, and fee management.",
    longDescription:
      "MEVFury is a Telegram-based Solana trading bot designed to help users execute trades and manage trading activity directly from Telegram. The bot supports wallet funding, SOL deposits, automated trading flows, take-profit and stop-loss logic, subscription access, and platform fee handling. It combines Solana transaction execution with a simple bot interface, giving traders a faster and more accessible way to interact with token markets.",
    technologies: [
      "Solana",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Telegram Bot API",
      "Solana Web3.js",
      "Helius",
      "Jito",
    ],
    date: "2025",
    projectType: "Solana Trading Bot",
    client: "MEVFury",
    url: "https://github.com/daezy",
    image: Mevfury1,
    gallery: [Mevfury1, Mevfury2, Mevfury3],
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
      "Node.js",
      "Socket.IO",
      "Redis",
      "BullMQ",
      "MongoDB",
      "TypeScript",
    ],
    date: "2025",
    projectType: "Gaming Platform",
    client: "VaultSpin",
    url: "https://vaultspin-optimized.vercel.app/",
    image: Vaultspin1,
    gallery: [Vaultspin1, Vaultspin2, Vaultspin3],
  },
  {
    id: "surveypulse",
    title: "SurveyPulse – AI-Powered Survey Analysis Platform",
    description:
      "An AI-powered survey analysis platform that helps teams turn open-ended responses into clear insights through summarization, sentiment detection, theme extraction, and pain point analysis.",
    longDescription:
      "SurveyPulse is an AI-powered platform designed to help teams analyze open-ended survey responses faster and more effectively. The system uses large language models to process raw feedback, summarize responses, detect sentiment, extract recurring themes, and identify key pain points from user or developer feedback. It transforms unstructured survey data into organized insights, making it easier for teams to understand what users are saying, spot patterns, and make better product or research decisions.",
    technologies: [
      "React.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "MongoDB",
      "LLM APIs",
      "Natural Language Processing",
      "Data Visualization",
    ],
    date: "2026",
    projectType: "AI Survey Analysis Platform",
    client: "SurveyPulse",
    url: "https://surveypulse-frontend.onrender.com/",
    image: Surveypulse1,
    gallery: [Surveypulse1, Surveypulse2, Surveypulse3],
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
    url: "https://github.com/daezy",
    image: Dogemeat1,
    gallery: [Dogemeat1, Dogemeat2, Dogemeat3],
  },
  {
    id: "nitrobot",
    title: "NitroBot – Solana Trading & Launch Bot",
    description:
      "A Solana-focused trading and launch bot designed to help users interact with token markets, automate trading actions, and manage Web3 trading activity through a streamlined bot interface.",
    longDescription:
      "NitroBot is a Solana trading and launch-support bot built to simplify token market interactions for users. The platform focuses on fast wallet-based trading flows, token discovery, buy/sell execution, and automation features that support crypto communities and traders. It combines Telegram-style bot interaction with Solana transaction logic, giving users a faster way to access trading utilities without navigating complex DeFi interfaces manually.",
    technologies: [
      "Solana",
      "TypeScript",
      "Node.js",
      "Telegram Bot API",
      "Solana Web3.js",
      "Jupiter API",
      "Raydium",
      "MongoDB",
      "Redis",
    ],
    date: "2025",
    projectType: "Solana Trading Bot",
    client: "NitroBot",
    url: "https://github.com/daezy",
    image: Nitrobot1,
    gallery: [Nitrobot1],
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
    url: "https://github.com/daezy",
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

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
