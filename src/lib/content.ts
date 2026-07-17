import { readJson } from "./storage";
import type {
  ClubEvent,
  CtaBandContent,
  HomeIntro,
  ReservationInfo,
  CommitteeMember,
  ContactMessage,
  CotisationPart,
  Discipline,
  Extra,
  Facility,
  Faq,
  GalleryItem,
  HistoireChapitre,
  HistoireInfos,
  InfosPratiques,
  NewsItem,
  PriceCard,
  SiteSettings,
  Social,
  Stat,
  Sponsor,
  TennisCourse,
  Testimonial,
} from "./content-types";

/* ------------------------------------------------------------------ */
/*  Lecture du contenu du site — remplace l'ancien data.ts.           */
/*  Chaque getter lit le JSON géré par l'administration (/admin).     */
/* ------------------------------------------------------------------ */

export async function getSettings(): Promise<SiteSettings> {
  return readJson("settings");
}

export async function getSocials(): Promise<Social[]> {
  return readJson("socials");
}

export async function getStats(): Promise<Stat[]> {
  return readJson("stats");
}

export async function getDisciplines(): Promise<Discipline[]> {
  return readJson("disciplines");
}

export async function getNews(): Promise<NewsItem[]> {
  return readJson("news");
}

export async function getEvents(): Promise<ClubEvent[]> {
  return readJson("events");
}

export async function getMemberships(): Promise<PriceCard[]> {
  return readJson("memberships");
}

export async function getCotisationParts(): Promise<CotisationPart[]> {
  return readJson("cotisation");
}

export async function getExtras(): Promise<Extra[]> {
  return readJson("extras");
}

export async function getInfosPratiques(): Promise<InfosPratiques> {
  return readJson("infos-pratiques");
}

export async function getTennisSchool(): Promise<TennisCourse[]> {
  return readJson("tennis-school");
}

export async function getFaqs(): Promise<Faq[]> {
  return readJson("faqs");
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return readJson("testimonials");
}

export async function getGallery(): Promise<GalleryItem[]> {
  return readJson("gallery");
}

export async function getSponsors(): Promise<Sponsor[]> {
  return readJson("sponsors");
}

export async function getCommittee(): Promise<CommitteeMember[]> {
  return readJson("committee");
}

export async function getFacilities(): Promise<Facility[]> {
  return readJson("facilities");
}

export async function getHistoireChapitres(): Promise<HistoireChapitre[]> {
  return readJson("histoire-chapitres");
}

export async function getHistoireInfos(): Promise<HistoireInfos> {
  return readJson("histoire-infos");
}

export async function getHomeIntro(): Promise<HomeIntro> {
  return readJson("home-intro");
}

export async function getReservation(): Promise<ReservationInfo> {
  return readJson("reservation");
}

export async function getCtaBand(): Promise<CtaBandContent> {
  return readJson("cta-band");
}

export async function getMessages(): Promise<ContactMessage[]> {
  return readJson("messages");
}

/* Galerie complète = galerie mise en avant + photos d'archives de la
   page histoire (sans doublons). Utilisée par la page /galerie. */
export async function getGalleryComplete(): Promise<GalleryItem[]> {
  const [gallery, chapitres] = await Promise.all([
    getGallery(),
    getHistoireChapitres(),
  ]);
  const seen = new Set(gallery.map((item) => item.src.src));
  const archives = chapitres.flatMap((chapitre) =>
    chapitre.photos
      .filter((photo) => !seen.has(photo.src.src))
      .map((photo) => ({
        src: photo.src,
        alt: photo.alt,
        category: "Archives",
        caption: `${chapitre.title} — ${chapitre.period}`,
      }))
  );
  return [...gallery, ...archives];
}
