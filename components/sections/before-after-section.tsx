'use client';

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const beforeItems = [
  'Weeks spent finding suppliers',
  'Multiple factory calls',
  'Quality uncertainty',
  'Managing logistics separately',
  'Delayed communication',
  'High operational workload',
];

const afterItems = [
  'Verified suppliers in days',
  'One dedicated partner',
  'Independent quality inspections',
  'One platform',
  'Transparent communication',
  'More time focused on growth',
];

export function BeforeAfterSection() {
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
            The Transformation
          </span>
          <h2 className="mt-4 text-heading-xl font-heading font-semibold text-midnight tracking-tight">
            Your Business Before & After IndUS Bridge
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-soft">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                  <X className="w-4 h-4 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-400">Before</h3>
              </div>
              <ul className="space-y-4">
                {beforeItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                    <span className="text-sm text-gray-500">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-midnight rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white">After</h3>
              </div>
              <ul className="space-y-4">
                {afterItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-silver flex-shrink-0" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
