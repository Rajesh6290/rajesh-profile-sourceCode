import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const Links= [
    {
      id: 1,
      child:(
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rajesh-kumar-behera-85b0971a5",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/rajesh6290",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:beherarabi881@gmail.com",
    },
    {
      id: 4,
      child:(
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/cv.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {Links.map((icons) => {
            return(
          <li
            key={icons.id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 lg:w-40 lg:h-14 lg:px-4 md:h-14 md:px-4 md:w-40 bg-red-900  bg-opacity-4  lg:bg-blue-500 md:bg-blue-500 hover:rounded-md   ml-[-100px] hover:ml-[-10px] duration-500 " +
              " " +
              icons.style
            }
          >
            <a
              href={icons.href}
              className="flex justify-between items-center w-full text-white font-bold"
              download={icons.download}
              target="_blank"
              rel="noreferrer"
            >
              {icons.child}
            </a>
          </li>
            )
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
