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
    <div id="menu-nav" className="sticky top-12 md:top-[57px] z-40 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-1.5 md:px-6">
        <div ref={scrollContainerRef} className="menu-categories flex overflow-x-auto gap-2 py-3 md:py-4 flex-1 min-w-0 scroll-smooth">
          {categories.map((item) => (
            <button
              key={item.id}
              data-category-id={item.id}
              onClick={() => onCategoryClick(item.id)}
              className={`whitespace-nowrap px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm tracking-[0.08em] md:tracking-[0.12em] font-body font-semibold transition-all duration-300 flex-shrink-0 rounded-sm border
                ${activeCategory === item.id
                  ? "bg-gold/10 text-gold border-gold/30"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-foreground/[0.03]"
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
