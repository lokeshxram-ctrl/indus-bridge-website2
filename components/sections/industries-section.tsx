'use client';

import { motion } from 'framer-motion';
import { Shirt, ShoppingBag, Footprints, Cpu, Pill } from 'lucide-react';

const industries = [
  {
    icon: Shirt,
    title: 'Textiles',
    description: 'Premium fabrics and materials from India\'s leading textile hubs.',
  },
  {
    icon: ShoppingBag,
    title: 'Apparel',
    description: 'Ready-to-wear garments and fashion accessories.',
  },
  {
    icon: Footprints,
    title: 'Footwear',
    description: 'Quality shoes and leather goods manufacturing.',
  },
  {
    icon: Cpu,
    title: 'Electronics',
    description: 'Components and assembled electronics products.',
  },
  {
    icon: Pill,
    title: 'Pharmaceuticals',
    description: 'Api, formulations, and medical supplies.',
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
            Expertise Across Key Sectors
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-lg mx-auto">
            Deep industry knowledge with verified suppliers in each sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
              }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-soft transition-all duration-200 h-full text-center">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-midnight group-hover:border-midnight transition-all duration-200">
                  <industry.icon className="w-5 h-5 text-midnight group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-sm font-medium text-midnight mb-2">
                  {industry.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
