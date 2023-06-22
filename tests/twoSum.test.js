const twoSum = require("../leetcode/twoSum");

test("Example case 1", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("Example case 2", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test("Array with negative numbers", () => {
  expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
});

test("Array with duplicate numbers", () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

test("Array with zero sum", () => {
  expect(twoSum([-2, 7, 11, 2, -9], 0)).toEqual([0, 3]);
});

test("Array with no valid solution", () => {
  expect(twoSum([1, 2, 3, 4, 5], 10)).toEqual([]);
});

test("Empty array", () => {
  expect(twoSum([], 0)).toEqual([]);
});

test("Array with single element", () => {
  expect(twoSum([5], 5)).toEqual([]);
});
