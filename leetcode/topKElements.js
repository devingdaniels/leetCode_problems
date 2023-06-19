/* 
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

*/

const topKFrequent = function (nums, k) {
  // Create hash map of frequencies, where key is the number and the value is the count
  const map = new Map();
  // Add values and their count
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }

  // Extract values and put into an array
  const values = Array.from(map);

  // Sort the values
  values.sort((a, b) => b[1] - a[1]);

  // return array with k elements of highest counts
  let ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(values[i][0]); // Push only the key (number)
  }
  // Return k elements
  return ans;
};

module.exports = topKFrequent;
