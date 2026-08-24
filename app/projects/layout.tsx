import type { Metadata } from "next";
import { siteName, siteUrl, authorName } from "@/lib/site";
import { projects } from "@/lib/projects";

const title = `Projects — ${siteName}`;
const description =
  "Selected projects by Daniel Ezet Onoriode — Web3 protocols, AI platforms, real-time systems, marketplaces, and mobile apps built with modern tooling.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: {
    canonical: "/projects",
  },
  // og:* does not inherit the page title, so it has to be restated here or the
  // share card falls back to the site-wide default.
  openGraph: {
    title,
    description,
    url: "/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

// ItemList tells crawlers these detail pages belong together, which helps the
// project URLs get discovered and grouped rather than treated as orphans.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/projects#collection`,
  url: `${siteUrl}/projects`,
  name: title,
  description,
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#person` },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}/projects/${project.id}`,
      name: project.title,
    })),
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: authorName, item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteUrl}/projects`,
      },
    ],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
