// 给定M×N矩阵，每一行、每一列都按升序排列，请编写代码找出某元素。
// 示例:
//     现有矩阵 matrix 如下：
// [
//     [1,   4,  7, 11, 15],
//     [2,   5,  8, 12, 19],
//     [3,   6,  9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30]
// ]
// 给定 target = 5，返回 true。
// 给定 target = 20，返回 false。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/sorted-matrix-search-lcci
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 乍一开始用的是二分法，耗时140ms，尽管通过了，后来发现题意是从上到下递增，从左到右也是递增的，故需要改进
 */
/*解法一：二分法*/
var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        let curr = matrix[i];
        if (curr[0] > target) {
            break;
        } else {
            let l = 0;
            let len = curr.length;
            let r = len - 1;
            while(l <= r) {
                let mid = l + ((r - l) >> 1);
                if (curr[mid] > target) {
                    r = mid - 1;
                } else if (curr[mid] < target) {
                    l = mid + 1;
                } else {
                    return true;
                }
            }
        }
    }
    return false;
};
/*方法二：*/
let searchMatrix2 = function (matrix, target) {
    if (!matrix || matrix.length === 0) return false;
    let row = matrix.length - 1;
    let col = 0;
    let len = matrix[0].length;
    while (row >= 0 && col < len) {
        if (matrix[row][col] < target) {
            col++;
        } else if (matrix[row][col] > target) {
            row--;
        } else {
            return true;
        }
    }
    return false;
};
//方法三：二分查找法,不适用于本题，适用于本行第一个整数大于前一行最后一个整数的情况
let searchMatrix3 = function (matrix, target) {
    let r = matrix.length;
    if (!r) return false;
    let c = matrix[0].length;
    let l1 = 0;
    let r1 = r * c - 1;
    while (l1 <= r1) {
        let mid = (l1 + r1) >> 1;
        let sc = mid % c;
        let sr = (mid - sc) / c;
        let curr = matrix[sr][sc];
        if (curr === target) {
            return true;
        } else if (curr < target) {
            l1 = mid + 1;
        } else {
            r1 = mid - 1;
        }
    }
    return false;
};
let result = searchMatrix2([
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 21);
console.log(result);