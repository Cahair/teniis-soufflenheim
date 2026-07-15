import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { hourlyRates, memberships, site, tennisSchool } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Adhésions, location de la piste de padel, école de tennis : des formules simples et accessibles au Tennis Padel Club Soufflenheim.",
};

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-clay-500" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export default function TarifsPage() {
  return (
    <>
      <PageHero
        kicker="Tarifs — saison 2026 / 2027"
        title="Des formules simples, un club accessible"
        text="Pas de frais cachés, pas d'usine à gaz : une adhésion annuelle, la licence FFT incluse, et le padel réservable à l'heure pour tous."
      />

      {/* Adhésions */}
      <section className="bg-cream-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              kicker="Adhésions annuelles"
              title="Choisissez votre formule"
              text="L'adhésion donne accès aux courts extérieurs et au court couvert selon planning, avec la licence FFT et son assurance incluses."
            />
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {memberships.map((m, i) => (
              <Reveal key={m.name} delay={i * 100} className="h-full">
                <article
                  className={`card-lift relative flex h-full flex-col rounded-3xl p-8 ${
                    m.featured
                      ? "bg-pine-800 text-white shadow-2xl shadow-pine-800/30 ring-4 ring-gold-500"
                      : "border border-pine-100 bg-white"
                  }`}
                >
                  {m.featured ? (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold-500 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-pine-950 shadow-lg">
                      Le plus choisi
                    </span>
                  ) : null}
                  <h3
                    className={`display text-2xl ${
                      m.featured ? "text-white" : "text-pine-950"
                    }`}
                  >
                    {m.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span
                      className={`display text-5xl ${
                        m.featured ? "text-gold-400" : "text-pine-950"
                      }`}
                    >
                      {m.price}
                    </span>
                    <span
                      className={`text-sm ${
                        m.featured ? "text-white/60" : "text-pine-950/50"
                      }`}
                    >
                      {m.period}
                    </span>
                  </div>
                  <ul
                    className={`mt-6 space-y-3 text-sm ${
                      m.featured ? "text-white/85" : "text-pine-950/75"
                    }`}
                  >
                    {m.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        {m.featured ? (
                          <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m5 13 4 4L19 7" />
                          </svg>
                        ) : (
                          <Check />
                        )}
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <Link
                      href="/contact"
                      className={`btn w-full ${
                        m.featured ? "btn-gold" : "btn-outline-pine"
                      }`}
                    >
                      S&rsquo;inscrire
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-10 text-center text-sm text-pine-950/50">
              Pass&rsquo;Sport, chèques vacances et facilités de paiement acceptés —
              renseignez-vous au club.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Location horaire */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              kicker="À l'heure"
              title="Padel & courts à la carte"
              text="Licencié ou non, réservez en ligne et venez jouer. Paiement sécurisé directement sur la plateforme."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hourlyRates.map((rate, i) => (
              <Reveal key={rate.name} delay={i * 100} className="h-full">
                <div className="card-lift flex h-full flex-col rounded-3xl border border-pine-100 bg-cream-50 p-7">
                  <h3 className="font-bold text-pine-950">{rate.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="display text-4xl text-pine-950">{rate.price}</span>
                    <span className="text-xs text-pine-950/50">{rate.unit}</span>
                  </div>
                  <p className="mt-auto pt-4 text-xs font-semibold uppercase tracking-[0.12em] text-clay-500">
                    {rate.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href={site.links.tenup}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                Réserver sur Ten&rsquo;up
              </a>
              <a
                href={site.links.anybuddy}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-pine"
              >
                Réserver sur Anybuddy
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* École de tennis */}
      <section className="bg-pine-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              tone="light"
              kicker="École de tennis"
              title="Apprendre en s'amusant"
              text="Du mini-tennis aux cours adultes, l'école du TPCS accueille tous les niveaux de septembre à juin, hors vacances scolaires."
            />
          </Reveal>
          <div className="mt-14 overflow-hidden rounded-3xl border border-white/10">
            {tennisSchool.map((course, i) => (
              <Reveal key={course.name} delay={i * 80}>
                <div
                  className={`flex flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 ${
                    i % 2 === 0 ? "bg-white/[0.06]" : "bg-white/[0.02]"
                  }`}
                >
                  <div>
                    <h3 className="font-bold text-white">{course.name}</h3>
                    <p className="mt-1 text-sm text-white/55">{course.detail}</p>
                  </div>
                  <span className="display text-3xl text-gold-400">{course.price}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-8 text-center text-sm text-white/50">
              Séance d&rsquo;essai offerte en début de saison · matériel prêté pour
              les plus jeunes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-50 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="display text-4xl text-pine-950 sm:text-5xl">
              Un doute sur la bonne formule ?
            </h2>
            <p className="mt-4 text-lg text-pine-950/65">
              Appelez le club au{" "}
              <a href="tel:+33388867908" className="font-bold text-clay-500 hover:underline">
                {site.phoneClub}
              </a>{" "}
              ou écrivez-nous : on vous aiguille en deux minutes.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn btn-pine">
                Nous contacter
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
