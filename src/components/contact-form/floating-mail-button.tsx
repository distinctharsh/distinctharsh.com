import { MailIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const floatingMailButtonoptions = {
  root: null,
  rootMargin: "100px",
  threshold: 0.1,
  // eslint-disable-next-line
  trackVisibility: true,
  delay: 100,
};

export default function FloatingMailButton() {
  return (
    <a
      aria-label="send email"
      href={`mailto:${siteMetadata.email}`}
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-accent p-2 text-background transition-colors duration-150 hover:bg-accent/80 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14 sm:p-3 lg:h-16 lg:w-16"
    >
      <MailIcon />
    </a>
  );
}
