import type { StaticImageData } from "next/image";
import { padelCourt, pickleballJeunes } from "./images";

/* ------------------------------------------------------------------ */
/*  L'histoire du club, issue des archives (document « histoire »).   */
/*  Les photos sont classées par ordre chronologique : histoire-01    */
/*  est la plus ancienne, histoire-70 la plus récente.                */
/* ------------------------------------------------------------------ */

import h01 from "../../public/images/histoire/histoire-01.webp";
import h02 from "../../public/images/histoire/histoire-02.webp";
import h03 from "../../public/images/histoire/histoire-03.webp";
import h04 from "../../public/images/histoire/histoire-04.webp";
import h05 from "../../public/images/histoire/histoire-05.webp";
import h06 from "../../public/images/histoire/histoire-06.webp";
import h07 from "../../public/images/histoire/histoire-07.webp";
import h08 from "../../public/images/histoire/histoire-08.webp";
import h09 from "../../public/images/histoire/histoire-09.webp";
import h10 from "../../public/images/histoire/histoire-10.webp";
import h11 from "../../public/images/histoire/histoire-11.webp";
import h12 from "../../public/images/histoire/histoire-12.webp";
import h13 from "../../public/images/histoire/histoire-13.webp";
import h14 from "../../public/images/histoire/histoire-14.webp";
import h15 from "../../public/images/histoire/histoire-15.webp";
import h16 from "../../public/images/histoire/histoire-16.webp";
import h17 from "../../public/images/histoire/histoire-17.webp";
import h18 from "../../public/images/histoire/histoire-18.webp";
import h19 from "../../public/images/histoire/histoire-19.webp";
import h20 from "../../public/images/histoire/histoire-20.webp";
import h21 from "../../public/images/histoire/histoire-21.webp";
import h22 from "../../public/images/histoire/histoire-22.webp";
import h23 from "../../public/images/histoire/histoire-23.webp";
import h24 from "../../public/images/histoire/histoire-24.webp";
import h25 from "../../public/images/histoire/histoire-25.webp";
import h26 from "../../public/images/histoire/histoire-26.webp";
import h27 from "../../public/images/histoire/histoire-27.webp";
import h28 from "../../public/images/histoire/histoire-28.webp";
import h29 from "../../public/images/histoire/histoire-29.webp";
import h30 from "../../public/images/histoire/histoire-30.webp";
import h31 from "../../public/images/histoire/histoire-31.webp";
import h32 from "../../public/images/histoire/histoire-32.webp";
import h33 from "../../public/images/histoire/histoire-33.webp";
import h34 from "../../public/images/histoire/histoire-34.webp";
import h35 from "../../public/images/histoire/histoire-35.webp";
import h36 from "../../public/images/histoire/histoire-36.webp";
import h37 from "../../public/images/histoire/histoire-37.webp";
import h38 from "../../public/images/histoire/histoire-38.webp";
import h39 from "../../public/images/histoire/histoire-39.webp";
import h40 from "../../public/images/histoire/histoire-40.webp";
import h41 from "../../public/images/histoire/histoire-41.webp";
import h42 from "../../public/images/histoire/histoire-42.webp";
import h43 from "../../public/images/histoire/histoire-43.webp";
import h44 from "../../public/images/histoire/histoire-44.webp";
import h45 from "../../public/images/histoire/histoire-45.webp";
import h46 from "../../public/images/histoire/histoire-46.webp";
import h47 from "../../public/images/histoire/histoire-47.webp";
import h48 from "../../public/images/histoire/histoire-48.webp";
import h49 from "../../public/images/histoire/histoire-49.webp";
import h50 from "../../public/images/histoire/histoire-50.webp";
import h51 from "../../public/images/histoire/histoire-51.webp";
import h52 from "../../public/images/histoire/histoire-52.webp";
import h53 from "../../public/images/histoire/histoire-53.webp";
import h54 from "../../public/images/histoire/histoire-54.webp";
import h55 from "../../public/images/histoire/histoire-55.webp";
import h56 from "../../public/images/histoire/histoire-56.webp";
import h57 from "../../public/images/histoire/histoire-57.webp";
import h58 from "../../public/images/histoire/histoire-58.webp";
import h59 from "../../public/images/histoire/histoire-59.webp";
import h60 from "../../public/images/histoire/histoire-60.webp";
import h61 from "../../public/images/histoire/histoire-61.webp";
import h62 from "../../public/images/histoire/histoire-62.webp";
import h63 from "../../public/images/histoire/histoire-63.webp";
import h64 from "../../public/images/histoire/histoire-64.webp";
import h65 from "../../public/images/histoire/histoire-65.webp";
import h66 from "../../public/images/histoire/histoire-66.webp";
import h67 from "../../public/images/histoire/histoire-67.webp";
import h68 from "../../public/images/histoire/histoire-68.webp";
import h69 from "../../public/images/histoire/histoire-69.webp";
import h70 from "../../public/images/histoire/histoire-70.webp";

