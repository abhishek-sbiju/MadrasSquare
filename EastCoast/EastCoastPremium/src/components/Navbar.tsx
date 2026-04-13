import { Phone } from "lucide-react";
import MenuSearch from "./MenuSearch";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/[0.06]">
      <div className="flex h-14 md:h-16 items-center justify-between px-5 md:px-10">
        <a href="tel:+19999999999" className="flex items-center gap-1.5 md:gap-2 text-muted-foreground hover:text-gold transition-colors duration-300 text-[11px] md:text-xs font-body tracking-wide">
          <Phone className="h-[12px] w-[12px] md:h-[13px] md:w-[13px]" strokeWidth={1.5} />
          <span className="hidden sm:inline">+1 999-999-9999</span>
        </a>
        
        {/* Two-line header: restaurant name + branch */}
        <div className="text-center">
          <h1 className="font-heading text-lg md:text-2xl font-bold tracking-[0.22em] md:tracking-[0.28em] text-foreground leading-none">
            EAST COAST
          </h1>
          <p className="font-body text-[7px] md:text-[8px] tracking-[0.3em] text-muted-foreground/60 uppercase mt-0.5">
            Madras Square
          </p>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="tel:+19999999999"
            className="hidden md:inline-block px-6 py-2.5 border border-gold/40 text-gold text-[9px] tracking-[0.2em] font-body font-medium hover:bg-gold hover:text-primary-foreground transition-all duration-300"
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
