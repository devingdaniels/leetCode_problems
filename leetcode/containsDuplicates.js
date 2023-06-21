// This solution uses a hashmap: Time complexity O(N), Space complexity: O(N)
const containsDuplicate = function (nums) {
  // Create hash map
  const myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    // Add current value to the map
    const value = nums[i];
    if (myMap.has(value)) {
      return true;
    }
    // Add value to hashmap
    myMap.set(value, i);
  }
  return false;
};

module.exports = containsDuplicate;
