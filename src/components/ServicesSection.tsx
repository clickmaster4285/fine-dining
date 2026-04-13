import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import featureTables from "@/assets/feature-tables.jpg";
import featureReservation from "@/assets/feature-reservation.jpg";
import { Laptop, Hotel, CalendarCheck, Users, BarChart3, Smartphone } from "lucide-react";

const services = [
  { icon: Laptop, title: "Custom POS Systems", desc: "Tailored point-of-sale solutions designed around your unique service workflow." },
  { icon: Hotel, title: "Hotel Integration", desc: "Seamless multi-outlet management connecting all F&B operations under one system." },
  { icon: CalendarCheck, title: "Reservation Systems", desc: "Intelligent booking engines with guest preferences and automated confirmations." },
  { icon: Users, title: "Guest CRM Systems", desc: "Rich guest profiles that power personalized experiences across every visit." },
  { icon: BarChart3, title: "Analytics Dashboards", desc: "Real-time insights into revenue, performance, and guest behavior patterns." },
  { icon: Smartphone, title: "Mobile Waiter Apps", desc: "Elegant tableside ordering and management from any device." },
];

// Animation variants
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

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="relative py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 text-center"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Our Services
          </p>
          <h2 className="font-luxury text-3xl font-bold md:text-5xl">
            The Complete <span className="gold-text">Hospitality Ecosystem</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group glass-card rounded-2xl p-8 transition-all duration-700 hover:border-gold/30 hover:gold-glow"
              variants={cardVariants}
              custom={i}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-500 group-hover:scale-110"
                variants={iconVariants}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.2,
                  transition: { duration: 0.4 }
                }}
              >
                <s.icon className="h-5 w-5" />
              </motion.div>
              <motion.h3 
                className="font-luxury text-lg font-semibold"
                variants={textVariants}
              >
                {s.title}
              </motion.h3>
              <motion.p 
                className="mt-2 text-sm leading-relaxed text-muted-foreground"
                variants={textVariants}
              >
                {s.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}