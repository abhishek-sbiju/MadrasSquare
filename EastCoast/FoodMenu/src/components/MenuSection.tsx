import type { MenuCategory, MenuItem } from "@/data/menuData";
import FadeIn from "./FadeIn";


interface MenuSectionProps {
  category: MenuCategory;
  index: number;
}

import { getDietType } from "@/lib/diet";

const getDietClasses = (item: MenuItem) => {
  const type = getDietType(item);
  const baseClasses = "w-2 h-2 md:w-2.5 md:h-2.5 rounded-full flex-shrink-0";
  
  if (type === 'both') {
    return `${baseClasses} bg-[linear-gradient(to_right,#16a34a_50%,#dc2626_50%)] border-none`;
  }
  if (type === 'non-veg') {
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

  return (
  <div className="py-5 md:py-6 border-b border-foreground/[0.07] last:border-0">
    <div className="flex items-start justify-between gap-4 md:gap-6">
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
            <h4 className="font-heading text-[15px] md:text-xl font-semibold text-foreground tracking-[0.06em] md:tracking-[0.1em] uppercase leading-snug">
              {item.name}
            </h4>
            {item.variants && (
              <span className="text-muted-foreground text-[11px] md:text-sm font-body font-normal tracking-normal">{item.variants}</span>
            )}
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
        </div>
      </div>

      {/* Right side: price — always right-aligned */}
      <span className="font-body text-base md:text-lg font-semibold text-gold whitespace-nowrap tabular-nums shrink-0 mt-0.5">
        {item.price}
      </span>
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
  const bgClass = isEven ? "bg-section-even" : "bg-section-odd";

  return (
    <div className={bgClass}>
      <SectionDivider />
      <section
        id={category.id}
        className={`px-6 md:px-14 lg:px-24 pb-14 md:pb-24 pt-6 md:pt-10`}
        style={{ scrollMarginTop: "110px" }}
      >
        <div className="max-w-5xl mx-auto w-full">
          {/* Category header */}
          <FadeIn delay={100}>
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
          </FadeIn>

          {/* Items */}
          {category.subCategories ? (
            category.subCategories.map((sub, subIdx) => (
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
