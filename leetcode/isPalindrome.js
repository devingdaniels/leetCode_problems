// A phrase is a palindrome if, after converting all uppercase letters into lowercase
// letters and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

const isPalindrome = function (str) {
  // First covert string to lowercase
  const lower = str.toLowerCase();
  // Convert to array, filter out non-letters, convert back to string
  const s = lower
    .split("")
    .filter((char) => /[a-zA-Z]/.test(char))
    .join("");
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const word = "aba";
const result = isPalindrome(word);
console.log(result);
