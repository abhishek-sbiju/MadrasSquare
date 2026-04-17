import type { MenuSection as MenuSectionType, MenuItem } from "@/data/menuData";
import FadeIn from "./FadeIn";

interface Props {
  section: MenuSectionType;
  index: number;
}

/*
 * Price column widths. Each pricing "mode" below uses exactly these, so the
 * header row above the prices lines up pixel-perfect with the price cells.
 * The bottle column is wider because bottle prices often include a volume
 * suffix like "16500 (1000ml)".
 */
const COL_NARROW = "min-w-[45px] md:min-w-[60px]";
const COL_WIDE = "min-w-[75px] md:min-w-[100px]";
const COL_SINGLE = "min-w-[50px]";

type PriceMode = "glass-bottle" | "dom-imp" | "sz-330-650" | "single" | "none";

function getPriceMode(items: MenuItem[]): PriceMode {
  for (const it of items) {
    if (it.priceGlass || it.priceBottle) return "glass-bottle";
    if (it.priceDom || it.priceImp) return "dom-imp";
    if (it.price300 || it.price650) return "sz-330-650";
    if (it.price) return "single";
  }
  return "none";
}

function getHeaderWidths(mode: PriceMode, headerCount: number): string[] {
  if (headerCount === 1) return [COL_SINGLE];
  switch (mode) {
    case "glass-bottle": return [COL_NARROW, COL_WIDE];
    case "dom-imp":
    case "sz-330-650":
      return [COL_NARROW, COL_NARROW];
    case "single":
      return [COL_SINGLE, COL_SINGLE];
    default:
      return [COL_NARROW, COL_NARROW];
  }
}

const FormattedPrice = ({ price }: { price?: string }) => {
  if (!price) return null;
  const volumeMatch = price.match(/\((.*?)\)/);
  if (volumeMatch) {
    const mainPrice = price.replace(volumeMatch[0], "").trim();
    return (
      <span className="flex items-baseline gap-1 justify-end">
        <span>{mainPrice}</span>
        <span className="text-[9px] md:text-xs font-medium opacity-60 tracking-tight whitespace-nowrap">{volumeMatch[0]}</span>
      </span>
    );
  }
  return <span>{price}</span>;
};

const PriceDisplay = ({ item }: { item: MenuItem }) => {
  if (item.priceDom || item.priceImp) {
    return (
      <div className="flex gap-6 font-body text-base md:text-lg font-semibold text-amber tabular-nums shrink-0 mt-0.5">
        <div className={`${COL_NARROW} text-right`}><FormattedPrice price={item.priceDom} /></div>
        <div className={`${COL_NARROW} text-right`}><FormattedPrice price={item.priceImp} /></div>
      </div>
    );
  }
  if (item.priceGlass || item.priceBottle) {
    return (
      <div className="flex gap-6 font-body text-base md:text-lg font-semibold text-amber tabular-nums shrink-0 mt-0.5">
        <div className={`${COL_NARROW} text-right`}><FormattedPrice price={item.priceGlass} /></div>
        <div className={`${COL_WIDE} text-right`}><FormattedPrice price={item.priceBottle} /></div>
      </div>
    );
  }
  if (item.price300 || item.price650) {
    return (
      <div className="flex gap-6 font-body text-base md:text-lg font-semibold text-amber tabular-nums shrink-0 mt-0.5">
        <div className={`${COL_NARROW} text-right`}><FormattedPrice price={item.price300} /></div>
        <div className={`${COL_NARROW} text-right`}><FormattedPrice price={item.price650} /></div>
      </div>
    );
  }
  if (item.price) {
    return (
      <span className={`font-body text-base md:text-lg font-semibold text-amber tabular-nums shrink-0 mt-0.5 whitespace-nowrap ${COL_SINGLE} text-right`}>
        <FormattedPrice price={item.price} />
      </span>
    );
  }
  return null;
};

const PriceHeaderRow = ({ headers, widths }: { headers: string[]; widths: string[] }) => (
  <div className="flex justify-end gap-6 font-body text-xs md:text-sm tracking-[0.25em] uppercase text-amber-dark font-semibold md:pr-2">
    {headers.map((h, i) => (
      <span key={i} className={`${widths[i] ?? COL_NARROW} text-right`}>{h}</span>
    ))}
  </div>
);

const ItemRow = ({ id, item }: { id: string; item: MenuItem }) => (
  <div id={id} className="py-4 md:py-6 border-b border-amber/10 last:border-0 hover:bg-white/[0.03] transition-all duration-300 md:px-2 rounded-sm group scroll-mt-28 transition-colors duration-500">
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
      <PriceDisplay item={item} />
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

const SubsectionBlock = ({ title, items, priceHeaders }: { title: string; items: MenuItem[]; priceHeaders?: string[] }) => {
  const mode = getPriceMode(items);
  const headers = priceHeaders ?? [];
  const widths = getHeaderWidths(mode, headers.length);
  return (
    <div className="mb-12 md:mb-16">
      <FadeIn delay={150}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-8 border-b border-amber/20 pb-2">
          <h3 className="font-heading text-2xl md:text-[2rem] font-medium text-amber tracking-[0.12em] uppercase">
            {title}
          </h3>
          {headers.length > 0 && <PriceHeaderRow headers={headers} widths={widths} />}
        </div>
        {items.map((item, i) => {
          const itemId = `item-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
          return <ItemRow key={`${item.name}-${i}`} id={itemId} item={item} />;
        })}
      </FadeIn>
    </div>
  );
};

const MenuSection = ({ section, index }: Props) => {
  const isEven = index % 2 === 0;
  const bgClass = isEven ? "bg-section-alt" : "bg-background";

  const sectionMode = getPriceMode(section.items);
  const sectionHeaders = section.priceHeaders ?? [];
  const sectionWidths = getHeaderWidths(sectionMode, sectionHeaders.length);
  const showSectionHeader = sectionHeaders.length > 0 && section.items.length > 0;

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
                  <h2 className="font-heading text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold text-foreground tracking-[0.06em] uppercase flex items-baseline gap-3 flex-wrap">
                    <span>{section.title}</span>
                    {section.subtitle && (
                      <span className="text-sm md:text-base lg:text-lg font-normal tracking-[0.2em] text-amber/60">
                        {section.subtitle}
                      </span>
                    )}
                  </h2>
                  {showSectionHeader && (
                    <PriceHeaderRow headers={sectionHeaders} widths={sectionWidths} />
                  )}
                </div>
              </FadeIn>

              {section.items.length > 0 && (
                <FadeIn delay={150}>
                  <div className="mb-16">
                    {section.items.map((item, i) => {
                      const itemId = `item-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
                      return <ItemRow key={`${item.name}-${i}`} id={itemId} item={item} />;
                    })}
                  </div>
                </FadeIn>
              )}

              {section.subsections?.map((sub) => {
                const subHasDualSize = sub.items.some(i => i.price300 || i.price650);
                const currentHeaders = sub.priceHeaders ?? (subHasDualSize ? ["330ml", "650ml"] : section.priceHeaders);
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
