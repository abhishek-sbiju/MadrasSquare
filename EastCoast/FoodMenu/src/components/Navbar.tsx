import { Phone } from "lucide-react";
import MenuSearch from "./MenuSearch";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex h-12 md:h-[57px] items-center justify-between px-3 md:px-8">
        <a href="tel:+917299440000" className="flex items-center gap-1.5 md:gap-2 text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm font-body">
          <Phone className="h-[13px] w-[13px] md:h-[14px] md:w-[14px]" />
          <span className="hidden sm:inline">+91 72994 40000</span>
        </a>
        
        {/* Two-line branded header */}
        <div className="text-center">
          <p className="font-body text-[7px] md:text-[9px] tracking-[0.35em] md:tracking-[0.4em] text-muted-foreground uppercase leading-none mb-0.5">
            Madras Square
          </p>
          <h1 className="font-heading text-lg md:text-2xl font-bold tracking-[0.18em] md:tracking-[0.22em] text-foreground leading-none">
            EAST COAST
          </h1>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="tel:+917299440000"
            className="hidden md:inline-block px-5 py-2 border border-gold text-gold text-xs tracking-[0.15em] font-body font-medium hover:bg-gold hover:text-primary-foreground transition-all"
          >
            BOOK A TABLE
          </a>
          <MenuSearch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
