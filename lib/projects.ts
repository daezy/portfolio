import { StaticImageData } from "next/image";
import Project1 from "@/public/images/projects/1.png";
import Project2 from "@/public/images/projects/2.png";
import Project3 from "@/public/images/projects/3.png";
import Project4 from "@/public/images/projects/4.png";
import Project5 from "@/public/images/projects/5.png";

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

export const projects: Project[] = [
  {
    id: "taskpilot",
    title: "TaskPilot – Productivity Task Manager",
    description:
      "A Kanban-style productivity app with drag-and-drop features, real-time collaboration using WebSockets, and user authentication via JWT.",
    longDescription:
      "TaskPilot is a Kanban-style productivity app designed for individuals and teams to manage tasks visually and efficiently. It features real-time collaboration via WebSockets, intuitive drag-and-drop task management, and secure user authentication using JWT. TaskPilot helps streamline workflow coordination and keep remote teams aligned and productive.",
    technologies: [
      "React .js",
      "Express",
      "Node.js",
      "MongoDB",
      "Redux",
      "WebSockets (Socket.IO)",
    ],
    date: "2025",
    projectType: "Workflow Platform",
    client: "TaskPilot",
    url: "https://github.com/daezy",
    image: Project1,
    gallery: [Project1, Project2, Project3],
  },
  {
    id: "devdeck",
    title: "DevDeck – Developer Portfolio Builder",
    description:
      "Create and deploy fully customizable portfolio websites without writing a single line of code — for designers and creatives who want a professional online presence.",
    longDescription:
      "DevDeck lets developers, designers, and creatives create and deploy fully customizable portfolio websites without writing a single line of code. It offers drag-and-drop sections, theme presets, custom domains, and one-click deployment, so anyone can stand up a professional online presence in minutes.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Prisma", "PostgreSQL"],
    date: "2025",
    projectType: "SaaS Website Builder",
    client: "DevDeck",
    url: "https://github.com/daezy",
    image: Project2,
    gallery: [Project2, Project3, Project4],
  },
  {
    id: "bugsquash",
    title: "BugSquash – Lightweight Issue Tracker",
    description:
      "A simplified bug and issue tracking system designed for solo devs or small teams. Features task management, tagging, filtering, and real-time updates for streamlined workflows.",
    longDescription:
      "BugSquash is a simplified bug and issue tracking system designed for solo developers and small teams. It features task management, tagging, filtering, and real-time updates, cutting away the heavyweight process of enterprise trackers so small teams can log, triage, and squash bugs without friction.",
    technologies: ["React .js", "Node.js", "Express", "MongoDB", "Socket.IO"],
    date: "2024",
    projectType: "Issue Tracking Tool",
    client: "BugSquash",
    url: "https://github.com/daezy",
    image: Project3,
    gallery: [Project3, Project4, Project5],
  },
  {
    id: "habitforge",
    title: "HabitForge – Habit Tracker",
    description:
      "A personal habit tracker that helps users build routines and track progress with visual stats. Set daily goals, monitor streaks, and stay accountable with a clean, interactive dashboard.",
    longDescription:
      "HabitForge is a personal habit tracker that helps users build routines and track progress with visual stats. Users set daily goals, monitor streaks, and stay accountable through a clean, interactive dashboard with charts that make progress tangible and motivating.",
    technologies: ["Next.js", "TypeScript", "Chart.js", "Supabase"],
    date: "2024",
    projectType: "Habit Tracking App",
    client: "HabitForge",
    url: "https://github.com/daezy",
    image: Project4,
    gallery: [Project4, Project5, Project1],
  },
  {
    id: "syncmeet",
    title: "SyncMeet – Real-Time Meeting Planner",
    description:
      "A collaborative tool for teams to schedule meetings by comparing availability and voting on times. Real-time updates and time zone support make planning fast and simple.",
    longDescription:
      "SyncMeet is a collaborative tool for teams to schedule meetings by comparing availability and voting on times. Real-time updates and built-in time zone support make planning fast and simple, replacing long email threads with a single shared view of when everyone is free.",
    technologies: ["React .js", "Firebase", "TailwindCSS", "WebSockets"],
    date: "2025",
    projectType: "Scheduling Tool",
    client: "SyncMeet",
    url: "https://github.com/daezy",
    image: Project5,
    gallery: [Project5, Project1, Project2],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
