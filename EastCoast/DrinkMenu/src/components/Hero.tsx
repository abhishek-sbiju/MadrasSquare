import { useState, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";

import heroBg1 from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg-2.png";
import heroBg3 from "@/assets/hero-bg-3.png";
import heroBg4 from "@/assets/hero-bg-4.png";

const heroImages = [heroBg1, heroBg2, heroBg3, heroBg4];
const INTERVAL_MS = 5000;

const Hero = () => {
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
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/95" />
      
      {/* Content — stays static, never re-renders with carousel */}
      <div className="relative z-10 text-center px-4">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-amber-light mb-4 animate-fade-in">
          Madras Square
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.12em] text-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          EAST COAST
        </h1>
        
        {/* Horizontal line divider */}
        <div className="flex items-center justify-center gap-4 mb-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-amber" />
          <span className="w-1.5 h-1.5 rounded-full bg-amber" />
          <span className="w-16 h-px bg-gradient-to-l from-transparent to-amber" />
        </div>

        <p className="font-heading text-xl md:text-2xl italic text-amber-light tracking-widest mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Drinks Menu
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <button
            onClick={scrollToMenu}
            className="px-8 py-3 bg-amber/90 text-primary-foreground text-xs tracking-[0.2em] font-body font-semibold hover:bg-amber transition-all"
          >
            VIEW MENU
          </button>
          <a
            href="tel:+19999999999"
            className="px-8 py-3 border border-amber/40 text-amber-light text-xs tracking-[0.2em] font-body font-semibold hover:bg-amber/10 transition-all"
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
                ? "w-6 bg-amber/80"
                : "w-2 bg-white/25 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
      
      {/* Scroll indicator */}
      <button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-amber transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default Hero;
