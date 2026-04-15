import { Phone, Sparkles } from "lucide-react";
import MenuSearch from "./MenuSearch";
import { restaurantInfo } from "@/data/restaurantInfo";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 md:h-20 md:px-8">
        <a href="#hero" className="min-w-0">
          <p className="font-body text-[9px] uppercase tracking-[0.35em] text-muted-foreground md:text-[10px]">
            {restaurantInfo.parentBrand}
          </p>
          <h1 className="font-heading text-xl font-bold tracking-[0.14em] text-foreground md:text-3xl">
            {restaurantInfo.venue}
          </h1>
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-border/80 bg-card/75 px-4 py-2 font-body text-[11px] uppercase tracking-[0.24em] text-muted-foreground lg:flex">
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          <span>{restaurantInfo.menuLabel}</span>
          <span className="text-border">/</span>
          <span>Printed Order</span>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={restaurantInfo.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-3 py-2 font-body text-[11px] font-medium tracking-[0.14em] text-foreground transition hover:border-gold/50 hover:text-gold md:px-4"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{restaurantInfo.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>

          <a
            href={restaurantInfo.phoneHref}
            className="hidden rounded-full bg-gold px-4 py-2 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-gold-dark md:inline-flex"
          >
            Reserve
          </a>

          <MenuSearch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
