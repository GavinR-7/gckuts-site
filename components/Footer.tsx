import FadeBars from "./FadeBars";
import { business, INSTAGRAM_URL, BOOKSY_URL } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-espresso text-chalk border-t border-brass/15">
      {/* Extra bottom padding on mobile so the sticky Book bar never covers this. */}
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-28 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-11 w-11 border border-brass text-brass font-display text-xl leading-none pt-1">
                GC
              </span>
              <div>
                <p className="font-display uppercase text-xl leading-none">
                  Giancarlo Colombo
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ash mt-1">
                  Barber at {business.shopName}
                </p>
              </div>
            </div>
            <p className="mt-6 font-body text-chalk/60 max-w-sm text-sm">
              {business.address}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-[0.18em] text-chalk/70 hover:text-brass transition-colors"
            >
              Book on Booksy →
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-[0.18em] text-chalk/70 hover:text-brass transition-colors"
            >
              Instagram @gckuts →
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-chalk/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <FadeBars bars={12} />
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ash">
            © {new Date().getFullYear()} Giancarlo Colombo · Smithtown, NY
          </p>
        </div>
      </div>
    </footer>
  );
}
