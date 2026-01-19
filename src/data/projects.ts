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
      LIGHT: "/images/projects/cabsec-1.png",
      DARK: "/images/projects/cabsec-2.png",
    },
  },
  {
    index: 1,
    title: "Inspector Tracking System (ITS)",
    href: "#",
    tags: ["Laravel", "PHP", "RBAC", "Workflow"],
    image: {
      LIGHT: "/images/projects/its.png",
      DARK: "/images/projects/its-2.png",
    },
  },
  {
    index: 2,
    title: "Complaint Redressal Ticketing System",
    href: "#",
    tags: ["Laravel", "PHP", "RBAC", "Workflow"],
    image: {
      LIGHT: "/images/projects/crts-0.png",
      DARK: "/images/projects/crts-1.png",
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
    name: "Cabinet Secretariat",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/cabsec-1.png",
      "/images/projects/cabsec-2.png",
      "/images/projects/cabsec-3.png",
      "/images/projects/cabsec-4.png",
      "/images/projects/cabsec-5.png",
      "/images/projects/cabsec-6.png",
    ],
    description:
      "A Next.js-based portal developed with a modern UI, responsive layouts, and workflow-driven modules.",
    sourceCodeHref: siteMetadata.github,
    liveWebsiteHref: "https://master-cabsec.digifootprint.gov.in/",
  },
  {
    name: "Inspector Tracking System (ITS)",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/its.png", "/images/projects/its-2.png"],
    description:
      "A Laravel-based system for managing inspectors with role-based access, approval flows, and status management. Features draft-approval-active workflows and admin-controlled visibility.",
    sourceCodeHref: siteMetadata.github,
    liveWebsiteHref: "#",
  },
  {
    name: "Complaint Redressal Ticketing System (CRTS)",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/crts-0.png",
      "/images/projects/crts-1.png",
      "/images/projects/crts-2.png",
      "/images/projects/crts-3.png",
      "/images/projects/crts-4.png",
      "/images/projects/crts-5.png",
      "/images/projects/crts-6.png",
    ],
    description:
      "A public-facing ticket system facilitating structured assignment and resolution processes. Rebuilt from Core PHP to Laravel for enhanced stability and scalability.",
    sourceCodeHref: siteMetadata.github,
    liveWebsiteHref: "#",
  },
  {
    name: "QuickReturns - Shopify",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/quickreturns.jpg"],
    description:
      "A workflow-driven Shopify returns experience integrated with a Laravel backend and admin tooling.",
    sourceCodeHref: siteMetadata.github,
    liveWebsiteHref: "https://quickreturns.ai/",
  },
  {
    name: "Flurr - Ecommerce",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/flurr.jpeg"],
    description:
      "Secure internal tools and CMS-integrated websites for government use. Focus on migration from SVN to Git-based workflows and maintaining mission-critical systems.",
    sourceCodeHref: siteMetadata.github,
    liveWebsiteHref: "#",
  },
];
