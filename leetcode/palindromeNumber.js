/* 
Given an integer x, return true if x is a 
palindrome, and false otherwise.
Example 1:
Input: x = 121
Output: true
*/

// 12132
// 1221

const isPalindrome = function (x) {
  let str = x.toString();
  let mid = str.length / 2;
  // Edge case
  if (str[0] == "-") return false;

  if (str.length % 2 != 0) {
    str = str.slice(0, mid) + str.slice(mid + 1);
  }
  // Traverse
  let ptr2 = str.length - 1;
  for (let ptr1 = 0; ptr1 < str.length / 2; ptr1++) {
    if (str[ptr1] != str[ptr2]) {
      return false;
    }
    ptr2--;
  }
  return true;
};

// Cleaner
const isPalindrome_1 = function (x) {
  const str = x.toString();
  // Reverse the string
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

// Driver code
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(100)); // false

// Cleaner
console.log(isPalindrome_1(121)); // true
console.log(isPalindrome_1(-121)); // false
console.log(isPalindrome_1(100)); // false
