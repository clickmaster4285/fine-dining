import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Alexandra Fontaine",
    role: "General Manager, Le Château Restaurant",
    quote: "LuxePOS transformed our service flow entirely. Table turnover improved by 30%, and our guests consistently praise the seamless dining experience.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Director of F&B, The Grandeur Hotel",
    quote: "Managing five restaurant outlets across our hotel used to be a nightmare. LuxePOS unified everything — from reservations to kitchen coordination.",
    rating: 5,
  },
  {
    name: "Isabella Moretti",
    role: "Owner, Osteria di Lusso",
    quote: "The guest CRM alone paid for itself. We now remember every regular's preferences, allergies, and favorite wines. That's true luxury service.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Testimonials
          </p>
          <h2 className="font-luxury text-3xl font-bold md:text-5xl">
            Trusted by the <span className="gold-text">Finest Establishments</span>
          </h2>
        </div>

        <div className="glass-card relative rounded-2xl p-8 md:p-12">
          <div className="absolute -top-4 left-8 font-luxury text-6xl text-gold/20">"</div>

          <div className="relative min-h-[200px]">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`transition-all duration-700 ${
                  i === current ? "opacity-100" : "absolute inset-0 opacity-0 pointer-events-none"
                }`}
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="font-luxury text-lg leading-relaxed md:text-xl">
                  {t.quote}
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold text-gold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === current ? "w-8 bg-gold" : "w-3 bg-foreground/20"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}