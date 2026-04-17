import { useState, useEffect } from "react";
import { Search, Command as CommandIcon } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import type { MenuItem, SubCategory } from "@/data/banquetMenuData";
import { useBanquetMenu } from "@/hooks/useBanquetMenu";

const MenuSearch = () => {
  const [open, setOpen] = useState(false);
  const { data: banquetMenuData } = useBanquetMenu();

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

  // Improved item extraction to handle nested categories in banquetMenuData
  const getAllItems = () => {
    const results: { item: MenuItem; categoryName: string; subCategoryName?: string }[] = [];

    const processCategory = (category: any, catTitle: string) => {
      if (category.items) {
        category.items.forEach((item: MenuItem) => {
          results.push({ item, categoryName: catTitle });
        });
      }
      if (category.categories) {
        category.categories.forEach((sub: SubCategory) => {
          if (sub.items) {
            sub.items.forEach((item: MenuItem) => {
              results.push({ item, categoryName: catTitle, subCategoryName: sub.name });
            });
          }
          // Handle deeper nesting if it ever occurs
          if (sub.subCategories) {
            sub.subCategories.forEach((ss: SubCategory) => {
               ss.items.forEach((item: MenuItem) => {
                 results.push({ item, categoryName: catTitle, subCategoryName: `${sub.name} > ${ss.name}` });
               });
            });
          }
        });
      }
    };

    banquetMenuData.forEach((cat) => processCategory(cat, cat.title));
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
        <CommandInput placeholder="Search for a dish... (e.g. Mutton, Soup)" />
        <CommandList className="max-h-[300px] md:max-h-[450px] overflow-y-auto">
          <CommandEmpty className="py-6 text-center text-sm">No dishes found.</CommandEmpty>
          
          <CommandGroup heading="Menu Items">
            {allItems.map(({ item, categoryName, subCategoryName }, i) => (
              <CommandItem
                key={`${item.name}-${i}`}
                onSelect={() => handleSelect(item.name)}
                className="flex items-center justify-between px-4 py-3 rounded-md cursor-pointer data-[selected=true]:bg-gold/5"
              >
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    {item.diet && (
                      <span className={`w-2 h-2 rounded-full ${item.diet === 'non-veg' ? 'bg-red-500' : 'bg-green-500'}`} />
                    )}
                    <span className="font-medium text-foreground text-sm md:text-base">{item.name}</span>
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground font-body flex items-center gap-1 opacity-70">
                    <span className="uppercase tracking-wider">{categoryName}</span>
                    {subCategoryName && (
                      <>
                        <span className="mx-1">•</span>
                        <span className="uppercase tracking-wider">{subCategoryName}</span>
                      </>
                    )}
                  </div>
                </div>
                {item.price && (
                  <span className="text-gold text-xs font-semibold tabular-nums ml-4 shrink-0">{item.price}</span>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default MenuSearch;
