import Image from "next/image";
import Link from "next/link";
import CourtLines from "@/components/CourtLines";
import Reveal from "@/components/Reveal";
import { padelCourt, terrasseClub } from "@/lib/images";

export default function Hero() {
  return (
    <section className="hero relative overflow-hidden bg-pine-950 pb-24 pt-28 sm:pt-36 lg:pt-40">
      {/* Photo de fond — mobile & tablette */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src={padelCourt}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pine-950/85 via-pine-950/70 to-pine-950" />
      </div>

      {/* Décors de fond */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70rem 40rem at 80% -20%, rgba(237,177,17,0.16), transparent 60%), radial-gradient(50rem 30rem at -10% 110%, rgba(63,122,103,0.35), transparent 60%)",
        }}
      />
      <CourtLines className="absolute -bottom-32 -left-40 hidden h-[36rem] w-auto -rotate-12 text-white/[0.045] lg:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* Colonne texte */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gold-300 backdrop-blur sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
              </span>
              Depuis 1979 · Soufflenheim, Alsace du Nord
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="hero-title display mt-5 text-[2.6rem] text-white sm:mt-6 sm:text-7xl lg:text-[5.2rem]">
              Tennis, padel
              <br />
              <span className="text-gold-400">&amp; pickleball</span>
              <br />
              comme à la maison
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
              Au cœur du pays des potiers, le TPCS vous accueille sur ses courts
              de tennis, sa piste de padel dernière génération et ses terrains
              de découverte. Réservez en ligne, venez jouer, restez pour la
              troisième mi-temps.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link href="/#reservation" className="btn btn-gold">
                Réserver un court
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m0 0-6-6m6 6-6 6" />
                </svg>
              </Link>
              <Link href="/le-club" className="btn btn-outline-light">
                Découvrir le club
              </Link>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="hero-trust mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60 sm:mt-12 sm:gap-y-4">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 13 4 4L19 7" />
                </svg>
                Club affilié FFT
              </span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 13 4 4L19 7" />
                </svg>
                Réservation en ligne 7j/7
              </span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 13 4 4L19 7" />
                </svg>
                Ouvert aux non-licenciés
              </span>
            </div>
          </Reveal>
        </div>

        {/* Colonne image — desktop uniquement (la photo passe en fond sur mobile) */}
        <Reveal direction="zoom" delay={200} className="relative hidden w-full lg:block">
          <div className="absolute -inset-3 translate-x-5 translate-y-5 rounded-t-[10rem] rounded-b-[2.5rem] border-2 border-gold-500/40" />
          <div className="hero-media relative aspect-[3/4] overflow-hidden rounded-t-[10rem] rounded-b-[2.5rem] shadow-2xl shadow-pine-950/60 ring-1 ring-white/15">
            <Image
              src={padelCourt}
              alt="La piste de padel SLAMCOURT du club sous le soleil"
              fill
              priority
              placeholder="blur"
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pine-950/50 via-transparent to-transparent" />
          </div>

          {/* Badge flottant : nouveauté padel */}
          <div className="animate-float absolute -left-6 top-16 hidden items-center gap-3 rounded-2xl bg-white p-3.5 pr-5 shadow-2xl shadow-pine-950/40 sm:flex">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500 text-xl">
              🎾
            </span>
            <span>
              <span className="block text-sm font-bold text-pine-950">
                Piste de padel
              </span>
              <span className="block text-xs text-pine-950/55">
                Dernière génération — réservable 7j/7
              </span>
            </span>
          </div>

          {/* Vignette terrasse */}
          <div className="absolute -bottom-8 -right-4 hidden w-40 -rotate-3 overflow-hidden rounded-2xl border-4 border-white shadow-2xl shadow-pine-950/50 transition-transform duration-300 hover:rotate-0 lg:block">
            <Image
              src={terrasseClub}
              alt="La terrasse du club house"
              placeholder="blur"
              sizes="10rem"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>

      {/* Indicateur de scroll */}
      <a
        href="#stats"
        aria-label="Faire défiler vers le contenu"
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-gold-400 lg:bottom-6 lg:text-white/50"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Découvrir</span>
        <svg viewBox="0 0 24 24" className="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14m0 0-6-6m6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
