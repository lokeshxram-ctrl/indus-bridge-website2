import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import {
  HeroSection,
  ProblemSolutionSection,
  ComparisonSection,
  WhyChooseSection,
  ServicesSection,
  WhoWeHelpSection,
  HowItWorksSection,
  OurPromiseSection,
  FAQSection,
  CTASection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <ComparisonSection />
        <WhyChooseSection />
        <ServicesSection />
        <WhoWeHelpSection />
        <HowItWorksSection />
        <OurPromiseSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
