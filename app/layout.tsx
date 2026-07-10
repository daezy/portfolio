import type { Metadata } from "next";
import { Inter_Tight, Bricolage_Grotesque } from "next/font/google";
import { siteUrl, siteName, siteDescription } from "@/lib/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Software Engineer`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    title: `${siteName} — Software Engineer`,
    description: siteDescription,
    url: "/",
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/me.png",
        width: 381,
        height: 381,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${siteName} — Software Engineer`,
    description: siteDescription,
    images: ["/images/me.png"],
  },
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
      </body>
    </html>
  );
}
