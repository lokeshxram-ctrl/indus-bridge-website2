'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-midnight relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-midnight-50/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-silver/10 rounded-full blur-2xl" />
      </div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          <span className="text-xs font-medium text-silver uppercase tracking-wider">
            Get Started
          </span>
          <h2 className="mt-4 text-heading-xl font-heading font-semibold text-white tracking-tight">
            Ready to source with confidence?
          </h2>
          <p className="mt-6 text-base text-gray-400 leading-relaxed mb-10">
            Businesses trust IndUS Bridge because we verify suppliers, inspect quality, and manage logistics—eliminating the risk from international sourcing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-white text-midnight hover:bg-gray-100 h-12 px-8 rounded-xl font-medium shadow-soft transition-all duration-200"
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
              className="border-gray-600 text-gray-300 hover:bg-white/5 hover:border-gray-500 h-12 px-8 rounded-xl font-medium transition-all duration-200"
            >
              <Link href="/contact">Talk to a Sourcing Expert</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
