"use client"

import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';
import { Tooltip } from '@mui/material';
//import CustomTooltip from '../sub/CustomTooltip'
//import {  Tooltip as ReactTooltip, Tooltip } from "react-tooltip";

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
    skill_name : string
}

const SkillDataProvider = ({ src, width, height, index , skill_name} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.3
    
  return (
    
  <motion.div
  ref={ref}
  initial="hidden" 
  variants={imageVariants}
  animate={inView ? "visible" : "hidden"}
  custom={index} className='cursor-pointer'
  transition={{delay: index * animationDelay}}
  >
    
    <Image
src={src}
width={width}
height={height}


alt={skill_name}
    />
   
    
  
    
  </motion.div>
  
  )
}

export default SkillDataProvider