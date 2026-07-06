'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const trustBadges = [
  'Verified Suppliers',
  'Verified Quality',
  'Guaranteed Transparency',
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />

        {/* Animated trade route path */}
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <motion.path
            d="M 900 350 Q 700 300 500 400 Q 300 500 200 350"
            fill="none"
            stroke="#C0C7D1"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: 'easeOut' }}
          />
          {/* Origin point */}
          <motion.circle
            cx="900"
            cy="350"
            r="4"
            fill="#0B1F3A"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
          {/* Destination point */}
          <motion.circle
            cx="200"
            cy="350"
            r="4"
            fill="#0B1F3A"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          />
        </svg>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-200 rounded-full"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
            }}
            animate={{
              y: [-8, 8, -8],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.008}"
          style={{
            backgroundImage: `linear-gradient(to right, #0B1F3A 1px, transparent 0.5x),
                             linear-gradient(to bottom, #0B1F3A 1px, transparent 0.5px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Portal concept */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-4"
            >
              <span className="text-display-lg font-heading font-bold text-midnight tracking-tight">
                ONE PORTAL
              </span>
            </motion.div>

            {/* Infinity symbol */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4"
            >
              <span className="text-5xl font-light text-silver">&infin;</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-display lg:text-display-lg font-heading font-semibold text-midnight tracking-tight mb-6 leading-none"
            >
              INFINITE IMPORT SOLUTIONS
            </motion.h1>

            {/* Value proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl sm:text-2xl font-medium text-midnight mb-8"
            >
              Source from India Without the Risk.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10"
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.55 + index * 0.08, duration: 0.3 }}
                  className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full"
                >
                  <Check className="w-4 h-4 text-midnight" />
                  <span className="text-sm font-medium text-midnight">{badge}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Supporting paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12"
            >
              Focus on growing your business while we manage your entire sourcing and supply chain—from supplier discovery to warehouse delivery.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                asChild
                className="bg-midnight hover:bg-midnight-50 text-white h-12 px-8 rounded-xl font-medium shadow-soft transition-all duration-200 hover:shadow-soft-md"
              >
                <Link href="/request-quote">
                  Get Your Free Sourcing Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-gray-200 text-midnight hover:bg-gray-50 hover:border-gray-300 h-12 px-8 rounded-xl font-medium transition-all duration-200"
              >
                <Link href="/request-quote">Request a Quote</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border border-gray-200 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-gray-300 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
