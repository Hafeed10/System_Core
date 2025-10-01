import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, github, link }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      
    {/* Project Image */}
  <div className="w-full overflow-hidden rounded-lg">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        className="w-full h-40 xs:h-44 sm:h-52 md:h-56 lg:h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
        src={src}
        alt={title}
      />
    </a>
  </div>

  {/* Project Info */}
  <div className="w-full mt-2.5 sm:mt-4 md:mt-5 flex flex-col gap-2 sm:gap-4 md:gap-6">
    <div>
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-xs sm:text-sm md:text-base uppercase text-designColor font-normal leading-tight">
          {title}
        </h3>
        <div className="flex gap-1 sm:gap-2 flex-shrink-0">
          {/* GitHub link (optional) */}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base md:text-lg w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
            >
              <BsGithub />
            </a>
          )}
          {/* Live demo link (optional) */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base md:text-lg w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
            >
              <FaGlobe />
            </a>
          )}
        </div>
      </div>

      {/* Optional description */}
      {des && (
        <p className="text-[11px] sm:text-xs md:text-sm tracking-wide mt-1.5 sm:mt-2 md:mt-3 hover:text-gray-100 duration-300 leading-relaxed">
          {des}
        </p>
      )}
    </div>
  </div>
</div>
    
  );
};

export default ProjectsCard;
