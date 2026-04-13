import { UserCheck, TabletSmartphone, ChefHat, CreditCard, Star } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "Guest Arrival & Check-In",
    desc: "Reservation verified instantly. Guest preferences loaded. VIP status acknowledged — the experience begins before they sit.",
  },
  {
    icon: TabletSmartphone,
    title: "Digital Table Assignment",
    desc: "Host assigns the perfect table from an interactive floor plan, considering party size, preferences, and server sections.",
  },
  {
    icon: TabletSmartphone,
    title: "Tableside Ordering",
    desc: "Waiter takes orders discreetly via tablet — modifications, allergies, and wine pairings all handled seamlessly.",
  },
  {
    icon: ChefHat,
    title: "Kitchen Coordination",
    desc: "Orders flow to kitchen displays in real-time with course pacing, fire timing, and chef acknowledgment built in.",
  },
  {
    icon: CreditCard,
    title: "Seamless Checkout",
    desc: "Bill presented elegantly on tablet. Split checks, tips, and receipts — all handled without friction.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            The Journey
          </p>
          <h2 className="font-luxury text-3xl font-bold md:text-5xl">
            An Elegant <span className="gold-text">Service Flow</span>
          </h2>
        </div>

        <div className="relative">
         

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={step.title} className="relative flex items-start gap-6 md:gap-12">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-card text-gold md:mx-auto">
                  <step.icon className="h-5 w-5" />
                  <div className="absolute -inset-1 rounded-full bg-gold/10 animate-glow-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
                </div>
                <div className="flex-1 pb-2">
                  <span className="mb-1 text-xs font-medium uppercase tracking-widest text-gold/60">
                    Step {i + 1}
                  </span>
                  <h3 className="font-luxury text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
