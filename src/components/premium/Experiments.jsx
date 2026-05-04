import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const Experiments = () => {
  const projects = [
    {
      title: "VOXEL_FLUID_RENDERER",
      desc: "Real-time point cloud reconstruction from live video buffer. Uses GPGPU sorting for depth-ordered transparency.",
      status: "DEPRECATED_V1",
      statusColor: "text-designColor border-designColor",
      imgPlaceholder: "bg-gradient-to-tr from-[#0a0a0a] to-[#1a1a2e]" // Placeholder for blue/red fluid image
    },
    {
      title: "PROCEDURAL_SPHERE_GEN",
      desc: "Infinite terrain synthesis using layered Simplex noise and erosion simulation. 100% shader-driven geometry.",
      status: "EXPERIMENTAL_BETA",
      statusColor: "text-neonPurple border-neonPurple",
      imgPlaceholder: "bg-gradient-to-tr from-[#051111] to-[#112211]" // Placeholder for green sphere
    }
  ];

  return (
    <section id="experiments" className="w-full py-20 px-4 md:px-8 max-w-screen-xl mx-auto">
      <div className="flex justify-between items-end mb-12 border-b border-[#222] pb-4">
        <div>
          <h2 className="text-3xl font-titleFont text-white mb-2">LIVE_EXPERIMENTS</h2>
          <p className="text-xs text-gray-500 tracking-widest uppercase">Interactive WebGL / WebGPU Prototypes</p>
        </div>
        <div className="text-designColor text-sm font-titleFont tracking-widest">
          03 // PROTOS
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className={`w-full h-64 md:h-80 ${proj.imgPlaceholder} border border-[#222] rounded-t-md relative overflow-hidden flex items-center justify-center transition-colors duration-500 group-hover:border-[#444]`}>
                {/* Simulated 3D Graphic representation */}
                <div className="absolute top-4 right-4 text-[10px] px-2 py-1 border rounded-full font-titleFont tracking-widest bg-black/50 backdrop-blur-sm flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-current ${proj.statusColor.split(' ')[0]}`}></div>
                    <span className={proj.statusColor.split(' ')[0]}>{proj.status}</span>
                </div>
                
                {/* Abstract shape */}
                <div className={`w-32 h-32 rounded-full border border-current opacity-20 ${proj.statusColor.split(' ')[0]} animate-pulse`}></div>
            </div>
            <div className="border border-t-0 border-[#222] rounded-b-md p-4 bg-[#111] group-hover:bg-[#151515] transition-colors flex justify-between items-start">
                <div>
                    <h3 className="text-white font-titleFont mb-2 uppercase tracking-wide">{proj.title}</h3>
                    <p className="text-sm text-gray-400 font-bodyFont leading-relaxed max-w-sm">{proj.desc}</p>
                </div>
                <FiExternalLink className="text-gray-500 group-hover:text-designColor transition-colors mt-1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiments;
