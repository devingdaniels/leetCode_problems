// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

function shuffle(nums, n) {
  const ans = [];
  for (let i = 0; i < nums.length / 2; i++) {
    ans.push(nums[i], nums[n + i]);
  }
  return ans;
}

// Driver code
const input = [2, 5, 1, 3, 4, 7];
const n = 3;
const result = shuffle(input, n);
console.log(result); // [2,3,5,4,1,7]
