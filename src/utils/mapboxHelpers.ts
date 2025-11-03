/**
 * Mapbox Helper Utilities
 * Enhanced with route optimization, travel times, and POI search
 */

import { City } from '../data/types';

export const MAPBOX_TOKEN = 'pk.eyJ1IjoiYXJpa3R1bGNoYSIsImEiOiJjbWhkeWtmcHMwOHJrMm1zZGlnMDIzbXEyIn0.vb9SVHwsIVRtrz3Ye-BDZw';

/**
 * Calculate driving directions between two cities using Mapbox Directions API
 */
export async function getDirections(
  origin: City,
  destination: City,
  profile: 'driving' | 'walking' | 'cycling' = 'driving'
): Promise<{
  distance: number; // in meters
  duration: number; // in seconds
  geometry: any;
  steps?: any[];
}> {
  const url = `https://api.mapbox.com/directions/v5/mapbox/${profile}/${origin.coordinates[0]},${origin.coordinates[1]};${destination.coordinates[0]},${destination.coordinates[1]}?geometries=geojson&steps=true&access_token=${MAPBOX_TOKEN}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.routes && data.routes.length > 0) {
      const route = data.routes[0];
      return {
        distance: route.distance,
        duration: route.duration,
        geometry: route.geometry,
        steps: route.legs[0]?.steps,
      };
    }
    throw new Error('No route found');
  } catch (error) {
    console.error('Directions API error:', error);
    throw error;
  }
}

/**
 * Calculate travel time matrix between multiple cities
 */
export async function getTravelMatrix(
  cities: City[],
  profile: 'driving' | 'walking' | 'cycling' = 'driving'
): Promise<{
  durations: number[][]; // Matrix of travel times in seconds
  distances: number[][]; // Matrix of distances in meters
}> {
  const limitedCities = cities.slice(0, 25);
  const coordinates = limitedCities
    .map((city) => `${city.coordinates[0]},${city.coordinates[1]}`)
    .join(';');

  const url = `https://api.mapbox.com/directions-matrix/v1/mapbox/${profile}/${coordinates}?annotations=distance,duration&access_token=${MAPBOX_TOKEN}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      durations: data.durations || [],
      distances: data.distances || [],
    };
  } catch (error) {
    console.error('Matrix API error:', error);
    throw error;
  }
}

/**
 * Search for Points of Interest near a city
 */
export async function searchPOI(
  city: City,
  query: string,
  limit: number = 10
): Promise<any[]> {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    query
  )}.json?proximity=${city.coordinates[0]},${city.coordinates[1]}&limit=${limit}&access_token=${MAPBOX_TOKEN}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.features || [];
  } catch (error) {
    console.error('POI search error:', error);
    throw error;
  }
}

/**
 * Format distance for display
 */
export function formatDistance(meters: number): string {
  const miles = meters * 0.000621371;
  const km = meters / 1000;

  if (miles < 1) {
    return `${meters.toFixed(0)} m`;
  } else if (miles < 100) {
    return `${miles.toFixed(1)} mi (${km.toFixed(1)} km)`;
  } else {
    return `${miles.toFixed(0)} mi (${km.toFixed(0)} km)`;
  }
}

/**
 * Format duration for display
 */
export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours === 0) {
    return `${minutes} min`;
  } else if (minutes === 0) {
    return `${hours} hr`;
  } else {
    return `${hours} hr ${minutes} min`;
  }
}

/**
 * Calculate estimated flight time between two cities
 */
export function estimateFlightTime(distanceInMeters: number): {
  flightTime: number; // in minutes
  totalTime: number; // including boarding, taxiing, etc.
} {
  const distanceInMiles = distanceInMeters * 0.000621371;
  const avgSpeed = 525; // mph
  const flightTime = (distanceInMiles / avgSpeed) * 60;
  const totalTime = flightTime + 75; // Add boarding, taxiing, etc.

  return {
    flightTime: Math.round(flightTime),
    totalTime: Math.round(totalTime),
  };
}

/**
 * Estimate travel cost based on distance and mode
 */
export function estimateTravelCost(
  distanceInMeters: number,
  mode: 'flight' | 'drive' | 'train'
): number {
  const miles = distanceInMeters * 0.000621371;

  switch (mode) {
    case 'flight':
      // Base flight cost + per mile
      if (miles < 500) return 150 + miles * 0.3;
      if (miles < 1500) return 200 + miles * 0.25;
      return 250 + miles * 0.2;
    
    case 'drive':
      // Gas + wear & tear (~$0.50/mile)
      return miles * 0.5;
    
    case 'train':
      // Average train cost
      return miles * 0.3;
    
    default:
      return 0;
  }
}

/**
 * Determine best travel mode based on distance
 */
export function getBestTravelMode(distanceInMeters: number): 'flight' | 'drive' | 'train' {
  const miles = distanceInMeters * 0.000621371;
  
  if (miles < 200) return 'drive';
  if (miles < 500) return 'train';
  return 'flight';
}

/**
 * Calculate if border crossing is needed
 */
export function needsBorderCrossing(city1: City, city2: City): boolean {
  return city1.country !== city2.country;
}

/**
 * Get timezone difference between two cities
 */
export function getTimezoneDelta(city1: City, city2: City): number {
  return city2.timezoneOffset - city1.timezoneOffset;
}

