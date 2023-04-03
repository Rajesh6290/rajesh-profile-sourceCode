import React from "react";
import {motion} from 'framer-motion';
import navbar from "../assets/portfolio/navbar.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import cgpa from "../assets/portfolio/cgpa.png";
import eims from "../assets/portfolio/eims.png";
import food from "../assets/portfolio/food.png";
import movie from "../assets/portfolio/movie.png";
import profile from "../assets/portfolio/profile.png";
import vaccine from "../assets/portfolio/vaccine.png";
import weather from "../assets/portfolio/weather.png";

const Projects = () => {
  const project = [
    {
        id: 1,
        name: "Profile",
        href: "https://profilerajesh.netlify.app/",
        src: profile,
      },
      {
        id: 2,
        name: "Vaccine Center",
        href: "https://rajesh6290.github.io/cowin/",
        src: vaccine,
      },
    
    {
      id: 3,
      name: "Cgpa-Mark",
      href: "https://cgpa-mark.netlify.app/",
      src: cgpa,
    },
    {
      id: 4,
      name: "EIMS",
      href: "http://eims.lovestoblog.com/login.php",
      src: eims,
    },
    {
      id: 5,
      name: "Food",
      href: "https://rajeshmeal.netlify.app/",
      src: food,
    },
    {
      id: 6,
      name: "Movie",
      href: "https://rajesh6290.github.io/AR-Yard-Movie/",
      src: movie,
    },
    {
        id: 7,
        name: "Navabr",
        href: "#",
        src: navbar,
      },
      {
        id: 8,
        name: "ReactWeather",
        href: "#",
        src: reactWeather,
      },
    {
      id: 9,
      name: "Weather",
      href: "https://rforcast.netlify.app/",
      src: weather,
    },
  ];
  return (
    <motion.div 
      name="PROJECTS"
      className="bg-gradient-to-b from-black to-gray-900 w-full text-white md:h-full pt-[60px]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out of my Projects here..</p>
        </div>
        <motion.div animate={{ x: [0, 150, 0], opacity: 1, scale: 1 }}
    transition={{
      duration: 5,
      delay: 0.3,
      ease: [0.5, 0.71, 1, 1.5],
    }} className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {project.map((projects) => {
            return (
              <div
                key={projects.id}
                className="shadow-md shadow-gray-600  rounded-lg"
              >
                <h2 className="text text-center font-bold p-3 text-blue-600">
                  {projects.name}
                </h2>
                <img
                  src={projects.src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <a
                    href={projects.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text-red-600"
                  >
                    View
                  </a>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
