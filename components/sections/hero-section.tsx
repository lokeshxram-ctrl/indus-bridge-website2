'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white">
      {/* Animated background - India to USA trade route */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />

        {/* Animated dots representing trade route */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Dotted path from India (right) to USA (left) */}
          <motion.path
            d="M 85 55 Q 55 45 30 52"
            fill="none"
            stroke="url(#routeGradient)"
            strokeWidth="0.15"
            strokeDasharray="0.3 0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id="routeGradient" x1="85%" y1="55%" x2="30%" y2="52%">
              <stop offset="0%" stopColor="#C0C7D1" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#A8B2BE" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#C0C7D1" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-200 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(to right, #0B1F3A 1px, transparent 1px),
                           linear-gradient(to bottom, #0B1F3A 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="text-display-lg font-heading font-bold text-midnight tracking-tight">
                1 Portal
              </span>
            </motion.div>

            {/* Infinity symbol */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <span className="text-4xl font-light text-silver">
                &infin;
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-display lg:text-display-lg font-heading font-semibold text-midnight tracking-tight mb-4 leading-none"
            >
              Infinite Import Solutions
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12"
            >
              Source, inspect, manage quality, and deliver products from verified Indian manufacturers—all through one trusted platform.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                asChild
                className="bg-midnight hover:bg-midnight-50 text-white h-12 px-8 rounded-xl font-medium shadow-soft transition-all duration-200 hover:shadow-soft-md"
              >
                <Link href="/request-quote">
                  Request a Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-gray-200 text-midnight hover:bg-gray-50 hover:border-gray-300 h-12 px-8 rounded-xl font-medium transition-all duration-200"
              >
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
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
