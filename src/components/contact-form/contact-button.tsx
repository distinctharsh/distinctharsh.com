import { useEffect, useRef, useState } from "react";
import { MailIcon } from "lucide-react";

import FloatingMailButton, {
  floatingMailButtonoptions,
} from "@/components/contact-form/floating-mail-button";
import ContactFormModal from "@/components/contact-form/contact-form-modal";

export default function ContactButton() {
  const [showModal, setShowModal] = useState(false);
  const refSendBtn = useRef<HTMLButtonElement>(null);
  const [isBtnVisible, setIsBtnVisible] = useState(false);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsBtnVisible(!entry.isIntersecting);
  };

  useEffect(() => {
    const btn = refSendBtn.current;
    const observer = new IntersectionObserver(
      observerCallback,
      floatingMailButtonoptions,
    );
    if (btn) observer.observe(btn);
    return () => {
      if (btn) observer.unobserve(btn);
    };
  }, []);

  return (
    <>
      <ContactFormModal showModal={showModal} setShowModal={setShowModal} />
      {isBtnVisible && <FloatingMailButton openModal={setShowModal} />}

      <button
        ref={refSendBtn}
        onClick={() => setShowModal(true)}
        className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-2 text-accent ring-1 ring-accent/20 transition-colors duration-150 hover:bg-background/90 hover:ring-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <MailIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-9 lg:w-9" />
        <span className="text-base font-semibold sm:text-lg lg:text-xl">
          Send Message
        </span>
      </button>
    </>
  );
}
