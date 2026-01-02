import { Position } from './types';

/**
 * Calculate distance between two geographic points using Haversine formula
 * @param pos1 First position
 * @param pos2 Second position
 * @returns Distance in meters
 */
export function calculateDistance(pos1: Position, pos2: Position): number {
  const R = 6371000; // Earth's radius in meters
  const φ1 = (pos1.lat * Math.PI) / 180;
  const φ2 = (pos2.lat * Math.PI) / 180;
  const Δφ = ((pos2.lat - pos1.lat) * Math.PI) / 180;
  const Δλ = ((pos2.lng - pos1.lng) * Math.PI) / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

/**
 * Get center point of multiple positions
 * @param positions Array of positions
 * @returns Center position
 */
export function getCenterPoint(positions: Position[]): Position {
  if (positions.length === 0) {
    return { lat: 0, lng: 0 };
  }

  const sum = positions.reduce(
    (acc, pos) => ({
      lat: acc.lat + pos.lat,
      lng: acc.lng + pos.lng,
    }),
    { lat: 0, lng: 0 }
  );

  return {
    lat: sum.lat / positions.length,
    lng: sum.lng / positions.length,
  };
}

/**
 * Format position for display
 * @param position Position to format
 * @param decimals Number of decimal places
 * @returns Formatted string
 */
export function formatPosition(position: Position, decimals: number = 6): string {
  return `${position.lat.toFixed(decimals)}, ${position.lng.toFixed(decimals)}`;
}

/**
 * Check if position is within bounds
 * @param position Position to check
 * @param bounds Bounds array [minLat, minLng, maxLat, maxLng]
 * @returns True if position is within bounds
 */
export function isPositionInBounds(position: Position, bounds: [number, number, number, number]): boolean {
  const [minLat, minLng, maxLat, maxLng] = bounds;
  return position.lat >= minLat && position.lat <= maxLat && position.lng >= minLng && position.lng <= maxLng;
}
