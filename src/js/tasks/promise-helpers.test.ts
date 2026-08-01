import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

import {
  promiseAll,
  promiseAllSettled,
  promiseAny,
  promiseRace,
} from "./promise-helpers";

describe("promiseAll", () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("пустой массив -> резолвится пустым массивом", async () => {
    const result = await promiseAll([]);
    expect(result).toEqual([]);
  });

  it("все промисы резолвятся -> массив результатов в порядке исходного массива", async () => {
    const p1 = new Promise<number>((res) => setTimeout(() => res(1), 300));
    const p2 = new Promise<number>((res) => setTimeout(() => res(2), 100));
    const p3 = new Promise<number>((res) => setTimeout(() => res(3), 200));

    const promise = promiseAll([p1, p2, p3]);
    vi.advanceTimersByTime(300);

    await expect(promise).resolves.toEqual([1, 2, 3]);
  });

  it("принимает обычные значения вперемешку с промисами", async () => {
    const p = new Promise<number>((res) => setTimeout(() => res(42), 100));

    const promise = promiseAll([0, p, 7]);
    vi.advanceTimersByTime(100);

    await expect(promise).resolves.toEqual([0, 42, 7]);
  });

  it("один промис реджектится -> результирующий реджектится его ошибкой", async () => {
    const error = new Error("boom");
    const p1 = new Promise<number>((res) => setTimeout(() => res(1), 200));
    const p2 = new Promise<number>((_, rej) =>
      setTimeout(() => rej(error), 100),
    );

    const promise = promiseAll([p1, p2]);
    vi.advanceTimersByTime(200);

    await expect(promise).rejects.toBe(error);
  });

  it("первый реджект раньше остальных резолвов", async () => {
    const error = new Error("fast-fail");
    const p1 = new Promise<number>((res) => setTimeout(() => res(1), 500));
    const p2 = new Promise<number>((_, rej) =>
      setTimeout(() => rej(error), 50),
    );

    const promise = promiseAll([p1, p2]);
    vi.advanceTimersByTime(500);

    await expect(promise).rejects.toBe(error);
  });

  it("не резолвится до завершения самого медленного промиса", async () => {
    const onFinally = vi.fn();
    const p1 = new Promise<number>((res) => setTimeout(() => res(1), 100));
    const p2 = new Promise<number>((res) => setTimeout(() => res(2), 400));

    const promise = promiseAll([p1, p2]).then(onFinally);

    vi.advanceTimersByTime(100);
    await Promise.resolve();
    expect(onFinally).not.toHaveBeenCalled();

    vi.advanceTimersByTime(300);
    await promise;

    expect(onFinally).toHaveBeenCalledWith([1, 2]);
  });
});

describe("promiseRace", () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("резолвится результатом первого завершившегося промиса", async () => {
    const p1 = new Promise<number>((res) => setTimeout(() => res(1), 300));
    const p2 = new Promise<number>((res) => setTimeout(() => res(2), 100));
    const p3 = new Promise<number>((res) => setTimeout(() => res(3), 200));

    const promise = promiseRace([p1, p2, p3]);
    vi.advanceTimersByTime(100);

    await expect(promise).resolves.toBe(2);
  });

  it("первый реджект -> результирующий реджектится той же ошибкой", async () => {
    const error = new Error("race-fail");
    const p1 = new Promise<number>((res) => setTimeout(() => res(1), 200));
    const p2 = new Promise<number>((_, rej) =>
      setTimeout(() => rej(error), 100),
    );

    const promise = promiseRace([p1, p2]);
    vi.advanceTimersByTime(100);

    await expect(promise).rejects.toBe(error);
  });

  it("быстрый резолв опережает поздний реджект", async () => {
    const error = new Error("late-fail");
    const p1 = new Promise<number>((res) => setTimeout(() => res(7), 50));
    const p2 = new Promise<number>((_, rej) =>
      setTimeout(() => rej(error), 200),
    );

    const promise = promiseRace([p1, p2]);
    vi.advanceTimersByTime(200);

    await expect(promise).resolves.toBe(7);
  });

  it("принимает обычные значения как мгновенно резолвящиеся", async () => {
    const p = new Promise<number>((res) => setTimeout(() => res(9), 100));

    const promise = promiseRace([0, p]);
    vi.advanceTimersByTime(100);

    await expect(promise).resolves.toBe(0);
  });

  it("пустой массив -> результирующий промис никогда не резолвится", () => {
    const promise = promiseRace<number>([]);
    expect(promise).toBeInstanceOf(Promise);
  });
});

