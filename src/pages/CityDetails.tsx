import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCityById } from '../data/cities';
import { getMatchesByCity } from '../data/matches';
import { MapPin, Plane, Shield, DollarSign, Train, Users, Clock, AlertCircle, TrendingUp, Star, Cloud, ExternalLink, Calendar, Trophy, Info, ArrowLeft, PartyPopper, ChevronDown, ChevronUp, Utensils, Hotel, Bus, Wifi, CreditCard, Languages, Phone, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';
import { generateCityStructuredData, getCityKeywords, generateBreadcrumbData } from '../utils/seoHelpers';

export default function CityDetails() {
  const { cityId } = useParams<{ cityId: string }>();
  const navigate = useNavigate();
  const city = cityId ? getCityById(cityId) : undefined;
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'matches' | 'practical' | 'food' | 'faq'>('overview');

  useEffect(() => {
    if (!city) {
      // Redirect to destination info if city not found
      navigate('/app');
    }
  }, [city, navigate]);

  if (!city) {
    return null;
  }

  const cityMatches = getMatchesByCity(city.id);

  // Get Unsplash image for the city
  const getCityImageUrl = (cityId: string) => {
    const images: Record<string, string> = {
      'atlanta': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop',
      'boston': 'https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=1200&h=600&fit=crop',
      'dallas': 'https://images.unsplash.com/photo-1583437176298-f2cc5e98f3be?w=1200&h=600&fit=crop',
      'guadalajara': 'https://images.unsplash.com/photo-1600299207908-804295f87f96?w=1200&h=600&fit=crop',
      'houston': 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200&h=600&fit=crop',
      'kansas-city': 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1200&h=600&fit=crop',
      'los-angeles': 'https://images.unsplash.com/photo-1534190239940-9ba8944ea261?w=1200&h=600&fit=crop',
      'mexico-city': 'https://images.unsplash.com/photo-1518659526054-e7f73d35f1f9?w=1200&h=600&fit=crop',
      'miami': 'https://images.unsplash.com/photo-1501509497947-782640bc1412?w=1200&h=600&fit=crop',
      'monterrey': 'https://images.unsplash.com/photo-1625430654768-34102525c46f?w=1200&h=600&fit=crop',
      'new-york': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&h=600&fit=crop',
      'philadelphia': 'https://images.unsplash.com/photo-1564156421-8f8e2810be4c?w=1200&h=600&fit=crop',
      'san-francisco': 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?w=1200&h=600&fit=crop',
      'seattle': 'https://images.unsplash.com/photo-1542223616-740cbd1ec46d?w=1200&h=600&fit=crop',
      'toronto': 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&h=600&fit=crop',
      'vancouver': 'https://images.unsplash.com/photo-1559511260-66a654ae982a?w=1200&h=600&fit=crop',
    };
    return images[cityId] || 'https://images.unsplash.com/photo-1541622469708-72e5ce8f0b44?w=1200&h=600&fit=crop';
  };

  const getTransitScoreColor = (score: string) => {
    switch (score) {
      case 'High': return 'text-green-400 bg-green-500/10 border-green-500/30';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
      case 'Low': return 'text-red-400 bg-red-500/10 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/30';
    }
  };

  const getCostLevel = (cost: number) => {
    if (cost >= 250) return { label: '$$$$', color: 'text-red-400' };
    if (cost >= 180) return { label: '$$$', color: 'text-orange-400' };
    if (cost >= 120) return { label: '$$', color: 'text-yellow-400' };
    return { label: '$', color: 'text-green-400' };
  };

  const formatMatchDate = (dateString: string, timeString: string) => {
    const date = new Date(dateString + 'T' + timeString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Fan-focused FAQs for World Cup visitors
  const cityFaqs = [
    {
      question: `How do I get from ${city.airportCode} airport to ${city.stadium}?`,
      answer: city.transitScore === 'High' 
        ? `Great news! ${city.name} has excellent public transportation. You can take public transit directly from the airport to the stadium area. For match days, we recommend using public transport as traffic will be heavy and parking limited. Budget around 30-60 minutes for the journey depending on traffic.`
        : `We recommend using ride-sharing apps (Uber/Lyft) or pre-booking a shuttle service. Public transit options may be limited. On match days, expect heavy traffic, so allow 60-90 minutes for the journey. Consider staying at a hotel with stadium shuttle service.`
    },
    {
      question: 'Where should I stay during the World Cup?',
      answer: `For the best fan experience, we recommend staying near the Fan Zone at ${city.fanZone} or in the downtown area. Hotels typically cost around $${city.averageHotelCost}/night during the tournament, but book EARLY as prices surge and availability drops. Consider areas with easy public transit access to the stadium. Budget-friendly options: check Airbnb and hotels 2-3 miles from downtown.`
    },
    {
      question: 'What are the must-do activities for World Cup fans?',
      answer: `Don't miss: 1) ${city.topAttractions[0]} - the city's crown jewel, 2) The Fan Zone at ${city.fanZone} for pre-match atmosphere and big screen viewing, 3) Local sports bars to meet fellow fans, 4) ${city.topAttractions[1]} for amazing photos, 5) Try the local cuisine - ask locals for their favorite spots! Plan to arrive at least 3-4 hours before kickoff for the full matchday experience.`
    },
    {
      question: 'Is it safe for international fans?',
      answer: `${city.safety} ${city.name} welcomes millions of tourists annually and will have enhanced security for the World Cup. Stick to well-populated areas, keep valuables secure, and use official transportation. Download offline maps and save emergency numbers. The fan atmosphere will be electric and friendly! Travel insurance is highly recommended.`
    },
    {
      question: 'What\'s the weather like during the tournament?',
      answer: `Expect ${city.weather.summer.toLowerCase()} conditions with temperatures ${city.weather.tempRange}. ${city.weather.description} Pack accordingly: sunscreen, comfortable walking shoes, and layers. Stadium tip: dress for the weather but bring a light jacket as indoor stadiums can be cool.`
    },
    {
      question: 'Can I get by with English only?',
      answer: city.country === 'USA' || city.country === 'Canada'
        ? `Yes! English is widely spoken in ${city.name}. ${city.country === 'Canada' ? 'French is also common in Canada, but English works everywhere.' : 'Spanish is also common in many areas, which is helpful for communicating.'} During the World Cup, expect multilingual signage and volunteers at major venues.`
        : `Spanish is the primary language, but ${city.name} is very tourist-friendly. Basic Spanish phrases are appreciated! Download Google Translate offline. Major hotels, restaurants near tourist areas, and World Cup venues will have English-speaking staff. Learn: "¿Dónde está...?" (Where is...?) and "¿Cuánto cuesta?" (How much?).`
    },
    {
      question: 'What about food and local specialties?',
      answer: city.country === 'Mexico'
        ? `You're in for a treat! ${city.name} offers incredible authentic Mexican cuisine. Don't leave without trying: street tacos, local mole, fresh ceviche, and regional specialties. Ask locals for "fondas" (casual eateries) for authentic, affordable meals. Food markets are perfect for breakfast. Stay hydrated and ease into spicy foods if you're not used to them!`
        : city.country === 'Canada'
        ? `${city.name} is incredibly diverse with world-class international cuisine. Must-tries: poutine (Canadian classic), fresh seafood, diverse ethnic restaurants. The food scene is fantastic! Fan zones will have food trucks and local vendors. Fine dining to food courts - there's something for every budget. Tim Hortons for coffee is a Canadian institution!`
        : `${city.name} offers diverse dining from budget-friendly to high-end. American classics plus international cuisine from the city's diverse communities. Fan tip: explore local neighborhoods for authentic experiences beyond tourist areas. Food trucks near the stadium on match days are convenient. Sports bars are perfect for the pre-game atmosphere with fellow fans!`
    },
    {
      question: 'How much money should I budget per day?',
      answer: `Realistic daily budget for World Cup fans: Budget traveler: $150-200 (hostels/Airbnb, street food, public transit), Mid-range: $300-400 (decent hotel, restaurants, some attractions), Luxury: $600+ (top hotels, fine dining, private transport). Remember: Match tickets are separate! Credit cards widely accepted, but carry some cash for small purchases, tips, and street vendors.`
    }
  ];

  // Additional practical info for fans
  const practicalInfo = [
    {
      icon: Phone,
      title: 'Emergency Numbers',
      content: city.country === 'USA' ? '911 (Police, Fire, Ambulance)' : city.country === 'Canada' ? '911 (Emergency Services)' : '911 (Emergency) • Tourist Police: 078',
      color: 'text-red-400'
    },
    {
      icon: Wifi,
      title: 'Connectivity',
      content: 'Free WiFi at Fan Zones, most hotels, and cafes. Consider a local SIM card or international plan for navigation and communication.',
      color: 'text-blue-400'
    },
    {
      icon: CreditCard,
      title: 'Payment Methods',
      content: city.country === 'Mexico' 
        ? 'Credit cards accepted widely, but carry cash for street vendors. ATMs available everywhere. US Dollars sometimes accepted in tourist areas.'
        : 'Credit/debit cards accepted almost everywhere. Contactless payment very common. ATMs widely available. Tipping: 15-20% at restaurants.',
      color: 'text-green-400'
    },
    {
      icon: Languages,
      title: 'Language Tip',
      content: city.country === 'Mexico'
        ? 'Spanish is primary. Learn basics: "Hola" (Hello), "Gracias" (Thank you), "¿Cuánto?" (How much?). Download translation app!'
        : 'English widely spoken. Translation apps helpful for diverse communities. FIFA volunteers multilingual at venues.',
      color: 'text-purple-400'
    },
    {
      icon: Bus,
      title: 'Getting Around',
      content: city.transitScore === 'High'
        ? 'Excellent public transit! Get a transit pass/card for convenience. Apps: Check local transit app for real-time schedules. Match days: Use public transport!'
        : 'Limited public transit. Uber/Lyft recommended. Consider renting a car if exploring beyond the city. Match days: Book rides in advance or use official shuttles.',
      color: 'text-yellow-400'
    },
    {
      icon: Hotel,
      title: 'Accommodation Tips',
      content: `Book ASAP! Prices surge during tournament. Consider: 1) Downtown for nightlife/dining, 2) Near Fan Zone at ${city.fanZone}, 3) Transit-accessible areas. Airbnb and vacation rentals good for groups.`,
      color: 'text-pink-400'
    }
  ];

  // SEO meta description
  const metaDescription = `🏆 Ultimate ${city.name} World Cup 2026 Fan Guide! ${city.stadium} hosts ${cityMatches.length} matches. Complete info: hotels, transport, attractions, FAQs & local tips for football fans!`;
  const pageTitle = `${city.name} - FIFA World Cup 2026 Host City Guide | Fan Info & Tips`;

  return (
    <>
      <SEO
        title={pageTitle}
        description={metaDescription}
        keywords={getCityKeywords(city)}
        canonicalUrl={`/cities/${city.id}`}
        ogImage={getCityImageUrl(city.id)}
        structuredData={[
          generateCityStructuredData(city),
          generateBreadcrumbData([
            { name: 'Home', url: 'https://worldcup2026planner.com/' },
            { name: 'Cities', url: 'https://worldcup2026planner.com/app' },
            { name: city.name, url: `https://worldcup2026planner.com/cities/${city.id}` }
          ]),
          {
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            "name": city.name,
            "description": metaDescription,
            "image": getCityImageUrl(city.id),
            "address": {
              "@type": "PostalAddress",
              "addressCountry": city.country,
              "addressLocality": city.name
            },
            "tourismType": "Sports Tourism",
            "event": {
              "@type": "SportsEvent",
              "name": "FIFA World Cup 2026",
              "sport": "Soccer",
              "location": {
                "@type": "StadiumOrArena",
                "name": city.stadium,
                "maximumAttendeeCapacity": city.capacity
              }
            }
          }
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 safe-top safe-bottom">
          {/* Back Button */}
          <Link
            to="/app"
            className="inline-flex items-center gap-2 text-fifa-blue hover:text-fifa-gold transition-colors mb-6 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to All Cities</span>
          </Link>

          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden mb-6 sm:mb-8">
            <img 
              src={getCityImageUrl(city.id)} 
              alt={`${city.name} cityscape`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-fifa-gold drop-shadow-lg" />
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">{city.name}</h1>
              </div>
              <p className="text-fifa-gold text-lg sm:text-xl font-bold drop-shadow-lg">
                {city.country === 'USA' ? '🇺🇸' : city.country === 'Mexico' ? '🇲🇽' : '🇨🇦'} {city.country}
              </p>
            </div>
          </div>

          {/* Header Info */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-5 sm:p-6 lg:p-8 shadow-xl mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4">
              <div>
                <p className="text-gray-300 text-sm sm:text-base">Airport Code</p>
                <p className="text-2xl sm:text-3xl font-bold text-fifa-blue">{city.airportCode}</p>
              </div>
              <div className="flex items-center gap-3 bg-gray-900/50 rounded-lg px-4 py-3 border border-gray-700">
                <Trophy className="w-5 h-5 text-fifa-gold" />
                <div>
                  <p className="text-gray-300 text-sm">Matches Hosted</p>
                  <p className="text-xl font-bold text-white">{cityMatches.length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabbed Navigation - Fixed Mobile Scrolling */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl mb-6 overflow-hidden">
            {/* Tab Headers - Improved horizontal scrolling on mobile */}
            <div className="flex overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 border-b border-gray-700 scroll-smooth">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex-shrink-0 min-w-[130px] px-4 sm:px-6 py-3 sm:py-4 text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'bg-fifa-blue/20 text-fifa-blue border-b-2 border-fifa-blue'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/30'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Info className="w-4 h-4" />
                  <span>Overview</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('matches')}
                className={`flex-shrink-0 min-w-[150px] px-4 sm:px-6 py-3 sm:py-4 text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'matches'
                    ? 'bg-fifa-blue/20 text-fifa-blue border-b-2 border-fifa-blue'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/30'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Trophy className="w-4 h-4" />
                  <span>Matches & Fun</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('practical')}
                className={`flex-shrink-0 min-w-[150px] px-4 sm:px-6 py-3 sm:py-4 text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'practical'
                    ? 'bg-fifa-blue/20 text-fifa-blue border-b-2 border-fifa-blue'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/30'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <PartyPopper className="w-4 h-4" />
                  <span>Practical Info</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('food')}
                className={`flex-shrink-0 min-w-[140px] px-4 sm:px-6 py-3 sm:py-4 text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'food'
                    ? 'bg-fifa-blue/20 text-fifa-blue border-b-2 border-fifa-blue'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/30'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Utensils className="w-4 h-4" />
                  <span>Food & Fun</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className={`flex-shrink-0 min-w-[110px] px-4 sm:px-6 py-3 sm:py-4 text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'faq'
                    ? 'bg-fifa-blue/20 text-fifa-blue border-b-2 border-fifa-blue'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/30'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>FAQs</span>
                </div>
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-5 sm:p-6 lg:p-8">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-6 animate-fade-in">
                  {/* Stadium Info */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 text-fifa-gold" />
                      Stadium Information
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-900/50 rounded-lg p-4">
                        <div className="text-xs text-gray-400 mb-2">Stadium Name</div>
                        <div className="text-base sm:text-lg font-semibold text-white">{city.stadium}</div>
                      </div>
                      <div className="bg-gray-900/50 rounded-lg p-4">
                        <div className="text-xs text-gray-400 mb-2">Capacity</div>
                        <div className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                          <Users className="w-5 h-5 text-fifa-blue" />
                          {city.capacity.toLocaleString()} seats
                        </div>
                      </div>
                      <div className="bg-gray-900/50 rounded-lg p-4">
                        <div className="text-xs text-gray-400 mb-2">Fan Zone</div>
                        <div className="text-base sm:text-lg font-semibold text-white">{city.fanZone}</div>
                      </div>
                      <div className="bg-gray-900/50 rounded-lg p-4">
                        <div className="text-xs text-gray-400 mb-2">Timezone</div>
                        <div className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                          <Clock className="w-5 h-5 text-fifa-blue" />
                          UTC{city.timezoneOffset >= 0 ? '+' : ''}{city.timezoneOffset}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4">Quick Stats</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                      {/* Transit Score */}
                      <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-4 sm:p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <Train className="w-5 h-5 sm:w-6 sm:h-6 text-fifa-blue" />
                          <h3 className="font-bold text-base sm:text-lg text-white">Public Transit</h3>
                        </div>
                        <div className={`inline-block px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-bold border ${getTransitScoreColor(city.transitScore)}`}>
                          {city.transitScore} Score
                        </div>
                      </div>

                      {/* Hotel Cost */}
                      <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-4 sm:p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-fifa-blue" />
                          <h3 className="font-bold text-base sm:text-lg text-white">Hotel Cost</h3>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl sm:text-3xl font-bold text-white">${city.averageHotelCost}</span>
                          <span className="text-sm text-gray-400">/night</span>
                          <span className={`ml-2 text-lg sm:text-xl font-bold ${getCostLevel(city.averageHotelCost).color}`}>
                            {getCostLevel(city.averageHotelCost).label}
                          </span>
                        </div>
                      </div>

                      {/* Safety */}
                      <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-4 sm:p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-fifa-blue" />
                          <h3 className="font-bold text-base sm:text-lg text-white">Safety</h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{city.safety}</p>
                      </div>
                    </div>
                  </div>

                  {/* Weather - Improved Mobile Layout */}
                  <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-700/50 p-5 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <Cloud className="w-6 h-6 text-fifa-blue" />
                      Weather During World Cup
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-900/30 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-2 font-medium">Climate</div>
                        <div className="text-lg font-semibold text-white">{city.weather.summer}</div>
                      </div>
                      <div className="bg-gray-900/30 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-2 font-medium">Temperature Range</div>
                        <div className="text-lg font-semibold text-white">{city.weather.tempRange}</div>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{city.weather.description}</p>
                    </div>
                  </div>

                  {/* Local Tips */}
                  <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-5 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-fifa-gold" />
                      Local Tips & Insights
                    </h2>
                    <div className="space-y-3">
                      {city.localTips.map((tip, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 sm:gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-fifa-blue/50 transition-colors"
                        >
                          <div className="mt-0.5">
                            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-fifa-blue flex-shrink-0" />
                          </div>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Matches & Fun Tab */}
              {activeTab === 'matches' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid lg:grid-cols-2 gap-5 sm:gap-6">
            {/* Matches at this City */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-5 sm:p-6 shadow-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-fifa-gold" />
                Matches at {city.name}
              </h2>
              <div className="mb-4 px-4 py-2 bg-fifa-blue/20 text-fifa-blue rounded-lg inline-flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span className="text-sm font-semibold">{cityMatches.length} {cityMatches.length === 1 ? 'match' : 'matches'}</span>
              </div>
              
              {cityMatches.length > 0 ? (
                <div className="space-y-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
                  {cityMatches.map((match) => (
                    <div 
                      key={match.id}
                      className="p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-fifa-blue/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <div className="px-3 py-1 bg-fifa-blue/20 text-fifa-blue text-xs font-bold rounded-full">
                            {match.stage}
                          </div>
                          {match.group && (
                            <div className="px-3 py-1 bg-fifa-gold/20 text-fifa-gold text-xs font-bold rounded-full">
                              Group {match.group}
                            </div>
                          )}
                        </div>
                        <div className="text-xs text-gray-400">
                          #{match.matchNumber}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                        <div className="text-base font-semibold text-white">
                          {match.homeTeam} vs {match.awayTeam}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400">
                          {formatMatchDate(match.date, match.time)} • {match.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  No matches scheduled at this venue
                </div>
              )}
            </div>

            {/* Top Attractions */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-5 sm:p-6 shadow-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-fifa-gold" />
                Top Attractions
              </h2>
              <div className="grid gap-3">
                {city.topAttractions.map((attraction, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-fifa-blue/50 transition-all group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-fifa-blue/20 flex items-center justify-center group-hover:bg-fifa-blue/30 transition-colors">
                      <span className="text-fifa-blue font-bold text-base">{index + 1}</span>
                    </div>
                    <p className="text-gray-200 text-sm sm:text-base font-medium">{attraction}</p>
                  </div>
                ))}
              </div>
            </div>
                  </div>

                  {/* GetYourGuide Links */}
                  <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-xl border border-orange-700/50 p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
              Book Tours & Experiences
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-5">
              Powered by GetYourGuide - Skip the lines and book in advance
            </p>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {city.getYourGuideLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-orange-500/50 hover:bg-gray-900/70 transition-all"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                      <span className="text-orange-400 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors line-clamp-2">
                        {link.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">GetYourGuide.com</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-orange-400 transition-colors flex-shrink-0 ml-2" />
                </a>
              ))}
            </div>
                    <div className="mt-5 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                      <p className="text-xs sm:text-sm text-gray-400">
                        💡 <strong>Tip:</strong> Book popular attractions early as World Cup crowds will be massive! These tours offer skip-the-line access.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Practical Info Tab */}
              {activeTab === 'practical' && (
                <div className="space-y-6 animate-fade-in">
                  {/* World Cup Fan Essentials - Practical Info */}
                  <div className="bg-gradient-to-br from-fifa-blue/20 to-fifa-gold/10 backdrop-blur-sm rounded-xl border border-fifa-blue/30 p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <PartyPopper className="w-5 h-5 sm:w-6 sm:h-6 text-fifa-gold" />
              World Cup Fan Essentials
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-5">
              Everything you need to know for an amazing matchday experience in {city.name}!
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {practicalInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900/50 rounded-xl border border-gray-700 p-4 hover:border-fifa-blue/50 transition-all"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                        <IconComponent className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <h3 className="font-bold text-white text-sm flex-1">{info.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{info.content}</p>
                  </div>
                );
              })}
                    </div>
                  </div>

                  {/* Final Fan Tips */}
                  <div className="bg-gradient-to-br from-fifa-gold/20 to-orange-900/20 backdrop-blur-sm rounded-xl border border-fifa-gold/30 p-5 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-fifa-gold animate-pulse" />
                      Essential Tips from World Cup Veterans
                    </h2>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg border border-gray-700">
                        <span className="text-2xl">🎫</span>
                        <div>
                          <p className="text-sm font-semibold text-fifa-gold mb-1">Ticket & Entry</p>
                          <p className="text-xs sm:text-sm text-gray-300">Arrive 2-3 hours early for security checks. Digital tickets on phone (screenshot as backup). ID required. Stadium bag policy: small clear bags only!</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg border border-gray-700">
                        <span className="text-2xl">👕</span>
                        <div>
                          <p className="text-sm font-semibold text-fifa-gold mb-1">What to Wear</p>
                          <p className="text-xs sm:text-sm text-gray-300">Wear your team colors! Comfortable shoes (you'll walk A LOT). Layer for temperature changes. Bring rain gear if weather calls for it. Sunscreen is essential!</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg border border-gray-700">
                        <span className="text-2xl">📱</span>
                        <div>
                          <p className="text-sm font-semibold text-fifa-gold mb-1">Stay Connected</p>
                          <p className="text-xs sm:text-sm text-gray-300">Download: FIFA app, stadium app, local transit app, offline maps. Portable charger is a MUST. Meet-up spot with friends in case you get separated in crowds.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg border border-gray-700">
                        <span className="text-2xl">💰</span>
                        <div>
                          <p className="text-sm font-semibold text-fifa-gold mb-1">Money Matters</p>
                          <p className="text-xs sm:text-sm text-gray-300">Stadium = cashless! Credit/debit only. Outside stadium: carry $50-100 cash for vendors, tips, emergencies. Notify bank of travel to avoid card blocks.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg border border-gray-700">
                        <span className="text-2xl">🌟</span>
                        <div>
                          <p className="text-sm font-semibold text-fifa-gold mb-1">Make Memories</p>
                          <p className="text-xs sm:text-sm text-gray-300">Talk to other fans! Trade pins, scarves, share stories. The friendships and memories are what make the World Cup magical. Enjoy every moment - it's the experience of a lifetime! ⚽🏆</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Food & Fun Tab */}
              {activeTab === 'food' && (
                <div className="space-y-6 animate-fade-in">
                  {/* Fan Favorites - Best Spots */}
                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl border border-purple-700/50 p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
              Fan Favorites: Where to Eat, Drink & Celebrate
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-4">
                <h3 className="font-bold text-fifa-gold mb-2 flex items-center gap-2">
                  ⚽ Pre-Match Atmosphere
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  The Fan Zone at <strong className="text-white">{city.fanZone}</strong> opens 4-6 hours before kickoff! Free entry, live entertainment, food vendors, and giant screens showing earlier matches. Perfect for meeting fellow fans from around the world!
                </p>
                <div className="text-xs text-fifa-blue font-semibold">
                  📍 Expect 10,000+ fans in peak times!
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-4">
                <h3 className="font-bold text-fifa-gold mb-2 flex items-center gap-2">
                  🍺 Best Sports Bars & Pubs
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  Head to downtown {city.name} for authentic sports bar atmosphere. Most bars open early on match days with special World Cup menus. Book ahead for popular spots! Look for bars showing international matches - you'll find fans from everywhere.
                </p>
                <div className="text-xs text-fifa-blue font-semibold">
                  💡 Ask locals or hotel staff for recommendations!
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-4">
                <h3 className="font-bold text-fifa-gold mb-2 flex items-center gap-2">
                  🎉 Post-Match Celebrations
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  After the final whistle, the party continues! Fan zones stay open for 2-3 hours post-match. Downtown areas will be buzzing with celebrating fans. Safe, organized, and unforgettable atmosphere. Join the singing, flag-waving crowds!
                </p>
                <div className="text-xs text-fifa-blue font-semibold">
                  🎊 The World Cup magic happens off the pitch too!
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-4">
                <h3 className="font-bold text-fifa-gold mb-2 flex items-center gap-2">
                  🍕 Local Food Must-Tries
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  Don't leave without trying the local specialties! Ask your hotel or fellow fans for authentic spots. Food trucks near the stadium offer quick bites. For sit-down meals, explore neighborhoods away from tourist traps for better value and quality.
                </p>
                <div className="text-xs text-fifa-blue font-semibold">
                  🌮 Street food = authentic local flavors!
                </div>
              </div>
                    </div>
                  </div>
                </div>
              )}

              {/* FAQ Tab */}
              {activeTab === 'faq' && (
                <div className="space-y-6 animate-fade-in">
                  {/* FAQ Section */}
                  <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Info className="w-5 h-5 sm:w-6 sm:h-6 text-fifa-blue" />
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-400 mb-5">
              Everything World Cup fans need to know about {city.name}
            </p>
            <div className="space-y-3">
              {cityFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 rounded-xl border border-gray-700 overflow-hidden hover:border-fifa-blue/50 transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-4 flex items-start justify-between gap-3 text-left group"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-sm sm:text-base group-hover:text-fifa-blue transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-fifa-blue" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-fifa-blue transition-colors" />
                      )}
                    </div>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 pb-4 animate-slide-down">
                      <div className="pt-2 border-t border-gray-700">
                        <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

