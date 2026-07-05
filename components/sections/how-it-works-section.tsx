'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Search, Building2, CheckCircle, Ship, Package } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell us what you need',
    description: 'Share your product specifications, quantities, and quality requirements.',
  },
  {
    number: '02',
    icon: Search,
    title: 'We find verified manufacturers',
    description: 'Our team matches your needs with pre-vetted suppliers from our network.',
  },
  {
    number: '03',
    icon: Building2,
    title: 'Factory audit',
    description: 'We conduct comprehensive on-site audits to verify capabilities.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Quality inspection',
    description: 'Multi-stage inspections ensure products meet your exact specifications.',
  },
  {
    number: '05',
    icon: Ship,
    title: 'Logistics',
    description: 'We handle freight, customs, and documentation seamlessly.',
  },
  {
    number: '06',
    icon: Package,
    title: 'Delivery',
    description: 'Products arrive at your warehouse, ready for distribution.',
  },
];

export function HowItWorksSection() {
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
            How It Works
          </span>
          <h2 className="mt-4 text-heading-xl font-heading font-semibold text-midnight tracking-tight">
            Six steps to successful sourcing
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-lg mx-auto">
            A streamlined process that takes the complexity out of international sourcing.
          </p>
        </motion.div>

        <div className="grid-card-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
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
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-midnight group-hover:border-midnight transition-all duration-200">
                    <step.icon className="w-5 h-5 text-midnight group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-base font-medium text-midnight">
                        {step.title}
                      </h3>
                      <span className="text-xs text-gray-300 font-medium">
                        {step.number}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
