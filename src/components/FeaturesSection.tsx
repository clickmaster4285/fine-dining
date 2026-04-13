import featureKitchen from "@/assets/feature-kitchen.jpg";
import featureReservation from "@/assets/feature-reservation.jpg";
import featureTables from "@/assets/feature-tables.jpg";
import solutionAfter from "@/assets/solution-after.jpg";
import { LayoutGrid, CalendarCheck, Monitor, ChefHat, Users, Receipt, Building2 } from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "Table Management",
    desc: "Visual floor plan with real-time table status, automatic assignments, and intelligent rotation.",
    image: featureTables,
  },
  {
    icon: CalendarCheck,
    title: "Reservation Engine",
    desc: "Seamless booking with guest history, preferences, and automatic confirmation workflows.",
    image: featureReservation,
  },
  {
    icon: Monitor,
    title: "Fine Dining POS",
    desc: "Elegant tableside interface designed for discretion, speed, and the refined service your guests expect.",
    image: solutionAfter,
  },
  {
    icon: ChefHat,
    title: "Kitchen Display System",
    desc: "Real-time order routing with course timing, priority management, and chef acknowledgment.",
    image: featureKitchen,
  },
  {
    icon: Users,
    title: "Guest CRM",
    desc: "Rich guest profiles with dining preferences, allergies, visit history, and VIP recognition.",
    image: featureReservation,
  },
  {
    icon: Receipt,
    title: "Billing & Tipping",
    desc: "Split checks, gratuity suggestions, and contactless payments — all handled with elegance.",
    image: solutionAfter,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Premium Features
          </p>
          <h2 className="font-luxury text-3xl font-bold md:text-5xl">
            A System Worthy of Your <span className="gold-text">Establishment</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Every feature crafted to match the precision and elegance of fine dining hospitality.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group glass-card overflow-hidden rounded-2xl transition-all duration-700 hover:gold-glow"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <img
                  src={f.image}
                  alt={f.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/20 text-gold backdrop-blur-sm">
                  <f.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-luxury text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
