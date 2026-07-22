import { describe, it, expect } from "vitest";
import { bfs, graph } from "./bfs";

describe("bfs", () => {
  it("traverses graph from root in BFS order", () => {
    expect(bfs(graph, "A")).toEqual(["A", "B", "C", "D", "E", "F"]);
  });

  it("traverses from middle node", () => {
    expect(bfs(graph, "B")).toEqual(["B", "D", "E", "F"]);
  });

  it("returns single node for leaf without neighbors", () => {
    expect(bfs(graph, "D")).toEqual(["D"]);
  });

  it("returns single node for sink node", () => {
    expect(bfs(graph, "F")).toEqual(["F"]);
  });

  it("visits shared node only once", () => {
    const order = bfs(graph, "A");
    const fOccurrences = order.filter((n) => n === "F");
    expect(fOccurrences).toHaveLength(1);
  });

  it("does not revisit nodes (no infinite loop on cycles)", () => {
    const cyclicGraph = {
      A: ["B"],
      B: ["C"],
      C: ["A"],
      D: [],
      E: [],
      F: [],
    } as const;
    expect(bfs(cyclicGraph, "A")).toEqual(["A", "B", "C"]);
  });

  it("handles isolated nodes not reachable from start", () => {
    const order = bfs(graph, "D");
    expect(order).not.toContain("A");
    expect(order).not.toContain("F");
  });
});
