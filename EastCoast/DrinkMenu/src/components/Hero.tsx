import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById("menu-nav")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/95" />
      
      <div className="relative z-10 text-center px-4">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-amber-light mb-4 animate-fade-in">
          Madras Square
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.12em] text-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          EAST COAST
        </h1>
        
        {/* Horizontal line divider — different from diamond style in Sample */}
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
