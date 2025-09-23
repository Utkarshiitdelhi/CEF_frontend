import React from "react";
import demoPerson from "../assets/demo-person.jpg";
import link from "../assets/link.svg";

function MemberCard({
  name = "Not Available",
  designation = "Not Available",
  image = demoPerson,
  color = "#0ea5e9",
  linkedIn = "#",
  year = "",
}) {
  return (
    <div
      id="team-card"
      className="relative cursor-pointer select-none w-[220px] rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        boxShadow:
          "0 8px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        id="team-card-up"
        style={{
          background: `linear-gradient(180deg, ${color} 0%, rgba(2,6,23,0.8) 100%)`,
        }}
        className="relative w-full h-[120px]"
      >
        {year && (
          <div className="absolute top-2 right-2 text-[10px] font-semibold bg-black/40 text-white/80 px-2 py-0.5 rounded-full">
            {year}
          </div>
        )}

        <div
          id="team-card-image"
          className="w-[160px] h-[160px] rounded-full bg-white/90 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 border border-white/20 shadow-[0_10px_40px_rgba(14,165,233,0.25)] overflow-hidden"
        >
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
      </div>
      <div
        id="team-card-down"
        className="relative w-full h-[170px] flex flex-col justify-end items-center pb-4 text-white"
      >
        <h2 className="font-semibold text-lg text-center flex flex-col justify-center items-center">
          <p className="flex gap-x-2 justify-center items-center">
            <span className="text-white/90">{name}</span>
            <a
              target="_blank"
              href={linkedIn}
              rel="noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <img src={link} alt="LinkedIn" width={16} className="-mt-0.5" />
            </a>
          </p>
          <p className="text-xs text-white/70 mt-1 line-clamp-1 hover:line-clamp-none px-3">
            {designation}
          </p>
        </h2>
      </div>
    </div>
  );
}

export default MemberCard;
