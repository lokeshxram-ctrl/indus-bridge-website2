'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, BadgeCheck, Eye, GitBranch, User, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Verified Suppliers',
    description: 'Every manufacturer undergoes comprehensive verification before joining our network.',
  },
  {
    icon: BadgeCheck,
    title: 'Verified Quality',
    description: 'Independent inspections at every stage ensure products meet your specifications.',
  },
  {
    icon: Eye,
    title: 'Complete Transparency',
    description: 'Real-time updates and detailed documentation at every milestone.',
  },
  {
    icon: GitBranch,
    title: 'End-to-End Ownership',
    description: 'We manage every touchpoint from supplier discovery to warehouse delivery.',
  },
  {
    icon: User,
    title: 'Single Point of Contact',
    description: 'One dedicated account manager handles all your sourcing needs.',
  },
  {
    icon: TrendingUp,
    title: 'Business Growth Focus',
    description: 'We handle the complexity so you can focus on scaling your business.',
  },
];

export function WhyChooseDarkSection() {
  return (
    <section className="py-24 lg:py-32 bg-midnight relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-midnight-50/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-silver/10 rounded-full blur-2xl" />
      </div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-silver uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-heading-xl font-heading font-semibold text-white tracking-tight">
            More Than a Sourcing Partner.
            <span className="block">Your Growth Partner.</span>
          </h2>
          <p className="mt-4 text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            We don&apos;t simply connect businesses with suppliers. We take complete ownership of your sourcing journey so you can focus on growth.
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
              <div className="bg-white/5 rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-200 h-full">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-white group-hover:border-white transition-all duration-200">
                  <benefit.icon className="w-5 h-5 text-white group-hover:text-midnight transition-colors duration-200" />
                </div>
                <h3 className="text-base font-medium text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlighted statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white/5 border border-white/10 rounded-xl px-8 py-5">
            <p className="text-lg text-white font-medium italic">
              &ldquo;Every hour spent managing suppliers is an hour not spent growing your business.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
