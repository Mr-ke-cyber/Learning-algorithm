// 给定一个仅包含 0 和 1 、大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
// 实例1：
// 输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// 输出：6
// 解释：最大矩形如上图所示。
//
// 示例 2：
// 输入：matrix = []
// 输出：0
//
// 示例 3：
// 输入：matrix = [["0"]]
// 输出：0
//
// 示例 4：
// 输入：matrix = [["1"]]
// 输出：1
// 示例 5：
// 输入：matrix = [["0","0"]]
// 输出：0
// 提示：
// rows == matrix.length
// cols == matrix[0].length
// 0 <= row, cols <= 200
// matrix[i][j] 为 '0' 或 '1'
/**
 * @param {string[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let r = matrix.length;
    if (!r) {
        return 0;
    }
    let c = matrix[0].length, res = 0;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (matrix[i][j] === "1") { // 以ij为矩形的左上角 查找能扩展出的最大矩形
                let rr = i, cMin = Number.MAX_SAFE_INTEGER, rows = 1;  // 最小行数初始值是一行
                while (matrix[rr] && matrix[rr][j] === "1") {
                    let cc = j;
                   while (cc < c) {
                       if (matrix[rr][cc] === "1") {
                           cc++;
                       } else {
                           break;
                       }
                   }
                   cMin = Math.min(cMin, cc - j);  // 找出已遍历行里面最短的列，注意要构成矩形必须要是最短列，否则会掺杂0从而不是矩形
                   rows = rr - i + 1; // 找出已遍历里面已形成矩形的行数
                   res = Math.max(res, cMin * rows); // 寻找最大值
                   rr++; // 继续去遍历下一行
                }
            }
        }
    }
    return res;
};
let result = maximalRectangle([
    ["1","1","1","1","1","1","1","1"],
    ["1","1","1","1","1","1","1","0"],
    ["1","1","1","1","1","1","1","0"],
    ["1","1","1","1","1","0","0","0"],
    ["0","1","1","1","1","0","0","0"]
]);
console.log(result, 'res');
