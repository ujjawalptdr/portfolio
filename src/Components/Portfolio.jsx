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
      image: hireVerse,
      title: "HireVerse",
      github: "https://github.com/ujjawalptdr/HireVerse",
      demo: "https://hireverse.onrender.com/",
      description: "is a full-stack job portal built with modern web technologies, enabling users to create professional profiles 👤, upload resumes 📄, and apply for jobs 💼. Recruiters can post openings 📢, filter candidates 🔍, and manage applications 🗂️ with secure role-based access control 🔐.",
    },
    {
      id: 2,
      image: quickAssist,
      title: "QuickAssist",
      github: "https://github.com/ujjawalptdr/QuickAssist",
      demo: "https://quick-assist.onrender.com/",
      description: "is a location-based platform that connects users with service providers whether it's home repairs, education, or business support, users can search 🔍 and book. It features secure OTP-based authentication 🔐, distinct registration flows 👥, a provider dashboard 📊 to manage service requests, and real-time communication 📞 via calls or in-app interactions.",
    },
    {
      id: 3,
      image: linkzap,
      title: "LinkZap",
      github: "https://github.com/ujjawalptdr/Link-Zap",
      demo: "https://link-zap.onrender.com/",
      description: "Shrink. Share. Track. ⚡🔗 Lightning-fast URL shortener with smart analytics. Simplify your links, amplify your reach! 🚀",
    },
    {
      id: 4,
      image: foodyZone,
      title: "Foody Zone",
      github: "https://github.com/ujjawalptdr/Foody-Zone",
      demo: "https://ujjawalptdr.github.io/Foody-Zone/",
      description: "Your ultimate recipe hub! 🍽️🔥 Discover easy, delicious, and diverse recipes. Cook, enjoy, and satisfy your cravings! 😋",
    },
    {
      id: 5,
      image: luckyDual,
      title: "Lucky Dual",
      github: "https://github.com/ujjawalptdr/Lucky-Dual",
      demo: "https://ujjawalptdr.github.io/Lucky-Dual/",
      description: "Test Your Luck, Win Big! 🎲🔥 Pick your numbers, roll the dice, and score points. Challenge friends and see who’s the luckiest! 🍀🚀",
    },
  ];

  return (
    <div
      name="portfolio"
      className="min-h-screen bg-gradient-to-b from-white dark:from-black dark:to-gray-800 flex justify-center items-center"
    >
      <Section
        title="PortFolio 🗒️"
        subtitle="Check out my portfolio to see the projects I’ve worked on. I’m always open to new challenges and opportunities."
      >
        <div className="grid gap-16 lg:gap-20 lg:grid-cols-2 mt-4">
          {projects.map(({ id, image, title, github, demo, description }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.9, type: "spring"
              }}
            >
              {/* Card Box */}
              <div className="max-w-lg w-full flex flex-col items-center shadow-md hover:shadow-lg shadow-gray-300 hover:shadow-gray-400 dark:shadow-gray-600 duration-300 rounded-2xl overflow-hidden  hover:scale-[1.015] bg-white dark:bg-gray-900">
                <div className="flex h-48 w-full">
                  <img
                    src={image}
                    alt={title}
                    className="w-2/3 h-full object-cover"
                    loading="lazy"
                  />
                  <div className="w-1/3 h-full flex flex-col items-center justify-evenly p-2 text-center">
                    <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {title}
                    </h2>
                    <a
                      href={github}
                      className="text-2xl hover:scale-110 transition text-gray-700 dark:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={demo}
                      className="text-2xl hover:scale-105 transition text-gray-700 dark:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkSquareAlt />
                    </a>
                  </div>
                </div>
              </div>

              {/* Description Section (Outside Card) */}
              <div className="max-w-lg w-full mt-5 px-3">
                <p className="text-xs text-gray-700 dark:text-gray-300 text-center leading-relaxed break-words">
                  <span className="font-bold text-black dark:text-green-500 text-base">{title}</span> – {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>



      </Section >
    </div >
  );
};

export default Portfolio;
