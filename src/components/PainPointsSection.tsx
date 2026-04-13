import { useEffect, useRef, useState } from "react";
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

// Scroll animation hook
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, triggerOnce: true }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
};

export default function PainPointsSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image with animation */}
          <div
            ref={imageRef}
            className={`relative overflow-hidden rounded-2xl luxury-shadow transition-all duration-1000 transform ${
              imageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
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

          {/* Text content with animations */}
          <div
            ref={textRef}
            className={`transition-all duration-1000 transform ${
              textVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold transition-all duration-700 delay-100">
              The Challenge
            </p>
            <h2 className="font-luxury text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              When Excellence Meets <span className="gold-text">Operational Friction</span>
            </h2>
            <p className="mt-4 text-muted-foreground transition-all duration-700 delay-200">
              Even the finest restaurants struggle with systems that can't match their ambition.
            </p>

            <div className="mt-10 space-y-6">
              {painPoints.map((point, i) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const { ref: pointRef, isVisible: pointVisible } = useScrollAnimation();
                return (
                  <div
                    key={point.title}
                    ref={pointRef}
                    className={`flex gap-4 transition-all duration-700 transform ${
                      pointVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 hover:scale-110 hover:bg-gold/20">
                      <point.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{point.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{point.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}