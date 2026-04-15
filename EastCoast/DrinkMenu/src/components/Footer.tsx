import { Instagram, MapPin, Phone, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-white/5 pt-20 pb-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        
        {/* Left Column: Contact & Social */}
        <div className="flex-1 space-y-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-gold shrink-0 mt-1" />
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                East Coast at Madras Square , 2/520, Sundeep Ave,<br />
                Sakthimoorthiamman Nagar, Neelankarai, Chennai,<br />
                Tamil Nadu 600041
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone size={20} className="text-gold shrink-0" />
              <a href="tel:+917299440000" className="font-body text-sm md:text-base text-muted-foreground hover:text-gold transition-colors">
                +91 72994 40000
              </a>
            </div>

            <div className="flex items-center gap-4">
              <BookOpen size={20} className="text-gold shrink-0" />
              <button className="font-body text-sm md:text-base text-muted-foreground hover:text-gold transition-colors text-left uppercase tracking-wider">
                Reserve Online
              </button>
            </div>

            <div className="flex items-center gap-4 group">
              <Instagram size={20} className="text-gold shrink-0" />
              <a 
                href="https://www.instagram.com/madrassquare/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-body text-sm md:text-base text-muted-foreground group-hover:text-gold transition-colors flex items-center gap-2"
              >
                Follow Us
              </a>
            </div>
          </div>
        </div>

        {/* Divider for Desktop */}
        <div className="hidden md:block w-px bg-white/10 self-stretch" />

        {/* Right Column: Hours */}
        <div className="flex-1 space-y-6">
          <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground tracking-wide">
            Kitchen operating hours:
          </h3>
          <div className="grid grid-cols-1 gap-3 font-body text-sm md:text-base text-muted-foreground/80">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>Monday – Friday</span>
              <span className="text-foreground/90 font-medium">11 am – 10.30 pm</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>Saturday</span>
              <span className="text-foreground/90 font-medium">11 am – 3.45 pm | 6:30 pm – 10:30 pm</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>Sunday</span>
              <span className="text-foreground/90 font-medium">11 am – 3.45 pm | 6:30 pm – 10:30 pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-[11px] text-muted-foreground/40 tracking-widest uppercase">
        <p>© {new Date().getFullYear()} East Coast at Madras Square</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold transition-colors">Privacy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
