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

const getBeverageEmoji = (categoryId: string, subCategoryName: string = '', itemName: string = '') => {
  if (categoryId !== 'beverages') {
    return null;
  }

  const sub = subCategoryName.toLowerCase();
  const name = itemName.toLowerCase();

  if (sub.includes('hot') || name.includes('espresso') || name.includes('cappuccino') || name.includes('latte') || name.includes('americano') || name.includes('macchiato') || name.includes('piccolo') || name.includes('hot chocolate')) {
    return '☕';
  }
  if (name.includes('tea')) {
    return '🍵';
  }
  if (sub.includes('shake') || name.includes('milkshake')) {
    return '🧃';
  }
  if (sub.includes('frappe') || name.includes('frappe')) {
    return '🧊';
  }
  if (name.includes('water')) {
    return '💧';
  }
  // Default for cold beverages and mocktails
  return '🍹';
};

const MenuItemRow = ({ item, categoryId, subCategoryName }: { item: MenuItem, categoryId: string, subCategoryName?: string }) => {
  const emoji = getBeverageEmoji(categoryId, subCategoryName, item.name);
  const hasPrice = !!item.price;

  return (
  <div className="py-4 md:py-5 border-b border-foreground/[0.07] last:border-0">
    <div className={`flex items-start ${hasPrice ? 'justify-between gap-4 md:gap-6' : 'gap-2.5 md:gap-3'}`}>
      {/* Left side: indicator + name + description */}
      <div className="flex items-start gap-2.5 md:gap-3 flex-1 min-w-0">
        <div className="mt-1.5 md:mt-[7px]">
          {emoji ? (
            <span className="text-xs md:text-sm flex-shrink-0 opacity-85 block leading-none">{emoji}</span>
          ) : (
            <span className={getDietClasses(item)} style={{ display: 'block' }} />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-2">
            <h4 className="font-heading text-[15px] md:text-lg font-semibold text-foreground tracking-[0.06em] md:tracking-[0.1em] uppercase leading-snug">
              {item.name}
            </h4>
            {item.tags?.map((tag) => (
              <span
                key={tag}
                className="text-[8px] md:text-[9px] tracking-[0.1em] font-body font-semibold px-1.5 py-[2px] border border-gold/40 text-gold rounded-sm uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
          {item.description && (
            <p className="text-muted-foreground text-[13px] md:text-[15px] font-body mt-2 leading-loose">{item.description}</p>
          )}
          {item.specialMessage && (
            <p className="text-gold text-[11px] md:text-[13px] font-body font-medium italic mt-1.5">{item.specialMessage}</p>
          )}
        </div>
      </div>

      {/* Right side: price — only when present */}
      {hasPrice && (
        <span className="font-body text-base md:text-lg font-semibold text-gold whitespace-nowrap tabular-nums shrink-0 mt-0.5">
          {item.price}
        </span>
      )}
    </div>
  </div>
  );
};

const SectionDivider = () => (
  <div className="flex items-center justify-center py-10 md:py-14">
    <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
  </div>
);

const MenuSection = ({ category, index }: MenuSectionProps) => {
  const isEven = index % 2 === 0;
  let bgClass = isEven ? "bg-section-even" : "bg-section-odd";

  if (category.id === "rams-signature") {
    bgClass = "bg-[#f4f1dd] border-l-[6px] border-gold mt-12 md:mt-20"; // Exact beige background tint requested from eyedropper
  }

  return (
    <div className={bgClass}>
      <SectionDivider />
      <section
        id={category.id}
        className={`px-6 md:px-14 lg:px-24 pb-14 md:pb-24 pt-6 md:pt-10`}
        style={{ scrollMarginTop: "110px" }}
      >
        <div className={`${category.id === 'bottle-prices' ? 'max-w-5xl' : 'max-w-3xl'} mx-auto w-full`}>
          {/* Category header */}
          <FadeIn delay={100}>
            {category.id === "rams-signature" ? (
              <div className="mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-[1fr,250px] lg:grid-cols-[1fr,320px] gap-8 md:gap-16 items-start">
                <div>
                  <h2 className="font-heading text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-foreground mb-3 tracking-[0.08em] md:tracking-[0.12em] uppercase">
                    {category.title}
                  </h2>
                  <div className="w-8 md:w-10 h-[2px] bg-gold" />
                  {category.description && (
                    <p className="text-muted-foreground text-sm md:text-base font-body mt-4 italic leading-loose">
                      {category.description}
                    </p>
                  )}
                </div>
                <div className="flex justify-center md:justify-end">
                  <img src="/ram-photo.png" alt="Ram Signature" className="max-w-[220px] md:max-w-full w-full object-contain opacity-90 drop-shadow-sm" />
                </div>
              </div>
            ) : (
              <div className="mb-10 md:mb-14">
                <h2 className="font-heading text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-foreground mb-3 tracking-[0.08em] md:tracking-[0.12em] uppercase">
                  {category.title}
                </h2>
                <div className="w-8 md:w-10 h-[2px] bg-gold" />
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
                  {sub.items.map((item, i) => (
                    <MenuItemRow key={`${item.name}-${i}`} item={item} categoryId={category.id} subCategoryName={sub.name} />
                  ))}
                </FadeIn>
              </div>
            ))
          ) : (
            <FadeIn delay={150}>
              {category.items?.map((item, i) => (
                <MenuItemRow key={`${item.name}-${i}`} item={item} categoryId={category.id} />
              ))}
            </FadeIn>
          )}
        </div>
      </section>
    </div>
  );
};

export default MenuSection;
