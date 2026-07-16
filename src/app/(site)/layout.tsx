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
      <main className="flex-1">{children}</main>
      <Footer site={site} socials={socials} />
    </>
  );
}
