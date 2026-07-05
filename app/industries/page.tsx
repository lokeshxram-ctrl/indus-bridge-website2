import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/sections/cta-section';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const industries = [
  {
    id: 'textiles',
    title: 'Textiles',
    subtitle: 'Premium Fabrics & Home Textiles',
    description:
      'India is one of the world\'s largest textile producers, offering everything from cotton and silk to technical textiles. We connect you with certified mills that meet international quality and compliance standards.',
    image: 'https://images.pexels.com/photos/5816964/pexels-photo-5816964.jpeg?auto=compress&cs=tinysrgb&w=800',
    products: [
      'Cotton fabrics & yarns',
      'Silk and silk blends',
      'Home textiles (bedding, towels, curtains)',
      'Technical textiles',
      'Upholstery fabrics',
      'Industrial textiles',
    ],
    stats: [
      { value: '150+', label: 'Verified Mills' },
      { value: '50+', label: 'States Served' },
      { value: '$40M+', label: 'Trade Value' },
    ],
    regions: ['Gujarat', 'Maharashtra', 'Tamil Nadu', 'Rajasthan'],
    certifications: ['ISO 9001', 'OEKO-TEX', 'GOTS', 'BCI'],
  },
  {
    id: 'apparel',
    title: 'Apparel',
    subtitle: 'Ready-Made Garments & Fashion',
    description:
      'From fast fashion to premium brands, Indian apparel manufacturers offer exceptional quality at competitive prices. Our network includes factories specializing in everything from basic basics to intricate embroidery.',
    image: 'https://images.pexels.com/photos/6953019/pexels-photo-6953019.jpeg?auto=compress&cs=tinysrgb&w=800',
    products: [
      'Casual wear (t-shirts, polos, jeans)',
      'Formal wear (shirts, trousers, suits)',
      'Women\'s wear (dresses, tops, ethnic)',
      'Children\'s apparel',
      'Sportswear & activewear',
      'Fashion accessories',
    ],
    stats: [
      { value: '200+', label: 'Partner Factories' },
      { value: '15M+', label: 'Units/Year' },
      { value: '48hr', label: 'Avg. Response' },
    ],
    regions: ['Bangalore', 'Tirupur', 'Noida', 'Chennai'],
    certifications: ['WRAP', 'SA8000', 'BSCI', 'Sedex'],
  },
  {
    id: 'footwear',
    title: 'Footwear',
    subtitle: 'Leather Goods & Footwear',
    description:
      'India has a rich heritage in leather craftsmanship. Our footwear suppliers range from traditional artisans to modern manufacturing facilities producing for global brands.',
    image: 'https://images.pexels.com/photos/2673018/pexels-photo-2673018.jpeg?auto=compress&cs=tinysrgb&w=800',
    products: [
      'Leather shoes & boots',
      'Athletic footwear',
      'Sandals & flip-flops',
      'Leather accessories',
      'Safety footwear',
      'Components & soles',
    ],
    stats: [
      { value: '80+', label: 'Partner Factories' },
      { value: '5M+', label: 'Pairs/Year' },
      { value: '100%', label: 'Compliance Rate' },
    ],
    regions: ['Agra', 'Chennai', 'Kanpur', 'Jalandhar'],
    certifications: ['ISO 9001', 'ISO 14001', 'SATRA', 'BSCI'],
  },
  {
    id: 'electronics',
    title: 'Electronics',
    subtitle: 'Consumer Electronics & Components',
    badge: 'Coming Soon - Q1 2025',
    description:
      'India\'s electronics manufacturing sector is rapidly growing with government incentives. We\'re building a verified network of electronics and component manufacturers for our clients.',
    image: 'https://images.pexels.com/photos/4761627/pexels-photo-4761627.jpeg?auto=compress&cs=tinysrgb&w=800',
    products: [
      'Consumer electronics',
      'Mobile accessories',
      'Electronic components',
      'LED lighting',
      'Smart devices',
      'Power banks & chargers',
    ],
    stats: [
      { value: '50+', label: 'Target Partners' },
      { value: 'Q1 2025', label: 'Launch Date' },
      { value: '3', label: 'Clusters Covered' },
    ],
    regions: ['Bangalore', 'Hyderabad', 'Noida'],
    certifications: ['ISO 9001', 'BIS', 'CE', 'FCC'],
    disabled: true,
  },
  {
    id: 'pharmaceuticals',
    title: 'Pharmaceuticals',
    subtitle: 'Generic Medicines & APIs',
    badge: 'Coming Soon - Q2 2025',
    description:
      'India is the "pharmacy of the world," producing high-quality generic medicines and APIs at competitive prices. We\'re establishing a specialized pharma sourcing division.',
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=800',
    products: [
      'Generic medicines',
      'Active Pharmaceutical Ingredients (APIs)',
      'OTC products',
      'Nutraceuticals',
      'Medical devices',
      'Packaging materials',
    ],
    stats: [
      { value: '30+', label: 'Target Partners' },
      { value: 'Q2 2025', label: 'Launch Date' },
      { value: 'USFDA', label: 'Compliance Focus' },
    ],
    regions: ['Hyderabad', 'Ahmedabad', 'Mumbai', 'Bangalore'],
    certifications: ['USFDA', 'WHO-GMP', 'EU-GMP', 'ISO 13485'],
    disabled: true,
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-navy-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm font-semibold text-navy-600 tracking-wide uppercase">
                Industries We Serve
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-navy-900">
                Expertise Across Key Manufacturing Sectors
              </h1>
              <p className="mt-6 text-lg text-navy-600 leading-relaxed">
                Deep industry knowledge and established supplier networks in
                India&apos;s strongest manufacturing sectors. Each industry has unique
                requirements—our specialized teams understand them inside and out.
              </p>
            </div>
          </div>
        </section>

        {industries.map((industry, index) => (
          <section
            key={industry.id}
            id={industry.id}
            className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-navy-50/30'} ${
              industry.disabled ? 'opacity-80' : ''
            }`}
          >
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-bold text-navy-900">
                      {industry.title}
                    </h2>
                    {industry.badge && (
                      <span className="flex items-center gap-1 text-xs bg-navy-100 text-navy-600 px-3 py-1 rounded-full">
                        <Sparkles className="w-3 h-3" />
                        {industry.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xl text-navy-600 mb-6">
                    {industry.subtitle}
                  </p>
                  <p className="text-navy-700 leading-relaxed mb-8">
                    {industry.description}
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    {industry.stats.map((stat) => (
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

                  <div className="flex flex-wrap gap-2 mb-6">
                    {industry.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="text-xs bg-navy-100 text-navy-700 px-3 py-1 rounded-full font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  {!industry.disabled && (
                    <Button asChild className="bg-navy-900 hover:bg-navy-800">
                      <Link href="/request-quote">
                        Source {industry.title}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  )}
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-xl overflow-hidden shadow-lg mb-8">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg p-6 border border-navy-100">
                      <h3 className="font-semibold text-navy-900 mb-4">
                        Products Available
                      </h3>
                      <ul className="space-y-2">
                        {industry.products.map((product) => (
                          <li
                            key={product}
                            className="flex items-center gap-2 text-sm text-navy-700"
                          >
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-6 border border-navy-100">
                      <h3 className="font-semibold text-navy-900 mb-4">
                        Key Manufacturing Regions
                      </h3>
                      <ul className="space-y-2">
                        {industry.regions.map((region) => (
                          <li
                            key={region}
                            className="flex items-center gap-2 text-sm text-navy-700"
                          >
                            <div className="w-2 h-2 rounded-full bg-navy-400" />
                            {region}
                          </li>
                        ))}
                      </ul>
                    </div>
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
