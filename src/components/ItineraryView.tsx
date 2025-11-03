import { Itinerary } from '../data/types';
import { DollarSign, Clock, MapPin, AlertTriangle, CheckCircle } from 'lucide-react';
import TravelSegmentCard from './TravelSegmentCard';

interface ItineraryViewProps {
  itinerary: Itinerary;
}

export default function ItineraryView({ itinerary }: ItineraryViewProps) {
  const { matches, segments, totalCost, totalDistance, totalDuration, warnings, restPeriods } = itinerary;

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        <div className="card p-3 sm:p-4">
          <div className="flex items-center gap-1 sm:gap-2 text-gray-400 mb-1">
            <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-[10px] sm:text-xs">Total Cost</span>
          </div>
          <p className="text-lg sm:text-2xl font-bold text-white">${totalCost.toLocaleString()}</p>
        </div>

        <div className="card p-3 sm:p-4">
          <div className="flex items-center gap-1 sm:gap-2 text-gray-400 mb-1">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-[10px] sm:text-xs">Distance</span>
          </div>
          <p className="text-lg sm:text-2xl font-bold text-white">{totalDistance.toLocaleString()} mi</p>
        </div>

        <div className="card p-3 sm:p-4">
          <div className="flex items-center gap-1 sm:gap-2 text-gray-400 mb-1">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-[10px] sm:text-xs">Travel Time</span>
          </div>
          <p className="text-lg sm:text-2xl font-bold text-white">{Math.round(totalDuration)}h</p>
        </div>

        <div className="card p-3 sm:p-4">
          <div className="flex items-center gap-1 sm:gap-2 text-gray-400 mb-1">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-[10px] sm:text-xs">Matches</span>
          </div>
          <p className="text-lg sm:text-2xl font-bold text-white">{matches.length}</p>
        </div>
      </div>

      {/* Warnings */}
      {warnings.length > 0 && (
        <div className="card bg-yellow-900/20 border-yellow-600 p-3 sm:p-4">
          <h3 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base text-yellow-400">
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
            Warnings ({warnings.length})
          </h3>
          <div className="space-y-2">
            {warnings.map((warning, index) => (
              <div
                key={index}
                className={`p-2 rounded text-xs sm:text-sm ${
                  warning.severity === 'red'
                    ? 'bg-red-900/30 border border-red-600'
                    : 'bg-yellow-900/30 border border-yellow-600'
                }`}
              >
                <span className={warning.severity === 'red' ? 'text-red-400' : 'text-yellow-400'}>
                  {warning.severity === 'red' ? '🔴' : '⚠️'} {warning.message}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Itinerary Timeline */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg sm:text-xl text-white flex items-center gap-2">
          <div className="w-1 h-6 bg-gradient-to-b from-fifa-blue-400 to-fifa-blue-600 rounded"></div>
          Your Journey
        </h3>
        
        <div className="space-y-4">
          {matches.map((match, index) => {
            const segment = segments[index];
            const restPeriod = restPeriods[index];
            const matchCity = segment ? segment.from : restPeriods[index]?.city;

            return (
              <div key={match.id} className="relative">
                {/* Match Card */}
                <div className="glass-dark rounded-xl p-4 sm:p-5 border border-fifa-gold-500/30 bg-gradient-to-br from-fifa-gold-950/20 to-gray-900/30">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs bg-fifa-gold-500/20 text-fifa-gold-400 px-3 py-1 rounded-full font-semibold border border-fifa-gold-500/30">
                          Match {index + 1}
                        </span>
                      </div>
                      <h4 className="font-bold text-lg sm:text-xl text-white mb-1">
                        {match.homeTeam} vs {match.awayTeam}
                      </h4>
                      <p className="text-sm text-gray-400">{match.stage}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-white">
                        {new Date(match.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                      <p className="text-sm text-fifa-blue-400 font-semibold">{match.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-300 pt-3 border-t border-gray-700/50">
                    <MapPin className="w-4 h-4 text-fifa-gold-400" />
                    <span className="font-medium">{matchCity?.name}</span>
                    {matchCity?.country && (
                      <span className="text-gray-500">• {matchCity.country}</span>
                    )}
                  </div>
                </div>

                {/* Rest Period Indicator */}
                {restPeriod && !segment && (
                  <div className="flex justify-center my-3">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
                      restPeriod.adequate 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {restPeriod.adequate ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                      <span>{restPeriod.hours.toFixed(1)}h rest in {restPeriod.city.name}</span>
                    </div>
                  </div>
                )}

                {/* Travel Segment */}
                {segment && (
                  <div className="my-4">
                    <TravelSegmentCard segment={segment} showConnector={true} />
                    
                    {/* Rest Period after travel */}
                    {restPeriod && (
                      <div className="flex justify-center mt-3">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
                          restPeriod.adequate 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-red-500/20 text-red-400 border border-red-500/30'
                        }`}>
                          {restPeriod.adequate ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                          <span>{restPeriod.hours.toFixed(1)}h rest in {restPeriod.city.name}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Rest Analysis */}
      <div className="card p-3 sm:p-4">
        <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Rest Period Analysis</h3>
        <div className="space-y-2">
          {restPeriods.map((period, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-2 rounded text-xs sm:text-sm ${
                period.adequate ? 'bg-green-900/20' : 'bg-red-900/20'
              }`}
            >
              <span className="truncate pr-2">{period.city.name}</span>
              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                <span className={`font-semibold ${period.adequate ? 'text-green-400' : 'text-red-400'}`}>
                  {period.hours.toFixed(1)}h
                </span>
                {period.adequate ? (
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                ) : (
                  <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



