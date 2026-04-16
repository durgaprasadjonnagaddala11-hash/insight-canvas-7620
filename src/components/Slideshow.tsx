import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  type: "image" | "video";
  src: string;
  alt?: string;
}

interface SlideshowProps {
  slides: Slide[];
  aspectRatio?: string;
}

const Slideshow = ({ slides, aspectRatio = "16/9" }: SlideshowProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
  };

  const slide = slides[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <div className="relative group">
      <div
        className="relative overflow-hidden rounded-xl border border-border bg-card"
        style={{ aspectRatio }}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={slide.alt || ""}
                className="w-full h-full object-cover"
              />
            ) : (
              <iframe
                src={slide.src}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={slide.alt || "Video"}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {slides.length > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;
