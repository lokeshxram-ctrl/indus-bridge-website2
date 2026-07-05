'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Package, Building2, Tag, Users, ShoppingCart } from 'lucide-react';

const customerTypes = [
  {
    icon: ShoppingBag,
    title: 'Retail Brands',
    description: 'Build your product line with verified manufacturers.',
  },
  {
    icon: Package,
    title: 'Importers',
    description: 'Streamline your supply chain with trusted suppliers.',
  },
  {
    icon: Building2,
    title: 'Wholesalers',
    description: 'Scale your inventory with consistent quality.',
  },
  {
    icon: Tag,
    title: 'Private Label Businesses',
    description: 'Create your branded products from concept to delivery.',
  },
  {
    icon: Users,
    title: 'Procurement Teams',
    description: 'Reduce sourcing complexity with one trusted partner.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Companies',
    description: 'Keep your inventory moving with reliable suppliers.',
  },
];

export function WhoWeHelpSection() {
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
            Who We Help
          </span>
          <h2 className="mt-4 text-heading-xl font-heading font-semibold text-midnight tracking-tight">
            Built for businesses that import
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-lg mx-auto">
            Whether you&apos;re launching your first product or scaling an established brand, we provide the infrastructure you need.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customerTypes.map((customer, index) => (
            <motion.div
              key={customer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100 hover:border-gray-200 transition-all duration-200 h-full">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-4 group-hover:bg-midnight group-hover:border-midnight transition-all duration-200">
                  <customer.icon className="w-5 h-5 text-midnight group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-base font-medium text-midnight mb-2">
                  {customer.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {customer.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