export type HistoirePhoto = {
  src: StaticImageData;
  alt: string;
};

export type HistoireChapitre = {
  period: string;
  title: string;
  paragraphs: string[];
  photos: HistoirePhoto[];
};

const photos = (
  images: StaticImageData[],
  period: string
): HistoirePhoto[] =>
  images.map((src, i) => ({
    src,
    alt: `Photo d'archive du club — ${period} (${i + 1}/${images.length})`,
  }));

export const histoireChapitres: HistoireChapitre[] = [
  {
    period: "1979",
    title: "La naissance du club",
    paragraphs: [
      "Le Tennis Padel Club Soufflenheim, anciennement Tennis Club Soufflenheim, est créé le 5 mars 1979 avec M. Scheydecker Camille pour président, M. Franck Gérald pour vice-président, Mme Muller Josiane pour secrétaire et M. Meyer Albert pour trésorier.",
      "L'histoire débute et se poursuit à Soufflenheim, où des passionnés ont décidé de faire vivre leur discipline favorite : le tennis !",
    ],
    photos: photos([h01, h02, h03, h04], "les débuts du club, 1979"),
  },
  {
    period: "1983 – 1984",
    title: "L'école de tennis et le premier semi-marathon",
    paragraphs: [
      "Une école de tennis est très vite mise en place pour former les jeunes, avec Muller Denis et Sandrock Jean-Philippe, éducateurs sportifs. En 1983, Muller Denis prend la présidence du club.",
      "Bilan 1984 : une équipe hommes, une équipe femmes, une équipe jeunes et 38 élèves en école de tennis. Le club organise également son premier semi-marathon.",
    ],
    photos: photos(
      [h05, h06, h07, h08, h09, h10, h11],
      "l'école de tennis et le premier semi-marathon, 1983-1984"
    ),
  },
  {
    period: "1985 – 1986",
    title: "Le club-house prend forme",
    paragraphs: [
      "Franck Gérald prend la présidence l'année 1985, au cours de laquelle une première demande pour la construction du court couvert et du court extérieur en terre battue fut adressée. Le club organise également son 2ᵉ semi-marathon avec 378 participants, et participe à la fête de la poterie.",
      "Le club-house, ancien bâtiment d'artisanat local, commence à prendre forme : la toiture est terminée en cours d'année 1986.",
    ],
    photos: photos(
      [h12, h13, h14, h15, h16],
      "la construction du club-house, 1985-1986"
    ),
  },
  {
    period: "1987 – 1989",
    title: "Les dix ans du club",
    paragraphs: [
      "1987 : le semi-marathon annuel atteint les 489 participants et le club-house se voit doté de magnifiques fenêtres.",
      "En 1989, pour ses 10 ans, le club organise un dîner dansant avec la participation de Marlyse Riegensthil. Cette même année, la municipalité donne son accord pour l'érection du court de tennis couvert (900 000 francs TTC).",
    ],
    photos: photos([h17, h18, h19, h20, h21], "les dix ans du club, 1987-1989"),
  },
  {
    period: "1990 – 1992",
    title: "Montées, télévision et club-house opérationnel",
    paragraphs: [
      "1990 : le semi-marathon atteint les 650 participants. Au tennis, l'équipe 1 monte en division 3 et l'équipe 2 en division 5 ; Matthieu Schmitt et Maxime Moreau sont retenus par la ligue pour des entraînements de secteur.",
      "1991 : un bon coup de plâtre pour le club-house, et Soufflenheim perd contre Haguenau en finale de coupe Crédit Mutuel. L'école de tennis dépasse les 50 élèves, et le club est invité le 12 décembre 1991 à l'émission Sport Show, diffusée sur France 3 et présentée par Arnaud Boetsch (champion en coupe Davis).",
      "1992 : le club-house est désormais opérationnel ! Première vente de calendriers « médecins de garde les jours fériés » et de pin's, 9ᵉ semi-marathon, deux soirées théâtrales « Hôpital Silence » de Christian Daniel, premier tournoi jeunes « Challenge CIAL »… et nos vétérans sont vice-champions d'Alsace.",
    ],
    photos: photos(
      [h22, h23, h24, h25],
      "la vie du club au début des années 90"
    ),
  },
  {
    period: "1993 – 1995",
    title: "Le court couvert enfin construit",
    paragraphs: [
      "En 1993, M. Jung Gérard prend la présidence, et le court couvert est construit. Le club compte 153 membres dont 79 jeunes, 74 jeunes inscrits au CAT et 129 concurrents au CIAL.",
      "En 1994, le club compte 161 membres ; nos benjamines se qualifient pour la demi-finale régionale et le CIAL compte 140 inscrits.",
      "1995 : l'équipe 1 est vice-championne d'Alsace, Schmitt Claude et Cron Muriel deviennent juge-arbitre et arbitre. Un artiste drag queen de « Chez Régine », le cabaret parisien, est venu donner une représentation pour la soirée « Cabaret mimosa ».",
    ],
    photos: photos(
      [h26, h27, h28, h29, h30],
      "le court couvert et la vie du club, 1993-1995"
    ),
  },
  {
    period: "1996 – 1999",
    title: "Roland-Garros, Téléthon et belles saisons",
    paragraphs: [
      "1996 : nos cadettes sont vice-championnes d'Alsace, le club participe à nouveau à Sport Show, désormais présenté par Eric Sold, au Tennis Tour de la LAT, et met en place le « Tennis découverte » avec la FFT.",
      "1997 : nos vétérans sont vice-champions d'Alsace et nos cadets et benjamins premiers de leurs groupes. Nous sommes allés à Roland-Garros, le club participe au Téléthon — pour lequel nos jeunes interprètent une chorégraphie inspirée des Spice Girls — et nous sommes à nouveau invités à Sport Show avec Eric Sold.",
      "1999 : stage à Fouchy, le club participe à la nuit du Téléthon et accueille les cyclistes d'Ablis au club-house.",
    ],
    photos: photos(
      [h31, h32, h33, h34, h35, h36, h37, h38, h39, h40, h41, h42, h43, h44, h45],
      "les grandes années du club, 1996-1999"
    ),
  },
  {
    period: "2000 – 2005",
    title: "Un nouveau siècle, de nouveaux projets",
    paragraphs: [
      "2000 : l'équipe 1 monte en régional, première soirée œnologie au club-house et soirée couscous avec Caroline Morgenthaler. 2001 : présentation des vœux du Tennis Club.",
      "2002 : Schmitt Claude prend la présidence du club, des animations scolaires sont mises en place pour inspirer les nouvelles générations, 9ᵉ édition du tournoi jeunes, et notre équipe se qualifie en demi-finale de la coupe Crédit Mutuel.",
      "2003 : 10ᵉ et dernier tournoi jeunes, installation du mur d'entraînement et réfection du court n°1. 2004 : nos dames se qualifient pour la finale du championnat Madame Figaro.",
      "2005 : Moreau Serge prend la présidence du club. De nouveaux objectifs sont fixés pour investir dans un nouveau court extérieur, rénover le premier et ajouter une clôture.",
    ],
    photos: photos(
      [
        h46, h47, h48, h49, h50, h51, h52, h53, h54, h55, h56, h57, h58,
        h59, h60, h61, h62, h63, h64, h65, h66, h67, h68, h69, h70,
      ],
      "le club dans les années 2000"
    ),
  },
  {
    period: "2023",
    title: "Le padel entre en piste",
    paragraphs: [
      "Le TCS devient TPCS : une piste de padel SLAMCOURT dernière génération sort de terre et attire une toute nouvelle génération de joueurs, réservation en ligne à la clé.",
    ],
    photos: [
      {
        src: padelCourt,
        alt: "La piste de padel SLAMCOURT du club, installée en 2023",
      },
    ],
  },
  {
    period: "2025",
    title: "Place au pickleball",
    paragraphs: [
      "Toujours en mouvement, le club lance des sessions découverte de pickleball, le sport de raquette qui monte, accessible à tous les âges — et le projet d'extension padel est déjà à l'étude.",
    ],
    photos: [
      {
        src: pickleballJeunes,
        alt: "Des jeunes découvrent le pickleball devant le court couvert",
      },
    ],
  },
];

