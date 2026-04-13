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
  <div className="py-3 md:py-4 border-b border-white/[0.06] last:border-0 hover:bg-white/[0.02] transition-colors duration-200 md:px-3 rounded-md">
    <div className="flex items-start md:items-baseline justify-between gap-2 md:gap-3">
      <div className="flex items-start md:items-baseline gap-2 md:gap-3 flex-1 min-w-0">
        <div className="mt-1 md:mt-0 pt-[2px] md:pt-0">
          {emoji ? (
            <span className="text-xs md:text-sm flex-shrink-0 opacity-90 block leading-none">{emoji}</span>
          ) : (
            <div className="mt-[2px] md:mt-0"><span className={getDietClasses(item)} style={{ display: 'block' }} /></div>
          )}
        </div>
        <div className="flex-1 min-w-0 flex flex-wrap items-baseline">
          <h4 className="font-heading text-sm md:text-lg font-semibold text-foreground tracking-[0.08em] md:tracking-[0.12em] uppercase leading-tight md:leading-normal">
            {item.name}
          </h4>
          {item.variants && (
            <span className="text-muted-foreground text-[10px] md:text-xs font-body whitespace-nowrap ml-2">{item.variants}</span>
          )}
          {item.tags?.map((tag) => (
            <span
              key={tag}
              className="text-[8px] md:text-[9px] tracking-wider font-body font-semibold px-1.5 py-0.5 border border-gold/40 text-gold rounded-sm uppercase whitespace-nowrap ml-2"
            >
              {tag}
            </span>
          ))}
          <span className="hidden md:inline-flex flex-1 border-b border-dotted border-white/[0.08] mx-3 min-w-[20px]" />
        </div>
      </div>
      <span className="font-body text-sm md:text-base font-medium text-gold whitespace-nowrap mt-0.5 md:mt-0">
        {item.price}
      </span>
    </div>
    {item.description && (
      <p className="text-muted-foreground/70 text-[10px] md:text-xs font-body mt-1 md:mt-1.5 ml-4 md:ml-8 leading-relaxed max-w-[90%] md:max-w-none">{item.description}</p>
    )}
  </div>
  );
};

const DiamondDivider = () => (
  <div className="flex items-center justify-center py-10">
    <div className="w-20 h-px bg-gradient-to-r from-transparent to-gold/25" />
    <div className="w-2.5 h-2.5 rotate-45 border border-gold/30 mx-4 flex-shrink-0" />
    <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold/25" />
  </div>
);

const MenuSection = ({ category, index }: MenuSectionProps) => {
  const isEven = index % 2 === 0;
  const bgClass = isEven ? "bg-[hsl(var(--section-green))]" : "bg-background";

  return (
    <>
      <div className={bgClass}>
        <DiamondDivider />
      </div>
      <section
        id={category.id}
        className={`px-6 md:px-12 lg:px-20 py-14 md:py-24 ${bgClass}`}
        style={{ scrollMarginTop: "110px" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-10 md:gap-16 w-full">
            <div className="w-full min-w-0">
              <FadeIn delay={100}>
                <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 tracking-wide uppercase">
                  {category.title}
                </h2>
                <div className="w-10 md:w-12 h-[2px] bg-gold mb-4 md:mb-6" />
                
                {category.description && (
                  <p className="text-muted-foreground/70 text-xs md:text-sm font-body mb-6 md:mb-8 max-w-xl italic leading-relaxed">
                    {category.description}
                  </p>
                )}
              </FadeIn>

              {category.subCategories ? (
                category.subCategories.map((sub, subIdx) => (
                  <div key={sub.name} className="mb-6 md:mb-10">
                    <FadeIn delay={150 + (subIdx * 50)}>
                      <h3 className="font-heading text-lg md:text-2xl font-semibold text-gold mb-2 md:mb-4 tracking-[0.08em] md:tracking-[0.1em] uppercase">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuSection;
