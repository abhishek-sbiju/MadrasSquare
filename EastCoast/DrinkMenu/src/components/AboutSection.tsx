const AboutSection = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-amber text-xs tracking-[0.4em] font-body mb-2 md:mb-3 uppercase">About Us</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
          A Space Made for Great Drinks and Good Times
        </h2>
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-amber/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-amber/50" />
          <span className="w-16 h-px bg-gradient-to-l from-transparent to-amber/50" />
        </div>
        <p className="text-muted-foreground font-body text-[15px] md:text-lg leading-[2] mb-12 flex flex-col gap-2">
          Set in the heart of Madras Square, East Coast brings together the finest spirits,
          expertly crafted cocktails, and an ambiance that speaks to those who appreciate
          the art of a well-made drink. From classic whiskey sours to innovative house specials,
          every pour tells a story of quality and craft.
        </p>

        <p className="text-amber text-xs tracking-[0.4em] font-body mb-2 md:mb-3 uppercase">Discover</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
          Our Story
        </h2>
        <div className="text-muted-foreground font-body text-[15px] md:text-lg leading-[2] space-y-6 text-left md:text-center">
          <p>
            What started as a passion for premium spirits and craft cocktails grew into something much larger —
            a gathering place where every drink is an experience and every evening becomes a memory.
          </p>
          <p>
            Our bar team brings years of expertise, sourcing the finest domestic and imported spirits
            from around the world. Every cocktail on our menu has been carefully developed, balancing
            tradition with innovation.
          </p>
          <p>
            From single malts aged for decades to freshly muddled mojitos, from rare wines to
            locally brewed craft beers — our menu is a celebration of the world's best beverages,
            curated for the discerning palate.
          </p>
          <p>
            Today, East Coast stands as more than just a bar. It's a destination where great conversations
            flow as freely as the drinks, and where every visit feels like coming home.
          </p>
        </div>
        <p className="font-heading italic text-amber-light text-lg mt-8">Crafted with passion and precision</p>
      </div>
    </section>
  );
};

export default AboutSection;
