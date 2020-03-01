// 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
// 示例 1:
// 输入: n = 12
// 输出: 3
// 解释: 12 = 4 + 4 + 4.
// 示例 2:
// 输入: n = 13
// 输出: 2
// 解释: 13 = 4 + 9
/**
 * @param {number} n
 * @return {number}
 */
//BFS解法
var numSquares = function(n) {
    let queue = [0];
    let visited = new Set();
    visited.add(0);
    let res = 0;
    while (queue.length) {
        res++;
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let curr = queue.shift();
            for (let j = 1; j * j + curr <= n; j++) {
                let next = j * j + curr;
                if (next === n) return res;
                if (next < n && !visited.has(next)) {
                    queue.push(next);
                    visited.add(next);
                }
            }
        }
    }
    return res;
};
// 动态规划解法
var numSquares2 = function (n) {
    let dp = Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        dp[i] = i;
        for (let j = 1; i - j * j >= 0; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    return dp[n];
};
let result = numSquares2(8);
console.log(result);
