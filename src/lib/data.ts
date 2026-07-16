import type { StaticImageData } from "next/image";
import { histoireChapitres } from "./histoire";
import {
  padelCourt,
  terrasseClub,
  courtsExterieurs,
  feteClub,
  clubHouse,
  pickleballJeunes,
} from "./images";

/* ------------------------------------------------------------------ */
/*  Toutes les données du site sont centralisées ici : textes,        */
/*  tarifs, actualités, FAQ… Un seul fichier à modifier pour faire    */
/*  vivre le site.                                                    */
/* ------------------------------------------------------------------ */

export const site = {
  name: "Tennis Padel Club Soufflenheim",
  shortName: "TPCS",
  baseline: "Tennis · Padel · Pickleball — depuis 1979",
  address: {
    street: "Rue de Koenigsbruck",
    city: "67620 Soufflenheim",
    region: "Alsace du Nord",
  },
  phoneClub: "03 88 86 79 08",
  phonePresident: "06 10 14 60 39",
  president: "Serge Moreau",
  emails: {
    president: "president.tpcs@gmail.com",
    secretariat: "secretariat.tpcs@gmail.com",
  },
  links: {
    tenup: "https://tenup.fft.fr",
    anybuddy: "https://www.anybuddyapp.com",
    fftPadel: "https://www.fft.fr",
    itineraire:
      "https://www.google.com/maps/search/?api=1&query=Rue+de+Koenigsbruck+67620+Soufflenheim",
  },
};

export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Le club", href: "/le-club" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Actualités", href: "/actualites" },
  { label: "Galerie", href: "/galerie" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 45, suffix: "+", label: "années de passion" },
  { value: 3, suffix: "", label: "sports de raquette" },
  { value: 4, suffix: "", label: "courts & pistes" },
  { value: 7, suffix: "j/7", label: "réservation en ligne" },
];

export type Discipline = {
  name: string;
  badge: string;
  image: StaticImageData;
  description: string;
  features: string[];
  cta: { label: string; href: string };
};

export const disciplines: Discipline[] = [
  {
    name: "Tennis",
    badge: "L'âme du club",
    image: courtsExterieurs,
    description:
      "Deux courts extérieurs et un court couvert pour jouer toute l'année, en loisir comme en compétition. École de tennis dès 5 ans, encadrement passionné.",
    features: [
      "2 courts extérieurs + 1 court couvert",
      "École de tennis dès 5 ans",
      "Équipes engagées en championnat",
    ],
    cta: { label: "Rejoindre l'école de tennis", href: "/contact" },
  },
  {
    name: "Padel",
    badge: "La sensation du moment",
    image: padelCourt,
    description:
      "Notre piste SLAMCOURT dernière génération vous attend. Facile à prendre en main, terriblement addictif : le padel se joue à 4 et se réserve en quelques clics.",
    features: [
      "Piste panoramique dernière génération",
      "Tutoriels vidéo officiels FFT",
      "Projet d'extension en cours (maquette 3D)",
    ],
    cta: { label: "Réserver une piste", href: "/#reservation" },
  },
  {
    name: "Pickleball",
    badge: "Nouveau",
    image: pickleballJeunes,
    description:
      "Le sport de raquette qui monte, proche du tennis de plage : accessible à tous les âges, convivial et immédiatement amusant. Venez découvrir, on vous prête le matériel !",
    features: [
      "Initiation gratuite, matériel prêté",
      "Idéal en famille, de 7 à 77 ans",
      "Sessions découverte le week-end",
    ],
    cta: { label: "Venir essayer gratuitement", href: "/contact" },
  },
];

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: StaticImageData;
};

