import painPointsImg from "@/assets/pain-points.jpg";
import { Clock, MessageCircleX, CalendarX, CreditCard } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Delayed Table Service",
    desc: "Peak hours expose cracks in manual workflows — guests wait, satisfaction drops, and tables stay occupied longer than necessary.",
  },
  {
    icon: MessageCircleX,
    title: "Kitchen Miscommunication",
    desc: "Handwritten orders and verbal relays lead to errors, remakes, and frustrated chefs during high-pressure service.",
  },
  {
    icon: CalendarX,
    title: "Reservation Chaos",
    desc: "Double bookings, lost reservations, and walk-in conflicts tarnish the premium experience your guests expect.",
  },
  {
    icon: CreditCard,
    title: "Slow Billing Process",
    desc: "Splitting checks, applying discounts, and processing payments at the table becomes an awkward end to an elegant evening.",
  },
];

export default function PainPointsSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl luxury-shadow">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent z-10" />
            <img
              src={painPointsImg}
              alt="Fine dining service challenges"
              loading="lazy"
              width={1280}
              height={720}
              className="h-full w-full object-cover image-zoom"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
              The Challenge
            </p>
            <h2 className="font-luxury text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              When Excellence Meets <span className="gold-text">Operational Friction</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Even the finest restaurants struggle with systems that can't match their ambition.
            </p>

            <div className="mt-10 space-y-6">
              {painPoints.map((point, i) => (
                <div key={point.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <point.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{point.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
