import Link from "next/link";
import CourtLines from "@/components/CourtLines";
import Reveal from "@/components/Reveal";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-gold-500 py-20">
      <CourtLines className="absolute -right-32 -top-24 h-[26rem] w-auto rotate-12 text-pine-950/10" />
      <CourtLines className="absolute -bottom-32 -left-32 h-[24rem] w-auto -rotate-6 text-pine-950/10" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="display text-5xl text-pine-950 sm:text-6xl">
            Prêt à jouer ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-pine-950/70">
            Réservez votre court en ligne ou passez simplement nous voir au club
            — le café est souvent offert, les conseils toujours.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/#reservation" className="btn btn-pine">
              Réserver un court
            </Link>
            <Link href="/contact" className="btn btn-outline-pine">
              Nous contacter
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
