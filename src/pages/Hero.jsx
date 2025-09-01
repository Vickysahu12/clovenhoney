import heroImage from "../assets/image/hero.webp"; 
import AnimatedSection from "../components/AnimatedSection";

export default function HeroSection() {
  return (
    <AnimatedSection>
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-emerald-900/40 to-transparent"></div>

        {/* Vertical Text (Left side) */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 rotate-180 origin-center">
          <p className="text-blue-800 text-sm tracking-[0.3em] whitespace-nowrap [writing-mode:vertical-lr] font-semibold drop-shadow">
            BECAUSE WE LOVE COFFEE
          </p>
        </div>

        {/* Center Content */}
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mt-30 text-white drop-shadow-2xl leading-tight">
            Incredible food <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              heavenly coffee
            </span>
          </h1>
          <p className="mt-6 text-gray-200 text-lg md:text-xl italic">
            — The Culinaire Restaurant Guide —
          </p>
        </div>
      </section>
    </AnimatedSection>
  );
}
