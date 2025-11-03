import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { cities, getCitiesByCountry } from '../data/cities';
import { Search, MapPin, Users, Building2, Filter, DollarSign, Train, Trophy, Cloud } from 'lucide-react';

export default function CitiesArchive() {
  const [searchTerm, setSearchTerm] = useState('');
  const [countryFilter, setCountryFilter] = useState<'all' | 'USA' | 'Mexico' | 'Canada'>('all');

  const allCities = cities;
  
  const filteredCities = allCities.filter(city => {
    const matchesSearch = city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         city.stadium.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         city.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = countryFilter === 'all' || city.country === countryFilter;
    return matchesSearch && matchesCountry;
  });

  const countries = [
    { id: 'all', label: 'All Cities', count: allCities.length, flag: '🌍' },
    { id: 'USA', label: 'United States', count: getCitiesByCountry('USA').length, flag: '🇺🇸' },
    { id: 'Mexico', label: 'Mexico', count: getCitiesByCountry('Mexico').length, flag: '🇲🇽' },
    { id: 'Canada', label: 'Canada', count: getCitiesByCountry('Canada').length, flag: '🇨🇦' },
  ];

  const canonicalUrl = 'https://worldcup2026travel.com/cities';

  // Get Unsplash image for the city
  const getCityImageUrl = (cityId: string) => {
    const images: Record<string, string> = {
      'atlanta': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop',
      'boston': 'https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=800&h=500&fit=crop',
      'dallas': 'https://images.unsplash.com/photo-1583437176298-f2cc5e98f3be?w=800&h=500&fit=crop',
      'guadalajara': 'https://images.unsplash.com/photo-1600299207908-804295f87f96?w=800&h=500&fit=crop',
      'houston': 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&h=500&fit=crop',
      'kansas-city': 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&h=500&fit=crop',
      'los-angeles': 'https://images.unsplash.com/photo-1534190239940-9ba8944ea261?w=800&h=500&fit=crop',
      'mexico-city': 'https://images.unsplash.com/photo-1518659526054-e7f73d35f1f9?w=800&h=500&fit=crop',
      'miami': 'https://images.unsplash.com/photo-1501509497947-782640bc1412?w=800&h=500&fit=crop',
      'monterrey': 'https://images.unsplash.com/photo-1625430654768-34102525c46f?w=800&h=500&fit=crop',
      'new-york': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop',
      'philadelphia': 'https://images.unsplash.com/photo-1564156421-8f8e2810be4c?w=800&h=500&fit=crop',
      'san-francisco': 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?w=800&h=500&fit=crop',
      'seattle': 'https://images.unsplash.com/photo-1542223616-740cbd1ec46d?w=800&h=500&fit=crop',
      'toronto': 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=500&fit=crop',
      'vancouver': 'https://images.unsplash.com/photo-1559511260-66a654ae982a?w=800&h=500&fit=crop',
    };
    return images[cityId] || 'https://images.unsplash.com/photo-1541622469708-72e5ce8f0b44?w=800&h=500&fit=crop';
  };

  const getTransitScoreColor = (score: string) => {
    switch (score) {
      case 'High': return 'bg-green-500/20 text-green-400';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'Low': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };
  
  const citiesArchiveSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': canonicalUrl,
        url: canonicalUrl,
        name: 'FIFA World Cup 2026 Host Cities - Complete Travel Guide',
        description: 'Complete guide to all 16 FIFA World Cup 2026 host cities across USA, Mexico, and Canada. City guides, stadiums, hotels, attractions, and travel planning.',
        inLanguage: 'en-US',
        isPartOf: {
          '@type': 'WebSite',
          name: 'GolazoRoute',
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
            name: 'Cities',
            item: canonicalUrl
          }
        ]
      },
      {
        '@type': 'ItemList',
        itemListElement: filteredCities.map((city, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'City',
            '@id': `https://worldcup2026travel.com/cities/${city.id}`,
            name: city.name,
            address: {
              '@type': 'PostalAddress',
              addressCountry: city.country
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: city.coordinates[1],
              longitude: city.coordinates[0]
            }
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>FIFA World Cup 2026 Host Cities - Complete Travel Guide to All 16 Cities</title>
        <meta name="description" content="Explore all 16 FIFA World Cup 2026 host cities across USA, Mexico, and Canada. Complete city guides, stadiums, hotels, attractions, weather, and fan information for your World Cup adventure." />
        <meta name="keywords" content="world cup 2026 cities, fifa host cities 2026, world cup travel guide, new york world cup, los angeles world cup, mexico city world cup, toronto world cup, world cup city guide" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Language and Region */}
        <html lang="en" />
        <meta httpEquiv="content-language" content="en-US" />
        
        {/* Geographic SEO - Multi-country */}
        <meta name="geo.region" content="US;MX;CA" />
        <meta name="geo.placename" content="United States;Mexico;Canada" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="FIFA World Cup 2026 Host Cities - Complete Travel Guide" />
        <meta property="og:description" content="Discover all 16 FIFA World Cup 2026 host cities. From New York to Mexico City, complete guides for fans." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GolazoRoute" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&h=630&fit=crop" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@WorldCup2026" />
        <meta name="twitter:title" content="FIFA World Cup 2026 Cities Guide" />
        <meta name="twitter:description" content="Complete guide to all 16 World Cup 2026 host cities across USA, Mexico, and Canada." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&h=600&fit=crop" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(citiesArchiveSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <MapPin className="w-12 h-12 text-fifa-gold" />
              <h1 className="text-5xl font-bold gradient-text">World Cup 2026 Host Cities</h1>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Complete guide to all 16 FIFA World Cup 2026 host cities across USA, Mexico, and Canada. 
              Plan your World Cup adventure with detailed city guides, stadium info, hotels, and local attractions.
            </p>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-fifa-blue" />
                <span><strong className="text-fifa-gold">{allCities.length}</strong> Cities</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-fifa-blue" />
                <span><strong className="text-fifa-gold">{allCities.length}</strong> Stadiums</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-fifa-blue" />
                <span><strong className="text-fifa-gold">3</strong> Countries</span>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-fifa-blue transition-colors" />
              <input
                type="text"
                placeholder="Search cities by name, country, or stadium..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-fifa-blue transition-colors text-lg"
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
                    ? 'bg-gradient-to-r from-fifa-blue to-fifa-blue-600 text-white shadow-lg shadow-fifa-blue/50 scale-105'
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
                Showing <span className="text-fifa-blue font-bold">{filteredCities.length}</span> {filteredCities.length === 1 ? 'city' : 'cities'}
              </p>
            </div>
          )}

          {/* Cities Grid */}
          {filteredCities.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredCities.map((city) => (
                <Link
                  key={city.id}
                  to={`/cities/${city.id}`}
                  className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-fifa-blue hover:scale-105 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={getCityImageUrl(city.id)}
                      alt={`${city.name} cityscape`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-fifa-blue/90 backdrop-blur-sm text-white text-xs font-semibold">
                        {city.country === 'USA' ? '🇺🇸 USA' : city.country === 'Mexico' ? '🇲🇽 Mexico' : '🇨🇦 Canada'}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full bg-fifa-gold/90 backdrop-blur-sm text-gray-900 text-xs font-bold">
                        {city.airportCode}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-fifa-blue transition-colors">
                      {city.name}
                    </h2>
                    
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                      <Building2 className="w-4 h-4" />
                      <span className="line-clamp-1">{city.stadium}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-900/50 rounded-lg p-3">
                        <div className="flex items-center gap-2 text-fifa-blue mb-1">
                          <Users className="w-4 h-4" />
                          <span className="text-xs font-semibold">Capacity</span>
                        </div>
                        <p className="text-sm font-bold">{city.capacity.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-900/50 rounded-lg p-3">
                        <div className="flex items-center gap-2 text-fifa-gold mb-1">
                          <DollarSign className="w-4 h-4" />
                          <span className="text-xs font-semibold">Hotels</span>
                        </div>
                        <p className="text-sm font-bold">${city.averageHotelCost}/nt</p>
                      </div>
                    </div>
                    
                    <div className="pt-3 border-t border-gray-700">
                      <div className="flex items-center justify-between text-xs">
                        <span className={`px-2 py-1 rounded ${getTransitScoreColor(city.transitScore)}`}>
                          <Train className="w-3 h-3 inline mr-1" />
                          {city.transitScore} Transit
                        </span>
                        <span className="text-gray-500 flex items-center gap-1">
                          <Cloud className="w-3 h-3" />
                          {city.weather.tempRange}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <MapPin className="w-20 h-20 text-gray-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-2">No cities found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setCountryFilter('all');
                }}
                className="px-6 py-3 bg-fifa-blue hover:bg-fifa-blue-600 text-white rounded-xl font-semibold transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* SEO Content Section */}
          <div className="mt-16 space-y-8">
            {/* Quick Facts Section */}
            <div className="bg-gradient-to-br from-fifa-blue-900/30 to-fifa-gold-900/30 rounded-xl border border-fifa-blue-700/50 p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Host Cities Quick Facts</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-900/50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-fifa-gold mb-2">16</div>
                  <div className="text-gray-300">Host Cities</div>
                  <div className="text-sm text-gray-500 mt-1">Across 3 Countries</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-fifa-blue mb-2">New York</div>
                  <div className="text-gray-300">Final Host City</div>
                  <div className="text-sm text-gray-500 mt-1">MetLife Stadium</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">Mexico City</div>
                  <div className="text-gray-300">Opening Ceremony</div>
                  <div className="text-sm text-gray-500 mt-1">Estadio Azteca</div>
                </div>
              </div>
            </div>

            {/* About World Cup 2026 Cities Section */}
            <div className="bg-gray-800/60 rounded-xl border border-gray-700 p-8">
              <h2 className="text-3xl font-bold mb-6 text-white">About FIFA World Cup 2026 Host Cities</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-4">
                  The FIFA World Cup 2026 will be the first tournament to be hosted across three countries: the <strong>United States</strong>, <strong>Mexico</strong>, and <strong>Canada</strong>. 
                  With 16 host cities spanning the continent, this will be the most geographically diverse World Cup in history, showcasing North America's incredible cities, 
                  cultures, and passion for football.
                </p>
                
                <h3 className="text-2xl font-bold text-fifa-gold mt-6 mb-4">United States Host Cities</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The USA will host the majority of matches across 11 world-class cities: <strong>Atlanta, Boston, Dallas, Houston, Kansas City, Los Angeles, Miami, 
                  New York/New Jersey, Philadelphia, San Francisco Bay Area, and Seattle</strong>. These cities offer everything from iconic skylines and beaches 
                  to southern hospitality and west coast culture. The <strong>Final will be held at MetLife Stadium</strong> in New York/New Jersey on July 19, 2026.
                </p>

                <h3 className="text-2xl font-bold text-fifa-gold mt-6 mb-4">Mexico Host Cities</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Mexico brings three passionate football cities to the tournament: <strong>Guadalajara, Mexico City, and Monterrey</strong>. 
                  <strong> Estadio Azteca in Mexico City</strong> will host the <strong>Opening Ceremony</strong>, making history as the first stadium to host three 
                  World Cups (1970, 1986, 2026). Mexican fans are renowned for their passion, creating an electric atmosphere that's unmatched in world football.
                </p>

                <h3 className="text-2xl font-bold text-fifa-gold mt-6 mb-4">Canada Host Cities</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Canada will host matches in <strong>Toronto and Vancouver</strong>, bringing the World Cup to two of the country's most beautiful and diverse cities. 
                  Both cities offer stunning natural beauty, world-class amenities, and a multicultural atmosphere that reflects Canada's welcoming spirit. 
                  This will be Canada's first time hosting men's World Cup matches.
                </p>

                <h3 className="text-2xl font-bold text-fifa-gold mt-6 mb-4">Planning Your World Cup City Tour</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Each host city offers unique experiences beyond the matches:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li><strong>Cultural Attractions:</strong> From New York's museums to Mexico City's ancient ruins and Vancouver's natural wonders</li>
                  <li><strong>Local Cuisine:</strong> Experience authentic Texas BBQ, Mexican street food, Canadian poutine, and coastal seafood</li>
                  <li><strong>Fan Zones:</strong> Every city will have official FIFA Fan Zones for pre-match celebrations and big-screen viewing</li>
                  <li><strong>Transit Access:</strong> Most cities offer excellent public transportation to stadiums, with detailed guides on each city page</li>
                  <li><strong>Weather Variety:</strong> June-July weather ranges from perfect California sunshine to humid southern heat</li>
                </ul>

                <h3 className="text-2xl font-bold text-fifa-gold mt-6 mb-4">Travel Tips for World Cup Cities</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong>Book Early:</strong> Hotel prices surge during the World Cup. Book accommodations 6-12 months in advance</li>
                  <li><strong>Use Public Transit:</strong> Most cities have excellent transit to stadiums. Avoid driving on match days</li>
                  <li><strong>Allow Extra Time:</strong> Security at World Cup matches is strict. Arrive 2-3 hours before kickoff</li>
                  <li><strong>Explore Beyond Matches:</strong> Each city has incredible attractions - plan extra days to explore</li>
                  <li><strong>Check Visa Requirements:</strong> International visitors need appropriate visas for USA, Mexico, or Canada</li>
                  <li><strong>Get Travel Insurance:</strong> Protect your investment with comprehensive travel insurance</li>
                </ul>
              </div>
            </div>

            {/* Cities by Country Section */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-red-900/30 rounded-xl border border-blue-700/50 p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>🇺🇸</span> United States
                </h3>
                <p className="text-gray-300 text-sm mb-4">11 host cities with world-class stadiums and diverse experiences</p>
                <div className="space-y-2">
                  {getCitiesByCountry('USA').map(city => (
                    <Link 
                      key={city.id}
                      to={`/cities/${city.id}`}
                      className="block text-fifa-blue hover:text-fifa-gold transition-colors text-sm"
                    >
                      → {city.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-red-900/30 rounded-xl border border-green-700/50 p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>🇲🇽</span> Mexico
                </h3>
                <p className="text-gray-300 text-sm mb-4">3 cities with passionate fans and rich football history</p>
                <div className="space-y-2">
                  {getCitiesByCountry('Mexico').map(city => (
                    <Link 
                      key={city.id}
                      to={`/cities/${city.id}`}
                      className="block text-fifa-blue hover:text-fifa-gold transition-colors text-sm"
                    >
                      → {city.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900/30 to-gray-900/30 rounded-xl border border-red-700/50 p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>🇨🇦</span> Canada
                </h3>
                <p className="text-gray-300 text-sm mb-4">2 beautiful cities hosting their first men's World Cup</p>
                <div className="space-y-2">
                  {getCitiesByCountry('Canada').map(city => (
                    <Link 
                      key={city.id}
                      to={`/cities/${city.id}`}
                      className="block text-fifa-blue hover:text-fifa-gold transition-colors text-sm"
                    >
                      → {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

