import Reveal from "./Reveal";
import FadeBars from "./FadeBars";
import { INSTAGRAM_URL, business } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="bg-espresso text-chalk">
      <div className="mx-auto max-w-3xl px-5 py-24 sm:py-28 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
            The barber
          </p>
          <h2 className="font-display uppercase leading-[0.9] mt-3 text-[clamp(2.25rem,7vw,4.5rem)]">
            Every line, on purpose
          </h2>

          <div className="mt-8 space-y-5 font-body text-chalk/75 text-lg">
            <p>
              Giancarlo cuts out of Mike&rsquo;s Custom Kuts in Smithtown, where
              a chair with him means one thing: the details get handled. Fades
              that actually blend, beard lines you could measure with a ruler,
              and the patience to get a first-time kid out of the chair grinning.
            </p>
            <p>
              Younger clients, guys who want a clean weekly line-up, dads
              bringing their sons — the through-line is craft and consistency.
              Book once and you&rsquo;ll see why the chair stays full.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-5">
            <FadeBars bars={13} />
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ash">
              <span>✝ Powered by Christ</span>
              <span className="text-chalk/20">|</span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brass transition-colors"
              >
                {business.handle}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
