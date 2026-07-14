import { describe, it, expect } from "vitest";
import { lengthOfLongestSubstring } from "./length-of-longest-substring";

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

  it("returns length for string with all unique characters", () => {
    expect(lengthOfLongestSubstring("abcdef")).toBe(6);
  });

  it("handles substring at the end", () => {
    expect(lengthOfLongestSubstring("abba")).toBe(2);
  });

  it("handles substring at the beginning", () => {
    expect(lengthOfLongestSubstring("dvdf")).toBe(3);
  });

  it("handles spaces and special characters", () => {
    expect(lengthOfLongestSubstring("a b c a")).toBe(3);
  });

  it("handles repeating pattern with gap", () => {
    expect(lengthOfLongestSubstring("tmmzuxt")).toBe(5);
  });
});
