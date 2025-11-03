import { Match } from '../data/types';
import { matches } from '../data/matches';

export interface TeamOption {
  name: string;
  group?: string;
}

// Extract unique teams from matches
export function getAllTeams(): TeamOption[] {
  const teamSet = new Set<string>();
  
  matches.forEach(match => {
    if (match.homeTeam !== 'TBD') teamSet.add(match.homeTeam);
    if (match.awayTeam !== 'TBD') teamSet.add(match.awayTeam);
  });
  
  return Array.from(teamSet)
    .sort()
    .map(name => ({ name }));
}

// Get all matches for a specific team
export function getMatchesForTeam(teamName: string): Match[] {
  return matches
    .filter(match => 
      match.homeTeam === teamName || match.awayTeam === teamName
    )
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

// Get estimated knockout matches for a team (shows potential path)
export function getTeamJourneyWithKnockouts(teamName: string): {
  confirmedMatches: Match[];
  potentialMatches: Match[];
} {
  const confirmedMatches = getMatchesForTeam(teamName);
  
  // Find knockout stage matches that this team could potentially play
  const groupMatches = confirmedMatches.filter(m => m.stage === 'Group');
  const knockoutMatches = matches.filter(m => 
    m.stage !== 'Group' && 
    (m.homeTeam === 'TBD' || m.awayTeam === 'TBD')
  );
  
  // Get potential knockout matches (simplified - just show some options)
  const potentialMatches = knockoutMatches.slice(0, 3);
  
  return {
    confirmedMatches,
    potentialMatches
  };
}

