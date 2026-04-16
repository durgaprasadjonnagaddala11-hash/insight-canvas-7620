import { motion } from "framer-motion";
import Slideshow from "./Slideshow";

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 px-6 bg-card/50">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
          Testimonials
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Feedback from mentors, collaborators, and clients who've seen the impact of my data work.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="max-w-2xl mx-auto"
      >
        <TestimonialCards />
      </motion.div>
    </div>
  </section>
);

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Project Manager, TechCorp",
    text: "Durga's ability to transform raw datasets into actionable dashboards was impressive. His Power BI reports helped us reduce decision-making time by 30%.",
  },
  {
    name: "Priya Menon",
    role: "Data Science Lead, AnalytiQ",
    text: "Working with Durga was seamless. His SQL skills and attention to data quality stood out—he caught inconsistencies others missed.",
  },
  {
    name: "James Carter",
    role: "Business Analyst, FinEdge",
    text: "Durga delivered clean, well-documented analyses every time. His Python automation saved our team hours of manual reporting each week.",
  },
  {
    name: "Ananya Reddy",
    role: "Mentor, DataBridge Academy",
    text: "As a mentor, I've seen many aspiring analysts, but Durga's curiosity and discipline are rare. He consistently goes beyond the brief to find deeper insights.",
  },
  {
    name: "David Lin",
    role: "Co-Founder, InsightHub",
    text: "Durga built our first customer analytics dashboard from scratch. His work became the foundation for our data strategy going forward.",
  },
];

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const TestimonialCards = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <div className="relative group">
      <div className="aspect-square rounded-xl border border-border bg-card p-8 md:p-12 flex flex-col items-center justify-center text-center overflow-hidden relative">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <Quote className="text-primary/30 mb-6" size={48} />
            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-md">
              "{t.text}"
            </p>
            <div>
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

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
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
