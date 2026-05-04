import React from "react";
import Navbar from "./components/premium/Navbar";
import Hero from "./components/premium/Hero";
import CoreCompetencies from "./components/premium/CoreCompetencies";
import Philosophy from "./components/premium/Philosophy";
import Experiments from "./components/premium/Experiments";
import NetworkStatus from "./components/premium/NetworkStatus";
import Footer from "./components/premium/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-bodyColor text-lightText font-bodyFont relative">
      {/* Grid background overlay */}
      <div className="grid-overlay"></div>
      
      {/* Content wrapper relative to grid */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <CoreCompetencies />
          <Philosophy />
          <Experiments />
          <NetworkStatus />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
