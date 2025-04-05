import React from "react";
import Section from "./CommomComp/Section";
import contact from "../assets/mobile.png";
import SocialLinks2 from "./SocialLinks2";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      name="contact"
      className="flex justify-center items-center bg-gradient-to-b dark:from-gray-800 dark:to-black"
    >
      <Section
        title="Contact 📞"
        subtitle="Have an idea, a project, or just want to say hello? Feel free to reach out — I'm always open to discussing opportunities, collaborations, or just chatting about tech!"
      >
        <div className="flex flex-col items-center justify-center gap-8 text-center">

          {/* Contact Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 12, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <img src={contact} alt="contact info" className="w-32 h-32" />
          </motion.div>

          {/* Description Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="max-w-xs md:max-w-lg font-extralight">
              Whether you’ve got a question or just want to connect, I’d love to hear from you.
              Fill out the form below or drop a message on any of my socials — let’s build something awesome together!
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SocialLinks2 additionalStyle="" />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="p-8 text-left w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <form action="https://getform.io/f/aolllwgb" method="POST">
              <div className="w-full">

                <div className="flex flex-col">
                  <label className="capitalize text-sm py-2 font-normal dark:font-extralight">
                    your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="border-2 rounded-lg p-3 flex border-gray-400 focus:outline-none focus:border-red-400 dark:bg-gray-900 dark:text-white"
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label className="capitalize text-sm py-2 font-normal dark:font-extralight">
                    phone number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    className="border-2 rounded-lg p-3 flex focus:outline-none focus:border-red-500 border-gray-400 dark:bg-gray-900 dark:text-white"
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label className="capitalize text-sm py-2 font-normal dark:font-extralight">
                    email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    required
                    className="border-2 rounded-lg p-3 flex focus:outline-none focus:border-teal-300 border-gray-400 dark:bg-gray-900 dark:text-white"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="capitalize text-sm py-2 font-normal dark:font-extralight">
                    your message
                  </label>
                  <textarea
                    name="comment"
                    rows="10"
                    className="resize-none border-2 rounded-lg p-3 flex focus:outline-none focus:border-teal-400 border-gray-400 dark:bg-gray-900 dark:text-white"
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                  send message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
