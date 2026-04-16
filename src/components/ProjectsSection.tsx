import { motion } from "framer-motion";
import Slideshow from "./Slideshow";

const slides = [
  {
    type: "image" as const,
    src: "https://res.cloudinary.com/dn8i11rmt/image/upload/v1776317020/Screenshot_2026-04-16_103752_ara9wu.png",
    alt: "Dashboard Project",
  },
  {
    type: "video" as const,
    src: "https://player.vimeo.com/video/1183625429",
    alt: "Project Demo 1",
  },
  {
    type: "video" as const,
    src: "https://player.vimeo.com/video/1183627040",
    alt: "Project Demo 2",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Portfolio</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects where I've applied my skills to analyze data, uncover
          insights, and build interactive dashboards.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        <Slideshow slides={slides} aspectRatio="16/9" />
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
