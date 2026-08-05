/**
 * LeetCode 74. Search a 2D Matrix
 *
 * Given an `m x n` integer `matrix` with two properties:
 *  - Each row is sorted in non-decreasing order.
 *  - The first integer of each row is greater than the last integer of the previous row.
 *
 * Return `true` if `target` is in `matrix`, or `false` otherwise.
 *
 * Runtime complexity must be O(log(m * n)).
 *
 * @param matrix - m x n matrix satisfying the two properties above.
 * @param target - Value to search for.
 * @returns `true` if `target` is present, `false` otherwise.
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;

  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    let col = middle % n;
    let row = Math.floor(middle / n);
    const val = matrix[row][col];

    if (val === target) return true;

    if (val > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return false;
}
// Input: matrix = [[1,3,5,7],
//                  [10,11,16,20],
//                  [23,30,34,60]], target = 3
// Output: true
