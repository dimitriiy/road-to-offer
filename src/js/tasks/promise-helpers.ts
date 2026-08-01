/**
 * Аналог `Promise.all`. Принимает массив промисов (или значений) и возвращает
 * `Promise`, который резолвится массивом результатов в исходном порядке,
 * как только все входные промисы выполнены. Если хотя бы один реджектится —
 * результирующий промис реджектится той же ошибкой, остальные игнорируются.
 *
 * @param iterable - массив значений или `Promise`
 * @returns `Promise` с массивом результатов
 * @throws {Error} реджектится с ошибкой первого отклонённого промиса
 */
export async function promiseAll<T>(
  iterable: Array<T | PromiseLike<T>>,
): Promise<T[]> {
  if (!iterable.length) return Promise.resolve([]);

  const result = [] as T[];
  let count = 0;

  return new Promise((res, rej) => {
    iterable.forEach(async (item, i) => {
      Promise.resolve(item)
        .then((value) => {
          count++;
          result[i] = value;

          if (count === iterable.length) {
            res(result);
          }
        })
        .catch((e) => rej(e));
    });
  });
}
/**
 * Аналог `Promise.race`. Принимает массив промисов (или значений) и возвращает
 * `Promise`, который резолвится/реджектится результатом первого
 * «успевшего» промиса — остальные игнорируются.
 *
 * @param iterable - массив значений или `Promise`
 * @returns `Promise` с результатом первого завершившегося промиса
 * @throws {Error} реджектится с ошибкой первого отклонённого промиса
 */
export function promiseRace<T>(
  iterable: Iterable<T | PromiseLike<T>>,
): Promise<T> {
  return new Promise((res, rej) => {
    for (const item of iterable) {
      Promise.resolve(item)
        .then((value) => {
          res(value);
        })
        .catch((e) => rej(e));
    }
  });
}

/**
 * Результат одного промиса из набора.
 */
export type SettledResult<T> =
  | { status: "fulfilled"; value: T }
  | { status: "rejected"; reason: unknown };

/**
 * Аналог `Promise.allSettled`. Принимает массив промисов (или значений) и
 * возвращает `Promise`, который всегда резолвится массивом результатов
 * каждого промиса в исходном порядке. Никогда не реджектится.
 *
 * @param iterable - массив значений или `Promise`
 * @returns `Promise` с массивом `SettledResult`
 */

type Res<T> =
  | {
      status: "fulfilled";
      value: T;
    }
  | { status: "rejected"; reason: unknown };

export function promiseAllSettledA<T>(
  iterable: Iterable<T | PromiseLike<T>>,
): Promise<SettledResult<T>[]> {
  const items = [...iterable];
  const result = [] as Res<T>[];
  let index = 0;
  let count = 0;

  return new Promise((res, rej) => {
    if (!items.length) {
      res([]);
    }

    items.forEach((item, index) => {
      Promise.resolve(item)
        .then((value) => {
          result[index] = {
            status: "fulfilled",
            value: value,
          };
        })
        .catch((error) => {
          result[index] = {
            status: "rejected",
            reason: error,
          };
        })
        .finally(() => {
          count++;

          if (count === items.length) {
            res(result);
          }
        });
    });
  });
}

export function promiseAllSettled<T>(
  iterable: Iterable<T | PromiseLike<T>>,
): Promise<SettledResult<T>[]> {
  return Promise.all(
    [...iterable].map((item) =>
      Promise.resolve(item)
        .then((value) => ({
          status: "fulfilled" as const,
          value,
        }))
        .catch((error) => ({ status: "rejected" as const, reason: error })),
    ),
  );
}

/**
 * Аналог `Promise.any`. Принимает массив промисов (или значений) и возвращает
 * `Promise`, который резолвится результатом первого успешно выполненного
 * промиса. Если все промисы реджектятся — реджектится `AggregateError`.
 *
 * @param iterable - массив значений или `Promise`
 * @returns `Promise` с результатом первого выполнившегося промиса
 * @throws {AggregateError} если все промисы отклонены
 */
export function promiseAny<T>(
  iterable: Iterable<T | PromiseLike<T>>,
): Promise<T> {
  const items = [...iterable];
  let errors: unknown[] = [];

  return new Promise((res, rej) => {
    if (!items.length) {
      rej(new AggregateError(errors, "All promises were rejected"));
    }

    for (const item of iterable) {
      Promise.resolve(item)
        .then((value) => {
          res(value);
        })
        .catch((e) => {
          errors.push(e);

          if (errors.length === items.length) {
            rej(new AggregateError(errors, "All promises were rejected"));
          }
        });
    }
  });
}
