import React from "react";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { TbFileCv } from "react-icons/tb";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks2 = ({ additionalStyle }) => {
  const Socials = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/ujjawal-patidar-885969247",
      icon: <FaLinkedin />,
    },
    {
      id: 2,
      link: "https://github.com/ujjawalptdr",
      icon: <FaGithub />,
    },
    {
      id: 3,
      link: "mailto:ujjawalpatidar0303@gmail.com",
      icon: <HiOutlineMail size={30} />,
    },
    {
      id: 4,
      link: "/Ujjawal_Resume.pdf",
      icon: <TbFileCv />,
      download: true,
    },
  ];

  {
    /* Social Links */
  }
  return (
    <div
      className={
        "flex items-center  w-full justify-evenly text-2xl sm:text-3xl  gap-0 sm:gap-4" +
        " " +
        additionalStyle
      }
    >
      {Socials.map(({ id, link, icon, download }) => (
        <a
          key={id}
          href={link}
          target="_blank"
          download={download}
          rel="noopener noreferrer"
          className="duration-200 ease-in-out hover:text-rose-600"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks2;
