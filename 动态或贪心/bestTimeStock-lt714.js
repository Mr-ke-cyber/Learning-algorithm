// 给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。
// 你可以无限次地完成交易，但是你每次交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
// 返回获得利润的最大值。
//
// 示例 1:
// 输入: prices = [1, 3, 2, 8, 4, 9], fee = 2
// 输出: 8
// 解释: 能够达到的最大利润:
//     在此处买入 prices[0] = 1
//     在此处卖出 prices[3] = 8
//     在此处买入 prices[4] = 4
//     在此处卖出 prices[5] = 9
//     总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
// 注意:
//     0 < prices.length <= 50000.
//     0 < prices[i] < 50000.
//     0 <= fee < 50000.
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
let maxProfit = function(prices, fee) {
    let len = prices.length;
    let dp1 = Array(len).fill(0);  //用来存储第i天手上有股票的最大收益
    let dp2 = Array(len).fill(0);  //用来存储第i天手上无股票的最大收益
    dp1[0] = -prices[0];
    for (let i = 1; i < len; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp2[i - 1] - prices[i]); //第二项表示第i天买入股票 第i天手上有股票的最大收益就是在前一天继续持有的最大收益和前一天卖了今天买股票的收益，这两者之间取大为第i天持有时候的最大收益。
        dp2[i] = Math.max(dp2[i - 1], dp1[i - 1] + prices[i] - fee); //第二项表示第i天卖出股票  第i天手上没有股票的最大收益，在前一天没有股票的最大收益和前一天有但是今天卖了股票的收益，这两者之间取大为第i天卖出时候的最大收益。
    }
    return dp2[len - 1];
};

let result = maxProfit([1,3,2,8,4,9], 2);
console.log(result, 'jkkk');
