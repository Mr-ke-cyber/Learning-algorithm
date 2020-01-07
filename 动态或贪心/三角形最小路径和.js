// 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
//
// 例如，给定三角形：
// [
//        [2],
//       [3,4],
//      [6,5,7],
//     [4,1,8,3]
// ]
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
// 说明：
// 如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。

let minimumTotal = function(triangle) {
    let dp = triangle;
    for(let i = dp.length - 2; i >= 0; i--) {
        for (let j = 0; j < dp[i].length; j++) {
            dp[i][j] = Math.min(dp[i + 1][j + 1], dp[i + 1][j]) + dp[i][j];
        }
    }
    return dp[0][0];
};

let result = minimumTotal([[2], [3,4], [6,5,7], [4,1,8,3]]);
console.log(result);
