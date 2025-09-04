import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function NavBar({ darkMode, setDarkMode }) {
  const [nav, setNav] = useState(false);

  const [onScroll, setOnScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOnScroll(window.scrollY > 10 ? 1 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div
      className={`flex justify-center items-center
    ${onScroll === 1 ? 'bg-white/70 dark:bg-slate-950/90 rounded-md' : ''}`}
    >
      <motion.div
        className={`flex justify-between items-center w-full h-20 
      text-gray-900 dark:text-white 
      fixed top-0 z-50 
      backdrop-blur-sm
      px-2 sm:px-5 md:px-10 lg:px-20
      transition-all duration-1000 ease-in-out
      ${onScroll === 1 ? 'shadow-md max-w-screen-xl bg-white/70 dark:bg-slate-950/90 rounded-lg mt-2' : ''}`}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-5xl font-signature ml-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="./">Ujjawal</a>
        </motion.h1>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <motion.li
              key={id}
              className="group relative px-4 cursor-pointer capitalize font-medium 
                text-slate-900 dark:text-slate-300
               hover:text-green-500 dark:hover:text-green-400 
               transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: id * 0.1 }}
            >
              <Link to={link} smooth duration={500} className="relative">
                {link}
                {/* Underline animation */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 
                       bg-green-500 dark:bg-green-400 
                       transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}


          <div onClick={() => setDarkMode(!darkMode)} className="px-4 ">
            {darkMode ? (
              <MdWbSunny className="text-2xl cursor-pointer  text-slate-900 dark:text-slate-400 hover:text-green-400 duration-100" />
            ) : (
              <MdNightsStay className="text-2xl cursor-pointer  text-slate-900 dark:text-slate-400 hover:text-green-400 duration-100" />
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
            className="cursor-pointer pr-4 z-10 text-slate-900 dark:text-slate-400"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>

      </motion.div>
      {nav && (
        <motion.ul
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col justify-center items-center fixed z-40 inset-0 top-0 left-0 w-full h-screen dark:bg-gradient-to-b bg-white dark:from-slate-800 dark:to-slate-950 text-slate-950 mt-0 "
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-gray-900 hover:text-slate-400 dark:text-slate-400 dark:hover:text-slate-200 px-4 cursor-pointer capitalize text-4xl py-6 hover:scale-105 duration-200 will-change-transform"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

export default NavBar;
