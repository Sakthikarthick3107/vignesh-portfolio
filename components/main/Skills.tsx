import {
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { Tooltip } from "@mui/material";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center h-[100vh] justify-center gap-3  relative overflow-hidden  py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        
        {Skill_data.map((image, index) => (
          
          <SkillDataProvider 
          key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            skill_name={image.skill_name}
          />
         
        ))}
      </div>

      

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;