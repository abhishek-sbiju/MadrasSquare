import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronDown } from "lucide-react";

import ec1 from "@/assets/ec1.jpeg";
import ec2 from "@/assets/ec2.jpeg";
import ec3 from "@/assets/ec3.jpeg";

const heroImages = [ec1, ec2, ec3];
const DISPLAY_MS = 7000;
const FADE_MS = 2000;

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

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
    <section className="relative h-screen-safe flex items-center justify-center overflow-hidden bg-black">

      {/* Background images */}
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

      {/* 🔥 Clean coastal gradient (lighter than drink) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/70" />

      {/* 🔥 Subtle center lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.35) 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <p className="font-body text-sm tracking-[0.4em] uppercase text-gold-light mb-4 animate-fade-in">
          Madras Square
        </p>

        <h1
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.12em] text-white mb-4 animate-fade-in"
          style={{
            animationDelay: "0.15s",
            textShadow: "0 2px 20px rgba(0,0,0,0.6)",
          }}
        >
          EAST COAST
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
          className="font-heading text-2xl md:text-3xl italic text-gold-light tracking-widest mb-10 animate-fade-in"
          style={{ animationDelay: "0.35s" }}
        >
          Food Menu
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.45s" }}
        >
          <button
            onClick={scrollToMenu}
            className="px-8 py-3 bg-gold/90 text-white text-xs tracking-[0.2em] font-body font-semibold hover:bg-gold transition-all duration-300"
          >
            VIEW MENU
          </button>

          <a
            href="tel:+917299440000"
            className="px-8 py-3 border border-gold/40 text-gold-light text-xs tracking-[0.2em] font-body font-semibold hover:bg-gold/10 transition-all duration-300"
          >
            BOOK A TABLE
          </a>

          <a
            href="https://madrassquare-liquor-menu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white/25 text-white/65 text-xs tracking-[0.2em] font-body font-semibold hover:border-white/50 hover:text-white/85 transition-all duration-300"
          >
            VIEW LIQUOR MENU
          </a>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
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
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default HeroSection;