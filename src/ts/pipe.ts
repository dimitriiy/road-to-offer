import type { IsEqual } from "./isEqual";
import { Assert } from "./assert";

type Fn<A = any, B = any> = (arg: A) => B;

type Pipe<Fns extends Fn[]> = Fns extends [infer F]
  ? F extends Fn<any, any>
    ? F
    : never
  : Fns extends [infer F, ...infer Rest]
    ? F extends Fn<any, any>
      ? Rest extends Fn[]
        ? Fn<Parameters<F>[0], ReturnType<Pipe<Rest>>>
        : never
      : never
    : never;

const add1 = (x: number) => x + 1;
const double = (x: number) => x * 2;
const numToString = (x: number) => String(x);

type T = Pipe<[typeof add1, typeof double, typeof numToString]>; //(arg: number) => string

// Tests
type Test1 = Assert<IsEqual<T, (arg: number) => string>>;
