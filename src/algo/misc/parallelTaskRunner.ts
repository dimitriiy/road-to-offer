/**
 * Runs an array of task-producing functions with a limited concurrency.
 * At most `limit` tasks run at the same time; results resolve in the
 * same order as the input `tasks` array, regardless of completion order.
 *
 * @param tasks - functions that each return a Promise when invoked
 * @param limit - maximum number of tasks running concurrently
 * @returns a Promise resolving to an array of results, in input order
 * @throws rejects if any task's promise rejects
 */
export async function parallelTaskRunner<T>(
  tasks: Array<() => Promise<T>>,
  limit: number,
): Promise<T[]> {
  const result = new Array<T>(tasks.length);
  let index = 0;

  const worker = async () => {
    while (true) {
      let nextIndex = index++;

      if (nextIndex >= tasks.length) break;

      const task = tasks[nextIndex];

      const value = await task();

      result[nextIndex] = value;
    }
  };

  await Promise.all(Array.from({ length: limit }, (_, index) => worker()));

  return result;
}
