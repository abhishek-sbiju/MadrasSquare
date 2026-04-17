import { useQuery } from "@tanstack/react-query";
import { banquetMenuData as fallbackData } from "@/data/banquetMenuData";
import { fetchBanquetMenu } from "@/lib/sheetMenu";
import type { MenuCategory } from "@/data/banquetMenuData";

/**
 * Live banquet menu sourced from the client's Google Sheet.
 *
 * Returns the hardcoded fallback while loading or on error, so the menu is
 * never broken for diners.
 */
export function useBanquetMenu(): {
  data: MenuCategory[];
  isLive: boolean;
  isLoading: boolean;
  isError: boolean;
} {
  const query = useQuery({
    queryKey: ["banquet-menu", "eastcoast"],
    queryFn: fetchBanquetMenu,
    staleTime: 60_000,
    retry: 1,
  });

  const data = query.data && query.data.length > 0 ? query.data : fallbackData;

  return {
    data,
    isLive: Boolean(query.data && query.data.length > 0),
    isLoading: query.isLoading,
    isError: query.isError,
  };
}
