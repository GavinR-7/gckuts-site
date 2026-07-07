// Signature motif: a row of bars stepping from faint+short to solid+tall —
// an abstraction of a skin fade / clipper-guard progression. This is the one
// bold, brand-specific element; everything else stays quiet.
export default function FadeBars({
  className = "",
  bars = 9,
}: {
  className?: string;
  bars?: number;
}) {
  return (
    <div aria-hidden className={`flex items-end gap-1 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => {
        const t = bars > 1 ? i / (bars - 1) : 1; // 0 → 1 across the row
        return (
          <span
            key={i}
            className="w-1 rounded-full bg-brass"
            style={{ height: `${8 + t * 34}px`, opacity: 0.25 + t * 0.75 }}
          />
        );
      })}
    </div>
  );
}
