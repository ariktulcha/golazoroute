import { Heart, Users, TrendingUp, Globe, Mail, CheckCircle } from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';

export default function Sponsor() {
  const benefits = [
    {
      icon: Users,
      title: 'Reach Passionate Fans',
      description: 'Connect with thousands of World Cup enthusiasts planning their trips',
    },
    {
      icon: TrendingUp,
      title: 'Brand Visibility',
      description: 'Premium placement across our platform and marketing materials',
    },
    {
      icon: Globe,
      title: 'Global Audience',
      description: 'Access to an international community of football fans',
    },
  ];

  const tiers = [
    {
      name: 'Bronze Partner',
      price: '$5,000/year',
      features: [
        'Logo on website footer',
        'Social media mentions',
        'Monthly newsletter feature',
        'Analytics reports',
      ],
    },
    {
      name: 'Silver Partner',
      price: '$15,000/year',
      features: [
        'Logo on homepage',
        'Dedicated sponsor page',
        'Social media campaign',
        'Weekly newsletter features',
        'Co-branded content',
        'Advanced analytics',
      ],
      highlighted: true,
    },
    {
      name: 'Gold Partner',
      price: '$50,000/year',
      features: [
        'Premium homepage placement',
        'Exclusive sponsorship category',
        'Custom integration opportunities',
        'Daily social media features',
        'Video testimonials',
        'Full marketing suite',
        'Quarterly business reviews',
        'VIP event access',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <SimpleHeader />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Partnership Opportunities
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Be Our Sponsor
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Partner with the leading World Cup planning platform and connect with passionate football fans from around the globe.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-blue-600 transition-colors"
              >
                <div className="bg-blue-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-12 border border-blue-800/30 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">1M+</div>
              <div className="text-gray-400">Page Views/Month</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">Sponsorship Tiers</h2>
          <p className="text-center text-gray-400 mb-12">Choose the partnership level that works best for your brand</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 border ${
                  tier.highlighted
                    ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-600 transform scale-105'
                    : 'bg-gray-900 border-gray-800'
                }`}
              >
                {tier.highlighted && (
                  <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-blue-400 mb-6">{tier.price}</div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    tier.highlighted
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-lg p-12 border border-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a customized sponsorship package that aligns with your brand goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
            <a
              href="mailto:partnerships@worldcupplanner.com"
              className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              partnerships@worldcupplanner.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

