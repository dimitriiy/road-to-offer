function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const dict: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const value = dict[char] ?? 0;

    dict[char] = value + 1;
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!dict[char]) return false;

    if (dict[char]) {
      dict[char] = dict[char] - 1;

      if (dict[char] < 0) return false;
    }
  }

  return true;
}
