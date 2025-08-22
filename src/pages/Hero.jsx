import heroImage from "../assets/image/hero.webp"; // apna image path daalna
import AnimatedSection from "../components/AnimatedSection";

export default function HeroSection() {
  return (
    <AnimatedSection>
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Vertical Text (Left side) */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 rotate-180 origin-center">
        <p className="text-[#000] text-sm tracking-[0.3em] whitespace-nowrap [writing-mode:vertical-lr]">
          BECAUSE WE LOVE COFFEE
        </p>
      </div>

      {/* Center Content */}
      <div className="relative text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mt-30 text-white drop-shadow-lg leading-tight">
          Incredible food <br /> and heavenly coffee
        </h1>
        <p className="mt-4 text-white text-lg md:text-xl">
          — The Culinaire Restaurant Guide —
        </p>
      </div>
    </section>
    </AnimatedSection>
  );
}
