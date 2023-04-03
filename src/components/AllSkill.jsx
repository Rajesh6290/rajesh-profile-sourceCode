import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const AllSkill = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 3 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 "
    >
      <div className="w-full lg:w-1/2">
        <div className="py-12">
          <p className="text-sm text-red-600 tracking-[4px] ">
            All design info here
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Design</h2>
        </div>
        <div className="mt-5 w-full flex flex-col gap-6">
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">photoshop</p>
            <span className="w-full h-2 inline-flex rounded-md mt-2 bg-gray-400">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">60%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">canva</p>
            <span className="w-full h-2 inline-flex rounded-md mt-2 bg-gray-400">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-[30%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">30%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Figma</p>
            <span className="w-full h-2 inline-flex rounded-md mt-2 bg-gray-400">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-[40%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">40%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Design</p>
            <span className="w-full h-2 inline-flex rounded-md mt-2 bg-gray-400">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="py-12">
          <p className="text-sm text-red-600 tracking-[4px] ">
            All development skills here
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Development</h2>
        </div>
        <div className="mt-5 w-full flex flex-col gap-6">
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">
              html,css & Javascript
            </p>
            <span className="w-full h-2 inline-flex rounded-md mt-2 bg-gray-400">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">70%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">React</p>
            <span className="w-full h-2 inline-flex rounded-md mt-2 bg-gray-400">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-[30%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">40%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">php</p>
            <span className="w-full h-2 inline-flex rounded-md mt-2 bg-gray-400">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">70%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Mysql</p>
            <span className="w-full h-2 inline-flex rounded-md mt-2 bg-gray-400">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">70%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AllSkill;
