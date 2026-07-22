import { describe, it, expect } from "vitest";
import { numIslands } from "./number-of-islands";

describe("numIslands", () => {
  it("returns 1 for single connected island (example 1)", () => {
    const grid = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    expect(numIslands(grid)).toBe(1);
  });

  it("returns 3 for three separate islands (example 2)", () => {
    const grid = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    expect(numIslands(grid)).toBe(3);
  });

  // it("returns 0 for grid with only water", () => {
  //   const grid = [
  //     ["0", "0", "0"],
  //     ["0", "0", "0"],
  //   ];
  //   expect(numIslands(grid)).toBe(0);
  // });

  // it("returns count equal to cells when all land is isolated diagonally", () => {
  //   const grid = [
  //     ["1", "0", "1"],
  //     ["0", "1", "0"],
  //     ["1", "0", "1"],
  //   ];
  //   expect(numIslands(grid)).toBe(5);
  // });

  // it("returns 1 when entire grid is land", () => {
  //   const grid = [
  //     ["1", "1"],
  //     ["1", "1"],
  //   ];
  //   expect(numIslands(grid)).toBe(1);
  // });

  // it("handles single-cell land", () => {
  //   expect(numIslands([["1"]])).toBe(1);
  // });

  // it("handles single-cell water", () => {
  //   expect(numIslands([["0"]])).toBe(0);
  // });

  // it("handles single row of alternating land/water", () => {
  //   expect(numIslands([["1", "0", "1", "0", "1"]])).toBe(3);
  // });

  // it("handles single column of alternating land/water", () => {
  //   expect(numIslands([["1"], ["0"], ["1"], ["0"], ["1"]])).toBe(3);
  // });

  // it("counts vertically connected cells as one island", () => {
  //   const grid = [
  //     ["1", "0"],
  //     ["1", "0"],
  //     ["1", "0"],
  //   ];
  //   expect(numIslands(grid)).toBe(1);
  // });

  // it("counts islands connected diagonally as separate", () => {
  //   const grid = [
  //     ["1", "0", "0"],
  //     ["0", "1", "0"],
  //     ["0", "0", "1"],
  //   ];
  //   expect(numIslands(grid)).toBe(3);
  // });

  // it("handles empty grid", () => {
  //   expect(numIslands([])).toBe(0);
  // });

  // it("handles grid with empty rows", () => {
  //   expect(numIslands([[], []])).toBe(0);
  // });
});
