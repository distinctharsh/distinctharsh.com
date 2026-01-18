import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Inspector Tracking System (ITS)",
    href: "/#projects",
    tags: ["Laravel", "PHP", "RBAC", "Workflow"],
    image: {
      LIGHT: "/images/projects/portfolioLight.webp",
      DARK: "/images/projects/portfolioDark.webp",
    },
  },
  {
    index: 1,
    title: "Ticketing Management System",
    href: "/#projects",
    tags: ["Laravel", "Public Facing", "Support", "Scalability"],
    image: {
      LIGHT: "/images/projects/portfolioLight.webp",
      DARK: "/images/projects/portfolioDark.webp",
    },
  },
  {
    index: 2,
    title: "Enterprise Web Applications",
    href: "/#projects",
    tags: ["CMS", "Secure", "Government", "Git"],
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
    name: "Enterprise Web Applications",
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
