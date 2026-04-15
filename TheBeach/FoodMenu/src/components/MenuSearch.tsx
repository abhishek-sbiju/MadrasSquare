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
import { menuCategories } from "@/data/menuData";

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

  const handleSelect = (categoryId: string) => {
    setOpen(false);
    const el = document.getElementById(categoryId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card/80 text-muted-foreground transition hover:border-gold/50 hover:text-gold" 
        aria-label="Search"
      >
        <Search className="h-[18px] w-[18px] md:h-5 md:w-5" />
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search dishes or sections... (Cmd+K)" />
        <CommandList>
          <CommandEmpty>No dish found.</CommandEmpty>
          {menuCategories.map((category) => {
            const items = category.items || [];
            const subItems = category.subCategories?.flatMap(sub => sub.items) || [];
            const allItems = [...items, ...subItems];
            
            if (allItems.length === 0) return null;

            return (
              <CommandGroup key={category.id} heading={category.title}>
                {allItems.map((item, i) => (
                  <CommandItem
                    key={`${category.id}-${i}`}
                    onSelect={() => handleSelect(category.id)}
                    className="flex justify-between items-center px-4 py-2 cursor-pointer"
                  >
                    <div>
                      <div className="font-medium text-foreground">{item.name}</div>
                      {item.variants && (
                        <div className="text-xs text-muted-foreground">{item.variants}</div>
                      )}
                    </div>
                    <span className="text-gold text-sm font-medium">{item.price}</span>
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
