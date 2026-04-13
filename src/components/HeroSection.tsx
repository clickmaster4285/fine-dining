import { useState, useEffect } from "react";
import heroDining1 from "@/assets/hero-dining-1.jpg";
import heroDining2 from "@/assets/hero-dining-2.jpg";
import heroDining3 from "@/assets/hero-dining-3.jpg";

const slides = [heroDining1, heroDining2, heroDining3];

const stats = [
  { label: "Revenue Increase", value: 34, prefix: "+", suffix: "%" },
  { label: "Guest Satisfaction", value: 98, prefix: "", suffix: "%" },
  { label: "Faster Table Turnover", value: 2.4, prefix: "", suffix: "x" },
];

// Counter animation component
function Counter({ target, duration = 2000, prefix = "", suffix = "" }: { target: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = target * easeOutQuart;
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [target, duration]);

  // Format display value
  const displayValue = target % 1 === 0 ? Math.floor(count) : count.toFixed(1);
  
  return (
    <span>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  // Start counter animation when component mounts
  useEffect(() => {
    const counterTimer = setTimeout(() => setStartCounter(true), 800);
    return () => clearTimeout(counterTimer);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
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

      {/* Enhanced gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      
      {/* Additional overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 animate-luxury-fade-in text-sm font-medium uppercase tracking-[0.3em] text-gold opacity-0 delay-200">
          Premium Hospitality Technology
        </p>
        <h1 className="font-luxury animate-luxury-fade-in-slow max-w-4xl text-4xl font-bold leading-tight opacity-0 delay-300 md:text-6xl lg:text-7xl">
          Elevate Every Dining Experience with{" "}
          <span className="gold-text text-glow">Intelligent Restaurant POS</span>
        </h1>
        <p className="mt-6 animate-luxury-fade-in max-w-2xl text-lg text-white/90 opacity-0 delay-500 md:text-xl drop-shadow-lg">
          Seamless service flow. Premium guest experience. Elegant restaurant operations — all powered by one refined system.
        </p>
        <div className="mt-10 flex animate-luxury-fade-in flex-col gap-4 opacity-0 delay-600 sm:flex-row">
          <a
            href="#contact"
            className="gold-gradient gold-glow animate-pulse inline-flex h-12 items-center justify-center rounded-lg px-8 text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-500 hover:opacity-90 hover:scale-105"
          >
            Request Private Demo
          </a>
          <a
            href="#features"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-gold bg-black/30 backdrop-blur-sm px-8 text-sm font-medium text-gold transition-all duration-500 hover:bg-gold/20 hover:scale-105"
          >
            Explore Features
          </a>
        </div>

        {/* Stats with Counter */}
        <div className="mt-16 flex animate-luxury-fade-in flex-wrap justify-center gap-8 opacity-0 delay-700 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl px-6 py-4 text-center bg-black/20 backdrop-blur-sm border border-gold/20">
              <p className="font-luxury text-2xl font-bold text-gold md:text-3xl">
                {startCounter ? (
                  <Counter 
                    target={stat.value} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix}
                    duration={2000}
                  />
                ) : (
                  <span>{stat.prefix}{stat.value}{stat.suffix}</span>
                )}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/80 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-700 ${
              current === i ? "w-8 bg-gold" : "w-4 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}