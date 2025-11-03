import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { fanZones } from '../data/fanZones';
import { 
  MapPin, 
  Users, 
  Wifi, 
  Trophy,
  ChevronRight,
  Globe,
  PartyPopper
} from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';

export default function FanZones() {
  const navigate = useNavigate();

  const usaZones = fanZones.filter(z => z.country === 'USA');
  const mexicoZones = fanZones.filter(z => z.country === 'Mexico');
  const canadaZones = fanZones.filter(z => z.country === 'Canada');

  const stats = [
    { icon: <Globe className="w-6 h-6" />, value: fanZones.length, label: 'Fan Zones' },
    { icon: <Users className="w-6 h-6" />, value: '500K+', label: 'Total Capacity' },
    { icon: <PartyPopper className="w-6 h-6" />, value: '3', label: 'Countries' },
    { icon: <Trophy className="w-6 h-6" />, value: '104', label: 'Matches' }
  ];

  return (
    <>
      <Helmet>
        <title>FIFA World Cup 2026 Fan Zones - Official Viewing Locations | World Cup Planner</title>
        <meta 
          name="description" 
          content="Discover official FIFA World Cup 2026 Fan Zones across USA, Mexico, and Canada. Live match screenings, entertainment, food, and celebrations in every host city." 
        />
        <meta 
          name="keywords" 
          content="World Cup 2026 fan zones, FIFA fan fest, World Cup viewing parties, fan zones USA Mexico Canada, World Cup public viewing, fan festivals 2026" 
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="FIFA World Cup 2026 Fan Zones - Official Viewing Locations" />
        <meta property="og:description" content="Experience the World Cup at official Fan Zones across 16 host cities with live screenings, entertainment, and celebrations." />
        <meta property="og:type" content="website" />
        
        {/* Geographic tags */}
        <meta name="geo.region" content="US;MX;CA" />
        <meta name="geo.placename" content="United States; Mexico; Canada" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EventSeries',
            name: 'FIFA World Cup 2026 Fan Zones',
            description: 'Official FIFA World Cup 2026 Fan Zones across USA, Mexico, and Canada featuring live match screenings, entertainment, and celebrations.',
            organizer: {
              '@type': 'Organization',
              name: 'FIFA',
              url: 'https://www.fifa.com'
            },
            location: {
              '@type': 'Place',
              address: {
                '@type': 'PostalAddress',
                addressCountry: ['US', 'MX', 'CA']
              }
            },
            startDate: '2026-06-11',
            endDate: '2026-07-19'
          })}
        </script>
      </Helmet>

      <SimpleHeader />

      <div className="min-h-screen bg-gray-950 py-4 sm:py-6 pb-16">
        <div className="section-content">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-fifa-blue-500/10 border border-fifa-blue-500/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6">
              <PartyPopper className="w-5 h-5 text-fifa-gold-400" />
              <span className="text-fifa-gold-400 font-bold">Official Fan Zones</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 gradient-text">
              FIFA World Cup 2026
              <br />
              Fan Zones
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Experience the excitement of the World Cup at official Fan Zones across North America. 
              Watch live matches on giant screens, enjoy local food, entertainment, and celebrate with thousands of fans.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="card p-4 text-center">
                  <div className="flex justify-center text-fifa-blue-400 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* USA Fan Zones */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-fifa-blue-500 to-fifa-blue-600 rounded-full"></div>
              <h2 className="text-3xl font-black text-white flex items-center gap-3">
                <span className="text-2xl">🇺🇸</span> United States
              </h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-fifa-blue-600 to-transparent rounded-full"></div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {usaZones.map((zone) => (
                <FanZoneCard key={zone.id} zone={zone} navigate={navigate} />
              ))}
            </div>
          </section>

          {/* Mexico Fan Zones */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-red-500 rounded-full"></div>
              <h2 className="text-3xl font-black text-white flex items-center gap-3">
                <span className="text-2xl">🇲🇽</span> Mexico
              </h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-red-500 to-transparent rounded-full"></div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mexicoZones.map((zone) => (
                <FanZoneCard key={zone.id} zone={zone} navigate={navigate} />
              ))}
            </div>
          </section>

          {/* Canada Fan Zones */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-white rounded-full"></div>
              <h2 className="text-3xl font-black text-white flex items-center gap-3">
                <span className="text-2xl">🇨🇦</span> Canada
              </h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-red-400 to-transparent rounded-full"></div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {canadaZones.map((zone) => (
                <FanZoneCard key={zone.id} zone={zone} navigate={navigate} />
              ))}
            </div>
          </section>

          {/* General FAQ */}
          <section className="mt-16">
            <div className="card p-8">
              <h2 className="text-3xl font-black text-white mb-6">About World Cup Fan Zones</h2>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">What are Fan Zones?</h3>
                  <p className="leading-relaxed">
                    FIFA Fan Zones are official public viewing areas where fans can watch matches on giant screens, 
                    enjoy live entertainment, local food, and celebrate the World Cup atmosphere with thousands of other supporters. 
                    Entry is typically free, making it accessible for everyone to experience the tournament excitement.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">What can I expect?</h3>
                  <p className="leading-relaxed">
                    Each Fan Zone offers live match screenings on massive LED screens, interactive football games, 
                    cultural performances, local and international food vendors, official merchandise stores, and family-friendly activities. 
                    The atmosphere is electric, especially during important matches!
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Do I need tickets?</h3>
                  <p className="leading-relaxed">
                    Most Fan Zones are free to enter on a first-come, first-served basis. However, some may have 
                    premium VIP areas that require tickets. We recommend arriving early for popular matches as they can reach capacity. 
                    Check each specific Fan Zone page for detailed access information.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

interface FanZoneCardProps {
  zone: any;
  navigate: any;
}

function FanZoneCard({ zone, navigate }: FanZoneCardProps) {
  return (
    <button
      onClick={() => navigate(`/fan-zones/${zone.id}`)}
      className="group card p-6 text-left hover:scale-105 transition-all duration-300"
    >
      {/* City Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="badge-blue text-xs">{zone.country}</span>
        <MapPin className="w-5 h-5 text-fifa-blue-400" />
      </div>

      {/* City Name */}
      <h3 className="text-2xl font-black text-white mb-2 group-hover:text-fifa-blue-400 transition-colors">
        {zone.cityName}
      </h3>

      {/* Location */}
      <p className="text-sm text-fifa-gold-400 font-semibold mb-3">
        {zone.name}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-400 mb-4 line-clamp-3 leading-relaxed">
        {zone.description}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <Users className="w-4 h-4 text-fifa-blue-400" />
          <span>{zone.capacity}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <Wifi className="w-4 h-4 text-fifa-blue-400" />
          <span>Free WiFi</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <Trophy className="w-4 h-4 text-fifa-blue-400" />
          <span>Live Matches</span>
        </div>
      </div>

      {/* CTA */}
      <div className="flex items-center text-fifa-blue-400 font-semibold text-sm">
        <span className="group-hover:mr-2 transition-all">View Details</span>
        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
      </div>
    </button>
  );
}

