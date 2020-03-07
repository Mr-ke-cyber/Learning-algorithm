var maxProfit = function (prices) {
    let len = prices.length;
    let maxProfit = 0;
    for (let i = 1; i < len; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    return maxProfit;
};
let result = maxProfit([7,1,5,3,6,4]);
console.log(result);