import BookButton from "./BookButton";
import Reveal from "./Reveal";
import { business, hours } from "@/lib/content";

// Keyless Google Maps embed — the `output=embed` query renders a map with no
// API key required, so there are no secrets to manage.
const MAP_SRC =
  "https://maps.google.com/maps?q=165B%20Terry%20Rd%2C%20Smithtown%2C%20NY%2011787&z=15&output=embed";

export default function Location() {
  return (
    <section id="location" className="bg-bone text-espresso">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-28 grid lg:grid-cols-2 gap-12 items-stretch">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
            Find the chair
          </p>
          <h2 className="font-display uppercase leading-none mt-3 text-[clamp(2.25rem,6vw,4rem)]">
            Location &amp; hours
          </h2>

          <div className="mt-8 font-body">
            <p className="text-lg font-semibold">{business.shopName}</p>
            <p className="text-espresso/70">{business.address}</p>
          </div>

          {/* PLACEHOLDER: confirm real hours with the client (see lib/content.ts). */}
          <div className="mt-8 border-t border-espresso/15">
            {hours.map((h) => (
              <div
                key={h.day}
                className="flex items-center justify-between py-3 border-b border-espresso/10 font-mono text-sm"
              >
                <span className="uppercase tracking-[0.12em] text-espresso/80">
                  {h.day}
                </span>
                <span className="text-ash">{h.time}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <BookButton className="text-base">Book an appointment</BookButton>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative h-full min-h-[360px] border border-espresso/15">
            <iframe
              title="Map to Giancarlo Colombo at Mike's Custom Kuts, Smithtown NY"
              src={MAP_SRC}
              className="absolute inset-0 h-full w-full grayscale-[0.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
