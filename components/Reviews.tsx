import Reveal from "./Reveal";
import { testimonials, business, BOOKSY_URL } from "@/lib/content";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-espresso text-chalk">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
                Word of mouth
              </p>
              <h2 className="font-display uppercase leading-none mt-3 text-[clamp(2.25rem,6vw,4rem)]">
                What clients say
              </h2>
            </div>
            <div className="text-right">
              <div className="font-display text-5xl text-brass leading-none">
                {business.rating.toFixed(1)}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-chalk/60 mt-2">
                ★★★★★ · {business.reviewCount}+ reviews · Booksy
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={(i % 3) * 70}>
              <figure className="h-full border border-brass/20 bg-espresso-soft p-7 flex flex-col">
                <div className="text-brass tracking-widest" aria-hidden>
                  ★★★★★
                </div>
                <blockquote className="mt-4 font-body text-chalk/85 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-ash">
                  {t.name} · {t.service}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10">
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-[0.18em] text-chalk/70 hover:text-brass border-b border-chalk/20 hover:border-brass pb-1 transition-colors"
            >
              Read all reviews →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
