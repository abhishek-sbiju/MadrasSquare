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
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeCategory]);

  return (
    <div id="menu-nav" className="sticky top-12 md:top-[57px] z-40 bg-background/85 backdrop-blur-xl border-b border-white/[0.04] shadow-[0_4px_25px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between px-1.5 md:px-6">
        <div ref={scrollContainerRef} className="menu-categories flex overflow-x-auto gap-1 py-3 md:py-4 flex-1 min-w-0 scroll-smooth">
          {categories.map((item) => (
            <button
              key={item.id}
              data-category-id={item.id}
              onClick={() => onCategoryClick(item.id)}
              className={`whitespace-nowrap px-3 py-1.5 text-[10px] md:px-5 md:py-2 md:text-[13px] tracking-[0.08em] md:tracking-[0.12em] font-body font-medium transition-all duration-300 flex-shrink-0 rounded-sm outline-none
                ${activeCategory === item.id
                  ? "bg-gold/90 text-primary-foreground shadow-sm shadow-gold/20 ring-1 ring-gold ring-offset-2 ring-offset-background"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/[0.03]"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-1 md:gap-2 pl-2.5 md:pl-4 py-2 md:py-3.5 border-l border-black/[0.08] ml-1.5 md:ml-2">
          <label htmlFor="veg-toggle" className="text-[8px] md:text-[11px] font-bold tracking-[0.14em] md:tracking-widest font-heading text-green-500 uppercase whitespace-nowrap cursor-pointer">
            Veg Only
          </label>
          <Switch 
            id="veg-toggle" 
            checked={isVegOnly} 
            onCheckedChange={setIsVegOnly} 
            className="data-[state=checked]:bg-green-500 scale-[0.72] md:scale-100 origin-right"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuCategoryNav;
