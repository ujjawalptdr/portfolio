import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function NavBar({ darkMode, setDarkMode }) {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <motion.div
      className="flex justify-between items-center w-full h-20 text-gray-900 dark:text-white bg-white dark:bg-black fixed z-10"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-5xl font-signature ml-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <a href="/">Ujjawal</a>
      </motion.h1>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <motion.li
            key={id}
            className="text-black dark:text-gray-500 px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-green-500 dark:hover:text-green-500 duration-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: id * 0.1 }}
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </motion.li>
        ))}

        <div onClick={() => setDarkMode(!darkMode)} className="px-4">
          {darkMode ? (
            <MdWbSunny className="text-2xl cursor-pointer" />
          ) : (
            <MdNightsStay className="text-2xl cursor-pointer" />
          )}
        </div>
      </ul>

      <div className="flex justify-center items-center md:hidden">
        <div onClick={() => setDarkMode(!darkMode)} className="px-4">
          {darkMode ? (
            <MdWbSunny className="text-2xl cursor-pointer" />
          ) : (
            <MdNightsStay className="text-2xl cursor-pointer" />
          )}
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <motion.ul
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen dark:bg-gradient-to-b bg-white dark:from-black dark:to-gray-800 text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-gray-900 hover:text-indigo-400 dark:text-gray-500 dark:hover:text-gray-300 px-4 cursor-pointer capitalize text-4xl py-6 hover:scale-105 duration-200"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
}

export default NavBar;
