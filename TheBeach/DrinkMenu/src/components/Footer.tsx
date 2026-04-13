import { Instagram, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-border mt-12 pt-16 pb-8 px-6 md:px-12 lg:px-20 text-center md:text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-heading text-2xl font-bold tracking-[0.15em] text-foreground mb-4">EAST COAST</h2>
          <p className="text-muted-foreground font-body text-sm max-w-sm mb-6 leading-relaxed">
            Elevating your evening with premium spirits, craft cocktails, and an ambiance that speaks luxury.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-amber/30 flex items-center justify-center text-amber hover:bg-amber hover:text-black transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Contact & Location */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-heading text-lg font-semibold tracking-widest text-amber mb-6 uppercase">Contact & Location</h3>
          <ul className="space-y-4 font-body text-sm text-muted-foreground flex flex-col items-center md:items-start">
            <li className="flex items-start gap-3 text-left">
              <MapPin size={18} className="text-amber shrink-0 mt-0.5" />
              <span>Madras Square, South Goa,<br />India, 403001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-amber shrink-0" />
              <div className="flex flex-col text-left">
                <a href="tel:+19999999999" className="hover:text-foreground transition-colors">+1 999 999 9999</a>
                <a href="tel:+19999999999" className="hover:text-foreground transition-colors">+1 999 999 9999</a>
              </div>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-heading text-lg font-semibold tracking-widest text-amber mb-6 uppercase">Operating Hours</h3>
          <ul className="space-y-3 font-body text-sm text-muted-foreground flex flex-col items-center md:items-start">
            <li className="flex items-start gap-3 text-left">
              <Clock size={18} className="text-amber shrink-0 mt-0.5" />
              <div>
                <p>Mon - Fri: 5:00 PM - 1:00 AM</p>
                <p className="mt-1">Sat - Sun: 3:00 PM - 2:00 AM</p>
              </div>
            </li>
          </ul>
          <div className="mt-6">
            <p className="font-body text-[10px] text-muted-foreground/60 leading-relaxed">
              Prices are inclusive of 14.5% tax for liquor and 58% tax for wine
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-xs text-muted-foreground/60">
        <p>© {new Date().getFullYear()} East Coast. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-amber transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-amber transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
