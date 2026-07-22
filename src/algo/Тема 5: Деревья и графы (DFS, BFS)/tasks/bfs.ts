const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
} as const;

type Keys = keyof typeof graph;

/**
 * Performs breadth-first search (BFS) on a directed graph
 * represented as an adjacency list.
 *
 * @param graph - adjacency list where each key maps to its neighbors
 * @param start - node to start traversal from
 * @returns array of nodes in BFS visit order
 * @throws {Error} if start node is not a key of graph
 */
export function bfs<T extends Record<Keys, readonly Keys[]>>(
  graph: T,
  start: Keys,
): Keys[] {
  const queue: Keys[] = [];
  const visited = new Set<Keys>();

  queue.push(start);
  visited.add(start);

  const order: Keys[] = []; // порядок обхода

  while (queue.length) {
    const node = queue.shift()!;
    order.push(node);

    const neighbors = graph[node] ?? [];

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return order;
}

export { graph };
export type { Keys };
