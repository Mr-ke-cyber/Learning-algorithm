// 有一个二维矩阵 grid ，每个位置要么是陆地（记号为 0 ）要么是水域（记号为 1 ）。
// 我们从一块陆地出发，每次可以往上下左右 4 个方向相邻区域走，能走到的所有陆地区域，我们将其称为一座「岛屿」。
// 如果一座岛屿 完全 由水域包围，即陆地边缘上下左右所有相邻区域都是水域，那么我们将其称为 「封闭岛屿」。
// 请返回封闭岛屿的数目。
// 示例 1：
// 输入：grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
// 输出：2
// 解释：
// 灰色区域的岛屿是封闭岛屿，因为这座岛屿完全被水域包围（即被 1 区域包围）。
// 示例 2：
// 输入：grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
// 输出：1
// 示例 3：
// 输入：grid = [[1,1,1,1,1,1,1],
//     [1,0,0,0,0,0,1],
//     [1,0,1,1,1,0,1],
//     [1,0,1,0,1,0,1],
//     [1,0,1,1,1,0,1],
//     [1,0,0,0,0,0,1],
//     [1,1,1,1,1,1,1]]
// 输出：2
// 提示：
// 1 <= grid.length, grid[0].length <= 100
// 0 <= grid[i][j] <=1
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let r = grid.length;
    let c = grid[0].length;
    let res = 0;
    let directions =[[-1, 0], [1, 0], [0, -1], [0, 1]];
    const inArea = (i, j) => {
        return i > 0 && i < r - 1 && j > 0 && j < c - 1;
    };
    let flag = false;
    const dfs = (i, j) => {
        if (i < 0 || i >= r || j < 0 || j >= c || grid[i][j] !== 0) return;
        if (!inArea(i, j)) {
            flag = true;
        }
        grid[i][j] = 1;
        for (let k = 0; k < 4; k++) {
            let nx = i + directions[k][0];
            let ny = j + directions[k][1];
            dfs(nx, ny);
        }
    };
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] === 0) {
                dfs(i, j);
                if (flag) {
                    flag = false;
                } else {
                    res++;
                }
            }
        }
    }
    return res;
};
