function countingSort(arr) {
  const frequencyMap = new Map();
  // initialize map with all numbers in the range
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    frequencyMap.set(i, 0);
  }
  // increment frequency for each number in input array
  for (let num of arr) {
    frequencyMap.set(num, frequencyMap.get(num) + 1);
  }
  // return frequency list as an array
  return Array.from(frequencyMap.values());
}

// Driver code
const arr = [0, 2, 4, 6, 8, 8, 10];
const result = countingSort(arr);
console.log(result);
