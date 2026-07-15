import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { sponsors } from "@/lib/data";

export default function Sponsors() {
  const loop = [...sponsors, ...sponsors];
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            kicker="Partenaires"
            title="Ils font gagner le club"
            text="Commerçants et artisans locaux soutiennent le TPCS saison après saison. Merci à eux !"
          />
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="marquee relative mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
          <div className="marquee-track flex gap-5">
            {loop.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="display whitespace-nowrap rounded-full border border-pine-100 bg-cream-50 px-8 py-4 text-lg tracking-wide text-pine-700"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="mx-auto mt-12 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-dashed border-pine-300 px-7 py-4 font-semibold text-pine-700 transition-colors hover:border-gold-500 hover:text-gold-600"
          >
            Votre entreprise ici ? Devenez partenaire
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m0 0-6-6m6 6-6 6" />
            </svg>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
