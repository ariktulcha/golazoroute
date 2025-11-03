import { useState, useEffect } from 'react';
import { 
  Plane, 
  Train, 
  Car, 
  Bus, 
  Clock, 
  DollarSign, 
  AlertTriangle,
  ExternalLink,
  Info,
  Navigation,
  Globe,
  Shield,
  PartyPopper,
  MapPin,
  Star,
  Sparkles
} from 'lucide-react';
import { cities, getCityById } from '../data/cities';
import { calculateDistance } from '../utils/distance';
import { useAppStore } from '../store/appStore';

type TransportMode = 'flight' | 'train' | 'bus' | 'car';

export default function TransportationHub() {
  const { viewMode } = useAppStore();
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [selectedFunZoneCity, setSelectedFunZoneCity] = useState('');
  const [activeTab, setActiveTab] = useState<'calculator' | 'guides' | 'airports' | 'borders' | 'funzone'>('calculator');

  // Set the active tab based on viewMode when component loads
  useEffect(() => {
    if (viewMode === 'funzone') {
      setActiveTab('funzone');
    } else if (viewMode === 'transportation') {
      setActiveTab('calculator');
    }
  }, [viewMode]);

  const getCityDistance = () => {
    if (!fromCity || !toCity) return null;
    const from = getCityById(fromCity);
    const to = getCityById(toCity);
    if (!from || !to) return null;

    const distance = calculateDistance(
      from.coordinates[1],
      from.coordinates[0],
      to.coordinates[1],
      to.coordinates[0]
    );

    return { distance, from, to };
  };

  const estimateCosts = (distance: number, mode: TransportMode) => {
    const estimates = {
      flight: { min: Math.round(distance * 0.12), max: Math.round(distance * 0.25), duration: Math.round(distance / 500) + 1 },
      train: { min: Math.round(distance * 0.08), max: Math.round(distance * 0.15), duration: Math.round(distance / 60) },
      bus: { min: Math.round(distance * 0.05), max: Math.round(distance * 0.10), duration: Math.round(distance / 50) },
      car: { min: Math.round(distance * 0.10), max: Math.round(distance * 0.18), duration: Math.round(distance / 60) },
    };
    return estimates[mode];
  };

  const transportModes: Array<{ id: TransportMode; label: string; icon: typeof Plane; color: string }> = [
    { id: 'flight', label: 'Flight', icon: Plane, color: 'text-sky-400' },
    { id: 'train', label: 'Train', icon: Train, color: 'text-purple-400' },
    { id: 'bus', label: 'Bus', icon: Bus, color: 'text-green-400' },
    { id: 'car', label: 'Car Rental', icon: Car, color: 'text-orange-400' },
  ];

  const routeInfo = getCityDistance();

  const borderCrossings = {
    'USA-Mexico': {
      requirements: ['Valid passport', 'FMM tourist permit (for Mexico)', 'Vehicle permit (if driving)'],
      tips: [
        'Cross at major border points during off-peak hours',
        'Have all documents ready',
        'Allow extra time (2-4 hours)',
        'Consider flying for simpler entry',
      ],
      checkpoints: ['San Ysidro', 'El Paso', 'Laredo', 'Tijuana'],
    },
    'USA-Canada': {
      requirements: ['Valid passport', 'eTA (if flying)', 'Proof of vaccination'],
      tips: [
        'NEXUS card speeds up crossing',
        'Be prepared for customs questions',
        'Allow 30-60 minutes at border',
        'Check current wait times online',
      ],
      checkpoints: ['Peace Arch', 'Ambassador Bridge', 'Rainbow Bridge'],
    },
  };

  const airportInfo = cities.map(city => ({
    city: city.name,
    country: city.country,
    airport: city.airportCode,
    transit: city.transitScore,
    tips: city.localTips.filter(tip => tip.toLowerCase().includes('airport') || tip.toLowerCase().includes('transport')),
  }));

  return (
    <div className="min-h-screen bg-gray-950 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Plane className="w-8 h-8 text-sky-400" />
            Transportation Hub
          </h1>
          <p className="text-gray-400">
            Plan your travel between World Cup host cities
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-4 py-2 rounded whitespace-nowrap transition-colors ${
              activeTab === 'calculator'
                ? 'bg-fifa-blue text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <Navigation className="w-4 h-4 inline mr-2" />
            Route Calculator
          </button>
          <button
            onClick={() => setActiveTab('guides')}
            className={`px-4 py-2 rounded whitespace-nowrap transition-colors ${
              activeTab === 'guides'
                ? 'bg-fifa-blue text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <Info className="w-4 h-4 inline mr-2" />
            Travel Guides
          </button>
          <button
            onClick={() => setActiveTab('airports')}
            className={`px-4 py-2 rounded whitespace-nowrap transition-colors ${
              activeTab === 'airports'
                ? 'bg-fifa-blue text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <Plane className="w-4 h-4 inline mr-2" />
            Airports
          </button>
          <button
            onClick={() => setActiveTab('borders')}
            className={`px-4 py-2 rounded whitespace-nowrap transition-colors ${
              activeTab === 'borders'
                ? 'bg-fifa-blue text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <Globe className="w-4 h-4 inline mr-2" />
            Border Crossings
          </button>
          <button
            onClick={() => setActiveTab('funzone')}
            className={`px-4 py-2 rounded whitespace-nowrap transition-colors ${
              activeTab === 'funzone'
                ? 'bg-fifa-blue text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <PartyPopper className="w-4 h-4 inline mr-2" />
            Fun Zone
          </button>
        </div>

        {/* Route Calculator Tab */}
        {activeTab === 'calculator' && (
          <div className="space-y-6">
            {/* City Selector */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Calculate Route</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">From City</label>
                  <select
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-3 text-white focus:outline-none focus:border-fifa-blue"
                  >
                    <option value="">Select departure city</option>
                    {cities.map(city => (
                      <option key={city.id} value={city.id}>
                        {city.name}, {city.country}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">To City</label>
                  <select
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-3 text-white focus:outline-none focus:border-fifa-blue"
                  >
                    <option value="">Select destination city</option>
                    {cities.map(city => (
                      <option key={city.id} value={city.id}>
                        {city.name}, {city.country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {routeInfo && (
                <div className="bg-gray-700 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span>Distance</span>
                    <span className="text-white font-semibold text-lg">{routeInfo.distance.toFixed(0)} miles</span>
                  </div>
                  {routeInfo.from.country !== routeInfo.to.country && (
                    <div className="flex items-center gap-2 text-yellow-400 text-sm mt-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Cross-border travel - check requirements below</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Transport Options */}
            {routeInfo && (
              <div className="space-y-4">
                {transportModes.map((mode) => {
                  const Icon = mode.icon;
                  const costs = estimateCosts(routeInfo.distance, mode.id);
                  
                  return (
                    <div key={mode.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-fifa-blue transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          <div className={`p-3 bg-gray-700 rounded-lg ${mode.color}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg mb-2">{mode.label}</h4>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <div className="text-gray-400 flex items-center gap-1">
                                  <DollarSign className="w-4 h-4" />
                                  Estimated Cost
                                </div>
                                <div className="text-white font-semibold">
                                  ${costs.min} - ${costs.max}
                                </div>
                              </div>
                              
                              <div>
                                <div className="text-gray-400 flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  Duration
                                </div>
                                <div className="text-white font-semibold">
                                  ~{costs.duration} hours
                                </div>
                              </div>

                              <div>
                                <a
                                  href={`https://www.google.com/search?q=${mode.label}+from+${routeInfo.from.name}+to+${routeInfo.to.name}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-fifa-blue hover:text-blue-400 transition-colors"
                                >
                                  Search Options
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Specific Tips */}
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <div className="text-sm text-gray-400">
                          {mode.id === 'flight' && (
                            <p>✈️ Book flights 2-3 months in advance for best prices. Check {routeInfo.from.airportCode} → {routeInfo.to.airportCode}</p>
                          )}
                          {mode.id === 'train' && (
                            <p>🚂 Amtrak available in USA. Limited cross-border options - consider booking early.</p>
                          )}
                          {mode.id === 'bus' && (
                            <p>🚌 Greyhound and FlixBus offer budget options. Longer journey times but most economical.</p>
                          )}
                          {mode.id === 'car' && (
                            <p>🚗 Gas costs additional. Check cross-border rental policies. Parking fees vary by city.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {!routeInfo && (
              <div className="bg-gray-800 rounded-lg p-12 border border-gray-700 text-center">
                <Navigation className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">Select departure and destination cities to see route options</p>
              </div>
            )}
          </div>
        )}

        {/* Travel Guides Tab */}
        {activeTab === 'guides' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cities.map(city => (
                <div key={city.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{city.name}</h3>
                      <p className="text-gray-400">{city.country}</p>
                    </div>
                    <div className={`px-3 py-1 rounded text-sm ${
                      city.transitScore === 'High' ? 'bg-green-600' :
                      city.transitScore === 'Medium' ? 'bg-yellow-600' :
                      'bg-red-600'
                    }`}>
                      {city.transitScore} Transit
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Airport</div>
                      <div className="font-semibold">{city.airportCode}</div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-400 mb-2">Local Transportation</div>
                      <ul className="text-sm space-y-1">
                        {city.localTips.slice(0, 3).map((tip, idx) => (
                          <li key={idx} className="text-gray-300">• {tip}</li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`https://www.google.com/maps/place/${encodeURIComponent(city.name + ' ' + city.country)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-fifa-blue hover:text-blue-400 text-sm mt-2"
                    >
                      View on Maps
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Airports Tab */}
        {activeTab === 'airports' && (
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Host City Airports</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-2 text-gray-400 font-semibold">City</th>
                      <th className="text-left py-3 px-2 text-gray-400 font-semibold">Country</th>
                      <th className="text-left py-3 px-2 text-gray-400 font-semibold">Code</th>
                      <th className="text-left py-3 px-2 text-gray-400 font-semibold">Transit Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {airportInfo.map((info, idx) => (
                      <tr key={idx} className="border-b border-gray-700/50 hover:bg-gray-700/30">
                        <td className="py-3 px-2">{info.city}</td>
                        <td className="py-3 px-2">{info.country}</td>
                        <td className="py-3 px-2 font-mono font-semibold">{info.airport}</td>
                        <td className="py-3 px-2">
                          <span className={`px-2 py-1 rounded text-xs ${
                            info.transit === 'High' ? 'bg-green-600' :
                            info.transit === 'Medium' ? 'bg-yellow-600' :
                            'bg-red-600'
                          }`}>
                            {info.transit}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-300 mb-1">Booking Tips</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Book flights 2-3 months in advance for better prices</li>
                    <li>• Consider nearby airports for potential savings</li>
                    <li>• Check baggage policies before booking</li>
                    <li>• Airport transfers: Use official taxis or rideshare apps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Border Crossings Tab */}
        {activeTab === 'borders' && (
          <div className="space-y-6">
            {Object.entries(borderCrossings).map(([key, info]) => (
              <div key={key} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-bold">{key} Border</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-fifa-gold mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {info.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-fifa-gold mb-3">Tips</h4>
                    <ul className="space-y-2">
                      {info.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-blue-400">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700">
                  <h4 className="font-semibold text-sm text-gray-400 mb-2">Major Crossing Points</h4>
                  <div className="flex flex-wrap gap-2">
                    {info.checkpoints.map((checkpoint, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-700 rounded text-sm">
                        {checkpoint}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-300 mb-1">Important Reminder</h4>
                  <p className="text-sm text-gray-300">
                    Border requirements can change. Always check official government websites before traveling:
                  </p>
                  <ul className="text-sm text-gray-300 space-y-1 mt-2">
                    <li>• USA: <a href="https://travel.state.gov" target="_blank" rel="noopener noreferrer" className="text-fifa-blue hover:underline">travel.state.gov</a></li>
                    <li>• Canada: <a href="https://www.canada.ca/en/immigration-refugees-citizenship.html" target="_blank" rel="noopener noreferrer" className="text-fifa-blue hover:underline">canada.ca</a></li>
                    <li>• Mexico: <a href="https://www.gob.mx/inm" target="_blank" rel="noopener noreferrer" className="text-fifa-blue hover:underline">gob.mx/inm</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fun Zone Tab */}
        {activeTab === 'funzone' && (
          <div className="space-y-6">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-fifa-blue via-fifa-gold to-fifa-blue rounded-2xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&h=400&fit=crop')] opacity-20 bg-cover bg-center"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <PartyPopper className="w-10 h-10 text-white drop-shadow-lg" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">FIFA Fan Zones 2026</h2>
                </div>
                <p className="text-white/90 text-lg max-w-3xl">
                  Experience the World Cup atmosphere in official FIFA Fan Zones across North America. Free entry, live screenings, entertainment, and unforgettable celebrations!
                </p>
              </div>
            </div>

            {/* City Selector - Enhanced */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                <MapPin className="w-6 h-6 text-fifa-gold" />
                Select Your Destination
              </h3>
              
              <select
                value={selectedFunZoneCity}
                onChange={(e) => setSelectedFunZoneCity(e.target.value)}
                className="w-full bg-gray-900 border-2 border-gray-600 rounded-lg px-4 py-4 text-white text-lg focus:outline-none focus:border-fifa-blue hover:border-gray-500 transition-all cursor-pointer"
              >
                <option value="">🌎 Choose a host city...</option>
                {cities.map(city => (
                  <option key={city.id} value={city.id}>
                    {city.country === 'USA' ? '🇺🇸' : city.country === 'Mexico' ? '🇲🇽' : '🇨🇦'} {city.name} - {city.fanZone}
                  </option>
                ))}
              </select>
            </div>

            {/* Fan Zone Information Display */}
            {selectedFunZoneCity && (() => {
              const city = getCityById(selectedFunZoneCity);
              if (!city) return null;

              // Get Unsplash image for the city/fan zone
              const getImageUrl = (cityId: string) => {
                const images: Record<string, string> = {
                  'atlanta': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=400&fit=crop',
                  'boston': 'https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=1200&h=400&fit=crop',
                  'los-angeles': 'https://images.unsplash.com/photo-1534190239940-9ba8944ea261?w=1200&h=400&fit=crop',
                  'mexico-city': 'https://images.unsplash.com/photo-1518659526054-e7f73d35f1f9?w=1200&h=400&fit=crop',
                  'new-york': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&h=400&fit=crop',
                  'toronto': 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&h=400&fit=crop',
                  'dallas': 'https://images.unsplash.com/photo-1583437176298-f2cc5e98f3be?w=1200&h=400&fit=crop',
                  'houston': 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200&h=400&fit=crop',
                  'miami': 'https://images.unsplash.com/photo-1501509497947-782640bc1412?w=1200&h=400&fit=crop',
                  'philadelphia': 'https://images.unsplash.com/photo-1564156421-8f8e2810be4c?w=1200&h=400&fit=crop',
                  'san-francisco': 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?w=1200&h=400&fit=crop',
                  'seattle': 'https://images.unsplash.com/photo-1542223616-740cbd1ec46d?w=1200&h=400&fit=crop',
                  'kansas-city': 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1200&h=400&fit=crop',
                  'vancouver': 'https://images.unsplash.com/photo-1559511260-66a654ae982a?w=1200&h=400&fit=crop',
                  'guadalajara': 'https://images.unsplash.com/photo-1600299207908-804295f87f96?w=1200&h=400&fit=crop',
                  'monterrey': 'https://images.unsplash.com/photo-1625430654768-34102525c46f?w=1200&h=400&fit=crop',
                };
                return images[cityId] || 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&h=400&fit=crop';
              };

              return (
                <div className="space-y-6">
                  {/* Hero Image */}
                  <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={getImageUrl(city.id)} 
                      alt={`${city.name} skyline`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-2">
                        <PartyPopper className="w-10 h-10 text-fifa-gold drop-shadow-lg" />
                        <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">{city.name} Fan Zone</h3>
                      </div>
                      <p className="text-fifa-gold text-xl font-bold drop-shadow-lg">{city.fanZone}</p>
                    </div>
                  </div>

                  {city.fanZoneDetails ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Left Column */}
                      <div className="space-y-6">
                        {/* Description with enhanced styling */}
                        {city.fanZoneDetails.description && (
                          <div className="bg-gradient-to-br from-fifa-blue/10 to-fifa-gold/10 rounded-xl p-6 border border-fifa-blue/30">
                            <h4 className="font-bold text-xl text-white mb-3 flex items-center gap-2">
                              <Star className="w-5 h-5 text-fifa-gold" />
                              About This Fan Zone
                            </h4>
                            <p className="text-gray-200 leading-relaxed">{city.fanZoneDetails.description}</p>
                          </div>
                        )}

                        {/* Location & Address */}
                        {city.fanZoneDetails.address && (
                          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-fifa-blue/50 transition-all">
                            <div className="flex items-start gap-3">
                              <MapPin className="w-6 h-6 text-fifa-blue mt-1 flex-shrink-0" />
                              <div className="flex-1">
                                <h4 className="font-bold text-lg text-white mb-2">Location</h4>
                                <p className="text-gray-300 mb-3">{city.fanZoneDetails.address}</p>
                                <a
                                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(city.fanZoneDetails.address)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2 bg-fifa-blue hover:bg-fifa-blue/80 text-white rounded-lg transition-all text-sm font-semibold"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  View on Google Maps
                                </a>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Opening Hours */}
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-start gap-3">
                            <Clock className="w-6 h-6 text-fifa-blue mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold text-lg text-white mb-2">Opening Hours</h4>
                              <p className="text-gray-300">
                                {city.fanZoneDetails.openingHours || 'Coming Soon - Waiting for FIFA updates'}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Official Links */}
                        {city.fanZoneDetails.officialWebsite && (
                          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-700/50">
                            <h4 className="font-bold text-lg text-white mb-3 flex items-center gap-2">
                              <Globe className="w-5 h-5 text-green-400" />
                              Official Resources
                            </h4>
                            <div className="space-y-2">
                              <a
                                href={city.fanZoneDetails.officialWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-green-300 hover:text-green-200 transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span>Official Website</span>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        {/* Transportation - Enhanced */}
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-start gap-3">
                            <Train className="w-6 h-6 text-fifa-blue mt-1 flex-shrink-0" />
                            <div className="flex-1">
                              <h4 className="font-bold text-lg text-white mb-4">How to Get There</h4>
                              
                              {city.fanZoneDetails.transportation.metro && city.fanZoneDetails.transportation.metro.length > 0 && (
                                <div className="mb-4 p-4 bg-gray-900/50 rounded-lg">
                                  <p className="text-sm font-semibold text-fifa-blue mb-2">🚇 Metro/Subway:</p>
                                  <ul className="space-y-2">
                                    {city.fanZoneDetails.transportation.metro.map((line, idx) => (
                                      <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                                        <span className="text-fifa-gold mt-0.5">▸</span>
                                        <span>{line}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {city.fanZoneDetails.transportation.bus && city.fanZoneDetails.transportation.bus.length > 0 && (
                                <div className="mb-4 p-4 bg-gray-900/50 rounded-lg">
                                  <p className="text-sm font-semibold text-fifa-blue mb-2">🚌 Bus:</p>
                                  <ul className="space-y-2">
                                    {city.fanZoneDetails.transportation.bus.map((route, idx) => (
                                      <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                                        <span className="text-fifa-gold mt-0.5">▸</span>
                                        <span>{route}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {city.fanZoneDetails.transportation.walking && (
                                <div className="mb-4 p-4 bg-gray-900/50 rounded-lg">
                                  <p className="text-sm font-semibold text-fifa-blue mb-2">🚶 Walking:</p>
                                  <p className="text-gray-300 text-sm">{city.fanZoneDetails.transportation.walking}</p>
                                </div>
                              )}

                              {city.fanZoneDetails.transportation.parking && (
                                <div className="p-4 bg-gray-900/50 rounded-lg">
                                  <p className="text-sm font-semibold text-fifa-blue mb-2">🅿️ Parking:</p>
                                  <p className="text-gray-300 text-sm">{city.fanZoneDetails.transportation.parking}</p>
                                </div>
                              )}

                              {!city.fanZoneDetails.transportation.metro && 
                               !city.fanZoneDetails.transportation.bus && 
                               !city.fanZoneDetails.transportation.walking && 
                               !city.fanZoneDetails.transportation.parking && (
                                <p className="text-gray-400 text-sm italic">Coming Soon - Waiting for FIFA updates</p>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* What to Expect */}
                        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-700/50">
                          <h4 className="font-bold text-lg text-white mb-3 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-400" />
                            What to Expect
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                              <span className="text-purple-400 mt-0.5">✓</span>
                              <span>Giant screens for live match viewing</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-purple-400 mt-0.5">✓</span>
                              <span>Food vendors & local cuisine</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-purple-400 mt-0.5">✓</span>
                              <span>Live entertainment & music</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-purple-400 mt-0.5">✓</span>
                              <span>FIFA merchandise & photo opportunities</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-purple-400 mt-0.5">✓</span>
                              <span>Family-friendly atmosphere</span>
                            </li>
                          </ul>
                        </div>

                        {/* Pro Tips */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl p-6 border border-orange-700/50">
                          <h4 className="font-bold text-lg text-white mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-orange-400" />
                            Pro Tips
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                              <span className="text-orange-400 mt-0.5">💡</span>
                              <span>Arrive 2-3 hours early for knockout matches</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-orange-400 mt-0.5">💡</span>
                              <span>Bring sunscreen and stay hydrated</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-orange-400 mt-0.5">💡</span>
                              <span>Have a valid ID ready for entry</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-orange-400 mt-0.5">💡</span>
                              <span>Check bag size restrictions before visiting</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-800/50 rounded-xl p-12 text-center border border-gray-700">
                      <Info className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-white mb-3">Information Coming Soon</h4>
                      <p className="text-gray-400 max-w-md mx-auto mb-4">
                        Detailed fan zone information for {city.name} is waiting for official FIFA updates.
                      </p>
                      <p className="text-sm text-gray-500">
                        Check back later for transportation details, opening hours, and more!
                      </p>
                    </div>
                  )}
                </div>
              );
            })()}

            {!selectedFunZoneCity && (
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-16 border border-gray-700 text-center">
                <div className="max-w-md mx-auto">
                  <PartyPopper className="w-20 h-20 text-fifa-gold mx-auto mb-6 animate-bounce" />
                  <h3 className="text-2xl font-bold text-white mb-3">Ready to Explore?</h3>
                  <p className="text-gray-400 mb-6">
                    Select a city above to discover its official FIFA Fan Zone, complete with location details, transportation info, and what to expect!
                  </p>
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-fifa-blue/20 text-fifa-blue rounded-lg border border-fifa-blue/30">
                    <Info className="w-5 h-5" />
                    <span className="text-sm font-semibold">16 amazing cities to choose from</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

