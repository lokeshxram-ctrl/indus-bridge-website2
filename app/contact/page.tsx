'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

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
                Contact Us
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-navy-900">
                Let&apos;s Start a Conversation
              </h1>
              <p className="mt-6 text-lg text-navy-600 leading-relaxed">
                Have questions about sourcing from India? Ready to discuss your
                product requirements? Our team is here to help you navigate the
                process.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-navy-600 mb-8">
                    Whether you&apos;re exploring India sourcing for the first time or
                    looking to optimize your current supply chain, we&apos;d love to
                    hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-navy-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Email</h3>
                      <a
                        href="mailto:contact@indusbridge.com"
                        className="text-navy-600 hover:text-navy-900 transition-colors"
                      >
                        contact@indusbridge.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-navy-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Phone</h3>
                      <a
                        href="tel:+1-555-123-4567"
                        className="text-navy-600 hover:text-navy-900 transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-navy-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Address</h3>
                      <address className="text-navy-600 not-italic">
                        123 Commerce Street, Suite 400
                        <br />
                        New York, NY 10001
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-navy-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">LinkedIn</h3>
                      <a
                        href="https://linkedin.com/company/indusbridge"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy-600 hover:text-navy-900 transition-colors"
                      >
                        linkedin.com/company/indusbridge
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-navy-100">
                  <h3 className="font-semibold text-navy-900 mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm text-navy-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden h-[200px] bg-navy-100">
                  <img
                    src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="New York office"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="bg-navy-50/30 rounded-xl p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-navy-600 mb-6">
                        Thank you for reaching out. We&apos;ll get back to you within
                        24 hours.
                      </p>
                      <Button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormState({
                            name: '',
                            email: '',
                            company: '',
                            phone: '',
                            subject: '',
                            message: '',
                          });
                        }}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-navy-900 mb-6">
                        Send Us a Message
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-navy-700 mb-2"
                            >
                              Full Name *
                            </label>
                            <Input
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              required
                              placeholder="John Smith"
                              className="bg-white border-navy-200 focus:border-navy-500"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-navy-700 mb-2"
                            >
                              Business Email *
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formState.email}
                              onChange={handleChange}
                              required
                              placeholder="john@company.com"
                              className="bg-white border-navy-200 focus:border-navy-500"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="company"
                              className="block text-sm font-medium text-navy-700 mb-2"
                            >
                              Company Name *
                            </label>
                            <Input
                              id="company"
                              name="company"
                              value={formState.company}
                              onChange={handleChange}
                              required
                              placeholder="Acme Corp"
                              className="bg-white border-navy-200 focus:border-navy-500"
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
                              className="bg-white border-navy-200 focus:border-navy-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-navy-700 mb-2"
                          >
                            Subject *
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-white border border-navy-200 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent text-navy-900"
                          >
                            <option value="">Select a subject</option>
                            <option value="sourcing">Supplier Sourcing Inquiry</option>
                            <option value="audit">Factory Audit Request</option>
                            <option value="inspection">Quality Inspection</option>
                            <option value="logistics">Logistics Coordination</option>
                            <option value="partnership">Partnership Inquiry</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-navy-700 mb-2"
                          >
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="Tell us about your sourcing needs..."
                            className="bg-white border-navy-200 focus:border-navy-500 resize-none"
                          />
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
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
