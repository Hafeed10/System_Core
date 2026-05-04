import React from 'react';
import { FiGrid, FiTerminal, FiDatabase, FiCpu, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#222] fixed top-0 left-0 z-50 flex items-center px-8 justify-between font-bodyFont">
      <div className="flex items-center gap-2">
        <FiCpu className="text-designColor text-xl" />
        <span className="font-titleFont text-designColor tracking-widest text-sm font-bold">
          SYSTEM_CORE // ARCH_ENGINE
        </span>
      </div>

      <div className="hidden mdl:flex items-center gap-10">
        <a href="#exhibits" className="nav-link text-designColor border-b border-designColor pb-1">Exhibits</a>
        <a href="#philosophy" className="nav-link">Philosophy</a>
        <a href="#experiments" className="nav-link">Experiments</a>
        <a href="#status" className="nav-link">Status</a>
      </div>

      <div className="flex items-center gap-6">
        <FiGrid className="text-gray-400 hover:text-designColor cursor-pointer transition-colors" />
        <FiTerminal className="text-gray-400 hover:text-designColor cursor-pointer transition-colors" />
        <button className="neon-button hidden sml:block">Connect</button>
      </div>
    </nav>
  );
};

export default Navbar;
