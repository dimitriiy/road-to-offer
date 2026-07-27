import { describe, it, expect } from "vitest";
import { lengthOfLongestSubstring } from "./longest-substring-without-repeating";

describe("lengthOfLongestSubstring", () => {
  it("returns 3 for abcabcbb", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  it("returns 1 for bbbbb", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  it("returns 3 for pwwkew", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });

  it("returns 0 for empty string", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });

  it("returns 1 for single character", () => {
    expect(lengthOfLongestSubstring("a")).toBe(1);
  });

  it("returns string length for string with no duplicates", () => {
    expect(lengthOfLongestSubstring("abcdef")).toBe(6);
  });

  it("handles string with spaces", () => {
    expect(lengthOfLongestSubstring("a b c")).toBe(3);
  });

  it("handles string with digits", () => {
    expect(lengthOfLongestSubstring("1234567890")).toBe(10);
  });

  it("handles string with symbols", () => {
    expect(lengthOfLongestSubstring("!@#$%^&*()")).toBe(10);
  });

  it("handles duplicate at end", () => {
    expect(lengthOfLongestSubstring("abba")).toBe(2);
  });

  it("handles all same characters", () => {
    expect(lengthOfLongestSubstring("aaaaaa")).toBe(1);
  });
});
