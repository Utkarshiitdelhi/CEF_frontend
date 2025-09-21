import React from "react";
import demoPerson from "../assets/demo-person.jpg";
import link from "../assets/link.svg";
function MemberCard({
  name = "Not Available",
  designation = "Not Available",
  image = demoPerson,
  color = "#C20007",
  linkedIn = "#",
  year = "",
}) {
  return (
    <div
      id="team-card"
      className="md:hover:scale-105 transition-all duration-200 cursor-pointer select-none bg-white w-[180px] rounded-xl shadow-md shadow-[#00000032] overflow-hidden"
    >
      <div
        id="team-card-up"
        style={{
          background: `linear-gradient(180deg, ${color} 0%, white 100%)`,
        }}
        className="relative w-full h-[108px] rounded-t-xl"
      >
        {year && (
          <h1 className="absolute top-1 left-[50%] translate-x-[-50%] z-10 text-white font-extrabold opacity-60">
            {year}
          </h1>
        )}

        <div
          id="team-card-image"
          className="w-[154px] h-[154px] rounded-full bg-white absolute left-[50%] bottom-0 translate-x-[-50%] translate-y-[50%] border-white border-sold border-[4px] shadow-[#00000032] shadow-sm  overflow-hidden"
        >
          <img
            src={image}
            alt="Image Not Available"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div
        id="team-card-down"
        className="relative w-full h-[153px] rounded-b-xl flex flex-col justify-end items-center pb-2"
      >
        <h2 className="font-[Koulen] text-xl text-center flex flex-col justify-center items-center">
          <p className="flex gap-x-2 justify-center items-center ">
            {name}
            <a target="_blank" href={linkedIn}>
              <img
                src={link}
                alt="LinkedIN"
                width={16}
                className=" object-center cursor-pointer hover:opacity-100 opacity-40 transition-all duration-200 -mt-1"
              />
            </a>
          </p>
          <p className="text-sm line-clamp-1 hover:line-clamp-none"  >
          {designation}
          </p>
        </h2>
      </div>
    </div>
  );
}

export default MemberCard;
