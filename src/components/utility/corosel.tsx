import { useState } from "react";

import { AnimatePresence, AnimationProps, motion, wrap } from "framer-motion";
import { BiSolidLeftArrow } from "react-icons/bi";

import { classNames } from "@/utility/classNames";

const variant: AnimationProps["variants"] = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export type CoroselProps = {
  aspectRatio: number;
  images: string[];
};

export default function Corosel({ aspectRatio = 1, images }: CoroselProps) {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const jumpTo = (index: number) => {
    if (index === imageIndex) return;
    const newDirection = index > imageIndex ? 1 : -1;
    setPage([index, newDirection]);
  };

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio }}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          loading="lazy"
          className="h-full w-full bg-cover"
          style={{ aspectRatio }}
          src={images[imageIndex]}
          custom={direction}
          variants={variant}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        ></motion.img>
      </AnimatePresence>
      <div className="absolute right-2 top-2 rounded bg-background/70 px-2 py-1 text-xs font-semibold text-foreground backdrop-blur">
        {imageIndex + 1}/{images.length}
      </div>
      <div className="absolute bottom-0 flex h-12 w-full items-center justify-center gap-2">
        <button onClick={() => paginate(-1)} className="h-4 w-4">
          <BiSolidLeftArrow className="fill-zinc-700 dark:fill-zinc-400" />
        </button>
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => jumpTo(index)}
            className={classNames(
              "h-2 w-2 rounded-full",
              index === imageIndex
                ? "bg-accent"
                : "bg-zinc-700 dark:bg-zinc-400",
            )}
          ></button>
        ))}
        <button onClick={() => paginate(1)} className="h-4 w-4">
          <BiSolidLeftArrow className="rotate-180 fill-zinc-700 dark:fill-zinc-400" />
        </button>
      </div>
    </div>
  );
}
