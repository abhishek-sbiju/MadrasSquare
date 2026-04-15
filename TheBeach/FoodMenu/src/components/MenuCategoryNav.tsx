import { useEffect, useRef } from "react";

interface MenuCategoryNavProps {
  activeCategory: string;
  onCategoryClick: (id: string) => void;
  categories: { id: string; label: string }[];
}

const MenuCategoryNav = ({
  activeCategory,
  onCategoryClick,
  categories,
}: MenuCategoryNavProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollContainerRef.current) {
      return;
    }

    const activeElement = scrollContainerRef.current.querySelector(
      `[data-category-id="${activeCategory}"]`,
    ) as HTMLElement | null;

    if (!activeElement) {
      return;
    }

    const container = scrollContainerRef.current;
    const scrollLeft =
      activeElement.offsetLeft -
      container.clientWidth / 2 +
      activeElement.clientWidth / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  }, [activeCategory]);

  return (
    <div
      id="menu-nav"
      className="sticky top-16 z-40 border-b border-border/70 bg-background/95 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] md:top-20"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-3 md:px-8 md:py-4">
        <div className="hidden rounded-full border border-border/80 bg-card/70 px-3 py-1.5 font-body text-[10px] uppercase tracking-[0.24em] text-muted-foreground md:inline-flex">
          Browse
        </div>

        <div
          ref={scrollContainerRef}
          className="menu-categories flex min-w-0 flex-1 gap-2 overflow-x-auto scroll-smooth"
        >
          {categories.map((item) => (
            <button
              key={item.id}
              data-category-id={item.id}
              onClick={() => onCategoryClick(item.id)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 font-body text-[11px] font-medium uppercase tracking-[0.16em] transition-all duration-300 md:px-5 md:text-xs ${
                activeCategory === item.id
                  ? "border-gold bg-gold text-primary-foreground shadow-[0_10px_24px_rgba(169,68,91,0.22)]"
                  : "border-border/80 bg-card/70 text-muted-foreground hover:border-gold/40 hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategoryNav;
