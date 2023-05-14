/* 
You are given a string s and an integer array indices of the same length. The string s will be 
shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.
*/

function restoreString(s, indices) {
  let newString = [];
  for (let i = 0; i < indices.length; i++) {
    newString[indices[i]] = s[i];
  }
  return newString.join("");
}

// Driver code
const input = "codeleet";
const indices = [4, 5, 6, 7, 0, 2, 1, 3];
console.log(restoreString(input, indices)); // "leetcode"
