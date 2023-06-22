// Brute force naive solution
const twoSum_0 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return [];
};

// Optimal solution
function twoSum(nums, target) {
  // Edge cases
  if (nums.length < 2) return [];
  // Map of previous values
  const prevMap = new Map();
  // Iterate, add values if not equal to target
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (prevMap.has(diff)) {
      return [prevMap.get(diff), i];
    }
    prevMap.set(nums[i], i);
  }
  return [];
}

module.exports = twoSum;
