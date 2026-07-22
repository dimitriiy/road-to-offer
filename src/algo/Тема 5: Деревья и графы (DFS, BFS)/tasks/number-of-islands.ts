/**
 * Counts the number of islands in a 2D binary grid.
 * An island is a group of '1's (land) connected horizontally or vertically,
 * surrounded by '0's (water).
 *
 * @param grid - m x n matrix of '1' (land) and '0' (water)
 * @returns number of distinct islands
 */
export function numIslands(grid: string[][]): number {
  const LAND = "1";
  const WATER = "0";
  const VISITED = "v";

  const rows = grid.length;
  const cols = grid[0].length;

  let count = 0;

  function dfs(x: number, y: number) {
    if (x < 0 || x >= rows || y < 0 || y >= cols) {
      return;
    }

    if (grid[x][y] === VISITED || grid[x][y] === WATER) {
      return;
    }

    if (grid[x][y] === LAND) {
      grid[x][y] = VISITED;
    }

    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === LAND) {
        count++;

        dfs(i, j);
      }
    }
  }

  return count;
}
