"use client";
import { TypeAnimation } from "react-type-animation";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex md:flex-row flex-col-reverse items-center justify-center px-20  2xl:mt-[55vh] w-full z-[20]"
    >
      <div className="h-full w-full flex  p-10 flex-col gap-5 justify-center m-auto text-start">
        

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6  font-bold text-white w-[600px] w-auto h-auto"
        >
          <h1 className="text-white">Hello</h1>
          <p className="cursive text-[24px]">Hi , my name is</p>
          <span className="text-5xl">
            Vignesh B
          </span>
          <TypeAnimation
      sequence={[
        'I am a Cloud Architect',
        1000, 
        'I am a Pentester',
        1000,
        'I am a Cyber Security Researcher',
        1000,
        'I am a Certified Bug Hunter',
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="opacity-90 text-3xl h-10"
      style={{ fontSize: '', display: 'inline-block' }}
      repeat={Infinity}
    />
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[500px]"
        >
          I&apos;m an undergraduate passionate about technology, I am actively pursuing expertise in cloud architecture, cybersecurity, and penetration testing. I am driven to address complex challenges in these fields, striving to enhance system security and efficiency through innovative solutions.

        </motion.p>

        <motion.a
                    variants={slideInFromLeft(1)}
                    href="https://drive.google.com/file/d/1MkK31ZBByRlSyGAyF3hewGTqcYWr4CqT/view?usp=sharing"
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    Resume
                </motion.a>
        
      </div>
      

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center relative 2xl:left-[25vh] items-center"
      >


<div className="group h-96 w-96  [perspective:1000px]">
  
  <div className="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] [backface-visibility:hidden] group-hover:[transform:rotateY(180deg)]">


    <div className="absolute inset-0 ">
    <Image
className="rounded-full border-4 border-indigo-500"
src="/vigneshfront.jpeg"
width={300}
height={300}
alt='skill image'
    /></div>

    <div className="absolute inset-0 h-full w-full rounded-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
    <Image
className="rounded-full border-4 border-indigo-500"
src="/vignesh.png"
width={300}
height={300}
alt='skill image'
    /> </div>
  </div>
</div>



    
  
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
