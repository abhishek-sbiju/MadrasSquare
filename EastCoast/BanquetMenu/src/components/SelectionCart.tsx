import { useMemo, useState, type ReactNode } from "react";
import { ShoppingBag, Trash2, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSelection, type SelectedItem } from "./SelectionProvider";
import EnquiryForm from "./EnquiryForm";

/**
 * Floating selection cart. Appears at the bottom-right whenever selection
 * mode is on, showing a live count; tapping opens a drawer that lists every
 * picked dish grouped by category, with remove buttons and the enquire CTA.
 */

const formatINR = (n: number) =>
  n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

function groupByCategory(selections: SelectedItem[]) {
  const groups: Record<string, SelectedItem[]> = {};
  for (const s of selections) {
    const key = s.category;
    if (!groups[key]) groups[key] = [];
    groups[key].push(s);
  }
  return Object.entries(groups);
}

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center text-center text-muted-foreground py-16 px-6">
    <ShoppingBag className="w-10 h-10 mb-4 text-gold/60" />
    <p className="font-body text-[15px] mb-2">No dishes selected yet.</p>
    <p className="font-body text-[13px] text-muted-foreground/70">
      Tap items in the menu to build your banquet selection.
    </p>
  </div>
);

interface CartBodyProps {
  onReview: () => void;
  onClose: () => void;
}

const CartBody = ({ onReview, onClose }: CartBodyProps) => {
  const { selections, remove, clear, foodCount, bottleSubtotal } =
    useSelection();
  const groups = useMemo(() => groupByCategory(selections), [selections]);

  if (selections.length === 0) return <EmptyState />;

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-5 md:px-6 pb-6">
        <div className="space-y-7 pt-2">
          {groups.map(([category, items]) => (
            <div key={category}>
              <h3 className="font-heading text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase text-gold mb-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start justify-between gap-3 text-[14px] md:text-[15px] font-body"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-foreground leading-snug break-words">
                        {item.name}
                        {item.subCategory && (
                          <span className="text-muted-foreground/70 text-[12px] ml-1.5">
                            · {item.subCategory}
                          </span>
                        )}
                      </p>
                      {item.unitPrice && item.unitPrice > 0 && (
                        <p className="text-[12px] text-muted-foreground mt-0.5 tabular-nums">
                          {item.qty} × ₹{formatINR(item.unitPrice)} ={" "}
                          <span className="text-gold font-semibold">
                            ₹{formatINR(item.unitPrice * item.qty)}
                          </span>
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="shrink-0 w-7 h-7 rounded-full hover:bg-foreground/[0.06] text-muted-foreground hover:text-destructive flex items-center justify-center transition-colors"
                    >
                      <X size={15} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={clear}
          className="mt-8 flex items-center gap-2 text-[12px] font-body uppercase tracking-[0.2em] text-muted-foreground hover:text-destructive transition-colors"
        >
          <Trash2 size={13} />
          Clear all
        </button>
      </div>

      {/* Footer totals + CTA */}
      <div className="border-t border-border px-5 md:px-6 py-5 bg-background/80 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-1 font-body text-[13px] text-muted-foreground">
          <span>Dishes selected</span>
          <span className="tabular-nums">{foodCount}</span>
        </div>
        {bottleSubtotal > 0 && (
          <div className="flex items-center justify-between font-body text-[14px] md:text-[15px]">
            <span className="text-foreground font-semibold">Bottles subtotal</span>
            <span className="text-gold font-heading font-bold text-[17px] md:text-lg tabular-nums">
              ₹{formatINR(bottleSubtotal)}
            </span>
          </div>
        )}
        <p className="text-[11px] md:text-[12px] text-muted-foreground/70 mt-2 leading-relaxed">
          Food pricing is shared on enquiry per your guest count. Bottle prices
          are listed above.
        </p>
        <button
          type="button"
          onClick={() => {
            onClose();
            onReview();
          }}
          className="mt-4 w-full bg-gold hover:bg-gold/90 text-primary-foreground font-body font-semibold tracking-[0.12em] uppercase text-[13px] md:text-sm py-3.5 rounded-md transition-colors"
        >
          Review & Enquire
        </button>
      </div>
    </div>
  );
};

interface FloatingButtonProps {
  count: number;
  children: ReactNode;
}

const FloatingButton = ({ count, children }: FloatingButtonProps) => (
  <SheetTrigger asChild>
    <button
      type="button"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 bg-gold hover:bg-gold/90 text-primary-foreground rounded-full shadow-lg shadow-gold/25 px-5 py-3 md:px-6 md:py-3.5 font-body font-semibold tracking-[0.1em] uppercase text-[12px] md:text-[13px] flex items-center gap-2.5 transition-transform hover:scale-[1.03] active:scale-95"
      aria-label={`Open selection cart with ${count} item${count === 1 ? "" : "s"}`}
    >
      <ShoppingBag size={16} />
      <span>{children}</span>
      {count > 0 && (
        <span className="ml-1 bg-white/25 rounded-full px-2 py-0.5 text-[11px] tabular-nums">
          {count}
        </span>
      )}
    </button>
  </SheetTrigger>
);

const SelectionCart = () => {
  const { isSelecting, selections } = useSelection();
  const [open, setOpen] = useState(false);
  const [enquireOpen, setEnquireOpen] = useState(false);

  if (!isSelecting) return null;

  const count = selections.length;

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <FloatingButton count={count}>
          {count === 0 ? "View Selection" : "Selection"}
        </FloatingButton>
        <SheetContent
          side="right"
          className="w-full sm:max-w-md flex flex-col p-0"
        >
          <SheetHeader className="px-5 md:px-6 pt-5 pb-3 border-b border-border">
            <SheetTitle className="font-heading text-xl md:text-2xl font-bold tracking-[0.08em] uppercase text-foreground">
              Your Banquet Selection
            </SheetTitle>
          </SheetHeader>
          <CartBody
            onReview={() => setEnquireOpen(true)}
            onClose={() => setOpen(false)}
          />
        </SheetContent>
      </Sheet>

      <EnquiryForm open={enquireOpen} onOpenChange={setEnquireOpen} />
    </>
  );
};

export default SelectionCart;
