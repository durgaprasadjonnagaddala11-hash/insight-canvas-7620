import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);


const ContactSection = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
          Get In Touch
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Let's Work Together
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          Have a data challenge or need analytical support? I'd love to hear from you.
        </p>

        <div className="flex items-center justify-center gap-4 mb-10">
          <a
            href="http://www.linkedin.com/in/durga-prasad-jonnagaddala"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href="mailto:durgaprasad.jonnagaddala11@gmail.com"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <a
          href="mailto:durgaprasad.jonnagaddala11@gmail.com"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-10 py-4 rounded-lg glow-shadow hover:opacity-90 transition-opacity text-lg"
        >
          Work With Me
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
