/**
 * Check if s2 contains a permutation of s1 as a substring.
 * @param s1 - pattern string whose permutation we look for
 * @param s2 - text string to search within
 * @returns true if any permutation of s1 is a substring of s2
 */
export function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const charMap = new Map();

  for (let index = 0; index < s1.length; index++) {
    charMap.set(s1[index], (charMap.get(s1[index]) ?? 0) + 1);
  }

  let left = 0;

  let match = 0;

  for (let right = 0; right < s2.length; right++) {
    const rightChar = s2[right];

    if (charMap.has(s2[right])) {
      const count = charMap.get(rightChar)!;

      if (count > 0) match++;

      charMap.set(right, count - 1);
    }

    let len = right - left + 1;

    if (len > s1.length) {
      const leftChar = s2[left];
      if (charMap.has(leftChar)) {
        const count = charMap.get(leftChar)!;

        if (count >= 0) match--;

        charMap.set(left, count + 1);
      }

      left++;
    }

    if (right - left + 1 === s1.length && match === s1.length) return true;
  }

  return false;
}

//("ab", "iaedbaooo")

//eblaidbaooo
