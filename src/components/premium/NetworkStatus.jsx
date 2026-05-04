import React, { useState, useEffect } from 'react';

const NetworkStatus = () => {
  const [latency, setLatency] = useState(12.4);
  const [nodes, setNodes] = useState(8192);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(10 + Math.random() * 5);
      setNodes(8190 + Math.floor(Math.random() * 10));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="status" className="w-full py-20 px-4 md:px-8 max-w-screen-xl mx-auto">
      <div className="flex justify-between items-end mb-12 border-b border-[#222] pb-4">
        <div>
          <h2 className="text-3xl font-titleFont text-white mb-2">GLOBAL_NETWORK_STATUS</h2>
          <p className="text-xs text-gray-500 tracking-widest uppercase">Real-Time System Telemetry & Node Heartbeat</p>
        </div>
        <div className="text-designColor text-sm font-titleFont tracking-widest">
          04 // PULSE
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="glass-panel p-6 border-l-2 border-l-designColor">
            <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] text-gray-500 tracking-widest font-titleFont uppercase">Network Latency</span>
                <div className="w-2 h-2 bg-designColor rounded-sm"></div>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-titleFont text-white">{latency.toFixed(1)}</span>
                <span className="text-designColor text-sm">ms</span>
            </div>
            <div className="flex gap-1 h-8 items-end opacity-50">
                {[40, 60, 45, 80, 50, 90, 65, 45].map((h, i) => (
                    <div key={i} className="w-full bg-designColor" style={{ height: `${h}%` }}></div>
                ))}
            </div>
        </div>

        <div className="glass-panel p-6 border-l-2 border-l-neonPurple">
            <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] text-gray-500 tracking-widest font-titleFont uppercase">Active Nodes</span>
                <div className="w-2 h-2 bg-neonPurple rounded-sm"></div>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-titleFont text-white">{nodes.toLocaleString()}</span>
                <span className="text-neonPurple text-sm">LIVE</span>
            </div>
            <p className="text-[10px] text-gray-500 font-bodyFont tracking-widest uppercase">North_America // Europe // Asia</p>
        </div>

        <div className="glass-panel p-6 border-l-2 border-l-gray-300">
            <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] text-gray-500 tracking-widest font-titleFont uppercase">Throughput</span>
                <div className="w-2 h-2 bg-gray-300 rounded-sm"></div>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-titleFont text-white">2.4</span>
                <span className="text-gray-300 text-sm">GB/s</span>
            </div>
            <div className="w-full h-1 bg-[#222] mt-8">
                <div className="h-full bg-gray-300 w-[70%]"></div>
            </div>
        </div>
      </div>

      <div className="glass-panel p-6 h-64 md:h-96 relative overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between w-full z-10 text-[10px] text-gray-500 tracking-widest font-titleFont uppercase">
            <span>Global_Telemetry_Stream</span>
            <span>Encryption_Status: AES-256-GCM</span>
          </div>
          
          {/* Map/Visualization Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
             <div className="w-[80%] h-[80%] border border-[#333] rounded-full absolute flex justify-center items-center">
                 <div className="w-[60%] h-[60%] border border-[#444] rounded-full animate-spin-slow"></div>
             </div>
             <div className="absolute w-2 h-2 bg-designColor rounded-full shadow-glow" style={{ top: '30%', left: '40%' }}></div>
             <div className="absolute w-1 h-1 bg-neonPurple rounded-full shadow-glow" style={{ top: '60%', left: '70%' }}></div>
             <div className="absolute w-1.5 h-1.5 bg-designColor rounded-full shadow-glow" style={{ top: '50%', left: '20%' }}></div>
          </div>

          <div className="z-10 text-[10px] font-bodyFont text-designColor tracking-widest space-y-1">
             <p>&gt; Node_7A connected_success</p>
             <p>&gt; Sync_latency_4ms</p>
             <p>&gt; Shader_Cache_invalidated_v4</p>
             <p className="animate-pulse">&gt; Awaiting_input_stream...</p>
          </div>
      </div>
    </section>
  );
};

export default NetworkStatus;
