// Given a zero-based permutation nums (0-indexed), build an array ans of the same length
// where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

const buildArray = function (nums) {
  const ans = new Array();
  nums.forEach((num, i) => {
    ans.push(nums[nums[i]]);
  });
  return ans;
};

// Optimized
const buildArray_1 = function (nums) {
  return (ans = nums.map((num) => nums[num]));
};

const input = [0, 2, 1, 5, 3, 4];
const result = buildArray_1(input);
console.log(result); //[0,1,2,4,5,3]
