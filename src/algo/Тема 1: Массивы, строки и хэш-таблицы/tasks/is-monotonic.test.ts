import { describe, it, expect } from "vitest";
import { isMonotonic } from "./is-monotonic";

describe("isMonotonic", () => {
  it("returns true for non-decreasing array with duplicates", () => {
    expect(isMonotonic([1, 2, 2, 3])).toBe(true);
  });

  it("returns true for non-increasing array with duplicates", () => {
    expect(isMonotonic([6, 5, 4, 4])).toBe(true);
  });

  it("returns false for non-monotonic array", () => {
    expect(isMonotonic([1, 3, 2])).toBe(false);
  });

  it("returns true for strictly increasing array", () => {
    expect(isMonotonic([1, 2, 3, 4])).toBe(true);
  });

  it("returns true for strictly decreasing array", () => {
    expect(isMonotonic([4, 3, 2, 1])).toBe(true);
  });

  it("returns true when all elements equal", () => {
    expect(isMonotonic([5, 5, 5, 5])).toBe(true);
  });

  it("returns true for single element", () => {
    expect(isMonotonic([42])).toBe(true);
  });

  it("returns true for empty array", () => {
    expect(isMonotonic([])).toBe(true);
  });

  it("returns true for two increasing elements", () => {
    expect(isMonotonic([1, 2])).toBe(true);
  });

  it("returns true for two decreasing elements", () => {
    expect(isMonotonic([2, 1])).toBe(true);
  });

  it("returns false for valley shape", () => {
    expect(isMonotonic([3, 1, 2])).toBe(false);
  });

  it("returns false for peak shape", () => {
    expect(isMonotonic([1, 3, 2])).toBe(false);
  });
});
