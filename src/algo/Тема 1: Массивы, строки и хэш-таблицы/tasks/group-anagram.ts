function groupAnagrams(strs: string[]): string[][] {
  if (!strs.length) return [];

  const result: Record<string, string[]> = {};

  for (let i = 0; i < strs.length; i++) {
    const count = new Array(26).fill(0);
    const word = strs[i];

    for (const char of word) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      count[index]++;
    }

    const key = count.join("-");

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(word);
  }

  return Object.values(result);
}

function topKFrequent(nums: number[], k: number): number[] {
  const count: Record<number, number> = {};

  for (const num of nums) {
    if (!count[num]) {
      count[num] = 0;
    }

    count[num]++;
  }

  console.log(count);
  const values = Object.entries(count).sort((a, b) => b[1] - a[1]);

  return values.slice(0, k).map((p) => +p[0]);
}
