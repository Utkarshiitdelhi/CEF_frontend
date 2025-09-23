import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
// import SpecialCarousel from "./components/SpecialCarousel";
import ContactUs from "./components/ContactUs";
import Flagship from "./components/Flagship";
import Alumni from "./components/Alumni";
import About from "./components/About";
import LandingPage from "./pages/LandingPage";
import cefbg from "./assets/cefbg.jpg";

function App() {
  return (
    <main className="relative min-h-screen">
      {/* Fixed background image (behind everything) */}
      <img
        src={cefbg}
        alt=""                 // decorative -> empty alt
        aria-hidden="true"
        className="fixed inset-0 w-full h-full object-cover"
        style={{ zIndex: -1 }}
      />

      {/* optional overlay for contrast */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -1,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.18))'
        }}
      />

      {/* Your content */}
      <>
        <Navbar />
        <LandingPage />
      </>
    </main>
  )
}

  

export default App;
