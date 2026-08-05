import { describe, it, expect } from "vitest";
import { searchMatrix } from "./74-search-a-2d-matrix";

describe("searchMatrix (74. Search a 2D Matrix)", () => {
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ];

  it("returns true when target exists (example 1)", () => {
    expect(searchMatrix(matrix, 3)).toBe(true);
  });

  // it("returns false when target does not exist (example 2)", () => {
  //   expect(searchMatrix(matrix, 13)).toBe(false);
  // });

  // it("finds first element of matrix", () => {
  //   expect(searchMatrix(matrix, 1)).toBe(true);
  // });

  // it("finds last element of matrix", () => {
  //   expect(searchMatrix(matrix, 60)).toBe(true);
  // });

  // it("finds first element of last row", () => {
  //   expect(searchMatrix(matrix, 23)).toBe(true);
  // });

  // it("finds last element of first row", () => {
  //   expect(searchMatrix(matrix, 7)).toBe(true);
  // });

  // it("finds middle element", () => {
  //   expect(searchMatrix(matrix, 16)).toBe(true);
  // });

  // it("returns false for target smaller than all elements", () => {
  //   expect(searchMatrix(matrix, 0)).toBe(false);
  // });

  // it("returns false for target larger than all elements", () => {
  //   expect(searchMatrix(matrix, 100)).toBe(false);
  // });

  // it("returns false for gap between rows", () => {
  //   expect(searchMatrix(matrix, 21)).toBe(false);
  // });

  // it("returns false for gap within a row", () => {
  //   expect(searchMatrix(matrix, 6)).toBe(false);
  // });

  // it("handles single-row matrix hit", () => {
  //   expect(searchMatrix([[1, 2, 3, 4]], 3)).toBe(true);
  // });

  // it("handles single-row matrix miss", () => {
  //   expect(searchMatrix([[1, 2, 3, 4]], 5)).toBe(false);
  // });

  // it("handles single-column matrix hit", () => {
  //   expect(searchMatrix([[1], [2], [3], [4]], 3)).toBe(true);
  // });

  // it("handles single-column matrix miss", () => {
  //   expect(searchMatrix([[1], [2], [3], [4]], 0)).toBe(false);
  // });

  // it("handles single-element matrix hit", () => {
  //   expect(searchMatrix([[5]], 5)).toBe(true);
  // });

  // it("handles single-element matrix miss", () => {
  //   expect(searchMatrix([[5]], 1)).toBe(false);
  // });

  // it("handles matrix with negative numbers hit", () => {
  //   expect(
  //     searchMatrix(
  //       [
  //         [-10, -8, -5],
  //         [-3, -1, 0],
  //         [2, 4, 6],
  //       ],
  //       -1,
  //     ),
  //   ).toBe(true);
  // });

  // it("handles matrix with negative numbers miss", () => {
  //   expect(
  //     searchMatrix(
  //       [
  //         [-10, -8, -5],
  //         [-3, -1, 0],
  //         [2, 4, 6],
  //       ],
  //       -4,
  //     ),
  //   ).toBe(false);
  // });

  // it("handles two-row matrix boundary", () => {
  //   expect(
  //     searchMatrix(
  //       [
  //         [1, 3],
  //         [5, 7],
  //       ],
  //       5,
  //     ),
  //   ).toBe(true);
  // });
});
