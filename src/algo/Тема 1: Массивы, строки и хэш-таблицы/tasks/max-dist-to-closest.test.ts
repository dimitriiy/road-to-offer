import { describe, it, expect } from "vitest";
import { maxDistToClosest } from "./max-dist-to-closest";

describe("maxDistToClosest", () => {
  it("returns 2 for example [1,0,0,0,1,0,1]", () => {
    expect(maxDistToClosest([1, 0, 0, 0, 1, 0, 1])).toBe(2);
  });

  it("returns 2 for [1,0,0,0]", () => {
    expect(maxDistToClosest([1, 0, 0, 0])).toBe(3);
  });

  it("returns 3 for [0,0,0,1]", () => {
    expect(maxDistToClosest([0, 0, 0, 1])).toBe(3);
  });

  it("returns 1 for [1,0,1]", () => {
    expect(maxDistToClosest([1, 0, 1])).toBe(1);
  });

  it("returns 2 for [1,0,0,1]", () => {
    expect(maxDistToClosest([1, 0, 0, 1])).toBe(1);
  });

  it("returns 2 for [0,1]", () => {
    expect(maxDistToClosest([0, 1])).toBe(1);
  });

  it("returns 2 for [1,0]", () => {
    expect(maxDistToClosest([1, 0])).toBe(1);
  });

  it("returns 3 for [0,0,0,1,0,0,0,0,1,0,0]", () => {
    expect(maxDistToClosest([0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0])).toBe(3);
  });

  it("returns 3 for [0,0,1,0,0,0,0,1,0,0,0]", () => {
    expect(maxDistToClosest([0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0])).toBe(3);
  });
});
