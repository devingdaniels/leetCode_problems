//
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  // Create a hashMap
  const m = new Map(); // char: count
  const n = new Map(); // char: count
  // Add each char of S to map
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (m.has(current)) {
      m.set(current, m.get(current) + 1);
    } else {
      m.set(current, 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    const current = t[i];
    if (n.has(current)) {
      n.set(current, n.get(current) + 1);
    } else {
      n.set(current, 1);
    }
  }
  // Check string T and S map 1:1 char and charCount
  for (let i = 0; i < s.length; i++) {
    // Check that s[i] U t[i] and count === count
    const char = s[i];
    if ((!m.has(char) && !n.has(char)) || m.get(char) !== n.get(char)) {
      return false;
    }
  }
  return true;
};

// Driver code
const s = "abcc";
const t = "acbc";
const result = isAnagram(s, t);
console.log(result);

function print(m) {
  for (const [key, value] of m) {
    console.log(key + ": " + value);
  }
}
