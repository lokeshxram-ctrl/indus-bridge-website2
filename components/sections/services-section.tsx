'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Building2, Eye, Truck, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Find verified manufacturers without spending months searching',
    shortTitle: 'Supplier Discovery',
  },
  {
    icon: Building2,
    title: 'Know exactly who you\'re buying from before production begins',
    shortTitle: 'Factory Audits',
  },
  {
    icon: Eye,
    title: 'Receive inspection reports before shipment—not after problems arise',
    shortTitle: 'Quality Inspection',
  },
  {
    icon: Truck,
    title: 'From factory floor to your warehouse, one partner manages everything',
    shortTitle: 'Logistics',
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
            What We Do
          </span>
          <h2 className="mt-4 text-heading-xl font-heading font-semibold text-midnight tracking-tight">
            Complete Sourcing Solutions
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-lg mx-auto">
            We manage every aspect of your India sourcing, so you can focus on growing your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.shortTitle}
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
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-midnight group-hover:border-midnight transition-all duration-200">
                    <service.icon className="w-5 h-5 text-midnight group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-midnight mb-2 leading-relaxed">
                      {service.title}
                    </h3>
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                      {service.shortTitle}
                    </span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between group-hover:border-gray-200 transition-colors">
                  <span className="text-sm font-medium text-gray-400 group-hover:text-midnight transition-colors">
                    Learn more
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-midnight group-hover:translate-x-0.5 transition-all duration-200" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
