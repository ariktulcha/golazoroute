import { City, Match } from '../data/types';
import { cities, getCityById } from '../data/cities';
import { matches } from '../data/matches';
import { calculateDistance } from './distance';

export interface PopularRoute {
  id: string;
  name: string;
  description: string;
  cities: City[];
  estimatedDistance: number;
  estimatedDays: number;
  matchCount: number;
  highlights: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  suggestedMatches: Match[];
}

// Calculate the distance for a route through multiple cities
function calculateRouteDistance(cityIds: string[]): number {
  let totalDistance = 0;
  for (let i = 0; i < cityIds.length - 1; i++) {
    const city1 = getCityById(cityIds[i]);
    const city2 = getCityById(cityIds[i + 1]);
    if (city1 && city2) {
      const distance = calculateDistance(
        city1.coordinates[1],
        city1.coordinates[0],
        city2.coordinates[1],
        city2.coordinates[0]
      );
      totalDistance += distance;
    }
  }
  return Math.round(totalDistance);
}

// Get matches for specific cities
function getMatchesForCities(cityIds: string[]): Match[] {
  const filteredMatches = matches
    .filter(match => cityIds.includes(match.cityId))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 6); // Limit to first 6 matches for each route
  
  console.log(`Found ${filteredMatches.length} matches for cities:`, cityIds);
  return filteredMatches;
}

