import Image from "next/image";
import Reveal from "./Reveal";
import { INSTAGRAM_URL, business } from "@/lib/content";

// Real cut photos live in /public. Add more here as Giancarlo sends them — the
// grid will lay them out automatically.
const cuts = [
  {
    src: "/cut-01.jpg",
    alt: "Textured curly crop with a clean low drop fade, cut by Giancarlo Colombo",
  },
  {
    src: "/cut-02.jpg",
    alt: "Textured top with a tapered low fade, cut by Giancarlo Colombo",
  },
  {
    src: "/cut-03.jpg",
    alt: "Curly fringe with a mid drop fade, cut by Giancarlo Colombo",
  },
];

export default function Gallery() {
  return (
    <section id="work" className="bg-bone text-espresso">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
                The work
              </p>
              <h2 className="font-display uppercase leading-none mt-3 text-[clamp(2.25rem,6vw,4rem)]">
                Recent cuts
              </h2>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-[0.18em] text-espresso/70 hover:text-brass border-b border-espresso/20 hover:border-brass pb-1 transition-colors"
            >
              More on {business.handle} →
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {cuts.map((c, i) => (
            <Reveal key={c.src} delay={i * 70}>
              <div className="group relative aspect-square overflow-hidden border border-espresso/10">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
