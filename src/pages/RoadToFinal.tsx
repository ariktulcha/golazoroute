import { useState, useEffect } from 'react';
import { Trophy, ChevronRight, RotateCcw, Info, Calendar, HelpCircle, AlertCircle, Users, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/appStore';
import SEO from '../components/SEO';

interface BracketTeam {
  name: string;
  seed?: string;
  rank?: number;
}

interface BracketMatch {
  id: string;
  team1: BracketTeam | null;
  team2: BracketTeam | null;
  winner: BracketTeam | null;
}

const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

// Teams with FIFA ranking estimation (based on typical rankings)
const teams = [
  'Argentina', 'Brazil', 'France', 'England', 'Spain', 'Germany', 'Portugal', 'Netherlands',
  'Belgium', 'Italy', 'Uruguay', 'Croatia', 'Denmark', 'Switzerland', 'Mexico', 'USA',
  'Canada', 'Senegal', 'Morocco', 'Japan', 'South Korea', 'Australia', 'Colombia', 'Chile',
  'Ecuador', 'Peru', 'Costa Rica', 'Saudi Arabia', 'Iran', 'Tunisia', 'Cameroon', 'Nigeria',
  'Ghana', 'Egypt', 'Algeria', 'Poland', 'Ukraine', 'Sweden', 'Norway', 'Austria',
  'Czech Republic', 'Serbia', 'Turkey', 'Wales', 'Scotland', 'Panama', 'Jamaica', 'Qatar'
];

// Realistic team strength rankings (1 = strongest)
const teamRankings: Record<string, number> = {
  'Argentina': 1, 'France': 2, 'Brazil': 3, 'England': 4, 'Spain': 5,
  'Germany': 6, 'Portugal': 7, 'Netherlands': 8, 'Belgium': 9, 'Italy': 10,
  'Croatia': 11, 'Uruguay': 12, 'USA': 13, 'Mexico': 14, 'Colombia': 15,
  'Denmark': 16, 'Switzerland': 17, 'Senegal': 18, 'Morocco': 19, 'Japan': 20,
  'Australia': 21, 'South Korea': 22, 'Poland': 23, 'Ukraine': 24, 'Sweden': 25,
  'Austria': 26, 'Turkey': 27, 'Serbia': 28, 'Ecuador': 29, 'Chile': 30,
  'Peru': 31, 'Norway': 32, 'Czech Republic': 33, 'Nigeria': 34, 'Ghana': 35,
  'Egypt': 36, 'Algeria': 37, 'Cameroon': 38, 'Tunisia': 39, 'Canada': 40,
  'Wales': 41, 'Scotland': 42, 'Iran': 43, 'Costa Rica': 44, 'Panama': 45,
  'Jamaica': 46, 'Saudi Arabia': 47, 'Qatar': 48
};

// Intelligent group predictions based on typical World Cup scenarios
const defaultGroupPredictions: Record<string, { first: string; second: string; third: string }> = {
  A: { first: 'Mexico', second: 'USA', third: 'Canada' }, // North America hosts
  B: { first: 'England', second: 'Netherlands', third: 'Wales' },
  C: { first: 'Argentina', second: 'Uruguay', third: 'Colombia' },
  D: { first: 'France', second: 'Denmark', third: 'Serbia' },
  E: { first: 'Brazil', second: 'Belgium', third: 'Switzerland' },
  F: { first: 'Spain', second: 'Croatia', third: 'Poland' },
  G: { first: 'Germany', second: 'Japan', third: 'South Korea' },
  H: { first: 'Portugal', second: 'Morocco', third: 'Nigeria' },
  I: { first: 'Italy', second: 'Turkey', third: 'Austria' },
  J: { first: 'Senegal', second: 'Ecuador', third: 'Ghana' },
  K: { first: 'Australia', second: 'Peru', third: 'Sweden' },
  L: { first: 'Ukraine', second: 'Egypt', third: 'Norway' }
};

export default function RoadToFinal() {
  const navigate = useNavigate();
  const { setViewMode } = useAppStore();
  const [showInfo, setShowInfo] = useState(true);
  const [groupWinners, setGroupWinners] = useState<Record<string, BracketTeam>>({});
  const [groupRunners, setGroupRunners] = useState<Record<string, BracketTeam>>({});
  const [groupThird, setGroupThird] = useState<Record<string, BracketTeam>>({});
  
  // Bracket stages
  const [roundOf32, setRoundOf32] = useState<BracketMatch[]>([]);
  const [roundOf16, setRoundOf16] = useState<BracketMatch[]>([]);
  const [quarterFinals, setQuarterFinals] = useState<BracketMatch[]>([]);
  const [semiFinals, setSemiFinals] = useState<BracketMatch[]>([]);
  const [final, setFinal] = useState<BracketMatch | null>(null);
  const [champion, setChampion] = useState<BracketTeam | null>(null);

  // Initialize bracket when groups are filled
  useEffect(() => {
    const winners = Object.values(groupWinners);
    const runners = Object.values(groupRunners);
    const thirds = Object.values(groupThird);
    
    if (winners.length === 12 && runners.length === 12 && thirds.length === 8) {
      initializeBracket();
    }
  }, [groupWinners, groupRunners, groupThird]);

  const initializeBracket = () => {
    // Simplified bracket structure (official pairings not yet released by FIFA)
    const ro32: BracketMatch[] = [];
    
    // Create Round of 32 matches
    for (let i = 0; i < 16; i++) {
      if (i < 12) {
        // Winners vs Runners pairings
        ro32.push({
          id: `ro32-${i + 1}`,
          team1: groupWinners[groups[i]],
          team2: groupRunners[groups[(i + 1) % 12]],
          winner: null
        });
      } else {
        // Matches involving third-place teams
        const thirds = Object.values(groupThird);
        ro32.push({
          id: `ro32-${i + 1}`,
          team1: thirds[i - 12],
          team2: thirds[(i - 11) % 8],
          winner: null
        });
      }
    }
    
    setRoundOf32(ro32);
    setRoundOf16([]);
    setQuarterFinals([]);
    setSemiFinals([]);
    setFinal(null);
    setChampion(null);
  };

  const selectWinner = (matchId: string, team: BracketTeam, stage: string) => {
    if (stage === 'ro32') {
      const updated = roundOf32.map(m => 
        m.id === matchId ? { ...m, winner: team } : m
      );
      setRoundOf32(updated);
      
      if (updated.every(m => m.winner)) {
        const ro16: BracketMatch[] = [];
        for (let i = 0; i < 8; i++) {
          ro16.push({
            id: `ro16-${i + 1}`,
            team1: updated[i * 2].winner,
            team2: updated[i * 2 + 1].winner,
            winner: null
          });
        }
        setRoundOf16(ro16);
      }
    } else if (stage === 'ro16') {
      const updated = roundOf16.map(m => 
        m.id === matchId ? { ...m, winner: team } : m
      );
      setRoundOf16(updated);
      
      if (updated.every(m => m.winner)) {
        const qf: BracketMatch[] = [];
        for (let i = 0; i < 4; i++) {
          qf.push({
            id: `qf-${i + 1}`,
            team1: updated[i * 2].winner,
            team2: updated[i * 2 + 1].winner,
            winner: null
          });
        }
        setQuarterFinals(qf);
      }
    } else if (stage === 'qf') {
      const updated = quarterFinals.map(m => 
        m.id === matchId ? { ...m, winner: team } : m
      );
      setQuarterFinals(updated);
      
      if (updated.every(m => m.winner)) {
        const sf: BracketMatch[] = [];
        for (let i = 0; i < 2; i++) {
          sf.push({
            id: `sf-${i + 1}`,
            team1: updated[i * 2].winner,
            team2: updated[i * 2 + 1].winner,
            winner: null
          });
        }
        setSemiFinals(sf);
      }
    } else if (stage === 'sf') {
      const updated = semiFinals.map(m => 
        m.id === matchId ? { ...m, winner: team } : m
      );
      setSemiFinals(updated);
      
      if (updated.every(m => m.winner)) {
        setFinal({ 
          id: 'final', 
          team1: updated[0].winner, 
          team2: updated[1].winner, 
          winner: null 
        });
      }
    } else if (stage === 'final') {
      setChampion(team);
      setFinal(prev => prev ? { ...prev, winner: team } : null);
    }
  };

  // Auto-advance through knockout stages based on rankings
  const autoAdvanceKnockout = () => {
    // Auto-fill Round of 32
    if (roundOf32.length > 0) {
      const updatedR32 = roundOf32.map(match => {
        if (match.team1 && match.team2 && !match.winner) {
          const rank1 = match.team1.rank || teamRankings[match.team1.name] || 999;
          const rank2 = match.team2.rank || teamRankings[match.team2.name] || 999;
          return { ...match, winner: rank1 < rank2 ? match.team1 : match.team2 };
        }
        return match;
      });
      setRoundOf32(updatedR32);
      
      // Generate R16
      const ro16: BracketMatch[] = [];
      for (let i = 0; i < 8; i++) {
        const team1 = updatedR32[i * 2]?.winner;
        const team2 = updatedR32[i * 2 + 1]?.winner;
        if (team1 && team2) {
          const rank1 = team1.rank || teamRankings[team1.name] || 999;
          const rank2 = team2.rank || teamRankings[team2.name] || 999;
          ro16.push({
            id: `ro16-${i + 1}`,
            team1,
            team2,
            winner: rank1 < rank2 ? team1 : team2
          });
        }
      }
      setRoundOf16(ro16);
      
      // Generate QF
      const qf: BracketMatch[] = [];
      for (let i = 0; i < 4; i++) {
        const team1 = ro16[i * 2]?.winner;
        const team2 = ro16[i * 2 + 1]?.winner;
        if (team1 && team2) {
          const rank1 = team1.rank || teamRankings[team1.name] || 999;
          const rank2 = team2.rank || teamRankings[team2.name] || 999;
          qf.push({
            id: `qf-${i + 1}`,
            team1,
            team2,
            winner: rank1 < rank2 ? team1 : team2
          });
        }
      }
      setQuarterFinals(qf);
      
      // Generate SF
      const sf: BracketMatch[] = [];
      for (let i = 0; i < 2; i++) {
        const team1 = qf[i * 2]?.winner;
        const team2 = qf[i * 2 + 1]?.winner;
        if (team1 && team2) {
          const rank1 = team1.rank || teamRankings[team1.name] || 999;
          const rank2 = team2.rank || teamRankings[team2.name] || 999;
          sf.push({
            id: `sf-${i + 1}`,
            team1,
            team2,
            winner: rank1 < rank2 ? team1 : team2
          });
        }
      }
      setSemiFinals(sf);
      
      // Generate Final
      if (sf[0]?.winner && sf[1]?.winner) {
        const team1 = sf[0].winner;
        const team2 = sf[1].winner;
        const rank1 = team1.rank || teamRankings[team1.name] || 999;
        const rank2 = team2.rank || teamRankings[team2.name] || 999;
        const finalWinner = rank1 < rank2 ? team1 : team2;
        setFinal({
          id: 'final',
          team1,
          team2,
          winner: finalWinner
        });
        setChampion(finalWinner);
      }
    }
  };

  // Auto-advance when groups are filled
  useEffect(() => {
    if (roundOf32.length > 0 && roundOf32.every(m => m.team1 && m.team2)) {
      // Small delay to show the bracket before auto-advancing
      const timer = setTimeout(() => {
        if (!roundOf32.some(m => m.winner)) {
          // Only auto-advance if nothing has been selected yet
          // (This prevents overriding user choices)
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [roundOf32]);

  const reset = () => {
    setGroupWinners({});
    setGroupRunners({});
    setGroupThird({});
    setRoundOf32([]);
    setRoundOf16([]);
    setQuarterFinals([]);
    setSemiFinals([]);
    setFinal(null);
    setChampion(null);
  };

  const autoFillPredictions = () => {
    // Fill groups with default predictions
    const winners: Record<string, BracketTeam> = {};
    const runners: Record<string, BracketTeam> = {};
    const thirds: Record<string, BracketTeam> = {};
    
    groups.forEach(group => {
      const prediction = defaultGroupPredictions[group];
      if (prediction) {
        winners[group] = { name: prediction.first, rank: teamRankings[prediction.first] };
        runners[group] = { name: prediction.second, rank: teamRankings[prediction.second] };
      }
    });
    
    // Select 8 best third-place teams (based on rankings)
    const allThirds = groups.map(group => ({
      group,
      team: defaultGroupPredictions[group].third,
      rank: teamRankings[defaultGroupPredictions[group].third]
    })).sort((a, b) => a.rank - b.rank).slice(0, 8);
    
    allThirds.forEach(({ group, team, rank }) => {
      thirds[group] = { name: team, rank };
    });
    
    setGroupWinners(winners);
    setGroupRunners(runners);
    setGroupThird(thirds);
  };

  const goToFollowTeam = () => {
    setViewMode('follow-team');
    navigate('/app');
  };

  return (
    <>
      <SEO 
        title="Road to Final - FIFA World Cup 2026 Bracket Predictor"
        description="Predict the FIFA World Cup 2026 bracket! Select group winners and simulate the knockout stages all the way to the final."
        keywords="FIFA World Cup 2026, bracket predictor, knockout stage, tournament bracket"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        {/* Header */}
        <div className="relative overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-r from-fifa-blue-900/20 via-fifa-gold-900/20 to-fifa-blue-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                  <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-fifa-gold-400" />
                  <h1 className="text-3xl sm:text-5xl font-bold text-white">
                    Road to Final
                  </h1>
                </div>
                <p className="text-gray-400 text-sm sm:text-lg">
                  Predict the tournament bracket and crown your champion
                </p>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={autoFillPredictions}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-fifa-gold-500 to-orange-600 hover:from-fifa-gold-600 hover:to-orange-700 rounded-lg text-white font-semibold transition-all shadow-lg hover:shadow-xl"
                  title="Auto-fill based on FIFA rankings"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="hidden sm:inline">Auto-Fill</span>
                  <Zap className="w-3 h-3 sm:hidden" />
                </button>
                <button
                  onClick={() => setShowInfo(!showInfo)}
                  className="flex items-center gap-2 px-4 py-2 bg-fifa-blue-600 hover:bg-fifa-blue-700 rounded-lg text-white transition-colors"
                >
                  <Info className="w-4 h-4" />
                  <span className="hidden sm:inline">Info</span>
                </button>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Follow Your Team Feature Callout */}
          <div className="mb-8 glass-dark p-6 rounded-xl border border-fifa-gold-700/50 bg-gradient-to-r from-fifa-gold-900/10 to-transparent">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-6 h-6 text-fifa-gold-400" />
                  <h3 className="text-xl font-bold text-white">Know Your Team?</h3>
                </div>
                <p className="text-gray-300 text-sm mb-2">
                  Track your favorite team's journey through the World Cup! See their complete schedule, 
                  group matches, and potential knockout path all in one place.
                </p>
                <p className="text-gray-400 text-xs">
                  Follow Your Team feature helps you plan your travel around your team's matches.
                </p>
              </div>
              <button
                onClick={goToFollowTeam}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fifa-gold-500 to-orange-600 hover:from-fifa-gold-600 hover:to-orange-700 rounded-lg text-white font-semibold transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                <Users className="w-5 h-5" />
                <span>Follow Your Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Information Section */}
          {showInfo && (
            <div className="mb-8 space-y-4">
              {/* What We Know */}
              <div className="glass-dark p-6 rounded-xl border border-fifa-blue-700/50">
                <div className="flex items-start gap-3 mb-3">
                  <Info className="w-6 h-6 text-fifa-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">What We Know</h3>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-fifa-blue-400 mt-1">•</span>
                        <span><strong>48 teams</strong> divided into <strong>12 groups (A-L)</strong> of 4 teams each</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fifa-blue-400 mt-1">•</span>
                        <span><strong>Top 2 from each group</strong> (24 teams) + <strong>8 best third-place teams</strong> = 32 teams advance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fifa-blue-400 mt-1">•</span>
                        <span>Host nations pre-placed: <strong>Mexico (Group A), Canada (Group B), USA (Group D)</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fifa-blue-400 mt-1">•</span>
                        <span><strong>104 total matches</strong> from June 11 - July 19, 2026</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* What We Don't Know */}
              <div className="glass-dark p-6 rounded-xl border border-amber-700/50">
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">What We Don't Know Yet</h3>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span><strong>Specific bracket pairings</strong> (which group winners play which runners-up)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span><strong>Third-place team allocation</strong> to specific bracket positions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span><strong>Which groups feed into which side</strong> of the bracket</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span>All 48 participating teams (42 confirmed, 6 playoff spots in March 2026)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* When We'll Know */}
              <div className="glass-dark p-6 rounded-xl border border-fifa-gold-700/50">
                <div className="flex items-start gap-3 mb-3">
                  <Calendar className="w-6 h-6 text-fifa-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">When We'll Know</h3>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-fifa-gold-400 mt-1">•</span>
                        <span><strong>December 5, 2025:</strong> Official Draw at Kennedy Center, Washington D.C. (group compositions & bracket structure)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fifa-gold-400 mt-1">•</span>
                        <span><strong>March 2026:</strong> Final 6 playoff spots confirmed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fifa-gold-400 mt-1">•</span>
                        <span><strong>After July 1, 2026:</strong> Final bracket positions based on group stage results</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Influences */}
              <div className="glass-dark p-6 rounded-xl border border-purple-700/50">
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Key Influencing Factors</h3>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span><strong>Third-place team complexity:</strong> 8 of 12 third-place teams advance, creating complex bracket allocation rules</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span><strong>Geographical balance:</strong> Matches spread across 3 countries (16 host cities) affects scheduling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span><strong>FIFA Rankings:</strong> Determine seeding pots for the draw</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span><strong>Confederation distribution:</strong> Teams from same region avoid same groups (except UEFA)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4">
                <p className="text-amber-200 text-sm flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>Note:</strong> This predictor uses a simplified bracket structure. Official bracket pairings will be announced by FIFA after the December 2025 draw.</span>
                </p>
              </div>
            </div>
          )}

          {/* Group Stage Selection */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-fifa-blue-600 flex items-center justify-center text-sm">1</span>
                Select Group Stage Results
              </h2>
              <div className="bg-fifa-gold-900/20 border border-fifa-gold-700/50 rounded-lg px-4 py-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-fifa-gold-400" />
                <span className="text-sm text-fifa-gold-400 font-semibold">
                  Click "Auto-Fill" for FIFA-ranked predictions!
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {groups.map(group => (
                <div key={group} className="glass-dark p-4 rounded-xl border border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-fifa-gold-400">Group {group}</h3>
                    {(group === 'A' || group === 'B' || group === 'D') && (
                      <span className="text-xs bg-fifa-blue-900/50 text-fifa-blue-300 px-2 py-1 rounded">
                        Host
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block">1st Place</label>
                      <select
                        value={groupWinners[group]?.name || ''}
                        onChange={(e) => {
                          if (e.target.value) {
                            setGroupWinners({
                              ...groupWinners,
                              [group]: { name: e.target.value }
                            });
                          }
                        }}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:border-fifa-blue-500 focus:ring-1 focus:ring-fifa-blue-500"
                      >
                        <option value="">Select team...</option>
                        {teams.map(team => (
                          <option key={team} value={team}>{team}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block">2nd Place</label>
                      <select
                        value={groupRunners[group]?.name || ''}
                        onChange={(e) => {
                          if (e.target.value) {
                            setGroupRunners({
                              ...groupRunners,
                              [group]: { name: e.target.value }
                            });
                          }
                        }}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:border-fifa-blue-500 focus:ring-1 focus:ring-fifa-blue-500"
                      >
                        <option value="">Select team...</option>
                        {teams.map(team => (
                          <option key={team} value={team}>{team}</option>
                        ))}
                      </select>
                    </div>
                    
                    {Object.keys(groupThird).length < 8 && (
                      <div>
                        <label className="text-xs text-gray-400 mb-1 block">3rd Place (if qualifies)</label>
                        <select
                          value={groupThird[group]?.name || ''}
                          onChange={(e) => {
                            if (e.target.value) {
                              setGroupThird({
                                ...groupThird,
                                [group]: { name: e.target.value }
                              });
                            } else {
                              const newThird = { ...groupThird };
                              delete newThird[group];
                              setGroupThird(newThird);
                            }
                          }}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        >
                          <option value="">Select team...</option>
                          {teams.map(team => (
                            <option key={team} value={team}>{team}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-center text-sm text-gray-400">
              Select 8 third-place teams that will advance (best 8 of 12 groups)
            </div>
          </div>

          {/* Knockout Stage Bracket */}
          {roundOf32.length > 0 && (
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-fifa-blue-600 flex items-center justify-center text-sm">2</span>
                  Knockout Stage Bracket
                </h2>
                <button
                  onClick={autoAdvanceKnockout}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 rounded-lg text-white font-semibold transition-all shadow-lg hover:shadow-xl"
                  title="Auto-complete all knockout rounds based on rankings"
                >
                  <Zap className="w-4 h-4" />
                  <span className="text-sm">Auto-Complete All</span>
                </button>
              </div>
              
              {/* Desktop Bracket View */}
              <div className="hidden lg:block overflow-x-auto">
                <div className="min-w-[1400px] p-6 glass-dark rounded-xl border border-gray-700">
                  <div className="flex justify-between gap-3">
                    {/* Round of 32 */}
                    <BracketColumn
                      title="Round of 32"
                      matches={roundOf32}
                      onSelectWinner={(matchId, team) => selectWinner(matchId, team, 'ro32')}
                    />
                    
                    {/* Round of 16 */}
                    {roundOf16.length > 0 && (
                      <BracketColumn
                        title="Round of 16"
                        matches={roundOf16}
                        onSelectWinner={(matchId, team) => selectWinner(matchId, team, 'ro16')}
                      />
                    )}
                    
                    {/* Quarter Finals */}
                    {quarterFinals.length > 0 && (
                      <BracketColumn
                        title="Quarter Finals"
                        matches={quarterFinals}
                        onSelectWinner={(matchId, team) => selectWinner(matchId, team, 'qf')}
                      />
                    )}
                    
                    {/* Semi Finals */}
                    {semiFinals.length > 0 && (
                      <BracketColumn
                        title="Semi Finals"
                        matches={semiFinals}
                        onSelectWinner={(matchId, team) => selectWinner(matchId, team, 'sf')}
                      />
                    )}
                    
                    {/* Final */}
                    {final && (
                      <div className="flex flex-col justify-center min-w-[200px]">
                        <h3 className="text-sm font-bold text-fifa-gold-400 mb-4 text-center">FINAL</h3>
                        <MatchCard
                          match={final}
                          onSelectWinner={(team) => selectWinner('final', team, 'final')}
                        />
                        
                        {champion && (
                          <div className="mt-6 text-center">
                            <div className="inline-block">
                              <Trophy className="w-12 h-12 text-fifa-gold-400 mx-auto mb-2 animate-bounce" />
                              <div className="text-2xl font-bold text-white mb-1">Champion</div>
                              <div className="text-xl font-bold text-fifa-gold-400">{champion.name}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Mobile Bracket View */}
              <div className="lg:hidden space-y-6">
                <MobileBracketStage
                  title="Round of 32"
                  matches={roundOf32}
                  onSelectWinner={(matchId, team) => selectWinner(matchId, team, 'ro32')}
                />
                
                {roundOf16.length > 0 && (
                  <MobileBracketStage
                    title="Round of 16"
                    matches={roundOf16}
                    onSelectWinner={(matchId, team) => selectWinner(matchId, team, 'ro16')}
                  />
                )}
                
                {quarterFinals.length > 0 && (
                  <MobileBracketStage
                    title="Quarter Finals"
                    matches={quarterFinals}
                    onSelectWinner={(matchId, team) => selectWinner(matchId, team, 'qf')}
                  />
                )}
                
                {semiFinals.length > 0 && (
                  <MobileBracketStage
                    title="Semi Finals"
                    matches={semiFinals}
                    onSelectWinner={(matchId, team) => selectWinner(matchId, team, 'sf')}
                  />
                )}
                
                {final && (
                  <div className="glass-dark p-4 rounded-xl border border-gray-700">
                    <h3 className="text-lg font-bold text-fifa-gold-400 mb-4 text-center">FINAL</h3>
                    <MatchCard
                      match={final}
                      onSelectWinner={(team) => selectWinner('final', team, 'final')}
                    />
                    
                    {champion && (
                      <div className="mt-6 text-center">
                        <Trophy className="w-16 h-16 text-fifa-gold-400 mx-auto mb-2 animate-bounce" />
                        <div className="text-xl font-bold text-white mb-1">Champion</div>
                        <div className="text-2xl font-bold text-fifa-gold-400">{champion.name}</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Bracket Column Component (Desktop)
function BracketColumn({ 
  title, 
  matches, 
  onSelectWinner 
}: { 
  title: string; 
  matches: BracketMatch[]; 
  onSelectWinner: (matchId: string, team: BracketTeam) => void;
}) {
  return (
    <div className="flex-1 min-w-[220px]">
      <h3 className="text-sm font-bold text-fifa-gold-400 mb-4 text-center whitespace-nowrap">{title}</h3>
      <div className="space-y-4">
        {matches.map(match => (
          <MatchCard
            key={match.id}
            match={match}
            onSelectWinner={(team) => onSelectWinner(match.id, team)}
          />
        ))}
      </div>
    </div>
  );
}

// Mobile Bracket Stage
function MobileBracketStage({ 
  title, 
  matches, 
  onSelectWinner 
}: { 
  title: string; 
  matches: BracketMatch[]; 
  onSelectWinner: (matchId: string, team: BracketTeam) => void;
}) {
  return (
    <div className="glass-dark p-4 rounded-xl border border-gray-700">
      <h3 className="text-lg font-bold text-fifa-gold-400 mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {matches.map(match => (
          <MatchCard
            key={match.id}
            match={match}
            onSelectWinner={(team) => onSelectWinner(match.id, team)}
          />
        ))}
      </div>
    </div>
  );
}

// Match Card Component
function MatchCard({ 
  match, 
  onSelectWinner 
}: { 
  match: BracketMatch; 
  onSelectWinner: (team: BracketTeam) => void;
}) {
  if (!match.team1 || !match.team2) {
    return (
      <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
        <div className="text-center text-gray-500 text-sm">Awaiting teams...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden hover:border-gray-600 transition-all">
      <button
        onClick={() => onSelectWinner(match.team1!)}
        className={`w-full px-3 py-2.5 text-left transition-all text-sm ${
          match.winner?.name === match.team1.name
            ? 'bg-fifa-blue-600 text-white font-bold'
            : 'hover:bg-gray-700/50 text-gray-300'
        }`}
      >
        <span className="truncate block">{match.team1.name}</span>
      </button>
      
      <div className="border-t border-gray-700"></div>
      
      <button
        onClick={() => onSelectWinner(match.team2!)}
        className={`w-full px-3 py-2.5 text-left transition-all text-sm ${
          match.winner?.name === match.team2.name
            ? 'bg-fifa-blue-600 text-white font-bold'
            : 'hover:bg-gray-700/50 text-gray-300'
        }`}
      >
        <span className="truncate block">{match.team2.name}</span>
      </button>
      
      {match.winner && (
        <div className="px-3 py-1.5 bg-fifa-gold-900/30 border-t border-fifa-gold-700">
          <div className="flex items-center gap-1 text-fifa-gold-400 text-xs">
            <ChevronRight className="w-3 h-3" />
            <span className="font-semibold">Advances</span>
          </div>
        </div>
      )}
    </div>
  );
}