export const news: NewsItem[] = [
  {
    slug: "pickleball-decouverte",
    title: "Le pickleball débarque au TPCS !",
    date: "12 juin 2026",
    category: "Nouveauté",
    excerpt:
      "Proche du tennis de plage, ludique et accessible dès le plus jeune âge : le club vous invite à découvrir le pickleball lors de sessions d'initiation gratuites, matériel fourni.",
    image: pickleballJeunes,
  },
  {
    slug: "padel-complet",
    title: "Padel : la piste affiche complet, pensez à réserver",
    date: "28 mai 2026",
    category: "Padel",
    excerpt:
      "Le succès ne se dément pas : les créneaux du soir partent en quelques heures. Réservez votre piste sur Ten'up ou Anybuddy pour ne pas rester au bord du grillage.",
    image: padelCourt,
  },
  {
    slug: "fete-du-club",
    title: "Fête du club : retour en images",
    date: "17 mai 2026",
    category: "Vie du club",
    excerpt:
      "Soleil, grillades, doubles endiablés et tournoi des familles : merci aux bénévoles et aux nombreux membres présents pour cette magnifique journée au bord des courts.",
    image: feteClub,
  },
  {
    slug: "inscriptions-ecole",
    title: "École de tennis : inscriptions 2026-2027 ouvertes",
    date: "2 mai 2026",
    category: "École de tennis",
    excerpt:
      "Mini-tennis dès 5 ans, groupes jeunes et cours adultes : les inscriptions pour la saison prochaine sont ouvertes. Places limitées, ne tardez pas !",
    image: courtsExterieurs,
  },
  {
    slug: "nouvelle-terrasse",
    title: "Une terrasse toute neuve au club house",
    date: "18 avril 2026",
    category: "Vie du club",
    excerpt:
      "Salons en palettes, voiles d'ombrage et fleurs : la nouvelle terrasse vous accueille pour la troisième mi-temps, avec vue directe sur la piste de padel.",
    image: terrasseClub,
  },
  {
    slug: "projet-padel-3d",
    title: "Extension padel : découvrez la maquette 3D du projet",
    date: "5 avril 2026",
    category: "Projet",
    excerpt:
      "Le comité travaille sur une structure padel supplémentaire. Créativité, flexibilité et gestion rigoureuse : découvrez le projet en modèle 3D et les prochaines étapes.",
    image: clubHouse,
  },
];

export type ClubEvent = {
  day: string;
  month: string;
  title: string;
  meta: string;
};

export const events: ClubEvent[] = [
  {
    day: "18",
    month: "Juil.",
    title: "Tournoi open d'été",
    meta: "Courts extérieurs · dès 9h",
  },
  {
    day: "26",
    month: "Juil.",
    title: "Initiation padel gratuite",
    meta: "Piste de padel · 10h – 12h",
  },
  {
    day: "08",
    month: "Août",
    title: "Soirée grillades du club",
    meta: "Club house & terrasse · 19h",
  },
  {
    day: "06",
    month: "Sept.",
    title: "Portes ouvertes & inscriptions",
    meta: "Tous les terrains · 10h – 17h",
  },
];

export type PriceCard = {
  name: string;
  price: string;
  period: string;
  featured?: boolean;
  features: string[];
};

