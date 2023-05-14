//
const numJewelsInStones = function (jewels, stones) {
  // Create hashMap
  const jewelSet = new Set(jewels.split(""));
  // Itererate and count stones that are jewels
  let count = 0;
  for (let stone of stones) {
    if (jewelSet.has(stone)) {
      count++;
    }
  }
  return jewelSet;
};

// Driver code
const jewels = "aAA";
const stones = "aAAbbbb";
const result = numJewelsInStones(jewels, stones);
console.log(result);
