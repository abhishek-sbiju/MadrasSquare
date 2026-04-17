import type { SelectedItem } from "@/components/SelectionProvider";

/**
 * Banquet enquiry submission via FormSubmit.co (free, no backend of ours).
 * Submissions POST to FormSubmit's AJAX endpoint which emails the summary
 * to BOOKINGS_EMAIL. To change the recipient, edit BOOKINGS_EMAIL below and
 * activate the new address once (see ENQUIRY_SETUP.md).
 */

// ---------------------------------------------------------------------------
// Recipient – EDIT THIS to the real bookings inbox.
// ---------------------------------------------------------------------------
export const BOOKINGS_EMAIL = "info@madrassquare.com";

// AJAX endpoint so we can stay on our own page and render our own success
// screen. Without /ajax/ FormSubmit redirects to its thank-you page.
const ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(
  BOOKINGS_EMAIL,
)}`;

export interface EnquiryCustomer {
  name: string;
  phone: string;
  eventDate: string; // ISO yyyy-mm-dd
  time: string; // "Lunch" | "Dinner"
  pax?: number;
  notes?: string;
}

export interface EnquiryPayload {
  customer: EnquiryCustomer;
  selections: SelectedItem[];
  foodCount: number;
  bottleSubtotal: number;
  submittedAt: string; // ISO
  source: string;
}

export interface SubmitResult {
  ok: boolean;
  error?: string;
}

export function buildTextSummary(payload: EnquiryPayload): string {
  const { customer, selections, foodCount, bottleSubtotal } = payload;

  const groups: Record<string, SelectedItem[]> = {};
  for (const s of selections) {
    if (!groups[s.category]) groups[s.category] = [];
    groups[s.category].push(s);
  }

  const lines: string[] = [];
  lines.push("Banquet Enquiry – Madras Square (East Coast & The Beach)");
  lines.push("");
  lines.push(`Name: ${customer.name}`);
  lines.push(`Phone: ${customer.phone}`);
  lines.push(`Event Date: ${customer.eventDate}`);
  lines.push(`Time: ${customer.time}`);
  if (customer.pax) lines.push(`Guests (Pax): ${customer.pax}`);
  if (customer.notes) lines.push(`Notes: ${customer.notes}`);
  lines.push("");
  lines.push(`Dishes selected: ${foodCount}`);
  if (bottleSubtotal > 0) {
    lines.push(`Bottles subtotal: ₹${bottleSubtotal.toLocaleString("en-IN")}`);
  }
  lines.push("");
  lines.push("--- Selection ---");

  Object.entries(groups).forEach(([cat, items]) => {
    lines.push("");
    lines.push(`• ${cat}`);
    items.forEach((it) => {
      if (it.unitPrice && it.unitPrice > 0) {
        lines.push(
          `   - ${it.name} × ${it.qty}${
            it.subCategory ? ` (${it.subCategory})` : ""
          } — ₹${(it.unitPrice * it.qty).toLocaleString("en-IN")}`,
        );
      } else {
        lines.push(
          `   - ${it.name}${
            it.subCategory ? ` (${it.subCategory})` : ""
          }`,
        );
      }
    });
  });

  return lines.join("\n");
}

/**
 * POSTs the enquiry to FormSubmit. Returns { ok: true } on success, or
 * { ok: false, error } with a short message we can show in the UI. Does
 * NOT throw — callers can branch safely on the returned flag.
 */
export async function submitEnquiry(
  payload: EnquiryPayload,
): Promise<SubmitResult> {
  const { customer } = payload;
  const selection = buildTextSummary(payload);

  // Fields with underscore prefix are FormSubmit meta settings; everything
  // else becomes a labeled row in the email FormSubmit sends us.
  const body = {
    _subject: `Banquet Enquiry – ${customer.name || "Guest"} – ${
      customer.eventDate || "TBD"
    }`,
    _template: "table" as const,
    _captcha: "false" as const,
    Name: customer.name,
    Phone: customer.phone,
    "Event Date": customer.eventDate,
    Time: customer.time,
    "Guests (Pax)": customer.pax ? String(customer.pax) : "—",
    Notes: customer.notes ?? "—",
    "Dishes Selected": String(payload.foodCount),
    "Bottles Subtotal (INR)": String(payload.bottleSubtotal),
    Selection: selection,
    "Submitted At": payload.submittedAt,
    Source: payload.source,
  };

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return { ok: false, error: `Server responded ${res.status}` };
    }
    const data = (await res.json().catch(() => ({}))) as {
      success?: string | boolean;
      message?: string;
    };
    const success = data.success === true || data.success === "true";
    if (!success) {
      return { ok: false, error: data.message ?? "Submission failed" };
    }
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Network error",
    };
  }
}
