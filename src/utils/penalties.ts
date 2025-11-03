import { TravelSegment, Warning } from '../data/types';

export interface PenaltyResult {
  totalPenalty: number;
  warnings: Warning[];
}

export function calculateSegmentPenalty(
  segment: TravelSegment,
  restHours: number
): PenaltyResult {
  let penalty = 0;
  const warnings: Warning[] = [];

  // Time penalty (base travel duration)
  penalty += segment.durationHours * 1.5;

  // Cost penalty
  penalty += segment.estimatedCost * 0.001;

  // Border crossing penalty
  if (segment.crossBorder) {
    penalty += 3.0; // Assume 2-hour delay at border
    warnings.push({
      type: 'border',
      severity: 'yellow',
      message: `Border crossing between ${segment.from.name} and ${segment.to.name} - allow extra time for customs`,
    });
  }

  // Timezone jump penalty
  const tzDelta = Math.abs(segment.timezoneDelta);
  if (tzDelta > 1) {
    penalty += tzDelta * 1.2;
    warnings.push({
      type: 'timezone',
      severity: 'yellow',
      message: `${tzDelta}-hour timezone change - jet lag risk`,
    });
  }

  // Rest time penalty
  if (restHours < 8) {
    const restDeficit = 8 - restHours;
    penalty += restDeficit * 2.0;
    warnings.push({
      type: 'rest',
      severity: 'red',
      message: `Only ${restHours.toFixed(1)} hours rest - insufficient recovery time`,
    });
  } else if (restHours < 12) {
    warnings.push({
      type: 'rest',
      severity: 'yellow',
      message: `${restHours.toFixed(1)} hours rest - minimal recovery time`,
    });
  }

  // Long distance penalty
  if (segment.distance > 1000) {
    penalty += (segment.distance - 1000) * 0.001;
    warnings.push({
      type: 'distance',
      severity: 'yellow',
      message: `Long journey (${segment.distance} miles) - exhausting travel`,
    });
  }

  // High cost warning
  if (segment.estimatedCost > 500) {
    warnings.push({
      type: 'cost',
      severity: 'yellow',
      message: `Expensive segment ($${segment.estimatedCost}) - consider booking early`,
    });
  }

  return {
    totalPenalty: penalty,
    warnings,
  };
}

export function calculateTotalPenalty(
  segments: TravelSegment[],
  restHours: number[]
): PenaltyResult {
  let totalPenalty = 0;
  const allWarnings: Warning[] = [];

  segments.forEach((segment, index) => {
    const rest = restHours[index] || 24; // Default 24 hours if not specified
    const result = calculateSegmentPenalty(segment, rest);
    totalPenalty += result.totalPenalty;
    allWarnings.push(...result.warnings.map(w => ({ ...w, segmentIndex: index })));
  });

  return {
    totalPenalty,
    warnings: allWarnings,
  };
}

// Calculate experience score (higher is better)
export function calculateExperienceScore(
  segments: TravelSegment[],
  restHours: number[],
  uniqueCities: number
): number {
  let score = 0;

  // Bonus for visiting multiple cities
  score += uniqueCities * 10;

  // Bonus for adequate rest
  restHours.forEach(hours => {
    if (hours >= 24) score += 5; // Full day rest
    else if (hours >= 12) score += 2; // Half day rest
  });

  // Deduction for excessive travel
  const totalDistance = segments.reduce((sum, seg) => sum + seg.distance, 0);
  if (totalDistance > 5000) {
    score -= (totalDistance - 5000) * 0.01;
  }

  // Deduction for border crossings
  const borderCrossings = segments.filter(seg => seg.crossBorder).length;
  score -= borderCrossings * 2;

  return Math.max(0, Math.round(score));
}



