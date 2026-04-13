import { Instagram, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/30 border-t border-white/[0.04] mt-20 pt-20 pb-10 px-6 md:px-14 lg:px-24 text-center md:text-left">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-20 mb-16">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-heading text-xl font-bold tracking-[0.2em] text-foreground mb-1">EAST COAST</h2>
          <p className="font-body text-[7px] tracking-[0.3em] text-muted-foreground/40 uppercase mb-5">Madras Square</p>
          <p className="text-muted-foreground/50 font-body text-[12px] max-w-xs mb-6 leading-relaxed">
            Elevating your dining experience with premium cuisine, artisanal plates, and an ambiance that speaks luxury.
          </p>
          <a href="#" className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-muted-foreground/50 hover:text-gold hover:border-gold/30 transition-all duration-300" aria-label="Instagram">
            <Instagram size={15} strokeWidth={1.5} />
          </a>
        </div>

        {/* Contact & Location */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-body text-[9px] font-semibold tracking-[0.25em] text-muted-foreground/50 mb-6 uppercase">Contact & Location</h3>
          <ul className="space-y-4 font-body text-[12px] text-muted-foreground/55 flex flex-col items-center md:items-start">
            <li className="flex items-start gap-3 text-left">
              <MapPin size={14} className="text-gold/40 shrink-0 mt-0.5" strokeWidth={1.5} />
              <span>Madras Square, South Goa,<br />India, 403001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-gold/40 shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col text-left">
                <a href="tel:+19999999999" className="hover:text-foreground/70 transition-colors duration-200">+1 999 999 9999</a>
                <a href="tel:+19999999999" className="hover:text-foreground/70 transition-colors duration-200">+1 999 999 9999</a>
              </div>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-body text-[9px] font-semibold tracking-[0.25em] text-muted-foreground/50 mb-6 uppercase">Operating Hours</h3>
          <ul className="space-y-3 font-body text-[12px] text-muted-foreground/55 flex flex-col items-center md:items-start">
            <li className="flex items-start gap-3 text-left">
              <Clock size={14} className="text-gold/40 shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p>Mon – Fri: 5:00 PM – 1:00 AM</p>
                <p className="mt-1">Sat – Sun: 3:00 PM – 2:00 AM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4 font-body text-[10px] text-muted-foreground/30 tracking-wider">
        <p>© {new Date().getFullYear()} East Coast</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-muted-foreground/50 transition-colors duration-200">Privacy</a>
          <a href="#" className="hover:text-muted-foreground/50 transition-colors duration-200">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
