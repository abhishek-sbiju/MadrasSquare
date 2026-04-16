import type { MenuCategory, MenuItem } from "@/data/banquetMenuData";
import FadeIn from "./FadeIn";

interface MenuSectionProps {
  category: MenuCategory;
  index: number;
}

const getDietClasses = (item: MenuItem) => {
  const baseClasses = "w-2 h-2 md:w-2.5 md:h-2.5 rounded-full flex-shrink-0";
  if (!item.diet) return `${baseClasses} bg-transparent hidden`;
  
  if (item.diet === 'non-veg') {
    return `${baseClasses} bg-red-600`;
  }
  return `${baseClasses} bg-green-600`;
};

const MenuItemRow = ({ id, item, hasAnyPrices }: { id: string, item: MenuItem, hasAnyPrices: boolean }) => {
  return (
    <div id={id} className="py-5 md:py-6 border-b border-foreground/[0.07] last:border-0 scroll-mt-28 transition-colors duration-500">
      <div
        className={[
          "flex flex-col items-start gap-2",
          "md:flex-row md:items-center md:gap-6",
          hasAnyPrices ? "md:justify-between" : "",
        ].join(" ")}
      >
        {/* Diet indicator + name */}
        <div className="flex items-start gap-2.5 md:gap-3 flex-1 min-w-0">
          <div className="mt-1.5 md:mt-[7px]">
            <span className={getDietClasses(item)} style={{ display: 'block' }} />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-heading text-[15px] md:text-xl font-semibold text-foreground tracking-[0.06em] md:tracking-[0.1em] uppercase leading-snug break-words">
              {item.name}
            </h4>
            {item.description && (
              <p className="text-muted-foreground text-[13px] md:text-[15px] font-body mt-2 leading-loose">{item.description}</p>
            )}
            {item.specialMessage && (
              <p className="text-gold text-[12px] md:text-[13px] font-body font-medium italic mt-1">{item.specialMessage}</p>
            )}
          </div>
        </div>

        {/* Price — only when present */}
        {item.price && (
          <div className="font-body text-[14px] md:text-lg font-semibold text-gold tabular-nums w-full md:w-auto md:shrink-0 md:mt-1 md:self-start md:text-right md:max-w-[40%] break-words leading-snug">
            {item.price}
          </div>
        )}
      </div>
    </div>
  );
};

const SectionDivider = () => (
  <div className="flex items-center justify-center py-10 md:py-14">
    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full" />
  </div>
);

/* ── Ram's Signature description split into shorter paragraphs ── */
const RamsSignatureHeader = ({ category }: { category: MenuCategory }) => (
  <div className="mb-10 md:mb-14">
    {/* Label above heading */}
    <span className="inline-block font-body text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-gold/70 mb-3">
      Signature Selection
    </span>
    <div className="grid grid-cols-1 md:grid-cols-[1fr,200px] lg:grid-cols-[1fr,260px] gap-8 md:gap-12 items-start">
      {/* Left content with gold accent border */}
      <div className="border-l-[3px] border-gold pl-6 md:pl-8">
        <h2 className="font-heading text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-foreground mb-3 tracking-[0.08em] md:tracking-[0.12em] uppercase">
          {category.title}
        </h2>
        <div className="w-14 md:w-20 h-[3px] bg-gold mb-6" />

        {/* Split description into digestible paragraphs */}
        <div className="space-y-4">
          <p className="text-muted-foreground text-[15px] md:text-[16px] font-body italic leading-[1.8]">
            Curated and perfected by Ram, the driving force behind Madras Square, this signature banquet menu reflects his love for bold flavours, generous spreads, and food that truly brings people together.
          </p>
          <p className="text-muted-foreground text-[15px] md:text-[16px] font-body italic leading-[1.8]">
            It's a lively mix of crowd favourites and chef-led creations—designed to keep conversations flowing, plates full, and guests smiling.
          </p>
          <p className="text-muted-foreground text-[15px] md:text-[16px] font-body italic leading-[1.8]">
            If you're looking for a banquet that feels warm, energetic, and unmistakably Madras Square, this is the one guests remember.
          </p>
        </div>
      </div>

      {/* Image with polished frame */}
      <div className="flex justify-center md:justify-end">
        <div className="rounded-lg p-3 bg-white border border-[#E6C79C]/60 shadow-[0_2px_12px_rgba(196,122,44,0.08)]">
          <img
            src="/ram-photo.png"
            alt="Ram — Madras Square"
            className="max-w-[160px] md:max-w-full w-full object-contain rounded"
          />
        </div>
      </div>
    </div>
  </div>
);

const MenuSection = ({ category, index }: MenuSectionProps) => {
  const isEven = index % 2 === 0;
  let bgClass = isEven ? "bg-section-even" : "bg-section-odd";

  const isRamsSignature = category.id === "rams-signature";

  if (isRamsSignature) {
    bgClass = "bg-[#f4f1dd]"; // Keep untouched!
  }

  // Check if this section has any prices (for bottle-prices)
  const hasAnyPrices = category.id === "bottle-prices";

  return (
    <div className={`${bgClass} ${isRamsSignature ? "mt-16 md:mt-24 border-l-[5px] border-gold" : ""}`}>
      <SectionDivider />
      <section
        id={category.id}
        className={`px-6 md:px-14 lg:px-24 pb-14 md:pb-24 pt-6 md:pt-10 ${isRamsSignature ? "py-8 md:py-12 pt-4" : ""}`}
        style={{ scrollMarginTop: "110px" }}
      >
        <div className="max-w-5xl mx-auto w-full">
          {/* Category header */}
          <FadeIn delay={100}>
            {isRamsSignature ? (
              <RamsSignatureHeader category={category} />
            ) : (
              <div className="mb-10 md:mb-14">
                <h2 className="font-heading text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-foreground mb-3 tracking-[0.08em] md:tracking-[0.12em] uppercase">
                  {category.title}
                </h2>
                <div className="w-8 md:w-10 h-[2px] bg-primary/70" />
                {category.description && (
                  <p className="text-muted-foreground text-sm md:text-base font-body mt-4 max-w-xl italic leading-loose">
                    {category.description}
                  </p>
                )}
              </div>
            )}
          </FadeIn>

          {/* Items */}
          {category.categories ? (
            category.categories.map((sub, subIdx) => (
              <div key={sub.name} className="mb-12 md:mb-16">
                <FadeIn delay={150 + (subIdx * 50)}>
                  <h3 className="font-heading text-xl md:text-[1.65rem] font-semibold text-gold mb-5 md:mb-6 tracking-[0.1em] md:tracking-[0.14em] uppercase">
                    {sub.name}
                  </h3>
                  {sub.items.map((item, i) => {
                    const itemId = `item-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
                    return <MenuItemRow key={`${item.name}-${i}`} id={itemId} item={item} hasAnyPrices={hasAnyPrices} />;
                  })}
                </FadeIn>
              </div>
            ))
          ) : (
            <FadeIn delay={150}>
              {category.items?.map((item, i) => {
                const itemId = `item-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
                return <MenuItemRow key={`${item.name}-${i}`} id={itemId} item={item} hasAnyPrices={hasAnyPrices} />;
              })}
            </FadeIn>
          )}
        </div>
      </section>
    </div>
  );
};

export default MenuSection;
