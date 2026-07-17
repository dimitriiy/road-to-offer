import { assert } from "vitest";

/**
 * Performs a flood fill on the image starting from the pixel (sr, sc).
 * Uses DFS to find all 4-directionally connected pixels with the same original color.
 *
 * @param image - m x n grid of integers representing the image
 * @param sr - starting row
 * @param sc - starting column
 * @param color - new color to fill
 * @returns modified image after flood fill
 */
export function floodFillRec(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  const parentColor = image[sr][sc];

  if (parentColor === color) return image;

  const dfs = (sr: number, sc: number) => {
    if (
      sr > image.length - 1 ||
      sc > image[0].length - 1 ||
      sc < 0 ||
      sr < 0 ||
      image[sr][sc] !== parentColor
    ) {
      return;
    }

    image[sr][sc] = color;

    dfs(sr - 1, sc);
    dfs(sr + 1, sc);
    dfs(sr, sc + 1);
    dfs(sr, sc - 1);
  };

  dfs(sr, sc);

  return image;
}

export function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  const originalColor = image[sr][sc];

  if (originalColor === color) return image;

  const rows = image.length;
  const cols = image[0].length;
  const stack: Array<[number, number]> = [[sr, sc]];

  while (stack.length) {
    const cell = stack.pop();

    assert(cell);

    const [r, c] = cell;

    if (r < 0 || r >= rows || c < 0 || c >= cols) continue;
    if (image[r][c] !== originalColor) continue;

    image[r][c] = color;

    stack.push([r + 1, c]);
    stack.push([r - 1, c]);
    stack.push([r, c + 1]);
    stack.push([r, c - 1]);
  }

  return image;
}
