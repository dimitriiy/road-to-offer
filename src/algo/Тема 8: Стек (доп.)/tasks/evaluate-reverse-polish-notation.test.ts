import { describe, it, expect } from "vitest";
import { evalRPN } from "./evaluate-reverse-polish-notation";

describe("evalRPN", () => {
  it("returns 9 for ((2 + 1) * 3)", () => {
    expect(evalRPN(["2", "1", "+", "3", "*"])).toBe(9);
  });
  it("returns 6 for (4 + (13 / 5))", () => {
    expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6);
  });
  it("returns 22 for complex expression", () => {
    expect(
      evalRPN([
        "10",
        "6",
        "9",
        "3",
        "+",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+",
      ]),
    ).toBe(22);
  });
  it("returns single operand", () => {
    expect(evalRPN(["42"])).toBe(42);
  });
  it("handles subtraction", () => {
    expect(evalRPN(["5", "3", "-"])).toBe(2);
  });
  it("handles negative result in subtraction", () => {
    expect(evalRPN(["3", "5", "-"])).toBe(-2);
  });
  it("truncates division toward zero", () => {
    expect(evalRPN(["7", "-3", "/"])).toBe(Math.trunc(7 / -3));
  });
  it("handles multiplication with negatives", () => {
    expect(evalRPN(["-2", "3", "*"])).toBe(-6);
  });
  it("handles division that truncates positive result", () => {
    expect(evalRPN(["13", "5", "/"])).toBe(2);
  });
  it("handles multiple sequential operations", () => {
    expect(evalRPN(["2", "3", "+", "4", "*"])).toBe(20);
  });
});
