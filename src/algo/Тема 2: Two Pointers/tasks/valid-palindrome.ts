export function isPalindrome(s: string): boolean {
  const normalizeStr = s.trim().toLowerCase().replace(/[^a-z0-9]/gi, "");

  let i = 0;
  let j = normalizeStr.length - 1;

  while (i < j) {
    if (normalizeStr[i] !== normalizeStr[j]) return false;

    i++;
    j--;
  }

  return true;
}
