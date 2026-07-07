import Image from "next/image";
import BookButton from "./BookButton";
import { business, INSTAGRAM_URL } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden min-h-[88vh] flex items-center"
    >
      {/* Signature backdrop: a soft brass "fade" glow + fine razor lines. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-1/3 -right-1/4 h-[80vh] w-[80vh] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle at center, var(--color-brass) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--color-chalk) 0 1px, transparent 1px 3px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pt-28 pb-20 grid lg:grid-cols-12 gap-10 items-center w-full">
        <div className="lg:col-span-7">
          <p
            className="rise font-mono text-xs uppercase tracking-[0.3em] text-brass"
            style={{ animationDelay: "0.05s" }}
          >
            Smithtown, NY · By appointment
          </p>

          <h1
            className="rise font-display uppercase leading-[0.86] text-chalk mt-5 text-[clamp(3rem,11vw,7.5rem)]"
            style={{ animationDelay: "0.15s" }}
          >
            Giancarlo
            <br />
            <span className="text-brass">Colombo</span>
          </h1>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rise inline-block mt-4 font-mono text-xs uppercase tracking-[0.25em] text-chalk/60 hover:text-brass transition-colors"
            style={{ animationDelay: "0.22s" }}
          >
            {business.handle}
          </a>

          <p
            className="rise font-body text-lg sm:text-xl text-chalk/75 mt-5 max-w-xl"
            style={{ animationDelay: "0.3s" }}
          >
            Precision skin fades, sharp beard work, and patient kids&rsquo; cuts
            — one chair, every detail dialed in.
          </p>

          <div
            className="rise mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <BookButton className="text-base">Book your cut</BookButton>
            <a
              href="#work"
              className="font-mono text-xs uppercase tracking-[0.2em] text-chalk/70 hover:text-brass transition-colors border-b border-chalk/20 hover:border-brass pb-1"
            >
              See recent work
            </a>
          </div>

          <div
            className="rise mt-10 flex items-center gap-4"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="text-brass text-lg tracking-widest" aria-hidden>
              ★★★★★
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-chalk/60">
              {business.rating.toFixed(1)} · {business.reviewCount}+ reviews on
              Booksy
            </span>
          </div>
        </div>

        {/* Hero portrait — framed like a barber mirror. */}
        <div className="lg:col-span-5">
          <div
            className="rise relative aspect-[4/5] border border-brass/30 bg-espresso-soft overflow-hidden"
            style={{ animationDelay: "0.35s" }}
          >
            <Image
              src="/portrait.jpg"
              alt="Giancarlo Colombo, barber at Mike's Custom Kuts in Smithtown, NY"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
            <span
              className="absolute -bottom-3 -left-3 h-16 w-16 border-l-2 border-b-2 border-brass"
              aria-hidden
            />
            <span
              className="absolute -top-3 -right-3 h-16 w-16 border-r-2 border-t-2 border-brass"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
