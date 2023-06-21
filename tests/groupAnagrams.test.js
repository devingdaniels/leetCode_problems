const groupAnagrams = require("../leetcode/groupAnagrams");

describe("groupAnagrams", () => {
  test("Example 1", () => {
    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const expected = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];
    const result = groupAnagrams(strs).map((arr) => arr.sort()); // Sort elements within each subarray
    const expectedSorted = expected.map((arr) => arr.sort()); // Sort elements within each subarray in expected
    expect(result).toEqual(expect.arrayContaining(expectedSorted));
  });

  test("Example 2", () => {
    const strs = [""];
    const expected = [[""]];
    const result = groupAnagrams(strs);
    expect(result).toEqual(expected);
  });

  test("Example 3", () => {
    const strs = ["a"];
    const expected = [["a"]];
    const result = groupAnagrams(strs);
    expect(result).toEqual(expected);
  });
});
