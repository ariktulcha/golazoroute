import { useState } from 'react';
import { matches } from '../data/matches';
import { getCityById } from '../data/cities';
import { useAppStore } from '../store/appStore';
import { Plus, X, Calendar, MapPin, CheckSquare, XSquare } from 'lucide-react';

export default function MatchSelector() {
  const { selectedMatches, addMatch, removeMatch, clearMatches } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStage, setFilterStage] = useState<string>('all');
  const [showLimit, setShowLimit] = useState(20);

  const filteredMatches = matches.filter((match) => {
    const city = getCityById(match.cityId);
    const matchText = `${match.homeTeam} ${match.awayTeam} ${city?.name}`.toLowerCase();
    const matchesSearch = matchText.includes(searchTerm.toLowerCase());
    const matchesStage = filterStage === 'all' || match.stage === filterStage;
    const notSelected = !selectedMatches.find((m) => m.id === match.id);
    
    return matchesSearch && matchesStage && notSelected;
  });

  const isMatchSelected = (matchId: string) => {
    return selectedMatches.some((m) => m.id === matchId);
  };

  const handleSelectAll = () => {
    const matchesToAdd = filteredMatches.slice(0, showLimit);
    matchesToAdd.forEach(match => {
      if (!isMatchSelected(match.id)) {
        addMatch(match);
      }
    });
  };

  const handleLoadMore = () => {
    setShowLimit(prev => Math.min(prev + 20, filteredMatches.length));
  };

  const handleShowAll = () => {
    setShowLimit(filteredMatches.length);
  };

  return (
    <div className="space-y-4">
      {/* Selected Matches */}
      {selectedMatches.length > 0 && (
        <div className="card p-3 sm:p-4">
          <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Selected Matches ({selectedMatches.length})</h3>
          <div className="space-y-2 max-h-48 sm:max-h-60 overflow-y-auto scrollbar-hide sm:scrollbar-thin sm:scrollbar-thumb-gray-700 sm:scrollbar-track-gray-900">
            {selectedMatches.map((match) => {
              const city = getCityById(match.cityId);
              return (
                <div
                  key={match.id}
                  className="bg-gray-800 p-2 sm:p-3 rounded-lg flex justify-between items-center gap-2"
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-xs sm:text-sm truncate">
                      {match.homeTeam} vs {match.awayTeam}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-400 flex flex-wrap items-center gap-1 sm:gap-2 mt-1">
                      <Calendar className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{new Date(match.date).toLocaleDateString()} at {match.time}</span>
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{city?.name}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeMatch(match.id)}
                    className="text-red-400 hover:text-red-300 active:text-red-300 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation flex-shrink-0"
                    aria-label="Remove match"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <div className="card p-3 sm:p-4">
        <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Add Matches</h3>
        <div className="space-y-2 sm:space-y-3">
          <input
            type="text"
            placeholder="Search by team or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field text-sm"
          />

          <select
            value={filterStage}
            onChange={(e) => setFilterStage(e.target.value)}
            className="input-field text-sm"
          >
            <option value="all">All Stages</option>
            <option value="Group">Group Stage</option>
            <option value="Round of 32">Round of 32</option>
            <option value="Round of 16">Round of 16</option>
            <option value="Quarter-final">Quarter-finals</option>
            <option value="Semi-final">Semi-finals</option>
            <option value="Final">Final</option>
          </select>

          {/* Bulk Actions */}
          {filteredMatches.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={handleSelectAll}
                className="flex-1 btn-secondary flex items-center justify-center gap-2 text-xs sm:text-sm touch-manipulation"
              >
                <CheckSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="truncate">Select ({Math.min(showLimit, filteredMatches.length)})</span>
              </button>
              {selectedMatches.length > 0 && (
                <button
                  onClick={clearMatches}
                  className="flex-1 btn-secondary flex items-center justify-center gap-2 text-xs sm:text-sm text-red-400 hover:text-red-300 active:text-red-300 touch-manipulation"
                >
                  <XSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                  Clear All
                </button>
              )}
            </div>
          )}
        </div>

        {/* Available Matches */}
        <div className="mt-3 sm:mt-4 space-y-2 max-h-64 sm:max-h-96 overflow-y-auto scrollbar-hide sm:scrollbar-thin sm:scrollbar-thumb-gray-700 sm:scrollbar-track-gray-900">
          {filteredMatches.slice(0, showLimit).map((match) => {
            const city = getCityById(match.cityId);
            return (
              <div
                key={match.id}
                className="bg-gray-800 p-2 sm:p-3 rounded-lg flex justify-between items-center hover:bg-gray-750 active:bg-gray-750 transition-colors gap-2"
              >
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-xs sm:text-sm truncate">
                    {match.homeTeam} vs {match.awayTeam}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400 flex flex-wrap items-center gap-1 sm:gap-2 mt-1">
                    <span className="bg-gray-700 px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs">{match.stage}</span>
                    <Calendar className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{new Date(match.date).toLocaleDateString()}</span>
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{city?.name}</span>
                  </div>
                </div>
                <button
                  onClick={() => addMatch(match)}
                  disabled={isMatchSelected(match.id)}
                  className="text-fifa-blue hover:text-blue-400 active:text-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation flex-shrink-0"
                  aria-label="Add match"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            );
          })}
          
          {/* Load More / Show All */}
          {filteredMatches.length > showLimit && (
            <div className="space-y-2 pt-2">
              <p className="text-xs text-gray-400 text-center">
                Showing {showLimit} of {filteredMatches.length} matches
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleLoadMore}
                  className="flex-1 btn-secondary text-xs sm:text-sm touch-manipulation"
                >
                  Load More (+20)
                </button>
                <button
                  onClick={handleShowAll}
                  className="flex-1 btn-secondary text-xs sm:text-sm touch-manipulation"
                >
                  Show All
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