export const memberships: PriceCard[] = [
  {
    name: "Tennis Adulte",
    price: "133 €",
    period: "/ an",
    features: [
      "Licence FFT : 33 €",
      "Droit de jeu & dons : 100 € (50 € + 50 €)",
      "Accès aux courts extérieurs & couvert",
      "Éclairage compris",
    ],
  },
  {
    name: "Tennis Couple",
    price: "226 €",
    period: "/ an",
    features: [
      "2 adhésions adultes",
      "Licences FFT : 66 €",
      "Droit de jeu & dons : 160 € (80 € + 80 €)",
      "Accès aux courts extérieurs & couvert",
    ],
  },
  {
    name: "Combiné Tennis + Padel",
    price: "163 €",
    period: "/ an",
    featured: true,
    features: [
      "Licence multi-raquettes : 33 €",
      "Droit de jeu & dons : 130 € (65 € + 65 €)",
      "Tennis & padel tous les jours",
      "Éclairage compris",
    ],
  },
  {
    name: "Padel Adulte",
    price: "156 €",
    period: "/ an",
    features: [
      "Licence FFT : 26 €",
      "Droit de jeu & dons : 130 € (65 € + 65 €)",
      "Accès à la piste de padel",
      "Éclairage compris",
    ],
  },
  {
    name: "Padel Couple",
    price: "260 €",
    period: "/ an",
    features: [
      "2 adhésions adultes",
      "Licences FFT : 52 €",
      "Droit de jeu & dons : 208 € (104 € + 104 €)",
      "Accès à la piste de padel",
    ],
  },
  {
    name: "Padel non licencié au club",
    price: "180 €",
    period: "/ an",
    features: [
      "Sans licence au club",
      "Droit de jeu : 130 € + 50 €",
      "Accès à la piste de padel",
    ],
  },
  {
    name: "Jeunes 7 à -18 ans",
    price: "82 €",
    period: "/ an",
    features: [
      "Tennis + padel multi-raquettes",
      "Licence FFT : 23 €",
      "Droit de jeu & dons : 60 € (30 € + 30 €)",
      "Certificat médical obligatoire",
    ],
  },
  {
    name: "Familles 2 ou 3 enfants",
    price: "− 16 €",
    period: "/ enfant / an",
    features: [
      "Réduction sur la formule Jeunes",
      "Enfants de 7 à -18 ans",
      "Soit 66 € par enfant",
    ],
  },
];

/* La cotisation habituelle est partagée en trois */
export const cotisationParts = [
  {
    name: "La licence",
    text: "Due intégralement à la Fédération Française de Tennis. L'adhésion à la FFT est obligatoire pour pratiquer le tennis et le padel.",
  },
  {
    name: "La part abonnement",
    text: "Dédiée à la pratique du tennis et du padel : entretien des courts, éclairage des courts intérieurs et de la piste de padel compris.",
  },
  {
    name: "La part cotisation",
    text: "Donne lieu à la délivrance d'un reçu « Cerfa » au titre des dons à certains organismes d'intérêt général — déductible de vos impôts.",
  },
];

export const extras = [
  {
    name: "Caution badge d'accès",
    price: "5 €",
    unit: "adulte & enfant",
    note: "Accès au club, aux courts, toilettes & douches",
  },
  {
    name: "Remise Smash Haguenau",
    price: "−15 %",
    unit: "pour tout licencié",
    note: "Sur tout le magasin, hors promotions et balles",
  },
  {
    name: "Raquettes de padel",
    price: "Prêt",
    unit: "nouveaux membres",
    note: "À disposition pour découvrir le padel",
  },
];

export const infosPratiques = [
  "Le tarif annuel s'étend sur la saison tennistique, du 1er septembre au 31 août de l'année suivante.",
  "Accès à l'ensemble des courts de tennis et de padel tous les jours de la semaine (sauf priorités : compétitions, entraînements, école de tennis, animations — voir règlement intérieur).",
  "Adhésion FFT obligatoire : la licence sportive de l'année en cours est exigée, ainsi qu'un certificat médical pour les jeunes de moins de 18 ans.",
  "Accès aux infrastructures par badge (caution 5 €). Les badges sont désactivés au 1er janvier pour les joueurs n'ayant pas régularisé le renouvellement de leur cotisation.",
  "Paiement en ligne possible par Ten'up. Paiement exigé dès le premier jour pour les cours, avec possibilité d'étalement.",
  "Les membres sont vivement invités à ne pas jouer avec des personnes n'étant pas membres du club — la solidarité associative s'impose.",
  "Terrain de pétanque disponible pour tous les membres à jour de leur cotisation (voir règlement intérieur).",
  "Toute l'infrastructure du club est sous vidéosurveillance. Accès au Club House uniquement pendant les heures de permanence (consultez le panneau d'affichage).",
  "Un stock de balles est disponible à l'achat au Club House lors des permanences.",
  "Pour les remises exceptionnelles, nous consulter pour plus de détails et explications.",
];

