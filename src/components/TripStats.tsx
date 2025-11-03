import { Match } from '../data/types';
import { getCityById } from '../data/cities';
import { Calendar, MapPin, Users, Route } from 'lucide-react';

interface TripStatsProps {
  matches: Match[];
}

export default function TripStats({ matches }: TripStatsProps) {
  if (matches.length === 0) {
    return null;
  }

  // Calculate statistics
  const uniqueCities = [...new Set(matches.map(m => m.cityId))];
  const uniqueCountries = [...new Set(matches.map(m => {
    const city = getCityById(m.cityId);
    return city?.country;
  }).filter(Boolean))];

  // Get date range
  const sortedMatches = [...matches].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const firstMatch = sortedMatches[0];
  const lastMatch = sortedMatches[sortedMatches.length - 1];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="glass-dark rounded-lg p-4 border border-fifa-blue-500/20">
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-4 h-4 text-fifa-blue-400" />
          <span className="text-xs text-gray-400">Matches</span>
        </div>
        <div className="text-2xl font-bold text-white">{matches.length}</div>
      </div>

      <div className="glass-dark rounded-lg p-4 border border-purple-500/20">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-4 h-4 text-purple-400" />
          <span className="text-xs text-gray-400">Cities</span>
        </div>
        <div className="text-2xl font-bold text-white">{uniqueCities.length}</div>
      </div>

      <div className="glass-dark rounded-lg p-4 border border-fifa-gold-500/20">
        <div className="flex items-center gap-2 mb-2">
          <Route className="w-4 h-4 text-fifa-gold-400" />
          <span className="text-xs text-gray-400">Countries</span>
        </div>
        <div className="text-2xl font-bold text-white">{uniqueCountries.length}</div>
      </div>

      <div className="glass-dark rounded-lg p-4 border border-green-500/20">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-4 h-4 text-green-400" />
          <span className="text-xs text-gray-400">Duration</span>
        </div>
        <div className="text-sm font-bold text-white">
          {formatDate(firstMatch.date)} - {formatDate(lastMatch.date)}
        </div>
      </div>
    </div>
  );
}

