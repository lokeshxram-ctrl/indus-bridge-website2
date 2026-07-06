'use client';

import { motion } from 'framer-motion';
import { FileQuestion, Search, Building2, PackageCheck, Truck, Warehouse } from 'lucide-react';

const timelineSteps = [
  { icon: FileQuestion, label: 'Tell Us What You Need', number: '01' },
  { icon: Search, label: 'Supplier Discovery', number: '02' },
  { icon: Building2, label: 'Factory Verification', number: '03' },
  { icon: PackageCheck, label: 'Quality Inspection', number: '04' },
  { icon: Truck, label: 'Logistics', number: '05' },
  { icon: Warehouse, label: 'Warehouse Delivery', number: '06' },
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
            Six Steps to Successful Sourcing
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-lg mx-auto">
            A structured process that keeps you informed at every milestone.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative max-w-5xl mx-auto">
            {/* Connection line */}
            <div className="absolute top-10 left-10 right-10 h-0.5 bg-gray-200" />

            <div className="grid grid-cols-6 gap-4">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                  }}
                  className="relative text-center"
                >
                  {/* Node */}
                  <div className="relative z-10 w-20 h-20 mx-auto bg-white rounded-2xl border border-gray-200 shadow-soft flex items-center justify-center mb-5 hover:border-gray-300 hover:shadow-soft-md transition-all duration-200">
                    <div className="flex flex-col items-center gap-1">
                      <step.icon className="w-5 h-5 text-midnight" />
                      <span className="text-xs font-medium text-gray-400">{step.number}</span>
                    </div>
                  </div>
                  {/* Label */}
                  <span className="text-sm text-gray-600 font-medium leading-tight block px-2">
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
            <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gray-200" />

            <div className="space-y-6">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.4,
                  }}
                  className="relative flex items-start gap-4"
                >
                  <div className="relative z-10 w-16 h-16 bg-white rounded-xl border border-gray-100 shadow-soft flex items-center justify-center flex-shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <step.icon className="w-5 h-5 text-midnight" />
                      <span className="text-xs font-medium text-gray-400">{step.number}</span>
                    </div>
                  </div>
                  <div className="pt-4">
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
