import type { MenuCategory, MenuItem } from "@/data/menuData";
import FadeIn from "./FadeIn";
import { getDietType } from "@/lib/diet";

interface MenuSectionProps {
  category: MenuCategory;
  index: number;
}

const getDietClasses = (item: MenuItem) => {
  const type = getDietType(item);
  const baseClasses = "h-2 w-2 flex-shrink-0 rounded-full md:h-2.5 md:w-2.5";

  if (type === "both") {
    return `${baseClasses} bg-[linear-gradient(to_right,#16a34a_50%,#dc2626_50%)]`;
  }

  if (type === "non-veg") {
    return `${baseClasses} bg-red-600`;
  }

  return `${baseClasses} bg-green-600`;
};

const MenuItemRow = ({ item }: { item: MenuItem }) => {
  return (
    <div className="border-b border-black/[0.07] py-4 last:border-0 md:py-5">
      <div className="flex items-start justify-between gap-4 md:gap-6">
        <div className="flex min-w-0 flex-1 items-start gap-2.5 md:gap-3">
          <div className="mt-1.5 md:mt-[7px]">
            <span className={getDietClasses(item)} style={{ display: "block" }} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline gap-x-2">
              <h4 className="font-heading text-[15px] font-semibold uppercase leading-snug tracking-[0.06em] text-foreground md:text-lg md:tracking-[0.1em]">
                {item.name}
              </h4>

              {item.variants && (
                <span className="font-body text-[10px] text-muted-foreground md:text-xs">
                  {item.variants}
                </span>
              )}

              {item.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-gold/40 px-1.5 py-[2px] font-body text-[8px] font-semibold uppercase tracking-[0.1em] text-gold md:text-[9px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {item.description && (
              <p className="mt-1.5 font-body text-[13px] leading-relaxed text-muted-foreground md:text-[15px]">
                {item.description}
              </p>
            )}
          </div>
        </div>

        <span className="mt-0.5 shrink-0 whitespace-nowrap font-body text-[15px] font-medium tabular-nums text-gold md:text-lg">
          {item.price}
        </span>
      </div>
    </div>
  );
};

const SectionDivider = () => (
  <div className="flex items-center justify-center py-8 md:py-12">
    <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
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
        className="px-6 pb-12 pt-4 md:px-14 md:pb-20 md:pt-8 lg:px-24"
        style={{ scrollMarginTop: "160px" }}
      >
        <div className="mx-auto w-full max-w-5xl">
          <FadeIn delay={100}>
            <div className="mb-8 md:mb-12">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.08em] text-foreground md:text-3xl md:tracking-[0.12em] lg:text-4xl">
                {category.title}
              </h2>
              <div className="mt-3 h-[2px] w-8 bg-gold md:w-10" />

              {category.description && (
                <p className="mt-4 max-w-3xl font-body text-xs italic leading-relaxed text-muted-foreground md:text-sm">
                  {category.description}
                </p>
              )}
            </div>
          </FadeIn>

          {category.subCategories ? (
            category.subCategories.map((sub, subIdx) => (
              <div key={sub.name} className="mb-10 md:mb-14">
                <FadeIn delay={150 + subIdx * 50}>
                  <h3 className="mb-4 font-heading text-lg font-semibold uppercase tracking-[0.1em] text-gold md:mb-5 md:text-2xl md:tracking-[0.14em]">
                    {sub.name}
                  </h3>

                  {sub.items.map((item, i) => (
                    <MenuItemRow key={`${item.name}-${i}`} item={item} />
                  ))}
                </FadeIn>
              </div>
            ))
          ) : (
            <FadeIn delay={150}>
              {category.items?.map((item, i) => (
                <MenuItemRow key={`${item.name}-${i}`} item={item} />
              ))}
            </FadeIn>
          )}
        </div>
      </section>
    </div>
  );
};

export default MenuSection;
