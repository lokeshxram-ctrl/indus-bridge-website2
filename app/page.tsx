import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import {
  HeroSection,
  ChallengesSection,
  SolutionsSection,
  WhyChooseDarkSection,
  IndustriesSection,
  HowItWorksSection,
  ServicesSection,
  ComparisonSection,
  FAQSection,
  CTASection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* 1. Hero - Premium introduction */}
        <HeroSection />

        {/* 2. Challenges - The problem businesses face */}
        <ChallengesSection />

        {/* 3. Solutions - How IndUS Bridge solves it */}
        <SolutionsSection />

        {/* 4. Why Choose Us - Dark premium section */}
        <WhyChooseDarkSection />

        {/* 5. Industries - Industries we serve */}
        <IndustriesSection />

        {/* 6. How It Works - Six-step process */}
        <HowItWorksSection />

        {/* 7. Core Services */}
        <ServicesSection />

        {/* 8. Comparison Table - Why we're different */}
        <ComparisonSection />

        {/* 9. FAQ */}
        <FAQSection />

        {/* 10. Final CTA */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
