import React, { useState } from "react";
import { motion } from "framer-motion";
import AllSkill from "./AllSkill";
import Alleducation from "./Alleducation";
import Experiance from "./Experiance";
import Achivements from "./Achivements";

const Education = () => {
  const [allEducation, setallAducation] = useState(true);
  const [skillData, setskillData] = useState(false);
  const [experinaceData, setexperianceData] = useState(false);
  const [achivementsData, setachivementstsData] = useState(false);
  return (
    <motion.div
      name="EDUCATION"
      className="bg-gradient-to-b from-black to-gray-900 w-full h-full pt-[60px]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            My Education
          </p>
          <p className="py-6">My all Education details below here..</p>
        </div>
        <div>
          <motion.ul
            animate={{ x: [0, 150, 0], opacity: 1, scale: 1 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
            }}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 "
          >
            <li
              onClick={() =>
                setallAducation(true) &
                setskillData(false) &
                setexperianceData(false) &
                setachivementstsData(false)
              }
              className={`${
                allEducation
                  ? "border-red-600  rounded-lg"
                  : "border-transparent"
              } w-full h-20 bg-blue-800 bg-opacity-25 text-gray-300 text-xl flex justify-center items-center cursor-pointer hover:bg-opacity-40 border-[1px] duration-300 lg:rounded-tl-md lg:rounded-bl-md `}
            >
              Education
            </li>
            <li
              onClick={() =>
                setallAducation(false) &
                setskillData(true) &
                setexperianceData(false) &
                setachivementstsData(false)
              }
              className={`${
                skillData ? "border-red-600  rounded-lg" : "border-transparent"
              } w-full h-20 bg-blue-800 bg-opacity-25 text-gray-300 text-xl flex justify-center items-center cursor-pointer hover:bg-opacity-40 border-[1px] duration-300 `}
            >
              Skills
            </li>
            <li
              onClick={() =>
                setallAducation(false) &
                setskillData(false) &
                setexperianceData(true) &
                setachivementstsData(false)
              }
              className={`${
                experinaceData
                  ? "border-red-600  rounded-lg"
                  : "border-transparent"
              } w-full h-20 bg-blue-800 bg-opacity-25 text-gray-300 text-xl flex justify-center items-center cursor-pointer hover:bg-opacity-40 border-[1px] duration-300 `}
            >
              Experiance
            </li>
            <li
              onClick={() =>
                setallAducation(false) &
                setskillData(false) &
                setexperianceData(false) &
                setachivementstsData(true)
              }
              className={`${
                achivementsData
                  ? "border-red-600  rounded-lg"
                  : "border-transparent"
              } w-full h-20 bg-blue-800 bg-opacity-25 text-gray-300 text-xl flex justify-center items-center cursor-pointer hover:bg-opacity-40 border-[1px] duration-300  lg:rounded-tr-md lg:rounded-br-md`}
            >
              Achivements
            </li>
          </motion.ul>
        </div>
        {allEducation && <Alleducation />}
        {skillData && <AllSkill />}
        {experinaceData && <Experiance />}
        {achivementsData && <Achivements />}
      </div>
    </motion.div>
  );
};

export default Education;
