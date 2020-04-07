// 给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。
// 不占用额外内存空间能否做到？
// 示例 1:
// 给定 matrix =
//     [
//         [1,2,3],
//         [4,5,6],
//         [7,8,9]
//     ],
//     原地旋转输入矩阵，使其变为:
//     [
//         [7,4,1],
//         [8,5,2],
//         [9,6,3]
//     ]
// 示例 2:
// 给定 matrix =
//     [
//         [ 5, 1, 9,11],
//         [ 2, 4, 8,10],
//         [13, 3, 6, 7],
//         [15,14,12,16]
//     ],
//     原地旋转输入矩阵，使其变为:
//     [
//         [15,13, 2, 5],
//         [14, 3, 4, 1],
//         [12, 6, 8, 9],
//         [16, 7,10,11]
//     ]
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let r = matrix.length;
    let c = matrix[0].length;
    for (let i = 0; i < r; i++) {
        for (let j = i + 1; j < c; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    matrix.map((_) =>  _.reverse());
    return matrix;
};
let result = rotate([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]);
console.log(result);



