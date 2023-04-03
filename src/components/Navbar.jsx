import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "HOME",
    },
    {
      id: 2,
      link: "EDUCATION",
    },
    {
      id: 3,
      link: "PROJECTS",
    },
    {
      id: 4,
      link: "SKILLS",
    },
    {
      id: 5,
      link: "CONTACT",
    },
    {
      id: 6,
      link: "FOOTER",
    },
  ];
  return (
    <motion.div
      
    animate={{ x: [0, 150, 0], opacity: 1, scale: 1 }}
    transition={{
      duration: 5,
      delay: 0.3,
      ease: [0.5, 0.71, 1, 1.5],
    }}
      className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 z-10"
    >
      <div className="flex justify-between items-center">
        <img
          src={Logo}
          alt="my logo"
          className="lg:w-14 lg:h-14 md:w-10 md:h-10 w-14 h-14 rounded-full lg:mr-8"
        />
        <h1 className="text-5xl font-signature ml-3 lg:mt-4">Rajesh</h1>
      </div>
      <ul className="hidden md:flex ">
        {links.map((li) => {
          return (
            <li
              key={li.id}
              className="px-4 cursor-pointer font-bold hover:scale-105 duration-200"
            >
              <Link to={li.link} smooth duration={500}>
                {li.link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-5 z-20 md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black">
          {links.map((li) => {
            return (
              <li
                key={li.id}
                className="px-4 cursor-pointer font-bold hover:scale-105 duration-200 py-6 capitalize text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={li.link}
                  smooth
                  duration={500}
                >
                  {li.link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </motion.div>
  );
};

export default Navbar;
