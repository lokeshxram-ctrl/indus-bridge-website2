'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Building2, Eye, Truck, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Launch products faster with verified manufacturers',
    subtitle: 'Supplier Discovery',
  },
  {
    icon: Building2,
    title: 'Know exactly who you\'re working with before you commit',
    subtitle: 'Factory Audits',
  },
  {
    icon: Eye,
    title: 'Eliminate quality surprises with inspections before shipment',
    subtitle: 'Quality Inspection',
  },
  {
    icon: Truck,
    title: 'One partner managing everything from factory to your door',
    subtitle: 'Logistics',
  },
];

export function ServicesSection() {
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
            Core Services
          </span>
          <h2 className="mt-4 text-heading-xl font-heading font-semibold text-midnight tracking-tight">
            Everything You Need to Source Successfully
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-lg mx-auto">
            From finding the right supplier to delivering quality products to your warehouse.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.subtitle}
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
                className="group block bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100 hover:bg-white hover:shadow-soft-md hover:border-gray-200 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center group-hover:bg-midnight group-hover:border-midnight transition-all duration-200">
                    <service.icon className="w-5 h-5 text-midnight group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-midnight mb-2 leading-relaxed">
                      {service.title}
                    </h3>
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                      {service.subtitle}
                    </span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors flex items-center justify-between">
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
