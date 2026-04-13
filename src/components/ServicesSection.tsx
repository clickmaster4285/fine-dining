import featureTables from "@/assets/feature-tables.jpg";
import featureReservation from "@/assets/feature-reservation.jpg";
import { Laptop, Hotel, CalendarCheck, Users, BarChart3, Smartphone } from "lucide-react";

const services = [
  { icon: Laptop, title: "Custom POS Systems", desc: "Tailored point-of-sale solutions designed around your unique service workflow." },
  { icon: Hotel, title: "Hotel Integration", desc: "Seamless multi-outlet management connecting all F&B operations under one system." },
  { icon: CalendarCheck, title: "Reservation Systems", desc: "Intelligent booking engines with guest preferences and automated confirmations." },
  { icon: Users, title: "Guest CRM Systems", desc: "Rich guest profiles that power personalized experiences across every visit." },
  { icon: BarChart3, title: "Analytics Dashboards", desc: "Real-time insights into revenue, performance, and guest behavior patterns." },
  { icon: Smartphone, title: "Mobile Waiter Apps", desc: "Elegant tableside ordering and management from any device." },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Our Services
          </p>
          <h2 className="font-luxury text-3xl font-bold md:text-5xl">
            The Complete <span className="gold-text">Hospitality Ecosystem</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group glass-card rounded-2xl p-8 transition-all duration-700 hover:border-gold/30 hover:gold-glow">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-500 group-hover:scale-110">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-luxury text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
