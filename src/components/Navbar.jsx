import React, { useState } from "react";
import cross from "../assets/cross.svg";
import menu from "../assets/menu.svg";
function Navbar() {
    const menuItems = [
        "Team",
        "Events",
        "Alumni",
        "Contact-Us",
        "About"
    ];
    const [isMenuOpen, setIsMenuOpen] = useState(0);
    return (
        <nav className="z-50 fixed top-0 left-0 w-full flex md:text-[17px] justify-center items-center h-[46px] md:h-[54px] bg-[#181818]">
            <div className="z-50 px-2 w-full flex justify-between  md:justify-center items-center gap-6">
                <a href="#"><img src="/logo.png" className="z-50" alt="Logo" width={36} /></a>
                <p className="text-white flex md:hidden text-center text-sm">Civil Engineering Forum</p>
                <img
                    src={menu}
                    alt="Menu"
                    id="menu-button"
                    width={28}
                    onClick={() => {
                        setIsMenuOpen(1);
                    }}
                    style={{ display: isMenuOpen ? "none" : "flex" }}
                    className="md:!hidden cursor-pointer z-50"
                />
                <img
                    src={cross}
                    alt="Back"
                    id="cross-button"
                    width={36}
                    onClick={() => {
                        setIsMenuOpen(0);
                    }}
                    style={{ display: isMenuOpen ? "flex" : "none" }}
                    className="md:!hidden cursor-pointer z-50 mr-[-8px]"
                />
                <div
                    id="menu-backdrop"
                    style={{ display: isMenuOpen ? "flex" : "none" }}
                    onClick={() => {
                        setIsMenuOpen(0);
                    }}
                    className="w-full h-screen z-30 bg-black opacity-40 absolute left-0 top-0 md:!hidden"
                ></div>
                <ul
                style={{right: isMenuOpen ? "0" : "-80vw"}}
                    className="z-40 md:!flex md:flex-row md:!relative md:h-auto  md:w-auto md:bg-inherit md:gap-8 md:!right-0 transition-all duration-500 absolute top-0 w-[80vw] h-screen bg-[#181818] justify-center items-center flex  flex-col gap-4"
                >
                    {menuItems.map((item, key) => (
                        <a
                            onClick={() => {
                                setIsMenuOpen(0);
                            }}
                            href={`#${item}`}
                            key={key}
                            className="text-white"
                        >
                            {item}
                        </a>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
