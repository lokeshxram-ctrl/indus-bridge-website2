'use client';

import { motion } from 'framer-motion';
import { Search, Factory, ShieldAlert, MessageCircleWarning, DollarSign, Truck } from 'lucide-react';

const challenges = [
  {
    icon: Search,
    title: 'Finding Reliable Suppliers',
    description: 'Weeks spent searching directories, attending trade shows, and vetting manufacturers with no guarantee of quality.',
  },
  {
    icon: Factory,
    title: 'Verifying Factory Capabilities',
    description: 'Uncertainty about production capacity, quality standards, and whether suppliers can actually deliver on promises.',
  },
  {
    icon: ShieldAlert,
    title: 'Quality Control Risks',
    description: 'Products arriving with defects, wrong specifications, or quality issues discovered only after shipment.',
  },
  {
    icon: MessageCircleWarning,
    title: 'Communication Delays',
    description: 'Time zone gaps, language barriers, and slow response times that extend timelines and create misunderstandings.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Unexpected fees, price increases mid-production, and unclear total costs until products arrive.',
  },
  {
    icon: Truck,
    title: 'Managing Logistics',
    description: 'Coordinating freight, customs, and delivery across multiple vendors with no single point of accountability.',
  },
];

export function ChallengesSection() {
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
            The Challenge
          </span>
          <h2 className="mt-4 text-heading-xl font-heading font-semibold text-midnight tracking-tight">
            Importing Shouldn&apos;t Be This Difficult.
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Global businesses often spend months searching for reliable suppliers, managing quality issues, and coordinating multiple vendors before products even reach production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
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
                  <challenge.icon className="w-5 h-5 text-midnight group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-base font-medium text-midnight mb-2">
                  {challenge.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