/* Remerciements et bénévoles de l'histoire du club */

export const histoireRemerciements =
  "Sincères remerciements à tous ceux qui ont œuvré au cœur de cette magnifique communauté qu'est le Tennis Padel Club de Soufflenheim, pour en faire un lieu de rencontre sportive à la fois sain, agréable et dynamique, offrant à tous la chance de pouvoir y évoluer et trouver son bonheur.";

export const membresComiteHistorique = [
  "Camille Scheydecker", "Denis Muller", "Gérald Franck", "Josiane Muller",
  "Albert Meyer", "Jean-Claude Mazerand", "Michèle Roth", "Jean-Marie Doll",
  "Albert Fontaine", "Roland Gangloff", "Claude Gross", "Guy Niebel",
  "Robert Schwartz", "Michèle Niebel", "Charles Gries", "Jean-Philippe Sandrock",
  "Gérard Schall", "Joseph Jaeck", "Francis Schmitt", "Jocelyne Baudrand",
  "Alphonse Meyer", "Jean-Pierre Burger", "Jacky Beck", "Béatrice Mosack",
  "Gérard Jung", "Pierre Cador", "Jean-Claude Vitzikam", "Marie-Thérèse Schrenck",
  "Jean-Claude Bailly", "Valentin Beck", "Denise Jung", "Jean Dumont",
  "Thierry Perrin", "Benoit Winkelmuller", "Mariane Lorentz", "Serge Moreau",
  "Claude Schmitt", "Jean-Gérard Uhrig", "Pierre Klingler", "Evelyne Franck",
  "Lydie Ludwig", "Bernard Ludwig", "Christian Daul", "Jean-Claude Hahn",
  "Hervé Le Bris", "Muriel Cron", "Christiane Brault", "Patrick Lefèbvre",
  "Gilbert Schneider", "Nicole Jung", "Béatrice Zinck", "Evelyne Vogt",
  "Philippe Fontaine", "Maxime Moreau", "Thomas Jung", "Georges Niebel",
  "Michel Debaille", "Marc Appenzeller", "Eric Geldreich", "Fabrice Herr",
];

export const educateursHistorique = [
  "Denis Muller", "Jean-Philippe Sandrock", "Jocelyne Baudrand", "Josiane Muller",
  "Thierry Roeckel", "Philippe Walter", "Bregoli", "Raymond Loth",
  "Serge Moreau", "Philippe Prunet", "Alfred Heit", "Jean Dumont",
  "Valérie Briot", "Christophe Germain", "Muriel Cron", "Benoit Winkelmuller",
  "Claude Schmitt", "Daniel Albert", "Jean-Gérard Uhrig", "Laurent Wagner",
  "Jean Struzik", "Valérie Heller", "Florian Ludwig", "Simon Zinck",
  "Arnaud Serret",
];
