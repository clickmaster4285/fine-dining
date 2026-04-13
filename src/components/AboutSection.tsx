import heroDining2 from "@/assets/hero-dining-2.jpg";
import featureReservation from "@/assets/feature-reservation.jpg";

export default function AboutSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
              About LuxePOS
            </p>
            <h2 className="font-luxury text-3xl font-bold md:text-5xl">
              Crafting the Future of <span className="gold-text">Hospitality Technology</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Founded with a singular vision — to create technology worthy of the world's finest restaurants. For over 15 years, LuxePOS has partnered with Michelin-starred restaurants, luxury hotel groups, and premium dining establishments across the globe.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our team of hospitality technologists understands that in fine dining, every detail matters. That's why our systems are designed to be invisible to the guest while indispensable to the operation.
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <p className="font-luxury text-3xl font-bold text-gold">15+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Years</p>
              </div>
              <div>
                <p className="font-luxury text-3xl font-bold text-gold">30+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Countries</p>
              </div>
              <div>
                <p className="font-luxury text-3xl font-bold text-gold">50+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Hotel Partners</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl luxury-shadow">
              <img src={heroDining2} alt="Luxury dining service" loading="lazy" width={1920} height={1080} className="h-64 w-full object-cover image-zoom" />
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl luxury-shadow">
              <img src={featureReservation} alt="Hotel lobby technology" loading="lazy" width={800} height={600} className="h-64 w-full object-cover image-zoom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
