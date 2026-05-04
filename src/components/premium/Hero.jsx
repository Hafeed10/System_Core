import React from 'react';
import { FiArrowRight, FiTerminal } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="w-full pt-32 pb-20 min-h-screen flex flex-col items-center justify-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-designColor/5 rounded-full blur-[100px] z-0 pointer-events-none"></div>
      
      {/* Decorative center graphic representation */}
      <div className="w-64 h-64 border border-[#222] rounded-full absolute top-[15%] flex items-center justify-center z-0 opacity-30">
        <div className="w-48 h-48 border border-designColor/30 rounded-full flex items-center justify-center">
            <div className="w-32 h-32 border border-[#333] rounded-full"></div>
        </div>
      </div>

      <div className="z-10 flex flex-col items-center text-center max-w-4xl px-4 mt-20">
        <div className="flex items-center gap-2 border border-designColor/50 px-4 py-1 rounded-full mb-6 bg-designColor/10">
          <div className="w-2 h-2 bg-designColor rounded-full animate-pulse"></div>
          <span className="text-[10px] text-designColor tracking-widest font-titleFont uppercase">System Status: Operational</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-titleFont font-bold text-white mb-6 leading-tight">
          ENGINEERING_<span className="text-designColor">DIGITAL</span>_REALITIES
        </h1>
        
        <p className="text-lightText text-sm md:text-base mb-10 max-w-2xl font-bodyFont leading-relaxed">
          Architecting high-performance 3D engines, procedural shaders, and complex distributed systems. Transforming abstract code into immersive, real-time spatial experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button className="flex items-center gap-2 bg-designColor text-black px-8 py-3 font-titleFont text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            VIEW_EXPERIMENTS <FiArrowRight />
          </button>
          <button className="flex items-center gap-2 border border-[#333] text-gray-300 px-8 py-3 font-titleFont text-sm tracking-widest hover:border-designColor hover:text-designColor transition-all duration-300 bg-black/50">
            READ_TECHNICAL_LOGS <FiTerminal />
          </button>
        </div>
      </div>
      
      {/* Bottom slider indicator */}
      <div className="absolute bottom-10 flex items-center gap-4 text-xs text-gray-500 font-bodyFont w-full max-w-md mx-auto justify-center">
         <span>0</span>
         <div className="flex-1 h-[1px] bg-[#333] relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-2 h-2 bg-designColor rounded-full"></div>
         </div>
         <span>1</span>
      </div>
    </section>
  );
};

export default Hero;
