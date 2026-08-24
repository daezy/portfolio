// The production origin. Note the apex redirects to www, so www is canonical —
// keeping these in sync matters: og:url and canonical pointing at a host that
// doesn't resolve makes every social preview render blank.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.danielezet.dev";

export const siteName = "Daniel Ezet";

export const authorName = "Daniel Ezet Onoriode";

export const jobTitle = "Software Engineer";

export const siteDescription =
  "Software engineer with 5+ years of experience building web, mobile, and Web3 applications. Turning ideas into powerful digital experiences.";

export const siteKeywords = [
  "Daniel Ezet",
  "Daniel Ezet Onoriode",
  "software engineer",
  "full-stack developer",
  "Web3 developer",
  "Solana developer",
  "React developer",
  "Next.js developer",
  "TypeScript",
  "React Native",
  "blockchain engineer",
  "smart contract developer",
  "portfolio",
];

export const socialProfiles = {
  x: "https://x.com/DanielEzet",
  xHandle: "@DanielEzet",
  linkedin: "https://www.linkedin.com/in/daniel-onoriode-ezet-48324a303/",
  github: "https://github.com/daezy",
  email: "ezetdaniel@gmail.com",
};
