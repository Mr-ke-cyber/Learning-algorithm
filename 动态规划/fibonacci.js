// 用动态规划写出斐波那契数列

let fibonacci = function (n) {
    let dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
let result = fibonacci(3);
console.log(result, 'jjk');
