const containsDuplicates = require("../leetcode/containsDuplicates"); // Assuming you have the implementation in a separate file

test("Example 1", () => {
  const nums = [1, 2, 3, 1];
  const result = containsDuplicates(nums);
  expect(result).toBe(true);
});

test("Example 2", () => {
  const nums = [1, 2, 3, 4];
  const result = containsDuplicates(nums);
  expect(result).toBe(false);
});

test("Example 3", () => {
  const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
  const result = containsDuplicates(nums);
  expect(result).toBe(true);
});

test("Empty Array", () => {
  const nums = [];
  const result = containsDuplicates(nums);
  expect(result).toBe(false);
});

test("Single Element Array", () => {
  const nums = [5];
  const result = containsDuplicates(nums);
  expect(result).toBe(false);
});
