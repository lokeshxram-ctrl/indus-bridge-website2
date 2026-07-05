import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import {
  HeroSection,
  HowItWorksSection,
  IndustriesSection,
  ServicesSection,
  WhyChooseSection,
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
        <HowItWorksSection />
        <IndustriesSection />
        <ServicesSection />
        <WhyChooseSection />
        <OurPromiseSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
