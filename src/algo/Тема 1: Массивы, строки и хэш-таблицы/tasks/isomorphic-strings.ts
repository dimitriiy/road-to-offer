export function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const map1 = new Map<string, string>();
  const map2 = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    if (map1.has(s[i]) && map1.get(s[i]) !== t[i]) return false;

    if (map2.has(t[i]) && map2.get(t[i]) !== s[i]) return false;

    map1.set(s[i], t[i]);
    map2.set(t[i], s[i]);
  }

  return true;
}
