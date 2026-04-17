import { Instagram, MapPin, Phone, Clock, Waves } from "lucide-react";
import FadeIn from "./FadeIn";

const Footer = () => {
  return (
    <footer 
      className="relative border-t border-white/10 pt-20 pb-10 px-6 md:px-12 lg:px-20 text-center md:text-left overflow-hidden"
      style={{ background: "hsl(32 70% 20%)" }}
    >
      {/* Subtle wave pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.1) 40px,
            rgba(255,255,255,0.1) 41px
          )`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top brand bar */}
        <FadeIn delay={100}>
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold/40" />
              <Waves size={16} className="text-gold/60" />
              <span className="w-8 h-px bg-gold/40" />
            </div>
            <p className="font-body text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-white/40 mb-1">
              Madras Square
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-[0.2em] text-white/90 mb-3">
              EAST COAST
            </h2>
            <p className="text-white/40 font-body text-xs md:text-sm max-w-md leading-relaxed text-center">
              Elevating your dining experience with premium cuisine, artisanal plates, and an ambiance that speaks luxury.
            </p>
          </div>
        </FadeIn>

        {/* Three columns */}
        <FadeIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Location */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-heading text-sm font-semibold tracking-[0.25em] text-gold mb-5 uppercase">
                Find Us
              </h3>
              <ul className="space-y-4 font-body text-sm text-white/50 flex flex-col items-center md:items-start">
                <li className="flex items-start gap-3 text-left">
                  <MapPin size={16} className="text-gold/70 shrink-0 mt-0.5" />
                  <span>East Coast at Madras Square , 2/520, Sundeep Ave,<br />Sakthimoorthiamman Nagar, Neelankarai, Chennai,<br />Tamil Nadu 600115</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-gold/70 shrink-0" />
                  <div className="flex flex-col text-left">
                    <a href="tel:+917299440000" className="hover:text-gold transition-colors duration-300">+91 72994 40000</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center">
              <h3 className="font-heading text-sm font-semibold tracking-[0.25em] text-gold mb-5 uppercase">
                Hours
              </h3>
              <ul className="space-y-3 font-body text-sm text-white/50 flex flex-col items-center">
                <li className="flex items-start gap-3 text-left">
                  <Clock size={16} className="text-gold/70 shrink-0 mt-0.5" />
                  <div>
                    <p>Monday – Friday: 11 am – 10.30 pm</p>
                    <p className="mt-1">Saturday: 11 am – 3.45 pm | 6:30 pm – 10:30 pm</p>
                    <p className="mt-1">Sunday: 11 am – 3.45 pm | 6:30 pm – 10:30 pm</p>
                  </div>
                </li>
              </ul>
              <p className="font-body text-[10px] text-white/25 leading-relaxed mt-4">
                Prices are inclusive of all applicable taxes
              </p>
            </div>

            {/* Social */}
            <div className="flex flex-col items-center md:items-end">
              <h3 className="font-heading text-sm font-semibold tracking-[0.25em] text-gold mb-5 uppercase">
                Connect
              </h3>
              <p className="text-white/40 font-body text-xs mb-5 max-w-xs text-center md:text-right leading-relaxed">
                Follow us for the latest specials, events, and coastal updates.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://www.instagram.com/madrassquare/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 font-body text-[11px] text-white/25 tracking-wider">
          <p>© {new Date().getFullYear()} East Coast · Madras Square</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold/70 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gold/70 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
