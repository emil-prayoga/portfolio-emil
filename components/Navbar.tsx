"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { t, type Locale } from "@/src/data/translations";
import { setLocaleCookie } from "@/src/lib/cookies";

const navLinkKeys = ["home","about","education","experience","portfolio","services","skills"] as const;

export default function Navbar({ locale }: Readonly<{ locale: Locale }>) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const getNavLinks = () => navLinkKeys.map((key) => ({ name: t(locale, `navbar.links.${key}`), href: `#${key}` }));

  const switchLanguage = (targetLocale: Locale) => {
    setLocaleCookie(targetLocale);
    const currentPath = window.location.pathname.replace(/^\/(id|en)(?=\/|$)/, "") || "";
    const targetPath = `/${targetLocale}${currentPath}${window.location.hash}`;
    window.location.href = targetPath;
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") { setIsOpen(false); menuButtonRef.current?.focus(); } };
    const links = getNavLinks();
    const sections = ["#home", ...links.map(({ href }) => href), "#contact"]
      .map((href) => document.querySelector(href)).filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting);
      if (visibleSection) setActiveLink(`#${visibleSection.target.id}`);
    }, { rootMargin: "-25% 0px -65% 0px" });
    sections.forEach((section) => observer.observe(section));
    window.addEventListener("keydown", closeOnEscape);
    return () => { observer.disconnect(); window.removeEventListener("keydown", closeOnEscape); };
  }, [locale]);

  const closeMenu = () => setIsOpen(false);
  const linkClass = (href: string) => `gallery-focus inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition-colors ${activeLink === href ? "bg-white/10 text-white" : "text-[#bcb9b1] hover:text-white"}`;

  const navLinks = getNavLinks();

  return (
    <header className="sticky top-0 z-50">
      <div className="gallery-shell flex min-h-[4.6rem] items-center justify-between gap-5">
        <Link href={`/${locale}#home`} aria-label={t(locale, "navbar.logoAriaLabel")} className="flex items-center gap-3 rounded-md focus-visible:ring-2">
          <span aria-hidden="true" className="grid size-9 place-items-center rounded-full border font-bold">EA</span>
          <span aria-hidden="true" className="leading-tight">
            <span className="block font-semibold">{t(locale, "navbar.brand")}</span>
            <span className="block text-xs tracking-widest text-muted-foreground">{t(locale, "navbar.brandSub")}</span>
          </span>
        </Link>
        <nav aria-label={t(locale, "navbar.ariaLabel")} className="hidden bg-[#101110]/80 backdrop-blur-xl rounded-full border border-white/10 p-1 lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}><Link href={`/${locale}${link.href}`} aria-current={activeLink === link.href ? "location" : undefined} className={linkClass(link.href)}>{link.name}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
        <Link href={`/${locale}#contact`} className="gallery-focus bg-[#101110]/80 backdrop-blur-xl hidden min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-semibold transition-colors hover:border-[#c8f36a] hover:text-[#c8f36a] sm:inline-flex">{t(locale, "navbar.cta")} <span aria-hidden="true">↗</span></Link>
        <button type="button" onClick={() => switchLanguage(locale === "id" ? "en" : "id")} className="gallery-focus inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-3 text-xs font-semibold text-[#f1efe9] transition-colors hover:border-[#c8f36a] hover:text-[#c8f36a]" aria-label={t(locale, "navbar.languageSwitcher")}>
          {locale === "id" ? "EN" : "ID"}
        </button>
        <button ref={menuButtonRef} type="button" onClick={() => setIsOpen((open) => !open)} className="gallery-focus inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/15 text-[#f1efe9] transition-colors hover:border-[#c8f36a] lg:hidden" aria-label={isOpen ? t(locale, "navbar.menuClose") : t(locale, "navbar.menuOpen")} aria-expanded={isOpen} aria-controls="mobile-navigation">
          {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
        </div>
      </div>
      {isOpen && (
        <nav id="mobile-navigation" aria-label={t(locale, "navbar.ariaLabel")} className="border-t border-white/10 bg-[#141417] px-4 py-3 lg:hidden">
          <ul className="gallery-shell grid grid-cols-2 gap-x-4">
            {navLinks.map((link) => (
              <li key={link.href}><Link href={`/${locale}${link.href}`} onClick={closeMenu} aria-current={activeLink === link.href ? "location" : undefined} className="gallery-focus flex min-h-12 items-center border-b border-white/10 text-sm text-[#bcb9b1] hover:text-white">{link.name}</Link></li>
            ))}
          </ul>
          <Link href={`/${locale}#contact`} onClick={closeMenu} className="gallery-shell gallery-focus mt-2 flex min-h-12 items-center text-sm font-semibold text-[#c8f36a]">{t(locale, "navbar.cta")} <span aria-hidden="true">↗</span></Link>
        </nav>
      )}
    </header>
  );
}
