import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black">
        <HeroBackground />
        <HeroContent />
      </section>

      {/* Floating Stats */}
      <HeroStats />
    </>
  );
}