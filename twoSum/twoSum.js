// Brute force
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

//  Solve using HashMap
const twoSum_1 = function (nums, target) {
  const prevMap = new Map(); // val: index
  // Iterate, add values if not equal to target
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (prevMap.has(diff)) {
      return [prevMap.get(diff), i];
    }
    prevMap.set(nums[i], i);
  }
  return [];
};

// Driver code
const arr = [1, 2, 4, 6, 8, 99];
const target = 100;
const result = twoSum_1(arr, target);
console.log(result); // [0, 13]
