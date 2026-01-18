import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Senior Software Developer (PHP / Laravel)",
    organisation: {
      name: "NIC",
      href: "https://www.nic.in/",
    },
    date: "Present",
    location: "New Delhi",
    description:
      "Senior Software Developer at National Informatics Centre (NIC). Developing Laravel-based enterprise applications with role & permission management, approval workflows, and status-driven systems. Refactoring legacy Core PHP projects into Laravel and managing LAN-based version control workflows (Git & SVN).",
  },
  {
    title: "Software Developer",
    organisation: {
      name: "Rashtrapati Bhavan (Cabinet Secretariat)",
      href: "https://rashtrapatibhavan.gov.in/",
    },
    date: "Past",
    location: "New Delhi",
    description:
      "Software Developer at Rashtrapati Bhavan (Cabinet Secretariat). Involved in developing and maintaining mission-critical systems. Focused on clean architecture, role-based access control, approval workflows, and secure data handling.",
  },
];
