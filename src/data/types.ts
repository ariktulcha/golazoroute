export interface City {
  id: string;
  name: string;
  country: 'USA' | 'Mexico' | 'Canada';
  stadium: string;
  capacity: number;
  coordinates: [number, number]; // [longitude, latitude]
  timezone: string;
  timezoneOffset: number; // hours from UTC
  airportCode: string;
  transitScore: 'Low' | 'Medium' | 'High';
  fanZone: string;
  fanZoneDetails?: {
    location: string;
    address?: string;
    transportation: {
      metro?: string[];
      bus?: string[];
      walking?: string;
      parking?: string;
    };
    openingHours?: string;
    description?: string;
    officialWebsite?: string;
  };
  localTips: string[];
  safety: string;
  averageHotelCost: number; // per night in USD
  topAttractions: string[];
  getYourGuideLinks: Array<{ name: string; url: string }>;
  weather: {
    summer: string; // June-July typical weather
    tempRange: string; // Temperature range in F
    description: string;
  };
}

export interface Match {
  id: string;
  matchNumber: number;
  date: string; // ISO format
  time: string; // HH:MM
  cityId: string;
  stage: 'Group' | 'Round of 32' | 'Round of 16' | 'Quarter-final' | 'Semi-final' | 'Third Place' | 'Final';
  group?: string; // A-H for group stage
  homeTeam: string;
  awayTeam: string;
}

export interface TravelSegment {
  from: City;
  to: City;
  distance: number; // miles
  durationHours: number;
  estimatedCost: number; // USD
  mode: 'flight' | 'drive' | 'train';
  crossBorder: boolean;
  timezoneDelta: number;
}

export interface Itinerary {
  id: string;
  matches: Match[];
  segments: TravelSegment[];
  totalCost: number;
  totalPenalty: number;
  totalDistance: number;
  totalDuration: number;
  warnings: Warning[];
  restPeriods: RestPeriod[];
}

export interface Warning {
  type: 'rest' | 'border' | 'distance' | 'timezone' | 'cost';
  severity: 'red' | 'yellow';
  message: string;
  segmentIndex?: number;
}

export interface RestPeriod {
  city: City;
  hours: number;
  adequate: boolean;
}

export type ViewMode = 'optimizer' | 'explorer' | 'schedule' | 'follow-team' | 'destination-info' | 'journey' | 'budget' | 'transportation' | 'weather' | 'visa' | 'blog' | 'funzone' | 'cities-info' | 'recommended-routes' | 'route-plan' | 'stadiums' | 'cities-archive' | 'road-to-final';

export interface CityStay {
  city: City;
  arrivalDate: string;
  departureDate: string;
  nights: number;
  matches: Match[];
  restHours: number;
}

export interface TeamRoute {
  teamName: string;
  matches: Match[];
  description: string;
}



