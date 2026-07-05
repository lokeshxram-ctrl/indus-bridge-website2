import Link from 'next/link';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Supplier Sourcing', href: '/services#supplier-sourcing' },
    { name: 'Factory Audits', href: '/services#factory-audits' },
    { name: 'Quality Inspection', href: '/services#quality-inspection' },
    { name: 'Logistics Management', href: '/services#logistics-management' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Industries', href: '/industries' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
  ],
  support: [
    { name: 'Contact', href: '/contact' },
    { name: 'Request a Quote', href: '/request-quote' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 bg-midnight rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xs tracking-tight">IB</span>
              </div>
              <span className="font-heading font-semibold text-base text-midnight tracking-tight">
                IndUS Bridge
              </span>
            </Link>
            <p className="text-sm text-gray-500 mb-6 max-w-sm leading-relaxed">
              Your trusted partner for sourcing quality products from verified Indian manufacturers.
            </p>
            <div className="space-y-2.5">
              <a
                href="mailto:contact@indusbridge.com"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-midnight transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contact@indusbridge.com</span>
              </a>
              <a
                href="tel:+1-555-123-4567"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-midnight transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  123 Commerce Street, Suite 400
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-medium text-midnight uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-midnight transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-medium text-midnight uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-midnight transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-medium text-midnight uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-midnight transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} IndUS Bridge. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-xs text-gray-400 hover:text-midnight transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-gray-400 hover:text-midnight transition-colors"
              >
                Terms of Service
              </Link>
              <a
                href="https://linkedin.com/company/indusbridge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-midnight transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
