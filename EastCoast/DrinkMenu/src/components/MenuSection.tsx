import type { MenuSection as MenuSectionType, MenuItem } from "@/data/menuData";
import FadeIn from "./FadeIn";

interface Props {
  section: MenuSectionType;
  index: number;
}

const PriceDisplay = ({ item, priceHeaders }: { item: MenuItem; priceHeaders?: [string, string] }) => {
  if (item.priceDom || item.priceImp) {
    return (
      <div className="flex gap-4 font-body text-base md:text-lg font-semibold text-amber tabular-nums shrink-0 mt-0.5">
        <span className="w-10 text-right">{item.priceDom || ""}</span>
        <span className="w-10 text-right">{item.priceImp || ""}</span>
      </div>
    );
  }
  if (item.priceGlass || item.priceBottle) {
    return (
      <div className="flex gap-4 font-body text-base md:text-lg font-semibold text-amber tabular-nums shrink-0 mt-0.5">
        <span className="w-12 text-right">{item.priceGlass || ""}</span>
        <span className="w-12 text-right">{item.priceBottle || ""}</span>
      </div>
    );
  }
  if (item.price300 || item.price650) {
    return (
      <div className="flex gap-4 font-body text-base md:text-lg font-semibold text-amber tabular-nums shrink-0 mt-0.5">
        <span className="w-10 text-right">{item.price300 || ""}</span>
        <span className="w-10 text-right">{item.price650 || ""}</span>
      </div>
    );
  }
  if (item.price) {
    return (
      <span className="font-body text-base md:text-lg font-semibold text-amber tabular-nums shrink-0 mt-0.5 whitespace-nowrap">
        {item.price}
      </span>
    );
  }
  return null;
};

const ItemRow = ({ item, i, priceHeaders }: { item: MenuItem; i: number; priceHeaders?: [string, string] }) => (
  <div className="py-3 md:py-5 border-b border-border/60 last:border-0 hover:bg-foreground/[0.03] transition-colors md:px-2 rounded-md group">
    <div className="flex items-start md:items-baseline justify-between gap-2 md:gap-3">
      <div className="flex-1 min-w-0 flex flex-wrap items-baseline">
        <h4 className="font-heading text-[15px] md:text-xl font-semibold text-foreground tracking-[0.06em] md:tracking-[0.1em] uppercase leading-snug group-hover:text-amber transition-colors duration-300 break-words">
          {item.name}
        </h4>
        <span className="hidden md:inline-flex flex-1 border-b border-dotted border-border/80 mx-2 min-w-[20px]" />
      </div>
      <PriceDisplay item={item} priceHeaders={priceHeaders} />
    </div>
    {item.description && (
      <p className="text-muted-foreground text-[11px] md:text-sm font-body mt-1 md:mt-1.5 leading-relaxed max-w-[90%] md:max-w-none">
        {item.description}
      </p>
    )}
  </div>
);

{/* Line + dot divider — different from the diamond style used in Sample/food menu */}
const SectionDivider = () => (
  <div className="flex items-center justify-center py-8">
    <div className="w-20 h-px bg-gradient-to-r from-transparent to-amber/60" />
    <div className="w-2 h-2 rounded-full bg-amber/80 mx-4 flex-shrink-0" />
    <div className="w-20 h-px bg-gradient-to-l from-transparent to-amber/60" />
  </div>
);

const SubsectionBlock = ({ title, items, priceHeaders }: { title: string; items: MenuItem[]; priceHeaders?: [string, string] }) => (
  <div className="mb-6 md:mb-10">
    <FadeIn delay={150}>
      <h3 className="font-heading text-lg md:text-2xl font-semibold text-amber mb-2 md:mb-4 tracking-[0.08em] md:tracking-[0.1em] uppercase">
        {title}
      </h3>
      {items.map((item, i) => (
        <ItemRow key={`${item.name}-${i}`} item={item} i={i} priceHeaders={priceHeaders} />
      ))}
    </FadeIn>
  </div>
);

const MenuSection = ({ section, index }: Props) => {
  const isEven = index % 2 === 0;
  const bgClass = isEven ? "bg-section-alt" : "bg-background";

  return (
    <>
      <div className={bgClass}>
        <SectionDivider />
      </div>
      <section
        id={section.id}
        className={`px-6 md:px-12 lg:px-20 py-12 md:py-20 ${bgClass}`}
        style={{ scrollMarginTop: "120px" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-10 md:gap-16 w-full">
            <div className="w-full min-w-0">
              <FadeIn delay={100}>
                <h2 className="font-heading text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-foreground mb-3 tracking-[0.08em] md:tracking-[0.12em] uppercase">
                  {section.title}
                </h2>
                <div className="w-10 md:w-12 h-[2px] bg-amber mb-4 md:mb-6" />
              </FadeIn>

              {section.priceHeaders && (section.items.length > 0) && (
                <div className="flex justify-end gap-4 mb-4 font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {["Glass", "Peg"].includes(section.priceHeaders[0]) ? (
                    <>
                      <span className="w-12 text-right">{section.priceHeaders[0]}</span>
                      <span className="w-12 text-right">{section.priceHeaders[1]}</span>
                    </>
                  ) : (
                    <>
                      <span className="w-10 text-right">{section.priceHeaders[0]}</span>
                      <span className="w-10 text-right">{section.priceHeaders[1]}</span>
                    </>
                  )}
                </div>
              )}

              {section.items.length > 0 && (
                <FadeIn delay={150}>
                  {section.items.map((item, i) => (
                    <ItemRow key={`${item.name}-${i}`} item={item} i={i} priceHeaders={section.priceHeaders} />
                  ))}
                </FadeIn>
              )}

              {section.subsections?.map((sub) => {
                const subHasDualSize = sub.items.some(i => i.price300 || i.price650);
                return (
                  <div key={sub.title}>
                    {subHasDualSize && (
                      <div className="flex justify-end gap-4 mt-10 mb-2 font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                        <span className="w-10 text-right">330ml</span>
                        <span className="w-10 text-right">650ml</span>
                      </div>
                    )}
                    <SubsectionBlock title={sub.title} items={sub.items} priceHeaders={section.priceHeaders} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuSection;
