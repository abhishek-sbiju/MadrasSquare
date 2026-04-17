import { CheckCircle2, Plus } from "lucide-react";

interface EnquirySuccessProps {
  onNewEnquiry: () => void;
}

const EnquirySuccess = ({ onNewEnquiry }: EnquirySuccessProps) => {
  return (
    <div className="flex flex-col items-center text-center px-2 py-4 md:py-2">
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-5 bg-green-500/15 text-green-600">
        <CheckCircle2 size={32} strokeWidth={2.2} />
      </div>

      <h3 className="font-heading text-xl md:text-2xl font-bold tracking-[0.08em] uppercase text-foreground mb-2">
        Enquiry Sent
      </h3>
      <p className="font-body text-[14px] md:text-[15px] text-muted-foreground leading-relaxed max-w-sm">
        Thank you — we've received your banquet selection and our team will
        reach out within 24 hours with pricing and availability.
      </p>

      <p className="mt-4 font-body text-[12px] md:text-[13px] text-muted-foreground/80 leading-relaxed max-w-sm">
        Need to talk to us sooner? Call{" "}
        <a
          href="tel:+917299440000"
          className="text-gold font-semibold underline underline-offset-2"
        >
          +91 72994 40000
        </a>
        .
      </p>

      <button
        type="button"
        onClick={onNewEnquiry}
        className="mt-6 w-full inline-flex items-center justify-center gap-2 border border-border hover:border-gold text-foreground hover:text-gold font-body font-medium tracking-[0.08em] uppercase text-[12px] md:text-[13px] py-3 rounded-md transition-colors"
      >
        <Plus size={15} />
        Start a new enquiry
      </button>
    </div>
  );
};

export default EnquirySuccess;
