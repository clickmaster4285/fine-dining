import heroDining3 from "@/assets/hero-dining-3.jpg";
import featureKitchen from "@/assets/feature-kitchen.jpg";
import featureTables from "@/assets/feature-tables.jpg";

const blogs = [
  {
    image: heroDining3,
    category: "Fine Dining Trends",
    title: "The Future of Tableside Technology in Michelin-Starred Restaurants",
    excerpt: "How leading fine dining establishments are integrating discreet technology to enhance — not replace — the human touch.",
    date: "March 15, 2026",
  },
  {
    image: featureKitchen,
    category: "Hotel Automation",
    title: "Multi-Outlet Kitchen Coordination: A Hotel F&B Guide",
    excerpt: "Strategies for synchronizing kitchen operations across multiple restaurant venues within luxury hotel properties.",
    date: "March 8, 2026",
  },
  {
    image: featureTables,
    category: "Guest Experience",
    title: "Building Unforgettable Dining Experiences Through Data",
    excerpt: "Leveraging guest preference data to create personalized fine dining experiences that drive loyalty and revenue.",
    date: "February 28, 2026",
  },
];

export default function BlogSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Insights
          </p>
          <h2 className="font-luxury text-3xl font-bold md:text-5xl">
            Hospitality <span className="gold-text">Intelligence</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {blogs.map((b) => (
            <article key={b.title} className="group glass-card overflow-hidden rounded-2xl transition-all duration-700 hover:border-gold/30">
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-card to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
                <img
                  src={b.image}
                  alt={b.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 z-20 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold backdrop-blur-sm">
                  {b.category}
                </span>
              </div>
              <div className="p-6">
                <p className="mb-2 text-xs text-muted-foreground">{b.date}</p>
                <h3 className="font-luxury text-lg font-semibold leading-snug transition-colors duration-300 group-hover:text-gold">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
