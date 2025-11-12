import Link from 'next/link';
import { Smartphone, Zap, Building2, ArrowRight, Check } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-dark/5 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-primary-dark via-primary to-primary-light bg-clip-text text-transparent">
              Ready Set Go
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#products" className="text-gray-600 hover:text-primary transition-colors">
              Products
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="https://github.com/mysquishy" className="text-gray-600 hover:text-primary transition-colors">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Ship Production Apps{' '}
          <span className="bg-gradient-to-r from-primary-dark via-primary to-primary-light bg-clip-text text-transparent">
            10x Faster
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Production-ready boilerplates with authentication, payments, and complete apps.
          <br />
          Choose your stack and start shipping.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="px-8 py-4 bg-gradient-to-r from-primary-dark to-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Products
          </a>
          <a
            href="https://waitlist.readysetgosaas.com/"
            className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
          >
            Join Waitlist
          </a>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">3</div>
            <div className="text-gray-600">Complete Products</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-gray-600">Feature Modules</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">35%</div>
            <div className="text-gray-600">Bundle Savings</div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Choose Your Stack
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Each product is production-ready with authentication, payments, and complete features.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mobile Boilerplate */}
            <ProductCard
              icon={<Smartphone className="w-12 h-12" />}
              title="Mobile Boilerplate"
              subtitle="React Native + Supabase"
              price="$199"
              description="3 complete mobile apps with authentication, payments, and real-time database."
              features={[
                'React Native & Expo 51',
                'Supabase Backend',
                'Stripe Payments',
                '3 Complete Apps',
                '15 E2E Tests',
                'Maestro Recordings',
              ]}
              status="Launching Q1 2025"
              href="https://waitlist.readysetgosaas.com/mobile"
              gradient="from-purple-500 to-pink-500"
            />

            {/* PRO Edition */}
            <ProductCard
              icon={<Zap className="w-12 h-12" />}
              title="PRO Edition"
              subtitle="Next.js SaaS - Quick Start"
              price="$199"
              description="Complete SaaS platform with multi-tenancy, AI chat, and admin dashboard."
              features={[
                'Next.js 15 & TypeScript',
                'Multi-Tenancy',
                'AI Chat Widget',
                'Admin Dashboard',
                'Playwright Tests',
                'CLI Tool',
              ]}
              status="Launching Q2 2025"
              href="https://waitlist.readysetgosaas.com/pro"
              gradient="from-blue-500 to-cyan-500"
              featured
            />

            {/* Modular SaaS */}
            <ProductCard
              icon={<Building2 className="w-12 h-12" />}
              title="Modular SaaS"
              subtitle="Next.js - Enterprise Architecture"
              price="$299-$499"
              description="Modular platform with interchangeable feature modules. Build custom or use ours."
              features={[
                'Next.js 15.5+',
                'Base + 3 Modules',
                'FitFlow (Fitness)',
                'MindSpace (Wellness)',
                'ShopNow (E-commerce)',
                '1700+ Lines Docs',
              ]}
              status="Launching Q3 2025"
              href="https://waitlist.readysetgosaas.com/modular"
              gradient="from-indigo-500 to-purple-500"
            />
          </div>
        </div>
      </section>

      {/* Bundle Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-primary-dark/5 to-primary-light/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Bundle & Save</h2>
          <p className="text-xl text-gray-600 mb-12">
            Get multiple products at a discount. Build mobile and web apps together.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <BundleCard
              title="Mobile + PRO"
              price="$348"
              originalPrice="$398"
              discount="25% OFF"
              description="Perfect for launching both mobile and web platforms"
            />
            <BundleCard
              title="Mobile + Modular"
              price="$419"
              originalPrice="$598"
              discount="30% OFF"
              description="Mobile apps plus flexible enterprise architecture"
              featured
            />
            <BundleCard
              title="Ultimate Bundle"
              price="$519"
              originalPrice="$797"
              discount="35% OFF"
              description="All 3 products. Complete cross-platform solution."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Ship Faster?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our waitlist to get early access and exclusive launch discounts.
          </p>
          <a
            href="https://waitlist.readysetgosaas.com/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-dark to-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg"
          >
            Join Waitlist
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent">
                Ready Set Go
              </h3>
              <p className="text-gray-600 text-sm">
                Ship production apps 10x faster with our suite of boilerplates.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link href="/mobile">Mobile Boilerplate</Link></li>
                <li><Link href="/pro">PRO Edition</Link></li>
                <li><Link href="/modular">Modular SaaS</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="https://github.com/mysquishy">GitHub</a></li>
                <li><Link href="/docs">Documentation</Link></li>
                <li><a href="https://waitlist.readysetgosaas.com">Waitlist</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; 2024 Ready Set Go. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProductCard({
  icon,
  title,
  subtitle,
  price,
  description,
  features,
  status,
  href,
  gradient,
  featured = false,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  status: string;
  href: string;
  gradient: string;
  featured?: boolean;
}) {
  return (
    <Link href={href}>
      <div
        className={`p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 ${
          featured ? 'border-primary scale-105' : 'border-transparent hover:border-primary'
        } cursor-pointer h-full flex flex-col`}
      >
        {featured && (
          <div className="text-xs font-bold text-primary mb-2">⭐ MOST POPULAR</div>
        )}
        <div className={`text-primary mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-primary font-semibold mb-4">{subtitle}</p>
        <p className="text-3xl font-bold mb-4">{price}</p>
        <p className="text-gray-600 mb-6 flex-1">{description}</p>

        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start text-sm">
              <Check className="h-5 w-5 text-primary-light mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-4 border-t">
          <span className="text-sm text-gray-500">{status}</span>
          <ArrowRight className="w-5 h-5 text-primary" />
        </div>
      </div>
    </Link>
  );
}

function BundleCard({
  title,
  price,
  originalPrice,
  discount,
  description,
  featured = false,
}: {
  title: string;
  price: string;
  originalPrice: string;
  discount: string;
  description: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`p-8 bg-white rounded-2xl border-2 ${
        featured ? 'border-primary shadow-xl scale-105' : 'border-gray-200'
      }`}
    >
      {featured && (
        <div className="text-xs font-bold text-primary mb-2">✨ BEST VALUE</div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-400 line-through ml-2">{originalPrice}</span>
      </div>
      <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
        {discount}
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
