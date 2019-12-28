// 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。
// 你可以假设网格的四个边均被水包围。
//
// 示例 1:
// 输入:
//     11110
//     11010
//     11000
//     00000
// 输出: 1
//
// 示例 2:
// 输入:
//     11000
//     11000
//     00100
//     00011
// 输出: 3
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let rows = grid.length;
    if (rows === 0) return 0;
    let cols = grid[0].length;
    let count = 0;
    let marked = Array(rows).fill("_").map(_ => Array(cols).fill(false));
    let inArea = function (x, y) {
       return x >= 0 && x < rows && y >= 0 && y < cols;
    };
    let directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!marked[i][j] && (grid[i][j] == 1)) {
                count += 1;
                let queue = [];
                queue.push(i*cols + j);
                marked[i][j] = true;
                while (queue.length > 0) {
                    let curr = queue.shift();
                    let curY = curr % cols;
                    let curX = (curr - curY) / cols;
                    for (let k = 0; k < 4; k++) {
                        let newX = curX + directions[k][0];
                        let newY = curY + directions[k][1];
                        if ( inArea(newX, newY) && !marked[newX][newY] && grid[newX][newY] == 1 ) {
                            queue.push(newX * cols + newY);
                            marked[newX][newY] = true;
                        }
                    }
                }
            }
        }
    }
    return count;

};
let result = numIslands([
    [1,1,0,1,0],
    [1,1,0,0,0],
    [1,1,0,1,0],
    [0,0,0,0,1]
]);
console.log(result)
