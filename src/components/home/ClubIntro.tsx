import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { feteClub, terrasseClub } from "@/lib/images";

const points = [
  "École de tennis dès 5 ans, encadrement passionné",
  "Court couvert pour jouer toute l'année",
  "Club house de 150 m² avec cuisine et terrasse",
  "Pétanque, espace vert et parking gratuit sur place",
];

export default function ClubIntro() {
  return (
    <section className="overflow-hidden bg-cream-50 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Collage photos */}
        <Reveal direction="left" className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-pine-950/20">
            <Image
              src={terrasseClub}
              alt="La terrasse fleurie du club house, face à la piste de padel"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -left-6 w-52 rotate-[-4deg] overflow-hidden rounded-2xl border-[6px] border-white shadow-2xl shadow-pine-950/30 transition-transform duration-300 hover:rotate-0 sm:w-64">
            <Image
              src={feteClub}
              alt="La fête du club sur l'espace vert"
              placeholder="blur"
              sizes="16rem"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 top-8 rounded-2xl bg-pine-800 px-5 py-4 text-white shadow-xl shadow-pine-950/30 sm:-right-6">
            <span className="display block text-3xl text-gold-400">1979</span>
            <span className="text-xs uppercase tracking-[0.18em] text-white/70">
              Année de fondation
            </span>
          </div>
        </Reveal>

        {/* Texte */}
        <div>
          <Reveal>
            <span className="kicker text-clay-500">Le club</span>
            <h2 className="display mt-4 text-4xl text-pine-950 sm:text-5xl">
              Un club de village,
              <br />
              une ambiance de <span className="text-clay-500">famille</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-relaxed text-pine-950/65">
              Fondé en 1979 au cœur du pays des potiers, le Tennis Padel Club
              Soufflenheim cultive une recette simple : du sport pour tous, de
              la convivialité à chaque échange, et une équipe de bénévoles qui
              fait vivre le club saison après saison.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <ul className="mt-8 space-y-3.5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-pine-950/80">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500 text-pine-950">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/le-club" className="btn btn-pine">
                Découvrir notre histoire
              </Link>
              <Link href="/galerie" className="btn btn-outline-pine">
                Voir la galerie
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
