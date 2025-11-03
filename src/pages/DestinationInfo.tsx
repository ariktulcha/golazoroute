import { useState } from 'react';
import { cities } from '../data/cities';
import { City } from '../data/types';
import { getMatchesByCity } from '../data/matches';
import { MapPin, Plane, Trophy } from 'lucide-react';
import CityCard from '../components/CityCard';

export default function DestinationInfo() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const handleCityClick = (city: City) => {
    setSelectedCity(city);
    // Scroll to top when opening city card on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <div className="min-h-screen py-4 sm:py-6 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Compact Header */}
        <div className="mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 flex items-center gap-2">
            <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-fifa-gold" />
            World Cup Cities
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Click any city to view details
          </p>
        </div>

        {/* City Grid - Clean and Simple */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {cities.map((city) => {
            const matchCount = getMatchesByCity(city.id).length;
            
            return (
              <button
                key={city.id}
                onClick={() => handleCityClick(city)}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 text-left hover:scale-[1.02] hover:shadow-xl ${
                  selectedCity?.id === city.id 
                    ? 'ring-2 ring-fifa-gold shadow-lg shadow-fifa-gold/20' 
                    : 'hover:ring-2 hover:ring-fifa-blue/50'
                }`}
              >
                {/* City Image */}
                <div className="relative h-36 sm:h-40 overflow-hidden">
                  <img 
                    src={getCityImageUrl(city.id)} 
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                  
                  {/* City Name Overlay */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg mb-0.5">
                      {city.name}
                    </h3>
                    <p className="text-fifa-gold text-xs sm:text-sm font-semibold drop-shadow-lg">
                      {city.country === 'USA' ? '🇺🇸' : city.country === 'Mexico' ? '🇲🇽' : '🇨🇦'} {city.country}
                    </p>
                  </div>
                </div>

                {/* City Quick Info */}
                <div className="p-3 bg-gray-800 group-hover:bg-gray-750 transition-colors">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5">
                      <Plane className="w-3.5 h-3.5 text-gray-400 group-hover:text-fifa-gold transition-colors" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">{city.airportCode}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5 text-gray-400 group-hover:text-fifa-gold transition-colors" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">{matchCount}</span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen City Card Modal */}
      {selectedCity && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4 animate-fade-in">
          <div className="w-full sm:max-w-2xl sm:mx-auto max-h-[90vh] overflow-hidden animate-slide-up">
            <CityCard
              city={selectedCity}
              onClose={() => setSelectedCity(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
