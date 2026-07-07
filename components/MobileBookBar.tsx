import BookButton from "./BookButton";

// Persistent Book button pinned to the bottom on phones (hidden on md+).
// Reuses BookButton so it opens the same on-site modal as every other CTA.
export default function MobileBookBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-espresso/95 backdrop-blur border-t border-brass/20">
      <BookButton variant="solid" className="w-full text-base">
        Book now on Booksy
      </BookButton>
    </div>
  );
}
