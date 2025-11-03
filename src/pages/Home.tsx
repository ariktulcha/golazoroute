import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/appStore';
import { 
  MapPin, 
  Calendar, 
  Route, 
  Plane, 
  Wallet, 
  Cloud, 
  FileText, 
  Trophy,
  Globe,
  Users,
  Heart,
  ChevronRight,
  Sparkles,
  Target,
  Map as MapIcon,
  Search,
  Handshake,
  Star,
  MessageCircle,
  Coffee,
  Building2
} from 'lucide-react';
import SEO from '../components/SEO';
import { getHomepageKeywords } from '../utils/seoHelpers';

export default function Home() {
  const navigate = useNavigate();
  const { setViewMode } = useAppStore();

  const handleFeatureClick = (mode: string) => {
    if (mode === 'stadiums') {
      navigate('/stadiums');
    } else if (mode === 'blog') {
      navigate('/blog');
    } else if (mode === 'explorer') {
      setViewMode('explorer');
      navigate('/app');
    } else if (mode === 'schedule') {
      setViewMode('schedule');
      navigate('/app');
    } else if (mode === 'optimizer') {
      setViewMode('optimizer');
      navigate('/app');
    } else if (mode === 'follow-team') {
      setViewMode('follow-team');
      navigate('/app');
    } else if (mode === 'road-to-final') {
      setViewMode('road-to-final');
      navigate('/app');
    } else if (mode === 'destination-info') {
      setViewMode('destination-info');
      navigate('/app');
    } else if (mode === 'journey') {
      setViewMode('journey');
      navigate('/app');
    } else if (mode === 'budget') {
      setViewMode('budget');
      navigate('/app');
    } else if (mode === 'transportation') {
      setViewMode('transportation');
      navigate('/app');
    } else if (mode === 'weather') {
      setViewMode('weather');
      navigate('/app');
    } else if (mode === 'visa') {
      setViewMode('visa');
      navigate('/app');
    }
  };

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'City Explorer',
      description: 'Discover all 16 host cities across USA, Mexico, and Canada with detailed information',
      color: 'from-blue-500 to-blue-600',
      mode: 'explorer',
      badge: '16 Cities'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Stadium Archive',
      description: 'Explore all 16 World Cup stadiums with capacities, transport, and venue details',
      color: 'from-purple-500 to-pink-600',
      mode: 'stadiums',
      badge: '16 Venues'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Match Schedule',
      description: 'Browse all 104 matches from group stage to the grand final',
      color: 'from-purple-500 to-purple-600',
      mode: 'schedule',
      badge: '104 Matches'
    },
    {
      icon: <Route className="w-8 h-8" />,
      title: 'Trip Optimizer',
      description: 'Plan your perfect World Cup journey with smart route optimization',
      color: 'from-emerald-500 to-emerald-600',
      mode: 'optimizer',
      badge: 'Smart AI'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Follow Your Team',
      description: 'Track your favorite team\'s matches throughout the tournament',
      color: 'from-red-500 to-red-600',
      mode: 'follow-team',
      badge: 'Track Teams'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Road to Final',
      description: 'Predict the tournament bracket! Pick group winners and simulate the knockout stages',
      color: 'from-fifa-gold-500 to-fifa-gold-600',
      mode: 'road-to-final',
      badge: 'NEW',
      highlight: true
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Destination Info',
      description: 'Local tips, attractions, and must-see places in each host city',
      color: 'from-amber-500 to-amber-600',
      mode: 'destination-info',
      badge: 'Local Tips'
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: 'Budget Planner',
      description: 'Calculate costs for hotels, flights, and daily expenses',
      color: 'from-green-500 to-green-600',
      mode: 'budget',
      badge: 'Save Money'
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'Transportation Hub',
      description: 'Find the best flights, trains, and ground transportation options',
      color: 'from-sky-500 to-sky-600',
      mode: 'transportation',
      badge: 'All Options'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Weather Planner',
      description: 'Check weather forecasts and pack accordingly for each city',
      color: 'from-indigo-500 to-indigo-600',
      mode: 'weather',
      badge: 'Forecasts'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Visa & Documents',
      description: 'Essential visa information and travel documents for USA, Mexico & Canada',
      color: 'from-rose-500 to-rose-600',
      mode: 'visa',
      badge: 'Requirements'
    }
  ];

  const stats = [
    { number: '16', label: 'Host Cities', icon: <Globe className="w-6 h-6" /> },
    { number: '104', label: 'Matches', icon: <Trophy className="w-6 h-6" /> },
    { number: '3', label: 'Countries', icon: <MapIcon className="w-6 h-6" /> },
    { number: '48', label: 'Teams', icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <>
      <SEO
        title="FIFA World Cup 2026 Planner"
        description="The ultimate FIFA World Cup 2026 trip planner. Explore all 16 host cities across USA, Mexico, and Canada. Optimize your match schedule, check weather forecasts, plan routes, and create your perfect World Cup journey."
        keywords={getHomepageKeywords()}
        canonicalUrl="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "FIFA World Cup 2026 Planner",
          "description": "Comprehensive trip planning tool for the FIFA World Cup 2026",
          "applicationCategory": "TravelApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1250"
          }
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black pt-0 lg:pt-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-fifa-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fifa-gold-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative section-content py-8 sm:py-12 lg:py-32">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-fifa-blue-500/10 border border-fifa-blue-500/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 animate-fade-in">
              <Trophy className="w-5 h-5 text-fifa-gold-400" />
              <span className="text-fifa-gold-400 font-bold">FIFA World Cup 2026</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 animate-slide-down leading-tight">
              <span className="gradient-text">Plan Your Ultimate</span>
              <br />
              <span className="text-white">World Cup Journey</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in px-2">
              The most comprehensive travel planning tool for the 2026 FIFA World Cup across 
              <span className="text-fifa-blue-400 font-semibold"> USA</span>,
              <span className="text-green-400 font-semibold"> Mexico</span>, and
              <span className="text-red-400 font-semibold"> Canada</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up px-4">
              <button
                onClick={() => handleFeatureClick('explorer')}
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-fifa-blue-500 to-fifa-blue-600 hover:from-fifa-blue-600 hover:to-fifa-blue-700 text-white font-bold rounded-xl shadow-glow-blue hover:shadow-glow-blue-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 touch-manipulation"
              >
                <Sparkles className="w-5 h-5" />
                <span>Start Exploring</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => handleFeatureClick('optimizer')}
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-800/50 hover:bg-gray-700 border-2 border-gray-700 hover:border-fifa-gold-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 touch-manipulation"
              >
                <Target className="w-5 h-5 text-fifa-gold-400" />
                <span>Optimize Your Trip</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="section-content py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card text-center p-4 sm:p-6 hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-2 sm:mb-3 text-fifa-blue-400">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black gradient-text mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-xs sm:text-sm text-gray-400 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="section-content py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 gradient-text px-2">
            Everything You Need
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Powerful tools to plan every aspect of your World Cup 2026 adventure
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => handleFeatureClick(feature.mode)}
              className={`group card p-4 sm:p-6 text-left hover:scale-105 active:scale-95 transition-all duration-300 animate-fade-in relative overflow-hidden touch-manipulation ${
                feature.highlight ? 'ring-2 ring-fifa-gold-500 shadow-glow-gold' : ''
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative">
                {/* Icon and Badge */}
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <span className={`text-xs ${feature.highlight ? 'badge-glow text-fifa-gold-400 bg-fifa-gold-900/30 border border-fifa-gold-500/50 px-2 py-1 rounded-full font-bold animate-pulse' : 'badge-gold'}`}>{feature.badge}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-fifa-blue-400 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {feature.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-fifa-blue-400 font-semibold text-xs sm:text-sm">
                  <span className="group-hover:mr-2 transition-all">Explore</span>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Our Story & Mission Section */}
      <div className="section-content py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 fill-current" />
              <span className="text-red-400 font-bold text-sm sm:text-base">Made by Fans, For Fans</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 gradient-text px-2">
              Our Story & Mission
            </h2>
          </div>

          {/* Story Card */}
          <div className="card-gradient p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 border-2 border-gray-700/50">
            <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-fifa-blue-500 to-fifa-blue-600 rounded-xl sm:rounded-2xl flex-shrink-0">
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
                  A Passion Project Born from Love of Football
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  We're a small team of football enthusiasts who lived through the chaos of planning trips to previous World Cups. 
                  We know the struggle—juggling match schedules, cities, hotels, flights, and budgets while trying not to miss 
                  a single moment of the beautiful game.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              <p>
                So we built this tool—not as a business, but as a <span className="text-fifa-gold-400 font-semibold">love letter to football fans everywhere</span>. 
                We want every supporter, whether you're following your national team or just soaking in the atmosphere, to experience 
                the 2026 World Cup without the headache of complicated planning.
              </p>

              <div className="bg-gray-900/60 border-l-4 border-fifa-blue-500 p-4 sm:p-6 rounded-r-xl">
                <p className="italic text-fifa-blue-200">
                  "We've spent countless hours mapping every stadium, calculating optimal routes, and researching local tips. 
                  This isn't just data—it's our way of helping you create memories that will last a lifetime."
                </p>
                <p className="text-right text-sm text-gray-400 mt-2 sm:mt-3">— The World Cup Planner Team</p>
              </div>
            </div>
          </div>

          {/* Free Forever & Sponsorship */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* 100% Free Card */}
            <div className="card p-6 sm:p-8 border-2 border-fifa-blue-500/30 hover:border-fifa-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-fifa-blue-500 to-fifa-blue-600 rounded-xl">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">100% Free Forever</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                No premium tiers. No hidden fees. No credit card required. Every feature you see is free 
                for all football fans, forever.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge-blue text-xs">No Ads</span>
                <span className="badge-blue text-xs">No Paywalls</span>
                <span className="badge-blue text-xs">No Limits</span>
              </div>
            </div>

            {/* Looking for Sponsors */}
            <div className="card p-6 sm:p-8 border-2 border-fifa-gold-500/30 hover:border-fifa-gold-500/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-fifa-gold-500/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-fifa-gold-500 to-fifa-gold-600 rounded-xl">
                    <Handshake className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Looking for Sponsors</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  We're looking for sponsors who share our vision of keeping this tool free for fans. 
                  Help us cover hosting, development, and maintenance costs.
                </p>
                <button
                  onClick={() => navigate('/sponsor')}
                  className="w-full sm:w-auto btn-gold text-sm sm:text-base flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                >
                  <Handshake className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Become a Sponsor</span>
                </button>
              </div>
            </div>
          </div>

          {/* Community & Support */}
          <div className="card p-6 sm:p-8 md:p-10 border-2 border-fifa-blue-500/30">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4">
                Help Us Improve & Spread the Word
              </h3>
              <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
                As a small team, we rely on the football community to help us grow and improve. 
                Your feedback, recommendations, and support mean everything to us.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              {/* Share with Friends */}
              <div className="text-center p-4 sm:p-6 bg-gray-900/60 rounded-xl hover:bg-gray-900/80 transition-colors">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-fifa-blue-500 to-fifa-blue-600 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base">Share with Fans</h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  Tell fellow supporters about this free planning tool
                </p>
              </div>

              {/* Send Feedback */}
              <div className="text-center p-4 sm:p-6 bg-gray-900/60 rounded-xl hover:bg-gray-900/80 transition-colors">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-fifa-blue-500 to-fifa-blue-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base">Give Feedback</h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  Share your ideas and help us make it better
                </p>
              </div>

              {/* Buy Coffee */}
              <div className="text-center p-4 sm:p-6 bg-gray-900/60 rounded-xl hover:bg-gray-900/80 transition-colors">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-fifa-gold-500 to-fifa-gold-600 rounded-full flex items-center justify-center">
                  <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base">Buy Us a Coffee</h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  Support development with a small donation
                </p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="btn-primary text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                Send Us Feedback
              </button>
              <button
                onClick={() => navigate('/donate')}
                className="btn-gold text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <Coffee className="w-4 h-4 sm:w-5 sm:h-5" />
                Buy Us a Coffee
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="section-content py-12 sm:py-16 lg:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 text-white px-2">
          Ready to Plan Your World Cup 2026 Trip?
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
          Start exploring host cities, selecting matches, and building your perfect itinerary—completely free, no sign-up required.
        </p>
        <button
          onClick={() => handleFeatureClick('explorer')}
          className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-fifa-gold-500 to-fifa-gold-600 hover:from-fifa-gold-600 hover:to-fifa-gold-700 text-gray-900 font-black text-base sm:text-lg rounded-xl shadow-glow-gold hover:shadow-glow-gold-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 mx-auto touch-manipulation"
        >
          <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>Start Planning Free</span>
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      </div>
    </>
  );
}

