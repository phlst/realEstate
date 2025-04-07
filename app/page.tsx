import Header from "./components/Header";
import Hero from "./ui/Hero";
import LoadSlide from "./ui/LoadSlide";
import OurOptions from "./ui/OurOptions";
import Testimonials from "./ui/Testimonal";

export default function Home() {
  return (
    <div>
      <Header />
      <LoadSlide />
      <Hero />
      <OurOptions />
      <Testimonials />
    </div>
  );
}
