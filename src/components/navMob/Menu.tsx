"use client"
import React from "react";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="md:hidden" onClick={toggleMenu}>
        {
            !menuOpen ? <MenuIcon /> : <XIcon />
        }
      </div>
      <div
        className={`absolute top-[4.5rem] md:opacity-100 right-0 border-solid md:border-none text-base md:text-xs border-white/5 border-[2px]  bg-white/5  backdrop-blur-xs md:backdrop:blur-0 md:bg-transparent rounded-3xl md:p-2 py-4 px-6 flex flex-col   gap-4 ${
          menuOpen ? "block" : "hidden"
        } md:flex md:flex-row md:static`}
      >
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <a href="">Sponsors</a>
        
      </div>
    </div>
  );
}
