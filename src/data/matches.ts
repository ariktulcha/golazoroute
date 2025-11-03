import { Match } from './types';

// Mock 2026 FIFA World Cup Schedule (104 matches)
// Tournament: June 11 - July 19, 2026
export const matches: Match[] = [
  // GROUP STAGE - Matchday 1 (June 11-14)
  { id: 'm1', matchNumber: 1, date: '2026-06-11', time: '18:00', cityId: 'mexico-city', stage: 'Group', group: 'A', homeTeam: 'Mexico', awayTeam: 'TBD' },
  { id: 'm2', matchNumber: 2, date: '2026-06-11', time: '14:00', cityId: 'los-angeles', stage: 'Group', group: 'A', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm3', matchNumber: 3, date: '2026-06-12', time: '13:00', cityId: 'new-york', stage: 'Group', group: 'B', homeTeam: 'England', awayTeam: 'TBD' },
  { id: 'm4', matchNumber: 4, date: '2026-06-12', time: '16:00', cityId: 'miami', stage: 'Group', group: 'B', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm5', matchNumber: 5, date: '2026-06-12', time: '19:00', cityId: 'dallas', stage: 'Group', group: 'C', homeTeam: 'Argentina', awayTeam: 'TBD' },
  { id: 'm6', matchNumber: 6, date: '2026-06-13', time: '13:00', cityId: 'toronto', stage: 'Group', group: 'C', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm7', matchNumber: 7, date: '2026-06-13', time: '16:00', cityId: 'seattle', stage: 'Group', group: 'D', homeTeam: 'France', awayTeam: 'TBD' },
  { id: 'm8', matchNumber: 8, date: '2026-06-13', time: '19:00', cityId: 'houston', stage: 'Group', group: 'D', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm9', matchNumber: 9, date: '2026-06-14', time: '13:00', cityId: 'atlanta', stage: 'Group', group: 'E', homeTeam: 'Brazil', awayTeam: 'TBD' },
  { id: 'm10', matchNumber: 10, date: '2026-06-14', time: '16:00', cityId: 'vancouver', stage: 'Group', group: 'E', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm11', matchNumber: 11, date: '2026-06-14', time: '19:00', cityId: 'philadelphia', stage: 'Group', group: 'F', homeTeam: 'Spain', awayTeam: 'TBD' },
  { id: 'm12', matchNumber: 12, date: '2026-06-15', time: '13:00', cityId: 'kansas-city', stage: 'Group', group: 'F', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm13', matchNumber: 13, date: '2026-06-15', time: '16:00', cityId: 'san-francisco', stage: 'Group', group: 'G', homeTeam: 'Germany', awayTeam: 'TBD' },
  { id: 'm14', matchNumber: 14, date: '2026-06-15', time: '19:00', cityId: 'boston', stage: 'Group', group: 'G', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm15', matchNumber: 15, date: '2026-06-16', time: '13:00', cityId: 'guadalajara', stage: 'Group', group: 'H', homeTeam: 'Portugal', awayTeam: 'TBD' },
  { id: 'm16', matchNumber: 16, date: '2026-06-16', time: '16:00', cityId: 'monterrey', stage: 'Group', group: 'H', homeTeam: 'TBD', awayTeam: 'TBD' },

  // GROUP STAGE - Matchday 2 (June 17-20)
  { id: 'm17', matchNumber: 17, date: '2026-06-17', time: '13:00', cityId: 'mexico-city', stage: 'Group', group: 'A', homeTeam: 'Mexico', awayTeam: 'TBD' },
  { id: 'm18', matchNumber: 18, date: '2026-06-17', time: '16:00', cityId: 'seattle', stage: 'Group', group: 'A', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm19', matchNumber: 19, date: '2026-06-18', time: '13:00', cityId: 'atlanta', stage: 'Group', group: 'B', homeTeam: 'England', awayTeam: 'TBD' },
  { id: 'm20', matchNumber: 20, date: '2026-06-18', time: '16:00', cityId: 'houston', stage: 'Group', group: 'B', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm21', matchNumber: 21, date: '2026-06-18', time: '19:00', cityId: 'new-york', stage: 'Group', group: 'C', homeTeam: 'Argentina', awayTeam: 'TBD' },
  { id: 'm22', matchNumber: 22, date: '2026-06-19', time: '13:00', cityId: 'vancouver', stage: 'Group', group: 'C', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm23', matchNumber: 23, date: '2026-06-19', time: '16:00', cityId: 'boston', stage: 'Group', group: 'D', homeTeam: 'France', awayTeam: 'TBD' },
  { id: 'm24', matchNumber: 24, date: '2026-06-19', time: '19:00', cityId: 'kansas-city', stage: 'Group', group: 'D', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm25', matchNumber: 25, date: '2026-06-20', time: '13:00', cityId: 'los-angeles', stage: 'Group', group: 'E', homeTeam: 'Brazil', awayTeam: 'TBD' },
  { id: 'm26', matchNumber: 26, date: '2026-06-20', time: '16:00', cityId: 'miami', stage: 'Group', group: 'E', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm27', matchNumber: 27, date: '2026-06-20', time: '19:00', cityId: 'dallas', stage: 'Group', group: 'F', homeTeam: 'Spain', awayTeam: 'TBD' },
  { id: 'm28', matchNumber: 28, date: '2026-06-21', time: '13:00', cityId: 'toronto', stage: 'Group', group: 'F', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm29', matchNumber: 29, date: '2026-06-21', time: '16:00', cityId: 'philadelphia', stage: 'Group', group: 'G', homeTeam: 'Germany', awayTeam: 'TBD' },
  { id: 'm30', matchNumber: 30, date: '2026-06-21', time: '19:00', cityId: 'san-francisco', stage: 'Group', group: 'G', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm31', matchNumber: 31, date: '2026-06-22', time: '13:00', cityId: 'monterrey', stage: 'Group', group: 'H', homeTeam: 'Portugal', awayTeam: 'TBD' },
  { id: 'm32', matchNumber: 32, date: '2026-06-22', time: '16:00', cityId: 'guadalajara', stage: 'Group', group: 'H', homeTeam: 'TBD', awayTeam: 'TBD' },

  // GROUP STAGE - Matchday 3 (June 23-26)
  { id: 'm33', matchNumber: 33, date: '2026-06-23', time: '16:00', cityId: 'los-angeles', stage: 'Group', group: 'A', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm34', matchNumber: 34, date: '2026-06-23', time: '16:00', cityId: 'guadalajara', stage: 'Group', group: 'A', homeTeam: 'Mexico', awayTeam: 'TBD' },
  { id: 'm35', matchNumber: 35, date: '2026-06-24', time: '16:00', cityId: 'miami', stage: 'Group', group: 'B', homeTeam: 'England', awayTeam: 'TBD' },
  { id: 'm36', matchNumber: 36, date: '2026-06-24', time: '16:00', cityId: 'philadelphia', stage: 'Group', group: 'B', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm37', matchNumber: 37, date: '2026-06-24', time: '20:00', cityId: 'dallas', stage: 'Group', group: 'C', homeTeam: 'Argentina', awayTeam: 'TBD' },
  { id: 'm38', matchNumber: 38, date: '2026-06-24', time: '20:00', cityId: 'houston', stage: 'Group', group: 'C', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm39', matchNumber: 39, date: '2026-06-25', time: '16:00', cityId: 'seattle', stage: 'Group', group: 'D', homeTeam: 'France', awayTeam: 'TBD' },
  { id: 'm40', matchNumber: 40, date: '2026-06-25', time: '16:00', cityId: 'vancouver', stage: 'Group', group: 'D', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm41', matchNumber: 41, date: '2026-06-25', time: '20:00', cityId: 'atlanta', stage: 'Group', group: 'E', homeTeam: 'Brazil', awayTeam: 'TBD' },
  { id: 'm42', matchNumber: 42, date: '2026-06-25', time: '20:00', cityId: 'kansas-city', stage: 'Group', group: 'E', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm43', matchNumber: 43, date: '2026-06-26', time: '16:00', cityId: 'san-francisco', stage: 'Group', group: 'F', homeTeam: 'Spain', awayTeam: 'TBD' },
  { id: 'm44', matchNumber: 44, date: '2026-06-26', time: '16:00', cityId: 'toronto', stage: 'Group', group: 'F', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm45', matchNumber: 45, date: '2026-06-26', time: '20:00', cityId: 'boston', stage: 'Group', group: 'G', homeTeam: 'Germany', awayTeam: 'TBD' },
  { id: 'm46', matchNumber: 46, date: '2026-06-26', time: '20:00', cityId: 'new-york', stage: 'Group', group: 'G', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm47', matchNumber: 47, date: '2026-06-27', time: '16:00', cityId: 'monterrey', stage: 'Group', group: 'H', homeTeam: 'Portugal', awayTeam: 'TBD' },
  { id: 'm48', matchNumber: 48, date: '2026-06-27', time: '16:00', cityId: 'mexico-city', stage: 'Group', group: 'H', homeTeam: 'TBD', awayTeam: 'TBD' },

  // ROUND OF 32 (June 29 - July 3)
  { id: 'm49', matchNumber: 49, date: '2026-06-29', time: '14:00', cityId: 'philadelphia', stage: 'Round of 32', homeTeam: '1A', awayTeam: '2B' },
  { id: 'm50', matchNumber: 50, date: '2026-06-29', time: '17:00', cityId: 'seattle', stage: 'Round of 32', homeTeam: '1C', awayTeam: '2D' },
  { id: 'm51', matchNumber: 51, date: '2026-06-29', time: '20:00', cityId: 'dallas', stage: 'Round of 32', homeTeam: '1E', awayTeam: '2F' },
  { id: 'm52', matchNumber: 52, date: '2026-06-30', time: '14:00', cityId: 'toronto', stage: 'Round of 32', homeTeam: '1G', awayTeam: '2H' },
  { id: 'm53', matchNumber: 53, date: '2026-06-30', time: '17:00', cityId: 'houston', stage: 'Round of 32', homeTeam: '1B', awayTeam: '2A' },
  { id: 'm54', matchNumber: 54, date: '2026-06-30', time: '20:00', cityId: 'miami', stage: 'Round of 32', homeTeam: '1D', awayTeam: '2C' },
  { id: 'm55', matchNumber: 55, date: '2026-07-01', time: '14:00', cityId: 'mexico-city', stage: 'Round of 32', homeTeam: '1F', awayTeam: '2E' },
  { id: 'm56', matchNumber: 56, date: '2026-07-01', time: '17:00', cityId: 'los-angeles', stage: 'Round of 32', homeTeam: '1H', awayTeam: '2G' },
  { id: 'm57', matchNumber: 57, date: '2026-07-02', time: '14:00', cityId: 'atlanta', stage: 'Round of 32', homeTeam: '3A/B/C', awayTeam: '3D/E/F' },
  { id: 'm58', matchNumber: 58, date: '2026-07-02', time: '17:00', cityId: 'boston', stage: 'Round of 32', homeTeam: '3G/H/A', awayTeam: '3B/C/D' },
  { id: 'm59', matchNumber: 59, date: '2026-07-02', time: '20:00', cityId: 'kansas-city', stage: 'Round of 32', homeTeam: '3E/F/G', awayTeam: '3H/A/B' },
  { id: 'm60', matchNumber: 60, date: '2026-07-03', time: '14:00', cityId: 'san-francisco', stage: 'Round of 32', homeTeam: '3C/D/E', awayTeam: '3F/G/H' },
  { id: 'm61', matchNumber: 61, date: '2026-07-03', time: '17:00', cityId: 'vancouver', stage: 'Round of 32', homeTeam: '3rd A/C/D', awayTeam: '3rd B/E/F' },
  { id: 'm62', matchNumber: 62, date: '2026-07-03', time: '20:00', cityId: 'new-york', stage: 'Round of 32', homeTeam: '3rd E/F/H', awayTeam: '3rd A/B/C' },
  { id: 'm63', matchNumber: 63, date: '2026-07-04', time: '14:00', cityId: 'monterrey', stage: 'Round of 32', homeTeam: '3rd B/D/G', awayTeam: '3rd C/E/H' },
  { id: 'm64', matchNumber: 64, date: '2026-07-04', time: '17:00', cityId: 'guadalajara', stage: 'Round of 32', homeTeam: '3rd F/G/H', awayTeam: '3rd A/D/E' },

  // ROUND OF 16 (July 6-8)
  { id: 'm65', matchNumber: 65, date: '2026-07-06', time: '14:00', cityId: 'philadelphia', stage: 'Round of 16', homeTeam: 'W49', awayTeam: 'W50' },
  { id: 'm66', matchNumber: 66, date: '2026-07-06', time: '17:00', cityId: 'miami', stage: 'Round of 16', homeTeam: 'W51', awayTeam: 'W52' },
  { id: 'm67', matchNumber: 67, date: '2026-07-06', time: '20:00', cityId: 'atlanta', stage: 'Round of 16', homeTeam: 'W53', awayTeam: 'W54' },
  { id: 'm68', matchNumber: 68, date: '2026-07-07', time: '14:00', cityId: 'los-angeles', stage: 'Round of 16', homeTeam: 'W55', awayTeam: 'W56' },
  { id: 'm69', matchNumber: 69, date: '2026-07-07', time: '17:00', cityId: 'kansas-city', stage: 'Round of 16', homeTeam: 'W57', awayTeam: 'W58' },
  { id: 'm70', matchNumber: 70, date: '2026-07-07', time: '20:00', cityId: 'dallas', stage: 'Round of 16', homeTeam: 'W59', awayTeam: 'W60' },
  { id: 'm71', matchNumber: 71, date: '2026-07-08', time: '14:00', cityId: 'seattle', stage: 'Round of 16', homeTeam: 'W61', awayTeam: 'W62' },
  { id: 'm72', matchNumber: 72, date: '2026-07-08', time: '17:00', cityId: 'boston', stage: 'Round of 16', homeTeam: 'W63', awayTeam: 'W64' },

  // QUARTER-FINALS (July 10-11)
  { id: 'm73', matchNumber: 73, date: '2026-07-10', time: '15:00', cityId: 'new-york', stage: 'Quarter-final', homeTeam: 'W65', awayTeam: 'W66' },
  { id: 'm74', matchNumber: 74, date: '2026-07-10', time: '19:00', cityId: 'houston', stage: 'Quarter-final', homeTeam: 'W67', awayTeam: 'W68' },
  { id: 'm75', matchNumber: 75, date: '2026-07-11', time: '15:00', cityId: 'los-angeles', stage: 'Quarter-final', homeTeam: 'W69', awayTeam: 'W70' },
  { id: 'm76', matchNumber: 76, date: '2026-07-11', time: '19:00', cityId: 'miami', stage: 'Quarter-final', homeTeam: 'W71', awayTeam: 'W72' },

  // SEMI-FINALS (July 14-15)
  { id: 'm77', matchNumber: 77, date: '2026-07-14', time: '19:00', cityId: 'atlanta', stage: 'Semi-final', homeTeam: 'W73', awayTeam: 'W74' },
  { id: 'm78', matchNumber: 78, date: '2026-07-15', time: '19:00', cityId: 'dallas', stage: 'Semi-final', homeTeam: 'W75', awayTeam: 'W76' },

  // THIRD PLACE (July 18)
  { id: 'm79', matchNumber: 79, date: '2026-07-18', time: '15:00', cityId: 'miami', stage: 'Third Place', homeTeam: 'L77', awayTeam: 'L78' },

  // FINAL (July 19)
  { id: 'm80', matchNumber: 80, date: '2026-07-19', time: '15:00', cityId: 'new-york', stage: 'Final', homeTeam: 'W77', awayTeam: 'W78' },

  // Additional Group Stage matches for 48-team format
  { id: 'm81', matchNumber: 81, date: '2026-06-16', time: '19:00', cityId: 'toronto', stage: 'Group', group: 'A', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm82', matchNumber: 82, date: '2026-06-17', time: '19:00', cityId: 'san-francisco', stage: 'Group', group: 'B', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm83', matchNumber: 83, date: '2026-06-18', time: '13:00', cityId: 'monterrey', stage: 'Group', group: 'C', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm84', matchNumber: 84, date: '2026-06-19', time: '13:00', cityId: 'guadalajara', stage: 'Group', group: 'D', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm85', matchNumber: 85, date: '2026-06-20', time: '13:00', cityId: 'philadelphia', stage: 'Group', group: 'E', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm86', matchNumber: 86, date: '2026-06-21', time: '13:00', cityId: 'new-york', stage: 'Group', group: 'F', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm87', matchNumber: 87, date: '2026-06-22', time: '13:00', cityId: 'boston', stage: 'Group', group: 'G', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm88', matchNumber: 88, date: '2026-06-22', time: '19:00', cityId: 'houston', stage: 'Group', group: 'H', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm89', matchNumber: 89, date: '2026-06-23', time: '13:00', cityId: 'miami', stage: 'Group', group: 'A', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm90', matchNumber: 90, date: '2026-06-23', time: '19:00', cityId: 'seattle', stage: 'Group', group: 'B', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm91', matchNumber: 91, date: '2026-06-24', time: '13:00', cityId: 'kansas-city', stage: 'Group', group: 'C', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm92', matchNumber: 92, date: '2026-06-25', time: '13:00', cityId: 'los-angeles', stage: 'Group', group: 'D', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm93', matchNumber: 93, date: '2026-06-26', time: '13:00', cityId: 'vancouver', stage: 'Group', group: 'E', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm94', matchNumber: 94, date: '2026-06-27', time: '13:00', cityId: 'atlanta', stage: 'Group', group: 'F', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm95', matchNumber: 95, date: '2026-06-27', time: '19:00', cityId: 'dallas', stage: 'Group', group: 'G', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm96', matchNumber: 96, date: '2026-06-28', time: '13:00', cityId: 'san-francisco', stage: 'Group', group: 'H', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm97', matchNumber: 97, date: '2026-06-28', time: '16:00', cityId: 'toronto', stage: 'Group', group: 'A', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm98', matchNumber: 98, date: '2026-06-28', time: '19:00', cityId: 'guadalajara', stage: 'Group', group: 'B', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm99', matchNumber: 99, date: '2026-06-29', time: '13:00', cityId: 'houston', stage: 'Group', group: 'C', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm100', matchNumber: 100, date: '2026-06-29', time: '16:00', cityId: 'philadelphia', stage: 'Group', group: 'D', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm101', matchNumber: 101, date: '2026-06-30', time: '13:00', cityId: 'boston', stage: 'Group', group: 'E', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm102', matchNumber: 102, date: '2026-07-01', time: '13:00', cityId: 'new-york', stage: 'Group', group: 'F', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm103', matchNumber: 103, date: '2026-07-02', time: '13:00', cityId: 'monterrey', stage: 'Group', group: 'G', homeTeam: 'TBD', awayTeam: 'TBD' },
  { id: 'm104', matchNumber: 104, date: '2026-07-03', time: '13:00', cityId: 'mexico-city', stage: 'Group', group: 'H', homeTeam: 'TBD', awayTeam: 'TBD' },
];

export const getMatchesByCity = (cityId: string): Match[] => {
  return matches.filter(match => match.cityId === cityId);
};

export const getMatchesByStage = (stage: Match['stage']): Match[] => {
  return matches.filter(match => match.stage === stage);
};

export const getMatchById = (id: string): Match | undefined => {
  return matches.find(match => match.id === id);
};

export const getMatchesByDateRange = (startDate: string, endDate: string): Match[] => {
  return matches.filter(match => match.date >= startDate && match.date <= endDate);
};



