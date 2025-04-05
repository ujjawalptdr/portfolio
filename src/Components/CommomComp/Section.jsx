import React from "react";

const Section = ({ title, subtitle, children, style }) => {
  return (
    <section
      className={
        "min-h-screen flex flex-col justify-center items-center text-center py-20 px-5 max-w-screen-lg" +
        " " +
        style
      }
    >
      <h2
        className="py-3 text-3xl
        lg:text-5xl font-semibold"
      >
        {title}
      </h2>
      <p className="max-w-xl font-normal dark:font-light text-slate-800 dark:text-gray-300 mb-10 text-sm md:text-base">
        {subtitle}
      </p>
      {children}
    </section>
  );
};

export default Section;
