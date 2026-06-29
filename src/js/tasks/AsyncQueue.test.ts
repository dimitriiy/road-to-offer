import { beforeAll, beforeEach, describe, it, vi } from "vitest";
import { AsyncQueue } from "./AsyncQueue";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const createTask = (id: number, ms: number) => async () => {
  console.log(`task ${id} started`);
  await delay(ms);
  console.log(`task ${id} finished`);
  return `result ${id}`;
};

const mockAsyncCb = () => {
  return vi.fn().mockResolvedValue(() => 1);
};

describe("AsyncQueue", () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  it("base res", async () => {
    const queue = new AsyncQueue(1);

    const fn1 = vi.fn().mockResolvedValue(1);

    queue.enqueue(fn1);
  });

  //   it("1", async () => {
  //     const queue = new AsyncQueue(2);
  //     const fn1 = vi.fn().mockResolvedValue(() => 1);

  //     queue.enqueue(createTask(1, 2000)).then(console.log);
  //     queue.enqueue(createTask(2, 1000)).then(console.log);
  //     queue.enqueue(createTask(3, 500)).then(console.log);
  //     queue.enqueue(createTask(4, 800)).then(console.log);

  //     vi.advanceTimersByTime(1000);
  //   });
});
