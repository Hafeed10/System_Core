import React from 'react';
import { FiShare2, FiSettings, FiActivity, FiBox } from 'react-icons/fi';

const CoreCompetencies = () => {
  const competencies = [
    {
      icon: <FiShare2 className="text-designColor text-2xl" />,
      title: "Low-Level Graphics",
      desc: "Expertise in GLSL shader development, Vulkan pipelines, and custom APIs for maximum hardware efficiency.",
      tags: ["GLSL", "VULKAN", "WEBGPU"],
      cols: "md:col-span-1"
    },
    {
      icon: <FiSettings className="text-neonPurple text-2xl" />,
      title: "System Design",
      desc: "Memory-safe engine architecture using Rust.",
      tags: ["RUST_CARGO"],
      cols: "md:col-span-1"
    },
    {
      icon: <FiActivity className="text-gray-300 text-2xl" />,
      title: "Performance",
      desc: "Highly optimized C++ for real-time simulation.",
      tags: ["CPP_20_STD"],
      cols: "md:col-span-1"
    },
    {
      icon: <div className="w-16 h-16 rounded-full border border-gray-600 flex items-center justify-center opacity-50"><FiBox /></div>, // Placeholder for procedural graphic
      title: "Procedural Synthesis",
      desc: "Creating infinite digital landscapes through mathematical noise and algorithmic generation.",
      tags: [],
      link: "LEARN_MORE >",
      cols: "md:col-span-2",
      isGraphic: true
    },
    {
      icon: <FiBox className="text-designColor text-2xl absolute top-6 right-6" />,
      title: "Spatial Computing",
      desc: "Developing WebXR experiences that bridge the gap between browser and headset, focusing on hand-tracking and spatial UI.",
      tags: ["WEBXR", "THREEJS"],
      cols: "md:col-span-1",
      isGraphic: false
    }
  ];

  return (
    <section id="exhibits" className="w-full py-20 px-4 md:px-8 max-w-screen-xl mx-auto">
      <div className="flex justify-between items-end mb-12 border-b border-[#222] pb-4">
        <div>
          <h2 className="text-3xl font-titleFont text-white mb-2">CORE_COMPETENCIES</h2>
          <p className="text-xs text-gray-500 tracking-widest uppercase">Strategic Technical Stack For 3D Architecture</p>
        </div>
        <div className="text-designColor text-sm font-titleFont tracking-widest">
          01 // STACK
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {competencies.map((comp, index) => (
          <div key={index} className={`glass-panel p-6 md:p-8 flex flex-col justify-between ${comp.cols} relative group overflow-hidden`}>
            {/* Background noise/grid could go here */}
            
            <div className="z-10">
              {comp.isGraphic ? (
                <div className="flex items-center gap-6 mb-4">
                    {comp.icon}
                    <div>
                        <h3 className="text-xl font-titleFont text-white mb-2">{comp.title}</h3>
                        <p className="text-sm text-gray-400 font-bodyFont leading-relaxed max-w-sm">{comp.desc}</p>
                        {comp.link && <p className="text-xs text-designColor mt-4 font-titleFont tracking-widest cursor-pointer">{comp.link}</p>}
                    </div>
                </div>
              ) : (
                <>
                    <div className="mb-6">{comp.icon}</div>
                    <h3 className="text-xl font-titleFont text-white mb-3">{comp.title}</h3>
                    <p className="text-sm text-gray-400 font-bodyFont leading-relaxed mb-6">{comp.desc}</p>
                </>
              )}
            </div>

            {comp.tags.length > 0 && (
              <div className="flex gap-2 mt-auto z-10 flex-wrap">
                {comp.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] border border-[#333] bg-[#0a0a0a] px-2 py-1 text-gray-400 tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreCompetencies;
