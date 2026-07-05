'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, MessageSquare, Eye, Monitor, User, TrendingDown } from 'lucide-react';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Verified Manufacturers',
    description: 'Every supplier undergoes comprehensive verification before joining our network. No exceptions.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    description: 'Real-time updates and clear documentation at every step. You always know where your order stands.',
  },
  {
    icon: Eye,
    title: 'Dedicated Quality Control',
    description: 'Multi-stage inspections by experienced quality professionals stationed in India.',
  },
  {
    icon: Monitor,
    title: 'Production Monitoring',
    description: 'We track production progress daily and flag issues before they become delays.',
  },
  {
    icon: User,
    title: 'One Point of Contact',
    description: 'Your account manager handles everything. No supplier handoffs or communication gaps.',
  },
  {
    icon: TrendingDown,
    title: 'Reduced Supplier Risk',
    description: 'Our verification process eliminates bad suppliers before they can cost you money.',
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
            Why Businesses Choose IndUS Bridge
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Importing shouldn&apos;t be risky. We eliminate uncertainty by managing every stage of your sourcing journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
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
                  <benefit.icon className="w-5 h-5 text-midnight group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-base font-medium text-midnight mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
