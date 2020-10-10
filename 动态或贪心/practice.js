/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let len = cost.length;
    let dp = Array(len + 1).fill(0);
    for (let i = 2; i <= len; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[len];
};
let result = minCostClimbingStairs([0,1,2,0]);
console.log(result, 'jk');
