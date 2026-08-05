import { describe, it, expect } from "vitest";
import { search } from "./704-binary-search";

describe("search (704. Binary Search)", () => {
  it("returns index when target exists (example 1)", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  it("returns -1 when target does not exist (example 2)", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });

  it("finds first element", () => {
    expect(search([-1, 0, 3, 5, 9, 12], -1)).toBe(0);
  });

  it("finds last element", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 12)).toBe(5);
  });

  it("finds middle element", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 3)).toBe(2);
  });

  it("handles single-element array hit", () => {
    expect(search([5], 5)).toBe(0);
  });

  it("handles single-element array miss", () => {
    expect(search([5], 2)).toBe(-1);
  });

  it("handles empty array", () => {
    expect(search([], 1)).toBe(-1);
  });

  it("returns -1 for target smaller than all elements", () => {
    expect(search([2, 4, 6, 8], 1)).toBe(-1);
  });

  it("returns -1 for target larger than all elements", () => {
    expect(search([2, 4, 6, 8], 10)).toBe(-1);
  });

  it("handles two-element array hit", () => {
    expect(search([1, 3], 3)).toBe(1);
  });

  it("handles two-element array miss", () => {
    expect(search([1, 3], 2)).toBe(-1);
  });

  it("handles array with duplicates returning a valid index", () => {
    const result = search([1, 2, 2, 2, 3], 2);
    expect([1, 2, 3]).toContain(result);
  });

  it("handles negative numbers", () => {
    expect(search([-10, -5, -3, -1], -5)).toBe(1);
  });
});
