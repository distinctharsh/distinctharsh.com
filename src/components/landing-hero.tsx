import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import ContactButton from "@/components/contact-form/contact-button";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Harsh Singh
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                Senior Software Developer
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                I am a Senior Software Developer with a diverse skillset
                spanning{" "}
                <span className="font-semibold text-accent">PHP (Laravel)</span>
                , <span className="font-semibold text-accent">MERN Stack</span>,{" "}
                <span className="font-semibold text-accent">Vue.js</span>, and{" "}
                <span className="font-semibold text-accent">
                  Python (Django)
                </span>
                . I specialize in building reliable, scalable, and
                well-structured web applications for government and enterprise
                use cases.
              </div>
            </FadeUp>
            <FadeUp key="cta" duration={0.6} delay={0.3}>
              <div className="pointer-events-auto mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/#projects"
                  className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent/80 md:px-6 md:py-3 md:text-base"
                >
                  View Projects
                </Link>
                <ContactButton />
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
