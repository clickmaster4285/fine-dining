import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { useScrollInView } from "@/hooks/useInView";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import SolutionsSection from "@/components/SolutionsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CaseStudySection from "@/components/CaseStudySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

// Define variants with proper typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Scroll animation variants
const scrollVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Index() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-background text-foreground"
    >
      <motion.div variants={itemVariants}>
        <Navbar />
      </motion.div>

      <motion.div 
        key="hero"
        variants={scrollVariants}
        whileInView="visible"
        viewport={{ margin: '-20% 0px' }}
        className="scroll-section"
        style={{ scrollMarginTop: '100px' }}
      >
        <HeroSection />
      </motion.div>
      
      <motion.div 
        key="pain-points"
        variants={scrollVariants}
        whileInView="visible"
        viewport={{ margin: '-20% 0px' }}
        className="scroll-section"
      >
        <PainPointsSection />
      </motion.div>
      
      <motion.div 
        key="solutions"
        variants={scrollVariants}
        whileInView="visible"
        viewport={{ margin: '-20% 0px' }}
        className="scroll-section"
      >
        <SolutionsSection />
      </motion.div>
      
      <motion.div variants={scrollVariants}>
        <FeaturesSection />
      </motion.div>
      
      <motion.div variants={scrollVariants}>
        <HowItWorksSection />
      </motion.div>
      
      <motion.div variants={scrollVariants}>
        <WhyChooseUsSection />
      </motion.div>
      
      <motion.div variants={scrollVariants}>
        <CaseStudySection />
      </motion.div>
      
      <motion.div variants={scrollVariants}>
        <TestimonialsSection />
      </motion.div>
      
      <motion.div variants={scrollVariants}>
        <AboutSection />
      </motion.div>
      
      <motion.div variants={scrollVariants}>
        <ServicesSection />
      </motion.div>
      
      <motion.div variants={scrollVariants}>
        <BlogSection />
      </motion.div>
      
      <motion.div variants={scrollVariants}>
        <ContactSection />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Footer />
      </motion.div>

      {/* Sticky CTA with enhanced animation */}
      <motion.a
        href="#contact"
        className="gold-gradient gold-glow fixed bottom-6 right-6 z-50 hidden h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-primary-foreground shadow-lg md:inline-flex"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1,
          duration: 0.5,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        Request Demo
      </motion.a>
    </motion.div>
  );
}