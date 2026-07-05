'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const industries = [
  {
    name: 'Textiles',
    description: 'Premium fabrics, home textiles, and technical textiles from certified mills.',
    href: '/industries#textiles',
  },
  {
    name: 'Apparel',
    description: 'Ready-made garments, fashion accessories, and custom clothing manufacturing.',
    href: '/industries#apparel',
  },
  {
    name: 'Footwear',
    description: 'Leather goods, shoes, sandals, and footwear components.',
    href: '/industries#footwear',
  },
  {
    name: 'Electronics',
    description: 'Consumer electronics and components.',
    href: '/industries#electronics',
    badge: 'Coming Soon',
  },
  {
    name: 'Pharmaceuticals',
    description: 'Generic medicines, APIs, and OTC products.',
    href: '/industries#pharmaceuticals',
    badge: 'Coming Soon',
  },
];

export function IndustriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            Industries We Serve
          </span>
          <h2 className="mt-4 text-heading-xl font-heading font-semibold text-midnight tracking-tight">
            Expertise across key sectors
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-lg mx-auto">
            Deep industry knowledge and established supplier networks in India&apos;s strongest manufacturing sectors.
          </p>
        </motion.div>

        <div className="grid-card-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
            >
              <Link
                href={industry.href}
                className="group block bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-soft hover:shadow-soft-md hover:border-gray-200 transition-all duration-200 h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-medium text-midnight group-hover:text-gray-600 transition-colors">
                    {industry.name}
                  </h3>
                  {industry.badge && (
                    <span className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                      <Clock className="w-3 h-3" />
                      {industry.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {industry.description}
                </p>
                <div className="flex items-center gap-1 text-sm font-medium text-gray-400 group-hover:text-midnight transition-colors">
                  Explore
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
