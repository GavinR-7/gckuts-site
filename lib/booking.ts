// A tiny global signal so any "Book" button — even ones rendered inside server
// components — can open the single BookingModal without passing props down
// through every layer. The button fires this event; the modal listens for it.
export const BOOKING_EVENT = "gckuts:open-booking";

export function openBooking() {
  // Guard for the server: window only exists in the browser.
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(BOOKING_EVENT));
  }
}