// Popular route definitions
export const popularRoutes: PopularRoute[] = [
  {
    id: 'usa-east-coast',
    name: 'USA East Coast Explorer',
    description: 'Experience the historic cities of the American East Coast. Visit iconic landmarks from New York to Miami.',
    cities: cities.filter(c => ['new-york', 'philadelphia', 'boston', 'atlanta', 'miami'].includes(c.id)),
    estimatedDistance: calculateRouteDistance(['new-york', 'philadelphia', 'boston', 'atlanta', 'miami']),
    estimatedDays: 12,
    matchCount: 6,
    highlights: [
      'Statue of Liberty & Times Square',
      'Independence Hall & Liberty Bell',
      'Historic Boston Freedom Trail',
      'South Beach Miami',
    ],
    difficulty: 'Easy',
    suggestedMatches: getMatchesForCities(['new-york', 'philadelphia', 'boston', 'atlanta', 'miami']),
  },
  {
    id: 'usa-west-coast',
    name: 'USA West Coast Adventure',
    description: 'From the tech hub of San Francisco to the entertainment capital Los Angeles, with a stop in Seattle.',
    cities: cities.filter(c => ['seattle', 'san-francisco', 'los-angeles'].includes(c.id)),
    estimatedDistance: calculateRouteDistance(['seattle', 'san-francisco', 'los-angeles']),
    estimatedDays: 9,
    matchCount: 4,
    highlights: [
      'Space Needle & Pike Place Market',
      'Golden Gate Bridge',
      'Hollywood & Santa Monica',
    ],
    difficulty: 'Easy',
    suggestedMatches: getMatchesForCities(['seattle', 'san-francisco', 'los-angeles']),
  },
  {
    id: 'usa-heartland',
    name: 'USA Heartland Tour',
    description: 'Experience American culture in the heartland - from BBQ to rodeos, through Texas and the Midwest.',
    cities: cities.filter(c => ['dallas', 'houston', 'kansas-city', 'atlanta'].includes(c.id)),
    estimatedDistance: calculateRouteDistance(['dallas', 'houston', 'kansas-city', 'atlanta']),
    estimatedDays: 10,
    matchCount: 5,
    highlights: [
      'Texas BBQ & AT&T Stadium',
      'Space Center Houston',
      'Kansas City BBQ',
    ],
    difficulty: 'Medium',
    suggestedMatches: getMatchesForCities(['dallas', 'houston', 'kansas-city', 'atlanta']),
  },
  {
    id: 'mexico-heritage',
    name: 'Mexico Heritage Trail',
    description: 'Discover Mexican culture and history in three iconic cities. From Azteca to tequila distilleries.',
    cities: cities.filter(c => ['mexico-city', 'guadalajara', 'monterrey'].includes(c.id)),
    estimatedDistance: calculateRouteDistance(['mexico-city', 'guadalajara', 'monterrey']),
    estimatedDays: 8,
    matchCount: 4,
    highlights: [
      'Teotihuacan Pyramids',
      'Tequila Distillery Tours',
      'Estadio Azteca - Legendary Stadium',
      'Authentic Mexican Cuisine',
    ],
    difficulty: 'Medium',
    suggestedMatches: getMatchesForCities(['mexico-city', 'guadalajara', 'monterrey']),
  },
  {
    id: 'canada-cities',
    name: 'Canadian Cities Explorer',
    description: 'Experience the best of Canada with Toronto and Vancouver. Mountain views and urban culture.',
    cities: cities.filter(c => ['toronto', 'vancouver'].includes(c.id)),
    estimatedDistance: calculateRouteDistance(['toronto', 'vancouver']),
    estimatedDays: 7,
    matchCount: 3,
    highlights: [
      'CN Tower',
      'Niagara Falls Day Trip',
      'Stanley Park & Seawall',
      'Capilano Suspension Bridge',
    ],
    difficulty: 'Easy',
    suggestedMatches: getMatchesForCities(['toronto', 'vancouver']),
  },
  {
    id: 'cross-continent',
    name: 'Cross-Continental Grand Tour',
    description: 'The ultimate World Cup experience - from Mexico to Canada, hitting major cities across North America.',
    cities: cities.filter(c => ['mexico-city', 'dallas', 'kansas-city', 'toronto', 'new-york', 'miami'].includes(c.id)),
    estimatedDistance: calculateRouteDistance(['mexico-city', 'dallas', 'kansas-city', 'toronto', 'new-york', 'miami']),
    estimatedDays: 18,
    matchCount: 8,
    highlights: [
      'Three countries in one trip',
      'Iconic stadiums coast to coast',
      'Diverse cultural experiences',
      'Multiple climate zones',
    ],
    difficulty: 'Hard',
    suggestedMatches: getMatchesForCities(['mexico-city', 'dallas', 'kansas-city', 'toronto', 'new-york', 'miami']),
  },
  {
    id: 'soccer-capitals',
    name: 'Soccer Capitals Tour',
    description: 'Visit the most passionate soccer cities with the biggest stadiums and best fan atmospheres.',
    cities: cities.filter(c => ['mexico-city', 'new-york', 'los-angeles', 'dallas', 'atlanta'].includes(c.id)),
    estimatedDistance: calculateRouteDistance(['mexico-city', 'dallas', 'atlanta', 'new-york', 'los-angeles']),
    estimatedDays: 14,
    matchCount: 7,
    highlights: [
      'Estadio Azteca - Largest Stadium',
      'MetLife Stadium - Final Venue',
      'SoFi Stadium - State-of-the-Art',
      'AT&T Stadium - Massive Complex',
    ],
    difficulty: 'Medium',
    suggestedMatches: getMatchesForCities(['mexico-city', 'dallas', 'atlanta', 'new-york', 'los-angeles']),
  },
  {
    id: 'pacific-northwest',
    name: 'Pacific Northwest & California',
    description: 'Explore the beautiful Pacific coastline from Seattle to LA, with stunning nature and vibrant cities.',
    cities: cities.filter(c => ['seattle', 'vancouver', 'san-francisco', 'los-angeles'].includes(c.id)),
    estimatedDistance: calculateRouteDistance(['seattle', 'vancouver', 'san-francisco', 'los-angeles']),
    estimatedDays: 11,
    matchCount: 5,
    highlights: [
      'Pacific Coast Highway',
      'Mountain and Ocean Views',
      'Tech Hub Culture',
      'Beach Lifestyle',
    ],
    difficulty: 'Easy',
    suggestedMatches: getMatchesForCities(['seattle', 'vancouver', 'san-francisco', 'los-angeles']),
  },
];

export function getPopularRoutes(): PopularRoute[] {
  return popularRoutes;
}

export function getPopularRouteById(id: string): PopularRoute | undefined {
  return popularRoutes.find(route => route.id === id);
}

export function getRoutesByDifficulty(difficulty: 'Easy' | 'Medium' | 'Hard'): PopularRoute[] {
  return popularRoutes.filter(route => route.difficulty === difficulty);
}

