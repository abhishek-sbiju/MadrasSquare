import { useState, useEffect, useRef, useMemo } from "react";
import type { MenuCategory } from "@/data/banquetMenuData";
import { Sparkles, X } from "lucide-react";
import { useSelection } from "./SelectionProvider";

const ALL_NAV_ITEMS = [
  { id: "mocktails", label: "Mocktails" },
  { id: "soups", label: "Soups" },
  { id: "salads", label: "Salads" },
  { id: "appetizers", label: "Starters" },
  { id: "mains-veg", label: "Mains (Veg)" },
  { id: "mains-nonveg", label: "Mains (Non-Veg)" },
  { id: "desserts", label: "Desserts" },
  { id: "bottle-prices", label: "Drinks" },
  { id: "rams-signature", label: "Ram's Signature" },
];

interface BanquetNavProps {
  categories?: MenuCategory[];
}

const BanquetNav = ({ categories }: BanquetNavProps) => {
  const { isSelecting, toggleSelecting, selections } = useSelection();
  // Only show nav entries for categories that actually appear on the page.
  // When `categories` is undefined (still loading), fall back to the full list
  // so the sticky bar doesn't visibly pop in. Once data loads the filter
  // kicks in and any hidden/unavailable categories drop out of the nav too.
  const navItems = useMemo(() => {
    if (!categories || categories.length === 0) return ALL_NAV_ITEMS;
    const availableIds = new Set(categories.map((c) => c.id));
    return ALL_NAV_ITEMS.filter((item) => availableIds.has(item.id));
  }, [categories]);

  const [activeId, setActiveId] = useState(navItems[0]?.id ?? "");
  const navRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  // Scroll-spy: track which section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is most visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: [0, 0.25, 0.5],
      }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navItems]);

  // Auto-scroll the nav bar to keep the active item centered
  useEffect(() => {
    if (activeRef.current && navRef.current) {
      const nav = navRef.current;
      const btn = activeRef.current;
      const navRect = nav.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      const scrollLeft =
        btn.offsetLeft - nav.offsetWidth / 2 + btnRect.width / 2;
      nav.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeId]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="banquet-nav" className="sticky top-12 md:top-[57px] z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="w-full flex items-center gap-2 px-4 md:px-8 py-2 md:py-3">
        <button
          type="button"
          onClick={toggleSelecting}
          className={`
            flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 md:px-4 py-1 md:py-1.5 text-[11px] md:text-[12px]
            tracking-[0.1em] md:tracking-[0.14em] font-body font-semibold uppercase
            transition-all duration-300 flex-shrink-0 border
            ${
              isSelecting
                ? "bg-gold text-primary-foreground border-gold shadow shadow-gold/20"
                : "border-gold/40 text-gold hover:bg-gold/10"
            }
          `}
          aria-pressed={isSelecting}
        >
          {isSelecting ? <X size={12} /> : <Sparkles size={12} />}
          {isSelecting ? (
            <>
              <span>Selecting</span>
              {selections.length > 0 && (
                <span className="ml-0.5 bg-white/25 rounded-full px-1.5 tabular-nums text-[10px]">
                  {selections.length}
                </span>
              )}
            </>
          ) : (
            <span>Customize</span>
          )}
        </button>
        <nav
          ref={navRef}
          className="flex overflow-x-auto md:justify-center gap-2 md:gap-4 flex-1 scroll-smooth scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            const isRamsSignature = item.id === "rams-signature";
            
            return (
              <button
                key={item.id}
                ref={isActive ? activeRef : null}
                onClick={() => handleClick(item.id)}
                className={`
                  flex items-center gap-1.5 md:gap-2
                  whitespace-nowrap px-3 md:px-4 py-1 md:py-1.5 text-[11px] md:text-[13px] 
                  tracking-[0.1em] md:tracking-[0.15em] font-body font-semibold uppercase 
                  transition-all duration-300 flex-shrink-0 border-b-2 outline-none
                  ${
                    isActive
                      ? "text-gold border-gold"
                      : isRamsSignature 
                        ? "border-transparent text-gold/75 hover:text-gold hover:bg-gold/5"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:bg-foreground/[0.03]"
                  }
                `}
              >
                {isRamsSignature && <span className="text-[10px] md:text-[11px] mb-0.5">✦</span>}
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};



export default BanquetNav;
