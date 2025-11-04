import { useState } from 'react';
import { PopularRoute } from '../utils/popularRoutes';
import { MapPin, Calendar, Navigation, DollarSign, ChevronDown, ChevronUp, Zap, Trophy, ArrowRight } from 'lucide-react';
import { getCityById } from '../data/cities';

interface RouteDetailsCardProps {
  route: PopularRoute;
  onLoadRoute: (route: PopularRoute) => void;
}

export default function RouteDetailsCard({ route, onLoadRoute }: RouteDetailsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Medium':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'Hard':
        return 'text-red-400 bg-red-400/10 border-red-400/30';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  // Calculate travel times between cities
  const getTravelInfo = () => {
    const cityTravels = [];
    for (let i = 0; i < route.cities.length - 1; i++) {
      const fromCity = route.cities[i];
      const toCity = route.cities[i + 1];
      // Simplified - in real app would calculate actual distance/time
      const distance = Math.round(Math.random() * 500 + 100);
      const hours = Math.round(distance / 60);
      cityTravels.push({
        from: fromCity,
        to: toCity,
        distance,
        hours,
        mode: distance > 300 ? 'flight' : 'drive'
      });
    }
    return cityTravels;
  };

  const travelInfo = getTravelInfo();
  const estimatedCost = route.estimatedDistance * 0.15 + route.matchCount * 150;

  return (
    <div className="glass-dark rounded-xl border border-gray-700/50 hover:border-fifa-gold-500/30 transition-all overflow-hidden">
      {/* Card Header */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-white">{route.name}</h3>
              <span className={`text-xs px-3 py-1 rounded-full border ${getDifficultyColor(route.difficulty)}`}>
                {route.difficulty}
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{route.description}</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          <div className="glass-dark rounded-lg p-3 border border-gray-700/30">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <MapPin className="w-4 h-4" />
              <span className="text-xs">Cities</span>
            </div>
            <div className="text-lg font-bold text-white">{route.cities.length}</div>
          </div>

          <div className="glass-dark rounded-lg p-3 border border-gray-700/30">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-xs">Duration</span>
            </div>
            <div className="text-lg font-bold text-white">{route.estimatedDays}d</div>
          </div>

          <div className="glass-dark rounded-lg p-3 border border-gray-700/30">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <Navigation className="w-4 h-4" />
              <span className="text-xs">Distance</span>
            </div>
            <div className="text-lg font-bold text-white">{route.estimatedDistance}km</div>
          </div>

          <div className="glass-dark rounded-lg p-3 border border-gray-700/30">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <DollarSign className="w-4 h-4" />
              <span className="text-xs">Est. Cost</span>
            </div>
            <div className="text-lg font-bold text-white">${Math.round(estimatedCost)}</div>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors text-gray-300"
        >
          <span className="text-sm font-semibold">
            {isExpanded ? 'Show Less' : 'View Full Details'}
          </span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="px-5 pb-5 space-y-6 border-t border-gray-700/50 pt-5 animate-slide-down">
          {/* Route Timeline */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-fifa-gold-400" />
              Route Timeline
            </h4>
            <div className="space-y-3">
              {route.cities.map((city, idx) => {
                const matchesInCity = route.suggestedMatches.filter(m => m.cityId === city.id);
                const daysInCity = matchesInCity.length > 0 ? Math.ceil(route.estimatedDays / route.cities.length) : 1;
                const travelSegment = travelInfo[idx];

                return (
                  <div key={city.id}>
                    {/* City Stop */}
                    <div className="glass-dark rounded-lg p-4 border border-fifa-blue-500/20">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h5 className="font-bold text-white">{city.name}</h5>
                          <p className="text-sm text-gray-400">{city.country}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-fifa-blue-400">{daysInCity} days</div>
                          <div className="text-xs text-gray-500">{matchesInCity.length} matches</div>
                        </div>
                      </div>
                      
                      {/* Matches in this city */}
                      {matchesInCity.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {matchesInCity.map(match => (
                            <div key={match.id} className="bg-gray-800/50 rounded p-2 text-sm">
                              <div className="font-semibold text-white">{match.homeTeam} vs {match.awayTeam}</div>
                              <div className="text-xs text-gray-400 flex items-center justify-between mt-1">
                                <span>{new Date(match.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {match.time}</span>
                                <span className="text-fifa-blue-400">{match.stage}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Travel Segment */}
                    {travelSegment && (
                      <div className="flex justify-center my-2">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 text-sm text-gray-400">
                          <ArrowRight className="w-4 h-4" />
                          <span>{travelSegment.hours}h {travelSegment.mode}</span>
                          <span>({travelSegment.distance}km)</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-fifa-gold-400" />
              Highlights
            </h4>
            <ul className="space-y-2">
              {route.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-fifa-gold-400 mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* All Matches */}
          <div>
            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-fifa-gold-400" />
              All Matches ({route.suggestedMatches.length})
            </h4>
            <div className="max-h-64 overflow-y-auto space-y-2">
              {route.suggestedMatches.map((match) => {
                const city = getCityById(match.cityId);
                return (
                  <div
                    key={match.id}
                    className="glass-dark rounded-lg p-3 border border-gray-700/30"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="font-semibold text-white text-sm mb-1">
                          {match.homeTeam} vs {match.awayTeam}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <MapPin className="w-3 h-3" />
                          <span>{city?.name}</span>
                        </div>
                      </div>
                      <div className="text-right text-xs">
                        <div className="text-white font-semibold">
                          {new Date(match.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                        <div className="text-fifa-blue-400">{match.time}</div>
                        <div className="text-gray-500 mt-1">{match.stage}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Use Route Button */}
          <button
            onClick={() => onLoadRoute(route)}
            className="w-full btn-gold flex items-center justify-center gap-2 py-4 text-base"
          >
            <Zap className="w-5 h-5" />
            <span>Use This Route</span>
          </button>
        </div>
      )}
    </div>
  );
}

