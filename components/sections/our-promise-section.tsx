'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, MessageSquare, ClipboardCheck, GitBranch, Truck, Handshake } from 'lucide-react';

const promises = [
  {
    icon: BadgeCheck,
    title: 'Verified Suppliers',
    description: 'All suppliers in our network have passed our comprehensive verification process.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    description: 'Real-time updates and clear reporting at every stage of your order.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Before Shipping',
    description: 'Every shipment undergoes rigorous inspection before leaving the factory.',
  },
  {
    icon: GitBranch,
    title: 'End-to-End Coordination',
    description: 'We manage every touchpoint from supplier selection to final delivery.',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description: 'On-time delivery with full tracking visibility and proactive issue resolution.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnerships',
    description: 'We build lasting relationships that grow your sourcing capabilities over time.',
  },
];

export function OurPromiseSection() {
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
            Our Promise
          </span>
          <h2 className="mt-4 text-heading-xl font-heading font-semibold text-midnight tracking-tight">
            One Partner.{' '}
            <span className="block sm:inline">Every Stage Covered.</span>
          </h2>
        </motion.div>

        <div className="grid-card-3">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
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
                  <promise.icon className="w-5 h-5 text-midnight group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-base font-medium text-midnight mb-2">
                  {promise.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {promise.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
