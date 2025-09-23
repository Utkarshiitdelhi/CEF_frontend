import React, { useState, useEffect } from "react";
import logo from "../assets/ceflogo.png";

// Self-contained SVG icon components
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12.9 14.32a8 8 0 111.414-1.414l3.387 3.386a1 1 0 01-1.414 1.415l-3.387-3.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
      clipRule="evenodd"
    />
  </svg>
);

export default function FancyNavbar() {
  const menuItems = [
    "About",
    "Team",
    "Events",
    "Competitions",
    "Guest Sessions",
    "Magazine",
    "Alumni",
    "Contact Us",
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState(menuItems[0]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // prevent background scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-4 left-0 right-0 mx-auto z-50 transition-all duration-300 ease-in-out px-4 sm:px-6 lg:px-8 ${
        scrolled
          ? "backdrop-blur-md bg-black/50 shadow-lg rounded-xl"
          : "bg-transparent"
      }`}
      style={{ maxWidth: "1200px" }}
    >
      <nav className="flex items-center justify-between h-16">
        {/* Logo + title */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 shadow-xl ring-1 ring-white/10">
              <img
                src={logo}
                alt="CEF Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-white font-extrabold text-sm">
                Civil & Environmental
              </span>
              {/* <span className="text-white/80 text-xs">Engineering Forum</span> */}
            </div>
          </a>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActive(item)}
                className={`relative px-3 py-2 rounded-md text-md font-medium transition-all duration-200 cursor-pointer select-none ${
                  active === item
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item}
                {/* animated underline */}
                <span
                  className={`absolute left-2 right-2 -bottom-1 h-0.5 rounded-full transition-all duration-300 bg-gradient-to-r from-cyan-300 to-blue-500 ${
                    active === item
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0"
                  }`}
                />
              </a>
            ))}
          </div>

          <a
            href="#join"
            className="ml-2 inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-sky-500 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform hover:scale-105 transition-transform"
          >
            Join Us
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Mobile Panel */}
      <div
        className={`fixed inset-0 z-40 transition-opacity md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <aside
          className={`fixed top-6 right-6 w-11/12 max-w-xs h-[calc(100%-3rem)] bg-gradient-to-b from-slate-900/95 to-slate-900/80 rounded-2xl shadow-2xl p-6 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-4 opacity-0"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-white text-lg font-bold">Menu</h3>
              <p className="text-white/60 text-xs">Quick links & resources</p>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white"
            >
              <CrossIcon />
            </button>
          </div>

          <nav className="flex flex-col gap-3">
            {menuItems.map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => {
                  setActive(item);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-150 ${
                  active === item
                    ? "bg-white/6 text-white"
                    : "text-white/80 hover:bg-white/5"
                }`}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                <span className="text-sm font-medium">{item}</span>
              </a>
            ))}
          </nav>

          <div className="mt-6 border-t border-white/6 pt-4 flex flex-col gap-3">
            <a
              href="#join"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-md"
            >
              Join Us
            </a>
            <div className="flex gap-3">
              <a href="#" className="text-white/70 hover:text-white text-sm">
                Instagram
              </a>
              <a href="#" className="text-white/70 hover:text-white text-sm">
                LinkedIn
              </a>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
