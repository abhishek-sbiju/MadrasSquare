
import { useEffect, useRef } from "react";

interface MenuCategoryNavProps {
  activeCategory: string;
  onCategoryClick: (id: string) => void;
  categories: { id: string; label: string }[];
}

const MenuCategoryNav = ({ activeCategory, onCategoryClick, categories }: MenuCategoryNavProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector(`[data-category-id="${activeCategory}"]`) as HTMLElement;
      if (activeElement) {
        const container = scrollContainerRef.current;
        const scrollLeft = activeElement.offsetLeft - (container.clientWidth / 2) + (activeElement.clientWidth / 2);
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeCategory]);

  return (
    <div id="menu-nav" className="sticky top-12 md:top-[57px] z-40 bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-center px-1.5 md:px-6">
        <div ref={scrollContainerRef} className="menu-categories flex overflow-x-auto gap-1 py-3 md:py-4 px-2 scroll-smooth">
          {categories.map((item) => (
            <button
              key={item.id}
              data-category-id={item.id}
              onClick={() => onCategoryClick(item.id)}
              className={`whitespace-nowrap px-3 py-1.5 text-[11px] md:px-5 md:py-2 md:text-[14px] tracking-[0.08em] md:tracking-[0.12em] font-body font-medium transition-all duration-300 flex-shrink-0 rounded-sm outline-none
                ${activeCategory === item.id
                  ? "bg-gold text-primary-foreground shadow-sm ring-1 ring-gold ring-offset-2 ring-offset-background"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.03]"
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
