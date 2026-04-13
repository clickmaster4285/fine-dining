import { TrendingUp, Clock, Smile, DollarSign } from "lucide-react";

const metrics = [
  { icon: TrendingUp, label: "Table Turnover Rate", before: "1.8x", after: "2.4x", change: "+33%" },
  { icon: Clock, label: "Avg. Service Time", before: "95 min", after: "72 min", change: "-24%" },
  { icon: Smile, label: "Guest Satisfaction", before: "82%", after: "98%", change: "+16%" },
  { icon: DollarSign, label: "Avg. Bill Value", before: "$86", after: "$112", change: "+30%" },
];

export default function CaseStudySection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Case Study
          </p>
          <h2 className="font-luxury text-3xl font-bold md:text-5xl">
            The <span className="gold-text">Transformation</span> in Numbers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            How a Michelin-starred hotel restaurant group achieved remarkable improvements within 90 days.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="glass-card rounded-2xl p-6 text-center transition-all duration-500 hover:border-gold/30">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <m.icon className="h-5 w-5" />
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{m.label}</p>
              <div className="mt-3 flex items-center justify-center gap-3">
                <span className="text-sm text-muted-foreground line-through">{m.before}</span>
                <span className="text-lg font-bold text-foreground">{m.after}</span>
              </div>
              <span className="mt-2 inline-block rounded-full bg-gold/10 px-3 py-0.5 text-xs font-semibold text-gold">
                {m.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
