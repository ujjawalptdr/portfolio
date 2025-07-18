import React from "react";
import Section from "./CommomComp/Section";
// import avatar from "../assets/avatar.png";
// import { motion } from "framer-motion";

const Testimonials = () => {
  // const testmonialsArray = [
  //   {
  //     id: 1,
  //     image: avatar,
  //     name: "Jhon Doe",
  //     comment:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum nisi dolorem aliquid aspernatur atque ",
  //   },
  //   {
  //     id: 2,
  //     image: avatar,
  //     name: "Jhon Doe",
  //     comment:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum nisi dolorem aliquid aspernatur atque ",
  //   },
  //   {
  //     id: 3,
  //     image: avatar,
  //     name: "Jhon Doe",
  //     comment:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum nisi dolorem aliquid aspernatur atque ",
  //   },
  // ];

  return (
    <div
      name="Testimonials"
      className="flex justify-center items-center bg-gradient-to-b dark:from-gray-800 dark:to-black"
    >
      <Section
        title="Testimonials 💬"
        subtitle="this is what the other clients have to say about me. I accepted clients from all around the world"
      >
        {/* <div className="max-w-xl flex flex-col gap-8">
          {testmonialsArray.map(({ id, image, name, comment }) => (
            <motion.div
              key={id}
              className="flex p-4 justify-center items-center rounded-xl shadow-md shadow-slate-400 dark:shadow-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-1/3">
                <img
                  src={image}
                  alt={name}
                  className="w-20 h-20 object-cover object-top p-2"
                />
              </div>

              <div className="w-2/3 flex flex-col justify-center items-center gap-3 p-2">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-sm font-extralight text-center">{comment}</p>
              </div>
            </motion.div>
          ))}
        </div> */}

        {/* Keeping this as is */}
        <p className="text-xl mt-20">Coming soon...</p>
      </Section>
    </div>
  );
};

export default Testimonials;
