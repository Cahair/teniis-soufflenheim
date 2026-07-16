import type { Metadata } from "next";
import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { galleryComplete } from "@/lib/data";

export const metadata: Metadata = {
  title: "Galerie photos",
  description:
    "Le Tennis Padel Club Soufflenheim en images : piste de padel, courts, club house, fêtes du club et jeunes en action.",
};

export default function GaleriePage() {
  return (
    <>
      <PageHero
        kicker="Galerie"
        title="Le club en images"
        text="Piste de padel flambant neuve, courts au cœur du village, terrasse au soleil, fêtes mémorables — et plus de 45 ans d'archives : bienvenue chez nous."
      />

      <section className="bg-cream-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <GalleryGrid items={galleryComplete} withFilter />
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-16 rounded-3xl bg-pine-800 p-10 text-center text-white">
              <h2 className="display text-3xl text-white sm:text-4xl">
                Vous avez de belles photos du club ?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-white/65">
                Tournois, doubles entre amis, couchers de soleil sur les courts :
                envoyez-nous vos clichés, les plus beaux rejoindront la galerie.
              </p>
              <div className="mt-7">
                <Link href="/contact" className="btn btn-gold">
                  Envoyer mes photos
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
