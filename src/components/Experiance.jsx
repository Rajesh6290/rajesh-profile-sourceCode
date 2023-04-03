import React from 'react';
import {motion} from 'framer-motion'; 
import ResumeCard from './ResumeCard';

const Experiance = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:2}}} className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 ">
      {/* /// first part responsive */}
    <div>
    <div className="py-6 lg:py-12 flex flex-col gap-4">
      <p className="text-sm text-red-600 tracking-[4px] ">2006-2024</p>
      <h2 className="text-3xl md:text-4xl font-bold">Education Details</h2>
    </div>
    <div className="mt-6 lg:mt-14 w-full h-[1000px] border-l-[6px] border-red-800 border-opacity-30 flex flex-col gap-10">
      <ResumeCard
        title="Nursary I&II"
        subTitle="SSVM Balaore"
        result="70%"
        des="This time only they have pratices and games."
      />
      <ResumeCard
        title="St.1 to St.7"
        subTitle="SSVM Balasore"
        result="60%"
        des="This time studied all subject class one to saven."
      />
      <ResumeCard 
        title="St.* To St.10"
        subTitle="SHSS Balasore"
        result="50%"
        des="This time studied all subject class 8 to class 10."
      />
    </div>
    </div>
    <div>
    <div className="py-6 lg:py-12 flex flex-col gap-4">
      <p className="text-sm text-red-600 tracking-[4px] ">2006-2024</p>
      <h2 className="text-3xl md:text-4xl font-bold">Education Details</h2>
    </div>
    <div className="mt-6 lg:mt-14  w-full h-[1000px] border-l-[6px] border-red-800 border-opacity-30 flex flex-col gap-10">
      <ResumeCard
        title="+2 Science"
        subTitle="RCST Balasore"
        result="58%"
        des="Science started"
      />
      <ResumeCard
        title="B.Tech Computer Science Eng."
        subTitle="BPUT Univercity"
        result="8.3cgpa"
        des="This time I have a learn how to work company and studied software"
      />
      <ResumeCard 
        title="Software Developer"
        subTitle="SearchingYard"
        result="Tranee"
        des="Software Developer Tranee"
      />
    </div>
    </div>
    </motion.div>
  )
}

export default Experiance
