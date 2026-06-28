import { describe, it, expect } from "vitest";
import { isIsomorphic } from "./isomorphic-strings";

describe("isIsomorphic", () => {
  it("returns true for egg and add", () => {
    expect(isIsomorphic("egg", "add")).toBe(true);
  });

  it("returns false for foo and bar", () => {
    expect(isIsomorphic("foo", "bar")).toBe(false);
  });

  it("returns true for paper and title", () => {
    expect(isIsomorphic("paper", "title")).toBe(true);
  });

  it("returns false for different lengths", () => {
    expect(isIsomorphic("ab", "a")).toBe(false);
  });

  it("returns true for single character", () => {
    expect(isIsomorphic("a", "a")).toBe(true);
  });

  it("returns false when mapping is not bijection", () => {
    expect(isIsomorphic("bbbaaaba", "aaabbbba")).toBe(false);
  });
});
