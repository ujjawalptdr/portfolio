import React from "react";
import Section from "./CommomComp/Section";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import linkzap from "../assets/linkzap.png";
import foodyZone from "../assets/foodyZone.png";
import luckyDual from "../assets/luckyDual.png"
import quickAssist from "../assets/QuickAssistImg.png"
import hireVerse from "../assets/HireVerseImg.png"
// import p2 from "../assets/p2.jpg";
// import p3 from "../assets/p3.jpg";
// import p4 from "../assets/p4.jpg";
// import p5 from "../assets/p5.jpg";
// import p6 from "../assets/p6.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: quickAssist,
      title: "QuickAssist",
      github: "https://github.com/ujjawalptdr/QuickAssist",
      demo: "https://quick-assist.onrender.com/",
    },
    {
      id: 2,
      image: hireVerse,
      title: "LinkZap",
      github: "https://github.com/ujjawalptdr/HireVerse",
      demo: "https://hireverse.onrender.com/",
    },
    {
      id: 3,
      image: linkzap,
      title: "LinkZap",
      github: "https://github.com/ujjawalptdr/Link-Zap",
      demo: "https://link-zap.onrender.com/",
    },
    {
      id: 4,
      image: foodyZone,
      title: "Foody Zone",
      github: "https://github.com/ujjawalptdr/Foody-Zone",
      demo: "https://ujjawalptdr.github.io/Foody-Zone/",
    },
    {
      id: 5,
      image: luckyDual,
      title: "Lucky Dual",
      github: "https://github.com/ujjawalptdr/Lucky-Dual",
      demo: "https://ujjawalptdr.github.io/Lucky-Dual/",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      name="portfolio"
      className="min-h-screen bg-gradient-to-b from-white dark:from-black dark:to-gray-800 flex justify-center items-center"
    >
      <Section
        title="PortFolio 🗒️"
        subtitle="Check out my portfolio to see the projects I’ve worked on. I’m always open to new challenges and opportunities."
      >
        <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
          {projects.map(({ id, image, title, github, demo }) => (
            <motion.div
              key={id}
              className="max-w-lg h-48 flex shadow-md hover:shadow-xl dark:shadow-gray-300 rounded-2xl overflow-hidden transition duration-200 hover:scale-[1.015]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                src={image}
                alt={title}
                className="w-2/3 h-full object-cover"
                loading="lazy"
              />
              <div className="w-1/3 h-full flex flex-col items-center justify-evenly p-2 text-center">
                <h2 className="text-sm font-semibold">{title}</h2>
                <a
                  href={github}
                  className="text-2xl hover:scale-110 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href={demo}
                  className="text-2xl hover:scale-105 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkSquareAlt />
                </a>
              </div>
            </motion.div>

          ))}
        </div>
      </Section>
    </div>
  );
};

export default Portfolio;
