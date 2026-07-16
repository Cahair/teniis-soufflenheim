import Image from "next/image";
import Link from "next/link";
import { logo } from "@/lib/images";
import { navLinks, site } from "@/lib/data";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-pine-950 text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Image
              src={logo}
              alt="Logo du Tennis Padel Club Soufflenheim"
              className="h-20 w-auto rounded-xl bg-white p-2"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Tennis, padel et pickleball au cœur du pays des potiers, depuis
              1979. Un club de village, une ambiance de famille.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div>
            <h3 className="display text-sm tracking-[0.2em] text-gold-400">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="display text-sm tracking-[0.2em] text-gold-400">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                {site.address.street}
                <br />
                {site.address.city}
              </li>
              <li>
                <a href="tel:+33388867908" className="hover:text-gold-300">
                  {site.phoneClub}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.emails.president}`}
                  className="hover:text-gold-300"
                >
                  {site.emails.president}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.emails.secretariat}`}
                  className="hover:text-gold-300"
                >
                  {site.emails.secretariat}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="display text-sm tracking-[0.2em] text-gold-400">
              Réserver un court
            </h3>
            <p className="mt-5 text-sm leading-relaxed">
              Licenciés : plateforme officielle Ten&rsquo;up.
              <br />
              Non-licenciés : application Anybuddy.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={site.links.tenup}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold !px-5 !py-2.5 text-sm"
              >
                Ten&rsquo;up
              </a>
              <a
                href={site.links.anybuddy}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light !px-5 !py-2.5 text-sm"
              >
                Anybuddy
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/40 sm:px-6 md:flex-row lg:px-8">
          <p>
            © 2026 {site.name} — Tous droits réservés · Club fondé en 1979
          </p>
          <p>Maquette de démonstration — contenus et tarifs indicatifs</p>
        </div>
      </div>
    </footer>
  );
}
