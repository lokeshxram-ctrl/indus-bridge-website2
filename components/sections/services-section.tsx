'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ClipboardCheck, Eye, Ship, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description:
      'We identify and vet manufacturers that meet your quality, capacity, and compliance requirements.',
    features: ['Verified supplier database', 'Background verification', 'Custom matching criteria', 'Capacity assessment'],
  },
  {
    icon: ClipboardCheck,
    title: 'Factory Audits',
    description:
      'Comprehensive facility inspections covering production capabilities and compliance standards.',
    features: ['On-site verification', 'Quality system audit', 'Social compliance check', 'Detailed reports'],
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    description:
      'Multi-stage quality control ensuring every shipment meets your exact specifications.',
    features: ['Pre-production inspection', 'During production checks', 'Final random inspection', 'AQL sampling'],
  },
  {
    icon: Ship,
    title: 'Logistics Management',
    description:
      'End-to-end shipping coordination including freight forwarding and customs clearance.',
    features: ['Freight consolidation', 'Customs documentation', 'Insurance coverage', 'Real-time tracking'],
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            Core Services
          </span>
          <h2 className="mt-4 text-heading-xl font-heading font-semibold text-midnight tracking-tight">
            Comprehensive sourcing solutions
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-lg mx-auto">
            From finding the right manufacturer to delivering quality products.
          </p>
        </motion.div>

        <div className="grid-card-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
              }}
            >
              <Link
                href="/services"
                className="group block bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-soft hover:shadow-soft-md hover:border-gray-200 transition-all duration-200"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-midnight group-hover:border-midnight transition-all duration-200">
                      <service.icon className="w-5 h-5 text-midnight group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-midnight mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-2 gap-1.5 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-gray-400"
                      >
                        <span className="w-0.5 h-0.5 rounded-full bg-gray-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between group-hover:border-gray-200 transition-colors">
                    <span className="text-sm font-medium text-gray-400 group-hover:text-midnight transition-colors">
                      Learn more
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-midnight group-hover:translate-x-0.5 transition-all duration-200" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
