import { describe, it, expect } from "vitest";
import { longestConsecutive } from "./longest-consecutive-sequence";

describe("longestConsecutive", () => {
  it("returns 0 for empty array", () => {
    expect(longestConsecutive([])).toBe(0);
  });

  it("returns 1 for single element", () => {
    expect(longestConsecutive([1])).toBe(1);
  });

  it("finds sequence of length 4", () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  it("handles duplicates", () => {
    expect(longestConsecutive([1, 2, 2, 3])).toBe(3);
  });

  it("finds longest sequence with negative numbers", () => {
    expect(longestConsecutive([0, -1])).toBe(2);
  });

  it("finds sequence of length 9", () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
  });
});
