import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {CardType} from './ProjectData'



const Card = ({ src,link, title,techStacks, description}  ) => {

 
  return (
    <div className=" overflow-hidden w-full rounded-lg shadow-lg border border-[#2A0E61]">
        
      <div
        className="h-52 w-full  md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${src})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={link}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          {/* <Link
            href=''
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link> */}
        </div>
        
      </div>
    
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 text-[#7f48ee]">{title}</h5>
        <p></p>
        <div className="flex flex-row items-center gap-4 w-full mb-2">
          {techStacks.map((tech,index) =>(
              <p key={index} className="px-4 py-1 text-sm border rounded-full border-[#2A0E61] transition duration-300 ease-in-out hover:bg-[#7f48ee] cursor-pointer">{tech}</p>
          ))}

        </div>
        {description.map((desc,ind) =>(
            <p className="text-sm my-2" key={ind}>✓ {desc}</p>
        ))}
        
        
        
      </div>
    </div>
  );
};

export default Card;