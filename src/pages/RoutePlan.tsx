import { useState } from 'react';
import { useAppStore } from '../store/appStore';
import MatchSelector from '../components/MatchSelector';
import TeamSelector from '../components/TeamSelector';
import TravelSegmentCard from '../components/TravelSegmentCard';
import CityStayCard from '../components/CityStayCard';
import TransportationLinks from '../components/TransportationLinks';
import { optimizeItinerary } from '../utils/optimizer';
import { getMatchesForTeam } from '../utils/teamRoutes';
import { saveRoute } from '../utils/journeyStorage';
import { Zap, RefreshCw, Bookmark, Users, Calendar, Route as RouteIcon, MapPin, AlertTriangle, CheckCircle, DollarSign, Clock, Navigation } from 'lucide-react';
import { Match, CityStay } from '../data/types';
import { getCityById } from '../data/cities';

type SelectionMode = 'team' | 'matches';

export default function RoutePlan() {
  const { selectedMatches, currentItinerary, setCurrentItinerary, clearMatches, addMatch } = useAppStore();
  const [selectionMode, setSelectionMode] = useState<SelectionMode>('matches');
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [routeName, setRouteName] = useState('');
  const [showSaveDialog, setShowSaveDialog] = useState(false);

  const handleTeamSelect = (teamName: string) => {
    setSelectedTeam(teamName);
    const teamMatches = getMatchesForTeam(teamName);
    
    clearMatches();
    setTimeout(() => {
      teamMatches.forEach(match => addMatch(match));
    }, 100);
  };

  const handleOptimize = () => {
    if (selectedMatches.length < 2) {
      alert('Please select at least 2 matches to create a route');
      return;
    }

    setIsOptimizing(true);
    
    setTimeout(() => {
      const itinerary = optimizeItinerary(selectedMatches);
      setCurrentItinerary(itinerary);
      setIsOptimizing(false);
      
      // Scroll to results
      setTimeout(() => {
        document.getElementById('route-results')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 800);
  };

  const handleReset = () => {
    clearMatches();
    setCurrentItinerary(null);
    setSelectedTeam(null);
  };

  const handleSaveRoute = () => {
    if (!currentItinerary) return;
    
    const name = routeName || `Trip ${new Date().toLocaleDateString()}`;
    const cityIds = [...new Set(currentItinerary.matches.map(m => m.cityId))];
    
    saveRoute(
      name,
      cityIds,
      currentItinerary.totalDistance,
      currentItinerary.totalCost
    );
    
    alert('Route saved to My Itinerary! ✓');
    setShowSaveDialog(false);
    setRouteName('');
  };

  // Calculate city stays from itinerary
  const calculateCityStays = (): CityStay[] => {
    if (!currentItinerary) return [];
    
    const stays: CityStay[] = [];
    const matchesByCity: { [cityId: string]: Match[] } = {};
    
    // Group matches by city
    currentItinerary.matches.forEach(match => {
      if (!matchesByCity[match.cityId]) {
        matchesByCity[match.cityId] = [];
      }
      matchesByCity[match.cityId].push(match);
    });
    
    // Create city stays
    Object.entries(matchesByCity).forEach(([cityId, matches]) => {
      const city = getCityById(cityId);
      if (!city) return;
      
      const sortedMatches = matches.sort((a, b) => 
        new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      
      const firstMatch = sortedMatches[0];
      const lastMatch = sortedMatches[sortedMatches.length - 1];
      
      // Arrival 1 day before first match, departure 1 day after last match
      const arrivalDate = new Date(firstMatch.date);
      arrivalDate.setDate(arrivalDate.getDate() - 1);
      
      const departureDate = new Date(lastMatch.date);
      departureDate.setDate(departureDate.getDate() + 1);
      
      const nights = Math.ceil((departureDate.getTime() - arrivalDate.getTime()) / (1000 * 60 * 60 * 24));
      const restHours = nights * 24 - (matches.length * 5); // Rough estimate
      
      stays.push({
        city,
        arrivalDate: arrivalDate.toISOString().split('T')[0],
        departureDate: departureDate.toISOString().split('T')[0],
        nights,
        matches: sortedMatches,
        restHours: Math.max(0, restHours)
      });
    });
    
    return stays;
  };

  const cityStays = calculateCityStays();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Hero Section */}
        <div className="text-center mb-6 sm:mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-500 to-fifa-blue-600 mb-3 sm:mb-4">
            <RouteIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 px-2">
            <span className="bg-gradient-to-r from-purple-400 via-fifa-blue-400 to-fifa-blue-500 bg-clip-text text-transparent">
              Route Plan
            </span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-4">
            Create your perfect World Cup journey. Follow your favorite team or select specific matches, and we'll build the optimal route for you.
          </p>
        </div>

        {!currentItinerary ? (
          /* Selection Phase */
          <div className="space-y-4 sm:space-y-6">
            {/* Selection Mode Tabs */}
            <div className="glass-dark rounded-lg sm:rounded-xl p-1.5 sm:p-2 border border-gray-700/50 flex gap-1.5 sm:gap-2 w-full sm:w-auto sm:inline-flex">
              <button
                onClick={() => setSelectionMode('team')}
                className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all ${
                  selectionMode === 'team'
                    ? 'bg-fifa-blue-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline-block mr-1.5 sm:mr-2" />
                <span className="hidden sm:inline">Follow a </span>Team
              </button>
              <button
                onClick={() => setSelectionMode('matches')}
                className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all ${
                  selectionMode === 'matches'
                    ? 'bg-fifa-blue-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline-block mr-1.5 sm:mr-2" />
                <span className="hidden sm:inline">Select </span>Matches
              </button>
            </div>

            {/* Selection Content */}
            <div className="glass-dark rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 border border-gray-700/50">
              {selectionMode === 'team' ? (
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Follow Your Team</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                      Select your favorite team and we'll automatically include all their matches
                    </p>
                  </div>
                  <TeamSelector
                    selectedTeam={selectedTeam}
                    onTeamSelect={handleTeamSelect}
                  />
                  {selectedTeam && selectedMatches.length > 0 && (
                    <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-fifa-blue-500/10 border border-fifa-blue-500/30 rounded-lg">
                      <p className="text-fifa-blue-400 text-xs sm:text-sm">
                        ✓ Found {selectedMatches.length} matches for {selectedTeam}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Select Matches</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                      Choose the specific matches you want to attend
                    </p>
                  </div>
                  <MatchSelector />
                </div>
              )}
            </div>

            {/* Selected Matches Preview */}
            {selectedMatches.length > 0 && (
              <div className="glass-dark rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 border border-fifa-gold-500/30 animate-slide-up">
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-fifa-gold-400" />
                  Your Selection
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4">
                  <div className="glass-dark rounded-lg p-2.5 sm:p-3 border border-gray-700/30">
                    <div className="text-[10px] sm:text-xs text-gray-400 mb-0.5 sm:mb-1">Matches</div>
                    <div className="text-xl sm:text-2xl font-bold text-white">{selectedMatches.length}</div>
                  </div>
                  <div className="glass-dark rounded-lg p-2.5 sm:p-3 border border-gray-700/30">
                    <div className="text-[10px] sm:text-xs text-gray-400 mb-0.5 sm:mb-1">Cities</div>
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      {[...new Set(selectedMatches.map(m => m.cityId))].length}
                    </div>
                  </div>
                  <div className="glass-dark rounded-lg p-2.5 sm:p-3 border border-gray-700/30">
                    <div className="text-[10px] sm:text-xs text-gray-400 mb-0.5 sm:mb-1">Countries</div>
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      {[...new Set(selectedMatches.map(m => getCityById(m.cityId)?.country))].length}
                    </div>
                  </div>
                  <div className="glass-dark rounded-lg p-2.5 sm:p-3 border border-gray-700/30">
                    <div className="text-[10px] sm:text-xs text-gray-400 mb-0.5 sm:mb-1">Duration</div>
                    <div className="text-base sm:text-lg font-bold text-white">
                      {Math.ceil((new Date(selectedMatches[selectedMatches.length - 1].date).getTime() - 
                        new Date(selectedMatches[0].date).getTime()) / (1000 * 60 * 60 * 24))}d
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 sm:gap-3">
                  <button
                    onClick={handleOptimize}
                    disabled={isOptimizing || selectedMatches.length < 2}
                    className="flex-1 btn-primary flex items-center justify-center gap-2 py-3 sm:py-4 text-sm sm:text-base lg:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isOptimizing ? (
                      <>
                        <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                        <span>Creating<span className="hidden sm:inline"> Route</span>...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Create<span className="hidden sm:inline"> My</span> Route</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleReset}
                    className="btn-secondary px-4 sm:px-6 py-3 sm:py-4"
                  >
                    <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Results Phase */
          <div id="route-results" className="space-y-4 sm:space-y-6 animate-fade-in">
            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
              <div className="glass-dark rounded-lg sm:rounded-xl p-3 sm:p-4 border border-fifa-gold-500/30">
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 mb-1 sm:mb-2">
                  <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-[10px] sm:text-xs lg:text-sm">Total Cost</span>
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  ${currentItinerary.totalCost.toLocaleString()}
                </div>
              </div>

              <div className="glass-dark rounded-lg sm:rounded-xl p-3 sm:p-4 border border-fifa-blue-500/30">
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 mb-1 sm:mb-2">
                  <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-[10px] sm:text-xs lg:text-sm">Distance</span>
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  {currentItinerary.totalDistance.toFixed(0)} mi
                </div>
              </div>

              <div className="glass-dark rounded-lg sm:rounded-xl p-3 sm:p-4 border border-purple-500/30">
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 mb-1 sm:mb-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-[10px] sm:text-xs lg:text-sm">Travel Time</span>
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  {Math.round(currentItinerary.totalDuration)}h
                </div>
              </div>

              <div className="glass-dark rounded-lg sm:rounded-xl p-3 sm:p-4 border border-green-500/30">
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 mb-1 sm:mb-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-[10px] sm:text-xs lg:text-sm">Matches</span>
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  {currentItinerary.matches.length}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={() => setShowSaveDialog(!showSaveDialog)}
                className="btn-gold flex items-center justify-center gap-2 py-2.5 sm:py-3 text-sm sm:text-base"
              >
                <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Save Route</span>
              </button>
              <button
                onClick={handleReset}
                className="btn-secondary flex items-center justify-center gap-2 py-2.5 sm:py-3 text-sm sm:text-base"
              >
                <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Start Over</span>
              </button>
              <div className="flex-1 flex items-center justify-center sm:justify-end">
                <div className="badge-gold text-xs sm:text-sm">
                  Score: {currentItinerary.totalPenalty.toFixed(1)}
                </div>
              </div>
            </div>

            {/* Save Dialog */}
            {showSaveDialog && (
              <div className="glass-dark border-2 border-fifa-gold-500/30 rounded-lg sm:rounded-xl p-4 sm:p-6 animate-slide-down">
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                  <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 text-fifa-gold-400" />
                  Save this route
                </h3>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <input
                    type="text"
                    value={routeName}
                    onChange={(e) => setRouteName(e.target.value)}
                    placeholder="Route name (optional)"
                    className="input-field w-full text-sm sm:text-base"
                  />
                  <div className="flex gap-2 sm:gap-3">
                    <button onClick={handleSaveRoute} className="btn-primary flex-1 text-sm sm:text-base py-2.5 sm:py-3">
                      Save
                    </button>
                    <button onClick={() => setShowSaveDialog(false)} className="btn-secondary flex-1 text-sm sm:text-base py-2.5 sm:py-3">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Warnings */}
            {currentItinerary.warnings.length > 0 && (
              <div className="glass-dark bg-yellow-900/20 border-yellow-600 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <h3 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-yellow-400 text-sm sm:text-base">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
                  Warnings ({currentItinerary.warnings.length})
                </h3>
                <div className="space-y-2">
                  {currentItinerary.warnings.map((warning, index) => (
                    <div
                      key={index}
                      className={`p-2.5 sm:p-3 rounded text-xs sm:text-sm ${
                        warning.severity === 'red'
                          ? 'bg-red-900/30 border border-red-600 text-red-400'
                          : 'bg-yellow-900/30 border border-yellow-600 text-yellow-400'
                      }`}
                    >
                      {warning.severity === 'red' ? '🔴' : '⚠️'} {warning.message}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* City Stays */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-fifa-gold-400" />
                Your Journey
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {cityStays.map((stay, index) => (
                  <div key={`${stay.city.id}-${index}`}>
                    <CityStayCard stay={stay} index={index} />
                    
                    {/* Travel segment after this stay */}
                    {index < cityStays.length - 1 && currentItinerary.segments[index] && (
                      <div className="my-4 sm:my-6">
                        <TravelSegmentCard 
                          segment={currentItinerary.segments[index]} 
                          showConnector={true}
                        />
                        
                        {/* Transportation booking links */}
                        <div className="mt-3 sm:mt-4 glass-dark rounded-lg p-3 sm:p-4 border border-gray-700/50">
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3">
                            Book Your Transportation:
                          </h4>
                          <TransportationLinks 
                            segment={currentItinerary.segments[index]}
                            date={stay.departureDate}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

