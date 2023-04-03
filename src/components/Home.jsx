import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import MyLogo from "../assets/mylogo.png";

import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  const link = [
    {
      id: 1,
      link: "PROJECTS",
    },
  ];
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer.",
      "Hard Coder.",
      "Software Developer.",
      "Engineer.",
    ],
    loop: true,
    typeSpeed: 50,
    delaySpeed: 10,
    delaySpeed: 3000,
  });
  return (
    <motion.div
      name="HOME"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-900 text-white "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-[-400px] lg:mt-[0px]">
          <h2 className="text-3xl sm:text-7xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-red-600 sm:text-4xl">
              Rajesh Kumar &nbsp; &nbsp; &nbsp;{" "}
            </span>
            <h6 className="text-sm sm:text-3xl font-bold text-white">
              I'm a <span className="text-cyan-400">{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
              />
            </h6>
          </h2>

          <p className="py-4 max-w-md text-justify">
            A Passionate Software Developer 🚀 Having An Experience Of Building
            Web Applications With JavaScript / Reactjs / Nodejs /
            React/MySql/PHP/Bootstarp And Some Other Cool Libraries And
            Frameworks. I'am Also Learning.
          </p>
          <motion.div
            animate={{ x: [0, 150, 0], opacity: 1, scale: 1 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
            }}
          >
            {link.map((links) => {
              return (
                <Link to={links.link} smooth duration={500}>
            <button className="group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-blue-800 font-bold">
              Protfolio{" "}
              <span className="group-hover:rotate-90 duration-500 ml-2 ">
                
                  
                   
                      <MdOutlineArrowRightAlt size={30}>
                        {links.link}
                      </MdOutlineArrowRightAlt>
                    
                 
              </span>
            </button>
            </Link>
             );
            })}
          </motion.div>
        </div>
        <div>
          <img
            src={MyLogo}
            alt=""
            className="rounded-2xl ml-16 mt-[-220px] lg:mt-[25px] lg:mx-auto w-2/3 md:w-70px"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
