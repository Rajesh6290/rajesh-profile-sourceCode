import React from "react";

import FooterItems from "./FooterItems";


const Footer = () => {
  return (
    <footer name="FOOTER" className="bg-gray-700 text-white ">
      <div className="md:flex  md:justify-between md:items-center  sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 lg:ml-10">
          <span className="text-teal-400">Feel</span> free contact me and get Any Code :)
        </h1>
        <div>
            <form action="https://getform.io/f/c6efe139-a7b4-452b-a743-2c8714bf27ce" method="POSt">
          <input
            type="text"
            name="number"
            placeholder="Enter your Mobile no "
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus-outline-none"
            required
          />
          <button type="submit" className="bg-teal-600 hover:bg-teal-800 duration-400 px-5 py-2.5 font-[poppins] rounded-md text-white font-bold md:w-auto w-full">Request to Code</button>
          </form>
        </div>
      </div>
      <FooterItems/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 text-center p-2 text-gray-400 text-sm pb-8 lg:text-4xl md:3xl ">
            <span className="font-bold">
            &copy; 2023 Apply. All rights resereved.

            </span >
            <span className="font-bold"> Terms - Privacy Policy</span>
           
      </div>
    </footer>
  );
};

export default Footer;
