const countConsistentStrings = function (allowed, words) {
  // create a set containing allowable letters
  const s = new Set(allowed.split(""));
  // Itererate over words, verify each letter is an allowable
  let count = 0;
  for (let word of words) {
    let flag = true;
    for (let char of word) {
      if (!s.has(char)) {
        flag = false;
        break;
      }
    }
    if (flag) {
      count++;
    }
  }
  return count;
};

// Driver code
const allowed = "ab";
const words = ["ad", "bd", "aaab", "baa", "badab"];
const result = countConsistentStrings(allowed, words);
console.log(result);
