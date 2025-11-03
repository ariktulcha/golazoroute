// Haversine formula to calculate distance between two coordinates
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 3959; // Earth's radius in miles
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return Math.round(distance);
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

// Estimate flight duration based on distance
export function estimateFlightDuration(distance: number): number {
  // Average commercial flight speed: 500 mph
  // Add 1 hour for takeoff/landing
  const flightTime = distance / 500 + 1;
  // Add 2 hours for airport time (check-in, security, boarding)
  return flightTime + 2;
}

// Estimate driving duration
export function estimateDrivingDuration(distance: number): number {
  // Average driving speed: 60 mph (accounting for stops)
  return distance / 60;
}

// Determine best travel mode
export function determineTravelMode(distance: number): 'flight' | 'drive' | 'train' {
  if (distance < 200) return 'drive';
  if (distance < 600) return 'train'; // In practice, might still be flight in North America
  return 'flight';
}

// Estimate travel cost based on mode and distance
export function estimateTravelCost(
  distance: number,
  mode: 'flight' | 'drive' | 'train'
): number {
  switch (mode) {
    case 'flight':
      // Base fare + $0.15 per mile
      return Math.round(150 + distance * 0.15);
    case 'train':
      // Base fare + $0.12 per mile
      return Math.round(50 + distance * 0.12);
    case 'drive':
      // Gas + wear and tear: $0.25 per mile
      return Math.round(distance * 0.25);
    default:
      return 0;
  }
}

// Calculate CO2 emissions (kg)
export function calculateCO2(distance: number, mode: 'flight' | 'drive' | 'train'): number {
  // kg CO2 per mile per passenger
  const emissions = {
    flight: 0.24,
    drive: 0.41,
    train: 0.14,
  };
  return Math.round(distance * emissions[mode]);
}



