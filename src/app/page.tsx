import Hero from "@/components/home/Hero";
import StatsBand from "@/components/home/StatsBand";
import ClubIntro from "@/components/home/ClubIntro";
import Disciplines from "@/components/home/Disciplines";
import ReservationBand from "@/components/home/ReservationBand";
import NewsAgenda from "@/components/home/NewsAgenda";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import Sponsors from "@/components/home/Sponsors";
import FaqSection from "@/components/home/FaqSection";
import CtaBand from "@/components/home/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ClubIntro />
      <Disciplines />
      <ReservationBand />
      <NewsAgenda />
      <GalleryPreview />
      <Testimonials />
      <Sponsors />
      <FaqSection />
      <CtaBand />
    </>
  );
}
