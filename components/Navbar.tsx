"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Beranda", href:"#home"},
  { name: "Tentang", href: "#about" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Portofolio", href: "#portfolio" },
  { name: "Keahlian", href: "#skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setIsOpen(false); };
    const sections = ["#home", ...navLinks.map(({ href }) => href), "#education", "#contact"]
      .map((href) => document.querySelector(href)).filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting);
      if (visibleSection) setActiveLink(`#${visibleSection.target.id}`);
    }, { rootMargin: "-25% 0px -65% 0px" });
    sections.forEach((section) => observer.observe(section));
    window.addEventListener("keydown", closeOnEscape);
    return () => { observer.disconnect(); window.removeEventListener("keydown", closeOnEscape); };
  }, []);

  const closeMenu = () => setIsOpen(false);
  const linkClass = (href: string) => `gallery-focus inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition-colors ${activeLink === href ? "bg-white/10 text-white" : "text-[#bcb9b1] hover:text-white"}`;

  return (
    <header className="sticky top-0 z-50">
      <div className="gallery-shell flex min-h-[4.6rem] items-center justify-between gap-5">
        <a href="#home" onClick={closeMenu} className="gallery-focus flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#c8f36a] text-sm font-black tracking-[-.08em] text-[#101110]">EA</span>
          <span className="flex flex-col leading-none"><span className="text-sm font-semibold tracking-wide text-[#f1efe9]">EMIL PRAYOGA</span><span className="mt-1.5 text-[0.62rem] tracking-[0.14em] text-[#89877f]">PORTFOLIO</span></span>
        </a>
        <nav aria-label="Navigasi utama" className="hidden bg-[#101110]/80 backdrop-blur-xl rounded-full border border-white/10  p-1 lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => <li key={link.href}><a href={link.href} aria-current={activeLink === link.href ? "location" : undefined} className={linkClass(link.href)}>{link.name}</a></li>)}
          </ul>
        </nav>
        <a href="#contact" className="gallery-focus bg-[#101110]/80 backdrop-blur-xl hidden min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-semibold transition-colors hover:border-[#c8f36a] hover:text-[#c8f36a] sm:inline-flex">Mari terhubung <span aria-hidden="true">↗</span></a>
        <button type="button" onClick={() => setIsOpen((open) => !open)} className="gallery-focus inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/15 text-[#f1efe9] transition-colors hover:border-[#c8f36a] lg:hidden" aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"} aria-expanded={isOpen} aria-controls="mobile-navigation">
          {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>
      {isOpen && <nav id="mobile-navigation" aria-label="Navigasi utama" className="border-t border-white/10 bg-[#141417] px-4 py-3 lg:hidden"><ul className="gallery-shell grid grid-cols-2 gap-x-4">{navLinks.map((link) => <li key={link.href}><a href={link.href} onClick={closeMenu} aria-current={activeLink === link.href ? "location" : undefined} className="gallery-focus flex min-h-12 items-center border-b border-white/10 text-sm text-[#bcb9b1] hover:text-white">{link.name}</a></li>)}</ul><a href="#contact" onClick={closeMenu} className="gallery-shell gallery-focus mt-2 flex min-h-12 items-center text-sm font-semibold text-[#c8f36a]">Mari terhubung ↗</a></nav>}
    </header>
  );
}
