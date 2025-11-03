import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllStadiums, getStadiumsByCountry } from '../data/stadiums';
import { Search, MapPin, Users, Calendar, Building2, Filter } from 'lucide-react';

export default function StadiumArchive() {
  const [searchTerm, setSearchTerm] = useState('');
  const [countryFilter, setCountryFilter] = useState<'all' | 'USA' | 'Mexico' | 'Canada'>('all');

  const allStadiums = getAllStadiums();
  
  const filteredStadiums = allStadiums.filter(stadium => {
    const matchesSearch = stadium.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stadium.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stadium.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = countryFilter === 'all' || stadium.country === countryFilter;
    return matchesSearch && matchesCountry;
  });

  const countries = [
    { id: 'all', label: 'All Stadiums', count: allStadiums.length, flag: '🌍' },
    { id: 'USA', label: 'United States', count: getStadiumsByCountry('USA').length, flag: '🇺🇸' },
    { id: 'Mexico', label: 'Mexico', count: getStadiumsByCountry('Mexico').length, flag: '🇲🇽' },
    { id: 'Canada', label: 'Canada', count: getStadiumsByCountry('Canada').length, flag: '🇨🇦' },
  ];

  const canonicalUrl = 'https://worldcup2026travel.com/stadiums';
  
  const stadiumArchiveSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': canonicalUrl,
        url: canonicalUrl,
        name: 'FIFA World Cup 2026 Stadiums - Complete Venue Guide',
        description: 'Complete guide to all 16 FIFA World Cup 2026 stadiums across USA, Mexico, and Canada. Stadium details, capacities, locations, and travel information.',
        inLanguage: 'en-US',
        isPartOf: {
          '@type': 'WebSite',
          name: 'World Cup 2026 Travel Planner',
          url: 'https://worldcup2026travel.com'
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://worldcup2026travel.com'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Stadiums',
            item: canonicalUrl
          }
        ]
      },
      {
        '@type': 'ItemList',
        itemListElement: filteredStadiums.map((stadium, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'StadiumOrArena',
            '@id': `https://worldcup2026travel.com/stadiums/${stadium.id}`,
            name: stadium.name,
            address: {
              '@type': 'PostalAddress',
              addressLocality: stadium.city,
              addressCountry: stadium.country
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: stadium.coordinates[1],
              longitude: stadium.coordinates[0]
            },
            maximumAttendeeCapacity: stadium.capacity,
            image: stadium.featuredImage
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>FIFA World Cup 2026 Stadiums - Complete Guide to All 16 Venues</title>
        <meta name="description" content="Complete guide to all 16 FIFA World Cup 2026 stadiums across USA, Mexico, and Canada. Stadium capacities, locations, transit info, and match schedules." />
        <meta name="keywords" content="world cup 2026 stadiums, fifa venues 2026, MetLife Stadium, SoFi Stadium, Estadio Azteca, world cup venue guide, stadium capacities 2026" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Language and Region */}
        <html lang="en" />
        <meta httpEquiv="content-language" content="en-US" />
        
        {/* Geographic SEO - Multi-country */}
        <meta name="geo.region" content="US;MX;CA" />
        <meta name="geo.placename" content="United States;Mexico;Canada" />
        <meta name="geo.position" content="40.813611;-74.074167" /> {/* MetLife as primary */}
        <meta name="ICBM" content="40.813611, -74.074167" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="FIFA World Cup 2026 Stadiums - Complete Venue Guide" />
        <meta property="og:description" content="Explore all 16 FIFA World Cup 2026 stadiums. From MetLife Stadium hosting the Final to Estadio Azteca's historic third World Cup." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="World Cup 2026 Travel Planner" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&h=630&fit=crop" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@WorldCup2026" />
        <meta name="twitter:title" content="FIFA World Cup 2026 Stadiums Guide" />
        <meta name="twitter:description" content="Complete guide to all 16 World Cup 2026 stadiums across USA, Mexico, and Canada." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&h=600&fit=crop" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(stadiumArchiveSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <Building2 className="w-12 h-12 text-fifa-gold-400" />
              <h1 className="text-5xl font-bold gradient-text">World Cup 2026 Stadiums</h1>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Complete guide to all 16 FIFA World Cup 2026 stadiums across USA, Mexico, and Canada. 
              From MetLife Stadium hosting the Final to Estadio Azteca's historic third World Cup.
            </p>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-fifa-blue" />
                <span><strong className="text-fifa-gold">{allStadiums.length}</strong> Stadiums</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-fifa-blue" />
                <span><strong className="text-fifa-gold">1M+</strong> Total Capacity</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-fifa-blue" />
                <span><strong className="text-fifa-gold">3</strong> Countries</span>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-fifa-blue-400 transition-colors" />
              <input
                type="text"
                placeholder="Search stadiums by name, city, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-12 text-lg"
              />
            </div>
          </div>

          {/* Country Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            <div className="flex items-center gap-2 text-gray-400 mr-2">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-semibold">Filter by Country:</span>
            </div>
            {countries.map((country) => (
              <button
                key={country.id}
                onClick={() => setCountryFilter(country.id as any)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  countryFilter === country.id
                    ? 'bg-gradient-to-r from-fifa-blue-500 to-fifa-blue-600 text-white shadow-glow-blue scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span className="mr-2">{country.flag}</span>
                {country.label} <span className="text-sm opacity-70">({country.count})</span>
              </button>
            ))}
          </div>

          {/* Results Counter */}
          {(searchTerm || countryFilter !== 'all') && (
            <div className="mb-6 text-center">
              <p className="text-gray-400">
                Showing <span className="text-fifa-blue-300 font-bold">{filteredStadiums.length}</span> {filteredStadiums.length === 1 ? 'stadium' : 'stadiums'}
              </p>
            </div>
          )}

          {/* Stadiums Grid */}
          {filteredStadiums.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStadiums.map((stadium) => (
                <Link
                  key={stadium.id}
                  to={`/stadiums/${stadium.id}`}
                  className="card hover:border-fifa-blue-500 hover:scale-105 transition-all duration-300 group overflow-hidden"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={stadium.featuredImage}
                      alt={`${stadium.name} - ${stadium.city}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-fifa-blue-500/90 backdrop-blur-sm text-white text-xs font-semibold">
                        {stadium.country === 'USA' ? '🇺🇸 USA' : stadium.country === 'Mexico' ? '🇲🇽 Mexico' : '🇨🇦 Canada'}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full bg-fifa-gold/90 backdrop-blur-sm text-gray-900 text-xs font-bold">
                        {stadium.totalMatches} Matches
                      </span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-2 group-hover:text-fifa-blue-300 transition-colors">
                    {stadium.name}
                  </h2>
                  
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{stadium.city}, {stadium.country}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-fifa-blue mb-1">
                        <Users className="w-4 h-4" />
                        <span className="text-xs font-semibold">Capacity</span>
                      </div>
                      <p className="text-lg font-bold">{stadium.capacity.toLocaleString()}</p>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-fifa-gold mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-xs font-semibold">Built</span>
                      </div>
                      <p className="text-lg font-bold">{stadium.yearBuilt}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-800">
                    <div className="flex items-center justify-between text-xs">
                      <span className={`px-2 py-1 rounded ${
                        stadium.transitScore === 'High' ? 'bg-green-500/20 text-green-400' :
                        stadium.transitScore === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {stadium.transitScore} Transit
                      </span>
                      <span className="text-gray-500">
                        {stadium.roofType} Roof
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Building2 className="w-20 h-20 text-gray-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-2">No stadiums found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setCountryFilter('all');
                }}
                className="btn-secondary"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Quick Facts Section */}
          <div className="mt-16 bg-gradient-to-br from-fifa-blue-900/30 to-fifa-gold-900/30 rounded-xl border border-fifa-blue-700/50 p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Stadium Quick Facts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-fifa-gold mb-2">87,523</div>
                <div className="text-gray-300">Largest Stadium</div>
                <div className="text-sm text-gray-500 mt-1">Estadio Azteca, Mexico City</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-fifa-blue mb-2">MetLife</div>
                <div className="text-gray-300">Final Venue</div>
                <div className="text-sm text-gray-500 mt-1">July 19, 2026</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">$5.5B</div>
                <div className="text-gray-300">Most Expensive</div>
                <div className="text-sm text-gray-500 mt-1">SoFi Stadium, Los Angeles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

