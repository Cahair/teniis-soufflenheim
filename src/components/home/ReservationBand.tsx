import CourtLines from "@/components/CourtLines";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { site } from "@/lib/data";

const platforms = [
  {
    initial: "T",
    name: "Ten'up",
    tag: "Licenciés FFT",
    description:
      "La plateforme officielle de la Fédération Française de Tennis, pour les membres du club.",
    steps: [
      "Créez votre compte Ten'up (gratuit)",
      "Choisissez votre court et votre créneau",
      "Validez — votre réservation est confirmée",
    ],
    href: site.links.tenup,
    cta: "Réserver sur Ten'up",
    gold: true,
  },
  {
    initial: "A",
    name: "Anybuddy",
    tag: "Sans licence · accès ponctuel",
    description:
      "Pas encore licencié ? Réservez la piste de padel à l'heure, en quelques clics, paiement en ligne sécurisé.",
    steps: [
      "Téléchargez l'application Anybuddy",
      "Sélectionnez le TPC Soufflenheim",
      "Payez en ligne et venez jouer !",
    ],
    href: site.links.anybuddy,
    cta: "Réserver sur Anybuddy",
    gold: false,
  },
];

export default function ReservationBand() {
  return (
    <section id="reservation" className="relative scroll-mt-24 overflow-hidden bg-pine-900 py-24">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 32rem at 50% -20%, rgba(237,177,17,0.12), transparent 60%)",
        }}
      />
      <CourtLines className="absolute -bottom-40 -right-40 h-[34rem] w-auto rotate-6 text-white/[0.05]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            tone="light"
            kicker="Réservation"
            title="Votre court en 2 minutes, chrono"
            text="Licencié ou simple curieux de passage, deux plateformes vous ouvrent les portes du club, 7 jours sur 7."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {platforms.map((p, i) => (
            <Reveal key={p.name} delay={i * 150} className="h-full">
              <article className="card-lift flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm sm:p-10">
                <div className="flex items-center gap-4">
                  <span
                    className={`display flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${
                      p.gold ? "bg-gold-500 text-pine-950" : "bg-white text-pine-900"
                    }`}
                  >
                    {p.initial}
                  </span>
                  <div>
                    <h3 className="display text-3xl text-white">{p.name}</h3>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-gold-300">
                      {p.tag}
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/65">
                  {p.description}
                </p>
                <ol className="mt-7 space-y-4">
                  {p.steps.map((step, si) => (
                    <li key={step} className="flex items-start gap-3.5 text-sm text-white/85">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold-400/50 font-bold text-gold-300">
                        {si + 1}
                      </span>
                      <span className="pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-auto pt-9">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn w-full ${p.gold ? "btn-gold" : "btn-outline-light"}`}
                  >
                    {p.cta}
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7m0 0H8m9 0v9" />
                    </svg>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-sm text-white/50">
            Besoin d&rsquo;aide pour votre première réservation ? Appelez le club au{" "}
            <a href="tel:+33388867908" className="font-semibold text-gold-300 hover:underline">
              {site.phoneClub}
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
