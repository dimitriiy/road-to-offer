import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { MyPromise } from "./own-promise";

describe("own-promise", () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("base", async () => {
    const promise = new MyPromise((resolve) =>
      setTimeout(() => resolve(10), 500),
    );
    vi.advanceTimersByTime(500);

    await promise.then((value) => expect(value).toBe(10));
  });

  it("chain", async () => {
    const promise = new MyPromise((resolve) =>
      setTimeout(() => resolve(10), 500),
    );
    vi.advanceTimersByTime(500);

    await promise
      .then((value) => value * 10)
      .then((value) => expect(value).toBe(100));
  });

  it("Синхронный resolve:", async () => {
    const fn = vi.fn();
    const promise = new MyPromise((resolve) => resolve(42));
    await promise.then(fn);

    expect(fn).toHaveBeenCalledWith(42);
  });

  it("Синхронный reject", async () => {
    const fn = vi.fn();
    const error = new Error("");
    const promise = new MyPromise((resolve, reject) => reject(error));
    await promise.then(() => {}, fn);

    expect(fn).toHaveBeenCalledWith(error);
  });

  it("Ошибка в executor:", async () => {
    const fn = vi.fn();
    const error = new Error("");
    const promise = new MyPromise((resolve, reject) => {
      throw error;
    });

    await promise.then(() => {}, fn);

    expect(fn).toHaveBeenCalledWith(error);
  });

  it("двойной resolve.", async () => {
    const fn = vi.fn();
    const promise = new MyPromise((resolve) => {
      resolve(1);
      resolve(2);
    });

    await promise.then(fn);

    expect(fn).toHaveBeenCalledOnce();
  });

  it("1", async () => {
    const onFulfilled = vi.fn();
    const onRejected = vi.fn();

    const promise = new MyPromise((resolve, reject) => {
      resolve(1);
      reject(new Error("fail"));
    });

    await promise.then(onFulfilled, onRejected);

    expect(onFulfilled).toHaveBeenCalledTimes(1);
    expect(onFulfilled).toHaveBeenCalledWith(1);
    expect(onRejected).not.toHaveBeenCalled();
  });

  it("Проверяем: если onFulfilled возвращает обычное значение, то следующий then получает именно его.", async () => {
    const fn = vi.fn();

    const promise = new MyPromise((resolve) => {
      resolve(1);
    });

    await promise.then((value) => value).then(fn);

    expect(fn).toHaveBeenCalledWith(1);
  });

  it("ждет MyPromise, возвращенный из then", async () => {
    const fn = vi.fn();

    const promise = new MyPromise((resolve) => {
      resolve(1);
    });

    await promise.then((value) => new MyPromise((res) => res(20))).then(fn);

    expect(fn).toHaveBeenCalledWith(20);
  });

  it("rejectится, если onFulfilled бросает ошибку", async () => {
    const onRejected = vi.fn();
    const error = new Error("boom");

    const promise = new MyPromise((resolve) => resolve(10));

    await promise
      .then(() => {
        throw error;
      })
      .then(vi.fn(), onRejected);

    expect(onRejected).toHaveBeenCalledWith(error);
  });
});
