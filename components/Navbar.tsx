"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Pendidikan", href: "#education" },
    { name: "Pengalaman", href: "#experience" },
    { name: "Proyek", href: "#projects" },
    { name: "Keahlian", href: "#skills" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto relative">
        
        {/* BAR NAVBAR UTAMA */}
        <nav className="flex items-center justify-between px-5 py-3 rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-neutral-800/80 shadow-lg">
          
          {/* LOGO */}
          <h2
            className=" font-bold text-neutral-100 text-lg tracking-tight "
          >
            <span>Emil<span className="text-emerald-400"> Prayoga Albani</span></span>
          </h2>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-neutral-400">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-3 py-1.5 rounded-lg hover:text-neutral-100 hover:bg-neutral-800/60 transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>


          {/* HAMBURGER BUTTON (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-neutral-800/60 border border-neutral-700/60 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* MOBILE MENU DROPDOWN */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-neutral-900/95 backdrop-blur-xl border border-neutral-800 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col gap-2 text-sm font-medium text-neutral-300">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 rounded-xl hover:bg-neutral-800 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
           
            </ul>
          </div>
        )}

      </div>
    </header>
  );
}