import React from "react";
import {motion} from 'framer-motion';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { Link } from "react-scroll";
const ScreenUp = () => {
  const link = [
    {
        id: 1,
        link: "HOME",
      },
  ];
  return (
    <motion.div animate={{ x: [0, 150, 0], opacity: 1, scale: 1 }}
    transition={{
      duration: 5,
      delay: 0.3,
      ease: [0.5, 0.71, 1, 1.5],
    }} className="z-40 right-3 fixed bottom-5">
      <button className="group cursor-pointer text-white w-fit px-3 py-3   flex items-center rounded-md  bg-pink-800 font-bold">
        <span >
            {
                link.map((links)=>{
                    return(
                        
                        <Link to={links.link} smooth duration={500}>
                            <MdKeyboardDoubleArrowUp size={30}>
                          {links.link}
                          </MdKeyboardDoubleArrowUp>
                        </Link>
                      
                    )
                })
            }
          
        </span>
      </button>
    </motion.div>
  );
};

export default ScreenUp;
