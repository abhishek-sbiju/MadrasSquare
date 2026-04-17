import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/**
 * Shared state for the "customize your banquet" flow. Holds the set of dishes
 * the guest has selected plus (when applicable) per-item quantities, and
 * whether the menu is currently in selection mode (checkboxes visible).
 *
 * Persisted to localStorage so a guest can pick dishes, leave, and come back
 * without losing their cart.
 */

export interface SelectedItem {
  id: string;
  name: string;
  category: string; // top-level category title e.g. "MAINS - VEGETARIAN"
  subCategory?: string; // e.g. "INDIAN"
  qty: number;
  unitPrice?: number; // only set for priced items (bottle prices)
  priceLabel?: string; // the raw price string for display, e.g. "750 ML ₹8590"
}

interface SelectionContextValue {
  selections: SelectedItem[];
  selectionMap: Record<string, SelectedItem>;
  isSelecting: boolean;
  setSelecting: (v: boolean) => void;
  toggleSelecting: () => void;

  isSelected: (id: string) => boolean;
  getQty: (id: string) => number;

  toggle: (item: Omit<SelectedItem, "qty"> & { qty?: number }) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;

  foodCount: number; // total count of non-priced selections (each item counts as 1)
  bottleSubtotal: number; // rupee sum across priced items (unitPrice * qty)
}

const SelectionContext = createContext<SelectionContextValue | null>(null);

const STORAGE_KEY = "ms.banquet.selection.v1";

interface PersistedState {
  isSelecting: boolean;
  items: SelectedItem[];
}

function readStorage(): PersistedState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PersistedState;
    if (!parsed || !Array.isArray(parsed.items)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeStorage(state: PersistedState) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore quota errors */
  }
}

export function SelectionProvider({ children }: { children: ReactNode }) {
  const [selectionMap, setSelectionMap] = useState<Record<string, SelectedItem>>(
    () => {
      const persisted = readStorage();
      if (!persisted) return {};
      const map: Record<string, SelectedItem> = {};
      persisted.items.forEach((it) => {
        if (it && it.id) map[it.id] = it;
      });
      return map;
    },
  );

  const [isSelecting, setIsSelecting] = useState<boolean>(() => {
    const persisted = readStorage();
    return persisted?.isSelecting ?? false;
  });

  // Persist on every change
  useEffect(() => {
    writeStorage({ isSelecting, items: Object.values(selectionMap) });
  }, [isSelecting, selectionMap]);

  const toggle = useCallback<SelectionContextValue["toggle"]>((item) => {
    setSelectionMap((prev) => {
      if (prev[item.id]) {
        const next = { ...prev };
        delete next[item.id];
        return next;
      }
      return {
        ...prev,
        [item.id]: {
          id: item.id,
          name: item.name,
          category: item.category,
          subCategory: item.subCategory,
          unitPrice: item.unitPrice,
          priceLabel: item.priceLabel,
          qty: item.qty && item.qty > 0 ? item.qty : 1,
        },
      };
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setSelectionMap((prev) => {
      const existing = prev[id];
      if (!existing) return prev;
      if (qty <= 0) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: { ...existing, qty } };
    });
  }, []);

  const remove = useCallback((id: string) => {
    setSelectionMap((prev) => {
      if (!prev[id]) return prev;
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const clear = useCallback(() => {
    setSelectionMap({});
  }, []);

  const value = useMemo<SelectionContextValue>(() => {
    const selections = Object.values(selectionMap);
    let foodCount = 0;
    let bottleSubtotal = 0;
    for (const s of selections) {
      if (s.unitPrice && s.unitPrice > 0) {
        bottleSubtotal += s.unitPrice * s.qty;
      } else {
        foodCount += 1;
      }
    }
    return {
      selections,
      selectionMap,
      isSelecting,
      setSelecting: setIsSelecting,
      toggleSelecting: () => setIsSelecting((v) => !v),
      isSelected: (id: string) => Boolean(selectionMap[id]),
      getQty: (id: string) => selectionMap[id]?.qty ?? 0,
      toggle,
      setQty,
      remove,
      clear,
      foodCount,
      bottleSubtotal,
    };
  }, [selectionMap, isSelecting, toggle, setQty, remove, clear]);

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelection(): SelectionContextValue {
  const ctx = useContext(SelectionContext);
  if (!ctx) {
    throw new Error("useSelection must be used inside <SelectionProvider>");
  }
  return ctx;
}

/** Parse "₹8590" / "750 ML ₹8590" / "Glass ₹690" → 8590. Returns 0 if none. */
export function parsePriceNumber(raw?: string): number {
  if (!raw) return 0;
  const m = raw.match(/(\d[\d,]*)(?:\.\d+)?/);
  if (!m) return 0;
  return Number(m[1].replace(/,/g, "")) || 0;
}

/** Stable id for a menu item: category | subcategory | name, lowercased. */
export function makeItemId(
  category: string,
  subCategory: string | undefined,
  name: string,
): string {
  return `${category}|${subCategory ?? ""}|${name}`
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}
