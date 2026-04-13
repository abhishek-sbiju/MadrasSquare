import type { MenuCategory, MenuItem } from "@/data/menuData";
import FadeIn from "./FadeIn";

interface MenuSectionProps {
  category: MenuCategory;
  index: number;
}

import { getDietType } from "@/lib/diet";

const getDietClasses = (item: MenuItem) => {
  const type = getDietType(item);
  const baseClasses = "w-[5px] h-[5px] rounded-full flex-shrink-0";
  
  if (type === 'both') {
    return `${baseClasses} bg-[linear-gradient(to_right,#16a34a_50%,#dc2626_50%)]`;
  }
  if (type === 'non-veg') {
    return `${baseClasses} bg-red-500/70`;
  }
  return `${baseClasses} bg-green-500/70`;
};

const getBeverageEmoji = (categoryId: string, subCategoryName: string = '', itemName: string = '') => {
  if (categoryId !== 'beverages') return null;
  const sub = subCategoryName.toLowerCase();
  const name = itemName.toLowerCase();
  if (sub.includes('hot') || name.includes('espresso') || name.includes('cappuccino') || name.includes('latte') || name.includes('americano') || name.includes('macchiato') || name.includes('piccolo') || name.includes('hot chocolate')) return '☕';
  if (name.includes('tea')) return '🍵';
  if (sub.includes('shake') || name.includes('milkshake')) return '🧃';
  if (sub.includes('frappe') || name.includes('frappe')) return '🧊';
  if (name.includes('water')) return '💧';
  return '🍹';
};

const MenuItemRow = ({ item, categoryId, subCategoryName }: { item: MenuItem, categoryId: string, subCategoryName?: string }) => {
  const emoji = getBeverageEmoji(categoryId, subCategoryName, item.name);

  return (
    <div className="py-5 md:py-6">
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className="mt-[7px]">
            {emoji ? (
              <span className="text-[10px] opacity-70 block leading-none">{emoji}</span>
            ) : (
              <span className={getDietClasses(item)} style={{ display: 'block' }} />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-heading text-[13px] md:text-[15px] font-semibold text-foreground/90 tracking-[0.06em] md:tracking-[0.08em] uppercase leading-snug">
              {item.name}
              {item.variants && (
                <span className="text-muted-foreground/40 text-[9px] md:text-[10px] font-body font-normal tracking-normal normal-case ml-2">{item.variants}</span>
              )}
            </h4>
            {item.tags?.map((tag) => (
              <span
                key={tag}
                className="inline-block text-[7px] md:text-[8px] tracking-[0.1em] font-body font-medium px-1.5 py-[2px] border border-gold/20 text-gold/50 uppercase mt-1.5 mr-1.5"
              >
                {tag}
              </span>
            ))}
            {item.description && (
              <p className="text-muted-foreground/35 text-[10px] md:text-[11px] font-body mt-2 leading-relaxed">{item.description}</p>
            )}
          </div>
        </div>

        <span className="font-body text-[13px] md:text-sm font-normal text-gold/70 whitespace-nowrap tabular-nums pt-0.5">
          {item.price}
        </span>
      </div>
    </div>
  );
};

const MenuSection = ({ category, index }: MenuSectionProps) => {
  const isEven = index % 2 === 0;
  const bgClass = isEven ? "bg-[hsl(var(--section-green))]" : "bg-background";

  return (
    <>
      {/* Generous breathing space between categories */}
      <div className={`${bgClass} py-6 md:py-10`} />

      <section
        id={category.id}
        className={`px-7 md:px-16 lg:px-28 pt-4 pb-12 md:pt-6 md:pb-20 ${bgClass}`}
        style={{ scrollMarginTop: "120px" }}
      >
        <div className="max-w-3xl mx-auto w-full">
          <FadeIn delay={100}>
            <div className="mb-10 md:mb-14">
              <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground/90 tracking-[0.1em] md:tracking-[0.14em] uppercase">
                {category.title}
              </h2>
              <div className="w-6 h-[1px] bg-gold/40 mt-3" />
              {category.description && (
                <p className="text-muted-foreground/35 text-[11px] md:text-xs font-body max-w-md italic leading-relaxed tracking-wide mt-4">
                  {category.description}
                </p>
              )}
            </div>
          </FadeIn>

          {category.subCategories ? (
            category.subCategories.map((sub, subIdx) => (
              <div key={sub.name} className="mb-12 md:mb-16">
                <FadeIn delay={150 + (subIdx * 50)}>
                  <h3 className="font-heading text-xs md:text-sm font-medium text-gold/50 mb-3 tracking-[0.16em] md:tracking-[0.2em] uppercase">
                    {sub.name}
                  </h3>
                  <div className="divide-y divide-white/[0.03]">
                    {sub.items.map((item, i) => (
                      <MenuItemRow key={`${item.name}-${i}`} item={item} categoryId={category.id} subCategoryName={sub.name} />
                    ))}
                  </div>
                </FadeIn>
              </div>
            ))
          ) : (
            <FadeIn delay={150}>
              <div className="divide-y divide-white/[0.03]">
                {category.items?.map((item, i) => (
                  <MenuItemRow key={`${item.name}-${i}`} item={item} categoryId={category.id} />
                ))}
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
};

export default MenuSection;
