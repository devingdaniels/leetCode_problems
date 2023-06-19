function pangrams(s) {
  const alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
  const str = s.toLowerCase();

  for (let char of str) {
    alphabet.delete(str[char]);
    if (alphabet.size === 0) {
      return "pangram";
    }
  }
  return "not pangram";
}

console.log(pangrams("The quick brown fox jumps over the lazy dog")); // pangram
console.log(pangrams("This is not a pangram")); // not pangram
