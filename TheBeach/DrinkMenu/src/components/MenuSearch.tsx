import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { menuSections } from "@/data/menuData";

const MenuSearch = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (sectionId: string) => {
    setOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1" 
        aria-label="Search menu"
      >
        <Search className="h-[18px] w-[18px] md:h-5 md:w-5" />
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search the menu... (Ctrl+K)" />
        <CommandList>
          <CommandEmpty>No item found.</CommandEmpty>
          {menuSections.map((section) => {
            const mainItems = section.items || [];
            const subItems = section.subsections?.flatMap(sub => sub.items) || [];
            const allItems = [...mainItems, ...subItems];
            
            if (allItems.length === 0) return null;

            return (
              <CommandGroup key={section.id} heading={section.title}>
                {allItems.map((item, i) => (
                  <CommandItem
                    key={`${section.id}-${i}`}
                    onSelect={() => handleSelect(section.id)}
                    className="flex justify-between items-center px-4 py-2 cursor-pointer"
                  >
                    <div>
                      <div className="font-medium text-foreground">{item.name}</div>
                      {item.description && (
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      )}
                    </div>
                    <span className="text-amber text-sm font-medium">
                      {item.price || item.priceDom || item.priceImp || item.priceGlass || ""}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            );
          })}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default MenuSearch;
