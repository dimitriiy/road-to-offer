import { describe, it, expect } from "vitest";
import { maxArea } from "./container-with-most-water";

describe("maxArea", () => {
  it("returns 49 for example [1,8,6,2,5,4,8,3,7]", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it("returns 1 for [1,1]", () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  it("returns 0 for empty array", () => {
    expect(maxArea([])).toBe(0);
  });

  it("returns 0 for single element", () => {
    expect(maxArea([5])).toBe(0);
  });

  it("returns area for strictly increasing heights", () => {
    expect(maxArea([1, 2, 3, 4, 5])).toBe(6);
  });

  it("returns area for strictly decreasing heights", () => {
    expect(maxArea([5, 4, 3, 2, 1])).toBe(6);
  });

  it("handles all same heights", () => {
    expect(maxArea([5, 5, 5, 5])).toBe(15);
  });

  it("handles large gap with small heights", () => {
    expect(maxArea([3, 6, 1])).toBe(3);
  });

  it("handles two elements with large difference", () => {
    expect(maxArea([1, 100])).toBe(1);
  });

  it("prefers wider container over taller narrow one", () => {
    expect(maxArea([2, 3, 4, 5, 18, 17, 6])).toBe(17);
  });
});
