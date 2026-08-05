export function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0;

  let count = 0;

  for (let index = 0; index < nums.length; index++) {
    const n = nums[index];

    if (n === 1) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 0;
    }
  }

  return max;
}
