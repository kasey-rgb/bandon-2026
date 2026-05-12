import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Itinerary from "@/components/Itinerary";
import Schedule from "@/components/Schedule";
import Courses from "@/components/Courses";
import Roster from "@/components/Roster";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dune-950 text-dune-100">
      <Hero />
      <Countdown />
      <Itinerary />
      <Schedule />
      <Courses />
      <Roster />
      <Gallery />
      <Footer />
    </main>
  );
}
