import Navbar from "./components/layout/Navbar";
import Hero from "./components/ui/Hero";
import ToolCard from "./components/ui/Toolcard";
import WhyChoose from "./components/ui/WhyChoose";
import Stats from "./components/ui/Stats";
import Testimonials from "./components/ui/Testimonials";
import FAQ from "./components/ui/Faq";
import CTA from "./components/ui/CTA";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <ToolCard />
      

    <div className="h-20 bg-black" />

      <WhyChoose />

      <div className="h-12 bg-black" />

      <Stats />

      <div className="h-10 bg-black" />

      <Testimonials />

      <div className="h-5 bg-black" />

      <FAQ />

      <CTA />

      <Footer />
    </>
  );
}