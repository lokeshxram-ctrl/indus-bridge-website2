import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/sections/cta-section';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import Link from 'next/link';

const featuredArticle = {
  slug: 'india-sourcing-guide-2024',
  title: 'The Complete Guide to Sourcing from India in 2024',
  excerpt:
    'Everything you need to know about manufacturing in India: key industries, finding suppliers, quality control, logistics, and navigating the current trade landscape.',
  image: 'https://images.pexels.com/photos/5816964/pexels-photo-5816964.jpeg?auto=compress&cs=tinysrgb&w=800',
  author: 'Rajiv Sharma',
  date: 'November 15, 2024',
  readTime: '12 min read',
  category: 'Guide',
};

const articles = [
  {
    slug: 'quality-control-best-practices',
    title: 'Quality Control Best Practices for India Manufacturing',
    excerpt:
      'Learn the essential quality control measures that ensure your products meet specifications when sourcing from Indian manufacturers.',
    image: 'https://images.pexels.com/photos/1300351/pexels-photo-1300351.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Priya Patel',
    date: 'November 10, 2024',
    readTime: '8 min read',
    category: 'Quality',
  },
  {
    slug: 'understanding-pli-scheme',
    title: 'Understanding India\'s PLI Scheme and Its Impact on Manufacturing',
    excerpt:
      'How the Production-Linked Incentive scheme is transforming India\'s manufacturing landscape and creating opportunities for U.S. businesses.',
    image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Sarah Mitchell',
    date: 'November 5, 2024',
    readTime: '7 min read',
    category: 'Policy',
  },
  {
    slug: 'textiles-vs-apparel-suppliers',
    title: 'Textiles vs. Apparel Suppliers: Choosing the Right Partner',
    excerpt:
      'Key differences between textile mills and garment factories, and how to identify which type of supplier fits your needs.',
    image: 'https://images.pexels.com/photos/6953019/pexels-photo-6953019.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Michael Chen',
    date: 'October 28, 2024',
    readTime: '6 min read',
    category: 'Sourcing',
  },
  {
    slug: 'freight-options-india-us',
    title: 'Shipping Options: Air vs. Sea Freight from India',
    excerpt:
      'A detailed comparison of air and sea freight options, costs, transit times, and when to choose each for your shipments.',
    image: 'https://images.pexels.com/photos/1438426/pexels-photo-1438426.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Sarah Mitchell',
    date: 'October 20, 2024',
    readTime: '9 min read',
    category: 'Logistics',
  },
  {
    slug: 'factory-audit-checklist',
    title: 'The Ultimate Factory Audit Checklist',
    excerpt:
      'A comprehensive guide to what we check during factory audits and why each element matters for your sourcing success.',
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Priya Patel',
    date: 'October 15, 2024',
    readTime: '10 min read',
    category: 'Quality',
  },
  {
    slug: 'success-story-fashion-brand',
    title: 'Case Study: How a Fashion Brand Reduced Defects by 60%',
    excerpt:
    'A detailed look at how we helped a U.S. fashion brand transform their India sourcing and dramatically improve quality.',
    image: 'https://images.pexels.com/photos/7749090/pexels-photo-7749090.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Michael Chen',
    date: 'October 8, 2024',
    readTime: '7 min read',
    category: 'Case Study',
  },
];

const categories = ['All', 'Guide', 'Sourcing', 'Quality', 'Logistics', 'Policy', 'Case Study'];

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-navy-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold text-navy-600 tracking-wide uppercase">
                Our Blog
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-navy-900">
                Insights & Resources
              </h1>
              <p className="mt-6 text-lg text-navy-600 leading-relaxed">
                Expert perspectives on India sourcing, manufacturing best
                practices, quality control, and logistics. We share what we&apos;ve
                learned from years of industry experience.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-navy-100 text-navy-700 hover:bg-navy-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding pt-8 bg-white">
          <div className="container-custom">
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="group block mb-16"
            >
              <article className="grid lg:grid-cols-2 gap-8 bg-navy-50/30 rounded-xl overflow-hidden">
                <div className="aspect-video lg:aspect-auto h-[300px] lg:h-[400px] overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-semibold text-navy-600 bg-navy-100 px-3 py-1 rounded-full">
                      {featuredArticle.category}
                    </span>
                    <span className="text-xs text-navy-500">Featured</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4 group-hover:text-navy-700 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-navy-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-navy-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                </div>
              </article>
            </Link>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-xl border border-navy-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-navy-200">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-navy-600 bg-navy-100 px-2 py-0.5 rounded-full">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-navy-500">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-navy-600 mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-navy-500">
                          <User className="w-3 h-3" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-navy-500">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="px-6 py-3 bg-navy-100 text-navy-700 rounded-lg font-medium hover:bg-navy-200 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-navy-50/30">
          <div className="container-custom">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-navy-600 mb-6">
                Get the latest insights on India sourcing, industry updates, and
                best practices delivered to your inbox.
              </p>
              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-navy-900 text-white rounded-lg font-medium hover:bg-navy-800 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
