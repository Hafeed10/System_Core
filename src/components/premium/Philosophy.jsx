import React from 'react';
import { FiBox } from 'react-icons/fi';

const Philosophy = () => {
  return (
    <section id="philosophy" className="w-full py-20 px-4 md:px-8 max-w-screen-xl mx-auto">
      <div className="flex justify-between items-end mb-12 border-b border-[#222] pb-4">
        <div>
          <h2 className="text-3xl font-titleFont text-white mb-2">ENGINEERING_PHILOSOPHY</h2>
          <p className="text-xs text-gray-500 tracking-widest uppercase">First Principles Of Synthetic Architecture</p>
        </div>
        <div className="text-designColor text-sm font-titleFont tracking-widest">
          02 // LOGIC
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="space-y-12">
          <div>
            <h4 className="text-designColor text-xs font-titleFont tracking-widest mb-2">PRINCIPLE_01</h4>
            <h3 className="text-lg text-white font-titleFont mb-3">Deterministic Entropy</h3>
            <p className="text-sm text-gray-400 font-bodyFont leading-relaxed">
              Chaos must be authored. We utilize mathematically sound pseudo-random generators to ensure that every "organic" variation is perfectly reproducible across distributed clusters.
            </p>
          </div>
          <div>
            <h4 className="text-designColor text-xs font-titleFont tracking-widest mb-2">PRINCIPLE_02</h4>
            <h3 className="text-lg text-white font-titleFont mb-3">Zero Abstraction Rendering</h3>
            <p className="text-sm text-gray-400 font-bodyFont leading-relaxed">
              We aim to remove the "black box" between the developer and the GPU. Direct memory access and compute-first pipelines are prioritized over convenient frameworks.
            </p>
          </div>
        </div>

        <div className="glass-panel p-1 md:p-2 h-80 flex flex-col items-center justify-center relative overflow-hidden group">
            {/* Center Graphic Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] z-10 pointer-events-none"></div>
            <div className="w-32 h-32 border-2 border-designColor/30 rounded-lg transform rotate-12 flex items-center justify-center relative z-0 transition-transform duration-700 group-hover:rotate-0 group-hover:border-designColor shadow-glow">
                <FiBox className="text-designColor text-4xl" />
            </div>
            
            <div className="absolute bottom-6 z-20 text-center w-full">
                <h4 className="text-white text-sm font-titleFont tracking-widest mb-1">SYNTHETIC_CORE_V4</h4>
                <div className="h-[1px] w-24 bg-designColor mx-auto mb-1"></div>
                <p className="text-[10px] text-gray-500 font-bodyFont tracking-widest">STATE: OPERATIONAL</p>
            </div>
        </div>

        <div className="space-y-12">
          <div>
            <h4 className="text-designColor text-xs font-titleFont tracking-widest mb-2">PRINCIPLE_03</h4>
            <h3 className="text-lg text-white font-titleFont mb-3">Spatial Immediacy</h3>
            <p className="text-sm text-gray-400 font-bodyFont leading-relaxed">
              Interaction latency is a design failure. Our architectures target sub-8ms input-to-photon latency to maintain the illusion of digital physical presence.
            </p>
          </div>
          <div>
            <h4 className="text-designColor text-xs font-titleFont tracking-widest mb-2">PRINCIPLE_04</h4>
            <h3 className="text-lg text-white font-titleFont mb-3">Algorithmic Brutalism</h3>
            <p className="text-sm text-gray-400 font-bodyFont leading-relaxed">
              The aesthetics of the system should emerge from the logic itself. We celebrate the raw output of the noise function and the vertex shader as primary visual elements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
