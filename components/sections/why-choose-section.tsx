'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Building2, Users, DollarSign, Clock, Headphones } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Verified Manufacturers',
    description: 'Every supplier undergoes rigorous vetting and ongoing compliance monitoring.',
  },
  {
    icon: Building2,
    title: 'On-site Audits',
    description: 'Thorough facility inspections covering production, quality systems, and compliance.',
  },
  {
    icon: Users,
    title: 'Dedicated Quality Team',
    description: 'Experienced inspectors stationed across India for real-time quality oversight.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Clear, upfront costs with no hidden fees. Know exactly what you&apos;re paying for.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Streamlined processes and strong supplier relationships for faster lead times.',
  },
  {
    icon: Headphones,
    title: 'End-to-End Support',
    description: 'Your dedicated account manager handles everything from sourcing to delivery.',
  },
];

export function WhyChooseSection() {
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
            Why IndUS Bridge
          </span>
          <h2 className="mt-4 text-heading-xl font-heading font-semibold text-midnight tracking-tight">
            Your trusted sourcing partner
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-lg mx-auto">
            We combine deep local expertise with rigorous quality standards.
          </p>
        </motion.div>

        <div className="grid-card-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-soft hover:shadow-soft-md hover:border-gray-200 transition-all duration-200 h-full">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-4 group-hover:bg-midnight group-hover:border-midnight transition-all duration-200">
                  <feature.icon className="w-5 h-5 text-midnight group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-base font-medium text-midnight mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
