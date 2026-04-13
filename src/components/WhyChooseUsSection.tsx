import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Headphones, Settings, Hotel, Zap, Award } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Enterprise-Grade Security", desc: "Bank-level encryption and PCI compliance protect every transaction." },
  { icon: Headphones, title: "24/7 Premium Support", desc: "Dedicated hospitality specialists available around the clock." },
  { icon: Settings, title: "Customizable Workflows", desc: "Adapt every detail to match your restaurant's unique service style." },
  { icon: Hotel, title: "Hotel Integration", desc: "Seamless connectivity with hotel PMS and multi-outlet management." },
  { icon: Zap, title: "99.99% Uptime", desc: "Reliability that matches the consistency your guests expect." },
  { icon: Award, title: "Award-Winning Design", desc: "An interface as refined as the dining experience it powers." },
];

const stats = [
  { value: "500+", label: "Premium Restaurants" },
  { value: "12M+", label: "Guests Served" },
  { value: "15+", label: "Years Experience" },
  { value: "99.99%", label: "System Uptime" },
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
      stiffness: 200,
      damping: 15,
      delay: 0.2,
    },
  },
};

const statsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const statCardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9,
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

const valueVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: 0.2,
    },
  },
};

export default function WhyChooseUsSection() {
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
            Why LuxePOS
          </p>
          <h2 className="font-luxury text-3xl font-bold md:text-5xl">
            Built for <span className="gold-text">Premium Hospitality</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="glass-card group rounded-2xl p-8 transition-all duration-700 hover:border-gold/30"
              variants={cardVariants}
              custom={i}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold/20"
                variants={iconVariants}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.4 }
                }}
              >
                <r.icon className="h-5 w-5" />
              </motion.div>
              <motion.h3 
                className="font-luxury text-lg font-semibold"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 + 0.3 }}
              >
                {r.title}
              </motion.h3>
              <motion.p 
                className="mt-2 text-sm leading-relaxed text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 + 0.4 }}
              >
                {r.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
          variants={statsContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="glass-panel rounded-xl py-6 text-center relative overflow-hidden"
              variants={statCardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.p 
                className="font-luxury text-3xl font-bold text-gold relative z-10"
                variants={valueVariants}
              >
                {s.value}
              </motion.p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground relative z-10">
                {s.label}
              </p>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0"
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}