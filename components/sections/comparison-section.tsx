'use client';

import { motion } from 'framer-motion';
import { Check, Minus, ArrowRight } from 'lucide-react';

const comparisonData = [
  { feature: 'Verified manufacturers', us: true, alibaba: false, agent: 'partial' },
  { feature: 'On-site factory audits', us: true, alibaba: false, agent: 'partial' },
  { feature: 'Quality inspections', us: true, alibaba: false, agent: true },
  { feature: 'Production monitoring', us: true, alibaba: false, agent: false },
  { feature: 'Single point of contact', us: true, alibaba: false, agent: 'partial' },
  { feature: 'Transparent pricing', us: true, alibaba: false, agent: false },
  { feature: 'Logistics coordination', us: true, alibaba: false, agent: 'partial' },
  { feature: 'USA-based support', us: true, alibaba: false, agent: false },
];

function StatusIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="w-4 h-4 text-white" />;
  }
  if (value === 'partial') {
    return <Minus className="w-4 h-4 text-gray-400" />;
  }
  return <XIcon />;
}

function XIcon() {
  return (
    <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export function ComparisonSection() {
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
            The Difference
          </span>
          <h2 className="mt-4 text-heading-xl font-heading font-semibold text-midnight tracking-tight">
            Why Businesses Choose IndUS Bridge
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Anyone can connect you with suppliers. Very few take complete ownership from supplier discovery to warehouse delivery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white rounded-2xl border border-gray-100 shadow-soft overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-100">
              <div className="p-4 text-left">
                <span className="text-sm font-medium text-gray-500">Feature</span>
              </div>
              <div className="p-4 text-center border-l border-gray-100">
                <span className="text-sm font-medium text-midnight">IndUS Bridge</span>
              </div>
              <div className="p-4 text-center border-l border-gray-100">
                <span className="text-sm font-medium text-gray-500">Alibaba</span>
              </div>
              <div className="p-4 text-center border-l border-gray-100">
                <span className="text-sm font-medium text-gray-500">Traditional Agent</span>
              </div>
            </div>

            {/* Table Body */}
            {comparisonData.map((row, index) => (
              <div
                key={row.feature}
                className="grid grid-cols-4 border-b border-gray-50 last:border-b-0"
              >
                <div className="p-4 text-left">
                  <span className="text-sm text-gray-600">{row.feature}</span>
                </div>
                <div className="p-4 flex items-center justify-center border-l border-gray-50 bg-midnight/5">
                  <div className="w-6 h-6 rounded-full bg-midnight flex items-center justify-center">
                    <StatusIcon value={row.us} />
                  </div>
                </div>
                <div className="p-4 flex items-center justify-center border-l border-gray-50">
                  <StatusIcon value={row.alibaba} />
                </div>
                <div className="p-4 flex items-center justify-center border-l border-gray-50">
                  <StatusIcon value={row.agent} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Result highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm text-gray-400 mb-4">
            <span>The result?</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-base text-midnight font-medium">
              <Check className="w-4 h-4" />
              Less operational work
            </div>
            <div className="flex items-center justify-center gap-2 text-base text-midnight font-medium">
              <Check className="w-4 h-4" />
              Lower supplier risk
            </div>
            <div className="flex items-center justify-center gap-2 text-base text-midnight font-medium">
              <Check className="w-4 h-4" />
              More time to grow your business
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
