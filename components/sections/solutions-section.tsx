'use client';

import { motion } from 'framer-motion';
import { SearchCheck, Building2, Activity, Eye, Ship, Warehouse } from 'lucide-react';

const solutions = [
  {
    icon: SearchCheck,
    title: 'Verified Supplier Discovery',
    description: 'Pre-vetted manufacturers that meet quality, capacity, and compliance standards.',
  },
  {
    icon: Building2,
    title: 'Factory Audits',
    description: 'On-site verification of production capabilities, quality systems, and social compliance.',
  },
  {
    icon: Activity,
    title: 'Production Monitoring',
    description: 'Real-time tracking of production progress with proactive issue identification.',
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    description: 'Multi-stage inspections ensuring products meet specifications before shipment.',
  },
  {
    icon: Ship,
    title: 'Logistics Management',
    description: 'Coordinated freight, customs clearance, and delivery scheduling.',
  },
  {
    icon: Warehouse,
    title: 'Warehouse Delivery',
    description: 'End-to-end tracking from factory to your warehouse doorstep.',
  },
];

export function SolutionsSection() {
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
            Our Solution
          </span>
          <h2 className="mt-4 text-heading-xl font-heading font-semibold text-midnight tracking-tight">
            One Trusted Partner.
            <span className="block">Every Step Covered.</span>
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We simplify international sourcing by managing every stage of the process with complete transparency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100 hover:border-gray-200 hover:bg-white transition-all duration-200 h-full">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-4 group-hover:bg-midnight group-hover:border-midnight transition-all duration-200">
                  <solution.icon className="w-5 h-5 text-midnight group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-base font-medium text-midnight mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
