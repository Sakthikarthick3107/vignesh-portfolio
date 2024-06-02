"use client";
import React from 'react';
import { motion } from "framer-motion";
import { slideInFromLeft } from '@/utils/motion';
import { CertificateData } from '../sub/CertificateData';
import CertificationCard from '../sub/CertificateCard';

const Certifications = () => {


  return (
    <motion.div
    initial="hidden"
    animate="visible"
    >

<section id='certifications' className='md:h-[100vh] w-full flex flex-col'>
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 "
        >
          <h1 className="text-center text-[40px] z-[20] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Certifications 
      </h1>
         
        </motion.div>
    
    <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 place-items-center'>
        {CertificateData.map((certificate,index)=>(
            <CertificationCard key={index} certificate={certificate}/>

        ))}

    </div>
    </section>        


  </motion.div>
    
  )
}

export default Certifications