# Banquet Enquiry Setup

The banquet enquiry form submits directly through [FormSubmit.co](https://formsubmit.co/) — free, no server of ours. The guest hits Submit, stays on our page, sees a confirmation, and the recipient inbox gets a tidy table email.

**Current recipient:** `abhishekbijuw2005@gmail.com` — already activated, submissions flow through automatically.

## What the guest sees

- A **Customize Your Banquet** CTA in the hero / sticky nav puts the menu into selection mode.
- They pick dishes (bottle rows get a qty stepper; food rows get a checkbox).
- From the floating cart they tap **Review & Enquire**, fill in name / phone / event date / time (Lunch or Dinner) / guest count (optional) / notes (optional), and hit **Submit Enquiry**.
- Button shows "Sending…" while in flight (usually <1s).
- Success → green **Enquiry Sent** screen with a phone fallback. Failure → inline red retry banner with click-to-call.

## What you receive

```
Subject: Banquet Enquiry – Aarav Menon – 2026-06-21

Name                  Aarav Menon
Phone                 +91 98400 11111
Event Date            2026-06-21
Time                  Dinner
Guests (Pax)          120
Notes                 Jain food only, 6pm onwards
Dishes Selected       14
Bottles Subtotal      18500
Selection             [full multi-line list of every dish grouped by category]
Submitted At          2026-04-18T12:35:20.000Z
Source                banquet-menu-site
```

## Changing the recipient later

1. Edit `BOOKINGS_EMAIL` in `src/lib/submitEnquiry.ts`.
2. Rebuild: `npm run build` → redeploy.
3. Submit one dummy enquiry from the live site — FormSubmit emails `noreply@formsubmit.co` activation link to the new address. Click "Confirm your email" once from that inbox and you're done.

## Notes / gotchas

- "Reply" in the email goes to FormSubmit, not the guest. Use the phone number in the body to call them back.
- If FormSubmit is ever down, the guest sees the "couldn't send — please call us" error banner with a click-to-call link. Nothing is silently lost.
- FormSubmit free tier handles reasonable volumes. If they ever rate-limit us, swapping to Google Apps Script (owned entirely by the client) is a ~1-hour task.
