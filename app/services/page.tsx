import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/sections/cta-section';
import { Search, ClipboardCheck, Eye, Ship, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the Right Manufacturing Partner',
    description:
      'We identify, vet, and connect you with verified Indian manufacturers that meet your exact quality, capacity, and compliance requirements. Our extensive supplier network spans across India\'s major manufacturing hubs.',
    features: [
      'Access to 500+ pre-vetted manufacturers',
      'Custom supplier matching based on your specifications',
      'Background verification and financial health checks',
      'Production capacity and capability assessment',
      'Competitive pricing comparison across multiple suppliers',
      'Initial sample coordination and evaluation',
    ],
    process: [
      { step: 1, title: 'Requirement Analysis', desc: 'We understand your product specs, volume, and quality needs' },
      { step: 2, title: 'Supplier Identification', desc: 'We search our database and network for ideal matches' },
      { step: 3, title: 'Verification', desc: 'Background checks, capability assessment, and site visits' },
      { step: 4, title: 'Shortlist & Introductions', desc: 'You receive detailed profiles of top 3-5 candidates' },
    ],
    stats: [
      { value: '500+', label: 'Verified Suppliers' },
      { value: '2-3 Weeks', label: 'Avg. Match Time' },
      { value: '95%', label: 'Success Rate' },
    ],
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'factory-audits',
    icon: ClipboardCheck,
    title: 'Factory Audits',
    subtitle: 'Comprehensive Facility Assessment',
    description:
      'Our expert auditors conduct thorough on-site inspections covering production capabilities, quality management systems, and social compliance standards. Know exactly who you\'re working with.',
    features: [
      'Multi-day on-site facility inspection',
      'Quality management system evaluation (ISO 9001)',
      'Social compliance audit (SA8000, WRAP)',
      'Environmental compliance assessment',
      'Production capacity and equipment evaluation',
      'Worker interviews and conditions assessment',
      'Detailed audit reports with photos and findings',
    ],
    process: [
      { step: 1, title: 'Scheduling', desc: 'We coordinate with the factory for audit timing' },
      { step: 2, title: 'Document Review', desc: 'Pre-audit document and certification check' },
      { step: 3, title: 'On-Site Audit', desc: 'Multi-day facility inspection and evaluation' },
      { step: 4, title: 'Report & Recommendations', desc: 'Comprehensive findings with improvement suggestions' },
    ],
    stats: [
      { value: '200+', label: 'Audits Per Year' },
      { value: '48 Hours', label: 'Report Turnaround' },
      { value: '100%', label: 'ISO Standards' },
    ],
    image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'quality-inspection',
    icon: Eye,
    title: 'Quality Inspection',
    subtitle: 'Multi-Stage Quality Control',
    description:
      'Quality issues discovered too late are expensive. Our inspection services provide checkpoints throughout production—from raw materials to final packaging—ensuring every shipment meets your specifications.',
    features: [
      'Pre-production inspection (PPI)',
      'During production inspection (DPI)',
      'Final random inspection (FRI)',
      'Container loading supervision (CLS)',
      'Lab testing coordination',
      'Defect analysis and reporting',
      'AQL sampling per international standards',
    ],
    process: [
      { step: 1, title: 'Spec Review', desc: 'We document your quality requirements and acceptance criteria' },
      { step: 2, title: 'Inspection Scheduling', desc: 'Coordinate inspections at critical production stages' },
      { step: 3, title: 'On-Site Inspection', desc: 'Qualified inspectors check products per AQL standards' },
      { step: 4, title: 'Report & Decision', desc: 'Same-day reports with pass/fail and recommendations' },
    ],
    stats: [
      { value: '5,000+', label: 'Inspections/Year' },
      { value: 'Same Day', label: 'Report Delivery' },
      { value: '0.65%', label: 'Avg. Defect Rate' },
    ],
    image: 'https://images.pexels.com/photos/1300351/pexels-photo-1300351.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'logistics-management',
    icon: Ship,
    title: 'Logistics Management',
    subtitle: 'End-to-End Shipping Solutions',
    description:
      'From factory floor to your warehouse door, we manage every aspect of international shipping. Freight forwarding, customs clearance, documentation—we handle it all so you don\'t have to.',
    features: [
      'Freight consolidation for cost efficiency',
      'Sea and air freight options',
      'Complete customs documentation',
      'Import duty and tariff optimization',
      'Cargo insurance coverage',
      'Real-time shipment tracking',
      'Warehouse coordination and delivery scheduling',
    ],
    process: [
      { step: 1, title: 'Planning', desc: 'We create optimal routing and shipping schedule' },
      { step: 2, title: 'Booking', desc: 'Space reservation with reliable carriers' },
      { step: 3, title: 'Documentation', desc: 'Complete export/import paperwork handled' },
      { step: 4, title: 'Delivery', desc: 'Door-to-door tracking until arrival' },
    ],
    stats: [
      { value: '1,000+', label: 'Shipments/Year' },
      { value: '40+', label: 'Countries Served' },
      { value: '$100M+', label: 'Cargo Value' },
    ],
    image: 'https://images.pexels.com/photos/1438426/pexels-photo-1438426.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-navy-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm font-semibold text-navy-600 tracking-wide uppercase">
                Our Services
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-navy-900">
                Comprehensive India Sourcing Solutions
              </h1>
              <p className="mt-6 text-lg text-navy-600 leading-relaxed">
                From finding the right manufacturer to delivering quality products,
                we manage every step of your sourcing journey with expertise and precision.
              </p>
            </div>
          </div>
        </section>

        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-navy-50/30'}`}
          >
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-navy-900 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-navy-900">
                        {service.title}
                      </h2>
                      <p className="text-navy-600">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-navy-700 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white rounded-lg p-4 border border-navy-100"
                      >
                        <div className="text-2xl font-bold text-navy-900">
                          {stat.value}
                        </div>
                        <div className="text-sm text-navy-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="bg-navy-900 hover:bg-navy-800">
                    <Link href="/request-quote">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
                  </div>
                </div>
              </div>

              <div className="mt-16 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-navy-700"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">
                    Our Process
                  </h3>
                  <div className="space-y-4">
                    {service.process.map((step) => (
                      <div
                        key={step.step}
                        className="flex items-start gap-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-navy-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-semibold text-navy-700">
                            {step.step}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-navy-900">
                            {step.title}
                          </div>
                          <div className="text-sm text-navy-600">
                            {step.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
