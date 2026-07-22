import { describe, it, expect } from "vitest";
import { twoSum2 } from "./two-sum2";

describe("twoSum2", () => {
  it("finds pair [2,7]", () => {
    expect(twoSum2([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  it("finds pair [1,3]", () => {
    expect(twoSum2([2, 3, 4], 6)).toEqual([1, 3]);
  });

  it("finds pair [-1,1]", () => {
    expect(twoSum2([-1, 0], -1)).toEqual([1, 2]);
  });

  it("returns [] for no pair", () => {
    expect(twoSum2([1, 2, 3], 10)).toEqual([]);
  });

  it("returns [] for empty array", () => {
    expect(twoSum2([], 5)).toEqual([]);
  });

  it("returns [] for single element", () => {
    expect(twoSum2([5], 10)).toEqual([]);
  });

  it("handles large numbers", () => {
    expect(twoSum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19)).toEqual([9, 10]);
  });
});
