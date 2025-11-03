import { useState, useEffect, useRef } from 'react';
import { Trophy, MapPin, Calendar, Users, ChevronRight, Search, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/appStore';
import { matches } from '../data/matches';
import { cities } from '../data/cities';

// List of qualified teams (major teams from the data)
const teams = [
  { name: 'Mexico', group: 'A' },
  { name: 'USA', group: 'A' },
  { name: 'Canada', group: 'A' },
  { name: 'Jamaica', group: 'A' },
  
  { name: 'England', group: 'B' },
  { name: 'Netherlands', group: 'B' },
  { name: 'Wales', group: 'B' },
  { name: 'Scotland', group: 'B' },
  
  { name: 'Argentina', group: 'C' },
  { name: 'Uruguay', group: 'C' },
  { name: 'Colombia', group: 'C' },
  { name: 'Chile', group: 'C' },
  
  { name: 'France', group: 'D' },
  { name: 'Italy', group: 'D' },
  { name: 'Denmark', group: 'D' },
  { name: 'Sweden', group: 'D' },
  
  { name: 'Brazil', group: 'E' },
  { name: 'Belgium', group: 'E' },
  { name: 'Switzerland', group: 'E' },
  { name: 'Austria', group: 'E' },
  
  { name: 'Spain', group: 'F' },
  { name: 'Croatia', group: 'F' },
  { name: 'Poland', group: 'F' },
  { name: 'Czech Republic', group: 'F' },
  
  { name: 'Germany', group: 'G' },
  { name: 'Japan', group: 'G' },
  { name: 'South Korea', group: 'G' },
  { name: 'Australia', group: 'G' },
  
  { name: 'Portugal', group: 'H' },
  { name: 'Morocco', group: 'H' },
  { name: 'Serbia', group: 'H' },
  { name: 'Nigeria', group: 'H' },
].sort((a, b) => a.name.localeCompare(b.name));

interface KnockoutStage {
  stage: string;
  matchId: string;
  city: string;
  stadium: string;
  date: string;
  opponent: string;
  result: 'win' | 'pending';
}

type GroupPosition = '1st' | '2nd' | '3rd';
type GroupWinners = {
  [key: string]: { first: string; second: string; third: string };
};

export default function FollowTeam() {
  const navigate = useNavigate();
  const { setViewMode } = useAppStore();
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [groupPosition, setGroupPosition] = useState<GroupPosition>('1st');
  const [knockoutPath, setKnockoutPath] = useState<KnockoutStage[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Store winners for each group
  const [groupWinners] = useState<GroupWinners>({
    A: { first: '', second: '', third: '' },
    B: { first: '', second: '', third: '' },
    C: { first: '', second: '', third: '' },
    D: { first: '', second: '', third: '' },
    E: { first: '', second: '', third: '' },
    F: { first: '', second: '', third: '' },
    G: { first: '', second: '', third: '' },
    H: { first: '', second: '', third: '' },
  });

  // Get team's group
  const teamGroup = teams.find(t => t.name === selectedTeam)?.group || 'A';

  // Calculate knockout path based on group position and other group winners
  const calculatePath = () => {
    if (!selectedTeam) return;

    const path: KnockoutStage[] = [];

    // Set selected team as winner in their group
    const updatedGroupWinners = { ...groupWinners };
    const posKey = groupPosition === '1st' ? 'first' : groupPosition === '2nd' ? 'second' : 'third';
    updatedGroupWinners[teamGroup] = {
      ...updatedGroupWinners[teamGroup],
      [posKey]: selectedTeam
    };

    // Determine Round of 32 opponent based on group position
    let r32MatchId = '';
    let r32Opponent = '';
    
    if (groupPosition === '1st') {
      // 1st place plays 2nd from another group - using World Cup bracket logic
      const opponentGroupMap: { [key: string]: string } = {
        'A': 'B', 'B': 'A', 'C': 'D', 'D': 'C',
        'E': 'F', 'F': 'E', 'G': 'H', 'H': 'G'
      };
      const opponentGroup = opponentGroupMap[teamGroup];
      r32MatchId = `m${49 + 'ABCDEFGH'.indexOf(teamGroup)}`;
      r32Opponent = updatedGroupWinners[opponentGroup]?.second || `2nd place from Group ${opponentGroup}`;
    } else if (groupPosition === '2nd') {
      // 2nd place plays 1st from another group
      const opponentGroupMap: { [key: string]: string } = {
        'A': 'B', 'B': 'A', 'C': 'D', 'D': 'C',
        'E': 'F', 'F': 'E', 'G': 'H', 'H': 'G'
      };
      const opponentGroup = opponentGroupMap[teamGroup];
      r32MatchId = `m${53 + 'ABCDEFGH'.indexOf(teamGroup) % 4}`;
      r32Opponent = updatedGroupWinners[opponentGroup]?.first || `1st place from Group ${opponentGroup}`;
    } else {
      // 3rd place has complex matchups
      r32MatchId = 'm57';
      r32Opponent = updatedGroupWinners['D']?.third || '3rd place team from Group D';
    }

    // Round of 32
    const r32Match = matches.find(m => m.id === r32MatchId);
    if (r32Match) {
      const city = cities.find(c => c.id === r32Match.cityId);
      path.push({
        stage: 'Round of 32',
        matchId: r32Match.id,
        city: city?.name || 'TBD',
        stadium: city?.stadium || 'TBD',
        date: r32Match.date,
        opponent: r32Opponent,
        result: 'win',
      });
    }

    // For subsequent rounds, we need to trace through the bracket
    // Round of 16 - get opponent from adjacent R32 match
    
    const r16Match = matches.find(m => m.stage === 'Round of 16' && 
      (m.homeTeam === 'W' + r32Match?.matchNumber || m.awayTeam === 'W' + r32Match?.matchNumber));
    
    if (r16Match) {
      const city = cities.find(c => c.id === r16Match.cityId);
      path.push({
        stage: 'Round of 16',
        matchId: r16Match.id,
        city: city?.name || 'TBD',
        stadium: city?.stadium || 'TBD',
        date: r16Match.date,
        opponent: 'Winner of adjacent R32 bracket',
        result: 'win',
      });
    }

    // Quarter-final
    const qfMatch = matches.find(m => m.stage === 'Quarter-final' && m.matchNumber === 73);
    if (qfMatch) {
      const city = cities.find(c => c.id === qfMatch.cityId);
      path.push({
        stage: 'Quarter-final',
        matchId: qfMatch.id,
        city: city?.name || 'TBD',
        stadium: city?.stadium || 'TBD',
        date: qfMatch.date,
        opponent: 'Winner from another QF',
        result: 'win',
      });
    }

    // Semi-final
    const sfMatch = matches.find(m => m.stage === 'Semi-final' && m.matchNumber === 77);
    if (sfMatch) {
      const city = cities.find(c => c.id === sfMatch.cityId);
      path.push({
        stage: 'Semi-final',
        matchId: sfMatch.id,
        city: city?.name || 'TBD',
        stadium: city?.stadium || 'TBD',
        date: sfMatch.date,
        opponent: 'Winner from opposite SF',
        result: 'win',
      });
    }

    // Final
    const finalMatch = matches.find(m => m.stage === 'Final');
    if (finalMatch) {
      const city = cities.find(c => c.id === finalMatch.cityId);
      path.push({
        stage: 'Final',
        matchId: finalMatch.id,
        city: city?.name || 'TBD',
        stadium: city?.stadium || 'TBD',
        date: finalMatch.date,
        opponent: 'Winner from other SF',
        result: 'pending',
      });
    }

    setKnockoutPath(path);
  };

  // Auto-calculate when team, position, or group winners change
  useEffect(() => {
    if (selectedTeam) {
      calculatePath();
    }
  }, [selectedTeam, groupPosition, groupWinners]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Get group stage matches for selected team
  const getGroupMatches = () => {
    if (!selectedTeam) return [];
    return matches.filter(m => 
      m.stage === 'Group' && 
      m.group === teamGroup &&
      (m.homeTeam === selectedTeam || m.awayTeam === selectedTeam || m.homeTeam === 'TBD' || m.awayTeam === 'TBD')
    ).slice(0, 3); // Each team plays 3 group stage matches
  };

  const groupMatches = getGroupMatches();

  // Filter teams based on search query
  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle team selection
  const handleSelectTeam = (teamName: string) => {
    setSelectedTeam(teamName);
    setSearchQuery('');
    setShowDropdown(false);
  };

  const goToRoadToFinal = () => {
    setViewMode('road-to-final');
    navigate('/app');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <Trophy className="w-7 h-7 sm:w-10 sm:h-10 text-fifa-gold" />
            <h1 className="text-2xl sm:text-4xl font-bold">Follow My Team</h1>
          </div>
          <p className="text-sm sm:text-lg text-gray-400">
            Choose your team and see their complete World Cup journey from Group Stage to Final
          </p>
        </div>

        {/* Road to Final Callout */}
        <div className="mb-4 sm:mb-6 glass-dark p-4 sm:p-6 rounded-xl border border-fifa-gold-700/50 bg-gradient-to-r from-fifa-gold-900/10 to-transparent">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-fifa-gold-400" />
                <h3 className="text-base sm:text-xl font-bold text-white">Want to Predict the Entire Tournament?</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300">
                Try our <strong>Road to Final</strong> bracket predictor! Pick group winners, simulate knockout rounds, and crown your champion.
              </p>
            </div>
            <button
              onClick={goToRoadToFinal}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-fifa-gold-500 to-orange-600 hover:from-fifa-gold-600 hover:to-orange-700 rounded-lg text-white font-semibold transition-all shadow-lg hover:shadow-xl whitespace-nowrap text-sm sm:text-base"
            >
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Road to Final</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Team Selection at Top */}
        <div className="bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-800 mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-fifa-blue" />
            Select Your Team
          </h2>
          
          {/* Search Input with Autocomplete */}
          <div className="relative" ref={dropdownRef}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={selectedTeam || searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowDropdown(true);
                  if (selectedTeam) setSelectedTeam(null);
                }}
                onFocus={() => setShowDropdown(true)}
                placeholder="Search for your team..."
                className="w-full pl-11 pr-11 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fifa-blue focus:border-transparent"
              />
              {(selectedTeam || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedTeam(null);
                    setSearchQuery('');
                    setShowDropdown(false);
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            
            {/* Dropdown with filtered teams */}
            {showDropdown && !selectedTeam && filteredTeams.length > 0 && (
              <div className="absolute z-10 w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl max-h-64 overflow-y-auto">
                {filteredTeams.map((team) => (
                  <button
                    key={team.name}
                    onClick={() => handleSelectTeam(team.name)}
                    className="w-full px-4 py-3 text-left hover:bg-gray-700 transition-colors flex items-center justify-between group"
                  >
                    <span className="font-semibold text-white group-hover:text-fifa-blue">
                      {team.name}
                    </span>
                    <span className="text-xs text-gray-400 bg-gray-900 px-2 py-1 rounded">
                      Group {team.group}
                    </span>
                  </button>
                ))}
              </div>
            )}
            
            {/* No results message */}
            {showDropdown && !selectedTeam && searchQuery && filteredTeams.length === 0 && (
              <div className="absolute z-10 w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-4 text-center text-gray-400">
                No teams found matching "{searchQuery}"
              </div>
            )}
          </div>

          {selectedTeam && (
            <div className="mt-4 pt-4 border-t border-gray-800">
              <h3 className="text-sm sm:text-base font-semibold mb-2">Group Stage Position</h3>
              <div className="flex gap-2">
                {(['1st', '2nd', '3rd'] as const).map((position) => (
                  <button
                    key={position}
                    onClick={() => setGroupPosition(position)}
                    className={`flex-1 px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors touch-manipulation ${
                      groupPosition === position
                        ? 'bg-fifa-gold text-gray-900 font-semibold'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 active:bg-gray-600'
                    }`}
                  >
                    {position} Place
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Team Journey Display */}
        {selectedTeam ? (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-r from-fifa-blue to-fifa-gold p-4 sm:p-6 rounded-xl">
              <h2 className="text-lg sm:text-2xl font-bold mb-2">
                {selectedTeam}'s Path to Glory
              </h2>
              <p className="text-sm sm:text-base text-gray-100">
                Starting in Group {teamGroup} • Targeting {groupPosition} place finish
              </p>
            </div>

            {/* Group Stage Matches */}
            <div className="bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-800">
              <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-fifa-blue-400 to-fifa-blue-600 rounded"></div>
                Group Stage - Group {teamGroup}
              </h3>
              
              <div className="space-y-3">
                {groupMatches.map((match, index) => {
                  const matchCity = cities.find(c => c.id === match.cityId);
                  return (
                    <div key={match.id} className="bg-gray-800 rounded-lg p-3 sm:p-4 hover:bg-gray-750 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-fifa-blue/20 text-fifa-blue-400 px-2 py-1 rounded-full font-semibold">
                            Matchday {index + 1}
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="text-xs sm:text-sm font-semibold text-white">
                            {formatDate(match.date)}
                          </p>
                          <p className="text-xs text-fifa-blue-400">{match.time}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-sm sm:text-base font-semibold ${
                          match.homeTeam === selectedTeam ? 'text-fifa-gold' : 'text-white'
                        }`}>
                          {match.homeTeam}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-400 px-2">vs</span>
                        <span className={`text-sm sm:text-base font-semibold ${
                          match.awayTeam === selectedTeam ? 'text-fifa-gold' : 'text-white'
                        }`}>
                          {match.awayTeam}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{matchCity?.name} - {matchCity?.stadium}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Knockout Stage */}
            {knockoutPath.length > 0 ? (
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 px-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-fifa-gold-400 to-fifa-gold-600 rounded"></div>
                  Knockout Stage
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {knockoutPath.map((stage, index) => (
                    <div
                      key={stage.matchId}
                      className="bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-800 hover:border-fifa-blue transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Trophy className={`w-4 h-4 sm:w-5 sm:h-5 ${
                              stage.stage === 'Final' ? 'text-fifa-gold' : 'text-fifa-blue'
                            }`} />
                            <h3 className="text-base sm:text-xl font-bold">{stage.stage}</h3>
                            {stage.result === 'win' && index < knockoutPath.length - 1 && (
                              <span className="ml-2 px-1.5 sm:px-2 py-0.5 bg-green-600 text-[10px] sm:text-xs rounded-full">
                                WIN
                              </span>
                            )}
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-gray-400 mt-2">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span className="truncate">{formatDate(stage.date)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span className="truncate">{stage.city}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-800 rounded-lg">
                          <span className="text-xs sm:text-base font-semibold text-fifa-gold truncate">{selectedTeam}</span>
                          <span className="text-xs sm:text-sm text-gray-400 px-2">vs</span>
                          <span className={`text-xs sm:text-base truncate ${stage.opponent.includes('place') || stage.opponent.includes('Winner') ? 'text-gray-500 italic' : 'text-white font-semibold'}`}>
                            {stage.opponent}
                          </span>
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500">
                          <span className="font-medium">Venue:</span> <span className="truncate">{stage.stadium}</span>
                        </div>
                      </div>

                      {index < knockoutPath.length - 1 && (
                        <div className="mt-3 sm:mt-4 flex justify-center">
                          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-fifa-gold rotate-90" />
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Summary */}
                  <div className="bg-gradient-to-br from-fifa-gold via-fifa-blue to-purple-600 p-4 sm:p-6 rounded-xl">
                    <h3 className="text-lg sm:text-2xl font-bold mb-3 flex items-center gap-2">
                      <Trophy className="w-5 h-5 sm:w-7 sm:h-7" />
                      Journey Summary
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 text-center">
                      <div className="bg-white/10 backdrop-blur rounded-lg p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold">{groupMatches.length + knockoutPath.length}</div>
                        <div className="text-xs sm:text-sm opacity-90">Total Matches</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur rounded-lg p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold">{knockoutPath.length}</div>
                        <div className="text-xs sm:text-sm opacity-90">Knockout Wins</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur rounded-lg p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold">
                          {new Set([...groupMatches.map(m => cities.find(c => c.id === m.cityId)?.name), ...knockoutPath.map(s => s.city)]).size}
                        </div>
                        <div className="text-xs sm:text-sm opacity-90">Cities Visited</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur rounded-lg p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold">
                          {(() => {
                            const firstDate = new Date(groupMatches[0]?.date);
                            const lastDate = new Date(knockoutPath[knockoutPath.length - 1]?.date);
                            return Math.ceil((lastDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24));
                          })()}
                        </div>
                        <div className="text-xs sm:text-sm opacity-90">Days of Journey</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="bg-gray-900 rounded-xl p-8 sm:p-12 text-center border border-gray-800">
            <Trophy className="w-16 h-16 sm:w-20 sm:h-20 text-gray-700 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-600 mb-2">
              Choose Your Team
            </h3>
            <p className="text-sm sm:text-base text-gray-500">
              Select a team from above to begin tracking their complete World Cup journey
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
