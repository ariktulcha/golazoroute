import { useState } from 'react';
import { Heart, MapPin, Trophy, Route, Star, Download, Upload, Settings } from 'lucide-react';
import { cities, getCityById } from '../data/cities';
import { getMatchById } from '../data/matches';
import {
  getUserJourney,
  toggleFavoriteTeam,
  toggleFavoriteCity,
  toggleFavoriteMatch,
  deleteRoute,
  getJourneyStats,
  exportJourney,
  importJourney,
  POPULAR_TEAMS,
  type UserJourney,
} from '../utils/journeyStorage';
import { formatDistance } from '../utils/mapboxHelpers';

export default function MyJourney() {
  const [journey, setJourney] = useState<UserJourney>(getUserJourney());
  const [activeTab, setActiveTab] = useState<'overview' | 'teams' | 'cities' | 'matches' | 'routes'>('overview');
  const [showTeamSelector, setShowTeamSelector] = useState(false);
  const stats = getJourneyStats();

  const refreshJourney = () => {
    setJourney(getUserJourney());
  };

  const handleToggleTeam = (team: string) => {
    toggleFavoriteTeam(team);
    refreshJourney();
  };

  const handleToggleCity = (cityId: string) => {
    toggleFavoriteCity(cityId);
    refreshJourney();
  };

  const handleToggleMatch = (matchId: string) => {
    toggleFavoriteMatch(matchId);
    refreshJourney();
  };

  const handleDeleteRoute = (routeId: string) => {
    if (confirm('Delete this route?')) {
      deleteRoute(routeId);
      refreshJourney();
    }
  };

  const handleExport = () => {
    const data = exportJourney();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'my-journey.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (importJourney(result)) {
        refreshJourney();
        alert('Journey imported successfully!');
      } else {
        alert('Error importing journey. Please check the file.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-4 mb-3">
            <div className="relative">
              <Heart className="w-10 h-10 text-fifa-gold-400 fill-fifa-gold-400 relative z-10" />
              <div className="absolute inset-0 blur-xl bg-fifa-gold-500/40 animate-pulse-slow"></div>
            </div>
            <div>
              <h1 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-fifa-gold-400 via-fifa-blue-400 to-fifa-gold-400 bg-clip-text text-transparent">
                  My Itinerary
                </span>
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Your personalized World Cup 2026 experience
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide animate-slide-down">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-3 rounded-xl whitespace-nowrap font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'overview'
                ? 'bg-gradient-to-r from-fifa-blue-500 to-fifa-blue-600 text-white shadow-glow-blue scale-105'
                : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 hover:scale-105'
            }`}
          >
            <Star className="w-4 h-4" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab('teams')}
            className={`px-5 py-3 rounded-xl whitespace-nowrap font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'teams'
                ? 'bg-gradient-to-r from-fifa-gold-500 to-fifa-gold-600 text-gray-900 shadow-glow-gold scale-105'
                : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 hover:scale-105'
            }`}
          >
            <Trophy className="w-4 h-4" />
            My Teams
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeTab === 'teams' ? 'bg-black/20' : 'bg-gray-700'
            }`}>
              {journey.favoriteTeams.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('cities')}
            className={`px-5 py-3 rounded-xl whitespace-nowrap font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'cities'
                ? 'bg-gradient-to-r from-purple-500 to-fifa-blue-500 text-white shadow-lg scale-105'
                : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 hover:scale-105'
            }`}
          >
            <MapPin className="w-4 h-4" />
            My Cities
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeTab === 'cities' ? 'bg-white/20' : 'bg-gray-700'
            }`}>
              {journey.favoriteCities.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('matches')}
            className={`px-5 py-3 rounded-xl whitespace-nowrap font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'matches'
                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg scale-105'
                : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 hover:scale-105'
            }`}
          >
            <Heart className="w-4 h-4" />
            My Matches
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeTab === 'matches' ? 'bg-white/20' : 'bg-gray-700'
            }`}>
              {journey.favoriteMatches.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('routes')}
            className={`px-5 py-3 rounded-xl whitespace-nowrap font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'routes'
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg scale-105'
                : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 hover:scale-105'
            }`}
          >
            <Route className="w-4 h-4" />
            My Routes
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeTab === 'routes' ? 'bg-white/20' : 'bg-gray-700'
            }`}>
              {journey.savedRoutes.length}
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="card-interactive bg-gradient-to-br from-fifa-gold-500/10 to-fifa-gold-600/5 border-fifa-gold-500/20 group">
                  <div className="flex items-center gap-3 text-fifa-gold-400 mb-3">
                    <div className="p-2 bg-fifa-gold-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold">Teams</span>
                  </div>
                  <p className="text-4xl font-bold text-white">{stats.totalTeams}</p>
                </div>

                <div className="card-interactive bg-gradient-to-br from-fifa-blue-500/10 to-fifa-blue-600/5 border-fifa-blue-500/20 group">
                  <div className="flex items-center gap-3 text-fifa-blue-400 mb-3">
                    <div className="p-2 bg-fifa-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold">Cities</span>
                  </div>
                  <p className="text-4xl font-bold text-white">{stats.totalCities}</p>
                </div>

                <div className="card-interactive bg-gradient-to-br from-red-500/10 to-pink-500/5 border-red-500/20 group">
                  <div className="flex items-center gap-3 text-red-400 mb-3">
                    <div className="p-2 bg-red-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <Heart className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold">Matches</span>
                  </div>
                  <p className="text-4xl font-bold text-white">{stats.totalMatches}</p>
                </div>

                <div className="card-interactive bg-gradient-to-br from-green-500/10 to-emerald-500/5 border-green-500/20 group">
                  <div className="flex items-center gap-3 text-green-400 mb-3">
                    <div className="p-2 bg-green-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <Route className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold">Routes</span>
                  </div>
                  <p className="text-4xl font-bold text-white">{stats.totalRoutes}</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-fifa-blue-400" />
                  Quick Actions
                </h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveTab('teams')}
                    className="btn-primary flex items-center gap-2 flex-1 sm:flex-initial justify-center"
                  >
                    <Trophy className="w-4 h-4" />
                    Add Teams
                  </button>
                  <button
                    onClick={() => setActiveTab('cities')}
                    className="btn-primary flex items-center gap-2 flex-1 sm:flex-initial justify-center"
                  >
                    <MapPin className="w-4 h-4" />
                    Add Cities
                  </button>
                  <button
                    onClick={handleExport}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 flex-1 sm:flex-initial justify-center"
                  >
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                  <label className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 flex-1 sm:flex-initial justify-center">
                    <Upload className="w-4 h-4" />
                    Import
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImport}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Recent Activity */}
              {(journey.favoriteTeams.length > 0 || journey.favoriteCities.length > 0) && (
                <div className="card">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-fifa-gold-400 fill-fifa-gold-400" />
                    Your Favorites
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {journey.favoriteTeams.slice(0, 3).map(team => (
                      <div key={team} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all group">
                        <div className="p-2 bg-fifa-gold-500/20 rounded-lg group-hover:scale-110 transition-transform">
                          <Trophy className="w-4 h-4 text-fifa-gold-400" />
                        </div>
                        <span className="font-medium">{team}</span>
                      </div>
                    ))}
                    {journey.favoriteCities.slice(0, 3).map(cityId => {
                      const city = getCityById(cityId);
                      return city ? (
                        <div key={cityId} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all group">
                          <div className="p-2 bg-fifa-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                            <MapPin className="w-4 h-4 text-fifa-blue-400" />
                          </div>
                          <span className="font-medium">{city.name}, {city.country}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Teams Tab */}
          {activeTab === 'teams' && (
            <div className="space-y-6 animate-fade-in">
              <div className="card">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-fifa-gold-400" />
                    Select Your Favorite Teams
                  </h3>
                  <button
                    onClick={() => setShowTeamSelector(!showTeamSelector)}
                    className="btn-primary text-sm px-4 py-2"
                  >
                    {showTeamSelector ? 'Hide' : 'Show'} All Teams
                  </button>
                </div>

                {showTeamSelector && (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6 animate-slide-down">
                    {POPULAR_TEAMS.map(team => (
                      <button
                        key={team}
                        onClick={() => handleToggleTeam(team)}
                        className={`px-4 py-3 rounded-lg text-left font-semibold transition-all duration-200 ${
                          journey.favoriteTeams.includes(team)
                            ? 'bg-gradient-to-r from-fifa-gold-500 to-fifa-gold-600 text-gray-900 shadow-glow-gold scale-105'
                            : 'bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:scale-105'
                        }`}
                      >
                        {journey.favoriteTeams.includes(team) && '⭐ '}
                        {team}
                      </button>
                    ))}
                  </div>
                )}

                {journey.favoriteTeams.length === 0 ? (
                  <div className="text-center py-12 text-gray-400">
                    <Trophy className="w-16 h-16 mx-auto mb-4 opacity-30" />
                    <p className="text-lg font-semibold">No favorite teams yet</p>
                    <p className="text-sm mt-1">Click "Show All Teams" to get started</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <h4 className="font-bold text-sm text-gray-400 mb-3 flex items-center gap-2">
                      <span>Your Teams</span>
                      <span className="badge-gold">{journey.favoriteTeams.length}</span>
                    </h4>
                    {journey.favoriteTeams.map(team => (
                      <div
                        key={team}
                        className="flex items-center justify-between bg-gradient-to-r from-gray-800/50 to-gray-800/30 hover:from-gray-800 hover:to-gray-700 border border-gray-700/50 rounded-xl p-4 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-fifa-gold-500/20 rounded-lg group-hover:scale-110 transition-transform">
                            <Trophy className="w-5 h-5 text-fifa-gold-400" />
                          </div>
                          <span className="font-bold text-lg">{team}</span>
                        </div>
                        <button
                          onClick={() => handleToggleTeam(team)}
                          className="text-red-500 hover:text-red-400 font-semibold px-4 py-2 rounded-lg hover:bg-red-500/10 transition-all"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Cities Tab */}
          {activeTab === 'cities' && (
            <div className="space-y-6 animate-fade-in">
              <div className="card">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-fifa-blue-400" />
                  Your Favorite Cities
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {cities.map(city => (
                    <button
                      key={city.id}
                      onClick={() => handleToggleCity(city.id)}
                      className={`text-left p-5 rounded-xl transition-all duration-300 border-2 ${
                        journey.favoriteCities.includes(city.id)
                          ? 'bg-gradient-to-r from-fifa-blue-500 to-fifa-blue-600 text-white border-fifa-blue-400 shadow-glow-blue scale-105'
                          : 'bg-gray-800/50 hover:bg-gray-800 border-gray-700 hover:border-gray-600 hover:scale-102'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-bold text-lg mb-1">{city.name}</h4>
                          <p className={`text-sm mb-2 ${
                            journey.favoriteCities.includes(city.id) ? 'text-white/80' : 'text-gray-400'
                          }`}>
                            {city.stadium}
                          </p>
                          <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                            journey.favoriteCities.includes(city.id) 
                              ? 'bg-white/20' 
                              : 'bg-gray-700'
                          }`}>
                            {city.country}
                          </span>
                        </div>
                        {journey.favoriteCities.includes(city.id) && (
                          <Heart className="w-6 h-6 fill-current text-red-400 animate-pulse" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {journey.favoriteCities.length === 0 && (
                  <div className="text-center py-12 text-gray-400">
                    <MapPin className="w-16 h-16 mx-auto mb-4 opacity-30" />
                    <p className="text-lg font-semibold">No favorite cities yet</p>
                    <p className="text-sm mt-1">Click any city above to add it</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Matches Tab */}
          {activeTab === 'matches' && (
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-4">Your Favorite Matches</h3>

                {journey.favoriteMatches.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    <Heart className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No favorite matches yet</p>
                    <p className="text-sm mt-1">Go to Matches to select favorites</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {journey.favoriteMatches.map(matchId => {
                      const match = getMatchById(matchId);
                      if (!match) return null;
                      
                      return (
                        <div
                          key={matchId}
                          className="flex items-center justify-between bg-gray-700 rounded p-4"
                        >
                          <div>
                            <p className="font-semibold">
                              {match.homeTeam} vs {match.awayTeam}
                            </p>
                            <p className="text-sm text-gray-400">
                              {match.stage} • {match.date} at {match.time}
                            </p>
                          </div>
                          <button
                            onClick={() => handleToggleMatch(matchId)}
                            className="text-red-500 hover:text-red-400"
                          >
                            <Heart className="w-5 h-5 fill-current" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Routes Tab */}
          {activeTab === 'routes' && (
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-4">Your Saved Routes</h3>

                {journey.savedRoutes.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    <Route className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No saved routes yet</p>
                    <p className="text-sm mt-1">Create routes in Trip Optimizer</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {journey.savedRoutes.map(route => (
                      <div
                        key={route.id}
                        className="bg-gray-700 rounded p-4"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold">{route.name}</h4>
                          <button
                            onClick={() => handleDeleteRoute(route.id)}
                            className="text-red-500 hover:text-red-400 text-sm"
                          >
                            Delete
                          </button>
                        </div>
                        <p className="text-sm text-gray-400">
                          {route.cities.length} cities • {formatDistance(route.totalDistance)} • ${route.estimatedCost.toFixed(0)}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Created {new Date(route.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

