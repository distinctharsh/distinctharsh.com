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
              "Harsh Singh, distinctharsh, distinct harsh, Senior Software Developer, PHP Developer, Laravel Developer, MERN Stack Developer, Python Developer, Django Developer, Full Stack Developer, Web Developer, Delhi, India, Software Engineer",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Harsh Singh",
                alternateName: "distinctharsh",
                url: siteMetadata.siteUrl,
                image: `${siteMetadata.siteUrl}${siteMetadata.image}`,
                sameAs: [
                  siteMetadata.github,
                  siteMetadata.twitter,
                  siteMetadata.linkedin,
                  "https://blogs.distinctharsh.com",
                ],
                jobTitle: "Senior Software Developer",
                worksFor: {
                  "@type": "Organization",
                  name: "NIC",
                },
                description:
                  "Senior Software Developer specializing in PHP, Laravel, MERN, and Python.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "New Delhi",
                  addressCountry: "India",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                url: siteMetadata.siteUrl,
                name: "Harsh Singh Portfolio",
                author: {
                  "@type": "Person",
                  name: "Harsh Singh",
                },
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
