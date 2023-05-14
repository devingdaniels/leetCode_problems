/* 
Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.
Return an integer denoting the sum of all numbers in the given range satisfying the constraint.
Example 1:
Input: n = 7
Output: 21
Explanation: Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7. The sum of these numbers is 21.
*/

var sumOfMultiples = function (n) {
  let sum = 0;
  for (let k = 1; k <= n; k++) {
    if (k % 3 === 0 || k % 5 === 0 || k % 7 === 0) {
      sum += k;
    }
  }
  return sum;
};

// Driver code
const input = 10;
console.log(sumOfMultiples(input)); // Output: 21
