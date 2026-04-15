import { FileText, Phone } from "lucide-react";
import { restaurantInfo } from "@/data/restaurantInfo";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border bg-card px-6 pb-8 pt-16 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-body text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
            {restaurantInfo.parentBrand}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-[0.16em] text-foreground">
            {restaurantInfo.venue}
          </h2>
          <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-muted-foreground">
            A cleaned digital version of the printed food menu, updated from soups and salads through desserts.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold uppercase tracking-[0.12em] text-gold">
            Reservations
          </h3>
          <a
            href={restaurantInfo.phoneHref}
            className="mt-4 inline-flex items-center gap-2 font-body text-base font-medium text-foreground transition hover:text-gold"
          >
            <Phone className="h-4 w-4 text-gold" />
            {restaurantInfo.phoneDisplay}
          </a>
          <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
            {restaurantInfo.reservationBlurb}
          </p>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold uppercase tracking-[0.12em] text-gold">
            Billing Notes
          </h3>
          <div className="mt-4 space-y-3 font-body text-sm leading-relaxed text-muted-foreground">
            <p className="flex items-start gap-2">
              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{restaurantInfo.serviceChargeNote}</span>
            </p>
            <p>{restaurantInfo.gstNote}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border pt-6 font-body text-[11px] tracking-wide text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {restaurantInfo.venue} by {restaurantInfo.parentBrand}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
