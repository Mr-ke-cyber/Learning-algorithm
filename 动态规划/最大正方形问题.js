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
    let col = matrix[0].length;
    let dp = Array(row).fill('-').map( _ => Array(col).fill(0));
    let maxSquare = 0;
    for (let i = 1; i < row; i++) {
        dp[i][0] = matrix[i][0];
        for (let j = 1; j < col; j++) {
            dp[0][j] = matrix[0][j];
            if (matrix[i][j] == 1) {
                if (matrix[i - 1][j - 1] == 0) {
                    dp[i][j] = 1;
                } else {
                    let x = i;
                    let y = j;
                    while (x > 0 && matrix[x][j] == 1) {
                        x--;
                    }
                    while (y > 0 && matrix[i][y] == 1) {
                        y--;
                    }
                    let maxBian = Math.min(i - x , j - y);
                    let newSquare = maxBian * maxBian;
                    if (newSquare > maxSquare) {
                        maxSquare = newSquare;
                    }
                }
            }
        }
    }
    return maxSquare;
};
let result = maximalSquare(
     [[0,1]]
);
console.log(result);
