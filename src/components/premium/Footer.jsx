import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#222] bg-[#050505] py-8 px-4 md:px-8 mt-20 font-bodyFont">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs text-gray-500 tracking-widest font-titleFont uppercase">
          SYSTEM_CORE_V4.0.1 // ROOT_ACCESS_GRANTED // <span className="text-designColor">HAFEEX_PORTFOLIO</span>
        </div>
        
        <div className="flex items-center gap-6 text-xs text-gray-500 tracking-widest uppercase">
            <a href="#" className="hover:text-designColor transition-colors">Documentation</a>
            <a href="#" className="hover:text-designColor transition-colors">Changelog</a>
            <a href="#" className="hover:text-designColor transition-colors">Security</a>
            <a href="#" className="hover:text-designColor transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4 text-gray-400">
            <FiGithub className="hover:text-white cursor-pointer transition-colors" />
            <FiTwitter className="hover:text-white cursor-pointer transition-colors" />
            <FiLinkedin className="hover:text-white cursor-pointer transition-colors" />
            <FiMail className="hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
