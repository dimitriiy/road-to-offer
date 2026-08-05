const asyncLimit = <T extends (...args: any[]) => Promise<unknown>>(
  fn: T,
  limit: number,
) => {
  return (...args: Parameters<T>) => {
    return new Promise((res, rej) => {
      let timer = setTimeout(() => {
        rej();
      }, limit);

      fn(...args)
        .then((data) => {
          if (timer) {
            clearTimeout(timer);
          }
          res(data);
        })
        .catch((e) => {
          clearTimeout(timer);
          rej(e);
        });
    });
  };
};

// Тестовые данные
const fn = async (n: number) => {
  await new Promise((res) => setTimeout(res, 100));

  return n * n;
};

console.log(asyncLimit(fn, 50)(5)); // rejected превышен лимит
console.log(asyncLimit(fn, 150)(5)); // resolve 25

const fn2 = async (a: number, b: number) => {
  await new Promise((res) => setTimeout(res, 120));

  return a + b;
};

console.log(asyncLimit(fn2, 100)(1, 2));
console.log(asyncLimit(fn2, 150)(1, 2));
