'use client';

import { motion } from 'framer-motion';
import { Clock, Shield, CheckCircle, Rocket } from 'lucide-react';

const outcomes = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Reduce supplier coordination and sourcing effort.',
  },
  {
    icon: Shield,
    title: 'Reduce Risk',
    description: 'Work only with verified manufacturers.',
  },
  {
    icon: CheckCircle,
    title: 'Improve Quality',
    description: 'Independent inspections before shipment.',
  },
  {
    icon: Rocket,
    title: 'Scale Faster',
    description: 'Launch products quicker and focus on business growth.',
  },
];

export function BusinessOutcomesSection() {
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
            Business Outcomes
          </span>
          <h2 className="mt-4 text-heading-xl font-heading font-semibold text-midnight tracking-tight">
            What You Gain With IndUS Bridge
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
              }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100 hover:border-gray-200 transition-all duration-200 h-full text-center">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center mx-auto mb-5 group-hover:bg-midnight group-hover:border-midnight transition-all duration-200">
                  <outcome.icon className="w-5 h-5 text-midnight group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-base font-medium text-midnight mb-2">
                  {outcome.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
