"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoMark from "./LogoMark";
import { navLinks, site } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-pine-950/90 shadow-lg shadow-pine-950/20 backdrop-blur-md"
          : "bg-gradient-to-b from-pine-950/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <LogoMark />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/10 text-gold-300"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/#reservation" className="btn btn-gold ml-3 !px-5 !py-2.5 text-sm">
            Réserver un court
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
          aria-label="Ouvrir le menu"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h10" />
          </svg>
        </button>
      </div>
    </header>

    {/* Menu mobile plein écran — hors du <header> : son backdrop-blur
        ferait sinon office de containing block pour ce position:fixed */}
    <div
      className={`fixed inset-0 z-50 flex flex-col bg-pine-950 transition-all duration-300 lg:hidden ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
        <div className="flex h-20 items-center justify-between px-4 sm:px-6">
          <LogoMark onNavigate={() => setOpen(false)} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
            aria-label="Fermer le menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-2 px-8" aria-label="Navigation mobile">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 40}ms` }}
              className={`display text-4xl text-white/90 transition-all duration-500 hover:text-gold-400 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#reservation"
            onClick={() => setOpen(false)}
            className="btn btn-gold mt-8 self-start"
          >
            Réserver un court
          </Link>
        </nav>
        <div className="px-8 pb-10 text-sm text-white/50">
          <p>{site.address.street} — {site.address.city}</p>
          <p className="mt-1">{site.phoneClub}</p>
        </div>
    </div>
    </>
  );
}

