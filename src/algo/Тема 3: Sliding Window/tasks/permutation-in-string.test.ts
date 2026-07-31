import { describe, it, expect } from "vitest";
import { checkInclusion } from "./permutation-in-string";

describe("checkInclusion", () => {
  it("returns true for example 1 (eidbaooo contains ba)", () => {
    expect(checkInclusion("ab", "asebidbaooo")).toBe(true);
  });
  // it("returns false for example 2 (eidboaoo has no ab/ba)", () => {
  //   expect(checkInclusion("ab", "eidboaoo")).toBe(false);
  // });
  // it("returns true when permutation is at the start", () => {
  //   expect(checkInclusion("ab", "abeidbaooo")).toBe(true);
  // });
  // it("returns true when permutation is at the end", () => {
  //   expect(checkInclusion("ab", "eidbaoooab")).toBe(true);
  // });
  // it("returns true when s2 equals a permutation of s1", () => {
  //   expect(checkInclusion("abc", "cba")).toBe(true);
  // });
  // it("returns true when s1 equals s2 (single char)", () => {
  //   expect(checkInclusion("a", "a")).toBe(true);
  // });
  // it("returns false when s1 longer than s2", () => {
  //   expect(checkInclusion("abcd", "abc")).toBe(false);
  // });
  // it("returns false when no permutation present despite same chars count", () => {
  //   expect(checkInclusion("hello", "oellhworld")).toBe(true);
  // });
  // it("returns false when s2 has no matching window", () => {
  //   expect(checkInclusion("abc", "aaacbbb")).toBe(false);
  // });
  // it("returns true for repeated chars window", () => {
  //   expect(checkInclusion("aa", "baaa")).toBe(true);
  // });
  // it("returns true when single char s1 present in s2", () => {
  //   expect(checkInclusion("x", "abcdefx")).toBe(true);
  // });
  // it("returns false when single char s1 absent in s2", () => {
  //   expect(checkInclusion("x", "abcdef")).toBe(false);
  // });
  // it("handles duplicate chars in s1 correctly (true)", () => {
  //   expect(checkInclusion("aab", "baaba")).toBe(true);
  // });
  // it("handles duplicate chars in s1 correctly (false)", () => {
  //   expect(checkInclusion("aab", "abab")).toBe(false);
  // });
});
