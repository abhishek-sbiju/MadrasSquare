const AboutSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gold/50 text-[10px] md:text-xs tracking-[0.35em] font-body mb-3 uppercase">About Us</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          A Space Made for Good Food and Easy Moments
        </h2>
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold/40" />
          <span className="w-[5px] h-[5px] rounded-full bg-gold/40" />
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-gold/40" />
        </div>
        <p className="text-muted-foreground font-body text-sm leading-[1.85] mb-14">
          Set in the heart of Madras Square, East Coast brings together the finest cuisine,
          expertly crafted dishes, and an ambiance that speaks to those who appreciate
          the art of great food. From comforting Indian favorites to innovative global plates,
          every dish tells a story of quality and craft.
        </p>

        <p className="text-gold/50 text-[10px] md:text-xs tracking-[0.35em] font-body mb-3 uppercase">Discover</p>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
          Our Story
        </h2>
        <div className="text-muted-foreground font-body text-sm leading-[1.85] space-y-5 text-left md:text-center">
          <p>
            What began during a difficult season started with something very simple: cooking fresh food and showing
            up for people who needed care, comfort, and consistency.
          </p>
          <p>
            That spirit of service became the foundation for everything that followed. A small setup built on heart,
            resilience, and community slowly grew into a fuller dining experience shaped by hospitality and intention.
          </p>
          <p>
            Along the way, the menu expanded with influences from travel, design, and a love for bringing different
            flavors together - from familiar comfort dishes to more playful, global plates.
          </p>
          <p>
            Today, East Coast stands as more than just a restaurant. It's a destination where great conversations
            flow as freely as the food, and where every visit feels like coming home.
          </p>
        </div>
        <p className="font-heading italic text-gold-light/80 text-lg mt-10">Made with warmth and care</p>
      </div>
    </section>
  );
};

export default AboutSection;
