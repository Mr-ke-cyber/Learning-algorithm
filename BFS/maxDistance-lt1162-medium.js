// 你现在手里有一份大小为 N x N 的『地图』（网格） grid，上面的每个『区域』（单元格）都用 0 和 1 标记好了。其中 0 代表海洋，1 代表陆地，你知道距离陆地区域最远的海洋区域是是哪一个吗？请返回该海洋区域到离它最近的陆地区域的距离。
// 我们这里说的距离是『曼哈顿距离』（ Manhattan Distance）：(x0, y0) 和 (x1, y1) 这两个区域之间的距离是 |x0 - x1| + |y0 - y1| 。
// 如果我们的地图上只有陆地或者海洋，请返回 -1。
// 示例 1：
// 输入：[[1,0,1],[0,0,0],[1,0,1]]
// 输出：2
// 解释：
// 海洋区域 (1, 1) 和所有陆地区域之间的距离都达到最大，最大距离为 2。
// 示例 2：
// 输入：[[1,0,0],[0,0,0],[0,0,0]]
// 输出：4
// 解释：
// 海洋区域 (2, 2) 和所有陆地区域之间的距离都达到最大，最大距离为 4。
// 提示：
// 1 <= grid.length == grid[0].length <= 100
// grid[i][j] 不是 0 就是 1
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    let r = grid.length;
    let c = grid[0].length;
    let queue = [];
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] === 1) {
                queue.push([i, j]);
            }
        }
    }
    let hasOcean = false;
    let point = [];
    let directions = [[0, 1], [0, -1], [-1, 0], [1, 0]];
    while (queue.length) {
        point = queue.shift();
        let x = point[0], y = point[1];
        for (let i = 0; i < 4; i++) {
            let nx = x + directions[i][0];
            let ny = y + directions[i][1];
            if (nx < 0 || nx >= r || ny < 0 || ny >= c || grid[nx][ny] > 0) {
                continue;
            }
            grid[nx][ny] = grid[x][y] + 1;
            hasOcean = true;
            queue.push([nx, ny]);
        }
    }
    if (!point.length || !hasOcean) return -1;
    return grid[point[0]][point[1]] - 1;
};