import React from "react";
import MemberCard from "./MemberCard";
import { TeamData } from "../data/team";
function Team() {
    return (
        <section id="Team" className="bg-gray-700">
            <h1 className=" font-bold text-center text-xl">Team</h1>
            {TeamData.Faculty.length != 0 && (
                <div
                    id="team-section"
                    className="w-full flex flex-col gap-6 justify-center items-center px-2 py-6"
                >
                    <h2 className="text-center font-bold italic text-sm">
                        Faculty Team
                    </h2>
                    {TeamData.length == 0 && "No Team Members Found"}
                    <div className="flex gap-8 md:gap-16 justify-center items-center flex-wrap">
                        {TeamData.Faculty.Tier1.map((item, key) => {
                            return (
                                <MemberCard
                                    designation={item.desg}
                                    name={item.name}
                                    image={item.img}
                                    key={key}
                                    linkedIn={item.linkedIn}
                                />
                            );
                        })}
                    </div>
                    <div className="flex gap-8 md:gap-24 justify-center items-center flex-wrap md:mt-10">
                        {TeamData.Faculty.Tier2.map((item, key) => {
                            return (
                                <MemberCard
                                    designation={item.desg}
                                    name={item.name}
                                    image={item.img}
                                    key={key}
                                    linkedIn={item.linkedIn}
                                />
                            );
                        })}
                    </div>
                </div>
            )}{" "}
            {TeamData.Core.length != 0 && (
                <div
                    id="team-section"
                    className="w-full flex flex-col gap-6 justify-center items-center px-2 py-6"
                >
                    <h2 className="text-center font-bold italic text-sm">
                        Core Team
                    </h2>
                    {TeamData.length == 0 && "No Team Members Found"}
                    <div className="flex gap-8 md:gap-16 justify-center items-center flex-wrap">
                        {TeamData.Core.Tier1.map((item, key) => {
                            return (
                                <MemberCard
                                    designation={item.desg}
                                    name={item.name}
                                    image={item.img}
                                    key={key}
                                    linkedIn={item.linkedIn}
                                />
                            );
                        })}
                    </div>
                    <div className="flex gap-8 md:gap-16 justify-center items-center flex-wrap md:mt-10">
                        {TeamData.Core.Tier2.map((item, key) => {
                            return (
                                <MemberCard
                                    designation={item.desg}
                                    name={item.name}
                                    image={item.img}
                                    key={key}
                                    linkedIn={item.linkedIn}
                                />
                            );
                        })}
                    </div>
                </div>
            )}{" "}
            {TeamData.Executives.length != 0 && (
                <div
                    id="team-section"
                    className="w-full flex flex-col gap-6 justify-center items-center px-2 py-6"
                >
                    <h2 className="text-center font-bold italic text-sm">
                        Executives Team
                    </h2>
                    {TeamData.length == 0 && "No Team Members Found"}
                    <div className="flex gap-16 justify-center items-center flex-wrap">
                        {TeamData.Executives.map((item, key) => {
                            return (
                                <MemberCard
                                    designation={item.desg}
                                    name={item.name}
                                    image={item.img}
                                    key={key}
                                    linkedIn={item.linkedIn}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </section>
    );
}

export default Team;
