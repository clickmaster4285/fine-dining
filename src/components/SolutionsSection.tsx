import painPointsImg from "@/assets/pain-points.jpg";
import solutionAfterImg from "@/assets/solution-after.jpg";

const beforeItems = [
  "Manual order taking with paper pads",
  "Verbal communication to kitchen",
  "Disconnected reservation systems",
  "Slow end-of-night reconciliation",
];

const afterItems = [
  "Smart table-side digital ordering",
  "Real-time kitchen coordination",
  "Integrated reservation & CRM",
  "Instant automated billing",
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            The Transformation
          </p>
          <h2 className="font-luxury text-3xl font-bold md:text-5xl">
            From Traditional to <span className="gold-text">Extraordinary</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-card overflow-hidden rounded-2xl">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-background/60 z-10" />
              <img src={painPointsImg} alt="Before LuxePOS" loading="lazy" width={1280} height={720} className="h-full w-full object-cover" />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <span className="font-luxury rounded-full border border-destructive/50 bg-destructive/20 px-6 py-2 text-lg font-semibold text-destructive-foreground">Before</span>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-3">
                {beforeItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-card overflow-hidden rounded-2xl gold-glow">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-background/40 z-10" />
              <img src={solutionAfterImg} alt="After LuxePOS" loading="lazy" width={1280} height={720} className="h-full w-full object-cover" />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <span className="font-luxury rounded-full border border-gold/50 bg-gold/20 px-6 py-2 text-lg font-semibold text-gold">After</span>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-3">
                {afterItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
