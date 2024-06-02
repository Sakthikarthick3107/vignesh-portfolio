import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaMailBulk, FaMedium, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        
        <div className="mr-24"><a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <div><image href="/favicon-32x32.png"/></div>

          <div className="font-bold ml-[10px] hidden md:block text-gray-300 flex flex-row">
            
            <div>Portfolio</div>
          </div>
        </a></div>

        <div className="opacity-0 md:opacity-100 w-1/2 h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#certifications" className="cursor-pointer">
              Certifications
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#certifications" className="cursor-pointer">
              Experience
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Link href={social.url} key={social.id}> 
            
              <Image
              
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
             
            </Link>
          ))}
          <a href="">
            <FaMedium href="" color="white" size={25} />
          </a>
          
          <a href="mailto:vigneshbala3004@gmail.com">
            <FaMailBulk color="white" size={25} />
           </a>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
