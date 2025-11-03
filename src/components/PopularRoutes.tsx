import { useState, useEffect } from 'react';
import { PopularRoute, getPopularRoutes } from '../utils/popularRoutes';
import { useAppStore } from '../store/appStore';
import { TrendingUp, MapPin, Calendar, Navigation, Zap, ChevronDown, ChevronUp } from 'lucide-react';

export default function PopularRoutes() {
  const { addMatch, clearMatches, selectedMatches } = useAppStore();
  const [expandedRoute, setExpandedRoute] = useState<string | null>(null);
  const routes = getPopularRoutes();

  useEffect(() => {
    console.log('PopularRoutes component loaded');
    console.log('Total routes:', routes.length);
    routes.forEach(route => {
      console.log(`Route: ${route.name}, Matches: ${route.suggestedMatches.length}`);
    });
  }, []);

  const handleLoadRoute = (route: PopularRoute) => {
    try {
      console.log('Loading route:', route.name);
      console.log('Suggested matches:', route.suggestedMatches.length);
      
      if (!route.suggestedMatches || route.suggestedMatches.length === 0) {
        alert('No matches found for this route!');
        return;
      }
      
      // Clear existing matches first
      clearMatches();
      
      // Small delay to ensure state updates
      setTimeout(() => {
        // Add each match from the route
        route.suggestedMatches.forEach((match, index) => {
          console.log(`Adding match ${index + 1}:`, match.homeTeam, 'vs', match.awayTeam);
          addMatch(match);
        });
        
        console.log('Route loaded successfully. Total matches:', route.suggestedMatches.length);
        
        // Show success feedback
        alert(`✓ Loaded ${route.suggestedMatches.length} matches from ${route.name}!`);
      }, 100);
      
      // Collapse after loading
      setExpandedRoute(null);
    } catch (error) {
      console.error('Error loading route:', error);
      alert('Error loading route. Please try again.');
    }
  };

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

  return (
    <div className="space-y-2 sm:space-y-3">
      <div className="flex items-center gap-2 mb-2 sm:mb-3">
        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-fifa-gold-400" />
        <h3 className="font-bold text-base sm:text-lg">
          <span className="bg-gradient-to-r from-fifa-gold-400 to-fifa-gold-500 bg-clip-text text-transparent">
            Popular Routes
          </span>
        </h3>
      </div>
      
      <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
        Quick-start your journey with our curated routes based on popular destinations
      </p>

      <div className="space-y-2 max-h-[400px] sm:max-h-[600px] overflow-y-auto scrollbar-hide sm:scrollbar-thin sm:scrollbar-thumb-gray-700 sm:scrollbar-track-gray-900">
        {routes.map((route) => {
          const isExpanded = expandedRoute === route.id;
          
          return (
            <div
              key={route.id}
              className="glass-dark rounded-lg border border-gray-700/50 hover:border-fifa-gold-500/30 transition-all"
            >
              {/* Route Header */}
              <div
                className="p-2 sm:p-3 cursor-pointer touch-manipulation"
                onClick={() => setExpandedRoute(isExpanded ? null : route.id)}
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                      <h4 className="font-semibold text-xs sm:text-sm truncate">{route.name}</h4>
                      <span className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full border ${getDifficultyColor(route.difficulty)} whitespace-nowrap w-fit`}>
                        {route.difficulty}
                      </span>
                    </div>
                    
                    <p className="text-[10px] sm:text-xs text-gray-400 mb-1.5 sm:mb-2 line-clamp-2">{route.description}</p>
                    
                    <div className="flex flex-wrap gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        {route.cities.length} cities
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 flex-shrink-0" />
                        ~{route.estimatedDays} days
                      </div>
                      <div className="flex items-center gap-1">
                        <Navigation className="w-3 h-3 flex-shrink-0" />
                        {route.estimatedDistance.toLocaleString()} km
                      </div>
                    </div>
                  </div>
                  
                  <button className="text-gray-400 hover:text-white active:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="px-2 sm:px-3 pb-2 sm:pb-3 space-y-2 sm:space-y-3 border-t border-gray-700/50 pt-2 sm:pt-3 animate-slide-down">
                  {/* Cities */}
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-400 mb-1.5 sm:mb-2">Route Cities:</p>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {route.cities.map((city, idx) => (
                        <div key={city.id} className="flex items-center gap-1">
                          <span className="text-[10px] sm:text-xs bg-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                            {city.name}
                          </span>
                          {idx < route.cities.length - 1 && (
                            <span className="text-gray-600 text-xs">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-400 mb-1.5 sm:mb-2">Highlights:</p>
                    <ul className="text-[10px] sm:text-xs text-gray-300 space-y-0.5 sm:space-y-1 ml-3 sm:ml-4">
                      {route.highlights.map((highlight, idx) => (
                        <li key={idx} className="list-disc">{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Suggested Matches */}
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-400 mb-1.5 sm:mb-2">
                      Suggested Matches ({route.suggestedMatches.length}):
                    </p>
                    <div className="space-y-1 max-h-24 sm:max-h-32 overflow-y-auto scrollbar-hide sm:scrollbar-thin sm:scrollbar-thumb-gray-700 sm:scrollbar-track-gray-900">
                      {route.suggestedMatches.slice(0, 4).map((match) => (
                        <div
                          key={match.id}
                          className="text-[10px] sm:text-xs bg-gray-800/50 p-1.5 sm:p-2 rounded flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1"
                        >
                          <div className="flex-1 min-w-0">
                            <span className="font-medium truncate block sm:inline">{match.homeTeam} vs {match.awayTeam}</span>
                            <span className="text-gray-500 text-[10px] sm:text-xs sm:ml-2 block sm:inline">
                              {new Date(match.date).toLocaleDateString()}
                            </span>
                          </div>
                          <span className="text-gray-500 text-[9px] sm:text-[10px] bg-gray-700 px-1 sm:px-1.5 py-0.5 rounded w-fit">
                            {match.stage}
                          </span>
                        </div>
                      ))}
                      {route.suggestedMatches.length > 4 && (
                        <p className="text-[9px] sm:text-[10px] text-gray-500 text-center py-1">
                          +{route.suggestedMatches.length - 4} more matches
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Load Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLoadRoute(route);
                    }}
                    className="w-full btn-gold flex items-center justify-center gap-2 text-xs sm:text-sm touch-manipulation"
                  >
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                    Load This Route
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

