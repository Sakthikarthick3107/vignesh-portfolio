import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaInstagram, FaLinkedin, FaMedium, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center  m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">Youtube</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                    <Link href="https://www.google.com" className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                          <FaMedium />
                          <span className="text-[15px] ml-[6px]">Medium</span>    
                      
                    </Link>
                    
                    <a className="flex flex-row items-center my-[15px] cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="HackerOne" role="img" viewBox="0 0 512 512" width="16px" height="16px" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#ffffff"></rect><path d="M174 56c-10 1-23 5-25 16v367c2 9 11 15 20 16h14c9-2 20-7 21-17a116708 116708 0 0 0 0-366c-3-11-15-15-25-16h-5zM333 200c-7 1-13 2-17 5l-74 47c-4 3-5 8-5 12 2 12 8 21 17 27 7 4 18 7 25 2l29-19v165c3 10 12 15 21 17h10c9-2 19-5 23-14l1-3a18494 18494 0 0 0 0-222c-1-12-16-16-26-17h-4z"></path></g></svg>
                        <span className="text-[15px] ml-[6px]">Hackerone</span>
                    </a>
                    
                    
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaLinkedin />
                        <span className="text-[15px] ml-[6px]">LinkedIn</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaInstagram />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </p>
                    
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaTwitter />
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </p>
                    
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   
                    
                    <Link href="" className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">vigneshbala3004@gmail.com</span>    
                    </Link>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer