function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

function groupAnagrams(strs: string[]): string[][] {
  if (!strs.length) return [];

  const result = {};

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const sorted = word
      .split("")
      .map((c) => c.charCodeAt(0))
      .reduce((acc, c) => (acc += c), 0)
      .toString();

    if (!result[sorted]) {
      result[sorted] = [];
    }

    result[sorted].push(word);
  }

  return Object.values(result);
}
