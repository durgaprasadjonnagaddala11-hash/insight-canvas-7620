import { motion } from "framer-motion";
import { LinkedinIcon, Mail } from "lucide-react";

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
            <Linkedin size={20} />
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
