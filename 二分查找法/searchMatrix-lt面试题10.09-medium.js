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
 */
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
                } else if (curr[mid] === target) {
                    return true;
                } else {
                    l = mid + 1;
                }
            }
        }
    }
    return false;
};
let result = searchMatrix([
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 21);
console.log(result);