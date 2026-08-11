import { describe, it, expect, vi } from "vitest";
import { parallelTaskRunner } from "./parallelTaskRunner";

const delay = <T>(value: T, timeout: number) =>
  new Promise<T>((resolve) => {
    setTimeout(() => resolve(value), timeout);
  });

describe("parallelTaskRunner", () => {
  it("resolves with results in the same order as input tasks", async () => {
    const tasks = [
      () => delay("Task 1", 30),
      () => delay("Task 2", 10),
      () => delay("Task 3", 20),
    ];

    const result = await parallelTaskRunner(tasks, 2);

    expect(result).toEqual(["Task 1", "Task 2", "Task 3"]);
  });

  it("never runs more than `limit` tasks concurrently", async () => {
    let active = 0;
    let maxActive = 0;

    const makeTask = (value: number, timeout: number) => async () => {
      active++;
      maxActive = Math.max(maxActive, active);
      const result = await delay(value, timeout);
      active--;
      return result;
    };

    const tasks = [
      makeTask(1, 30),
      makeTask(2, 30),
      makeTask(3, 30),
      makeTask(4, 30),
      makeTask(5, 30),
    ];

    await parallelTaskRunner(tasks, 2);

    expect(maxActive).toBeLessThanOrEqual(2);
  });

  it("returns an empty array for an empty tasks list", async () => {
    const result = await parallelTaskRunner([], 3);

    expect(result).toEqual([]);
  });

  it("handles limit greater than the number of tasks", async () => {
    const tasks = [() => delay("a", 10), () => delay("b", 5)];

    const result = await parallelTaskRunner(tasks, 10);

    expect(result).toEqual(["a", "b"]);
  });

  it("rejects when any task rejects", async () => {
    const tasks = [
      () => delay("ok", 10),
      () => Promise.reject(new Error("boom")),
      () => delay("ok2", 10),
    ];

    await expect(parallelTaskRunner(tasks, 2)).rejects.toThrow("boom");
  });

  it("calls each task function exactly once", async () => {
    const spies = [
      vi.fn(() => delay("a", 5)),
      vi.fn(() => delay("b", 5)),
      vi.fn(() => delay("c", 5)),
    ];

    await parallelTaskRunner(spies, 2);

    spies.forEach((spy) => expect(spy).toHaveBeenCalledTimes(1));
  });
});
