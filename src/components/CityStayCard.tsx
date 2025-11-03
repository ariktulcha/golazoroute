import { CityStay } from '../data/types';
import { Calendar, Moon, MapPin, Trophy } from 'lucide-react';

interface CityStayCardProps {
  stay: CityStay;
  index: number;
}

export default function CityStayCard({ stay, index }: CityStayCardProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="glass-dark rounded-lg sm:rounded-xl p-4 sm:p-5 border border-fifa-gold-500/30 bg-gradient-to-br from-fifa-gold-950/20 to-gray-900/30">
      {/* Header */}
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-fifa-gold-500/20 border-2 border-fifa-gold-500/50 text-fifa-gold-400 font-bold text-sm sm:text-base">
            {index + 1}
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-1.5 sm:gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-fifa-gold-400" />
              {stay.city.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">{stay.city.country}</p>
          </div>
        </div>
      </div>

      {/* Stay Duration */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="glass-dark rounded-lg p-2.5 sm:p-3 border border-gray-700/50">
          <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 mb-0.5 sm:mb-1">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-[10px] sm:text-xs">Arrival</span>
          </div>
          <div className="text-xs sm:text-sm font-semibold text-white">
            {formatDate(stay.arrivalDate)}
          </div>
        </div>

        <div className="glass-dark rounded-lg p-2.5 sm:p-3 border border-gray-700/50">
          <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 mb-0.5 sm:mb-1">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-[10px] sm:text-xs">Departure</span>
          </div>
          <div className="text-xs sm:text-sm font-semibold text-white">
            {formatDate(stay.departureDate)}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-fifa-blue-400">
        <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        <span className="text-xs sm:text-sm font-semibold">
          {stay.nights} {stay.nights === 1 ? 'night' : 'nights'} in {stay.city.name}
        </span>
      </div>

      {/* Matches in this city */}
      <div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 mb-2">
          <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="text-xs sm:text-sm font-semibold">
            {stay.matches.length} {stay.matches.length === 1 ? 'Match' : 'Matches'}
          </span>
        </div>
        <div className="space-y-2">
          {stay.matches.map((match) => (
            <div
              key={match.id}
              className="bg-gray-800/50 rounded-lg p-2.5 sm:p-3 border border-gray-700/30"
            >
              <div className="font-semibold text-white text-xs sm:text-sm mb-1">
                {match.homeTeam} vs {match.awayTeam}
              </div>
              <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-400">
                <span>{formatDate(match.date)} • {match.time}</span>
                <span className="text-fifa-blue-400">{match.stage}</span>
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 mt-1">
                {stay.city.stadium}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rest Time */}
      {stay.restHours > 0 && (
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-700/50">
          <div className={`text-xs sm:text-sm ${stay.restHours >= 24 ? 'text-green-400' : 'text-yellow-400'}`}>
            {stay.restHours >= 24 
              ? `✓ ${Math.floor(stay.restHours / 24)} days to explore ${stay.city.name}`
              : `⚠️ Limited time (${stay.restHours}h) - tight schedule`
            }
          </div>
        </div>
      )}
    </div>
  );
}

