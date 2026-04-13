import { useState, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";

import heroBg1 from "@/assets/hero-bg-new.png";
import heroBg2 from "@/assets/hero-bg-2.png";
import heroBg3 from "@/assets/hero-bg-3.png";
import heroBg4 from "@/assets/hero-bg-4.png";

const heroImages = [heroBg1, heroBg2, heroBg3, heroBg4];
const INTERVAL_MS = 5000;

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload all images on mount
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-advance carousel
  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [advance]);

  const scrollToMenu = () => {
    document.getElementById("menu-nav")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background images — all mounted, only active one is visible */}
      {heroImages.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1800ms] ease-in-out"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === currentIndex ? 1 : 0,
          }}
        />
      ))}

      {/* Layered overlays for depth and readability */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

      {/* Content — stays static, never re-renders with carousel */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-body text-[10px] md:text-xs tracking-[0.45em] uppercase text-gold-light/80 mb-5 animate-fade-in">
          Madras Square
        </p>

        <h1
          className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[0.14em] text-foreground mb-5 heading-glow animate-fade-in"
          style={{ animationDelay: "0.15s" }}
        >
          EAST COAST
        </h1>

        <div className="flex items-center justify-center gap-3 mb-5 animate-fade-in" style={{ animationDelay: "0.25s" }}>
          <span className="w-14 h-px bg-gradient-to-r from-transparent via-gold/60 to-gold" />
          <span className="w-[6px] h-[6px] rounded-full bg-gold/80" />
          <span className="w-14 h-px bg-gradient-to-l from-transparent via-gold/60 to-gold" />
        </div>

        <p
          className="font-heading text-lg md:text-2xl italic text-gold-light tracking-[0.2em] mb-12 animate-fade-in"
          style={{ animationDelay: "0.35s" }}
        >
          Food Menu
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.45s" }}>
          <button
            onClick={scrollToMenu}
            className="px-10 py-3.5 bg-gold text-primary-foreground text-[11px] tracking-[0.22em] font-body font-semibold hover:bg-gold-light hover:text-background transition-all duration-300 rounded-sm"
          >
            VIEW MENU
          </button>
          <a
            href="tel:+19999999999"
            className="px-10 py-3.5 border border-gold/40 text-gold-light text-[11px] tracking-[0.22em] font-body font-semibold hover:bg-gold/10 hover:border-gold/70 transition-all duration-300 rounded-sm"
          >
            BOOK A TABLE
          </a>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Show image ${i + 1}`}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              i === currentIndex
                ? "w-6 bg-gold/80"
                : "w-2 bg-white/25 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToMenu}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-light/50 hover:text-gold transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={26} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default HeroSection;
