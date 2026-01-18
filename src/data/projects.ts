import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Cabinet Secretariat",
    href: "https://master-cabsec.digifootprint.gov.in/",
    tags: ["Next Js", "TypeScript", "Tailwind CSS", "Workflow"],
    image: {
      LIGHT: "/images/projectscabsec.png",
      DARK: "/images/projects/cabsec.png",
    },
  },
  {
    index: 1,
    title: "Inspector Tracking System (ITS)",
    href: "#",
    tags: ["Laravel", "PHP", "RBAC", "Workflow"],
    image: {
      LIGHT: "/images/projects/portfolioLight.webp",
      DARK: "/images/projects/portfolioDark.webp",
    },
  },
  {
    index: 2,
    title: "Complaint Redressal Ticketing System",
    href: "#",
    tags: ["Laravel", "PHP", "RBAC", "Workflow"],
    image: {
      LIGHT: "/images/projects/portfolioLight.webp",
      DARK: "/images/projects/portfolioDark.webp",
    },
  },
  {
    index: 3,
    title: "QuickReturns - Shopify",
    href: "https://quickreturns.ai/",
    tags: ["Shopify", "Laravel", "PHP", "Public Facing", "Workflow"],
    image: {
      LIGHT: "/images/projects/portfolioLight.webp",
      DARK: "/images/projects/portfolioDark.webp",
    },
  },
  {
    index: 4,
    title: "Flurr - Ecommerce",
    href: "https://flurr.in/",
    tags: ["CMS", "Laravel", "PHP", "Public Facing", "Workflow"],
    image: {
      LIGHT: "/images/projects/portfolioLight.webp",
      DARK: "/images/projects/portfolioDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Inspector Tracking System (ITS)",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioLight.webp",
      "/images/projects/portfolioDark.webp",
    ],
    description:
      "A Laravel-based system for managing inspectors with role-based access, approval flows, and status management. Features draft-approval-active workflows and admin-controlled visibility.",
    sourceCodeHref: siteMetadata.github,
    liveWebsiteHref: "#",
  },
  {
    name: "Ticketing Management System",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioLight.webp",
      "/images/projects/portfolioDark.webp",
    ],
    description:
      "A public-facing ticket system facilitating structured assignment and resolution processes. Rebuilt from Core PHP to Laravel for enhanced stability and scalability.",
    sourceCodeHref: siteMetadata.github,
    liveWebsiteHref: "#",
  },
  {
    name: "Flurr - Ecommerce",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioLight.webp",
      "/images/projects/portfolioDark.webp",
    ],
    description:
      "Secure internal tools and CMS-integrated websites for government use. Focus on migration from SVN to Git-based workflows and maintaining mission-critical systems.",
    sourceCodeHref: siteMetadata.github,
    liveWebsiteHref: "#",
  },
];
