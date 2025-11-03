import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { getStadiumById } from '../data/stadiums';
import { 
  MapPin, Plane, Users, Calendar, Building2, Train, Car, 
  Info, TrendingUp, Star, ArrowLeft,
  Navigation, Trophy, CheckCircle, AlertCircle, Play
} from 'lucide-react';

export default function StadiumDetail() {
  const { stadiumId } = useParams<{ stadiumId: string }>();
  const navigate = useNavigate();
  const stadium = stadiumId ? getStadiumById(stadiumId) : undefined;

  useEffect(() => {
    if (!stadium) {
      navigate('/stadiums');
    }
  }, [stadium, navigate]);

  if (!stadium) {
    return null;
  }

  const getTransitScoreColor = (score: string) => {
    switch (score) {
      case 'High': return 'text-green-400 bg-green-500/10 border-green-500/30';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
      case 'Low': return 'text-red-400 bg-red-500/10 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/30';
    }
  };

  const pageTitle = `${stadium.name} - FIFA World Cup 2026 Stadium Guide`;
  const canonicalUrl = `https://worldcup2026travel.com/stadiums/${stadium.id}`;

  const stadiumSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'StadiumOrArena',
        '@id': canonicalUrl,
        name: stadium.name,
        description: stadium.metaDescription,
        image: stadium.featuredImage,
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
        openingHours: 'Mo-Su',
        publicAccess: true,
        smokingAllowed: false,
        event: {
          '@type': 'SportsEvent',
          name: 'FIFA World Cup 2026',
          sport: 'Soccer',
          startDate: '2026-06-11',
          endDate: '2026-07-19',
          location: {
            '@type': 'StadiumOrArena',
            name: stadium.name
          }
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
            item: 'https://worldcup2026travel.com/stadiums'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: stadium.name,
            item: canonicalUrl
          }
        ]
      },
      {
        '@type': 'TouristAttraction',
        name: stadium.name,
        description: stadium.description,
        image: stadium.featuredImage,
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
        touristType: ['Sports Fans', 'International Travelers']
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={stadium.metaDescription} />
        <meta name="keywords" content={[stadium.primaryKeyword, ...stadium.secondaryKeywords, ...stadium.locationKeywords].join(', ')} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Language and Region */}
        <html lang="en" />
        <meta httpEquiv="content-language" content="en-US" />
        
        {/* Geographic SEO */}
        <meta name="geo.region" content={stadium.geoRegion} />
        <meta name="geo.position" content={stadium.geoPosition} />
        <meta name="geo.placename" content={`${stadium.city}, ${stadium.country}`} />
        <meta name="ICBM" content={stadium.geoPosition.replace(';', ', ')} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={stadium.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="place" />
        <meta property="og:site_name" content="World Cup 2026 Travel Planner" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={stadium.featuredImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="place:location:latitude" content={stadium.coordinates[1].toString()} />
        <meta property="place:location:longitude" content={stadium.coordinates[0].toString()} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@WorldCup2026" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={stadium.metaDescription} />
        <meta name="twitter:image" content={stadium.featuredImage} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(stadiumSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 safe-top safe-bottom">
          {/* Back Button */}
          <Link
            to="/stadiums"
            className="inline-flex items-center gap-2 text-fifa-blue hover:text-fifa-gold transition-colors mb-6 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to All Stadiums</span>
          </Link>

          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden mb-6 sm:mb-8">
            <img 
              src={stadium.featuredImage} 
              alt={`${stadium.name} - ${stadium.city}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-fifa-gold drop-shadow-lg" />
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">{stadium.name}</h1>
              </div>
              <p className="text-fifa-gold text-lg sm:text-xl font-bold drop-shadow-lg flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {stadium.city}, {stadium.country === 'USA' ? '🇺🇸' : stadium.country === 'Mexico' ? '🇲🇽' : '🇨🇦'} {stadium.country}
              </p>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-5">
              <div className="flex items-center gap-2 text-fifa-blue mb-2">
                <Users className="w-5 h-5" />
                <span className="text-sm font-semibold">Capacity</span>
              </div>
              <p className="text-2xl font-bold">{stadium.capacity.toLocaleString()}</p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-5">
              <div className="flex items-center gap-2 text-fifa-gold mb-2">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-semibold">Year Built</span>
              </div>
              <p className="text-2xl font-bold">{stadium.yearBuilt}</p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-5">
              <div className="flex items-center gap-2 text-fifa-blue mb-2">
                <Trophy className="w-5 h-5" />
                <span className="text-sm font-semibold">Matches</span>
              </div>
              <p className="text-2xl font-bold">{stadium.totalMatches}</p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-5">
              <div className="flex items-center gap-2 text-fifa-gold mb-2">
                <Plane className="w-5 h-5" />
                <span className="text-sm font-semibold">Airport</span>
              </div>
              <p className="text-2xl font-bold">{stadium.airportCode}</p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-6 sm:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Info className="w-6 h-6 text-fifa-gold" />
              About {stadium.name}
            </h2>
            <div className="prose prose-invert max-w-none">
              {stadium.description.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-300 mb-4 leading-relaxed">{para}</p>
              ))}
            </div>
          </div>

          {/* YouTube Video */}
          {stadium.youtubeVideoId && (
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-6 sm:p-8 mb-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Play className="w-6 h-6 text-fifa-blue" />
                Stadium Tour & Highlights
              </h2>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${stadium.youtubeVideoId}`}
                  title={`${stadium.name} Virtual Tour`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                🎥 Virtual tour and highlights of {stadium.name}
              </p>
            </div>
          )}

          {/* Stadium Details Grid */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Technical Details */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-fifa-blue" />
                Stadium Specifications
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-900/50 rounded-lg">
                  <span className="text-gray-400">Roof Type</span>
                  <span className="font-semibold">{stadium.roofType}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-900/50 rounded-lg">
                  <span className="text-gray-400">Surface</span>
                  <span className="font-semibold">{stadium.surface}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-900/50 rounded-lg">
                  <span className="text-gray-400">Transit Score</span>
                  <span className={`px-3 py-1 rounded font-semibold ${getTransitScoreColor(stadium.transitScore)}`}>
                    {stadium.transitScore}
                  </span>
                </div>
                {stadium.architect && (
                  <div className="flex justify-between items-center p-3 bg-gray-900/50 rounded-lg">
                    <span className="text-gray-400">Architect</span>
                    <span className="font-semibold text-sm">{stadium.architect}</span>
                  </div>
                )}
                {stadium.cost && (
                  <div className="flex justify-between items-center p-3 bg-gray-900/50 rounded-lg">
                    <span className="text-gray-400">Construction Cost</span>
                    <span className="font-semibold text-fifa-gold">{stadium.cost}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Match Types */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-fifa-gold" />
                Tournament Matches
              </h3>
              <div className="mb-4">
                <div className="text-3xl font-bold text-fifa-blue mb-2">{stadium.totalMatches} Matches</div>
                <p className="text-sm text-gray-400">Including:</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {stadium.matchTypes.map((type, i) => (
                  <span 
                    key={i} 
                    className={`px-3 py-2 rounded-lg font-semibold text-sm ${
                      type.includes('FINAL') || type.includes('Final') 
                        ? 'bg-fifa-gold/20 text-fifa-gold border border-fifa-gold/30' 
                        : 'bg-fifa-blue/20 text-fifa-blue border border-fifa-blue/30'
                    }`}
                  >
                    {type}
                  </span>
                ))}
              </div>
              {stadium.homeTeams.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400 mb-2">Home Teams:</p>
                  {stadium.homeTeams.map((team, i) => (
                    <p key={i} className="text-sm text-gray-300">• {team}</p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Getting There */}
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-700/50 p-6 sm:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Navigation className="w-6 h-6 text-fifa-blue" />
              Getting to {stadium.name}
            </h2>
            
            <div className="mb-6 p-4 bg-gray-900/50 rounded-lg">
              <div className="flex items-start gap-3">
                <Plane className="w-5 h-5 text-fifa-gold mt-1" />
                <div>
                  <p className="font-semibold text-fifa-gold mb-1">From Airport</p>
                  <p className="text-gray-300">{stadium.distanceFromAirport}</p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none mb-6">
              {stadium.gettingThere.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-300 mb-3 leading-relaxed">{para}</p>
              ))}
            </div>

            {/* Public Transport Options */}
            <div className="grid md:grid-cols-2 gap-4">
              {stadium.publicTransport.train && (
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-fifa-blue mb-2">
                    <Train className="w-5 h-5" />
                    <span className="font-semibold">Train</span>
                  </div>
                  <p className="text-sm text-gray-300">{stadium.publicTransport.train}</p>
                </div>
              )}
              {stadium.publicTransport.metro && (
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-fifa-blue mb-2">
                    <Train className="w-5 h-5" />
                    <span className="font-semibold">Metro</span>
                  </div>
                  <p className="text-sm text-gray-300">{stadium.publicTransport.metro}</p>
                </div>
              )}
              {stadium.publicTransport.bus && (
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-fifa-blue mb-2">
                    <Train className="w-5 h-5" />
                    <span className="font-semibold">Bus</span>
                  </div>
                  <p className="text-sm text-gray-300">{stadium.publicTransport.bus}</p>
                </div>
              )}
              <div className="bg-gray-900/50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-fifa-blue mb-2">
                  <Car className="w-5 h-5" />
                  <span className="font-semibold">Parking</span>
                </div>
                <p className="text-sm text-gray-300">{stadium.parkingInfo}</p>
              </div>
            </div>
          </div>

          {/* Amenities & Food */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Amenities */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Stadium Amenities
              </h3>
              <div className="space-y-2">
                {stadium.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Food Options */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-fifa-gold" />
                Food & Beverage
              </h3>
              <div className="space-y-2">
                {stadium.foodOptions.map((food, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
                    <Star className="w-4 h-4 text-fifa-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{food}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Local Tips */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-6 sm:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-fifa-gold" />
              Local Tips & Recommendations
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {stadium.localTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-xl border border-gray-700">
                  <TrendingUp className="w-5 h-5 text-fifa-blue flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Notable Events & History */}
          {stadium.notableEvents.length > 0 && (
            <div className="bg-gradient-to-br from-fifa-gold-900/30 to-orange-900/30 rounded-xl border border-fifa-gold-700/50 p-6 sm:p-8 mb-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-fifa-gold" />
                Notable Events & History
              </h2>
              {stadium.worldCupHistory && (
                <div className="mb-6 p-4 bg-fifa-gold/10 rounded-lg border border-fifa-gold/30">
                  <p className="text-fifa-gold font-semibold mb-2">⚽ World Cup History</p>
                  <p className="text-gray-300">{stadium.worldCupHistory}</p>
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-3">
                {stadium.notableEvents.map((event, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg">
                    <Star className="w-4 h-4 text-fifa-gold mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{event}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nearby Landmarks */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-fifa-blue" />
              Nearby Landmarks
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {stadium.nearbyLandmarks.map((landmark, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-gray-900/50 rounded-lg">
                  <MapPin className="w-4 h-4 text-fifa-blue flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{landmark}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-fifa-blue-900/50 to-fifa-gold-900/50 rounded-xl border border-fifa-blue-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Plan Your Visit to {stadium.name}</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Ready to experience World Cup 2026 at {stadium.name}? Explore the host city and start planning your trip.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={`/cities/${stadium.cityId}`} className="btn-primary">
                Explore {stadium.city}
              </Link>
              <Link to="/stadiums" className="btn-secondary">
                View All Stadiums
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

