import { Target, Users, Award, Zap, Globe, Heart, TrendingUp, Mail } from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Smart Planning',
      description: 'AI-powered itinerary optimization to help you catch the most matches',
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Get instant notifications about schedule changes and important updates',
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Comprehensive information about all host cities and venues',
    },
    {
      icon: Heart,
      title: 'Fan-Focused',
      description: 'Built by football fans, for football fans',
    },
  ];

  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '32', label: 'Teams Supported' },
    { number: '64', label: 'Matches Tracked' },
    { number: '150+', label: 'Countries Reached' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Football enthusiast with 15 years in travel tech',
    },
    {
      name: 'Marcus Chen',
      role: 'CTO',
      bio: 'Software architect passionate about sports analytics',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Product',
      bio: 'UX expert and dedicated World Cup follower',
    },
    {
      name: 'James Wilson',
      role: 'Head of Operations',
      bio: 'Travel industry veteran with global experience',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <SimpleHeader />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            About World Cup Planner
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Your Journey to the <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">World Cup</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're on a mission to make World Cup planning effortless, helping fans from around the globe experience the beautiful game without the hassle.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-400 text-lg mb-4">
                World Cup Planner was born from a simple idea: attending the World Cup shouldn't be stressful. Planning your journey, coordinating matches, finding accommodations, and navigating host cities can be overwhelming.
              </p>
              <p className="text-gray-400 text-lg mb-4">
                We built this platform to simplify the entire experience, giving you more time to focus on what matters – enjoying the greatest sporting event on Earth with fellow fans.
              </p>
              <p className="text-gray-400 text-lg">
                Whether you're following your national team or just love football, we're here to help you make the most of your World Cup adventure.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg p-12 border border-blue-800/30">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-600 transition-all hover:transform hover:scale-105"
              >
                <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="bg-green-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fan First</h3>
              <p className="text-gray-400">
                Every decision we make is centered around improving the fan experience. Your feedback shapes our roadmap.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="bg-blue-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-400">
                We constantly explore new technologies and approaches to make trip planning smarter and more efficient.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="bg-purple-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
              <p className="text-gray-400">
                Football brings the world together. We're committed to making our platform accessible to fans everywhere.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">Meet the Team</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            We're a diverse team of football fans, developers, and travel experts united by our passion for the beautiful game.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-4 flex items-center justify-center text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold">
                    2022
                  </div>
                  <div className="w-0.5 h-full bg-gray-800 mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2">The Idea</h3>
                  <p className="text-gray-400">
                    After struggling to plan our own World Cup trip, we realized there had to be a better way. World Cup Planner was born.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold">
                    2023
                  </div>
                  <div className="w-0.5 h-full bg-gray-800 mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2">Launch</h3>
                  <p className="text-gray-400">
                    We launched our beta platform with core features: match scheduling, city information, and basic itinerary planning.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold">
                    2024
                  </div>
                  <div className="w-0.5 h-full bg-gray-800 mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2">Growth</h3>
                  <p className="text-gray-400">
                    Reached 50,000 users and added AI-powered optimization, helping thousands plan their perfect World Cup experience.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center font-bold">
                    2025
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">The Future</h3>
                  <p className="text-gray-400">
                    Expanding our platform with new features, partnerships, and preparing to help even more fans experience the next World Cup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-12 border border-blue-800/30 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Join Our Journey?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate people to join our team or partner with us to make World Cup planning even better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            <a
              href="/sponsor"
              className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

