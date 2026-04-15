import type { MenuSection as MenuSectionType, MenuItem } from "@/data/menuData";
import FadeIn from "./FadeIn";

interface Props {
  section: MenuSectionType;
  index: number;
}

const PriceDisplay = ({ item, priceHeaders }: { item: MenuItem; priceHeaders?: [string, string] }) => {
  if (item.priceDom || item.priceImp) {
    return (
      <div className="flex gap-6 font-body text-base md:text-lg font-semibold text-amber tabular-nums shrink-0 mt-0.5">
        <span className="w-12 text-right">{item.priceDom || ""}</span>
        <span className="w-12 text-right">{item.priceImp || ""}</span>
      </div>
    );
  }
  if (item.priceGlass || item.priceBottle) {
    return (
      <div className="flex gap-6 font-body text-base md:text-lg font-semibold text-amber tabular-nums shrink-0 mt-0.5">
        <span className="w-12 text-right">{item.priceGlass || ""}</span>
        <span className="w-12 text-right">{item.priceBottle || ""}</span>
      </div>
    );
  }
  if (item.price300 || item.price650) {
    return (
      <div className="flex gap-6 font-body text-base md:text-lg font-semibold text-amber tabular-nums shrink-0 mt-0.5">
        <span className="w-12 text-right">{item.price300 || ""}</span>
        <span className="w-12 text-right">{item.price650 || ""}</span>
      </div>
    );
  }
  if (item.price) {
    return (
      <span className="font-body text-base md:text-lg font-semibold text-amber tabular-nums shrink-0 mt-0.5 whitespace-nowrap min-w-[50px] text-right">
        {item.price}
      </span>
    );
  }
  return null;
};

const ItemRow = ({ item, i, priceHeaders }: { item: MenuItem; i: number; priceHeaders?: [string, string] }) => (
  <div className="py-4 md:py-6 border-b border-amber/10 last:border-0 hover:bg-white/[0.03] transition-all duration-300 md:px-2 rounded-sm group">
    <div className="flex items-start md:items-baseline justify-between gap-4 md:gap-8">
      <div className="flex-1 min-w-0">
        <h4 className="font-heading text-[17px] md:text-2xl font-medium text-foreground tracking-[0.04em] md:tracking-[0.06em] uppercase leading-tight group-hover:text-amber transition-colors duration-300 break-words">
          {item.name}
        </h4>
        {item.description && (
          <p className="text-muted-foreground text-[13px] md:text-[15px] font-body mt-2 leading-relaxed max-w-[90%] md:max-w-[85%]">
            {item.description}
          </p>
        )}
      </div>
      <PriceDisplay item={item} priceHeaders={priceHeaders} />
    </div>
  </div>
);

{/* Elegant Minimal Divider */}
const SectionDivider = () => (
  <div className="flex items-center justify-center py-12">
    <div className="w-16 h-[1px] bg-amber/20" />
    <div className="mx-4 text-amber/40 font-heading text-xl">✦</div>
    <div className="w-16 h-[1px] bg-amber/20" />
  </div>
);

const SubsectionBlock = ({ title, items, priceHeaders }: { title: string; items: MenuItem[]; priceHeaders?: [string, string] }) => (
  <div className="mb-12 md:mb-16">
    <FadeIn delay={150}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-8 border-b border-amber/20 pb-2">
        <h3 className="font-heading text-2xl md:text-[2rem] font-medium text-amber tracking-[0.12em] uppercase">
          {title}
        </h3>
        {priceHeaders && (
          <div className="flex justify-end gap-6 font-body text-xs md:text-sm tracking-[0.25em] uppercase text-amber/50 font-medium md:pr-2">
            <span className="w-12 text-right">{priceHeaders[0]}</span>
            <span className="w-12 text-right">{priceHeaders[1]}</span>
          </div>
        )}
      </div>
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
        className={`px-6 md:px-12 lg:px-20 py-12 md:py-24 ${bgClass}`}
        style={{ scrollMarginTop: "120px" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-12 md:gap-20 w-full">
            <div className="w-full min-w-0">
              <FadeIn delay={100}>
                <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-amber/30 pb-4">
                  <h2 className="font-heading text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold text-foreground tracking-[0.06em] uppercase">
                    {section.title}
                  </h2>
                  {section.priceHeaders && (section.items.length > 0) && (
                    <div className="flex justify-end gap-6 font-body text-xs md:text-sm tracking-[0.25em] uppercase text-amber/50 font-medium md:pr-2">
                      <span className="w-12 text-right">{section.priceHeaders[0]}</span>
                      <span className="w-12 text-right">{section.priceHeaders[1]}</span>
                    </div>
                  )}
                </div>
              </FadeIn>

              {section.items.length > 0 && (
                <FadeIn delay={150}>
                  <div className="mb-16">
                    {section.items.map((item, i) => (
                      <ItemRow key={`${item.name}-${i}`} item={item} i={i} priceHeaders={section.priceHeaders} />
                    ))}
                  </div>
                </FadeIn>
              )}

              {section.subsections?.map((sub) => {
                const subHasDualSize = sub.items.some(i => i.price300 || i.price650);
                const currentHeaders = sub.priceHeaders || (subHasDualSize ? (["330ml", "650ml"] as [string, string]) : section.priceHeaders);
                return (
                  <div key={sub.title}>
                    <SubsectionBlock title={sub.title} items={sub.items} priceHeaders={currentHeaders} />
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
