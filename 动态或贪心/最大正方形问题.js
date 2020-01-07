// 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

// 示例:
//     输入:
//     1 0 1 0 0
//     1 0 1 1 1
//     1 1 1 1 1
//     1 0 0 1 0
// 输出: 4

var maximalSquare = function(matrix) {
    if (matrix.length === 0) return 0;
    let row = matrix.length;
    let col = matrix[0] ? matrix[0].length : 0;
    let ans = 0;
    let dp = Array(row).fill('-').map( _ => Array(col).fill(0));
    for (let i = 0; i < row; i++) {
        dp[i][0] = matrix[i][0];
        if(dp[i][0] == 1) {
            ans = 1;
        }
    }
    for (let j = 0; j < col; j++) {
        dp[0][j] = matrix[0][j];
        if (dp[0][j] == 1) {
            ans = 1;
        }
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[i][j] == 1) {
                if (matrix[i - 1][j - 1] == 0) {
                    dp[i][j] = 1;
                } else {
                    let x = i;
                    let y = j;
                    while (x >= 0 && matrix[x][j] == 1) {
                        x--;
                    }
                    while (y >= 0 && matrix[i][y] == 1) {
                        y--;
                    }
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                }
                ans = Math.max(dp[i][j], ans)
            }
        }
    }
    return ans * ans;
};
let result = maximalSquare(
     [[1,0,1],
            [1,1,1],
            [1,1,1]]
);
console.log(result);
