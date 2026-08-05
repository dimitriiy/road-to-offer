/**
 * LeetCode 704. Binary Search
 *
 * Given a sorted (ascending) array of integers `nums` and an integer `target`,
 * return the index of `target` if it exists in `nums`. Otherwise, return -1.
 *
 * Runtime complexity must be O(log n).
 *
 * @param nums - Sorted array of integers (ascending order).
 * @param target - Value to search for.
 * @returns Index of `target` in `nums`, or -1 if not present.
 */
let i = 0;

export function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

//[-1, 0, 3, 5, 9, 12]
