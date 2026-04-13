import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import painPointsImg from "@/assets/pain-points.jpg";
import solutionAfterImg from "@/assets/solution-after.jpg";

const beforeItems = [
  "Manual order taking with paper pads",
  "Verbal communication to kitchen",
  "Disconnected reservation systems",
  "Slow end-of-night reconciliation",
];

const afterItems = [
  "Smart table-side digital ordering",
  "Real-time kitchen coordination",
  "Integrated reservation & CRM",
  "Instant automated billing",
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
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    rotateY: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardRightVariants = {
  hidden: { 
    opacity: 0, 
    x: 50,
    rotateY: 10,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const imageOverlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

const badgeVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.4,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const listItemRightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="solutions" className="relative py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 text-center"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            The Transformation
          </p>
          <h2 className="font-luxury text-3xl font-bold md:text-5xl">
            From Traditional to <span className="gold-text">Extraordinary</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-8 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Before Card */}
          <motion.div 
            className="glass-card overflow-hidden rounded-2xl"
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative h-64 overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-background/60 z-10"
                variants={imageOverlayVariants}
              />
              <motion.img 
                src={painPointsImg} 
                alt="Before LuxePOS" 
                loading="lazy" 
                width={1280} 
                height={720} 
                className="h-full w-full object-cover"
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : { scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <motion.div 
                className="absolute inset-0 z-20 flex items-center justify-center"
                variants={badgeVariants}
              >
                <span className="font-luxury rounded-full border border-destructive/50 bg-destructive/20 px-6 py-2 text-lg font-semibold text-destructive-foreground backdrop-blur-sm">
                  Before
                </span>
              </motion.div>
            </div>
            <motion.div 
              className="p-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ul className="space-y-3">
                {beforeItems.map((item, i) => (
                  <motion.li 
                    key={item} 
                    className="flex items-center gap-3 text-muted-foreground"
                    custom={i}
                    variants={listItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <motion.span 
                      className="h-1.5 w-1.5 rounded-full bg-destructive"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* After Card */}
          <motion.div 
            className="glass-card overflow-hidden rounded-2xl gold-glow"
            variants={cardRightVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative h-64 overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-background/40 z-10"
                variants={imageOverlayVariants}
              />
              <motion.img 
                src={solutionAfterImg} 
                alt="After LuxePOS" 
                loading="lazy" 
                width={1280} 
                height={720} 
                className="h-full w-full object-cover"
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : { scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              />
              <motion.div 
                className="absolute inset-0 z-20 flex items-center justify-center"
                variants={badgeVariants}
              >
                <span className="font-luxury rounded-full border border-gold/50 bg-gold/20 px-6 py-2 text-lg font-semibold text-gold backdrop-blur-sm">
                  After
                </span>
              </motion.div>
            </div>
            <motion.div 
              className="p-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ul className="space-y-3">
                {afterItems.map((item, i) => (
                  <motion.li 
                    key={item} 
                    className="flex items-center gap-3 text-foreground"
                    custom={i}
                    variants={listItemRightVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <motion.span 
                      className="h-1.5 w-1.5 rounded-full bg-gold"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}