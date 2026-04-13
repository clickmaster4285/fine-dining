import { createFileRoute } from "@tanstack/react-router";
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <SolutionsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <CaseStudySection />
      <TestimonialsSection />
      <AboutSection />
      <ServicesSection />
      <BlogSection />
      <ContactSection />
      <Footer />

      {/* Sticky CTA */}
      <a
        href="#contact"
        className="gold-gradient gold-glow fixed bottom-6 right-6 z-50 hidden h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-500 hover:opacity-90 hover:scale-105 md:inline-flex"
      >
        Request Demo
      </a>
    </div>
  );
}