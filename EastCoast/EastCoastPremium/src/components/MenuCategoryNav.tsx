import { Switch } from "@/components/ui/switch";
import { useEffect, useRef } from "react";

interface MenuCategoryNavProps {
  activeCategory: string;
  onCategoryClick: (id: string) => void;
  categories: { id: string; label: string }[];
  isVegOnly: boolean;
  setIsVegOnly: (val: boolean) => void;
}

const MenuCategoryNav = ({ activeCategory, onCategoryClick, categories, isVegOnly, setIsVegOnly }: MenuCategoryNavProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector(`[data-category-id="${activeCategory}"]`) as HTMLElement;
      if (activeElement) {
        const container = scrollContainerRef.current;
        const scrollLeft = activeElement.offsetLeft - (container.clientWidth / 2) + (activeElement.clientWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeCategory]);

  return (
    <div id="menu-nav" className="sticky top-14 md:top-16 z-40 bg-background/95 backdrop-blur-md border-b border-white/[0.03]">
      <div className="flex items-center justify-between px-3 md:px-10">
        <div ref={scrollContainerRef} className="menu-categories flex overflow-x-auto gap-0 py-3.5 md:py-4 flex-1 min-w-0 scroll-smooth">
          {categories.map((item) => (
            <button
              key={item.id}
              data-category-id={item.id}
              onClick={() => onCategoryClick(item.id)}
              className={`whitespace-nowrap px-3.5 py-1.5 text-[8px] md:px-5 md:py-2 md:text-[10px] tracking-[0.14em] md:tracking-[0.18em] font-body font-medium transition-all duration-300 flex-shrink-0 uppercase
                ${activeCategory === item.id
                  ? "text-gold/90"
                  : "text-muted-foreground/40 hover:text-muted-foreground/70"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-1.5 pl-3 md:pl-5 py-2 border-l border-white/[0.04] ml-1">
          <label htmlFor="veg-toggle" className="text-[7px] md:text-[9px] font-medium tracking-[0.15em] font-body text-green-500/60 uppercase whitespace-nowrap cursor-pointer">
            Veg
          </label>
          <Switch 
            id="veg-toggle" 
            checked={isVegOnly} 
            onCheckedChange={setIsVegOnly} 
            className="data-[state=checked]:bg-green-500 scale-[0.6] md:scale-[0.8] origin-right"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuCategoryNav;
