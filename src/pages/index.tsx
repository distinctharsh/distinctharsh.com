import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Harsh Singh | Senior Software Developer | PHP, MERN, Python"
        description="Harsh Singh (distinctharsh) is a Senior Software Developer specializing in PHP (Laravel), MERN Stack, and Python (Django). Expert in building scalable enterprise applications."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Harsh Singh - Senior Software Developer",
          description:
            "Portfolio of Harsh Singh (distinctharsh), a Senior Full Stack Developer. Expertise in Laravel, React, Next.js, and Python. Based in New Delhi.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Harsh Singh - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Harsh Singh, distinctharsh, Senior Software Developer, National Informatics Centre Developer, NIC Developer, Cabinet Secretariat IT, Rashtrapati Bhavan Developer, GovTech India, PHP Developer, Laravel Developer, MERN Stack Developer, Python Developer, Django Developer, Full Stack Developer, Web Developer, Delhi, India",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
        <link rel="apple-touch-icon" sizes="76x76" href="/hs_favicon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/hs_favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/hs_favicon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/hs_favicon.png" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Harsh Singh",
                alternateName: [
                  "distinctharsh",
                  "Harsh Singh NIC",
                  "Harsh Singh Developer",
                ],
                url: siteMetadata.siteUrl,
                image: `${siteMetadata.siteUrl}${siteMetadata.image}`,
                sameAs: [
                  siteMetadata.github,
                  siteMetadata.twitter,
                  siteMetadata.linkedin,
                  "https://blogs.distinctharsh.com",
                ],
                jobTitle: "Senior Software Developer",
                worksFor: [
                  {
                    "@type": "Organization",
                    name: "National Informatics Centre (NIC)",
                    url: "https://www.nic.in/",
                  },
                  {
                    "@type": "Organization",
                    name: "Cabinet Secretariat (Rashtrapati Bhavan)",
                  },
                ],
                description:
                  "Senior Software Developer specializing in PHP, Laravel, MERN, and Python. Currently working at National Informatics Centre (NIC).",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "New Delhi",
                  addressCountry: "India",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  email: siteMetadata.email,
                  url: `${siteMetadata.siteUrl}/#contact`,
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                url: siteMetadata.siteUrl,
                name: "Harsh Singh Portfolio",
                description:
                  "Portfolio of Harsh Singh, Senior Software Developer at NIC.",
                author: {
                  "@type": "Person",
                  name: "Harsh Singh",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Who is Harsh Singh?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Harsh Singh is a Senior Software Developer based in New Delhi, India. He works at the National Informatics Centre (NIC) and specializes in building enterprise-grade applications using PHP (Laravel), MERN Stack, and Python.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is Harsh Singh's expertise?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Harsh Singh (distinctharsh) is an expert in Full Stack Development, specifically Laravel, React.js, Next.js, and Python Django. He has extensive experience in developing gov-tech solutions.",
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <div id="projects">
        <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
              Projects
            </h1>
            <div className="my-2">
              <span className="text-sm text-muted-foreground">
                Here are some of the projects I&apos;d like to share
              </span>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
              {PROJECTS_CARD.map((card, index) => (
                <ProjectCard key={index} {...card} />
              ))}
            </div>
            <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
              <span className="text-xl font-bold md:text-2xl">
                I am currently building new projects and learning backend
                development to expand my skill set beyond frontend.
              </span>
              <p className="mt-10 text-base md:text-xl">
                Visit my github to see some of the latest projects{" "}
                <a
                  href={`${siteMetadata.github}?tab=repositories`}
                  target="_blank"
                  className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
                >
                  Github
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
      <div id="about">
        <AboutHero />
      </div>
    </>
  );
}
