import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/appStore';
import { getPopularRoutes, PopularRoute } from '../utils/popularRoutes';
import RouteDetailsCard from '../components/RouteDetailsCard';
import { TrendingUp, Filter, Search } from 'lucide-react';

export default function RecommendedRoutes() {
  const navigate = useNavigate();
  const { addMatch, clearMatches, setViewMode } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  
  const allRoutes = getPopularRoutes();

  // Filter routes
  const filteredRoutes = allRoutes.filter(route => {
    const matchesSearch = route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         route.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'all' || route.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

  const handleLoadRoute = (route: PopularRoute) => {
    try {
      if (!route.suggestedMatches || route.suggestedMatches.length === 0) {
        alert('No matches found for this route!');
        return;
      }
      
      // Clear existing matches
      clearMatches();
      
      // Add each match from the route
      setTimeout(() => {
        route.suggestedMatches.forEach((match) => {
          addMatch(match);
        });
        
        // Navigate to Route Plan page
        setViewMode('route-plan');
        navigate('/app');
        
        // Show success message
        setTimeout(() => {
          alert(`✓ Loaded ${route.suggestedMatches.length} matches from ${route.name}!\n\nNow click "Create My Route" to optimize your journey.`);
        }, 300);
      }, 100);
    } catch (error) {
      console.error('Error loading route:', error);
      alert('Error loading route. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Hero Section */}
        <div className="text-center mb-6 sm:mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-fifa-gold-500 to-orange-600 mb-3 sm:mb-4">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 px-2">
            <span className="bg-gradient-to-r from-fifa-gold-400 via-orange-400 to-fifa-gold-500 bg-clip-text text-transparent">
              Recommended Routes
            </span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-4">
            Expertly curated World Cup journeys. Each route is optimized for the best experience, covering multiple matches and iconic cities.
          </p>
        </div>

        {/* Filters */}
        <div className="glass-dark rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-gray-700/50 mb-4 sm:mb-6 lg:mb-8">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search routes..."
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-fifa-gold-500 transition-colors"
                />
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="flex-1 sm:flex-none px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-fifa-gold-500 transition-colors"
              >
                <option value="all">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-400">
            Showing {filteredRoutes.length} of {allRoutes.length} routes
          </div>
        </div>

        {/* Routes Grid */}
        {filteredRoutes.length > 0 ? (
          <div className="grid gap-4 sm:gap-5 lg:gap-6 animate-fade-in">
            {filteredRoutes.map((route) => (
              <RouteDetailsCard
                key={route.id}
                route={route}
                onLoadRoute={handleLoadRoute}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 glass-dark rounded-lg sm:rounded-xl border border-gray-800/50">
            <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 text-gray-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-2 px-4">
              No routes found
            </h3>
            <p className="text-sm sm:text-base text-gray-500 px-4">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

