import { Phone } from "lucide-react";
import MenuSearch from "./MenuSearch";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/[0.06]">
      <div className="flex h-12 md:h-14 items-center justify-between px-4 md:px-8">
        <a href="tel:+19999999999" className="flex items-center gap-1.5 md:gap-2 text-muted-foreground hover:text-gold transition-colors duration-300 text-xs md:text-sm font-body">
          <Phone className="h-[13px] w-[13px] md:h-[14px] md:w-[14px]" />
          <span className="hidden sm:inline">+1 999-999-9999</span>
        </a>
        
        <h1 className="font-heading text-base md:text-xl font-semibold tracking-[0.18em] md:tracking-[0.22em] text-foreground">
          EAST COAST
        </h1>
        
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="tel:+19999999999"
            className="hidden md:inline-block px-5 py-2 border border-gold/50 text-gold text-[10px] tracking-[0.18em] font-body font-medium hover:bg-gold hover:text-primary-foreground transition-all duration-300 rounded-sm"
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
