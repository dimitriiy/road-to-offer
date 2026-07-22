import { describe, it, expect } from "vitest";
import { threeSum } from "./three-sum";

describe("threeSum", () => {
  it("returns [] for empty array", () => {
    expect(threeSum([])).toEqual([]);
  });

  it("returns [] for fewer than 3 elements", () => {
    expect(threeSum([1, 2])).toEqual([]);
  });

  it("finds two distinct triplets", () => {
    const result = threeSum([-1, 0, 1, 2, -1, -4]);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([-1, -1, 2]),
        expect.arrayContaining([-1, 0, 1]),
      ]),
    );
    expect(result).toHaveLength(2);
  });

  it("returns [] when no triplet sums to 0", () => {
    expect(threeSum([0, 1, 1])).toEqual([]);
  });

  it("returns single triplet of zeros", () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  it("does not return duplicate triplets", () => {
    const result = threeSum([-1, -1, -1, 0, 0, 0, 1, 1, 1]);
    const normalized = result.map((t) =>
      [...t].sort((a, b) => a - b).join(","),
    );
    expect(new Set(normalized).size).toBe(result.length);
  });

  it("handles all negative numbers", () => {
    expect(threeSum([-3, -2, -1])).toEqual([]);
  });

  it("handles all positive numbers", () => {
    expect(threeSum([1, 2, 3])).toEqual([]);
  });

  it("finds triplet with large negatives", () => {
    expect(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 4])).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([-4, 2, 2]),
        expect.arrayContaining([-2, 0, 2]),
        expect.arrayContaining([-2, -2, 4]),
      ]),
    );
  });
});
