import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/sections/cta-section';
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, Clock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    slug: 'techstyle-apparel',
    title: 'TechStyle Apparel',
    industry: 'Apparel',
    challenge:
      'A fast-growing fashion brand was struggling with inconsistent quality from multiple Indian suppliers, leading to 15% defect rates and customer complaints.',
    solution:
      'We conducted factory audits, consolidated their supplier base from 12 to 4 verified partners, and implemented our multi-stage quality inspection process.',
    results: [
      { icon: TrendingUp, label: 'Defect Rate Reduction', value: '60%', description: 'From 15% to 3.5%' },
      { icon: DollarSign, label: 'Cost Savings', value: '$450K', description: 'Annual savings' },
      { icon: Clock, label: 'Time to Market', value: '-25%', description: 'Faster production cycles' },
    ],
    quote: 'IndUS Bridge transformed our India sourcing strategy. Our defect rates dropped dramatically, and our customers noticed the quality improvement immediately.',
    quoteAuthor: 'Sarah Chen',
    quoteRole: 'VP of Supply Chain',
    image: 'https://images.pexels.com/photos/6953019/pexels-photo-6953019.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: {
      products: '2M+ units/year',
      suppliers: '4 verified',
      timeline: '18 months',
    },
  },
  {
    slug: 'home-essentials',
    title: 'Home Essentials Inc.',
    industry: 'Home Textiles',
    challenge:
      'A home goods retailer needed to diversify beyond China. They wanted to source from India but lacked the expertise and had no supplier relationships.',
    solution:
      'We built a supplier network from scratch, matching them with textile mills in Gujarat and Tirupur. Our team handled factory setup, sample development, and initial orders.',
    results: [
      { icon: TrendingUp, label: 'Supplier Network', value: '8', description: 'Active verified partners' },
      { icon: DollarSign, label: 'Revenue Growth', value: '40%', description: 'YoY increase' },
      { icon: Clock, label: 'Sourcing Time', value: '-70%', description: 'Faster supplier discovery' },
    ],
    quote: 'Moving into India seemed daunting. IndUS Bridge made it seamless. We now have a reliable supplier network and better margins.',
    quoteAuthor: 'Michael Rodriguez',
    quoteRole: 'Director of Operations',
    image: 'https://images.pexels.com/photos/5816964/pexels-photo-5816964.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: {
      products: '500+ SKUs',
      suppliers: '8 mills',
      timeline: '24 months',
    },
  },
  {
    slug: 'global-footwear',
    title: 'Global Footwear Co.',
    industry: 'Footwear',
    challenge:
      'A footwear brand faced customs delays and missing documentation in their India imports, causing missed delivery windows and frustrated retail partners.',
    solution:
      'We took over their logistics coordination, implemented proper documentation workflows, and established consolidated shipment schedules with tracked delivery windows.',
    results: [
      { icon: TrendingUp, label: 'On-Time Delivery', value: '95%', description: 'Up from 65%' },
      { icon: DollarSign, label: 'Customs Fees Saved', value: '$120K', description: 'First year' },
      { icon: Clock, label: 'Avg. Transit Time', value: '-12 days', description: 'Process optimization' },
    ],
    quote: 'We used to have boxes stuck at customs constantly. IndUS Bridge\'s logistics team fixed everything—now our deliveries are predictable.',
    quoteAuthor: 'David Kumar',
    quoteRole: 'Procurement Manager',
    image: 'https://images.pexels.com/photos/2673018/pexels-photo-2673018.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: {
      products: '800K pairs/year',
      suppliers: '3 factories',
      timeline: '12 months',
    },
  },
  {
    slug: 'sustainable-brands',
    title: 'Conscious Fashion Collective',
    industry: 'Sustainable Apparel',
    challenge:
      'A sustainable fashion brand needed verified organic and fair-trade suppliers for their growing business. They had been burned by false claims from previous suppliers.',
    solution:
      'We connected them with GOTS-certified organic textile suppliers and WRAP-certified garment factories. All certifications were independently verified.',
    results: [
      { icon: TrendingUp, label: 'Certified Partners', value: '100%', description: 'All verified' },
      { icon: DollarSign, label: 'Premium Pricing', value: '+30%', description: 'From verified claims' },
      { icon: Clock, label: 'Customer Trust', value: '50%', description: 'Higher retention' },
    ],
    quote: 'As a sustainable brand, supplier integrity is everything. IndUS Bridge helped us build a supply chain we are proud of.',
    quoteAuthor: 'Jennifer Park',
    quoteRole: 'CEO',
    image: 'https://images.pexels.com/photos/7749090/pexels-photo-7749090.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: {
      products: '150K units/year',
      suppliers: '5 certified',
      timeline: '24 months',
    },
  },
];

const industries = ['All', 'Apparel', 'Home Textiles', 'Footwear', 'Sustainable Apparel'];

export default function CaseStudiesPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-navy-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm font-semibold text-navy-600 tracking-wide uppercase">
                Case Studies
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-navy-900">
                Real Results, Real Partnerships
              </h1>
              <p className="mt-6 text-lg text-navy-600 leading-relaxed">
                See how U.S. businesses have transformed their India sourcing
                with IndUS Bridge. These are real stories from real clients who
                have achieved measurable results.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {industries.map((industry) => (
                <button
                  key={industry}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-navy-100 text-navy-700 hover:bg-navy-200"
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding pt-8 bg-white">
          <div className="container-custom">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <article
                  key={study.slug}
                  className="bg-navy-50/30 rounded-2xl overflow-hidden"
                  id={study.slug}
                >
                  <div className="grid lg:grid-cols-2">
                    <div className={`relative h-[300px] lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-navy-900 text-white text-xs font-medium px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                      </div>
                    </div>

                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
                        {study.title}
                      </h2>

                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-navy-700 mb-2">
                          The Challenge
                        </h3>
                        <p className="text-navy-600 text-sm leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-navy-700 mb-2">
                          Our Solution
                        </h3>
                        <p className="text-navy-600 text-sm leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {study.results.map((result) => (
                          <div
                            key={result.label}
                            className="bg-white rounded-lg p-4 text-center"
                          >
                            <result.icon className="w-5 h-5 text-navy-400 mx-auto mb-2" />
                            <div className="text-xl font-bold text-navy-900">
                              {result.value}
                            </div>
                            <div className="text-xs text-navy-600">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <blockquote className="bg-white border-l-4 border-navy-500 p-4 rounded-r-lg mb-6">
                        <p className="text-navy-700 text-sm italic mb-2">
                          &ldquo;{study.quote}&rdquo;
                        </p>
                        <footer className="text-xs text-navy-500">
                          <span className="font-semibold">{study.quoteAuthor}</span>, {study.quoteRole}
                        </footer>
                      </blockquote>

                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-navy-100 text-navy-700 px-3 py-1 rounded-full">
                          {study.stats.products}
                        </span>
                        <span className="text-xs bg-navy-100 text-navy-700 px-3 py-1 rounded-full">
                          {study.stats.suppliers}
                        </span>
                        <span className="text-xs bg-navy-100 text-navy-700 px-3 py-1 rounded-full">
                          {study.stats.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
