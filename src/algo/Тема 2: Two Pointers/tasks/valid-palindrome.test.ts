import { describe, it, expect } from "vitest";
import { isPalindrome } from "./valid-palindrome";

describe("isPalindrome", () => {
  it("returns true for classic palindrome with punctuation", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  it("returns false for non-palindrome", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });

  it("returns true for empty string after normalize", () => {
    expect(isPalindrome(" ")).toBe(true);
  });

  it("returns true for single character", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("returns true for numeric palindrome", () => {
    expect(isPalindrome("12321")).toBe(true);
  });

  it("returns false for mixed digits and letters", () => {
    expect(isPalindrome("0P")).toBe(false);
  });

  it("returns true when underscore is ignored", () => {
    expect(isPalindrome("ab_a")).toBe(true);
  });

  it("returns true for two same characters", () => {
    expect(isPalindrome("aa")).toBe(true);
  });

  it("returns true for even-length palindrome", () => {
    expect(isPalindrome("abba")).toBe(true);
  });

  it("returns true for palindrome with uppercase and symbols", () => {
    expect(isPalindrome("No 'x' in Nixon")).toBe(true);
  });
});
