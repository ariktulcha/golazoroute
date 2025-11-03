import { useState } from 'react';
import { Users, ChevronDown } from 'lucide-react';
import { getAllTeams } from '../utils/teamRoutes';

interface TeamSelectorProps {
  onTeamSelect: (teamName: string) => void;
  selectedTeam: string | null;
}

export default function TeamSelector({ onTeamSelect, selectedTeam }: TeamSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const teams = getAllTeams();

  const handleSelect = (teamName: string) => {
    onTeamSelect(teamName);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full glass-dark rounded-xl p-4 border border-fifa-blue-500/30 hover:border-fifa-blue-500/50 transition-colors flex items-center justify-between gap-3"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-fifa-blue-500/20">
            <Users className="w-5 h-5 text-fifa-blue-400" />
          </div>
          <div className="text-left">
            <div className="text-xs text-gray-400 mb-1">Select Your Team</div>
            <div className="font-semibold text-white">
              {selectedTeam || 'Choose a team to follow'}
            </div>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-50 w-full mt-2 glass-dark rounded-xl border border-gray-700 max-h-96 overflow-y-auto">
            <div className="p-2">
              {teams.map((team) => (
                <button
                  key={team.name}
                  onClick={() => handleSelect(team.name)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedTeam === team.name
                      ? 'bg-fifa-blue-500/20 text-fifa-blue-400'
                      : 'hover:bg-gray-800 text-gray-300'
                  }`}
                >
                  {team.name}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

