import { Waves } from "lucide-react";
import FadeIn from "./FadeIn";

const AboutSection = () => {
  return (
    <section className="relative px-4 md:px-8 lg:px-16 py-20 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(39 30% 88%) 0%, hsl(39 35% 92%) 50%, hsl(202 30% 22%) 100%)" }}
    >
      {/* Decorative wave divider at top */}
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeIn delay={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-amber/40" />
            <Waves size={20} className="text-amber/60" />
            <span className="w-12 h-px bg-amber/40" />
          </div>

          <p className="text-amber text-xs tracking-[0.4em] font-body mb-3 uppercase font-semibold">
            About Us
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            Where the Ocean Meets<br className="hidden md:block" /> Good Times
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-muted-foreground font-body text-sm md:text-base leading-[1.8] mb-10 max-w-2xl mx-auto">
            Set in the heart of Madras Square, The Beach brings together exceptional cuisine,
            expertly crafted cocktails, and an ambiance inspired by the rhythm of the sea.
            Every dish and every drink is a celebration of coastal living.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-20 h-px bg-gradient-to-r from-transparent to-amber/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber/50" />
            <span className="w-20 h-px bg-gradient-to-l from-transparent to-amber/30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center gap-3 p-6">
              <span className="text-amber font-heading text-3xl font-bold">01</span>
              <h3 className="font-heading text-lg font-semibold text-foreground tracking-wide uppercase">Fresh & Local</h3>
              <p className="text-muted-foreground/70 font-body text-xs leading-relaxed">
                We source the freshest ingredients from local markets and trusted suppliers every day.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6">
              <span className="text-amber font-heading text-3xl font-bold">02</span>
              <h3 className="font-heading text-lg font-semibold text-foreground tracking-wide uppercase">Crafted with Care</h3>
              <p className="text-muted-foreground font-body text-xs leading-relaxed">
                Every recipe is perfected by our chefs, blending tradition with modern flair.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6">
              <span className="text-amber font-heading text-3xl font-bold">03</span>
              <h3 className="font-heading text-lg font-semibold text-foreground tracking-wide uppercase">Coastal Soul</h3>
              <p className="text-muted-foreground font-body text-xs leading-relaxed">
                The Beach is more than a restaurant — it's a destination where memories are made.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="font-heading italic text-amber text-xl md:text-2xl tracking-wide">
            "Where every sunset comes with a story"
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
