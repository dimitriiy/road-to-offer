type AsyncTask = () => Promise<unknown>;

type QueueItem = {
  cb: AsyncTask;
  res: (value: unknown) => void;
  rej: () => void;
};

export class AsyncQueue {
  private readonly concurrency: number;

  private queue: QueueItem[] = [];
  private running: number = 0;

  constructor(concurrency: number) {
    this.concurrency = concurrency;
  }

  private async execute(asyncTask: QueueItem) {
    this.running++;
    await asyncTask
      .cb()
      .then(asyncTask.res)
      .catch(asyncTask.rej)
      .finally(() => {
        this.running--;
        this.run();
      });
  }
  private async run() {
    if (!this.queue.length) return;
    if (this.running >= this.concurrency) {
      return;
    }
    const asyncTask = this.queue.shift();
    console.log(asyncTask);
    if (!asyncTask) return;

    this.execute(asyncTask);
  }

  async enqueue(cb: AsyncTask) {
    return new Promise((res, rej) => {
      this.queue.push({ res, rej, cb });
      this.run();
    });
  }
}

const queue = new AsyncQueue(2);

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const createTask = (id: number, ms: number) => async () => {
  console.log(`task ${id} started`);
  await delay(ms);
  console.log(`task ${id} finished`);
  return `result ${id}`;
};

queue.enqueue(createTask(1, 2000)).then(console.log);
queue.enqueue(createTask(2, 1000)).then(console.log);
queue.enqueue(createTask(3, 500)).then(console.log);
queue.enqueue(createTask(4, 800)).then(console.log);
