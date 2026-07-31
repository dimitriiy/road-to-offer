import { describe, it, expect } from "vitest";
import { minSubArrayLen } from "./minimum-size-subarray-sum";

describe("minSubArrayLen", () => {
  it("returns 2 for example 1", () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
  });
  it("returns 1 when a single element reaches target", () => {
    expect(minSubArrayLen(4, [1, 4, 4])).toBe(1);
  });
  it("returns 0 when no subarray sums to target", () => {
    expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0);
  });
  it("returns full array length when whole array is required", () => {
    expect(minSubArrayLen(15, [1, 2, 3, 4, 5])).toBe(5);
  });
  it("returns 1 when first element already meets target", () => {
    expect(minSubArrayLen(5, [10, 1, 1, 1])).toBe(1);
  });
  it("returns 0 for empty nums array", () => {
    expect(minSubArrayLen(3, [])).toBe(0);
  });
  it("returns 1 when last element alone meets target", () => {
    expect(minSubArrayLen(6, [1, 1, 1, 1, 6])).toBe(1);
  });
  it("handles minimal valid subarray in the middle", () => {
    expect(minSubArrayLen(9, [1, 1, 1, 5, 5, 1, 1, 1])).toBe(2);
  });
  it("returns 0 when target exceeds total sum", () => {
    expect(minSubArrayLen(100, [1, 2, 3])).toBe(0);
  });
  it("returns length 1 when any single element equals target", () => {
    expect(minSubArrayLen(3, [3, 3, 3])).toBe(1);
  });
});
