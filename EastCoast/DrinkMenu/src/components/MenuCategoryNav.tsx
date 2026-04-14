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
    <div id="menu-nav" className="sticky top-12 md:top-[57px] z-40 bg-background border-b border-border shadow-sm">
      <div className="flex items-center justify-center px-1.5 md:px-6">
        <div ref={scrollContainerRef} className="menu-categories flex overflow-x-auto gap-1 py-2 md:py-3.5 min-w-0 scroll-smooth">
          {categories.map((item) => (
            <button
              key={item.id}
              data-category-id={item.id}
              onClick={() => onCategoryClick(item.id)}
              className={`whitespace-nowrap px-2.5 py-1.5 text-[11px] md:px-4 md:py-2.5 md:text-base tracking-[0.06em] md:tracking-[0.1em] font-body font-medium transition-all flex-shrink-0 rounded-sm
                ${activeCategory === item.id
                  ? "bg-amber text-primary-foreground shadow-sm"
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
