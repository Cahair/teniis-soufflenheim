import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSettings, getSocials } from "@/lib/content";

/* Habillage du site public : navigation + pied de page, alimentés
   par le contenu géré dans l'administration. */
export default async function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [site, socials] = await Promise.all([getSettings(), getSocials()]);

  return (
    <>
      <Navbar site={site} socials={socials} />
      {/* overflow-x-clip : les Reveal gauche/droite encore masqués (translate-x)
          élargiraient sinon le document — sur mobile, une page plus large que
          l'écran détache le header position:fixed du viewport visuel. Posé ici
          et non sur <body>, dont l'overflow serait propagé au viewport. */}
      <main className="flex-1 overflow-x-clip">{children}</main>
      <Footer site={site} socials={socials} />
    </>
  );
}
