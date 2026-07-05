'use client';

import { motion } from 'framer-motion';
import { X, Check, Clock, Users, TrendingUp, Target, DollarSign } from 'lucide-react';

const withoutIndus = [
  'Searching suppliers',
  'Factory verification',
  'Quality follow-ups',
  'Managing logistics',
  'Multiple vendors',
  'Production tracking',
];

const withIndus = [
  'One sourcing request',
  'Verified suppliers',
  'Dedicated project manager',
  'Production monitoring',
  'Quality assurance',
  'Single platform',
];

const moreTimeFor = [
  { icon: Lightbulb, label: 'Product Development' },
  { icon: Users, label: 'Marketing' },
  { icon: TrendingUp, label: 'Sales' },
  { icon: Target, label: 'Customer Success' },
  { icon: DollarSign, label: 'Business Growth' },
];

function Lightbulb() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.1 1.5-3.5A6 6 0 0 0 6 8c0 1 .4 2 1 2.8.6.8 1 1.5 1 2.2V14a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1z" />
      <path d="M9.5 21h5M10 18h4" />
    </svg>
  );
}

export function TimeSavingsSection() {
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
            Time Efficiency
          </span>
          <h2 className="mt-4 text-heading-xl font-heading font-semibold text-midnight tracking-tight">
            Spend Less Time Managing Suppliers.
            <span className="block text-gray-400">Spend More Time Growing Your Business.</span>
          </h2>
        </motion.div>

        {/* Main highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="bg-midnight rounded-2xl p-8 lg:p-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Clock className="w-5 h-5 text-silver" />
              <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Time Savings</span>
            </div>
            <p className="text-2xl sm:text-3xl font-heading font-semibold text-white leading-tight">
              Significantly Reduce Time Spent Managing Sourcing
            </p>
          </div>
        </motion.div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto mb-16">
          {/* Without */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
                Without IndUS Bridge
              </h3>
              <ul className="space-y-3">
                {withoutIndus.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                      <X className="w-3 h-3 text-red-400" />
                    </div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* With */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-soft">
              <h3 className="text-sm font-medium text-midnight uppercase tracking-wider mb-6">
                With IndUS Bridge
              </h3>
              <ul className="space-y-3">
                {withIndus.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-sm text-midnight font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* More time for */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-gray-400 mb-6">More time for:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {moreTimeFor.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full"
              >
                <Check className="w-3.5 h-3.5 text-midnight" />
                <span className="text-sm text-midnight">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
