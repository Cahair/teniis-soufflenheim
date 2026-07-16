import type { StaticImageData } from "next/image";
import skAutomobiles from "../../public/sponsor/SK_automobiles.png";
import ambulancesErnewein from "../../public/sponsor/ambulance.png";
import axa from "../../public/sponsor/axa.png";
import burger from "../../public/sponsor/burger.png";
import creditMutuel from "../../public/sponsor/credit_mutuel.png";
import electriciteRoche from "../../public/sponsor/electricite_roche.png";
import ergysport from "../../public/sponsor/ergysport.png";
import haasser from "../../public/sponsor/hasser.png";
import juliesHairlounge from "../../public/sponsor/julie.png";
import leclerc from "../../public/sponsor/leclerc.png";
import reseauArtisans from "../../public/sponsor/reseau_artisans.png";
import sater from "../../public/sponsor/sater.png";
import schroll from "../../public/sponsor/schroll.png";
import securitest from "../../public/sponsor/securitest.png";
import suez from "../../public/sponsor/suez.png";
import twinBusch from "../../public/sponsor/twin_busch.png";
import yanePoses from "../../public/sponsor/yane_poses.png";
import yannickDecors from "../../public/sponsor/yannick_decors.png";

export type Sponsor = {
  name: string;
  logo: StaticImageData;
  detail?: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "Ambulances Ernewein",
    logo: ambulancesErnewein,
    detail: "Transport sanitaire · Soufflenheim",
  },
  {
    name: "AXA",
    logo: axa,
    detail: "Assurances",
  },
  {
    name: "Burger — Alliance Énergies",
    logo: burger,
    detail: "Fioul, chauffage, climatisation & bois",
  },
  {
    name: "Crédit Mutuel",
    logo: creditMutuel,
    detail: "Banque & assurances",
  },
  {
    name: "Électricité Roche",
    logo: electriciteRoche,
    detail: "Électricité générale · ventilation · dépannage",
  },
  {
    name: "Ergysport",
    logo: ergysport,
    detail: "Nutrition du sportif",
  },
  {
    name: "Haasser",
    logo: haasser,
  },
  {
    name: "Julie's Hairlounge",
    logo: juliesHairlounge,
    detail: "Haute coiffure française",
  },
  {
    name: "E.Leclerc",
    logo: leclerc,
    detail: "Grande distribution",
  },
  {
    name: "Réseau Artisans",
    logo: reseauArtisans,
    detail: "Votre partenaire travaux",
  },
  {
    name: "Sater",
    logo: sater,
  },
  {
    name: "Schroll",
    logo: schroll,
    detail: "Le recyclage de vos déchets",
  },
  {
    name: "Sécuritest",
    logo: securitest,
    detail: "Contrôle technique automobile",
  },
  {
    name: "SK Automobiles",
    logo: skAutomobiles,
    detail: "Neuf et occasions toutes marques",
  },
  {
    name: "Suez",
    logo: suez,
    detail: "Eau & valorisation des déchets",
  },
  {
    name: "Twin Busch",
    logo: twinBusch,
    detail: "Équipement d'atelier automobile",
  },
  {
    name: "Yané Poses",
    logo: yanePoses,
    detail: "Pour votre projet, une réponse adaptée",
  },
  {
    name: "Yannick Décors",
    logo: yannickDecors,
    detail: "Artisan peintre · Soufflenheim",
  },
];
