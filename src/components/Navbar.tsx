"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoMark from "./LogoMark";
import SocialLinks from "./SocialLinks";
import { navLinks } from "@/lib/nav";
import type { SiteSettings, Social } from "@/lib/content-types";

export default function Navbar({
  site,
  socials,
}: {
  site: SiteSettings;
  socials: Social[];
}) {
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
            const hrefs = [
              link.href,
              ...(link.children?.map((c) => c.href) ?? []),
            ];
            const active =
              link.href === "/"
                ? pathname === "/"
                : hrefs.some((h) => pathname.startsWith(h));
            const itemClass = `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active
                ? "bg-white/10 text-gold-300"
                : "text-white/80 hover:bg-white/5 hover:text-white"
            }`;
            if (!link.children) {
              return (
                <Link key={link.href} href={link.href} className={itemClass}>
                  {link.label}
                </Link>
              );
            }
            return (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-1.5 ${itemClass}`}
                >
                  {link.label}
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Link>
                {/* pt-2 : pont invisible pour garder le survol entre le lien et le panneau */}
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[13rem] rounded-2xl border border-white/10 bg-pine-950/95 p-2 shadow-xl shadow-pine-950/40 backdrop-blur-md">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                          pathname.startsWith(child.href)
                            ? "bg-white/10 text-gold-300"
                            : "text-white/80 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
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
          {navLinks.map((link, i) => {
            const revealClass = `transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`;
            if (!link.children) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: `${i * 40}ms` }}
                  className={`display text-4xl text-white/90 hover:text-gold-400 ${revealClass}`}
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <div
                key={link.href}
                style={{ transitionDelay: `${i * 40}ms` }}
                className={revealClass}
              >
                <span className="display text-4xl text-white/40">
                  {link.label}
                </span>
                <div className="mt-1 flex flex-col gap-1 border-l border-white/15 pl-5">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="display text-2xl text-white/90 hover:text-gold-400"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          <Link
            href="/#reservation"
            onClick={() => setOpen(false)}
            className="btn btn-gold mt-8 self-start"
          >
            Réserver un court
          </Link>
        </nav>
        <div className="px-8 pb-10 text-sm text-white/50">
          <div className="mb-5">
            <SocialLinks socials={socials} />
          </div>
          <p>{site.address.street} — {site.address.city}</p>
          <p className="mt-1">{site.phoneClub}</p>
        </div>
    </div>
    </>
  );
}

