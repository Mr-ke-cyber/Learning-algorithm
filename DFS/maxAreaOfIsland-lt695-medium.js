// 给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。
// 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)
// 示例 1:
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//     [0,0,0,0,0,0,0,1,1,1,0,0,0],
//     [0,1,1,0,1,0,0,0,0,0,0,0,0],
//     [0,1,0,0,1,1,0,0,1,0,1,0,0],
//     [0,1,0,0,1,1,0,0,1,1,1,0,0],
//     [0,0,0,0,0,0,0,0,0,0,1,0,0],
//     [0,0,0,0,0,0,0,1,1,1,0,0,0],
//     [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// 对于上面这个给定矩阵应返回 6。注意答案不应该是11，因为岛屿只能包含水平或垂直的四个方向的‘1’。
// 示例 2:
// [[0,0,0,0,0,0,0,0]]
// 对于上面这个给定的矩阵, 返回 0。
// 注意: 给定的矩阵grid 的长度和宽度都不超过 50。
/**
 * @param {number[][]} grid
 * @return {number}
 */
/*方法一：DFS*/
var maxAreaOfIsland = function(grid) {
    let r = grid.length;
    let c = grid[0].length;
    let maxArea = 0;
    const getArea = function (i, j) {
        let r = grid.length;
        let c = grid[0].length;
        if (i >= 0 && i < r && j >= 0 && j < c && grid[i][j]) {
            grid[i][j] = 0;
            return (1 + getArea(i, j + 1) + getArea(i - 1, j) + getArea(i, j - 1) + getArea(i + 1, j));
        } else {
            return 0;
        }
    };
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j]) {
                maxArea = Math.max(maxArea, getArea(i, j));
            }
        }
    }
    return maxArea;
};
let result = maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]);
console.log(result);