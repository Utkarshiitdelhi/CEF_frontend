import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import SpecialCarousel from "./components/SpecialCarousel";
import ContactUs from "./components/ContactUs";
import Flagship from "./components/Flagship";
import Alumni from "./components/Alumni";
import About from "./components/About";
function App() {
    return (
        <main className="w-full h-full bg-black">
            <>
                <Navbar />
                {/* <div className="h-[46px] w-full "></div>
                {/* <SpecialCarousel name="Landing" /> */}
                {/* <div className="absolute  text-xl"> */} 
                <Team />
                {/* <Flagship/> */}
                {/* <SpecialCarousel name="Events" /> */}
                <Alumni/>
                <About/>
                <ContactUs />
            </>
        </main>
    );
}

export default App;
