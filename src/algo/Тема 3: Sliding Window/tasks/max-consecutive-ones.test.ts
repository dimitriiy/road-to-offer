import { describe, it, expect } from "vitest";
import { findMaxConsecutiveOnes } from "./max-consecutive-ones";

describe("findMaxConsecutiveOnes", () => {
  it("returns 3 for [1,1,0,1,1,1]", () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
  });

  it("returns 2 for [1,0,1,1,0,1]", () => {
    expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toBe(2);
  });

  it("returns 0 for all zeros", () => {
    expect(findMaxConsecutiveOnes([0, 0, 0])).toBe(0);
  });

  it("returns n for all ones", () => {
    expect(findMaxConsecutiveOnes([1, 1, 1, 1])).toBe(4);
  });

  it("returns 1 for single one", () => {
    expect(findMaxConsecutiveOnes([1])).toBe(1);
  });

  it("returns 0 for single zero", () => {
    expect(findMaxConsecutiveOnes([0])).toBe(0);
  });

  it("returns 0 for empty array", () => {
    expect(findMaxConsecutiveOnes([])).toBe(0);
  });

  it("returns 1 for alternating", () => {
    expect(findMaxConsecutiveOnes([1, 0, 1, 0, 1])).toBe(1);
  });

  it("returns max at end", () => {
    expect(findMaxConsecutiveOnes([0, 0, 1, 1, 1])).toBe(3);
  });

  it("returns max at start", () => {
    expect(findMaxConsecutiveOnes([1, 1, 1, 0, 0])).toBe(3);
  });
});
