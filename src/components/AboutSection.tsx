import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="aspect-square rounded-2xl overflow-hidden border border-border card-shadow">
          <img
            src="https://res.cloudinary.com/dn8i11rmt/image/upload/f_auto,q_auto/profile_pic_ngyeya"
            alt="Durga Prasad Jonnagaddala"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/10 border border-primary/20 -z-10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">About Me</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
          Passionate About Data
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          I'm a passionate Data Analyst with a strong foundation in SQL, Python, and data
          visualization tools like Power BI and Excel. I enjoy working with data—cleaning it,
          analyzing it, and turning it into meaningful insights.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          As a fresher, I bring a learning mindset, attention to detail, and a strong desire to
          solve real-world problems using data. I aim to help organizations make smarter,
          data-driven decisions.
        </p>
        <div className="flex flex-wrap gap-3">
          {["SQL", "Python", "Power BI", "Excel", "Data Visualization"].map((skill) => (
            <span
              key={skill}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
