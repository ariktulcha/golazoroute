import { Match, City, TravelSegment, Itinerary, RestPeriod } from '../data/types';
import { getCityById } from '../data/cities';
import {
  calculateDistance,
  determineTravelMode,
  estimateFlightDuration,
  estimateDrivingDuration,
  estimateTravelCost,
} from './distance';
import { calculateTotalPenalty } from './penalties';

function isBorderCrossing(city1: City, city2: City): boolean {
  return city1.country !== city2.country;
}

function calculateTimezoneDelta(city1: City, city2: City): number {
  return city2.timezoneOffset - city1.timezoneOffset;
}

function createTravelSegment(fromCity: City, toCity: City): TravelSegment {
  const distance = calculateDistance(
    fromCity.coordinates[1],
    fromCity.coordinates[0],
    toCity.coordinates[1],
    toCity.coordinates[0]
  );

  const mode = determineTravelMode(distance);
  const durationHours =
    mode === 'flight'
      ? estimateFlightDuration(distance)
      : estimateDrivingDuration(distance);

  const cost = estimateTravelCost(distance, mode);

  return {
    from: fromCity,
    to: toCity,
    distance,
    durationHours: Math.round(durationHours * 10) / 10,
    estimatedCost: cost,
    mode,
    crossBorder: isBorderCrossing(fromCity, toCity),
    timezoneDelta: calculateTimezoneDelta(fromCity, toCity),
  };
}

function parseMatchDateTime(match: Match): Date {
  return new Date(`${match.date}T${match.time}:00`);
}

function calculateRestHours(
  prevMatch: Match,
  nextMatch: Match,
  travelDuration: number
): number {
  const prevMatchEnd = parseMatchDateTime(prevMatch).getTime() + 3 * 60 * 60 * 1000; // +3 hours for match
  const nextMatchStart = parseMatchDateTime(nextMatch).getTime();
  
  const availableTime = (nextMatchStart - prevMatchEnd) / (1000 * 60 * 60); // Convert to hours
  const restHours = availableTime - travelDuration;
  
  return Math.max(0, restHours);
}

export function optimizeItinerary(matches: Match[]): Itinerary {
  if (matches.length === 0) {
    return {
      id: 'empty',
      matches: [],
      segments: [],
      totalCost: 0,
      totalPenalty: 0,
      totalDistance: 0,
      totalDuration: 0,
      warnings: [],
      restPeriods: [],
    };
  }

  // Sort matches by date and time
  const sortedMatches = [...matches].sort((a, b) => {
    const dateA = parseMatchDateTime(a).getTime();
    const dateB = parseMatchDateTime(b).getTime();
    return dateA - dateB;
  });

  const segments: TravelSegment[] = [];
  const restHours: number[] = [];
  const restPeriods: RestPeriod[] = [];

  // Create travel segments between consecutive matches
  for (let i = 0; i < sortedMatches.length - 1; i++) {
    const currentMatch = sortedMatches[i];
    const nextMatch = sortedMatches[i + 1];

    const currentCity = getCityById(currentMatch.cityId)!;
    const nextCity = getCityById(nextMatch.cityId)!;

    // Only create segment if cities are different
    if (currentCity.id !== nextCity.id) {
      const segment = createTravelSegment(currentCity, nextCity);
      segments.push(segment);

      const rest = calculateRestHours(
        currentMatch,
        nextMatch,
        segment.durationHours
      );
      restHours.push(rest);

      restPeriods.push({
        city: nextCity,
        hours: rest,
        adequate: rest >= 8,
      });
    } else {
      // Same city, calculate rest without travel
      const prevMatchEnd = parseMatchDateTime(currentMatch).getTime() + 3 * 60 * 60 * 1000;
      const nextMatchStart = parseMatchDateTime(nextMatch).getTime();
      const rest = (nextMatchStart - prevMatchEnd) / (1000 * 60 * 60);
      
      restPeriods.push({
        city: currentCity,
        hours: rest,
        adequate: rest >= 8,
      });
    }
  }

  // Calculate totals
  const totalDistance = segments.reduce((sum, seg) => sum + seg.distance, 0);
  const totalDuration = segments.reduce((sum, seg) => sum + seg.durationHours, 0);
  const totalCost =
    segments.reduce((sum, seg) => sum + seg.estimatedCost, 0) +
    sortedMatches.length * 150; // Add hotel costs ($150/night average)

  // Calculate penalties and warnings
  const penaltyResult = calculateTotalPenalty(segments, restHours);

  return {
    id: `itinerary-${Date.now()}`,
    matches: sortedMatches,
    segments,
    totalCost,
    totalPenalty: penaltyResult.totalPenalty,
    totalDistance,
    totalDuration,
    warnings: penaltyResult.warnings,
    restPeriods,
  };
}

// Simple nearest-neighbor optimization for route order
export function optimizeMatchOrder(matches: Match[]): Match[] {
  if (matches.length <= 1) return matches;

  // Sort by date first
  const sorted = [...matches].sort((a, b) => {
    const dateA = parseMatchDateTime(a).getTime();
    const dateB = parseMatchDateTime(b).getTime();
    return dateA - dateB;
  });

  // Group by date
  const byDate: { [key: string]: Match[] } = {};
  sorted.forEach(match => {
    if (!byDate[match.date]) byDate[match.date] = [];
    byDate[match.date].push(match);
  });

  // For matches on the same date, prefer same city or nearby cities
  const optimized: Match[] = [];
  let lastCity: string | null = null;

  Object.keys(byDate)
    .sort()
    .forEach(date => {
      const dayMatches = byDate[date];
      if (dayMatches.length === 1) {
        optimized.push(dayMatches[0]);
        lastCity = dayMatches[0].cityId;
      } else {
        // Prioritize matches in the same city as last match
        const sameCityMatch = lastCity
          ? dayMatches.find(m => m.cityId === lastCity)
          : null;
        
        if (sameCityMatch) {
          optimized.push(sameCityMatch);
        } else {
          // Find nearest city
          if (lastCity) {
            const lastCityData = getCityById(lastCity)!;
            dayMatches.sort((a, b) => {
              const cityA = getCityById(a.cityId)!;
              const cityB = getCityById(b.cityId)!;
              const distA = calculateDistance(
                lastCityData.coordinates[1],
                lastCityData.coordinates[0],
                cityA.coordinates[1],
                cityA.coordinates[0]
              );
              const distB = calculateDistance(
                lastCityData.coordinates[1],
                lastCityData.coordinates[0],
                cityB.coordinates[1],
                cityB.coordinates[0]
              );
              return distA - distB;
            });
          }
          optimized.push(dayMatches[0]);
          lastCity = dayMatches[0].cityId;
        }
      }
    });

  return optimized;
}



