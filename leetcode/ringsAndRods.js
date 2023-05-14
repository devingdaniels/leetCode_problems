function countPoints(rings) {
  const myMap = new Map();
  let validRods = 0;
  for (let i = 0; i < rings.length; i = i + 2) {
    // Save B6 as key
    const colorRod = rings[i] + rings[i + 1];
    // Unique hash
    const rodNum = rings[i + 1];
    if (!myMap.has(colorRod)) {
      // {B0: 1, ...}
      myMap.set(colorRod, 1);
      // {R: 1, G: 1, B: 1} = validRod
      if (
        myMap.has("R" + rodNum) &&
        myMap.has("G" + rodNum) &&
        myMap.has("B" + rodNum)
      ) {
        validRods++;
      }
    }
  }
  console.log(myMap);
  return validRods;
}

function print(obj) {
  console.log(obj);
}

// Driver code
const rings = "B0B6G0R6R0R6G9";
const result = countPoints(rings);
console.log(result);
