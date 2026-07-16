import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tpc-soufflenheim.fr"),
  title: {
    default:
      "Tennis Padel Club Soufflenheim — Tennis, padel & pickleball en Alsace du Nord",
    template: "%s · Tennis Padel Club Soufflenheim",
  },
  description:
    "Le TPCS vous accueille depuis 1979 à Soufflenheim : courts de tennis, piste de padel dernière génération et pickleball. Réservation en ligne 7j/7 via Ten'up et Anybuddy.",
  openGraph: {
    title: "Tennis Padel Club Soufflenheim",
    description:
      "Tennis, padel & pickleball au cœur du pays des potiers, depuis 1979. Réservez votre court en ligne.",
    locale: "fr_FR",
    type: "website",
    images: ["/images/padel-court.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
