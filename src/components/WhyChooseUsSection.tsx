import { Shield, Headphones, Settings, Hotel, Zap, Award } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Enterprise-Grade Security", desc: "Bank-level encryption and PCI compliance protect every transaction." },
  { icon: Headphones, title: "24/7 Premium Support", desc: "Dedicated hospitality specialists available around the clock." },
  { icon: Settings, title: "Customizable Workflows", desc: "Adapt every detail to match your restaurant's unique service style." },
  { icon: Hotel, title: "Hotel Integration", desc: "Seamless connectivity with hotel PMS and multi-outlet management." },
  { icon: Zap, title: "99.99% Uptime", desc: "Reliability that matches the consistency your guests expect." },
  { icon: Award, title: "Award-Winning Design", desc: "An interface as refined as the dining experience it powers." },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Why LuxePOS
          </p>
          <h2 className="font-luxury text-3xl font-bold md:text-5xl">
            Built for <span className="gold-text">Premium Hospitality</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="glass-card group rounded-2xl p-8 transition-all duration-700 hover:border-gold/30">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold/20">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="font-luxury text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "500+", label: "Premium Restaurants" },
            { value: "12M+", label: "Guests Served" },
            { value: "15+", label: "Years Experience" },
            { value: "99.99%", label: "System Uptime" },
          ].map((s) => (
            <div key={s.label} className="glass-panel rounded-xl py-6 text-center">
              <p className="font-luxury text-3xl font-bold text-gold">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
