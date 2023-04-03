import React from "react";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full   group flex h-1/3">
      <div className="w-10 h-[6px] bgOpacity mt-16  relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-red-600 bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-black  inline-flex group-hover:bg-red-600 duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-gray-800 shadow-md shadow-white bg-opacity-20 hover:bg-opacity-20 duration-300 rounded-lg p-4 lg:px-10 flex flex-col justify-center gap-6 lg:gap-10  shadow-shadowOne ">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:items-center">
          <div>
            <h3 className=" text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-300  group-hover:text-white  duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-red-600 bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-md shadow-gray-200  text-sm font-medium ">
              {result}
            </p>
          </div>
        </div>
        <div className="w-80">
          <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-400  duration-300 text-justify break-words ">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
