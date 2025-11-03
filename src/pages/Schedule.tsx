import { useState, useMemo } from 'react';
import { matches } from '../data/matches';
import { Match } from '../data/types';
import { Calendar, MapPin, Clock, Filter, Users, Heart, List, Grid3x3, ChevronLeft, ChevronRight, Info, ChevronDown } from 'lucide-react';
import { cities } from '../data/cities';
import { toggleFavoriteMatch, isFavoriteMatch } from '../utils/journeyStorage';

type ViewMode = 'list' | 'calendar';

export default function Schedule() {
  const [viewMode, setViewMode] = useState<ViewMode>('calendar');
  const [filterStage, setFilterStage] = useState<string>('all');
  const [filterGroup, setFilterGroup] = useState<string>('all');
  const [filterCountry, setFilterCountry] = useState<string>('all');
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(5); // June (0-indexed)
  const [currentYear] = useState(2026);
  const [, forceUpdate] = useState({});
  const [showInfoDropdown, setShowInfoDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Get unique stages
  const stages = ['all', ...Array.from(new Set(matches.map(m => m.stage)))];
  const groups = ['all', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  // Filter matches
  const filteredMatches = useMemo(() => {
    return matches.filter(match => {
      if (filterStage !== 'all' && match.stage !== filterStage) return false;
      if (filterGroup !== 'all' && match.group !== filterGroup) return false;
      if (filterCountry !== 'all') {
        const city = cities.find(c => c.id === match.cityId);
        if (city && city.country !== filterCountry) return false;
      }
      if (favoritesOnly && !isFavoriteMatch(match.id)) return false;
      return true;
    });
  }, [filterStage, filterGroup, filterCountry, favoritesOnly]);

  const handleToggleFavorite = (matchId: string) => {
    toggleFavoriteMatch(matchId);
    forceUpdate({});
  };

  // Group matches by date
  const matchesByDate = useMemo(() => {
    const grouped: { [date: string]: Match[] } = {};
    filteredMatches.forEach(match => {
      if (!grouped[match.date]) {
        grouped[match.date] = [];
      }
      grouped[match.date].push(match);
    });
    // Sort matches within each date by time
    Object.keys(grouped).forEach(date => {
      grouped[date].sort((a, b) => a.time.localeCompare(b.time));
    });
    return grouped;
  }, [filteredMatches]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Final': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Semi-final': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Quarter-final': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Round of 16': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Round of 32': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'Third Place': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      default: return 'bg-green-500/20 text-green-400 border-green-500/30';
    }
  };

  // Calendar view helpers
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = useMemo(() => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days: (number | null)[] = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  }, [currentMonth, currentYear]);

  const getMatchesForDate = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return filteredMatches.filter(match => match.date === dateStr);
  };

  const hasMatchesInMonth = (month: number) => {
    return filteredMatches.some(match => {
      const matchDate = new Date(match.date);
      return matchDate.getMonth() === month && matchDate.getFullYear() === currentYear;
    });
  };

  const nextMonth = () => {
    if (currentMonth < 6) setCurrentMonth(currentMonth + 1);
  };

  const prevMonth = () => {
    if (currentMonth > 5) setCurrentMonth(currentMonth - 1);
  };

  const handleDateClick = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayMatches = getMatchesForDate(day);
    if (dayMatches.length > 0) {
      setSelectedDate(selectedDate === dateStr ? null : dateStr);
    }
  };

  const getSelectedDateMatches = () => {
    if (!selectedDate) return [];
    return filteredMatches.filter(match => match.date === selectedDate);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white py-4 sm:py-8 px-3 sm:px-4">
      <div className="max-w-full mx-auto px-4">
        {/* Header */}
        <div className="mb-4 sm:mb-8">
          <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
            <div className="flex items-center gap-2 sm:gap-3">
              <Calendar className="w-7 h-7 sm:w-10 sm:h-10 text-fifa-gold" />
              <h1 className="text-2xl sm:text-4xl font-bold">Match Schedule</h1>
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center gap-1 bg-gray-900 rounded-lg p-1 border border-gray-800">
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all touch-manipulation ${
                  viewMode === 'list'
                    ? 'bg-fifa-blue text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
                <span className="hidden sm:inline">List</span>
              </button>
              <button
                onClick={() => setViewMode('calendar')}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all touch-manipulation ${
                  viewMode === 'calendar'
                    ? 'bg-fifa-blue text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
                aria-label="Calendar view"
              >
                <Grid3x3 className="w-4 h-4" />
                <span className="hidden sm:inline">Calendar</span>
              </button>
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-400">FIFA World Cup 2026 - Complete Schedule</p>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {filteredMatches.length} matches • June 11 - July 19, 2026
          </p>
        </div>

        {/* Important Info Dropdown */}
        <div className="mb-4 sm:mb-8">
          <button
            onClick={() => setShowInfoDropdown(!showInfoDropdown)}
            className="w-full bg-blue-900/30 border border-blue-500/50 rounded-lg p-4 sm:p-5 flex items-center justify-between hover:bg-blue-900/40 transition-colors touch-manipulation"
          >
            <div className="flex items-center gap-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Info className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <h3 className="text-base sm:text-lg font-semibold text-white">Important Information</h3>
                <p className="text-xs sm:text-sm text-gray-400">When will we know the teams?</p>
              </div>
            </div>
            <ChevronDown className={`w-5 h-5 text-blue-400 transition-transform ${showInfoDropdown ? 'rotate-180' : ''}`} />
          </button>
          
          {showInfoDropdown && (
            <div className="mt-2 bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-fifa-gold rounded-full"></span>
                  Team Qualifications
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  The 2026 FIFA World Cup will feature 48 teams. Qualification matches are currently ongoing across all confederations. 
                  Most teams marked as "TBD" (To Be Determined) will be confirmed by <strong className="text-fifa-gold">November 2025</strong>.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-fifa-gold rounded-full"></span>
                  Confirmed Host Teams
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  As host nations, <strong className="text-white">United States, Mexico, and Canada</strong> have automatic qualification. 
                  Other teams shown (England, Brazil, Argentina, etc.) are projected based on FIFA rankings but are NOT yet confirmed.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-fifa-gold rounded-full"></span>
                  Final Draw
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  The official group stage draw will take place in <strong className="text-fifa-gold">late 2025</strong>, 
                  where all qualified teams will be placed into their respective groups. Match schedules and exact timings may be subject to change.
                </p>
              </div>
              
              <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-amber-200 flex items-start gap-2">
                  <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Note:</strong> Team matchups in knockout stages (Round of 32, Round of 16, etc.) 
                    are determined by group stage results and will only be known after group matches conclude.
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="bg-gray-900 rounded-lg p-3 sm:p-6 mb-4 sm:mb-8 border border-gray-800">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-fifa-gold" />
            <h2 className="text-base sm:text-lg font-semibold">Filters</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {/* Stage Filter */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                Tournament Stage
              </label>
              <select
                value={filterStage}
                onChange={(e) => setFilterStage(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-fifa-blue"
              >
                {stages.map(stage => (
                  <option key={stage} value={stage}>
                    {stage === 'all' ? 'All Stages' : stage}
                  </option>
                ))}
              </select>
            </div>

            {/* Group Filter */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                Group
              </label>
              <select
                value={filterGroup}
                onChange={(e) => setFilterGroup(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-fifa-blue disabled:opacity-50"
                disabled={filterStage !== 'all' && filterStage !== 'Group'}
              >
                {groups.map(group => (
                  <option key={group} value={group}>
                    {group === 'all' ? 'All Groups' : `Group ${group}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Country Filter */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                Country
              </label>
              <select
                value={filterCountry}
                onChange={(e) => setFilterCountry(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-fifa-blue"
              >
                <option value="all">All Countries</option>
                <option value="USA">USA</option>
                <option value="Mexico">Mexico</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          {/* Favorites Filter */}
          <div className="flex items-center gap-2 mt-3 sm:mt-4">
            <button
              onClick={() => setFavoritesOnly(!favoritesOnly)}
              className={`px-3 sm:px-4 py-2 text-sm rounded flex items-center gap-2 transition-colors touch-manipulation ${
                favoritesOnly
                  ? 'bg-fifa-gold text-gray-900 font-semibold'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${favoritesOnly ? 'fill-current' : ''}`} />
              <span className="text-xs sm:text-sm">Favorites Only</span>
            </button>
          </div>

          {(filterStage !== 'all' || filterGroup !== 'all' || filterCountry !== 'all' || favoritesOnly) && (
            <button
              onClick={() => {
                setFilterStage('all');
                setFilterGroup('all');
                setFilterCountry('all');
                setFavoritesOnly(false);
              }}
              className="mt-3 sm:mt-4 text-xs sm:text-sm text-fifa-blue hover:text-fifa-gold transition-colors touch-manipulation"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Calendar View */}
        {viewMode === 'calendar' && (
          <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
            {/* Calendar Header */}
            <div className="bg-gradient-to-r from-fifa-blue to-fifa-gold/80 px-3 sm:px-6 py-3 sm:py-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={prevMonth}
                  disabled={currentMonth === 5}
                  className="p-2 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                
                <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
                  {monthNames[currentMonth]} {currentYear}
                </h2>
                
                <button
                  onClick={nextMonth}
                  disabled={currentMonth === 6}
                  className="p-2 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Next month"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              
              {!hasMatchesInMonth(currentMonth) && (
                <p className="text-center text-white/70 text-sm mt-2">
                  No matches in this month
                </p>
              )}
            </div>

            {/* Calendar Grid */}
            <div className="p-2 sm:p-4">
              {/* Day Names */}
              <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-1 sm:mb-2">
                {dayNames.map(day => (
                  <div
                    key={day}
                    className="text-center text-xs sm:text-sm font-semibold text-gray-400 py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1 sm:gap-2">
                {generateCalendarDays.map((day, index) => {
                  if (day === null) {
                    return <div key={`empty-${index}`} className="aspect-square" />;
                  }

                  const dayMatches = getMatchesForDate(day);
                  const hasMatches = dayMatches.length > 0;
                  const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                  const isSelected = selectedDate === dateStr;
                  const today = new Date();
                  const isToday = 
                    today.getDate() === day &&
                    today.getMonth() === currentMonth &&
                    today.getFullYear() === currentYear;

                  return (
                    <button
                      key={day}
                      onClick={() => handleDateClick(day)}
                      disabled={!hasMatches}
                      className={`
                        aspect-square rounded-lg border transition-all touch-manipulation
                        ${hasMatches 
                          ? 'bg-fifa-blue/20 border-fifa-blue/50 hover:bg-fifa-blue/30 active:bg-fifa-blue/40 cursor-pointer' 
                          : 'bg-gray-800/30 border-gray-800 cursor-default'
                        }
                        ${isToday ? 'ring-2 ring-fifa-gold' : ''}
                        ${isSelected ? 'ring-2 ring-fifa-gold bg-fifa-blue/40 shadow-lg' : ''}
                      `}
                    >
                      <div className="h-full flex flex-col p-1 sm:p-2">
                        <div className={`text-xs sm:text-sm font-bold mb-1 ${
                          hasMatches ? 'text-fifa-gold' : 'text-gray-500'
                        }`}>
                          {day}
                        </div>
                        
                        {hasMatches && (
                          <div className="flex-1 flex flex-col gap-0.5 overflow-hidden">
                            <div className="text-[9px] sm:text-[11px] text-center text-fifa-gold font-semibold bg-gray-800/50 rounded px-1">
                              {dayMatches.length} {dayMatches.length === 1 ? 'match' : 'matches'}
                            </div>
                            {dayMatches.slice(0, 2).map((match) => (
                              <div
                                key={match.id}
                                className="bg-gray-800/80 rounded px-1 py-0.5 text-[8px] sm:text-[10px] leading-tight truncate"
                                title={`${match.homeTeam} vs ${match.awayTeam} - ${match.time}`}
                              >
                                <div className="font-semibold text-white truncate">
                                  {match.time}
                                </div>
                              </div>
                            ))}
                            {dayMatches.length > 2 && (
                              <div className="text-[8px] sm:text-[10px] text-fifa-gold/70 text-center">
                                +{dayMatches.length - 2} more
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="px-3 sm:px-6 py-3 sm:py-4 bg-gray-800/50 border-t border-gray-800">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border-2 border-fifa-gold bg-gray-800"></div>
                  <span className="text-gray-400">Today</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-fifa-blue/20 border border-fifa-blue/50"></div>
                  <span className="text-gray-400">Has matches</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded ring-2 ring-fifa-gold bg-fifa-blue/40"></div>
                  <span className="text-gray-400">Selected</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                <Info className="w-3 h-3 inline mr-1" />
                Click on a date to view match details
              </p>
            </div>
          </div>
        )}

        {/* Selected Date Match Details - Only in Calendar View */}
        {viewMode === 'calendar' && selectedDate && getSelectedDateMatches().length > 0 && (
          <div className="mt-4 sm:mt-8 bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
            {/* Date Header */}
            <div className="bg-gradient-to-r from-fifa-blue to-fifa-gold/80 px-3 sm:px-6 py-3 sm:py-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <h2 className="text-base sm:text-xl font-bold text-white truncate">{formatDate(selectedDate)}</h2>
                </div>
                <button
                  onClick={() => setSelectedDate(null)}
                  className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded text-xs sm:text-sm font-semibold whitespace-nowrap touch-manipulation"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Matches for selected date */}
            <div className="divide-y divide-gray-800">
              {getSelectedDateMatches().map(match => {
                const city = cities.find(c => c.id === match.cityId);
                return (
                  <div
                    key={match.id}
                    className="p-3 sm:p-6 hover:bg-gray-800/50 transition-colors relative"
                  >
                    {/* Favorite Button */}
                    <button
                      onClick={() => handleToggleFavorite(match.id)}
                      className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 rounded-lg hover:bg-gray-700 active:bg-gray-700 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center z-10"
                      title={isFavoriteMatch(match.id) ? 'Remove from favorites' : 'Add to favorites'}
                      aria-label={isFavoriteMatch(match.id) ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          isFavoriteMatch(match.id)
                            ? 'fill-red-500 text-red-500'
                            : 'text-gray-500'
                        }`}
                      />
                    </button>

                    {/* Mobile-optimized layout */}
                    <div className="flex flex-col gap-3 pr-12 sm:pr-14">
                      {/* Top Row: Match Number, Time, Stage */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="bg-gray-800 rounded-lg px-3 py-1.5 text-center flex items-center gap-2">
                          <div className="text-[10px] text-gray-400 uppercase tracking-wide">Match</div>
                          <div className="text-base sm:text-lg font-bold text-fifa-gold">#{match.matchNumber}</div>
                        </div>
                        <div className="flex items-center gap-1.5 bg-gray-800/50 rounded-lg px-3 py-1.5">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm sm:text-base font-semibold text-white">{match.time}</span>
                        </div>
                        <span className={`inline-flex px-3 py-1 rounded-lg text-xs font-bold border ${getStageColor(match.stage)} whitespace-nowrap`}>
                          {match.stage}{match.group ? ` ${match.group}` : ''}
                        </span>
                      </div>

                      {/* Teams - Improved mobile layout */}
                      <div className="bg-gray-800/30 rounded-xl p-3 sm:p-4">
                        <div className="flex flex-col gap-2">
                          {/* Home Team */}
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-fifa-blue-500/20 flex items-center justify-center flex-shrink-0">
                              <Users className="w-4 h-4 text-fifa-blue-400" />
                            </div>
                            <span className="text-base sm:text-lg font-bold text-white flex-1">
                              {match.homeTeam}
                            </span>
                          </div>
                          
                          {/* VS Divider */}
                          <div className="flex items-center gap-2">
                            <div className="h-px bg-gray-700 flex-1"></div>
                            <span className="bg-gray-800 rounded-full px-3 py-1 font-bold text-xs text-fifa-gold">
                              VS
                            </span>
                            <div className="h-px bg-gray-700 flex-1"></div>
                          </div>
                          
                          {/* Away Team */}
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-fifa-blue-500/20 flex items-center justify-center flex-shrink-0">
                              <Users className="w-4 h-4 text-fifa-blue-400" />
                            </div>
                            <span className="text-base sm:text-lg font-bold text-white flex-1">
                              {match.awayTeam}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Location - More prominent on mobile */}
                      {city && (
                        <div className="flex items-center gap-2 bg-gray-800/30 rounded-lg p-3">
                          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-4 h-4 text-purple-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-sm text-white">{city.name}, {city.country}</div>
                            <div className="text-xs text-gray-400 truncate">{city.stadium}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-4 sm:space-y-8">
            {Object.keys(matchesByDate).sort().map(date => (
              <div key={date} className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                {/* Date Header */}
                <div className="bg-gradient-to-r from-fifa-blue to-fifa-gold/80 px-3 sm:px-6 py-3 sm:py-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    <h2 className="text-base sm:text-xl font-bold text-white truncate">{formatDate(date)}</h2>
                    <span className="ml-auto bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                      {matchesByDate[date].length} {matchesByDate[date].length === 1 ? 'match' : 'matches'}
                    </span>
                  </div>
                </div>

                {/* Matches for this date */}
                <div className="divide-y divide-gray-800">
                  {matchesByDate[date].map(match => {
                    const city = cities.find(c => c.id === match.cityId);
                    return (
                      <div
                        key={match.id}
                        className="p-3 sm:p-6 hover:bg-gray-800/50 transition-colors relative"
                      >
                        {/* Favorite Button */}
                        <button
                          onClick={() => handleToggleFavorite(match.id)}
                          className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 rounded-lg hover:bg-gray-700 active:bg-gray-700 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center z-10"
                          title={isFavoriteMatch(match.id) ? 'Remove from favorites' : 'Add to favorites'}
                          aria-label={isFavoriteMatch(match.id) ? 'Remove from favorites' : 'Add to favorites'}
                        >
                          <Heart
                            className={`w-5 h-5 ${
                              isFavoriteMatch(match.id)
                                ? 'fill-red-500 text-red-500'
                                : 'text-gray-500'
                            }`}
                          />
                        </button>

                        {/* Mobile-optimized layout */}
                        <div className="flex flex-col gap-3 pr-12 sm:pr-14">
                          {/* Top Row: Match Number, Time, Stage */}
                          <div className="flex items-center gap-2 flex-wrap">
                            <div className="bg-gray-800 rounded-lg px-3 py-1.5 text-center flex items-center gap-2">
                              <div className="text-[10px] text-gray-400 uppercase tracking-wide">Match</div>
                              <div className="text-base sm:text-lg font-bold text-fifa-gold">#{match.matchNumber}</div>
                            </div>
                            <div className="flex items-center gap-1.5 bg-gray-800/50 rounded-lg px-3 py-1.5">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-sm sm:text-base font-semibold text-white">{match.time}</span>
                            </div>
                            <span className={`inline-flex px-3 py-1 rounded-lg text-xs font-bold border ${getStageColor(match.stage)} whitespace-nowrap`}>
                              {match.stage}{match.group ? ` ${match.group}` : ''}
                            </span>
                          </div>

                          {/* Teams - Improved mobile layout */}
                          <div className="bg-gray-800/30 rounded-xl p-3 sm:p-4">
                            <div className="flex flex-col gap-2">
                              {/* Home Team */}
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-fifa-blue-500/20 flex items-center justify-center flex-shrink-0">
                                  <Users className="w-4 h-4 text-fifa-blue-400" />
                                </div>
                                <span className="text-base sm:text-lg font-bold text-white flex-1">
                                  {match.homeTeam}
                                </span>
                              </div>
                              
                              {/* VS Divider */}
                              <div className="flex items-center gap-2">
                                <div className="h-px bg-gray-700 flex-1"></div>
                                <span className="bg-gray-800 rounded-full px-3 py-1 font-bold text-xs text-fifa-gold">
                                  VS
                                </span>
                                <div className="h-px bg-gray-700 flex-1"></div>
                              </div>
                              
                              {/* Away Team */}
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-fifa-blue-500/20 flex items-center justify-center flex-shrink-0">
                                  <Users className="w-4 h-4 text-fifa-blue-400" />
                                </div>
                                <span className="text-base sm:text-lg font-bold text-white flex-1">
                                  {match.awayTeam}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Location - More prominent on mobile */}
                          {city && (
                            <div className="flex items-center gap-2 bg-gray-800/30 rounded-lg p-3">
                              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-4 h-4 text-purple-400" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-bold text-sm text-white">{city.name}, {city.country}</div>
                                <div className="text-xs text-gray-400 truncate">{city.stadium}</div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No results */}
        {filteredMatches.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <Calendar className="w-12 h-12 sm:w-16 sm:h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-400 mb-2">No matches found</h3>
            <p className="text-sm sm:text-base text-gray-500">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}

