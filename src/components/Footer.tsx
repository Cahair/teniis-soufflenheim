import Image from "next/image";
import Link from "next/link";
import { logo } from "@/lib/images";
import { navLinks, site } from "@/lib/data";

function SocialIcon({ path, label }: { path: string; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold-400 hover:text-gold-400"
    >
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor">
        <path d={path} />
      </svg>
    </a>
  );
}

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
            <div className="mt-6 flex gap-3">
              <SocialIcon
                label="Facebook"
                path="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z"
              />
              <SocialIcon
                label="Instagram"
                path="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.3.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.3.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.3-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.9.4-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.3-.4 1.2-.1 1.6-.1 4.8-.1Zm0 2A8 8 0 1 0 12 20 8 8 0 0 0 12 4.2Zm0 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM17.8 5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"
              />
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
