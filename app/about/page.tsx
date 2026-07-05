import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/sections/cta-section';
import { CheckCircle, Target, Eye, Heart, Users, Globe, Award, ShieldCheck } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: 'Trust & Transparency',
    description:
      'We believe in complete transparency with our clients. Every supplier, every audit, every inspection—we share everything.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description:
      'Quality isn\'t negotiable. We hold our suppliers to the highest standards and never compromise on product integrity.',
  },
  {
    icon: Users,
    title: 'Partnership Mindset',
    description:
      'We\'re not just a service provider—we\'re your extended team. Your success is our success, and we act accordingly.',
  },
  {
    icon: Globe,
    title: 'Bridging Cultures',
    description:
      'We bridge more than markets. Our team navigates cultural and business practices to create lasting partnerships.',
  },
];

const leadership = [
  {
    name: 'Rajiv Sharma',
    role: 'Founder & CEO',
    bio: 'Former supply chain executive with 20+ years in US-India trade. Founded IndUS Bridge to simplify cross-border sourcing.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Chief Operations Officer',
    bio: 'Operations expert from Flexport and Maersk. Oversees our inspection and logistics networks across India.',
    image: 'https://images.pexels.com/photos/7749090/pexels-photo-7749090.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'Priya Patel',
    role: 'Head of Quality Assurance',
    bio: '15 years in quality management at major apparel brands. Leads our inspection and audit protocols.',
    image: 'https://images.pexels.com/photos/7754174/pexels-photo-7754174.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'Michael Chen',
    role: 'Director of Client Relations',
    bio: 'Former sourcing manager at Williams-Sonoma. Ensures our clients receive exceptional service.',
    image: 'https://images.pexels.com/photos/8467412/pexels-photo-8467412.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

const milestones = [
  { year: '2014', title: 'Founded in New York', description: 'Started with a mission to simplify India sourcing for U.S. businesses' },
  { year: '2016', title: 'Opened Mumbai Office', description: 'Established on-ground team in India for direct supplier engagement' },
  { year: '2018', title: '100th Client', description: 'Reached milestone of serving 100+ U.S. businesses across industries' },
  { year: '2020', title: 'Digitized Operations', description: 'Launched real-time tracking and digital inspection reports' },
  { year: '2022', title: 'Expanded to 500+ Suppliers', description: 'Built comprehensive verified supplier network across India' },
  { year: '2024', title: '$100M Trade Milestone', description: 'Facilitated over $100M in cross-border trade' },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-navy-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm font-semibold text-navy-600 tracking-wide uppercase">
                About Us
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-navy-900">
                Bridging U.S. Businesses with Indian Excellence
              </h1>
              <p className="mt-6 text-lg text-navy-600 leading-relaxed">
                We started IndUS Bridge to solve a problem we experienced
                firsthand: the complexity and risk of sourcing from India. Today,
                we&apos;re the trusted partner for hundreds of U.S. businesses seeking
                reliable, quality-focused manufacturing in India.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="IndUS Bridge team"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-6">
                  Our Story
                </h2>
                <p className="text-navy-700 leading-relaxed mb-4">
                  IndUS Bridge was founded in 2014 by a team of supply chain
                  professionals who experienced the challenges of India sourcing
                  firsthand. We saw great manufacturers producing amazing products,
                  but U.S. businesses struggled to find and work with them
                  effectively.
                </p>
                <p className="text-navy-700 leading-relaxed mb-4">
                  The barriers were significant: language, time zones, cultural
                  differences, quality concerns, and logistics complexity. Too
                  many businesses gave up after costly mistakes or abandoned the
                  opportunity entirely.
                </p>
                <p className="text-navy-700 leading-relaxed mb-6">
                  We built IndUS Bridge to remove those barriers. Today, with teams
                  in both the U.S. and India, we manage every aspect of the
                  sourcing journey—from supplier discovery to final delivery.
                </p>
                <div className="flex gap-8">
                  <div>
                    <div className="text-3xl font-bold text-navy-900">10+</div>
                    <div className="text-sm text-navy-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-navy-900">250+</div>
                    <div className="text-sm text-navy-600">Clients Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-navy-900">500+</div>
                    <div className="text-sm text-navy-600">Verified Suppliers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-navy-50/30">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-navy-600 tracking-wide uppercase">
                Our Mission
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-navy-100 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-7 h-7 text-navy-700" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  Mission
                </h3>
                <p className="text-navy-600">
                  To simplify and de-risk India sourcing for U.S. businesses,
                  enabling access to quality manufacturing at competitive prices.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-navy-100 flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-7 h-7 text-navy-700" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  Vision
                </h3>
                <p className="text-navy-600">
                  To be the most trusted bridge between U.S. demand and Indian
                  manufacturing excellence, creating value for both sides.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-navy-100 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-navy-700" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  Values
                </h3>
                <p className="text-navy-600">
                  Integrity, quality, transparency, and partnership guide every
                  decision we make and every action we take.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-navy-600 tracking-wide uppercase">
                What We Stand For
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy-900">
                Our Core Values
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-navy-50 rounded-xl p-6 transition-all duration-300 hover:bg-navy-50/80"
                >
                  <value.icon className="w-8 h-8 text-navy-700 mb-4" />
                  <h3 className="font-semibold text-navy-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-navy-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-navy-900 text-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-navy-300 tracking-wide uppercase">
                Our Journey
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
                Key Milestones
              </h2>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-navy-700 -translate-x-1/2" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-navy-800 rounded-xl p-6 inline-block">
                        <div className="text-2xl font-bold text-navy-300 mb-1">
                          {milestone.year}
                        </div>
                        <div className="font-semibold text-white mb-2">
                          {milestone.title}
                        </div>
                        <div className="text-sm text-navy-400">
                          {milestone.description}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-navy-500 ring-4 ring-navy-900" />
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-navy-600 tracking-wide uppercase">
                Leadership
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy-900">
                Meet Our Team
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((person) => (
                <div
                  key={person.name}
                  className="bg-navy-50/50 rounded-xl overflow-hidden group"
                >
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-navy-900">
                      {person.name}
                    </h3>
                    <p className="text-sm text-navy-600 mb-3">{person.role}</p>
                    <p className="text-sm text-navy-500">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
