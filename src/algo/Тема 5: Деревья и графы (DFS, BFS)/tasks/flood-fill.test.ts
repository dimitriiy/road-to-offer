import { describe, it, expect } from "vitest";
import { floodFill } from "./flood-fill";

describe("floodFill", () => {
  it("fills connected region (example 1)", () => {
    const image = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ];
    expect(floodFill(image, 1, 1, 2)).toEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ]);
  });

  it("does nothing when target color equals starting color (example 2)", () => {
    const image = [
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(floodFill(image, 0, 0, 0)).toEqual([
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it("fills single pixel image", () => {
    const image = [[5]];
    expect(floodFill(image, 0, 0, 9)).toEqual([[9]]);
  });

  it("fills entire image when all pixels have same color", () => {
    const image = [
      [1, 1],
      [1, 1],
    ];
    expect(floodFill(image, 0, 0, 3)).toEqual([
      [3, 3],
      [3, 3],
    ]);
  });

  it("fills only vertically/horizontally connected pixels", () => {
    const image = [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ];
    expect(floodFill(image, 1, 1, 9)).toEqual([
      [1, 0, 1],
      [0, 9, 0],
      [1, 0, 1],
    ]);
  });

  it("handles starting pixel in corner", () => {
    const image = [
      [2, 2, 2],
      [2, 1, 1],
      [2, 1, 1],
    ];
    expect(floodFill(image, 0, 0, 5)).toEqual([
      [5, 5, 5],
      [5, 1, 1],
      [5, 1, 1],
    ]);
  });

  it("handles starting pixel at edge", () => {
    const image = [
      [1, 1, 2],
      [1, 1, 2],
      [2, 2, 2],
    ];
    expect(floodFill(image, 0, 0, 7)).toEqual([
      [7, 7, 2],
      [7, 7, 2],
      [2, 2, 2],
    ]);
  });
});
