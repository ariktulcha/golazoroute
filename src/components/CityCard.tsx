import { City } from '../data/types';
import { getMatchesByCity } from '../data/matches';
import { MapPin, Users, Train, Info, AlertTriangle, X, DollarSign, Calendar } from 'lucide-react';

interface CityCardProps {
  city: City;
  onClose: () => void;
}

export default function CityCard({ city, onClose }: CityCardProps) {
  const cityMatches = getMatchesByCity(city.id);

  const countryColors = {
    USA: 'bg-gradient-to-r from-blue-600 to-blue-700',
    Mexico: 'bg-gradient-to-r from-green-600 to-green-700',
    Canada: 'bg-gradient-to-r from-red-600 to-red-700',
  };

  const transitColors = {
    High: 'text-green-400 bg-green-400/10 border-green-400/30',
    Medium: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
    Low: 'text-red-400 bg-red-400/10 border-red-400/30',
  };

  return (
    <div className="glass-dark max-w-2xl w-full animate-slide-up rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
      {/* Header with gradient - Improved Mobile */}
      <div className={`${countryColors[city.country]} p-4 sm:p-6 pb-5 sm:pb-8 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20"></div>
        <div className="relative flex justify-between items-start gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg truncate">{city.name}</h2>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm border border-white/30 text-white whitespace-nowrap inline-block w-fit">
                {city.country}
              </span>
            </div>
            <p className="text-white/90 text-sm sm:text-base font-medium drop-shadow truncate">{city.stadium}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white active:text-white hover:bg-white/20 active:bg-white/20 transition-all p-3 rounded-lg backdrop-blur-sm min-w-[44px] min-h-[44px] flex items-center justify-center flex-shrink-0 touch-manipulation"
            aria-label="Close"
          >
            <X className="w-6 h-6 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-h-[65vh] sm:max-h-[70vh] overflow-y-auto overscroll-contain">
        {/* Stats Grid - Improved Mobile Sizing */}
        <div className="grid grid-cols-2 gap-3 sm:gap-3">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-gray-600/50 transition-all duration-300">
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="p-2 bg-fifa-blue-500/20 rounded-lg flex-shrink-0">
                <Users className="w-5 h-5 text-fifa-blue-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 mb-1">Capacity</p>
                <p className="font-bold text-base sm:text-lg truncate">{city.capacity.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className={`backdrop-blur-sm border rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 ${transitColors[city.transitScore]}`}>
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="p-2 bg-current/10 rounded-lg flex-shrink-0">
                <Train className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs opacity-70 mb-1">Transit</p>
                <p className="font-bold text-base sm:text-lg truncate">{city.transitScore}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-gray-600/50 transition-all duration-300">
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg flex-shrink-0">
                <MapPin className="w-5 h-5 text-purple-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 mb-1">Airport</p>
                <p className="font-bold text-base sm:text-lg truncate">{city.airportCode}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-gray-600/50 transition-all duration-300">
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="p-2 bg-fifa-gold-500/20 rounded-lg flex-shrink-0">
                <Info className="w-5 h-5 text-fifa-gold-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 mb-1">Timezone</p>
                <p className="font-bold text-base sm:text-lg truncate">UTC{city.timezoneOffset >= 0 ? '+' : ''}{city.timezoneOffset}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fan Zone - Improved Mobile */}
        <div className="bg-gradient-to-br from-fifa-gold-500/10 to-fifa-gold-600/5 border border-fifa-gold-500/20 rounded-lg sm:rounded-xl p-4">
          <h3 className="font-bold mb-2 flex items-center gap-2 text-base text-fifa-gold-300">
            <span className="text-xl">🎉</span> Fan Zone
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">{city.fanZone}</p>
        </div>

        {/* Local Tips - Improved Mobile */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl p-4">
          <h3 className="font-bold mb-3 flex items-center gap-2 text-base text-fifa-blue-300">
            <span className="text-xl">💡</span> Local Tips
          </h3>
          <ul className="space-y-2.5">
            {city.localTips.map((tip, index) => (
              <li key={index} className="text-sm text-gray-300 flex items-start gap-3 group">
                <span className="text-fifa-gold-400 mt-0.5 group-hover:scale-125 transition-transform flex-shrink-0">•</span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Safety - Improved Mobile */}
        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/5 border border-yellow-500/20 rounded-lg sm:rounded-xl p-4">
          <h3 className="font-bold mb-2 flex items-center gap-2 text-base text-yellow-300">
            <AlertTriangle className="w-5 h-5" />
            Safety Information
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">{city.safety}</p>
        </div>

        {/* Matches - Improved Mobile */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl p-4">
          <h3 className="font-bold mb-3 flex items-center gap-2 text-base">
            <span className="text-xl">⚽</span> 
            <span>Matches</span>
            <span className="badge-blue ml-auto text-xs">{cityMatches.length}</span>
          </h3>
          <div className="space-y-2.5 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            {cityMatches.slice(0, 5).map((match) => (
              <div key={match.id} className="bg-gray-900/50 hover:bg-gray-900/70 active:bg-gray-900/70 border border-gray-700/30 p-3 rounded-lg transition-all duration-200 hover:border-fifa-blue-500/30 group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 mb-2">
                  <span className="font-bold text-sm group-hover:text-fifa-blue-300 transition-colors pr-2">
                    {match.homeTeam} vs {match.awayTeam}
                  </span>
                  <span className="badge-blue text-xs whitespace-nowrap">{match.stage}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{new Date(match.date).toLocaleDateString()} at {match.time}</span>
                </div>
              </div>
            ))}
            {cityMatches.length > 5 && (
              <p className="text-xs text-gray-400 text-center py-2 font-medium">
                +{cityMatches.length - 5} more matches
              </p>
            )}
          </div>
        </div>

        {/* Hotel Cost - Improved Mobile */}
        <div className="bg-gradient-to-r from-fifa-blue-500/10 to-fifa-blue-600/5 border border-fifa-blue-500/20 rounded-lg sm:rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-fifa-blue-500/20 rounded-lg flex-shrink-0">
              <DollarSign className="w-5 h-5 text-fifa-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Average Hotel Cost</p>
              <p className="text-xl sm:text-2xl font-bold text-white">${city.averageHotelCost}<span className="text-sm text-gray-400">/night</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



