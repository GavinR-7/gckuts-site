import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import MobileBookBar from "@/components/MobileBookBar";
import BookingModal from "@/components/BookingModal";
import { jsonLd } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* LocalBusiness structured data for search engines. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <MobileBookBar />

      {/* Single booking overlay; every Book button opens this. */}
      <BookingModal />
    </>
  );
}