export const tennisSchool = [
  {
    name: "École de tennis",
    detail: "5 à 17 ans · 30 séances de 1h",
    price: "120 €",
  },
  {
    name: "Cours privés tennis & padel",
    detail: "Jeunes et adultes · contactez le président",
    price: "Sur demande",
  },
];

export const faqs = [
  {
    q: "Comment réserver un court ou la piste de padel ?",
    a: "Les licenciés du club réservent via la plateforme officielle Ten'up (site ou application mobile). Les non-licenciés peuvent réserver ponctuellement la piste de padel via l'application Anybuddy, avec paiement en ligne sécurisé.",
  },
  {
    q: "Faut-il être licencié pour jouer au TPCS ?",
    a: "Non ! Grâce à Anybuddy, vous pouvez réserver le padel sans licence pour une partie ponctuelle. Pour profiter du club toute l'année (tennis, tarifs préférentiels, école de tennis, événements), l'adhésion avec licence FFT reste la meilleure formule.",
  },
  {
    q: "Le club prête-t-il du matériel ?",
    a: "Oui, des raquettes de padel et de pickleball sont disponibles au club house pour les séances découverte. Pour le tennis, pensez à apporter votre raquette — des balles sont en vente sur place.",
  },
  {
    q: "Peut-on jouer en hiver ou par mauvais temps ?",
    a: "Bien sûr : le club dispose d'un court couvert accessible toute l'année selon le planning de réservation. La piste de padel, elle, se joue en extérieur par presque tous les temps.",
  },
  {
    q: "À partir de quel âge peut-on inscrire un enfant ?",
    a: "L'école de tennis accueille les enfants dès 5 ans avec le mini-tennis : matériel adapté, pédagogie ludique et encadrement passionné. Une séance d'essai est offerte en début de saison.",
  },
  {
    q: "Comment devenir sponsor ou partenaire du club ?",
    a: "Le club vit grâce à ses partenaires locaux : panneaux au bord des courts, visibilité lors des tournois et sur le site. Contactez le président pour recevoir le dossier de partenariat.",
  },
  {
    q: "Y a-t-il un parking sur place ?",
    a: "Oui, un parking gratuit et illimité se trouve directement au club, rue de Koenigsbruck. Le club house de 150 m² avec cuisine vous accueille pour la pause d'après-match.",
  },
];

export const testimonials = [
  {
    quote:
      "La piste de padel est superbe et l'ambiance encore mieux. On réserve en deux minutes sur l'appli, et il y a toujours quelqu'un pour compléter un double !",
    name: "Julien",
    role: "Licencié padel depuis 2024",
  },
  {
    quote:
      "Nos deux enfants sont à l'école de tennis, et toute la famille se retrouve au club le samedi. C'est simple : le TPCS est devenu notre deuxième maison.",
    name: "Caroline",
    role: "Formule famille",
  },
  {
    quote:
      "Membre depuis plus de vingt ans. Le club a su se réinventer avec le padel et le pickleball sans jamais perdre son esprit village. Chapeau au comité !",
    name: "Bernard",
    role: "Membre historique",
  },
];

export type GalleryItem = {
  src: StaticImageData;
  alt: string;
  category: string;
  caption: string;
};

export const gallery: GalleryItem[] = [
  {
    src: padelCourt,
    alt: "La piste de padel SLAMCOURT du club",
    category: "Padel",
    caption: "La piste SLAMCOURT, dernière génération",
  },
  {
    src: terrasseClub,
    alt: "La terrasse fleurie du club house face à la piste de padel",
    category: "Club house",
    caption: "La terrasse, aux premières loges du padel",
  },
  {
    src: courtsExterieurs,
    alt: "Les courts de tennis extérieurs de Soufflenheim",
    category: "Tennis",
    caption: "Les courts extérieurs, au cœur du village",
  },
  {
    src: feteClub,
    alt: "La fête du club sur l'espace vert",
    category: "Événements",
    caption: "Fête du club sur l'espace vert",
  },
  {
    src: clubHouse,
    alt: "Le club house et son salon d'été sous voile d'ombrage",
    category: "Club house",
    caption: "Le salon d'été du club house",
  },
  {
    src: pickleballJeunes,
    alt: "Des jeunes découvrent le pickleball devant le court couvert",
    category: "Jeunes",
    caption: "Découverte du pickleball pour les jeunes",
  },
];

