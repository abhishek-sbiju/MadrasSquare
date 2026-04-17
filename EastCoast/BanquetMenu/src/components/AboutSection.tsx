import { Waves } from "lucide-react";
import FadeIn from "./FadeIn";

const AboutSection = () => {
  return (
    <section className="relative px-4 md:px-8 lg:px-16 py-20 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(40 30% 97%) 0%, hsl(35 80% 85%) 60%, hsl(32 70% 25%) 100%)" }}
    >
      {/* Decorative wave divider at top */}
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeIn delay={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-gold/40" />
            <Waves size={20} className="text-gold/60" />
            <span className="w-12 h-px bg-gold/40" />
          </div>

          <p className="text-gold text-xs tracking-[0.4em] font-body mb-3 uppercase font-semibold">
            Our Story
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            A Space Made for Good Food<br className="hidden md:block" /> and Easy Moments
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-muted-foreground font-body text-sm md:text-base leading-[1.8] mb-10 max-w-2xl mx-auto">
            Hosted across our two shores — East Coast and The Beach — Madras Square brings together 
            the finest cuisine, expertly crafted dishes, and an ambiance that speaks to those who appreciate 
            the art of great food. From comforting Indian favorites to innovative global plates, every 
            banquet tells a story of quality and craft.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-20 h-px bg-gradient-to-r from-transparent to-gold/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
            <span className="w-20 h-px bg-gradient-to-l from-transparent to-gold/30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center gap-3 p-6 group">
              <span className="text-gold font-heading text-3xl font-bold transition-transform duration-300 group-hover:scale-110">01</span>
              <h3 className="font-heading text-lg font-semibold text-foreground tracking-wide uppercase">Resilience</h3>
              <p className="text-muted-foreground/70 font-body text-xs leading-relaxed transition-colors group-hover:text-foreground/80">
                Started as a promise to show up for the community with heart and intention.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 group">
              <span className="text-gold font-heading text-3xl font-bold transition-transform duration-300 group-hover:scale-110">02</span>
              <h3 className="font-heading text-lg font-semibold text-foreground tracking-wide uppercase">Crafted Flavor</h3>
              <p className="text-muted-foreground/70 font-body text-xs leading-relaxed transition-colors group-hover:text-foreground/80">
                A menu shaped by travel, design, and a obsession for premium quality.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 group">
              <span className="text-gold font-heading text-3xl font-bold transition-transform duration-300 group-hover:scale-110">03</span>
              <h3 className="font-heading text-lg font-semibold text-foreground tracking-wide uppercase">Hospitality</h3>
              <p className="text-muted-foreground/70 font-body text-xs leading-relaxed transition-colors group-hover:text-foreground/80">
                More than a restaurant—a destination where every visit feels like coming home.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="font-heading italic text-white/70 text-xl md:text-2xl tracking-wide">
            "Made with warmth and care"
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
