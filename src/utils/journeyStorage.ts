/**
 * My Itinerary Storage
 * Save user preferences: teams, cities, routes, favorite games
 */

export interface UserJourney {
  favoriteTeams: string[];
  favoriteCities: string[];
  favoriteMatches: string[];
  savedRoutes: SavedRoute[];
  preferences: {
    homeCountry?: string;
    travelBudget?: number;
    maxTravelDays?: number;
  };
}

export interface SavedRoute {
  id: string;
  name: string;
  cities: string[];
  totalDistance: number;
  estimatedCost: number;
  createdAt: string;
}

const JOURNEY_KEY = 'world_cup_journey';

/**
 * Get user journey data
 */
export function getUserJourney(): UserJourney {
  try {
    const data = localStorage.getItem(JOURNEY_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading journey:', error);
  }
  
  return {
    favoriteTeams: [],
    favoriteCities: [],
    favoriteMatches: [],
    savedRoutes: [],
    preferences: {},
  };
}

/**
 * Save user journey data
 */
export function saveUserJourney(journey: UserJourney): void {
  try {
    localStorage.setItem(JOURNEY_KEY, JSON.stringify(journey));
  } catch (error) {
    console.error('Error saving journey:', error);
  }
}

/**
 * Toggle favorite team
 */
export function toggleFavoriteTeam(team: string): boolean {
  const journey = getUserJourney();
  const index = journey.favoriteTeams.indexOf(team);
  
  if (index > -1) {
    journey.favoriteTeams.splice(index, 1);
  } else {
    journey.favoriteTeams.push(team);
  }
  
  saveUserJourney(journey);
  return index === -1; // Return true if added
}

/**
 * Toggle favorite city
 */
export function toggleFavoriteCity(cityId: string): boolean {
  const journey = getUserJourney();
  const index = journey.favoriteCities.indexOf(cityId);
  
  if (index > -1) {
    journey.favoriteCities.splice(index, 1);
  } else {
    journey.favoriteCities.push(cityId);
  }
  
  saveUserJourney(journey);
  return index === -1;
}

/**
 * Toggle favorite match
 */
export function toggleFavoriteMatch(matchId: string): boolean {
  const journey = getUserJourney();
  const index = journey.favoriteMatches.indexOf(matchId);
  
  if (index > -1) {
    journey.favoriteMatches.splice(index, 1);
  } else {
    journey.favoriteMatches.push(matchId);
  }
  
  saveUserJourney(journey);
  return index === -1;
}

/**
 * Save a route
 */
export function saveRoute(
  name: string,
  cities: string[],
  totalDistance: number,
  estimatedCost: number
): SavedRoute {
  const journey = getUserJourney();
  
  const route: SavedRoute = {
    id: Date.now().toString(),
    name,
    cities,
    totalDistance,
    estimatedCost,
    createdAt: new Date().toISOString(),
  };
  
  journey.savedRoutes.push(route);
  saveUserJourney(journey);
  
  return route;
}

/**
 * Delete a route
 */
export function deleteRoute(routeId: string): boolean {
  const journey = getUserJourney();
  const filtered = journey.savedRoutes.filter(r => r.id !== routeId);
  
  if (filtered.length === journey.savedRoutes.length) return false;
  
  journey.savedRoutes = filtered;
  saveUserJourney(journey);
  return true;
}

/**
 * Update user preferences
 */
export function updatePreferences(preferences: Partial<UserJourney['preferences']>): void {
  const journey = getUserJourney();
  journey.preferences = { ...journey.preferences, ...preferences };
  saveUserJourney(journey);
}

/**
 * Check if team is favorite
 */
export function isFavoriteTeam(team: string): boolean {
  const journey = getUserJourney();
  return journey.favoriteTeams.includes(team);
}

/**
 * Check if city is favorite
 */
export function isFavoriteCity(cityId: string): boolean {
  const journey = getUserJourney();
  return journey.favoriteCities.includes(cityId);
}

/**
 * Check if match is favorite
 */
export function isFavoriteMatch(matchId: string): boolean {
  const journey = getUserJourney();
  return journey.favoriteMatches.includes(matchId);
}

/**
 * Get statistics
 */
export function getJourneyStats() {
  const journey = getUserJourney();
  
  return {
    totalTeams: journey.favoriteTeams.length,
    totalCities: journey.favoriteCities.length,
    totalMatches: journey.favoriteMatches.length,
    totalRoutes: journey.savedRoutes.length,
    totalDistance: journey.savedRoutes.reduce((sum, r) => sum + r.totalDistance, 0),
    totalCost: journey.savedRoutes.reduce((sum, r) => sum + r.estimatedCost, 0),
  };
}

/**
 * Export journey data
 */
export function exportJourney(): string {
  const journey = getUserJourney();
  return JSON.stringify(journey, null, 2);
}

/**
 * Import journey data
 */
export function importJourney(jsonData: string): boolean {
  try {
    const journey = JSON.parse(jsonData);
    saveUserJourney(journey);
    return true;
  } catch (error) {
    console.error('Error importing journey:', error);
    return false;
  }
}

/**
 * List of popular teams
 */
export const POPULAR_TEAMS = [
  'Argentina', 'Brazil', 'France', 'Germany', 'Spain', 'England',
  'Portugal', 'Netherlands', 'Italy', 'Belgium', 'Uruguay', 'Mexico',
  'USA', 'Canada', 'Japan', 'South Korea', 'Morocco', 'Croatia',
  'Denmark', 'Switzerland', 'Poland', 'Serbia', 'Wales', 'Ecuador'
];

