import { useState, useEffect } from 'react';
import { MapPin, Users, Star, Navigation, Coffee, Hotel, Utensils } from 'lucide-react';
import { City } from '../data/types';
import { searchPOI } from '../utils/mapboxHelpers';

interface StadiumDetailsProps {
  city: City;
  onClose: () => void;
}

export default function StadiumDetails({ city, onClose }: StadiumDetailsProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'nearby'>('info');
  const [nearbyPlaces, setNearbyPlaces] = useState<{
    restaurants: any[];
    hotels: any[];
    coffee: any[];
    loading: boolean;
  }>({
    restaurants: [],
    hotels: [],
    coffee: [],
    loading: false,
  });

  useEffect(() => {
    if (activeTab === 'nearby' && nearbyPlaces.restaurants.length === 0) {
      loadNearbyPlaces();
    }
  }, [activeTab]);

  const loadNearbyPlaces = async () => {
    setNearbyPlaces(prev => ({ ...prev, loading: true }));
    
    try {
      const [restaurants, hotels, coffee] = await Promise.all([
        searchPOI(city, 'restaurant', 5),
        searchPOI(city, 'hotel', 5),
        searchPOI(city, 'coffee', 5),
      ]);

      setNearbyPlaces({
        restaurants,
        hotels,
        coffee,
        loading: false,
      });
    } catch (error) {
      console.error('Error loading nearby places:', error);
      setNearbyPlaces(prev => ({ ...prev, loading: false }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold">{city.stadium}</h2>
              <p className="text-gray-400 mt-1">{city.name}, {city.country}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setActiveTab('info')}
              className={`px-4 py-2 rounded transition-colors ${
                activeTab === 'info'
                  ? 'bg-fifa-blue text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Stadium Info
            </button>
            <button
              onClick={() => setActiveTab('nearby')}
              className={`px-4 py-2 rounded transition-colors ${
                activeTab === 'nearby'
                  ? 'bg-fifa-blue text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Nearby Places
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'info' ? (
            <div className="space-y-6">
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-fifa-blue mb-2">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold">Capacity</span>
                  </div>
                  <p className="text-2xl font-bold">{city.capacity.toLocaleString()}</p>
                </div>

                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-fifa-blue mb-2">
                    <Navigation className="w-5 h-5" />
                    <span className="font-semibold">Transit Score</span>
                  </div>
                  <p className="text-2xl font-bold">{city.transitScore}</p>
                </div>

                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-fifa-blue mb-2">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Airport</span>
                  </div>
                  <p className="text-2xl font-bold">{city.airportCode}</p>
                </div>

                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-fifa-blue mb-2">
                    <Hotel className="w-5 h-5" />
                    <span className="font-semibold">Avg. Hotel</span>
                  </div>
                  <p className="text-2xl font-bold">${city.averageHotelCost}/night</p>
                </div>
              </div>

              {/* Fan Zone */}
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Star className="w-5 h-5 text-fifa-gold" />
                  Fan Zone
                </h3>
                <p className="text-gray-300">{city.fanZone}</p>
              </div>

              {/* Local Tips */}
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3">💡 Local Tips</h3>
                <ul className="space-y-2">
                  {city.localTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-fifa-blue mt-1">•</span>
                      <span className="text-gray-300">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Safety */}
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">🛡️ Safety Information</h3>
                <p className="text-gray-300">{city.safety}</p>
              </div>

              {/* Coordinates */}
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">📍 Location</h3>
                <p className="text-gray-400 text-sm">
                  Lat: {city.coordinates[1].toFixed(4)}, Long: {city.coordinates[0].toFixed(4)}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Timezone: {city.timezone} (UTC{city.timezoneOffset >= 0 ? '+' : ''}{city.timezoneOffset})
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {nearbyPlaces.loading ? (
                <div className="text-center py-8">
                  <p className="text-gray-400">Loading nearby places...</p>
                </div>
              ) : (
                <>
                  {/* Restaurants */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Utensils className="w-5 h-5 text-fifa-gold" />
                      Nearby Restaurants
                    </h3>
                    <div className="space-y-2">
                      {nearbyPlaces.restaurants.length > 0 ? (
                        nearbyPlaces.restaurants.map((place, index) => (
                          <div key={index} className="bg-gray-800 rounded p-3">
                            <p className="font-semibold">{place.text}</p>
                            <p className="text-sm text-gray-400">{place.place_name}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-400 text-sm">No restaurants found nearby</p>
                      )}
                    </div>
                  </div>

                  {/* Hotels */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Hotel className="w-5 h-5 text-fifa-blue" />
                      Nearby Hotels
                    </h3>
                    <div className="space-y-2">
                      {nearbyPlaces.hotels.length > 0 ? (
                        nearbyPlaces.hotels.map((place, index) => (
                          <div key={index} className="bg-gray-800 rounded p-3">
                            <p className="font-semibold">{place.text}</p>
                            <p className="text-sm text-gray-400">{place.place_name}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-400 text-sm">No hotels found nearby</p>
                      )}
                    </div>
                  </div>

                  {/* Coffee Shops */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Coffee className="w-5 h-5 text-amber-600" />
                      Coffee Shops
                    </h3>
                    <div className="space-y-2">
                      {nearbyPlaces.coffee.length > 0 ? (
                        nearbyPlaces.coffee.map((place, index) => (
                          <div key={index} className="bg-gray-800 rounded p-3">
                            <p className="font-semibold">{place.text}</p>
                            <p className="text-sm text-gray-400">{place.place_name}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-400 text-sm">No coffee shops found nearby</p>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

