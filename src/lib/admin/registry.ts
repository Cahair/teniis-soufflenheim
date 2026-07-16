import { socialIconOptions } from "@/lib/nav";

/* ------------------------------------------------------------------ */
/*  Le registre du mini-CMS : chaque section décrit un fichier JSON   */
/*  (collection ou fiche unique) et ses champs. Les écrans d'admin    */
/*  et les actions serveur sont entièrement pilotés par ces données.  */
/* ------------------------------------------------------------------ */

export type FieldDef = {
  path: string; // chemin dans l'objet ("title", "cta.label", "items"…)
  label: string;
  type:
    | "text"
    | "textarea"
    | "lines" // string[] — une entrée par ligne
    | "number"
    | "checkbox"
    | "select"
    | "image" // ImageRef
    | "photos"; // { src: ImageRef; alt: string }[]
  help?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  rows?: number;
};

export type Section = {
  slug: string; // segment d'URL de l'admin
  file: string; // nom du JSON dans content/
  title: string;
  description: string;
  kind: "collection" | "singleton";
  group: string;
  itemName: string; // « une actualité », pour les boutons
  titlePath?: string; // champ affiché comme titre dans la liste
  subtitlePath?: string;
  fields: FieldDef[];
};

const committeeIconOptions = [
  { value: "crown", label: "Couronne (présidence)" },
  { value: "coins", label: "Pièces (trésorerie)" },
  { value: "pen", label: "Stylo (secrétariat)" },
  { value: "trophy", label: "Trophée (sportif)" },
  { value: "wrench", label: "Clé (entretien)" },
  { value: "spark", label: "Étincelle (animation)" },
  { value: "shield", label: "Bouclier (assesseur)" },
];

