import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useSelection } from "./SelectionProvider";
import EnquirySuccess from "./EnquirySuccess";
import {
  submitEnquiry,
  type EnquiryCustomer,
  type EnquiryPayload,
} from "@/lib/submitEnquiry";

interface EnquiryFormProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

const TIME_SLOTS = ["Lunch", "Dinner"] as const;

const PHONE_RE = /^\+?\d[\d\s-]{7,14}\d$/;

const todayIso = () => {
  const t = new Date();
  t.setDate(t.getDate() + 1); // min = tomorrow
  return t.toISOString().slice(0, 10);
};

const EnquiryForm = ({ open, onOpenChange }: EnquiryFormProps) => {
  const { selections, foodCount, bottleSubtotal, clear } = useSelection();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [time, setTime] = useState<(typeof TIME_SLOTS)[number]>(TIME_SLOTS[0]);
  const [pax, setPax] = useState<string>("");
  const [notes, setNotes] = useState("");

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const minDate = useMemo(() => todayIso(), []);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Please enter your name";
    if (!phone.trim()) e.phone = "Phone is required";
    else if (!PHONE_RE.test(phone.trim()))
      e.phone = "Enter a valid phone number";
    if (!eventDate) e.eventDate = "Pick an event date";
    if (pax.trim()) {
      const paxNum = Number(pax);
      if (!Number.isFinite(paxNum) || paxNum < 1)
        e.pax = "Enter a valid guest count";
    }
    return e;
  }, [name, phone, eventDate, pax]);

  const isValid = Object.keys(errors).length === 0 && selections.length > 0;

  const resetAll = () => {
    setName("");
    setPhone("");
    setEventDate("");
    setTime(TIME_SLOTS[0]);
    setPax("");
    setNotes("");
    setTouched({});
    setSubmitting(false);
    setSubmitted(false);
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      phone: true,
      eventDate: true,
      pax: true,
    });
    if (!isValid || submitting) return;

    const customer: EnquiryCustomer = {
      name: name.trim(),
      phone: phone.trim(),
      eventDate,
      time,
      pax: pax.trim() ? Number(pax) : undefined,
      notes: notes.trim() || undefined,
    };

    const payload: EnquiryPayload = {
      customer,
      selections,
      foodCount,
      bottleSubtotal,
      submittedAt: new Date().toISOString(),
      source: "banquet-menu-site",
    };

    setSubmitError(null);
    setSubmitting(true);
    const res = await submitEnquiry(payload);
    setSubmitting(false);

    if (res.ok) {
      setSubmitted(true);
    } else {
      setSubmitError(
        res.error ??
          "We couldn't send your enquiry. Please try again or call us.",
      );
    }
  };

  const showError = (field: string) =>
    touched[field] && errors[field] ? (
      <p className="mt-1 text-[11px] text-destructive font-body">
        {errors[field]}
      </p>
    ) : null;

  const fieldClass = (field: string) =>
    `w-full rounded-md border bg-background px-3 py-2.5 text-[14px] md:text-[15px] font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 transition-colors ${
      touched[field] && errors[field]
        ? "border-destructive"
        : "border-border focus:border-gold"
    }`;

  const handleDialogChange = (v: boolean) => {
    onOpenChange(v);
    if (!v && submitted) {
      // success was shown; clear cart + reset form when dialog closes
      clear();
      resetAll();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogChange}>
      <DialogContent className="max-w-lg max-h-[92vh] overflow-y-auto p-0">
        <div className="p-5 md:p-6">
          {submitted ? (
            <EnquirySuccess
              onNewEnquiry={() => {
                clear();
                resetAll();
                onOpenChange(false);
              }}
            />
          ) : (
            <>
              <DialogHeader className="mb-4">
                <DialogTitle className="font-heading text-xl md:text-2xl font-bold tracking-[0.08em] uppercase text-foreground">
                  Send Banquet Enquiry
                </DialogTitle>
                <DialogDescription className="font-body text-[13px] md:text-[14px] text-muted-foreground">
                  {selections.length} item{selections.length === 1 ? "" : "s"}{" "}
                  selected
                  {bottleSubtotal > 0
                    ? ` · Bottles: ₹${bottleSubtotal.toLocaleString("en-IN")}`
                    : ""}
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[12px] font-body uppercase tracking-[0.12em] text-muted-foreground mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                    className={fieldClass("name")}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                  {showError("name")}
                </div>

                <div>
                  <label className="block text-[12px] font-body uppercase tracking-[0.12em] text-muted-foreground mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                    className={fieldClass("phone")}
                    placeholder="+91 98400 00000"
                    autoComplete="tel"
                  />
                  {showError("phone")}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-body uppercase tracking-[0.12em] text-muted-foreground mb-1.5">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      min={minDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      onBlur={() =>
                        setTouched((t) => ({ ...t, eventDate: true }))
                      }
                      className={fieldClass("eventDate")}
                    />
                    {showError("eventDate")}
                  </div>
                  <div>
                    <label className="block text-[12px] font-body uppercase tracking-[0.12em] text-muted-foreground mb-1.5">
                      Time
                    </label>
                    <select
                      value={time}
                      onChange={(e) =>
                        setTime(e.target.value as (typeof TIME_SLOTS)[number])
                      }
                      className={fieldClass("time")}
                    >
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-body uppercase tracking-[0.12em] text-muted-foreground mb-1.5">
                    Number of Guests (Pax)
                  </label>
                  <input
                    type="number"
                    inputMode="numeric"
                    min={1}
                    value={pax}
                    onChange={(e) => setPax(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, pax: true }))}
                    className={fieldClass("pax")}
                    placeholder="50 (optional)"
                  />
                  {showError("pax")}
                </div>

                <div>
                  <label className="block text-[12px] font-body uppercase tracking-[0.12em] text-muted-foreground mb-1.5">
                    Notes
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    className={`${fieldClass("notes")} resize-none`}
                    placeholder="Dietary requirements, venue, preferred time, etc."
                  />
                </div>

                {selections.length === 0 && (
                  <p className="text-[12px] text-destructive font-body">
                    Please select at least one dish before submitting.
                  </p>
                )}

                {submitError && (
                  <div className="rounded-md border border-destructive/40 bg-destructive/5 px-3 py-2.5 text-[12px] md:text-[13px] font-body text-destructive">
                    {submitError} Please try again, or call us at{" "}
                    <a href="tel:+917299440000" className="underline font-semibold">
                      +91 72994 40000
                    </a>
                    .
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!isValid || submitting}
                  className="w-full bg-gold hover:bg-gold/90 text-primary-foreground font-body font-semibold tracking-[0.12em] uppercase text-[13px] md:text-sm py-3.5 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Submit Enquiry"}
                </button>

                <p className="text-[11px] text-muted-foreground/70 font-body text-center leading-relaxed">
                  Our team will reach out within 24 hours with pricing and
                  availability.
                </p>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryForm;
