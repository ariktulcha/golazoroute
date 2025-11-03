/**
 * Trip Storage Utilities
 * Save and load trips from localStorage
 */

import { Match } from '../data/types';

export interface SavedTrip {
  id: string;
  name: string;
  matches: Match[];
  createdAt: string;
  updatedAt: string;
}

const STORAGE_KEY = 'world_cup_trips';

/**
 * Get all saved trips
 */
export function getSavedTrips(): SavedTrip[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading trips:', error);
    return [];
  }
}

/**
 * Save a trip
 */
export function saveTrip(name: string, matches: Match[]): SavedTrip {
  const trips = getSavedTrips();
  
  const trip: SavedTrip = {
    id: Date.now().toString(),
    name,
    matches,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  trips.push(trip);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trips));
  
  return trip;
}

/**
 * Update an existing trip
 */
export function updateTrip(id: string, name: string, matches: Match[]): SavedTrip | null {
  const trips = getSavedTrips();
  const index = trips.findIndex(t => t.id === id);
  
  if (index === -1) return null;
  
  trips[index] = {
    ...trips[index],
    name,
    matches,
    updatedAt: new Date().toISOString(),
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trips));
  return trips[index];
}

/**
 * Delete a trip
 */
export function deleteTrip(id: string): boolean {
  const trips = getSavedTrips();
  const filtered = trips.filter(t => t.id !== id);
  
  if (filtered.length === trips.length) return false;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  return true;
}

/**
 * Get a specific trip by ID
 */
export function getTripById(id: string): SavedTrip | null {
  const trips = getSavedTrips();
  return trips.find(t => t.id === id) || null;
}

/**
 * Export trip to JSON
 */
export function exportTripToJSON(trip: SavedTrip): string {
  return JSON.stringify(trip, null, 2);
}

/**
 * Generate calendar event data for matches
 */
export function generateCalendarEvents(matches: Match[]): string {
  // iCal format
  let ical = 'BEGIN:VCALENDAR\n';
  ical += 'VERSION:2.0\n';
  ical += 'PRODID:-//FIFA World Cup 2026//EN\n';
  ical += 'CALSCALE:GREGORIAN\n';
  
  matches.forEach((match) => {
    const startDate = match.date.replace(/-/g, '');
    const startTime = match.time.replace(':', '') + '00';
    
    ical += 'BEGIN:VEVENT\n';
    ical += `UID:${match.id}@worldcup2026.com\n`;
    ical += `DTSTAMP:${startDate}T${startTime}Z\n`;
    ical += `DTSTART:${startDate}T${startTime}Z\n`;
    ical += `DTEND:${startDate}T${startTime}Z\n`;
    ical += `SUMMARY:${match.homeTeam} vs ${match.awayTeam}\n`;
    ical += `DESCRIPTION:${match.stage} - Group ${match.group || ''}\n`;
    ical += `LOCATION:${match.cityId}\n`;
    ical += 'END:VEVENT\n';
  });
  
  ical += 'END:VCALENDAR';
  
  return ical;
}

/**
 * Download trip as file
 */
export function downloadTrip(trip: SavedTrip, format: 'json' | 'ical' = 'json') {
  let content: string;
  let filename: string;
  let mimeType: string;
  
  if (format === 'json') {
    content = exportTripToJSON(trip);
    filename = `${trip.name.replace(/\s+/g, '_')}.json`;
    mimeType = 'application/json';
  } else {
    content = generateCalendarEvents(trip.matches);
    filename = `${trip.name.replace(/\s+/g, '_')}.ics`;
    mimeType = 'text/calendar';
  }
  
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

