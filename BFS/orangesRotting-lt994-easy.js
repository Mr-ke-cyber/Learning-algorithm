// 在给定的网格中，每个单元格可以有以下三个值之一：
// 值 0 代表空单元格；
// 值 1 代表新鲜橘子；
// 值 2 代表腐烂的橘子。
// 每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。
// 返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。
// 示例 1：
// 输入：[[2,1,1],[1,1,0],[0,1,1]]
// 输出：4
// 示例 2：
// 输入：[[2,1,1],[0,1,1],[1,0,1]]
// 输出：-1
// 解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个正向上。
// 示例 3：
// 输入：[[0,2]]
// 输出：0
// 解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。
// 提示：
// 1 <= grid.length <= 10
// 1 <= grid[0].length <= 10
// grid[i][j] 仅为 0、1 或 2
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let r = grid.length;
    let c = grid[0].length;
    let queue = [];
    let flag = false;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);    //  由于题目并没有说明总共只有一个烂橘子，所以第一步先找出所有的腐烂橘子作为BFS起点
            } else if (grid[i][j] === 1) {
                flag = true;          // 标记是否有完好的橘子，如果都是坏的，那就不用等它腐烂了，直接返回
            }
        }
    }
    if (!flag) return 0;
    let res = 0;
    let directions = [[0, 1], [0, -1], [-1, 0],[1, 0]];  // 往四个方向腐烂
    while (queue.length) {
        let len = queue.length;
        while (len--) {
            let curr = queue.shift();
            for (let k = 0; k < 4; k++) {
                let nx = curr[0] + directions[k][0];
                let ny = curr[1] + directions[k][1];
                if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
                if (grid[nx][ny] === 1) {
                    grid[nx][ny] = 2;
                    queue.push([nx, ny]);
                }
            }
        }
        res++;
    }
    let check = grid.some( _ => _.some(item => item === 1)); // 检测遍历完是否还有完好的橘子
    if (check) return -1;
    return res - 1;      // 最后一次列表中都没有可烂的橘子了，需要减一分钟
};
let result = orangesRotting([[1,2]]);
console.log(result, 'jkkl')