import type { Metadata, Viewport } from "next";
import { Inter_Tight, Bricolage_Grotesque } from "next/font/google";
import {
  siteUrl,
  siteName,
  siteDescription,
  siteKeywords,
  authorName,
  jobTitle,
  socialProfiles,
} from "@/lib/site";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const defaultTitle = `${authorName} — ${jobTitle}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: authorName, url: siteUrl }],
  creator: authorName,
  publisher: authorName,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Without this, Google renders a thumbnail-sized preview at most.
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: defaultTitle,
    description: siteDescription,
    url: "/",
    siteName,
    type: "profile",
    firstName: "Daniel",
    lastName: "Ezet Onoriode",
    username: "daezy",
    locale: "en_US",
    // og:image comes from app/opengraph-image.tsx (1200x630, generated).
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteDescription,
    creator: socialProfiles.xHandle,
    site: socialProfiles.xHandle,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

// Person + WebSite graph so search engines can attribute the site to a real
// entity and surface the knowledge-panel style result for the name.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: authorName,
      alternateName: siteName,
      url: siteUrl,
      image: `${siteUrl}/images/me.png`,
      jobTitle,
      email: `mailto:${socialProfiles.email}`,
      description: siteDescription,
      knowsAbout: [
        "Web Development",
        "Mobile Development",
        "Web3",
        "Blockchain",
        "Solana",
        "Smart Contracts",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
      ],
      sameAs: [
        socialProfiles.x,
        socialProfiles.linkedin,
        socialProfiles.github,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${siteName} — ${jobTitle}`,
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${bricolage.variable} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          // Serialised from a local literal, so there is no untrusted input here.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
