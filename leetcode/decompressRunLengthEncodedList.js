// We are given a list nums of integers representing a list compressed with run-length encoding.
// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).
// For each such pair, there are freq elements with value val concatenated in a sublist.
// Concatenate all the sublists from left to right to generate the decompressed list.
// Return the decompressed list.

function decompressRLElist(arr) {
  const dec = new Array();
  for (let i = 0; i < arr.length; i += 2) {
    dec.push(...new Array(arr[i]).fill(arr[i + 1]));
  }
  return dec;
}

// Driver code
const input = [1, 2, 3, 4];
console.log(decompressRLElist(input)); // Output: [2,4,4,4]
