import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronDown } from "lucide-react";

import heroBg1 from "@/assets/hero-bg-new.png";
import heroBg2 from "@/assets/hero-bg-2.png";
import heroBg3 from "@/assets/hero-bg-3.png";
import heroBg4 from "@/assets/hero-bg-4.png";
import { restaurantInfo } from "@/data/restaurantInfo";

const heroImages = [heroBg1, heroBg2, heroBg3, heroBg4];
const DISPLAY_MS = 7000;
const FADE_MS = 2000;

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  // Preload images
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(advance, DISPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [advance]);

  const goTo = (i: number) => {
    if (i === currentIndex) return;
    clearInterval(timerRef.current);
    setCurrentIndex(i);
    timerRef.current = setInterval(advance, DISPLAY_MS);
  };

  const scrollToMenu = () => {
    document.getElementById("menu-nav")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen-safe flex items-center justify-center overflow-hidden bg-black">

      {/* Background images with smooth crossfade + subtle blur */}
      {heroImages.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === currentIndex ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-kenburns blur-[1px]"
            style={{
              backgroundImage: `url(${src})`,
              animationDelay: `${-i * 6}s`,
            }}
          />
        </div>
      ))}

      {/* 🔥 Cinematic gradient (depth) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* 🔥 Center light + vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.5) 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-white/80 mb-4 animate-fade-in">
          {restaurantInfo.parentBrand}
        </p>

        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.12em] text-white mb-4 animate-fade-in"
          style={{
            animationDelay: "0.15s",
            textShadow: "0 2px 20px rgba(0,0,0,0.6)",
          }}
        >
          {restaurantInfo.venue}
        </h1>

        <div
          className="flex items-center justify-center gap-4 mb-4 animate-fade-in"
          style={{ animationDelay: "0.25s" }}
        >
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
        </div>

        <p
          className="font-heading text-xl md:text-2xl italic text-white/80 tracking-widest mb-10 animate-fade-in"
          style={{ animationDelay: "0.35s" }}
        >
          {restaurantInfo.menuLabel}
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.45s" }}
        >
          <button
            onClick={scrollToMenu}
            className="px-8 py-3 bg-gold/90 text-primary-foreground text-xs tracking-[0.2em] font-body font-semibold hover:bg-gold transition-all duration-300"
          >
            VIEW MENU
          </button>

          <a
            href={restaurantInfo.phoneHref}
            className="px-8 py-3 border border-gold/60 text-white/90 text-xs tracking-[0.2em] font-body font-semibold hover:bg-gold/20 transition-all duration-300"
          >
            CALL TO RESERVE
          </a>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Show image ${i + 1}`}
            className={`h-[3px] rounded-full transition-all duration-500 ${i === currentIndex
                ? "w-6 bg-gold/80"
                : "w-2 bg-white/25 hover:bg-white/40"
              }`}
          />
        ))}
      </div>

      {/* Scroll */}
      <button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default HeroSection;
