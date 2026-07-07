"use client";

import { useEffect, useState } from "react";
import BookButton from "./BookButton";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Location" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Transparent over the hero; solid once you scroll. This needs client state,
  // which is why Nav is a client component.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-espresso/95 backdrop-blur border-b border-brass/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid place-items-center h-10 w-10 border border-brass text-brass font-display text-xl leading-none pt-1">
            GC
          </span>
          <span className="hidden sm:block font-mono text-xs tracking-[0.25em] text-chalk/80 uppercase">
            Giancarlo Colombo
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-[0.18em] text-chalk/70 hover:text-brass transition-colors"
            >
              {l.label}
            </a>
          ))}
          <BookButton className="text-sm px-5 py-2.5">Book now</BookButton>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden grid place-items-center h-10 w-10 text-chalk"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-brass/15 bg-espresso/95 backdrop-blur">
          <div className="px-5 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-[0.18em] text-chalk/80 hover:text-brass"
              >
                {l.label}
              </a>
            ))}
            <BookButton className="w-full">Book now</BookButton>
          </div>
        </div>
      )}
    </header>
  );
}
