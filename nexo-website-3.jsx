import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ExternalLink, Star, Zap, Shield, Users, TrendingUp } from 'lucide-react';

const OkcaxWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [cryptoPrices, setCryptoPrices] = useState({
    BTC: { price: 77535.96, change: 1.51 },
    ETH: { price: 2136.85, change: 1.50 },
    OKCAX: { price: 0.8861, change: 0.35 },
    USDT: { price: 0.9990, change: 0.01 },
    USDC: { price: 0.9997, change: 0.00 },
    SOL: { price: 86.33, change: 2.67 }
  });

  useEffect(() => {
    // Simulate price updates
    const interval = setInterval(() => {
      setCryptoPrices(prev => ({
        ...prev,
        BTC: { ...prev.BTC, change: (Math.random() * 4 - 2).toFixed(2) },
        ETH: { ...prev.ETH, change: (Math.random() * 4 - 2).toFixed(2) }
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      icon: TrendingUp,
      title: 'Flexible Savings',
      description: 'Earn interest with daily payouts and no lock-ups.',
      link: '#earn'
    },
    {
      icon: Zap,
      title: 'Exchange',
      description: 'Swap over 100 digital assets with just a tap.',
      link: '#exchange'
    },
    {
      icon: Shield,
      title: 'Credit Line',
      description: 'Borrow funds without selling your digital assets.',
      link: '#borrow'
    },
    {
      icon: Users,
      title: 'OKCAX Card',
      description: 'Spend while earning interest and receiving cashback.',
      link: '#card'
    }
  ];

  const testimonials = [
    {
      name: 'John A.',
      role: 'Business Owner',
      quote: 'No matter the time zone, OKCAX\'s team has always been very accessible and helpful in my decision-making process.',
      rating: 5
    },
    {
      name: 'Andrew',
      role: 'Founder & Chairman',
      quote: 'My relationship manager brought a unique focus to strategic timing in crypto investments. In this fast-paced world, established relationships are invaluable.',
      rating: 5
    },
    {
      name: 'Oleg',
      role: 'Entrepreneur',
      quote: 'After four successful years, we shifted our entire family balance sheet to OKCAX. We view them as the "Amazon of finance".',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'How can I create an account on OKCAX?',
      answer: 'Creating an OKCAX account is quick and straightforward. Simply sign up, confirm your email, and complete a fast identity check. Once verified, you\'ll be ready to start building wealth with OKCAX.'
    },
    {
      question: 'How do I start earning interest?',
      answer: 'After creating your account, buy or transfer crypto, opt in for interest earning, and maintain a balance above $5,000. You\'ll then earn daily interest on your digital assets with Flexible Savings.'
    },
    {
      question: 'What cryptocurrencies can I buy and hold?',
      answer: 'OKCAX offers over 100 cryptocurrencies including Bitcoin, Ethereum, Solana, and USDC. Choose between Apple Pay, Google Pay, bank transfers, or cards.'
    },
    {
      question: 'How can I open a Credit Line?',
      answer: 'Once you buy or top up crypto, you can immediately access your Credit Line to borrow funds sent to your bank account or as stablecoins in your OKCAX account.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-sm">
                OKCAX
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-sm hover:text-cyan-400 transition">Products</a>
              <a href="#about" className="text-sm hover:text-cyan-400 transition">About</a>
              <a href="#security" className="text-sm hover:text-cyan-400 transition">Security</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 text-sm font-medium hover:text-cyan-400 transition">Log in</button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition">
                Sign up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-slate-700">
              <a href="#products" className="block py-2 text-sm">Products</a>
              <a href="#about" className="block py-2 text-sm">About</a>
              <a href="#security" className="block py-2 text-sm">Security</a>
              <button className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-sm font-semibold">
                Sign up
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Earn, trade, and invest crypto
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            All in one place. Access the premier trading platform built to grow your digital assets.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition transform hover:scale-105">
              Sign up
            </button>
            <button className="px-8 py-4 border border-cyan-500 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition">
              Download app
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12">
            <div className="p-4 md:p-6 bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400">2018</div>
              <div className="text-sm text-slate-400">Operating since</div>
            </div>
            <div className="p-4 md:p-6 bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400">24/7</div>
              <div className="text-sm text-slate-400">Client care</div>
            </div>
            <div className="p-4 md:p-6 bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400">$7B+</div>
              <div className="text-sm text-slate-400">Assets managed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-slate-800/30 border-y border-slate-700/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Build your wealth with powerful tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => {
              const Icon = product.icon;
              return (
                <div
                  key={idx}
                  className="group p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl hover:border-cyan-500/50 transition transform hover:scale-105 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{product.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Live Crypto Ticker */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Live market data</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(cryptoPrices).map(([symbol, data]) => (
              <div
                key={symbol}
                className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-cyan-500/50 transition"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-lg">{symbol}</span>
                  <span className={`text-sm font-semibold ${data.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {data.change >= 0 ? '+' : ''}{data.change}%
                  </span>
                </div>
                <div className="text-2xl font-bold text-cyan-400">
                  ${data.price.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-slate-800/30 border-y border-slate-700/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Trusted by thousands</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently asked questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-700/50 rounded-lg overflow-hidden hover:border-cyan-500/50 transition"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full p-6 bg-slate-800/30 hover:bg-slate-800/50 transition flex justify-between items-center"
                >
                  <span className="text-lg font-semibold text-left">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${expandedFAQ === idx ? 'rotate-180' : ''}`}
                  />
                </button>

                {expandedFAQ === idx && (
                  <div className="p-6 bg-slate-900/50 border-t border-slate-700/50 text-slate-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 border-y border-slate-700/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start building your crypto wealth today
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of users who trust OKCAX with their digital assets.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition">
              Create account
            </button>
            <button className="px-8 py-4 border border-cyan-500 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition flex items-center justify-center gap-2">
              Download app <ExternalLink size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-700/50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Earn Crypto</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Exchange</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Credit Line</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Nexo Card</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition">About</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Security</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Cookies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Follow</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Twitter</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">YouTube</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="px-2 py-1 bg-gradient-to-br from-blue-500 to-cyan-500 rounded text-white flex items-center justify-center text-xs font-bold">
                OKCAX
              </div>
              <span>© 2024 OKCAX. All rights reserved.</span>
            </div>
            <div className="text-slate-500">Built with passion for the crypto future</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OkcaxWebsite;