import React from "react";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
// import SpecialCarousel from "./components/SpecialCarousel";
import ContactUs from "./components/ContactUs";
import Flagship from "./components/Flagship";
import Alumni from "./components/Alumni";
import About from "./components/About";
import SectionHeading from "./components/SectionHeading";
import Competitions from "./components/Competitions";
import GuestSessions from "./components/GuestSessions";
import Magazine from "./components/Magazine";

function App() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />
      {/* Spacer below fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      {/* <section id="landing" className="relative">
        <SpecialCarousel name="Landing" /> */}
        {/* Subtle overlay gradient to improve readability */}
        {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" />
      </section> */}

      {/* About Section */}
      <section
        id="about"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <SectionHeading
          title="About CEF"
          subtitle="Civil & Environmental Engineering Forum at IIT Delhi — fostering innovation, leadership, and community."
        />
        <About />
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <SectionHeading
          title="Our Team"
          subtitle="Meet the faculty, core team, and executives driving CEF forward."
        />
        <Team />
      </section>

      {/* Events Section */}
      <section
        id="events"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <SectionHeading
          title="Events"
          subtitle="Highlights from our latest events, competitions, and guest sessions."
        />
        <SpecialCarousel name="Events" />
      </section>

      {/* Competitions Section */}
      <section
        id="competitions"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <SectionHeading
          title="Competitions"
          subtitle="From design sprints to simulation cups — challenge yourself and learn by doing."
        />
        <Competitions />
      </section>

      {/* Guest Sessions Section */}
      <section
        id="guest-sessions"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <SectionHeading
          title="Guest Sessions"
          subtitle="Talks and discussions with industry leaders and researchers."
        />
        <GuestSessions />
      </section>

      {/* Magazine Section */}
      <section
        id="magazine"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <SectionHeading
          title="Magazine"
          subtitle="Curated stories, insights, and research from the CEF community."
        />
        <Magazine />
      </section>

      {/* Alumni Section */}
      <section
        id="alumni"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <SectionHeading
          title="Alumni"
          subtitle="Celebrating the journeys of our distinguished alumni."
        />
        <Alumni />
      </section>

      {/* Contact Section */}
      <section
        id="contact-us"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <SectionHeading
          title="Get in Touch"
          subtitle="Reach us on email or social platforms."
        />
        <ContactUs />
      </section>
    </main>
  );
}

  

export default App;
