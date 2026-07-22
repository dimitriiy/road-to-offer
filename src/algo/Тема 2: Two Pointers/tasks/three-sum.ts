export function threeSum(nums: number[]): number[][] {
  if (!nums.length) return [];

  const sorted = nums.sort((a, b) => a - b);

  const result: number[][] = [];

  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;

    const current = sorted[i];
    let left = i + 1;
    let right = sorted.length - 1;

    while (left < right) {
      const leftEl = sorted[left];
      const rightEl = sorted[right];

      const sum = sorted[i] + sorted[left] + sorted[right];

      if (sum === 0) {
        result.push([current, leftEl, rightEl]);
        left++;
        right--;

        while (left < right && sorted[left] === sorted[left - 1]) left++;
        while (left < right && sorted[right] === sorted[right + 1]) right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
}
