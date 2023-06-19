const romanToInt = require("../leetcode/romanToInteger");

test("Leet #13: romanToInt", () => {
  expect(romanToInt("MCMXCIV")).toBe(1994);
});

test("Leet #13: romanToInt", () => {
  expect(romanToInt("X")).toBe(10);
});
