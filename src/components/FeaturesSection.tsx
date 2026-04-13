import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="features" className="relative py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 text-center"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Premium Features
          </p>
          <h2 className="font-luxury text-3xl font-bold md:text-5xl">
            A System Worthy of Your <span className="gold-text">Establishment</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Every feature crafted to match the precision and elegance of fine dining hospitality.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group glass-card overflow-hidden rounded-2xl transition-all duration-700 hover:gold-glow"
              variants={cardVariants}
              custom={i}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  className="absolute inset-0 z-10 bg-gradient-to-t from-card via-card/40 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                />
                <motion.img
                  src={f.image}
                  alt={f.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                  variants={imageVariants}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1.2 }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/20 text-gold backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                >
                  <f.icon className="h-5 w-5" />
                </motion.div>
              </div>
              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 + 0.4 }}
              >
                <h3 className="font-luxury text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}