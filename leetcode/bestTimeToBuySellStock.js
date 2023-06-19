var maxProfit = function (prices) {
  // Solve with two pointers
  let sell = 1;
  let buy = 0;
  let maxP = 0;
  // Traverse
  while (sell < prices.length) {
    // Check if difference is > 0
    if (prices[sell] > prices[buy]) {
      // Get the current profit
      let currentProfit = prices[sell] - prices[buy];
      // Take the max between current and max and update max
      maxP = Math.max(maxP, currentProfit);
    } else {
      // Not profitable, buy ptr to sell ptr and then increment sell ptr
      buy = sell;
    }
    sell += 1;
  }

  return maxP;
};

const i = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(i)); // 5
