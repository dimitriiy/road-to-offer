function topKFrequent(nums: number[], k: number): number[] {
  const count: Record<number, number> = {};

  for (const num of nums) {
    if (!count[num]) {
      count[num] = 0;
    }

    count[num]++;
  }

  const buckets: number[][] = [];
  const entries = Object.entries(count);

  for (const [n, freq] of entries) {
    if (!buckets[freq]) {
      buckets[freq] = [];
    }
    buckets[freq].push(+n);
  }

  let result: number[] = [];

  for (let i = buckets.length; i >= 0; i--) {
    const bucket = buckets[i];
    if (!bucket) continue;

    for (const num of bucket) {
      result.push(num);

      if (result.length === k) return result;
    }
  }

  return result;
}
