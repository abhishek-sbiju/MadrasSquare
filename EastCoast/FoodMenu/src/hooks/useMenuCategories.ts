import { useQuery } from "@tanstack/react-query";
import { menuCategories as fallbackCategories } from "@/data/menuData";
import { fetchMenuCategories } from "@/lib/sheetMenu";
import type { MenuCategory } from "@/data/menuData";

/**
 * Live menu data sourced from the client's Google Sheet.
 *
 * Behaviour:
 *  - While loading (first paint), returns the hardcoded fallback so the page
 *    renders instantly and is SEO-friendly.
 *  - On success, swaps in the live data from the sheet.
 *  - On error (sheet unreachable / misconfigured), keeps the fallback so the
 *    menu is never broken for diners.
 */
export function useMenuCategories(): {
  categories: MenuCategory[];
  isLive: boolean;
  isLoading: boolean;
  isError: boolean;
} {
  const query = useQuery({
    queryKey: ["menu-categories", "eastcoast-food"],
    queryFn: fetchMenuCategories,
    staleTime: 60_000,
    retry: 1,
  });

  const categories =
    query.data && query.data.length > 0 ? query.data : fallbackCategories;

  return {
    categories,
    isLive: Boolean(query.data && query.data.length > 0),
    isLoading: query.isLoading,
    isError: query.isError,
  };
}
