import { StaticImageData } from "next/image";
import Turbo1 from "@/public/images/projects/turbo1.png";
import Turbo2 from "@/public/images/projects/turbo2.png";
import Turbo3 from "@/public/images/projects/turbo3.png";
import Koly1 from "@/public/images/projects/koly1.png";
import Koly2 from "@/public/images/projects/koly2.png";
import Koly3 from "@/public/images/projects/koly3.png";
import Veilo1 from "@/public/images/projects/veilo1.png";
import Veilo2 from "@/public/images/projects/veilo2.png";
import Veilo3 from "@/public/images/projects/veilo3.png";
import Aiforge1 from "@/public/images/projects/aiforge1.png";
import Aiforge2 from "@/public/images/projects/aiforge2.png";
import Aiforge3 from "@/public/images/projects/aiforge3.png";
import Mevfury1 from "@/public/images/projects/mevfury1.png";
import Mevfury2 from "@/public/images/projects/mevfury2.png";
import Mevfury3 from "@/public/images/projects/mevfury3.png";
import Surveypulse1 from "@/public/images/projects/surveypulse1.png";
import Surveypulse2 from "@/public/images/projects/surveypulse2.png";
import Surveypulse3 from "@/public/images/projects/surveypulse3.png";
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

// Seven projects, not thirteen. A long list of unrelated builds reads as
// contract work; a short list of hard ones reads as depth. Ordered
// strongest-first, with no two adjacent entries sharing a domain so the
// leading cards show range — the two Telegram trading bots in particular are
// kept apart. Drives the projects listing, the detail prev/next navigation,
// and the homepage section (which takes the first 4).
// Parked work lives in `projects.archive.ts`.
export const projects: Project[] = [
  {
    id: "veilo",
    title: "Veilo – Solana Privacy Wallet & Protocol",
    description:
      "A Solana privacy protocol that replaces address-based ownership with zero-knowledge proofs — shielded balances, private username transfers, and in-wallet swaps across a wallet extension and mobile app.",
    longDescription:
      "Veilo is an all-in-one privacy app on Solana that makes transaction-graph analysis impractical by replacing address-based ownership with zero-knowledge, proof-based ownership. Shielded wallets hold private balances that users move through username-based transfers and private swaps, with proofs generated client-side on the user's device and submitted through a relayer network so activity stays unlinkable on-chain. An Anchor smart contract custodies funds and verifies ZK-SNARK proofs against a Merkle-tree state, with SPL token support (SOL, USDC, USDT) and integrated trading across tokenized stocks, perpetual futures, and prediction markets. It ships as a browser extension and Android mobile wallet, backed by a shared TypeScript SDK core and relayer service. Access is invite-gated — use code TECHKAGE to explore the app.",
    technologies: [
      "Solana",
      "Rust",
      "Anchor",
      "Circom",
      "ZK Proofs",
      "TypeScript",
      "Next.js",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Chrome Extension",
    ],
    date: "2026",
    projectType: "Privacy App / Solana Protocol",
    client: "Veilo",
    url: "https://www.veilo.network/",
    image: Veilo1,
    gallery: [Veilo1, Veilo2, Veilo3],
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
      "MongoDB",
      "0G Chain",
      "0G Compute",
      "0G Storage",
      "OpenAI",
      "Google Gemini",
      "ethers.js",
      "AI Agents",
    ],
    date: "2026",
    projectType: "AI Agent Marketplace",
    client: "AiForge",
    url: "https://www.aif0rge.xyz/",
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
      "React.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "LiveKit",
      "WebRTC",
      "FFmpeg",
      "Stripe",
      "Google Cloud Storage",
    ],
    date: "2025",
    projectType: "Live Streaming Platform",
    client: "Turbo",
    url: "https://turbo-streaming-frontend.vercel.app/",
    image: Turbo1,
    gallery: [Turbo1, Turbo2, Turbo3],
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
      "Anchor",
      "Rust",
      "Wallet Adapter",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "Playwright",
      "Recharts",
    ],
    date: "2026",
    projectType: "Prediction Markets Platform",
    client: "KOLy Market",
    url: "https://demo.kolymarket.io/",
    image: Koly1,
    gallery: [Koly1, Koly2, Koly3],
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
      "NestJS",
      "Microservices",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "Python",
      "Telegram Bot API",
      "Solana Web3.js",
      "Helius",
    ],
    date: "2025",
    projectType: "Solana Trading Bot",
    client: "MEVFury",
    url: "https://t.me/alphamevfury_bot",
    image: Mevfury1,
    gallery: [Mevfury1, Mevfury2, Mevfury3],
  },
  {
    id: "surveypulse",
    title: "SurveyPulse – AI-Powered Survey Analysis Platform",
    description:
      "An AI-powered survey analysis platform that turns open-ended responses into structured insight — summarization, sentiment detection, theme extraction, and pain point analysis over unstructured feedback.",
    longDescription:
      "SurveyPulse is an AI-powered platform designed to help teams analyze open-ended survey responses faster and more effectively. The system uses large language models to process raw feedback, summarize responses, detect sentiment, extract recurring themes, and identify key pain points from user or developer feedback. It transforms unstructured survey data into organized insights, making it easier for teams to understand what users are saying, spot patterns, and make better product or research decisions.",
    technologies: [
      "React.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "MongoDB",
      "OpenAI",
      "Natural Language Processing",
      "Recharts",
    ],
    date: "2026",
    projectType: "AI Survey Analysis Platform",
    client: "SurveyPulse",
    url: "https://surveypulse-frontend.onrender.com/",
    image: Surveypulse1,
    gallery: [Surveypulse1, Surveypulse2, Surveypulse3],
  },
  {
    id: "nitrobot",
    title: "NitroBot – Solana Trading & Launch Bot",
    description:
      "A Solana trading and launch bot built on Bun, with wallet-based execution against Raydium and Pump.fun, token discovery, and queue-backed automation behind a Telegram interface.",
    longDescription:
      "NitroBot is a Solana trading and launch-support bot built to simplify token market interactions for users. The platform focuses on fast wallet-based trading flows, token discovery, buy/sell execution, and automation features that support crypto communities and traders. It combines Telegram-style bot interaction with Solana transaction logic, giving users a faster way to access trading utilities without navigating complex DeFi interfaces manually.",
    technologies: [
      "Solana",
      "TypeScript",
      "Bun",
      "Telegram Bot API",
      "Solana Web3.js",
      "Raydium",
      "Pump.fun",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "OpenAI",
    ],
    date: "2025",
    projectType: "Solana Trading Bot",
    client: "NitroBot",
    url: "https://t.me/Nitrosolanabot",
    image: Nitrobot1,
    gallery: [Nitrobot1],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
