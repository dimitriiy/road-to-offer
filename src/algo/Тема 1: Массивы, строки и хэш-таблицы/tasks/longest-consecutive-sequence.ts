export function longestConsecutive(nums: number[]): number {
  if (!nums?.length) return 0;

  if (nums.length === 1) return 1;

  const set = new Set([...nums]);

  let longest = 0;

  for (const num of set) {
    const prev = num - 1;

    if (set.has(prev)) {
      continue;
    }

    let currentLength = 1;

    let next = num + 1;

    while (set.has(next)) {
      currentLength++;
      next++;
    }

    if (currentLength > longest) {
      longest = currentLength;
    }
  }

  return longest;
}
