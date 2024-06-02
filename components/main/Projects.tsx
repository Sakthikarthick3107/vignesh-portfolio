"use client";
import React from "react";

import { motion } from "framer-motion";
import ProjectData, { CardType } from '../sub/ProjectData'
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

import Card from "../sub/card";
import { TypeAnimation } from "react-type-animation";
const Projects = () => {


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >


      

      <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 "
        >
          <h1 className="text-[40px] z-[20] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
         
        </motion.div>


      



      <div className="grid grid-cols-1 md:grid-cols-2 gap-14  xl:gap-14 2xl:grid-cols-4 2xl:gap-14  2xl:gap-12   2xl:gap-14 h-full z-[20] w-full flex flex-col md:flex-row gap-10 px-10">
        
        


        

        
        
        {ProjectData.map((project : CardType,index : any) => (
        <motion.div key={index}
          variants={slideInFromLeft(0.9)}
          className="text-lg text-gray-400 my-5 "
        >
         <div><Card
         link={project}
          src="/proj/social.jpeg"
          title={project.title}
          techStacks={project.techStacks}
          description={project.description}
        /></div>
        </motion.div>
        ))}

       
      </div> 

      

    

      
    </div>
    </motion.div>
  );
};

export default Projects;
