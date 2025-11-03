import { Rocket, MapPin, Users, Smartphone, Brain, Globe, Sparkles, Calendar, MessageCircle, Camera, Plane, Star, Clock, CheckCircle2, Zap } from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';

export default function Roadmap() {
  const currentFeatures = [
    {
      icon: MapPin,
      title: 'Smart Itinerary Optimizer',
      description: 'AI-powered route optimization to help you catch maximum matches with minimal travel time',
      status: 'live'
    },
    {
      icon: Calendar,
      title: 'Match Schedule Explorer',
      description: 'Browse all matches, filter by team, and build your perfect World Cup calendar',
      status: 'live'
    },
    {
      icon: Globe,
      title: 'Interactive City Guide',
      description: 'Explore host cities with detailed information about venues, attractions, and local culture',
      status: 'live'
    },
    {
      icon: Plane,
      title: 'Budget & Transportation',
      description: 'Plan your expenses and find the best transportation options between cities',
      status: 'live'
    }
  ];

  const nextQuarter = [
    {
      icon: Users,
      title: 'Group Travel Coordination',
      description: 'Invite friends, vote on matches to attend together, and sync your itineraries in real-time',
      status: 'In Development',
      eta: 'Q1 2026'
    },
    {
      icon: Smartphone,
      title: 'Native Mobile App',
      description: 'iOS and Android apps with offline access to your itinerary and real-time match notifications',
      status: 'In Development',
      eta: 'Q1 2026'
    },
    {
      icon: Star,
      title: 'Ticket Marketplace Integration',
      description: 'Connect with official and trusted secondary ticket marketplaces directly from your itinerary',
      status: 'Planned',
      eta: 'Q2 2026'
    },
    {
      icon: Camera,
      title: 'Fan Experience Sharing',
      description: 'Share your match photos, stories, and tips with the global fan community',
      status: 'Planned',
      eta: 'Q2 2026'
    }
  ];

  const futureVision = [
    {
      icon: Brain,
      title: 'AI Travel Assistant',
      description: 'Personal AI companion that learns your preferences and suggests customized experiences, dining recommendations, and hidden gems in each host city',
      category: 'AI-Powered'
    },
    {
      icon: MessageCircle,
      title: 'Fan Meetup Network',
      description: 'Connect with fans from around the world, organize viewing parties, and join community events at each venue',
      category: 'Social'
    },
    {
      icon: Sparkles,
      title: 'AR Stadium Experience',
      description: 'Augmented reality features for exploring stadiums, viewing player stats, and accessing exclusive behind-the-scenes content',
      category: 'Innovation'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Full platform support for 20+ languages including real-time translation for fan interactions',
      category: 'Global'
    },
    {
      icon: Zap,
      title: 'Live Match Integration',
      description: 'Real-time scores, highlights, and match statistics integrated with your itinerary',
      category: 'Real-Time'
    },
    {
      icon: Clock,
      title: 'Smart Time Management',
      description: 'Intelligent scheduling that factors in jet lag, travel fatigue, and recovery time to optimize your experience',
      category: 'AI-Powered'
    }
  ];

  const communityRequests = [
    '🏨 Hotel booking integration with exclusive fan rates',
    '🎫 Automatic alerts when tickets become available',
    '🍕 Restaurant recommendations near stadiums',
    '📱 WhatsApp group integration for travel coordination',
    '🎉 Pre-match and post-match event discovery',
    '🚕 Ride-sharing coordination with other fans',
    '💳 Multi-currency support and expense splitting',
    '📊 Carbon footprint tracking for eco-conscious travel'
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <SimpleHeader />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            Product Roadmap
          </div>
          <h1 className="text-5xl font-bold mb-6">
            The Future of <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">World Cup Travel</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're constantly innovating to make your World Cup journey more seamless, connected, and unforgettable. Here's what we're building next.
          </p>
        </div>

        {/* Current Features */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle2 className="w-8 h-8 text-green-400" />
            <h2 className="text-3xl font-bold">Available Now</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 border border-green-600/30 hover:border-green-600 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-green-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <span className="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded-full">
                        Live
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold">Coming Soon</h2>
          </div>
          <p className="text-gray-400 mb-8 text-lg">
            These features are either in active development or next in our pipeline. We're working hard to bring them to you!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nextQuarter.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 border border-blue-600/30 hover:border-blue-600 transition-all hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        feature.status === 'In Development' 
                          ? 'bg-blue-600/20 text-blue-400'
                          : 'bg-purple-600/20 text-purple-400'
                      }`}>
                        {feature.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{feature.description}</p>
                    <p className="text-xs text-gray-500">Expected: {feature.eta}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold">Future Vision</h2>
          </div>
          <p className="text-gray-400 mb-8 text-lg">
            Our long-term vision for creating the ultimate World Cup companion. These ambitious features will revolutionize how fans experience the tournament.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureVision.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-lg p-6 border border-purple-600/30 hover:border-purple-600 transition-all hover:transform hover:scale-105"
              >
                <div className="bg-purple-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="inline-block bg-purple-900/30 text-purple-300 text-xs px-2 py-1 rounded-full mb-3">
                  {feature.category}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Requests */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg p-8 border border-blue-800/30">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl font-bold">Community Requests</h2>
            </div>
            <p className="text-gray-400 mb-6 text-lg">
              Your feedback shapes our roadmap! Here are the most requested features from our fan community:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {communityRequests.map((request, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-900/50 rounded-lg p-4">
                  <div className="text-2xl">{request.split(' ')[0]}</div>
                  <span className="text-gray-300">{request.substring(request.indexOf(' ') + 1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transparency Note */}
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-12">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-400" />
            A Note on Timelines
          </h3>
          <p className="text-gray-400 mb-4">
            We're committed to building features the right way, not just the fast way. While we provide estimated timelines, they're subject to change as we prioritize quality, security, and user experience.
          </p>
          <p className="text-gray-400">
            Have a feature request or feedback? We'd love to hear from you! <a href="/contact" className="text-blue-400 hover:text-blue-300 underline">Get in touch</a> and help shape the future of World Cup planning.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-12 border border-blue-800/30 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Be Part of the Journey?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our early access program to test new features before they launch and help us build the best World Cup planning platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Star className="w-5 h-5" />
              Join Early Access
            </a>
            <a
              href="/"
              className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Start Planning Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