export const sections: Section[] = [
  /* ------------------------- Vie du club ------------------------- */
  {
    slug: "actualites",
    file: "news",
    title: "Actualités",
    description: "Les articles affichés sur la page d'accueil et la page Actualités.",
    kind: "collection",
    group: "Vie du club",
    itemName: "une actualité",
    titlePath: "title",
    subtitlePath: "date",
    fields: [
      { path: "title", label: "Titre", type: "text", required: true },
      { path: "date", label: "Date affichée", type: "text", required: true, help: "Exemple : 12 juin 2026" },
      { path: "category", label: "Catégorie", type: "text", required: true, help: "Exemple : Padel, Vie du club, École de tennis…" },
      { path: "excerpt", label: "Texte", type: "textarea", rows: 5, required: true },
      { path: "image", label: "Photo", type: "image", required: true },
      { path: "slug", label: "Identifiant technique", type: "text", help: "Lettres minuscules et tirets, unique par article (ex. fete-du-club)." },
    ],
  },
  {
    slug: "agenda",
    file: "events",
    title: "Agenda",
    description: "Les prochains rendez-vous du club (accueil + page Actualités).",
    kind: "collection",
    group: "Vie du club",
    itemName: "un événement",
    titlePath: "title",
    subtitlePath: "meta",
    fields: [
      { path: "day", label: "Jour", type: "text", required: true, help: "Exemple : 18" },
      { path: "month", label: "Mois (abrégé)", type: "text", required: true, help: "Exemple : Juil." },
      { path: "title", label: "Titre", type: "text", required: true },
      { path: "meta", label: "Lieu et horaire", type: "text", required: true, help: "Exemple : Courts extérieurs · dès 9h" },
    ],
  },
  {
    slug: "galerie",
    file: "gallery",
    title: "Galerie",
    description: "Les photos mises en avant (accueil + page Galerie). Les archives de la page Histoire s'ajoutent automatiquement à la galerie complète.",
    kind: "collection",
    group: "Vie du club",
    itemName: "une photo",
    titlePath: "caption",
    subtitlePath: "category",
    fields: [
      { path: "src", label: "Photo", type: "image", required: true },
      { path: "caption", label: "Légende", type: "text", required: true },
      { path: "category", label: "Catégorie (filtre)", type: "text", required: true, help: "Exemple : Padel, Tennis, Club house, Événements…" },
      { path: "alt", label: "Description pour malvoyants", type: "text", required: true, help: "Décrit la photo en une phrase." },
    ],
  },

  /* --------------------- Tarifs & inscriptions ------------------- */
  {
    slug: "adhesions",
    file: "memberships",
    title: "Adhésions",
    description: "Les formules d'adhésion annuelles de la page Tarifs.",
    kind: "collection",
    group: "Tarifs & inscriptions",
    itemName: "une formule",
    titlePath: "name",
    subtitlePath: "price",
    fields: [
      { path: "name", label: "Nom de la formule", type: "text", required: true },
      { path: "price", label: "Prix affiché", type: "text", required: true, help: "Exemple : 133 €" },
      { path: "period", label: "Période", type: "text", required: true, help: "Exemple : / an" },
      { path: "featured", label: "Formule mise en avant (cadre doré)", type: "checkbox" },
      { path: "features", label: "Ce que comprend la formule", type: "lines", rows: 5, help: "Une ligne par élément." },
    ],
  },
  {
    slug: "cotisation",
    file: "cotisation",
    title: "Cotisation en 3 parts",
    description: "Le bloc « Votre cotisation, partagée en trois » de la page Tarifs.",
    kind: "collection",
    group: "Tarifs & inscriptions",
    itemName: "une part",
    titlePath: "name",
    fields: [
      { path: "name", label: "Nom de la part", type: "text", required: true },
      { path: "text", label: "Explication", type: "textarea", rows: 4, required: true },
    ],
  },
  {
    slug: "ecole-de-tennis",
    file: "tennis-school",
    title: "École & cours",
    description: "Les lignes du tableau « École & cours » de la page Tarifs.",
    kind: "collection",
    group: "Tarifs & inscriptions",
    itemName: "un cours",
    titlePath: "name",
    subtitlePath: "price",
    fields: [
      { path: "name", label: "Intitulé", type: "text", required: true },
      { path: "detail", label: "Détail", type: "text", required: true, help: "Exemple : 5 à 17 ans · 30 séances de 1h" },
      { path: "price", label: "Prix affiché", type: "text", required: true },
    ],
  },
  {
    slug: "bons-plans",
    file: "extras",
    title: "Les petits plus",
    description: "Le bloc « Bon à savoir » de la page Tarifs (badge, remises, prêt de matériel).",
    kind: "collection",
    group: "Tarifs & inscriptions",
    itemName: "un élément",
    titlePath: "name",
    subtitlePath: "price",
    fields: [
      { path: "name", label: "Intitulé", type: "text", required: true },
      { path: "price", label: "Montant affiché", type: "text", required: true, help: "Exemple : 5 €, −15 %, Prêt…" },
      { path: "unit", label: "Précision", type: "text", help: "Exemple : adulte & enfant" },
      { path: "note", label: "Note", type: "text" },
    ],
  },
  {
    slug: "infos-pratiques",
    file: "infos-pratiques",
    title: "Conditions générales",
    description: "La liste « Conditions générales de l'année » de la page Tarifs.",
    kind: "singleton",
    group: "Tarifs & inscriptions",
    itemName: "les conditions",
    fields: [
      { path: "items", label: "Conditions (une par ligne)", type: "lines", rows: 14 },
    ],
  },

  /* ---------------------------- Le club -------------------------- */
  {
    slug: "histoire",
    file: "histoire-chapitres",
    title: "Histoire du club",
    description: "La frise chronologique de la page Le club : un chapitre par époque, avec ses photos d'archives.",
    kind: "collection",
    group: "Le club",
    itemName: "un chapitre",
    titlePath: "title",
    subtitlePath: "period",
    fields: [
      { path: "period", label: "Période", type: "text", required: true, help: "Exemple : 1985 – 1986" },
      { path: "title", label: "Titre du chapitre", type: "text", required: true },
      { path: "paragraphs", label: "Récit (un paragraphe par ligne)", type: "lines", rows: 8 },
      { path: "photos", label: "Photos d'archives", type: "photos" },
    ],
  },
  {
    slug: "histoire-benevoles",
    file: "histoire-infos",
    title: "Remerciements & bénévoles",
    description: "Le texte de remerciements et les listes de bénévoles historiques de la page Le club.",
    kind: "singleton",
    group: "Le club",
    itemName: "les remerciements",
    fields: [
      { path: "remerciements", label: "Texte de remerciements", type: "textarea", rows: 5 },
      { path: "membresComite", label: "Membres du comité au fil des années (un par ligne)", type: "lines", rows: 12 },
      { path: "educateurs", label: "Éducateurs et animateurs sportifs (un par ligne)", type: "lines", rows: 8 },
    ],
  },
  {
    slug: "comite",
    file: "committee",
    title: "Le comité",
    description: "Les membres du comité actuel, affichés sur la page Le comité.",
    kind: "collection",
    group: "Le club",
    itemName: "un membre",
    titlePath: "name",
    subtitlePath: "role",
    fields: [
      { path: "name", label: "Nom", type: "text", required: true },
      { path: "role", label: "Rôle", type: "text", required: true, help: "Exemple : Président, Trésorière, Commission Sportive…" },
      { path: "contact", label: "Téléphone (facultatif)", type: "text" },
      { path: "photo", label: "Photo (facultative)", type: "image", help: "Sans photo, une vignette avec les initiales et l'icône est affichée." },
      { path: "commissions", label: "Commissions (une par ligne)", type: "lines", rows: 3, help: "Toutes les commissions où siège le membre (ex. Commission Sportive). Sert au récapitulatif de la page Le comité." },
      { path: "icon", label: "Icône", type: "select", options: committeeIconOptions, required: true },
    ],
  },
  {
    slug: "installations",
    file: "facilities",
    title: "Installations",
    description: "Les équipements du club présentés sur la page Le club.",
    kind: "collection",
    group: "Le club",
    itemName: "une installation",
    titlePath: "title",
    subtitlePath: "tag",
    fields: [
      { path: "title", label: "Nom", type: "text", required: true },
      { path: "detail", label: "Description", type: "textarea", rows: 3, required: true },
      { path: "tag", label: "Badge", type: "text", required: true, help: "Exemple : 2 courts, Nouveau, 150 m²" },
      { path: "image", label: "Photo", type: "image", required: true },
    ],
  },
  {
    slug: "disciplines",
    file: "disciplines",
    title: "Disciplines",
    description: "Les trois sports présentés sur la page d'accueil (tennis, padel, pickleball).",
    kind: "collection",
    group: "Le club",
    itemName: "une discipline",
    titlePath: "name",
    subtitlePath: "badge",
    fields: [
      { path: "name", label: "Nom", type: "text", required: true },
      { path: "badge", label: "Badge", type: "text", required: true, help: "Exemple : Nouveau, La sensation du moment…" },
      { path: "image", label: "Photo", type: "image", required: true },
      { path: "description", label: "Description", type: "textarea", rows: 4, required: true },
      { path: "features", label: "Points forts (un par ligne)", type: "lines", rows: 4 },
      { path: "cta.label", label: "Texte du bouton", type: "text", required: true },
      { path: "cta.href", label: "Lien du bouton", type: "text", required: true, help: "Page du site (/contact) ou lien externe (https://…)." },
    ],
  },
  {
    slug: "chiffres-cles",
    file: "stats",
    title: "Chiffres clés",
    description: "Le bandeau doré de chiffres sur la page d'accueil.",
    kind: "collection",
    group: "Le club",
    itemName: "un chiffre",
    titlePath: "label",
    fields: [
      { path: "value", label: "Valeur", type: "number", required: true },
      { path: "suffix", label: "Suffixe", type: "text", help: "Exemple : +, j/7 (laisser vide sinon)." },
      { path: "label", label: "Libellé", type: "text", required: true },
    ],
  },

  /* --------------------------- Divers ---------------------------- */
  {
    slug: "sponsors",
    file: "sponsors",
    title: "Sponsors",
    description: "Les partenaires affichés sur l'accueil (bandeau défilant) et la page Sponsors.",
    kind: "collection",
    group: "Partenaires & divers",
    itemName: "un sponsor",
    titlePath: "name",
    subtitlePath: "detail",
    fields: [
      { path: "name", label: "Nom", type: "text", required: true },
      { path: "logo", label: "Logo", type: "image", required: true },
      { path: "detail", label: "Activité (facultatif)", type: "text" },
    ],
  },
  {
    slug: "temoignages",
    file: "testimonials",
    title: "Témoignages",
    description: "Les avis de membres affichés sur la page d'accueil.",
    kind: "collection",
    group: "Partenaires & divers",
    itemName: "un témoignage",
    titlePath: "name",
    subtitlePath: "role",
    fields: [
      { path: "quote", label: "Citation", type: "textarea", rows: 4, required: true },
      { path: "name", label: "Prénom", type: "text", required: true },
      { path: "role", label: "Précision", type: "text", required: true, help: "Exemple : Licencié padel depuis 2024" },
    ],
  },
  {
    slug: "faq",
    file: "faqs",
    title: "FAQ",
    description: "Les questions-réponses (5 premières sur l'accueil, toutes sur la page Contact).",
    kind: "collection",
    group: "Partenaires & divers",
    itemName: "une question",
    titlePath: "q",
    fields: [
      { path: "q", label: "Question", type: "text", required: true },
      { path: "a", label: "Réponse", type: "textarea", rows: 4, required: true },
    ],
  },
  {
    slug: "reseaux-sociaux",
    file: "socials",
    title: "Réseaux sociaux",
    description: "Les liens affichés dans le pied de page, le menu mobile et la page Contact.",
    kind: "collection",
    group: "Partenaires & divers",
    itemName: "un réseau",
    titlePath: "label",
    subtitlePath: "href",
    fields: [
      { path: "label", label: "Nom", type: "text", required: true },
      { path: "href", label: "Adresse de la page", type: "text", required: true },
      { path: "icon", label: "Icône", type: "select", options: socialIconOptions, required: true },
    ],
  },
  {
    slug: "coordonnees",
    file: "settings",
    title: "Coordonnées & liens",
    description: "Les informations générales du club : adresse, téléphones, e-mails, liens de réservation et mot du président.",
    kind: "singleton",
    group: "Partenaires & divers",
    itemName: "les coordonnées",
    fields: [
      { path: "name", label: "Nom du club", type: "text", required: true },
      { path: "shortName", label: "Sigle", type: "text", required: true },
      { path: "baseline", label: "Devise", type: "text", required: true },
      { path: "address.street", label: "Rue", type: "text", required: true },
      { path: "address.city", label: "Code postal et ville", type: "text", required: true },
      { path: "address.region", label: "Région", type: "text", required: true },
      { path: "phoneClub", label: "Téléphone du club", type: "text", required: true },
      { path: "president", label: "Nom du président", type: "text", required: true },
      { path: "phonePresident", label: "Téléphone du président", type: "text", required: true },
      { path: "motPresident", label: "Mot du président (page Le club)", type: "textarea", rows: 5 },
      { path: "emails.president", label: "E-mail du président", type: "text", required: true },
      { path: "emails.secretariat", label: "E-mail du secrétariat", type: "text", required: true },
      { path: "links.inscription", label: "Lien du formulaire d'inscription", type: "text", required: true },
      { path: "links.tenup", label: "Lien Ten'up", type: "text", required: true },
      { path: "links.anybuddy", label: "Lien Anybuddy", type: "text", required: true },
      { path: "links.fftPadel", label: "Lien FFT", type: "text", required: true },
      { path: "links.itineraire", label: "Lien itinéraire (Google Maps)", type: "text", required: true },
    ],
  },
];

export const sectionGroups = [
  "Vie du club",
  "Tarifs & inscriptions",
  "Le club",
  "Partenaires & divers",
];

export function getSection(slug: string): Section {
  const section = sections.find((s) => s.slug === slug);
  if (!section) throw new Error(`Section d'administration inconnue : ${slug}`);
  return section;
}
