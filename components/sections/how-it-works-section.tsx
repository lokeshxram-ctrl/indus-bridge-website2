'use client';

import { motion } from 'framer-motion';
import { FileQuestion, Search, Building2, PackageCheck, Factory, Eye, Ship, Warehouse } from 'lucide-react';

const timelineSteps = [
  { icon: FileQuestion, label: 'Requirement' },
  { icon: Search, label: 'Supplier Discovery' },
  { icon: Building2, label: 'Factory Audit' },
  { icon: PackageCheck, label: 'Sampling' },
  { icon: Factory, label: 'Production' },
  { icon: Eye, label: 'Inspection' },
  { icon: Ship, label: 'Shipping' },
  { icon: Warehouse, label: 'Warehouse Delivery' },
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
            From requirement to warehouse delivery
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-lg mx-auto">
            A structured process that keeps you informed at every milestone.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative max-w-6xl mx-auto">
            {/* Connection line */}
            <div className="absolute top-8 left-8 right-8 h-0.5 bg-gray-200" />
            <div className="absolute top-8 left-8 h-0.5 bg-midnight" style={{ width: 'calc(100% - 16px)' }} />

            <div className="grid grid-cols-8 gap-2">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.4,
                  }}
                  className="relative text-center"
                >
                  {/* Node */}
                  <div className="relative z-10 w-16 h-16 mx-auto bg-white rounded-xl border-2 border-gray-100 flex items-center justify-center mb-4 group-hover:border-midnight transition-all duration-200">
                    <step.icon className="w-5 h-5 text-midnight" />
                  </div>
                  {/* Label */}
                  <span className="text-xs text-gray-600 font-medium leading-tight block px-1">
                    {step.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="relative max-w-sm mx-auto">
            {/* Connection line */}
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-200" />

            <div className="space-y-6">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.4,
                  }}
                  className="relative flex items-start gap-4"
                >
                  <div className="relative z-10 w-12 h-12 bg-white rounded-xl border border-gray-100 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-midnight" />
                  </div>
                  <div className="pt-2">
                    <span className="text-sm font-medium text-midnight">{step.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
