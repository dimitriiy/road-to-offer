import { describe, it, expect } from "vitest";
import { findMaxAverage } from "./maximum-average-subarray-i";

describe("findMaxAverage", () => {
  // it("returns element value when k = 1 for single element", () => {
  //   expect(findMaxAverage([5], 1)).toBe(5);
  // });

  it("returns max average for example 1", () => {
    expect(
      findMaxAverage(
        [
          8860, -853, 6534, 4477, -4589, 8646, -6155, -5577, -1656, -5779,
          -2619, -8604, -1358, -8009, 4983, 7063, 3104, -1560, 4080, 2763, 5616,
          -2375, 2848, 1394, -7173, -5225, -8244, -809, 8025, -4072, -4391,
          -9579, 1407, 6700, 2421, -6685, 5481, -1732, -8892, -6645, 3077, 3287,
          -4149, 8701, -4393, -9070, -1777, 2237, -3253, -506, -4931, -7366,
          -8132, 5406, -6300, -275, -1908, 67, 3569, 1433, -7262, -437, 8303,
          4498, -379, 3054, -6285, 4203, 6908, 4433, 3077, 2288, 9733, -8067,
          3007, 9725, 9669, 1362, -2561, -4225, 5442, -9006, -429, 160, -9234,
          -4444, 3586, -5711, -9506, -79, -4418, -4348, -5891,
        ],
        93,
      ),
    ).toBeCloseTo(-594.58065, 5);
  });

  // it("returns the only possible average when k equals n", () => {
  //   expect(findMaxAverage([1, 2, 3, 4], 4)).toBeCloseTo(2.5, 5);
  // });

  // it("picks the better of two windows", () => {
  //   expect(findMaxAverage([5, 1, 9, 2], 2)).toBeCloseTo(5.5, 5);
  // });

  // it("handles all negative numbers", () => {
  //   expect(findMaxAverage([-3, -1, -2, -5], 2)).toBeCloseTo(-1.5, 5);
  // });

  // it("handles mixed negative and positive", () => {
  //   expect(findMaxAverage([-1, -2, -3, 100], 2)).toBeCloseTo(48.5, 5);
  // });

  // it("handles duplicates", () => {
  //   expect(findMaxAverage([4, 4, 4, 4], 2)).toBeCloseTo(4, 5);
  // });

  // it("handles k = 1 picking max element", () => {
  //   expect(findMaxAverage([1, 2, 3, 4, 5], 1)).toBe(5);
  // });

  // it("handles large negative leading then large positive", () => {
  //   expect(findMaxAverage([-10000, 10000, -10000, 10000], 2)).toBeCloseTo(0, 5);
  // });
});
