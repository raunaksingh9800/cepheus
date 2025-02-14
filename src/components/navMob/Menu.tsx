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
    <div className="">
      <div className="md:hidden" onClick={toggleMenu}>
        {
            !menuOpen ? <MenuIcon /> : <XIcon />
        }
      </div>

    <div className={`
     backdrop-blur-sm
     z-50
        ${ menuOpen? 'flex' : 'hidden' }
        bg-white/5
        md:flex md:flex-row md:static
        absolute top-[4.5rem] right-0 
        border-solid md:border-none
        border-white/5 border-[2px] 
        rounded-3xl md:bg-transparent
        flex-col md:text-xs gap-4 px-6 py-4 md:p-2`}>
      <a href="">About Us</a>
      <a href="">Contact Us</a>
      <a href="">Sponsors</a>
    </div>
    </div>
  );
}
