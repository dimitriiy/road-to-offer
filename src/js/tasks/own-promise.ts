const runAsync = (cb: () => void) => queueMicrotask(() => cb());

const getError = (error: unknown) => {
  if (error && error instanceof Error) return error;

  try {
    return new Error(JSON.stringify(error), { cause: error });
  } catch (e) {
    return new Error(String(error), { cause: error });
  }
};

// Внутренние — простые, только "принять значение"
type InternalResolve<T> = (value: T) => void;
type InternalReject<E extends Error = Error> = (error: E) => void;

type OnFulfilled<T, U> = (value: T) => U | MyPromise<U>;
type OnRejected<E extends Error, U> = (error: E) => U | MyPromise<U>;

type Exucator<T, E extends Error = Error> = (
  resolve: InternalResolve<T>,
  reject: InternalReject<E>,
) => void;

type PromiseState<T, E extends Error = Error> =
  | { status: "pending" }
  | { status: "fulfilled"; value: T }
  | { status: "rejected"; reason: E };

export class MyPromise<T> {
  private state: PromiseState<T> = { status: "pending" };

  private onFulfilled: InternalResolve<T>[];
  private onRejected: InternalReject<Error>[];

  constructor(executor: Exucator<T>) {
    this.onFulfilled = [];
    this.onRejected = [];

    const resolve = (value: T) => {
      if (this.state.status !== "pending") return;

      this.state = {
        value,
        status: "fulfilled",
      };

      this.onFulfilled.forEach((cb) => runAsync(() => cb(value)));
    };

    const reject = (error: Error) => {
      if (this.state.status !== "pending") return;

      this.state = {
        reason: error,
        status: "rejected",
      };

      this.onRejected.forEach((cb) => runAsync(() => cb?.(error)));
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(getError(e));
    }
  }

  then<U>(onFulfilled: OnFulfilled<T, U>, onRejected?: OnRejected<Error, U>) {
    return new MyPromise<U>((resolve, rejected) => {
      const onHandleFulfilled = (value: T) => {
        try {
          const result = onFulfilled(value);

          if (result instanceof MyPromise) {
            result.then(resolve, rejected);
          } else {
            resolve(result);
          }
        } catch (e) {
          rejected(getError(e));
        }
      };

      const onHandleRejected = (error: Error) => {
        if (!onRejected) {
          // обработчика нет — просто пробрасываем ошибку дальше
          rejected(error);
          return;
        }

        try {
          const result = onRejected(error);
          if (result instanceof MyPromise) {
            result.then(resolve, rejected);
          } else {
            resolve(result);
          }
        } catch (e) {
          // обработчик сам кинул — реджектим новой ошибкой
          rejected(getError(e));
        }
      };

      if (this.state.status === "pending") {
        this.onFulfilled.push(onHandleFulfilled);
        this.onRejected.push(onHandleRejected);
      }

      if (this.state.status === "fulfilled") {
        const value = this.state.value;
        runAsync(() => onHandleFulfilled(value));
      }

      if (this.state.status === "rejected") {
        const reason = this.state.reason;
        runAsync(() => onHandleRejected(reason));
      }
    });
  }
}

function assertsIsString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error();
  }
}

let a: unknown;

assertsIsString(a);

a.charAt(1);

type A = { v: 2 };

interface V {}

interface C extends A {}
