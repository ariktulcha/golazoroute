import { useState } from 'react';
import { cities, getCitiesByCountry } from '../data/cities';
import { City } from '../data/types';
import { useAppStore } from '../store/appStore';
import Map from '../components/Map';
import CityCard from '../components/CityCard';
import StadiumDetails from '../components/StadiumDetails';
import { Filter, Search, Info, Users, MapPin, Heart } from 'lucide-react';
import { toggleFavoriteCity, isFavoriteCity } from '../utils/journeyStorage';

export default function Explorer() {
  const { selectedCity, setSelectedCity, filterCountry, setFilterCountry } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [detailCity, setDetailCity] = useState<City | null>(null);
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);
  const [, forceUpdate] = useState({});

  const filteredCities = cities.filter(city => {
    const matchesSearch = city.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = filterCountry === 'all' || city.country === filterCountry;
    return matchesSearch && matchesCountry;
  });

  const handleCityClick = (city: City) => {
    setSelectedCity(city);
  };

  const handleToggleFavorite = (cityId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavoriteCity(cityId);
    forceUpdate({});
  };

  const cityCounts = {
    USA: getCitiesByCountry('USA').length,
    Mexico: getCitiesByCountry('Mexico').length,
    Canada: getCitiesByCountry('Canada').length,
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Sidebar - City List */}
      <div className="w-full lg:w-96 bg-gradient-to-b from-gray-900 to-gray-950 border-r border-gray-800/50 overflow-y-auto p-4">
        <div className="mb-6 animate-fade-in">
          <h2 className="text-2xl font-bold mb-2 gradient-text">City Explorer</h2>
          <p className="text-sm text-gray-400">
            Explore all 16 host cities across USA, Mexico, and Canada
          </p>
        </div>

        {/* Search */}
        <div className="mb-4 animate-slide-down">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-fifa-blue-400 transition-colors" />
            <input
              type="text"
              placeholder="Search cities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>
        </div>

        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full flex items-center justify-between bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-gray-600 px-4 py-3 rounded-xl mb-4 transition-all duration-300 group"
        >
          <span className="flex items-center gap-2 font-semibold">
            <Filter className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
            Filters
          </span>
          <span className="badge-blue">
            {filterCountry === 'all' ? 'All Countries' : filterCountry}
          </span>
        </button>

        {/* Filters */}
        {showFilters && (
          <div className="mb-4 card animate-slide-down">
            <h3 className="font-bold mb-3 text-sm text-gray-300">Filter by Country</h3>
            <div className="space-y-2">
              <button
                onClick={() => setFilterCountry('all')}
                className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-between ${
                  filterCountry === 'all'
                    ? 'bg-gradient-to-r from-fifa-blue-500 to-fifa-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-800/50 hover:bg-gray-700 text-gray-300'
                }`}
              >
                <span>All Countries</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  filterCountry === 'all' ? 'bg-white/20' : 'bg-gray-700'
                }`}>
                  {cities.length}
                </span>
              </button>
              <button
                onClick={() => setFilterCountry('USA')}
                className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-between ${
                  filterCountry === 'USA'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                    : 'bg-gray-800/50 hover:bg-gray-700 text-gray-300'
                }`}
              >
                <span>🇺🇸 USA</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  filterCountry === 'USA' ? 'bg-white/20' : 'bg-gray-700'
                }`}>
                  {cityCounts.USA}
                </span>
              </button>
              <button
                onClick={() => setFilterCountry('Mexico')}
                className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-between ${
                  filterCountry === 'Mexico'
                    ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg scale-105'
                    : 'bg-gray-800/50 hover:bg-gray-700 text-gray-300'
                }`}
              >
                <span>🇲🇽 Mexico</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  filterCountry === 'Mexico' ? 'bg-white/20' : 'bg-gray-700'
                }`}>
                  {cityCounts.Mexico}
                </span>
              </button>
              <button
                onClick={() => setFilterCountry('Canada')}
                className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-between ${
                  filterCountry === 'Canada'
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg scale-105'
                    : 'bg-gray-800/50 hover:bg-gray-700 text-gray-300'
                }`}
              >
                <span>🇨🇦 Canada</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  filterCountry === 'Canada' ? 'bg-white/20' : 'bg-gray-700'
                }`}>
                  {cityCounts.Canada}
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Results Counter */}
        <div className="mb-3 flex items-center justify-between bg-gray-800/30 border border-gray-700/50 rounded-lg px-4 py-2">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-fifa-blue-400" />
            <span className="text-gray-400">Showing</span>
            <span className="font-bold text-fifa-blue-300">{filteredCities.length}</span>
            <span className="text-gray-400">{filteredCities.length === 1 ? 'city' : 'cities'}</span>
          </div>
          {(searchTerm || filterCountry !== 'all') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setFilterCountry('all');
              }}
              className="text-xs text-gray-400 hover:text-fifa-gold-400 transition-colors font-medium"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* City List */}
        <div className="space-y-3">
          {filteredCities.map((city, index) => (
            <div 
              key={city.id} 
              className="relative group"
              style={{ animationDelay: `${index * 50}ms` }}
              onMouseEnter={() => setHoveredCity(city)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              <button
                onClick={() => handleCityClick(city)}
                className={`w-full text-left p-4 pr-12 rounded-xl transition-all duration-300 border-2 ${
                  selectedCity?.id === city.id
                    ? 'bg-gradient-to-r from-fifa-blue-500 to-fifa-blue-600 text-white shadow-glow-blue border-fifa-blue-400 scale-105'
                    : hoveredCity?.id === city.id
                    ? 'bg-gray-800 border-fifa-blue-500/50 hover:scale-102 shadow-lg'
                    : 'bg-gray-800/50 hover:bg-gray-800 border-transparent hover:border-gray-700 hover:scale-102'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1 pr-12">
                    <h3 className="font-bold text-lg mb-1">{city.name}</h3>
                    <p className={`text-xs mb-2 ${selectedCity?.id === city.id ? 'text-white/80' : 'text-gray-400'}`}>
                      {city.stadium}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        selectedCity?.id === city.id 
                          ? 'bg-white/20' 
                          : 'bg-gray-700'
                      }`}>
                        {city.country}
                      </span>
                      <span className={`text-xs flex items-center gap-1 ${
                        selectedCity?.id === city.id ? 'text-white/70' : 'text-gray-500'
                      }`}>
                        <Users className="w-3 h-3" />
                        {city.capacity.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="text-3xl opacity-80 group-hover:scale-110 transition-transform">
                    {city.country === 'USA' && '🇺🇸'}
                    {city.country === 'Mexico' && '🇲🇽'}
                    {city.country === 'Canada' && '🇨🇦'}
                  </div>
                </div>
                
                {/* Favorite heart button inside the city button */}
                <button
                  onClick={(e) => handleToggleFavorite(city.id, e)}
                  className={`absolute top-3 right-3 p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                    isFavoriteCity(city.id)
                      ? 'bg-red-500/20 text-red-500'
                      : 'bg-gray-900/90 text-gray-400 hover:text-red-500 hover:bg-red-500/20'
                  }`}
                  title={isFavoriteCity(city.id) ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <Heart className={`w-4 h-4 ${isFavoriteCity(city.id) ? 'fill-current' : ''}`} />
                </button>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setDetailCity(city);
                }}
                className="absolute top-3 right-14 bg-gray-900/90 hover:bg-fifa-gold-600 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 shadow-lg"
                title="View detailed info"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {filteredCities.length === 0 && (
          <div className="text-center py-12 text-gray-400 animate-fade-in">
            <Search className="w-16 h-16 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-semibold">No cities found</p>
            <p className="text-sm mt-1">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Main Content Area - Map and City Card */}
      <div className="flex-1 relative">
        <Map
          onCityClick={handleCityClick}
          highlightedCities={
            selectedCity 
              ? [selectedCity.id] 
              : hoveredCity 
              ? [hoveredCity.id] 
              : []
          }
          selectedCity={selectedCity}
        />

        {/* Floating City Card - Better positioned on mobile with proper z-index */}
        {selectedCity && (
          <div className="absolute bottom-0 left-0 right-0 sm:bottom-4 sm:left-4 sm:right-4 md:left-8 md:right-8 lg:left-auto lg:w-[500px] lg:right-8 lg:bottom-8 max-h-[65vh] sm:max-h-[70vh] overflow-y-auto safe-bottom z-20">
            <CityCard
              city={selectedCity}
              onClose={() => setSelectedCity(null)}
            />
          </div>
        )}
      </div>
      
      {/* Stadium Details Modal */}
      {detailCity && (
        <StadiumDetails
          city={detailCity}
          onClose={() => setDetailCity(null)}
        />
      )}
    </div>
  );
}



