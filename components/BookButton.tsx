"use client";

import { BOOKSY_URL } from "@/lib/content";
import { openBooking } from "@/lib/booking";

type Variant = "solid" | "outline" | "outlineDark" | "ghost";

type Props = {
  children?: React.ReactNode;
  variant?: Variant;
  className?: string;
};

// One button, one action: open the on-site booking modal. It renders as a real
// link to Booksy so it still works if JavaScript fails; with JS we intercept the
// click and open the modal instead. Variants are self-contained so callers never
// fight Tailwind specificity — pick a variant, don't override its colors.
const base =
  "inline-flex items-center justify-center gap-2 font-body font-semibold tracking-wide transition-all duration-200 select-none cursor-pointer";

const variants: Record<Variant, string> = {
  solid:
    "bg-brass text-espresso px-7 py-3.5 hover:bg-brass-bright hover:-translate-y-0.5 hover:shadow-lg",
  outline:
    "border border-brass text-brass px-7 py-3.5 hover:bg-brass hover:text-espresso",
  outlineDark:
    "border border-espresso text-espresso px-7 py-3.5 hover:bg-espresso hover:text-bone",
  ghost:
    "text-brass underline underline-offset-4 decoration-1 hover:text-brass-bright",
};

export default function BookButton({
  children = "Book now",
  variant = "solid",
  className = "",
}: Props) {
  return (
    <a
      href={BOOKSY_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        openBooking();
      }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
