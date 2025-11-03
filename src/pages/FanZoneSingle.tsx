import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getFanZoneById } from '../data/fanZones';
import { 
  MapPin, 
  Users, 
  Clock, 
  Train,
  Bus,
  Navigation as NavigationIcon,
  Accessibility,
  Utensils,
  Trophy,
  Wifi,
  Camera,
  Heart,
  ArrowLeft,
  ExternalLink,
  PartyPopper,
  Sparkles
} from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';
import FAQSection from '../components/FAQSection';

export default function FanZoneSingle() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const fanZone = id ? getFanZoneById(id) : undefined;

  if (!fanZone) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Fan Zone Not Found</h1>
          <button
            onClick={() => navigate('/fan-zones')}
            className="btn-primary"
          >
            Back to Fan Zones
          </button>
        </div>
      </div>
    );
  }

  const faqs = [
    {
      question: `Is the ${fanZone.cityName} Fan Zone free to enter?`,
      answer: `Yes! The ${fanZone.name} is free and open to all fans during the World Cup. Entry is on a first-come, first-served basis. For popular matches, we recommend arriving early as the venue can reach capacity. Some premium VIP areas may require special access, but the main viewing areas and activities are completely free.`
    },
    {
      question: 'What times is the Fan Zone open?',
      answer: `${fanZone.openingHours}. The Fan Zone typically opens several hours before the first match of the day and stays open late into the evening. During rest days or when no matches are scheduled, hours may vary. Check the official FIFA website closer to the tournament for exact daily schedules.`
    },
    {
      question: `How do I get to the ${fanZone.cityName} Fan Zone?`,
      answer: `The Fan Zone is located at ${fanZone.address}. ${fanZone.transportation.metro.length > 0 ? `Take the ${fanZone.transportation.metro.join(' or ')} for easy access.` : ''} ${fanZone.transportation.walking}. We strongly recommend using public transportation as parking is limited and the area will be very crowded during match days.`
    },
    {
      question: 'Can I bring my own food and drinks?',
      answer: `While policies may vary, typically sealed water bottles are allowed. However, there will be a wide variety of food and beverage vendors inside offering ${fanZone.foodAndDrinks.slice(0, 3).join(', ')}, and more. Prices are usually reasonable, and you'll get to experience authentic local cuisine. Alcohol policies will be clearly posted and age-verified.`
    },
    {
      question: 'Is the Fan Zone family-friendly?',
      answer: `Absolutely! The ${fanZone.name} features dedicated family zones with kid-friendly activities, interactive games, and safe viewing areas. There are accessible restrooms, baby changing facilities, and first aid stations. The atmosphere is welcoming for all ages, making it a perfect place to introduce children to the excitement of the World Cup.`
    },
    {
      question: 'Are there accessibility accommodations?',
      answer: `Yes, the Fan Zone is fully accessible. Features include: ${fanZone.accessibility.slice(0, 3).join(', ')}. Designated assistance areas are available, and staff are trained to provide support. If you have specific accessibility needs, contact FIFA's accessibility services in advance for personalized assistance.`
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`${fanZone.cityName} Fan Zone - ${fanZone.name} | FIFA World Cup 2026`}</title>
        <meta 
          name="description" 
          content={`Experience FIFA World Cup 2026 at ${fanZone.name} in ${fanZone.cityName}, ${fanZone.country}. ${fanZone.description.substring(0, 150)}...`}
        />
        <meta 
          name="keywords" 
          content={`${fanZone.cityName} fan zone, ${fanZone.name}, World Cup 2026 ${fanZone.cityName}, FIFA fan fest ${fanZone.cityName}, World Cup viewing ${fanZone.cityName}`}
        />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${fanZone.cityName} Fan Zone - FIFA World Cup 2026`} />
        <meta property="og:description" content={fanZone.description} />
        <meta property="og:type" content="place" />
        
        {/* Geographic tags */}
        <meta name="geo.position" content={`${fanZone.coordinates[1]};${fanZone.coordinates[0]}`} />
        <meta name="geo.placename" content={`${fanZone.cityName}, ${fanZone.country}`} />
        <meta name="geo.region" content={fanZone.country === 'USA' ? 'US' : fanZone.country === 'Mexico' ? 'MX' : 'CA'} />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TouristAttraction',
            name: fanZone.name,
            description: fanZone.description,
            address: {
              '@type': 'PostalAddress',
              streetAddress: fanZone.address,
              addressLocality: fanZone.cityName,
              addressCountry: fanZone.country === 'USA' ? 'US' : fanZone.country === 'Mexico' ? 'MX' : 'CA'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: fanZone.coordinates[1],
              longitude: fanZone.coordinates[0]
            },
            openingHours: fanZone.openingHours,
            isAccessibleForFree: true,
            publicAccess: true,
            amenityFeature: fanZone.facilities.map(f => ({
              '@type': 'LocationFeatureSpecification',
              name: f
            }))
          })}
        </script>
      </Helmet>

      <SimpleHeader />

      <div className="min-h-screen bg-gray-950 py-4 sm:py-6 pb-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Back Button */}
          <button
            onClick={() => navigate('/fan-zones')}
            className="flex items-center gap-2 text-fifa-blue-400 hover:text-fifa-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to All Fan Zones</span>
          </button>

          {/* Hero Section */}
          <div className="card-gradient p-8 sm:p-12 mb-8 border-2 border-gray-700/50">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="badge-blue">{fanZone.country}</span>
                  <span className="badge-gold">Official FIFA Fan Zone</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
                  <span className="gradient-text">{fanZone.cityName}</span>
                </h1>
                <p className="text-xl sm:text-2xl text-fifa-gold-400 font-bold mb-4">
                  {fanZone.name}
                </p>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-5 h-5 text-fifa-blue-400" />
                  <span>{fanZone.address}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={fanZone.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Official Website
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${fanZone.coordinates[1]},${fanZone.coordinates[0]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
                >
                  <NavigationIcon className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              {fanZone.description}
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="card p-6 text-center">
              <Users className="w-8 h-8 text-fifa-blue-400 mx-auto mb-3" />
              <div className="text-sm text-gray-400 mb-1">Capacity</div>
              <div className="text-xl font-bold text-white">{fanZone.capacity}</div>
            </div>
            <div className="card p-6 text-center">
              <Clock className="w-8 h-8 text-fifa-blue-400 mx-auto mb-3" />
              <div className="text-sm text-gray-400 mb-1">Open Daily</div>
              <div className="text-sm font-bold text-white">10 AM - 11 PM</div>
            </div>
            <div className="card p-6 text-center">
              <Trophy className="w-8 h-8 text-fifa-gold-400 mx-auto mb-3" />
              <div className="text-sm text-gray-400 mb-1">Live Matches</div>
              <div className="text-xl font-bold text-white">104 Games</div>
            </div>
            <div className="card p-6 text-center">
              <Heart className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <div className="text-sm text-gray-400 mb-1">Entry</div>
              <div className="text-xl font-bold text-white">FREE</div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Left Column - Facilities & Activities */}
            <div className="lg:col-span-2 space-y-8">
              {/* Facilities */}
              <div className="card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-fifa-blue-500 to-fifa-blue-600 rounded-xl">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Facilities & Amenities</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {fanZone.facilities.map((facility, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
                      <div className="w-2 h-2 bg-fifa-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-300">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div className="card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-fifa-gold-500 to-fifa-gold-600 rounded-xl">
                    <PartyPopper className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Activities & Entertainment</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {fanZone.activities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
                      <div className="w-2 h-2 bg-fifa-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-300">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Food & Drinks */}
              <div className="card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl">
                    <Utensils className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Food & Beverages</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {fanZone.foodAndDrinks.map((food, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-300">{food}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Practical Info */}
            <div className="space-y-8">
              {/* Transportation */}
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Train className="w-6 h-6 text-fifa-blue-400" />
                  <h3 className="text-xl font-bold text-white">How to Get There</h3>
                </div>
                <div className="space-y-4">
                  {fanZone.transportation.metro.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Train className="w-5 h-5 text-fifa-blue-400" />
                        <span className="font-semibold text-white">Metro/Subway</span>
                      </div>
                      {fanZone.transportation.metro.map((line, index) => (
                        <p key={index} className="text-sm text-gray-400 ml-7">{line}</p>
                      ))}
                    </div>
                  )}
                  {fanZone.transportation.bus.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Bus className="w-5 h-5 text-fifa-blue-400" />
                        <span className="font-semibold text-white">Bus</span>
                      </div>
                      {fanZone.transportation.bus.map((line, index) => (
                        <p key={index} className="text-sm text-gray-400 ml-7">{line}</p>
                      ))}
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <NavigationIcon className="w-5 h-5 text-fifa-blue-400" />
                      <span className="font-semibold text-white">Walking</span>
                    </div>
                    <p className="text-sm text-gray-400 ml-7">{fanZone.transportation.walking}</p>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <p className="text-xs text-gray-400">{fanZone.transportation.parking}</p>
                  </div>
                </div>
              </div>

              {/* Accessibility */}
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Accessibility className="w-6 h-6 text-fifa-blue-400" />
                  <h3 className="text-xl font-bold text-white">Accessibility</h3>
                </div>
                <div className="space-y-2">
                  {fanZone.accessibility.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-fifa-blue-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby Attractions */}
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-6 h-6 text-fifa-blue-400" />
                  <h3 className="text-xl font-bold text-white">Nearby</h3>
                </div>
                <div className="space-y-2">
                  {fanZone.nearbyAttractions.map((attraction, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-fifa-gold-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">{attraction}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="card p-6 border-2 border-fifa-blue-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <Wifi className="w-6 h-6 text-fifa-gold-400" />
                  <h3 className="text-xl font-bold text-white">Local Tips</h3>
                </div>
                <div className="space-y-3">
                  {fanZone.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-fifa-blue-500/10 rounded-lg border border-fifa-blue-500/20">
                      <div className="text-lg">💡</div>
                      <span className="text-sm text-gray-300">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <FAQSection 
            faqs={faqs} 
            title={`${fanZone.cityName} Fan Zone - Frequently Asked Questions`}
          />

          {/* CTA */}
          <div className="card-gradient p-8 text-center mt-8 border-2 border-fifa-gold-500/30">
            <Trophy className="w-16 h-16 text-fifa-gold-400 mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Experience the World Cup?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Plan your trip to {fanZone.cityName} and be part of the biggest football celebration on Earth!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/app')}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Trophy className="w-5 h-5" />
                Plan Your Trip
              </button>
              <button
                onClick={() => navigate('/fan-zones')}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                View All Fan Zones
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

