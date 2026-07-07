// ============================================================================
// Central content file — edit everything about the business in one place.
// Components read from here; you should almost never hardcode copy elsewhere.
// ============================================================================

export const BOOKSY_URL =
  "https://booksy.com/en-us/1182405_giancarlo-colombo-mikes-custom-kuts_barber-shop_30642_smithtown";

export const INSTAGRAM_URL = "https://www.instagram.com/gckuts/";

// ---- Booking widget -------------------------------------------------------
// Leave this EMPTY to show the branded booking panel (a clean service list +
// a "Continue to Booksy" button) inside the on-site modal.
//
// Once Giancarlo sends his Booksy *website widget* link, paste the embeddable
// URL here. The modal will then load the live Booksy booking flow in an iframe
// right on the page instead of the panel.
//   Where he gets it: Booksy Biz app -> Online Booking -> Website Integration
//   -> copy the widget code/link. (Confirm it allows embedding before shipping.)
export const BOOKSY_WIDGET_URL: string = "";

export const business = {
  barberName: "Giancarlo Colombo",
  brand: "GC Kuts",
  handle: "@gckuts",
  shopName: "Mike's Custom Kuts",
  address: "165B Terry Rd, Smithtown, NY 11787",
  areaServed: "Smithtown · Long Island · NYC",
  rating: 5.0,
  reviewCount: 144,
};

// ---- Services -------------------------------------------------------------
// Prices pulled from Giancarlo's live Booksy profile. `popular` just controls
// the small badge in the UI.
export type Service = {
  name: string;
  price: string;
  duration: string;
  popular?: boolean;
};

export const services: Service[] = [
  { name: "Haircut", price: "$35", duration: "30 min", popular: true },
  { name: "Skin Fade", price: "$40", duration: "45 min", popular: true },
  { name: "Kid's Haircut", price: "$30", duration: "30 min", popular: true },
  { name: "Haircut & Beard Trim", price: "$45", duration: "45 min" },
  { name: "Skin Fade & Beard Trim", price: "$50", duration: "45 min" },
];

// ---- Testimonials ---------------------------------------------------------
// NOTE: These are ORIGINAL blurbs written from the *themes* of Giancarlo's real
// 5.0-star Booksy reviews (patience with kids, clean fades, sharp beard/line-up
// work, consistency). They are not copied verbatim. Before launch, swap in real,
// client-approved quotes.
export type Testimonial = { quote: string; name: string; service: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Took his time and nailed exactly what my son wanted. First barber my kid actually looks forward to seeing.",
    name: "Jennifer",
    service: "Kid's Haircut",
  },
  {
    quote:
      "Skin fade and beard came out perfect — the line-up was razor sharp. Best in the area, hands down.",
    name: "Brandon",
    service: "Skin Fade & Beard Trim",
  },
  {
    quote:
      "Consistent every single visit. You can tell he actually cares about getting the details right.",
    name: "James",
    service: "Haircut",
  },
  {
    quote:
      "Patient, professional, and the cut was clean. Already booked my next one.",
    name: "Lisa",
    service: "Kid's Haircut",
  },
];

// ---- Hours ----------------------------------------------------------------
// PLACEHOLDER: confirm real hours with Giancarlo before launch.
export const hours = [
  { day: "Mon", time: "By appointment" },
  { day: "Tue", time: "By appointment" },
  { day: "Wed", time: "By appointment" },
  { day: "Thu", time: "By appointment" },
  { day: "Fri", time: "By appointment" },
  { day: "Sat", time: "By appointment" },
  { day: "Sun", time: "Closed" },
];

// ---- Structured data (SEO) ------------------------------------------------
// LocalBusiness schema so Google can show the rating / address in results.
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: `${business.barberName} — ${business.shopName}`,
  description:
    "Independent barber in Smithtown, NY specializing in skin fades, beard trims, line-ups, and kids' cuts.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "165B Terry Rd",
    addressLocality: "Smithtown",
    addressRegion: "NY",
    postalCode: "11787",
    addressCountry: "US",
  },
  areaServed: "Smithtown, NY",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
  },
  sameAs: [INSTAGRAM_URL, BOOKSY_URL],
};
