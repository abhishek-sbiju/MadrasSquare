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
import { menuCategories, MenuItem, MenuSubCategory } from "@/data/menuData";

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

  const handleSelect = (itemId: string) => {
    setOpen(false);
    const id = `item-${itemId.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("bg-gold/10");
      setTimeout(() => el.classList.remove("bg-gold/10"), 2000);
    }
  };

  // Improved item extraction to handle subCategories in EC Food Menu
  const getAllItems = () => {
    const results: { item: MenuItem; categoryName: string; subCategoryName?: string }[] = [];

    menuCategories.forEach((category) => {
      if (category.items) {
        category.items.forEach((item) => {
          results.push({ item, categoryName: category.title });
        });
      }
      if (category.subCategories) {
        category.subCategories.forEach((sub) => {
          sub.items.forEach((item) => {
            results.push({ item, categoryName: category.title, subCategoryName: sub.name });
          });
        });
      }
    });

    return results;
  };

  const allItems = getAllItems();

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="text-muted-foreground hover:text-gold transition-colors p-2" 
        aria-label="Search Menu"
      >
        <Search className="h-[18px] w-[18px] md:h-5 md:w-5" />
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search culinary delights..." />
        <CommandList className="max-h-[70vh] md:max-h-[500px]">
          <CommandEmpty>No dishes found.</CommandEmpty>
          <CommandGroup heading="Menu Items">
            {allItems.map(({ item, categoryName, subCategoryName }, i) => (
              <CommandItem
                key={`${item.name}-${i}`}
                onSelect={() => handleSelect(item.name)}
                className="flex items-center justify-between px-4 py-3 rounded-md cursor-pointer data-[selected=true]:bg-gold/5"
              >
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    {item.dietType && (
                      <div className={`w-2 h-2 rounded-full shrink-0 ${
                        item.dietType === 'veg' ? 'bg-green-600' : 
                        item.dietType === 'non-veg' ? 'bg-red-600' : 
                        'bg-[linear-gradient(to_right,#16a34a_50%,#dc2626_50%)]'
                      }`} />
                    )}
                    <span className="font-medium text-foreground truncate uppercase tracking-wide text-xs md:text-sm">
                      {item.name}
                    </span>
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground flex items-center gap-1 opacity-80">
                    <span className="truncate">{categoryName}</span>
                    {subCategoryName && (
                      <>
                        <span className="px-1 opacity-40">/</span>
                        <span className="truncate">{subCategoryName}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 ml-4 shrink-0">
                  <span className="text-gold font-semibold text-xs md:text-sm tabular-nums">
                    {item.price}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default MenuSearch;
