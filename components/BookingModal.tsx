"use client";

import { useEffect, useRef, useState } from "react";
import { BOOKSY_URL, BOOKSY_WIDGET_URL, services, business } from "@/lib/content";
import { BOOKING_EVENT } from "@/lib/booking";

// The single booking modal for the whole site. Rendered once (in page.tsx); it
// listens for the global open-booking event that any Book button fires.
//
// Two modes, controlled by BOOKSY_WIDGET_URL in lib/content.ts:
//   - empty  -> a clean branded panel (service list + "Continue to Booksy")
//   - set    -> loads the live Booksy booking flow in an iframe, on-page
export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Open when any Book button fires the event.
  useEffect(() => {
    const openIt = () => setOpen(true);
    window.addEventListener(BOOKING_EVENT, openIt);
    return () => window.removeEventListener(BOOKING_EVENT, openIt);
  }, []);

  // While open: close on Escape, lock background scroll, move focus into the dialog.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open) return null;

  const hasWidget = BOOKSY_WIDGET_URL.trim().length > 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <button
        onClick={() => setOpen(false)}
        aria-label="Close booking"
        className="absolute inset-0 bg-espresso/85 backdrop-blur-sm cursor-default"
      />

      {/* Dialog */}
      <div
        className={`relative w-full ${
          hasWidget ? "max-w-2xl" : "max-w-md"
        } bg-bone text-espresso shadow-2xl`}
      >
        <div className="flex items-start justify-between gap-4 border-b border-espresso/10 px-6 py-5">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-brass">
              Book an appointment
            </p>
            <h2
              id="booking-title"
              className="font-display uppercase text-2xl leading-none mt-1"
            >
              with {business.barberName}
            </h2>
          </div>
          <button
            ref={closeRef}
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="grid place-items-center h-9 w-9 border border-espresso/20 hover:border-brass hover:text-brass transition-colors text-2xl leading-none pb-1"
          >
            &times;
          </button>
        </div>

        {hasWidget ? (
          <div className="p-4">
            <iframe
              title="Book with Giancarlo Colombo on Booksy"
              src={BOOKSY_WIDGET_URL}
              className="w-full h-[70vh] border-0"
              loading="lazy"
            />
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-ash hover:text-brass transition-colors"
            >
              Trouble loading? Open Booksy directly →
            </a>
          </div>
        ) : (
          <div className="px-6 py-6">
            <ul className="divide-y divide-espresso/10">
              {services.map((s) => (
                <li
                  key={s.name}
                  className="flex items-center justify-between py-2.5"
                >
                  <span className="font-body text-sm">{s.name}</span>
                  <span className="font-mono text-sm text-ash">
                    {s.price} · {s.duration}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center w-full bg-brass text-espresso font-body font-semibold py-3.5 tracking-wide hover:bg-brass-bright transition-colors"
            >
              Continue to Booksy →
            </a>
            <p className="mt-4 font-body text-xs text-ash leading-relaxed">
              Booking is handled securely through Booksy, where{" "}
              {business.barberName}&rsquo;s schedule, reminders, and{" "}
              {business.reviewCount}+ reviews all live.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
