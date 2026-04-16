import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative px-6 pt-16">
    <div className="max-w-3xl mx-auto text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-primary font-medium text-sm tracking-widest uppercase mb-4"
      >
        Data Analyst
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6"
      >
        Turning Data into Insights That Drive{" "}
        <span className="text-gradient">Smarter Decisions</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        I'm Durga Prasad Jonnagaddala, a Data Analyst skilled in SQL, Python, and Power BI.
        I transform raw data into clear insights and interactive dashboards that help businesses
        make informed decisions.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-lg glow-shadow hover:opacity-90 transition-opacity"
        >
          Work With Me
        </a>
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-medium px-8 py-3.5 rounded-lg hover:bg-secondary transition-colors"
        >
          View Projects
        </a>
      </motion.div>
    </div>

    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
    >
      <ArrowDown size={24} />
    </motion.a>
  </section>
);

export default HeroSection;
