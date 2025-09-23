import React from "react";
import link from "../assets/link.svg";

function About() {
  return (
    <div className="relative rounded-2xl p-6 sm:p-8 bg-white/5 ring-1 ring-white/10 backdrop-blur-md text-white">
      <p className="leading-7 text-white/80">
        The <b className="text-white">Civil Engineering Forum (CEF)</b> is the
        heartbeat of the Civil Engineering Department at IIT Delhi — a community
        built on excellence, innovation, and leadership. As the department's
        official society, CEF nurtures intellectual growth, technical mastery,
        and collaboration among students. With a commitment to advancing the
        department's legacy, CEF inspires future pioneers while honoring IIT
        Delhi’s rich civil engineering heritage.
      </p>
      <a
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 mt-4 text-cyan-300 hover:text-cyan-200 transition-colors"
        href="https://home.iitd.ac.in/index.php"
      >
        <span className="underline underline-offset-4">Visit IIT Delhi</span>
        <img src={link} alt="Go to" width={16} height={16} />
      </a>
    </div>
  );
}

export default About;
