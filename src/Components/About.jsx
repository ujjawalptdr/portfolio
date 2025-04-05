import React from "react";
import Section from "./CommomComp/Section";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div
      name="about"
      className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:via-black dark:to-black flex justify-center items-center px-4"
    >
      <Section
        title="About"
        subtitle="A quick glimpse into my journey, passion, and goals."
      >
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed space-y-8 max-w-4xl"
        >
          <motion.p variants={itemVariant}>
            👨‍💻 I'm a <span className="font-semibold text-green-600 dark:text-green-400">MERN Stack Developer</span> with a knack for problem-solving and a love for creating meaningful digital experiences. I thrive when turning ideas into interactive and responsive web applications.
          </motion.p>

          <motion.p variants={itemVariant}>
            🎓 Academically, I've maintained a <span className="font-semibold text-green-600 dark:text-green-400">9.28 CGPA</span> in B.Tech CSE from Medi-Caps University, Indore. My schooling journey at Alpine Academy laid the foundation of my logical thinking and work ethic.
          </motion.p>

          <motion.p variants={itemVariant}>
            🚀 Always driven by curiosity and ambition, I'm currently diving into Machine Learning—experimenting with models, data, and algorithms to build smarter systems. My goal? To join an innovative team where I can grow, contribute, and build tech that matters.
          </motion.p>
        </motion.div>
      </Section>
    </div>
  );
};

export default About;
