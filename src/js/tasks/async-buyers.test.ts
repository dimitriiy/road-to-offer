import { describe, it, expect } from "vitest";
import { bestBuyer, type Buyer } from "./async-buyers";

function makeBuyer(price: number, answer: boolean, delay: number): Buyer {
  return {
    price,
    accepts: () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(answer), delay);
      }),
  };
}

function makePendingBuyer(price: number) {
  return {
    price,
    accepts: () => new Promise(() => {}),
  };
}

describe("bestBuyer", () => {
  it("chooses faster accepted buyer among equal highest prices", async () => {
    const buyers = [
      makeBuyer(7, true, 200),
      makeBuyer(9, false, 150),
      makeBuyer(6, true, 200),
      makeBuyer(7, true, 100),
      makeBuyer(3, true, 50),
      makeBuyer(3, false, 100),
    ];
    await expect(bestBuyer(buyers)).resolves.toBe(3);
  });
  //   it("returns highest accepted buyer", async () => {
  //     const buyers = [
  //       makeBuyer(1, true, 100),
  //       makeBuyer(5, false, 80),
  //       makeBuyer(10, true, 10),
  //     ];

  //     await expect(bestBuyer(buyers)).resolves.toBe(2);
  //   });

  //   it("example 1", async () => {
  //     const buyers = [
  //       makeBuyer(1, true, 20),
  //       makeBuyer(5, true, 30),
  //       makeBuyer(10, false, 10),
  //     ];
  //     await expect(bestBuyer(buyers)).resolves.toBe(1);
  //   });
  //   it("example 2", async () => {
  //     const buyers = [
  //       makeBuyer(1, true, 100),
  //       makeBuyer(5, true, 20),
  //       makeBuyer(10, false, 10),
  //     ];
  //     await expect(bestBuyer(buyers)).resolves.toBe(1);
  //   });
  //   it("returns -1 when all rejected", async () => {
  //     const buyers = [makeBuyer(1, false, 10), makeBuyer(2, false, 20)];
  //     await expect(bestBuyer(buyers)).resolves.toBe(-1);
  //   });
  //   it("returns -1 for empty array", async () => {
  //     await expect(bestBuyer([])).resolves.toBe(-1);
  //   });
  //   it("returns index of single accepted buyer", async () => {
  //     const buyers = [makeBuyer(7, true, 10)];
  //     await expect(bestBuyer(buyers)).resolves.toBe(0);
  //   });
  //   it("returns -1 for single rejected buyer", async () => {
  //     const buyers = [makeBuyer(7, false, 10)];
  //     await expect(bestBuyer(buyers)).resolves.toBe(-1);
  //   });
  //   it("waits for higher price answer before choosing lower accepted buyer", async () => {
  //     const buyers = [
  //       makeBuyer(1, true, 10),
  //       makeBuyer(5, true, 20),
  //       makeBuyer(10, false, 100),
  //     ];
  //     await expect(bestBuyer(buyers)).resolves.toBe(1);
  //   });
  //   it("lower accepted buyer wins only after all higher rejected", async () => {
  //     const buyers = [
  //       makeBuyer(1, true, 10),
  //       makeBuyer(5, false, 50),
  //       makeBuyer(10, false, 60),
  //     ];
  //     await expect(bestBuyer(buyers)).resolves.toBe(0);
  //   });
  //   it("chooses the highest accepted among several accepted buyers", async () => {
  //     const buyers = [
  //       makeBuyer(3, true, 30),
  //       makeBuyer(8, true, 20),
  //       makeBuyer(5, true, 10),
  //     ];
  //     await expect(bestBuyer(buyers)).resolves.toBe(1);
  //   });

  //   it("does not wait for lower pending buyer that cannot win", async () => {
  //     const buyers = [
  //       makePendingBuyer(1),
  //       makeBuyer(5, true, 20),
  //       makeBuyer(10, false, 10),
  //     ];
  //     await expect(
  //       Promise.race([
  //         bestBuyer(buyers),
  //         new Promise((_, reject) =>
  //           setTimeout(() => reject(new Error("timeout")), 100),
  //         ),
  //       ]),
  //     ).resolves.toBe(1);
  //   });
  //   it("does not wait when highest price buyer accepted and others are pending", async () => {
  //     const buyers = [
  //       makePendingBuyer(1),
  //       makePendingBuyer(5),
  //       makeBuyer(10, true, 10),
  //     ];
  //     await expect(
  //       Promise.race([
  //         bestBuyer(buyers),
  //         new Promise((_, reject) =>
  //           setTimeout(() => reject(new Error("timeout")), 100),
  //         ),
  //       ]),
  //     ).resolves.toBe(2);
  //   });
});
