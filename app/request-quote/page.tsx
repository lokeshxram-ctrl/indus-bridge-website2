'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Send, CheckCircle, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const productCategories = [
  'Textiles & Fabrics',
  'Apparel & Garments',
  'Footwear & Leather Goods',
  'Home Textiles',
  'Accessories',
  'Technical Textiles',
  'Other',
];

const destinationCountries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Germany',
  'France',
  'Australia',
  'Other',
];

const quantities = [
  'Under 1,000 units',
  '1,000 - 5,000 units',
  '5,000 - 10,000 units',
  '10,000 - 50,000 units',
  '50,000 - 100,000 units',
  'Over 100,000 units',
];

export default function RequestQuotePage() {
  const [formState, setFormState] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    productCategory: '',
    quantity: '',
    destinationCountry: '',
    targetPrice: '',
    additionalRequirements: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-8 bg-gradient-to-b from-navy-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm font-semibold text-navy-600 tracking-wide uppercase">
                Request a Quote
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-navy-900">
                Tell Us About Your Project
              </h1>
              <p className="mt-6 text-lg text-navy-600 leading-relaxed">
                Share your product requirements and we&apos;ll provide a comprehensive
                quote within 48 hours. Our team will analyze your needs and match you
                with the right suppliers.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border border-navy-100 rounded-2xl shadow-sm overflow-hidden">
                {isSubmitted ? (
                  <div className="text-center py-16 px-8">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-navy-900 mb-4">
                      Quote Request Submitted!
                    </h2>
                    <p className="text-navy-600 max-w-md mx-auto mb-8">
                      Thank you for your interest. Our team will review your
                      requirements and get back to you with a detailed quote within
                      48 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormState({
                            fullName: '',
                            companyName: '',
                            businessEmail: '',
                            phone: '',
                            productCategory: '',
                            quantity: '',
                            destinationCountry: '',
                            targetPrice: '',
                            additionalRequirements: '',
                          });
                        }}
                        variant="outline"
                        className="border-navy-200"
                      >
                        Submit Another Request
                      </Button>
                      <Button asChild className="bg-navy-900 hover:bg-navy-800">
                        <a href="/">Return Home</a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="p-8 border-b border-navy-100">
                      <h2 className="text-xl font-semibold text-navy-900 mb-1">
                        Contact Information
                      </h2>
                      <p className="text-sm text-navy-500">
                        So we can get back to you with your quote.
                      </p>
                    </div>

                    <div className="p-8 space-y-6 border-b border-navy-100">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="fullName"
                            className="block text-sm font-medium text-navy-700 mb-2"
                          >
                            Full Name *
                          </label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formState.fullName}
                            onChange={handleChange}
                            required
                            placeholder="John Smith"
                            className="border-navy-200 focus:border-navy-500"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="companyName"
                            className="block text-sm font-medium text-navy-700 mb-2"
                          >
                            Company Name *
                          </label>
                          <Input
                            id="companyName"
                            name="companyName"
                            value={formState.companyName}
                            onChange={handleChange}
                            required
                            placeholder="Acme Corp"
                            className="border-navy-200 focus:border-navy-500"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="businessEmail"
                            className="block text-sm font-medium text-navy-700 mb-2"
                          >
                            Business Email *
                          </label>
                          <Input
                            id="businessEmail"
                            name="businessEmail"
                            type="email"
                            value={formState.businessEmail}
                            onChange={handleChange}
                            required
                            placeholder="john@company.com"
                            className="border-navy-200 focus:border-navy-500"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-navy-700 mb-2"
                          >
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
                            className="border-navy-200 focus:border-navy-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="p-8 border-b border-navy-100">
                      <h2 className="text-xl font-semibold text-navy-900 mb-1">
                        Product Requirements
                      </h2>
                      <p className="text-sm text-navy-500">
                        Help us understand what you&apos;re looking for.
                      </p>
                    </div>

                    <div className="p-8 space-y-6 border-b border-navy-100">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="productCategory"
                            className="block text-sm font-medium text-navy-700 mb-2"
                          >
                            Product Category *
                          </label>
                          <select
                            id="productCategory"
                            name="productCategory"
                            value={formState.productCategory}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-navy-200 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent text-navy-900 bg-white"
                          >
                            <option value="">Select a category</option>
                            {productCategories.map((category) => (
                              <option key={category} value={category}>
                                {category}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="quantity"
                            className="block text-sm font-medium text-navy-700 mb-2"
                          >
                            Quantity *
                          </label>
                          <select
                            id="quantity"
                            name="quantity"
                            value={formState.quantity}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-navy-200 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent text-navy-900 bg-white"
                          >
                            <option value="">Select quantity range</option>
                            {quantities.map((qty) => (
                              <option key={qty} value={qty}>
                                {qty}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="destinationCountry"
                            className="block text-sm font-medium text-navy-700 mb-2"
                          >
                            Destination Country *
                          </label>
                          <select
                            id="destinationCountry"
                            name="destinationCountry"
                            value={formState.destinationCountry}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-navy-200 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent text-navy-900 bg-white"
                          >
                            <option value="">Select country</option>
                            {destinationCountries.map((country) => (
                              <option key={country} value={country}>
                                {country}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="targetPrice"
                            className="block text-sm font-medium text-navy-700 mb-2"
                          >
                            Target Price (per unit)
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-500">
                              $
                            </span>
                            <Input
                              id="targetPrice"
                              name="targetPrice"
                              type="text"
                              value={formState.targetPrice}
                              onChange={handleChange}
                              placeholder="0.00"
                              className="pl-8 border-navy-200 focus:border-navy-500"
                            />
                          </div>
                          <p className="mt-1 text-xs text-navy-500">
                            Optional: helps us match suitable suppliers
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 space-y-6">
                      <div>
                        <label
                          htmlFor="additionalRequirements"
                          className="block text-sm font-medium text-navy-700 mb-2"
                        >
                          Additional Requirements
                        </label>
                        <Textarea
                          id="additionalRequirements"
                          name="additionalRequirements"
                          value={formState.additionalRequirements}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Describe your product specifications, materials, certifications needed, delivery timeline, or any other requirements..."
                          className="border-navy-200 focus:border-navy-500 resize-none"
                        />
                        <p className="mt-2 text-xs text-navy-500">
                          Include details like materials, dimensions, colors,
                          certifications (e.g., OEKO-TEX, GOTS), packaging
                          requirements, etc.
                        </p>
                      </div>

                      <div className="bg-navy-50 rounded-lg p-4 flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-navy-500 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-navy-600">
                          <strong className="text-navy-700">What happens next?</strong>
                          <ul className="mt-2 space-y-1 list-disc list-inside">
                            <li>Our team reviews your requirements within 24 hours</li>
                            <li>We identify suitable suppliers from our network</li>
                            <li>You receive a detailed quote within 48 hours</li>
                            <li>Optional: Schedule a consultation to discuss further</li>
                          </ul>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-navy-900 hover:bg-navy-800"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">⏳</span>
                            Processing Your Request...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Submit Quote Request
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-center text-navy-500">
                        By submitting this form, you agree to our{' '}
                        <a href="/privacy" className="underline hover:text-navy-700">
                          Privacy Policy
                        </a>{' '}
                        and{' '}
                        <a href="/terms" className="underline hover:text-navy-700">
                          Terms of Service
                        </a>
                        .
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
