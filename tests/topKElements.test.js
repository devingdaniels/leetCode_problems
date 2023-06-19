const topKFrequent = require("../leetcode/topKElements");

test("Test 1, problem #347: topKFrequent", () => {
  expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
});

test("Test 2, problem#347: topKFrequent", () => {
  expect(topKFrequent([1], 1)).toEqual([1]);
});
