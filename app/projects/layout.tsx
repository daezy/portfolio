import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Daniel Ezet — web, mobile, and Web3 applications built with modern tooling.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