describe("promiseAllSettled", () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("пустой массив -> резолвится пустым массивом", async () => {
    const result = await promiseAllSettled([]);
    expect(result).toEqual([]);
  });

  it("все промисы резолвятся -> массив fulfilled в исходном порядке", async () => {
    const p1 = new Promise<number>((res) => setTimeout(() => res(1), 300));
    const p2 = new Promise<number>((res) => setTimeout(() => res(2), 100));
    const p3 = new Promise<number>((res) => setTimeout(() => res(3), 200));

    const promise = promiseAllSettled([p1, p2, p3]);
    vi.advanceTimersByTime(300);

    await expect(promise).resolves.toEqual([
      { status: "fulfilled", value: 1 },
      { status: "fulfilled", value: 2 },
      { status: "fulfilled", value: 3 },
    ]);
  });

  it("часть реджектится -> статус rejected с reason в порядке массива", async () => {
    const error1 = new Error("fail-1");
    const p1 = new Promise<number>((_, rej) =>
      setTimeout(() => rej(error1), 100),
    );
    const p2 = new Promise<number>((res) => setTimeout(() => res(2), 200));
    const p3 = new Promise<number>((_, rej) =>
      setTimeout(() => rej(new Error("fail-3")), 50),
    );

    const promise = promiseAllSettled([p1, p2, p3]);
    vi.advanceTimersByTime(200);

    const result = await promise;
    expect(result[0]).toMatchObject({ status: "rejected", reason: error1 });
    expect(result[1]).toMatchObject({ status: "fulfilled", value: 2 });
    expect(result[2]).toMatchObject({ status: "rejected" });
    expect((result[2] as { reason: Error }).reason.message).toBe("fail-3");
  });

  it("все реджектятся -> всё равно резолвится (не реджектится)", async () => {
    const p1 = new Promise<number>((_, rej) =>
      setTimeout(() => rej(new Error("a")), 100),
    );
    const p2 = new Promise<number>((_, rej) =>
      setTimeout(() => rej(new Error("b")), 200),
    );

    const promise = promiseAllSettled([p1, p2]);
    vi.advanceTimersByTime(200);

    const result = await promise;
    expect(result).toHaveLength(2);
    expect(result.every((r) => r.status === "rejected")).toBe(true);
  });

  it("принимает обычные значения вперемешку с промисами", async () => {
    const p = new Promise<number>((res) => setTimeout(() => res(42), 100));

    const promise = promiseAllSettled([0, p, 7]);
    vi.advanceTimersByTime(100);

    await expect(promise).resolves.toEqual([
      { status: "fulfilled", value: 0 },
      { status: "fulfilled", value: 42 },
      { status: "fulfilled", value: 7 },
    ]);
  });

  it("не резолвится пока не завершатся все промисы", async () => {
    const onFinally = vi.fn();
    const p1 = new Promise<number>((res) => setTimeout(() => res(1), 100));
    const p2 = new Promise<number>((res) => setTimeout(() => res(2), 400));

    const promise = promiseAllSettled([p1, p2]).then(onFinally);

    vi.advanceTimersByTime(100);
    await Promise.resolve();
    expect(onFinally).not.toHaveBeenCalled();

    vi.advanceTimersByTime(300);
    await promise;

    expect(onFinally).toHaveBeenCalled();
  });
});

describe("promiseAny", () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("резолвится результатом первого выполнившегося промиса", async () => {
    const p1 = new Promise<number>((res) => setTimeout(() => res(1), 300));
    const p2 = new Promise<number>((res) => setTimeout(() => res(2), 100));
    const p3 = new Promise<number>((res) => setTimeout(() => res(3), 200));

    const promise = promiseAny([p1, p2, p3]);
    vi.advanceTimersByTime(100);

    await expect(promise).resolves.toBe(2);
  });

  it("первый реджект игнорируется, если есть позже резолвившийся", async () => {
    const p1 = new Promise<number>((_, rej) =>
      setTimeout(() => rej(new Error("fail")), 50),
    );
    const p2 = new Promise<number>((res) => setTimeout(() => res(7), 200));

    const promise = promiseAny([p1, p2]);
    vi.advanceTimersByTime(200);

    await expect(promise).resolves.toBe(7);
  });

  it("быстрый резолв опережает поздние реджекты", async () => {
    const p1 = new Promise<number>((res) => setTimeout(() => res(9), 50));
    const p2 = new Promise<number>((_, rej) =>
      setTimeout(() => rej(new Error("x")), 100),
    );
    const p3 = new Promise<number>((_, rej) =>
      setTimeout(() => rej(new Error("y")), 200),
    );

    const promise = promiseAny([p1, p2, p3]);
    vi.advanceTimersByTime(200);

    await expect(promise).resolves.toBe(9);
  });

  it("все реджектятся -> реджектится AggregateError с массивом ошибок", async () => {
    const e1 = new Error("fail-1");
    const e2 = new Error("fail-2");
    const p1 = new Promise<number>((_, rej) => setTimeout(() => rej(e1), 100));
    const p2 = new Promise<number>((_, rej) => setTimeout(() => rej(e2), 200));

    const promise = promiseAny([p1, p2]);
    vi.advanceTimersByTime(200);

    await expect(promise).rejects.toMatchObject({
      name: "AggregateError",
      errors: [e1, e2],
    });
  });

  it("принимает обычные значения как мгновенно резолвящиеся", async () => {
    const p = new Promise<number>((res) => setTimeout(() => res(9), 100));

    const promise = promiseAny([0, p]);
    vi.advanceTimersByTime(100);

    await expect(promise).resolves.toBe(0);
  });

  it("пустой массив -> реджектится AggregateError", async () => {
    await expect(promiseAny([])).rejects.toMatchObject({
      name: "AggregateError",
    });
  });
});
