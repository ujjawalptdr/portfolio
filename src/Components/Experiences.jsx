import React from "react";
import Section from "./CommomComp/Section";
import { motion } from "framer-motion";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
// import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
// import graphql from "../assets/graphql.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import express from "../assets/express.png";
import cplusplus from "../assets/C++.png";
import java from "../assets/java.webp";

const Experiences = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: node,
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: express,
      title: "Express JS",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: cplusplus,
      title: "C++",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      src: java,
      title: "Java",
      style: "shadow-blue-600",
    },
    // {
    //   id: 8,
    //   src: nextjs,
    //   title: "NEXT JS",
    //   style: "shadow-gray-300",
    // },
    // {
    //   id: 9,
    //   src: graphql,
    //   title: "GraphQl",
    //   style: "shadow-pink-400",
    // },
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className="flex justify-center items-center bg-gradient-to-b dark:from-black dark:to-gray-800 "
    >
      <Section
        title="Experiences"
        subtitle="These are some technologies I've worked with."
      >
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4 sm:py-8 sm:px-12">
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 px-12 lg:px-24 rounded-lg ${style}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: id * 0.05 }}
              viewport={{ once: true }}
            >
              <img src={src} alt={title} className="w-20" />
              <p className="mt-4 text-center text-sm sm:text-base">{title}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Experiences;
