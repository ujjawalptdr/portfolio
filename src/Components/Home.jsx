import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
// import heroImage from "../assets/heroImage2.jpeg";
import heroImage from "../assets/heroImage3.jpg";
import SocialLinks2 from "./SocialLinks2";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b dark:from-black dark:via-black dark:to-gray-800 flex items-center px-4 sm:px-8 lg:px-16 "
    >
      <div className="w-full my-20">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center md:flex-row md:items-center gap-8 md:gap-16">
          {/* Text Section */}
          <motion.div
            className="flex flex-col justify-center h-full gap-4 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              I'm a Full Stack Developer
            </h2>

            <p className="text-gray-700 dark:text-gray-400 max-w-md md:max-w-lg lg:max-w-xl">
              Hello
              <motion.span
                className="inline-block ml-1 text-4xl"
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                👋
              </motion.span>
              , I'm a Full Stack Developer with a passion for crafting seamless and engaging digital experiences. I specialize in building responsive, dynamic, and user-friendly applications that bring ideas to life. Always driven by innovation and creativity, I aim to develop solutions that not only meet but exceed user expectations.
            </p>

            {/* Button Section */}
            <div className="flex justify-start">
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit h-11 px-6 py-3 mt-4 flex items-center gap-2 rounded-md bg-gradient-to-r from-green-500 to-gray-800 cursor-pointer
                             hover:shadow-lg transition-transform hover:-translate-y-0.5 font-medium"
              >
                Portfolio
                <span
                  className="group-hover:rotate-90 duration-300"
                >
                  <HiArrowNarrowRight size={25} />
                </span>
              </Link>

              <SocialLinks2 additionalStyle="mt-4 max-w-xs inline lg:hidden" />
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex justify-center md:justify-end sm:w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={heroImage}
              alt="my profile"
              className="rounded-xl w-3/4 sm:w-2/3 md:w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
