import type { Assert } from "./assert";

export type IsEqual<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;

// Tests
type Test1 = Assert<IsEqual<number, number>>;
type Test2 = Assert<IsEqual<[], []>>;
type Test3 = Assert<IsEqual<() => boolean, () => boolean>>;
