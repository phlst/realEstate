import Footer from "./components/Footer";
import Hero from "./ui/Hero";
import LoadSlide from "./ui/LoadSlide";
import OurOptions from "./ui/OurOptions";
import Testimonials from "./ui/Testimonal";

export default function Home() {
  return (
    <div>
      <LoadSlide />
      <Hero />
      <OurOptions />
      <Testimonials />
      <Footer />
    </div>
  );
}
