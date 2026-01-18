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
        title="Harsh Singh | Software Developer"
        description="Explore the professional portfolio of Harsh Singh, a skilled Software Developer with 2 years of hands-on experience. Discover innovative projects, expertise in modern web technologies, and a passion for creating seamless user experiences."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Harsh Singh - Software Developer",
          description:
            "Dive into the world of web development with Harsh Singh. Discover a Software Developer with 2 years of expertise, showcasing cutting-edge projects and a commitment to crafting exceptional user interfaces.",
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
              "React Developer, Software Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Portfolio, UI/UX, React.js, Frontend Development, Web Development, JavaScript Developer, Responsive Design",
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
