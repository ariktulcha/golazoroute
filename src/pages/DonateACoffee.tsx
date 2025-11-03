import { Coffee, Heart, Trophy, Zap, Star, Users, Target, Gift } from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';

export default function DonateACoffee() {
  const tiers = [
    {
      icon: Coffee,
      name: 'The Substitute',
      amount: '$3',
      description: 'One coffee to fuel the squad',
      color: 'from-amber-600 to-orange-600',
      iconBg: 'bg-amber-600/20',
      iconColor: 'text-amber-400',
    },
    {
      icon: Zap,
      name: 'The Starter',
      amount: '$5',
      description: 'Keep us in the game!',
      color: 'from-blue-600 to-cyan-600',
      iconBg: 'bg-blue-600/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: Star,
      name: 'The Captain',
      amount: '$10',
      description: 'Lead the team to victory',
      color: 'from-purple-600 to-pink-600',
      iconBg: 'bg-purple-600/20',
      iconColor: 'text-purple-400',
    },
    {
      icon: Trophy,
      name: 'The Legend',
      amount: '$25',
      description: 'Hall of Fame supporter!',
      color: 'from-yellow-500 to-amber-500',
      iconBg: 'bg-yellow-600/20',
      iconColor: 'text-yellow-400',
    },
  ];

  const impact = [
    {
      icon: Target,
      title: 'Better Features',
      description: 'Your support helps us develop sick new tools for match planning',
    },
    {
      icon: Zap,
      title: 'Faster Updates',
      description: 'Keep the platform running smooth like Messi dribbles',
    },
    {
      icon: Users,
      title: 'Community Growth',
      description: 'Help us build the ultimate platform for footie fans worldwide',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <SimpleHeader />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
            <Coffee className="w-4 h-4" />
            Support the Squad
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Buy Us a <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Coffee</span>!
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Fancy helping the team? No VAR needed here – your support goes straight to goal! 
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We're a small squad working extra time to make your World Cup planning absolutely world-class. 
            Every coffee keeps us sharp and ready to deliver bangers! ⚽☕
          </p>
        </div>

        {/* Donation Tiers */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">Pick Your Formation</h2>
          <p className="text-center text-gray-400 mb-12">
            Choose your lineup – every contribution is a massive assist!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className="group bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-600 transition-all hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className={`${tier.iconBg} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <tier.icon className={`w-7 h-7 ${tier.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className={`text-3xl font-bold mb-3 bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                  {tier.amount}
                </div>
                <p className="text-gray-400 text-sm mb-6">{tier.description}</p>
                <button className={`w-full bg-gradient-to-r ${tier.color} hover:opacity-90 text-white font-semibold py-3 px-4 rounded-lg transition-all`}>
                  Donate Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Stats/Progress */}
        <div className="mb-20 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg p-8 md:p-12 border border-blue-800/30">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Match Stats</h2>
            <p className="text-gray-400">The squad's performance this season</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">247</div>
              <div className="text-gray-400">Coffees Scored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">1,342</div>
              <div className="text-gray-400">Features Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">50k+</div>
              <div className="text-gray-400">Fans Supported</div>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">Where Your Support Goes</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Every penny is a tactical masterclass – invested directly into making this platform absolutely mint for you!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impact.map((item, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-blue-600 transition-all">
                <div className="bg-blue-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Message Section */}
        <div className="bg-gray-900 rounded-lg p-8 md:p-12 border border-gray-800 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <Gift className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why We're Asking for Your Support
            </h2>
            <div className="text-left space-y-4 text-gray-400">
              <p>
                <strong className="text-white">Listen up, fellow fans! 👋</strong>
              </p>
              <p>
                We built this platform because we're absolutely mental about football and wanted to help YOU experience 
                the World Cup without the stress. No dodgy ads, no premium paywalls – just pure, proper trip planning tools.
              </p>
              <p>
                But here's the thing: running this beast costs money. Server fees, APIs, late-night coding sessions 
                fueled by (you guessed it) coffee. We're not backed by some corporate giant – just a small crew of 
                passionate fans working in our spare time.
              </p>
              <p>
                <strong className="text-white">Your coffee donation = Our fuel ⛽</strong>
              </p>
              <p>
                Think of it like this: if this tool saved you even 30 minutes of planning headaches, or helped you 
                catch that crucial match, then we've already assisted your goal. Now you can assist ours! 
              </p>
              <p className="text-center text-xl font-semibold text-white pt-4">
                Together, we're unstoppable! 🔥⚽🏆
              </p>
            </div>
          </div>
        </div>

        {/* Alternative Support */}
        <div className="text-center mb-20">
          <h2 className="text-2xl font-bold mb-4">Can't Donate? No Worries!</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            You can still be part of the squad! Share us with your mates, drop us feedback, 
            or spread the word on social media. Every bit helps! 💪
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Share on Socials
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2">
              <Users className="w-5 h-5" />
              Tell Your Friends
            </button>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-12 border border-blue-800/30 text-center">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">You're a Legend! 🌟</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            Seriously though – whether you donate or not, we're grateful you're here. 
            This platform exists because of fans like you. Now let's plan the trip of a lifetime! 🎉
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white font-bold py-4 px-8 rounded-lg transition-all text-lg inline-flex items-center justify-center gap-2">
              <Coffee className="w-6 h-6" />
              Buy Us a Coffee
            </button>
            <a
              href="/"
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Target className="w-6 h-6" />
              Back to Planning
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

