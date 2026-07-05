'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does IndUS Bridge verify suppliers?',
    answer:
      'Every supplier undergoes a comprehensive vetting process including background verification, financial health checks, on-site factory audits, quality system evaluation, and social compliance assessment. We also conduct ongoing monitoring to ensure continued compliance.',
  },
  {
    question: 'What industries do you source from?',
    answer:
      'We currently specialize in textiles, apparel, and footwear with over 500 verified suppliers. We are expanding into electronics (Q1 2025) and pharmaceuticals (Q2 2025). Our supplier network spans India\'s major manufacturing hubs.',
  },
  {
    question: 'How long does the sourcing process typically take?',
    answer:
      'The timeline varies by product complexity and order size. Supplier identification and verification typically takes 2-3 weeks. Production timelines depend on the manufacturer and product specifications. We provide detailed timelines during the quoting process.',
  },
  {
    question: 'What quality inspection standards do you follow?',
    answer:
      'We follow AQL (Acceptable Quality Limit) sampling standards and offer multiple inspection stages: pre-production, during production, final random inspection, and container loading supervision. All inspections are documented with detailed reports and photos.',
  },
  {
    question: 'Do you handle customs and import documentation?',
    answer:
      'Yes, we manage all documentation including commercial invoices, packing lists, certificates of origin, and customs filings. Our logistics team coordinates with freight forwarders to ensure smooth customs clearance.',
  },
  {
    question: 'What is the minimum order quantity (MOQ)?',
    answer:
      'MOQ varies by supplier and product category. We work with manufacturers of different scales and can often find options that match your volume requirements. During our consultation, we discuss your specific needs and match you with appropriate suppliers.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            FAQ
          </span>
          <h2 className="mt-4 text-heading-xl font-heading font-semibold text-midnight tracking-tight">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left bg-white rounded-xl border border-gray-100 shadow-soft hover:shadow-soft-md hover:border-gray-200 transition-all duration-200"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-medium text-midnight">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 text-sm text-gray-500 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
