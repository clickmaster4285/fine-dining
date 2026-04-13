import { useState, useEffect } from "react";
import heroDining1 from "@/assets/hero-dining-1.jpg";
import heroDining2 from "@/assets/hero-dining-2.jpg";
import heroDining3 from "@/assets/hero-dining-3.jpg";

const slides = [heroDining1, heroDining2, heroDining3];

const stats = [
  { label: "Revenue Increase", value: "34%", prefix: "+" },
  { label: "Guest Satisfaction", value: "98%", prefix: "" },
  { label: "Faster Table Turnover", value: "2.4x", prefix: "" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={src}
            alt="Luxury dining experience"
            className="h-full w-full object-cover animate-hero-zoom"
            width={1920}
            height={1080}
            {...(i === 0 ? {} : { loading: "lazy" as const })}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/90" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 animate-luxury-fade-in text-sm font-medium uppercase tracking-[0.3em] text-gold opacity-0 delay-200">
          Premium Hospitality Technology
        </p>
        <h1 className="font-luxury animate-luxury-fade-in-slow max-w-4xl text-4xl font-bold leading-tight opacity-0 delay-300 md:text-6xl lg:text-7xl">
          Elevate Every Dining Experience with{" "}
          <span className="gold-text">Intelligent Restaurant POS</span>
        </h1>
        <p className="mt-6 animate-luxury-fade-in max-w-2xl text-lg text-muted-foreground opacity-0 delay-500 md:text-xl">
          Seamless service flow. Premium guest experience. Elegant restaurant operations — all powered by one refined system.
        </p>
        <div className="mt-10 flex animate-luxury-fade-in flex-col gap-4 opacity-0 delay-600 sm:flex-row">
          <a
            href="#contact"
            className="gold-gradient gold-glow inline-flex h-12 items-center justify-center rounded-lg px-8 text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-500 hover:opacity-90"
          >
            Request Private Demo
          </a>
          <a
            href="#features"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-gold bg-transparent px-8 text-sm font-medium text-gold transition-all duration-500 hover:bg-gold/10"
          >
            Explore Features
          </a>
        </div>

        <div className="mt-16 flex animate-luxury-fade-in flex-wrap justify-center gap-8 opacity-0 delay-700 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-panel rounded-xl px-6 py-4 text-center">
              <p className="font-luxury text-2xl font-bold text-gold md:text-3xl">
                {stat.prefix}{stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-700 ${
              current === i ? "w-8 bg-gold" : "w-4 bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
