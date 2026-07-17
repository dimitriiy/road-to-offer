---
name: stub-function
description: >
  When user asks to create a function/feature, generate only the stub (signature, JSDoc, types)
  and a full suite of tests. NEVER provide the implementation body — leave `throw new Error("TODO: implement")`.
  Use this skill for TDD workflows, interview prep, or when the user explicitly wants "only tests and stub".
  Trigger: "create function", "write function", "implement" (but only stub+tests), "TDD", "stub".
---

## Rules

1. Output **only** the function signature with JSDoc/types and the test file.
2. Function body must be `throw new Error("TODO: implement")`.
3. Tests must cover normal cases, edge cases, and error conditions.
4. If the language requires imports, include them.
5. Do not write any implementation logic, helper functions, or algorithmic code.

## Output format

```typescript
// filename.ts
/**
 * Short description.
 * @param arg - ...
 * @returns ...
 * @throws {Error} ...
 */
export function myFunction(arg: number): string {
  throw new Error("TODO: implement myFunction");
}
```

```typescript
// filename.test.ts
import { describe, it, expect } from "vitest";
import { myFunction } from "./filename";

describe("myFunction", () => {
  it("returns expected for positive input", () => {
    expect(myFunction(1)).toBe("expected");
  });

  it("handles edge case", () => {
    expect(myFunction(0)).toBe("expected");
  });

  it("throws on invalid input", () => {
    expect(() => myFunction(-1)).toThrow();
  });
});
```
