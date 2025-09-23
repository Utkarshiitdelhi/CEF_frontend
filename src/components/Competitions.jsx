import React from "react";

const cards = [
  {
    title: "Bridge Design Challenge",
    desc: "Test your structural intuition in a timed design sprint.",
  },
  {
    title: "Sustainability Hackathon",
    desc: "Innovate eco-friendly solutions for campus infrastructure.",
  },
  {
    title: "GeoTech Case Study",
    desc: "Analyze real-world soil data and propose safe foundations.",
  },
  {
    title: "BIM Modelling Sprint",
    desc: "Collaborative modelling using modern BIM workflows.",
  },
  {
    title: "Hydraulics Simulation Cup",
    desc: "Optimize flow networks for efficiency and resilience.",
  },
  {
    title: "Concrete Mix-Off",
    desc: "Engineer the strongest mix under strict constraints.",
  },
];

export default function Competitions() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <div
            key={i}
            className="relative rounded-2xl p-5 bg-white/5 ring-1 ring-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
          >
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-sky-500/5 to-indigo-500/10" />
            <h3 className="text-lg font-semibold text-white/90">{c.title}</h3>
            <p className="mt-1 text-white/70 text-sm">{c.desc}</p>
            <div className="mt-4 flex items-center gap-3">
              <button className="px-3 py-1.5 text-sm rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 text-black font-semibold shadow hover:brightness-95">
                Learn More
              </button>
              <span className="text-white/50 text-xs">Coming soon</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
