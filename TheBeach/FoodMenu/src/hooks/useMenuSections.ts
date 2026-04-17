import { useQuery } from "@tanstack/react-query";
import { menuSections as fallbackSections } from "@/data/menuData";
import { fetchMenuSections } from "@/lib/sheetMenu";
import type { MenuSection } from "@/data/menuData";

/**
 * Live menu data sourced from the client's Google Sheet.
 *
 * Returns the hardcoded fallback while loading or on error, so the menu is
 * never broken for diners. See src/lib/sheetMenu.ts for the fetch/transform.
 */
export function useMenuSections(): {
  sections: MenuSection[];
  isLive: boolean;
  isLoading: boolean;
  isError: boolean;
} {
  const query = useQuery({
    queryKey: ["menu-sections", "thebeach-food"],
    queryFn: fetchMenuSections,
    staleTime: 60_000,
    retry: 1,
  });

  const sections =
    query.data && query.data.length > 0 ? query.data : fallbackSections;

  return {
    sections,
    isLive: Boolean(query.data && query.data.length > 0),
    isLoading: query.isLoading,
    isError: query.isError,
  };
}
