import BookButton from "./BookButton";
import Reveal from "./Reveal";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="bg-bone text-espresso">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
            The menu
          </p>
          <h2 className="font-display uppercase leading-none text-espresso mt-3 text-[clamp(2.25rem,6vw,4rem)]">
            Services &amp; pricing
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 60}>
              <div className="group h-full border border-espresso/15 hover:border-brass bg-bone hover:bg-bone-soft transition-colors p-7 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display uppercase text-2xl leading-tight text-espresso">
                    {s.name}
                  </h3>
                  {s.popular && (
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-brass border border-brass px-2 py-1">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-baseline gap-3 font-mono">
                  <span className="text-3xl text-espresso">{s.price}</span>
                  <span className="text-xs uppercase tracking-[0.15em] text-ash">
                    {s.duration}
                  </span>
                </div>

                <div className="mt-auto pt-7">
                  <BookButton variant="outlineDark" className="w-full text-sm">
                    Book
                  </BookButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 font-body text-sm text-ash max-w-xl">
            Prices reflect current Booksy rates. Longer or custom work may vary —
            just ask when you book.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