/* L'histoire complète du club (chapitres + photos d'archives)
   vit dans src/lib/histoire.ts */

/* La galerie complète = photos récentes + toutes les photos d'archives
   de la page histoire (sans doublons). Utilisée par la page /galerie ;
   la page d'accueil garde l'aperçu `gallery` ci-dessus. */
const archives: GalleryItem[] = histoireChapitres.flatMap((chapitre) =>
  chapitre.photos
    .filter((photo) => !gallery.some((item) => item.src === photo.src))
    .map((photo) => ({
      src: photo.src,
      alt: photo.alt,
      category: "Archives",
      caption: `${chapitre.title} — ${chapitre.period}`,
    }))
);

export const galleryComplete: GalleryItem[] = [...gallery, ...archives];

export const committee = [
  {
    role: "Président",
    name: "Serge Moreau",
    contact: "06 10 14 60 39",
    icon: "crown",
  },
  {
    role: "Vice Président",
    name: "Stéphane Walkiewicz",
    icon: "crown",
  },
  {
    role: "Vice Président",
    name: "Patrick Lefèbvre",
    icon: "crown",
  },
  {
    role: "Vice Président",
    name: "Georges Niebel",
    icon: "crown",
  },
  {
    role: "Trésorière",
    name: "Hélène Niebel",
    icon: "coins",
  },
  {
    role: "Trésorier adjoint",
    name: "Jean-Claude Vitzikam",
    icon: "coins",
  },
  {
    role: "Secrétaire",
    name: "Catherine Walkiewicz",
    icon: "pen",
  },
  {
    role: "Commission Sportive",
    name: "Maxime Moreau",
    icon: "trophy",
  },
  {
    role: "Commission Sportive",
    name: "Matthieu Schmitt",
    icon: "trophy",
  },
  {
    role: "Commission Sportive",
    name: "Benjamin Matteï",
    icon: "trophy",
  },
  {
    role: "Commission Sportive",
    name: "Raphaël Stein",
    icon: "trophy",
  },
  {
    role: "Commission Sportive",
    name: "Frédéric Alves",
    icon: "trophy",
  },
  {
    role: "Commission Entretien",
    name: "Christophe Issele",
    icon: "wrench",
  },
  {
    role: "Commission Entretien",
    name: "Valentin Beck",
    icon: "wrench",
  },
  {
    role: "Commission Animation",
    name: "Eric Kauffmann",
    icon: "spark",
  },
  {
    role: "Commission Animation",
    name: "Michael Keiflin",
    icon: "spark",
  },
  {
    role: "Assesseur",
    name: "Quentin Brucker",
    icon: "shield",
  },
  {
    role: "Assesseur",
    name: "François Cau",
    icon: "shield",
  },
];

export const facilities = [
  {
    title: "Courts extérieurs",
    detail:
      "Deux courts en plein air au cœur du village, éclairés pour les fins de journée d'été.",
    tag: "2 courts",
  },
  {
    title: "Court couvert",
    detail:
      "Un court sous halle pour jouer toute l'année, réservable comme les courts extérieurs.",
    tag: "Ouvert à l'année",
  },
  {
    title: "Piste de padel",
    detail:
      "Structure SLAMCOURT panoramique dernière génération, éclairée, réservable en ligne 7j/7.",
    tag: "Nouveau",
  },
  {
    title: "Club house & terrasse",
    detail:
      "150 m² avec cuisine équipée, terrasse ombragée, pétanque, espace vert et parking gratuit.",
    tag: "150 m²",
  },
];
