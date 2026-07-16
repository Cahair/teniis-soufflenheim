import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Accordion from "@/components/Accordion";
import HistoireChrono from "@/components/HistoireChrono";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import CtaBand from "@/components/home/CtaBand";
import {
  getCommittee,
  getFacilities,
  getHistoireChapitres,
  getHistoireInfos,
  getSettings,
} from "@/lib/content";
import { telHref } from "@/lib/format";
import { logoHistorique } from "@/lib/images";

export const metadata: Metadata = {
  title: "Le club",
  description:
    "Depuis 1979, le Tennis Padel Club Soufflenheim fait vivre le sport de raquette au pays des potiers : histoire, comité, installations.",
};

const committeeIcons: Record<string, React.ReactNode> = {
  crown: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 8 4 4 5-6 5 6 4-4v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" />
    </svg>
  ),
  pen: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  ),
  coins: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6" />
      <path d="M18.1 9.9A6 6 0 1 1 9.9 18.1" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3m6.4-.4-2.2 2.2M21 12h-3m.4 6.4-2.2-2.2M12 18v3m-6.4-.4 2.2-2.2M3 12h3m-.4-6.4 2.2 2.2" />
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  ),
};

export default async function LeClubPage() {
  const [site, committee, facilities, histoireChapitres, histoireInfos] =
    await Promise.all([
      getSettings(),
      getCommittee(),
      getFacilities(),
      getHistoireChapitres(),
      getHistoireInfos(),
    ]);
  return (
    <>
      <PageHero
        kicker="Le club"
        title="Une histoire de famille depuis 1979"
        text="Du premier échange rue de Koenigsbruck à la piste de padel dernière génération : presque un demi-siècle de passion, porté par des bénévoles qui ne lâchent rien."
      />

      {/* Histoire du club, en ordre chronologique */}
      <section className="bg-cream-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              align="left"
              kicker="Notre histoire"
              title="Presque 50 ans de petites et grandes victoires"
              text="De la fondation en 1979 à l'arrivée du padel : replongez dans les archives du club, année après année. Cliquez sur une photo pour l'agrandir et feuilleter l'album."
            />
          </Reveal>

          <div className="mt-14">
            <HistoireChrono chapitres={histoireChapitres} />
          </div>

          {/* Remerciements & bénévoles de l'histoire */}
          <Reveal>
            <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
              <div className="relative overflow-hidden rounded-3xl bg-pine-800 p-8 text-white shadow-xl shadow-pine-800/25 sm:p-10">
                <span className="display absolute -top-4 right-6 text-[7rem] leading-none text-white/10">
                  &ldquo;
                </span>
                <span className="kicker text-gold-400">Merci à eux</span>
                <p className="relative mt-5 leading-relaxed text-white/90">
                  {histoireInfos.remerciements}
                </p>
              </div>
              <div>
                <Accordion
                  defaultOpen={null}
                  items={[
                    {
                      q: `Les membres du comité au fil des années (${histoireInfos.membresComite.length})`,
                      a: histoireInfos.membresComite.join(" · "),
                    },
                    {
                      q: `Les éducateurs et animateurs sportifs (${histoireInfos.educateurs.length})`,
                      a: histoireInfos.educateurs.join(" · "),
                    },
                  ]}
                />
              </div>
            </div>
          </Reveal>
          {/* Souvenir & mot du président */}
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
            <Reveal>
              <figure className="overflow-hidden rounded-3xl border border-pine-100 bg-white p-4 shadow-xl shadow-pine-950/5">
                <Image
                  src={logoHistorique}
                  alt="L'ancien logo du Tennis Club Soufflenheim, sur terre battue"
                  placeholder="blur"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="h-auto w-full rounded-2xl"
                />
                <figcaption className="px-2 pb-1 pt-4 text-xs text-pine-950/50">
                  Souvenir : la bannière historique du Tennis Club, avant
                  l&rsquo;arrivée du padel.
                </figcaption>
              </figure>
            </Reveal>

            {/* Mot du président */}
            <Reveal direction="right" delay={120}>
              <div className="relative overflow-hidden rounded-3xl bg-pine-800 p-8 text-white shadow-xl shadow-pine-800/25 sm:p-10">
                <span className="display absolute -top-4 right-6 text-[7rem] leading-none text-white/10">
                  &ldquo;
                </span>
                <span className="kicker text-gold-400">Le mot du président</span>
                <blockquote className="relative mt-5 text-lg leading-relaxed text-white/90">
                  {site.motPresident}
                </blockquote>
                <div className="mt-7 flex items-center gap-4">
                  <span className="display flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-xl text-pine-950">
                    {site.president.charAt(0)}
                  </span>
                  <div>
                    <p className="font-bold">{site.president}</p>
                    <p className="text-xs text-white/60">
                      Président ·{" "}
                      <a href={telHref(site.phonePresident)} className="hover:text-gold-300">
                        {site.phonePresident}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comité */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              kicker="Le comité"
              title="Une équipe de bénévoles engagés"
              text="Derrière chaque tournoi, chaque soirée et chaque court entretenu, il y a des mains bénévoles. Envie de rejoindre l'aventure ? Parlez-en au club house."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {committee.map((member, i) => (
              <Reveal key={member.name} delay={(i % 4) * 100} className="h-full">
                <div className="card-lift flex h-full flex-col items-center rounded-3xl border border-pine-100 bg-cream-50 p-8 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pine-800 text-gold-400">
                    {committeeIcons[member.icon]}
                  </span>
                  <h3 className="display mt-5 text-xl text-pine-950">{member.name}</h3>
                  <p className="mt-1.5 text-sm font-semibold text-pine-950/75">
                    {member.role}
                  </p>
                  {"contact" in member && member.contact ? (
                    <p className="mt-2 text-xs text-pine-950/50">{member.contact}</p>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Installations */}
      <section id="installations" className="scroll-mt-24 bg-cream-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              kicker="Les installations"
              title="Tout pour jouer, tout pour rester"
              text="Courts, piste de padel, club house avec cuisine, pétanque et espace vert : le TPCS est pensé pour les sportifs comme pour les supporters."
            />
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {facilities.map((facility, i) => (
              <Reveal key={facility.title} delay={i * 100} className="h-full">
                <article className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-pine-100 bg-white">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      placeholder={facility.image.blurDataURL ? "blur" : "empty"}
                      sizes="(max-width: 640px) 90vw, 45vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-pine-950 shadow-lg">
                      {facility.tag}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="display text-2xl text-pine-950">{facility.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-pine-950/65">
                      {facility.detail}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {["Terrain de pétanque", "Espace vert", "Parking gratuit illimité", "Terrasse ombragée", "Cuisine équipée"].map((extra) => (
                <span
                  key={extra}
                  className="rounded-full border border-pine-200 bg-white px-5 py-2.5 text-sm font-semibold text-pine-800"
                >
                  {extra}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-14 text-center">
              <Link href="/tarifs" className="btn btn-pine">
                Voir les formules d&rsquo;adhésion
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
