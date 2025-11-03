import { useState } from 'react';
import { useAppStore } from '../store/appStore';
import MatchSelector from '../components/MatchSelector';
import ItineraryView from '../components/ItineraryView';
import AlertBanner from '../components/AlertBanner';
import SavedTrips from '../components/SavedTrips';
import PopularRoutes from '../components/PopularRoutes';
import TripStats from '../components/TripStats';
import { optimizeItinerary } from '../utils/optimizer';
import { saveRoute } from '../utils/journeyStorage';
import { Zap, RefreshCw, Bookmark, Sparkles, TrendingUp, Shield, MapPin } from 'lucide-react';
import { getCityById } from '../data/cities';

export default function Optimizer() {
  const { selectedMatches, currentItinerary, setCurrentItinerary, clearMatches } = useAppStore();
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [routeName, setRouteName] = useState('');
  const [showSaveDialog, setShowSaveDialog] = useState(false);

  const handleOptimize = () => {
    if (selectedMatches.length < 2) {
      return;
    }

    setIsOptimizing(true);
    
    // Simulate optimization delay for better UX
    setTimeout(() => {
      const itinerary = optimizeItinerary(selectedMatches);
      setCurrentItinerary(itinerary);
      setIsOptimizing(false);
    }, 800);
  };

  const handleReset = () => {
    clearMatches();
    setCurrentItinerary(null);
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


  return (
    <div className="flex flex-col lg:flex-row min-h-screen overflow-hidden">
      {/* Left Sidebar - Match Selection - Collapsible on mobile */}
      <div className="w-full lg:w-96 bg-gradient-to-b from-gray-900 to-gray-950 border-b lg:border-r lg:border-b-0 border-gray-800/50 overflow-y-auto p-3 sm:p-4 max-h-[50vh] lg:max-h-none">
        <div className="mb-4 sm:mb-6 animate-fade-in">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-400 via-fifa-blue-400 to-fifa-blue-500 bg-clip-text text-transparent">
              Match Optimizer
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            Select matches you want to attend and we'll create the optimal travel route
          </p>
        </div>

        {selectedMatches.length < 2 && !currentItinerary && (
          <div className="mb-3 sm:mb-4 animate-slide-down">
            <AlertBanner
              type="info"
              message="Select at least 2 matches to optimize your route"
              dismissible={false}
            />
          </div>
        )}

        {/* Popular Routes */}
        <div className="mb-4 sm:mb-6">
          <PopularRoutes />
        </div>

        <div className="border-t border-gray-800/50 pt-4 sm:pt-6">
          <MatchSelector />
        </div>

        {selectedMatches.length >= 2 && (
          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 animate-slide-up sticky bottom-0 bg-gradient-to-t from-gray-950 via-gray-950 to-transparent pt-4 pb-2">
            <button
              onClick={handleOptimize}
              disabled={isOptimizing}
              className="w-full btn-primary flex items-center justify-center gap-2 relative overflow-hidden group touch-manipulation"
            >
              {isOptimizing ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Optimizing...</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 group-hover:animate-pulse" />
                  <span>Optimize Route</span>
                </>
              )}
            </button>

            {currentItinerary && (
              <button onClick={handleReset} className="w-full btn-secondary flex items-center justify-center gap-2 touch-manipulation">
                <RefreshCw className="w-4 h-4" />
                Reset & Start Over
              </button>
            )}
          </div>
        )}
        
        {/* Saved Trips */}
        <div className="mt-4 sm:mt-6 border-t border-gray-800/50 pt-4 sm:pt-6">
          <SavedTrips />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-gray-950">
        {!currentItinerary ? (
          /* Pre-Optimization Content */
          <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="space-y-6 animate-fade-in">
              {/* Header */}
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-fifa-blue-500 to-purple-600 mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-fifa-blue-400 via-purple-400 to-fifa-gold-400 bg-clip-text text-transparent">
                    Smart Trip Optimizer
                  </span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Select your matches and let our AI create the perfect travel route for you
                </p>
              </div>

              {/* Benefits */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="glass-dark rounded-xl p-5 border border-fifa-blue-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-fifa-blue-500/20">
                      <TrendingUp className="w-5 h-5 text-fifa-blue-400" />
                    </div>
                    <h3 className="font-semibold text-white">Cost Optimized</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Minimize travel costs while maximizing your World Cup experience
                  </p>
                </div>

                <div className="glass-dark rounded-xl p-5 border border-purple-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <Zap className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-white">Time Efficient</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Smart routing considers rest periods and travel time between matches
                  </p>
                </div>

                <div className="glass-dark rounded-xl p-5 border border-fifa-gold-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-fifa-gold-500/20">
                      <Shield className="w-5 h-5 text-fifa-gold-400" />
                    </div>
                    <h3 className="font-semibold text-white">Safety First</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Alerts for border crossings, timezone changes, and tight schedules
                  </p>
                </div>
              </div>

              {/* Trip Stats - Show when matches selected */}
              {selectedMatches.length > 0 && (
                <div className="space-y-4 animate-slide-up">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-fifa-blue-400 to-fifa-blue-600 rounded"></div>
                    Your Selection
                  </h2>
                  <TripStats matches={selectedMatches} />

                  {/* Selected Matches Preview */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-300">Selected Matches</h3>
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {selectedMatches.map((match, index) => {
                        const city = getCityById(match.cityId);
                        return (
                          <div
                            key={match.id}
                            className="glass-dark rounded-lg p-4 border border-gray-700/50 hover:border-fifa-blue-500/30 transition-colors"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs bg-fifa-blue-500/20 text-fifa-blue-400 px-2 py-1 rounded">
                                    #{index + 1}
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    {new Date(match.date).toLocaleDateString('en-US', { 
                                      month: 'short', 
                                      day: 'numeric' 
                                    })}
                                  </span>
                                </div>
                                <h4 className="font-semibold text-white text-sm">
                                  {match.homeTeam} vs {match.awayTeam}
                                </h4>
                                <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                                  <MapPin className="w-3 h-3" />
                                  <span>{city?.name}</span>
                                </div>
                              </div>
                              <div className="text-right text-xs">
                                <div className="text-fifa-blue-400 font-semibold">{match.time}</div>
                                <div className="text-gray-500">{match.stage}</div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Empty State */}
              {selectedMatches.length === 0 && (
                <div className="text-center py-12 glass-dark rounded-xl border border-gray-800/50">
                  <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">
                    No matches selected yet
                  </h3>
                  <p className="text-gray-500">
                    Select matches from the sidebar to start planning your trip
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Post-Optimization Results */
          <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-slide-up">
            <div className="flex flex-col gap-4 sm:gap-6 mb-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-1">
                  <span className="bg-gradient-to-r from-fifa-gold-400 to-fifa-gold-500 bg-clip-text text-transparent">
                    Your Optimized Itinerary
                  </span>
                </h2>
                <p className="text-sm text-gray-400">Perfect route for your World Cup journey</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => setShowSaveDialog(!showSaveDialog)}
                  className="btn-gold flex items-center justify-center gap-2 touch-manipulation"
                >
                  <Bookmark className="w-4 h-4" />
                  <span>Save Route</span>
                </button>
                <div className="badge-gold text-center sm:text-left">
                  Optimization Score: {currentItinerary.totalPenalty.toFixed(1)}
                </div>
              </div>
            </div>

            {/* Save Dialog */}
            {showSaveDialog && (
              <div className="mb-6 glass-dark border-2 border-fifa-gold-500/30 rounded-xl p-4 sm:p-6 animate-slide-down">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Bookmark className="w-5 h-5 text-fifa-gold-400" />
                  Save this route
                </h3>
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    value={routeName}
                    onChange={(e) => setRouteName(e.target.value)}
                    placeholder="Route name (optional)"
                    className="input-field w-full"
                  />
                  <div className="flex gap-3">
                    <button
                      onClick={handleSaveRoute}
                      className="btn-primary flex-1 touch-manipulation"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setShowSaveDialog(false)}
                      className="btn-secondary flex-1 touch-manipulation"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            <ItineraryView itinerary={currentItinerary} />
          </div>
        )}
      </div>
    </div>
  );
}



