/**
 * Maximize Distance to Closest Person (LeetCode 849).
 *
 * Given a row of seats where `seats[i]` is 1 (person) or 0 (empty), Alex picks
 * an empty seat maximizing the distance to the closest person. Returns that
 * maximum distance.
 *
 * At least one empty seat and at least one person sitting.
 *
 * @param seats - Array of 0s and 1s representing a row of seats.
 * @returns Maximum distance to the closest person for the chosen seat.
 * @throws {Error} TODO: implement
 */
export function maxDistToClosest(seats: number[]): number {
  let maxDist = 0;

  let prev = -1;

  for (let i = 0; i < seats.length; i++) {
    let seat = seats[i];

    if (seat === 1) {
      if (prev === -1) {
        maxDist = Math.max(maxDist, i);
      } else {
        maxDist = Math.max(maxDist, Math.floor((i - prev) / 2));
      }

      prev = i;
    }
  }

  maxDist = Math.max(maxDist, Math.floor(seats.length - 1 - prev));

  return maxDist;
}

// [1, 0, 0, 0]
// Input: seats = [1,0,0,0,1,0,1]
// Output: 2

// [0,0,0,0,1,0,1]
