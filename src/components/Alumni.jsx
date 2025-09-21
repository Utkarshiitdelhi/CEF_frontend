import React, { useEffect, useState } from "react";
import MemberCard from "./MemberCard";
import { AlumniData } from "../data/alumni";
import { Carousel, Slider } from "@material-tailwind/react";
function Alumni() {
  return (
    <section id="Alumni" className="bg-white">
      <h1 className=" font-bold text-center text-xl">Alumni</h1>
      {AlumniData.length != 0 && (
        <div
          id="Alumni-section"
          className="w-full flex flex-col gap-6 justify-center items-center px-2 py-6"
        >
          <div className="flex gap-8 md:gap-16 justify-center items-center flex-wrap">
            {AlumniData.map((item, key) => {
              return (
                <MemberCard
                  designation={item.desg}
                  name={item.name}
                  image={item.img}
                  key={key}
                  year={item.year}
                  linkedIn={item.linkedIn}
                  color="#00aaff"
                />
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

export default Alumni;
