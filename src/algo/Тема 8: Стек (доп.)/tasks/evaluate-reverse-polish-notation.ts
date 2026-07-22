export function evalRPN(tokens: string[]): number {
  const nums = tokens.map((char) =>
    char.match(/\d/)?.length ? Number(char) : char,
  );

  if (nums.length === 1) return nums[0] as number;

  const stack: number[] = [];

  const operators = new Map([
    ["+", (a: number, b: number) => a + b],
    ["-", (a: number, b: number) => a - b],
    ["*", (a: number, b: number) => a * b],
    ["/", (a: number, b: number) => +Math.trunc(a / b)],
  ]);

  for (const char of tokens) {
    if (!char) continue;

    if (operators.has(char)) {
      const b = stack.pop()!;
      const a = stack.pop()!;

      const value = operators.get(char)?.(a, b);
      if (value != undefined) {
        stack.push(value);
      }
    } else {
      stack.push(+char);
    }
  }

  return stack[0];
}
