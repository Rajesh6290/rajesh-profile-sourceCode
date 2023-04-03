import React from "react";

const Contact = () => {
  return (
    <div name="CONTACT" className="w-full h-screen bg-gradient-to-b from-black to-gray-900 p-4 text-white ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Contact ME
          </p>
          <p className="py-6">Submit form below to connect me</p>
        </div>
        <div className="flex justify-center items-center ">
          <form
            action="https://getform.io/f/c6efe139-a7b4-452b-a743-2c8714bf27ce"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your Name "
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email "
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="massage"
              placeholder="Enter your massage here"
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-blue-800 px-6 py-3 my-8 mx-auto flex-item-center rounded-md  hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
