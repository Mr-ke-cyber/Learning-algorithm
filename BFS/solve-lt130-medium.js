// 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
// 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
// 示例:
// X X X X
// X O O X
// X X O X
// X O X X
// 运行你的函数后，矩阵变为：
// X X X X
// X X X X
// X X X X
// X O X X
// 解释:
//     被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (board === null || board.length === 0) return;
    let r = board.length;
    let c = board[0].length;
    let marked = Array(r).fill("_").map( _ => Array(c).fill(false));
    let queue = [];
    let temp = [];   // 用来存放是否与边界O有联通的情况
    let directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    let inArea = function (x, y) {
        return x >= 0 && x < r && y >= 0 && y < c;
    };
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (i > 0 && j > 0 && i < r - 1 && j < c - 1 && !marked[i][j] && board[i][j] === "O") {
                queue.push(i * c + j);
                temp.push([i, j]);
                marked[i][j] = true;
                while (queue.length > 0) {
                    let curr = queue.shift();
                    let curY = curr % c;
                    let curX = (curr - curY) / c;
                    for (let k = 0; k < 4; k++) {
                        let newX = curX + directions[k][0];
                        let newY = curY + directions[k][1];
                        if ( inArea(newX, newY) && !marked[newX][newY] && board[newX][newY] === "O" ) {
                            queue.push(newX * c + newY);
                            temp.push([newX, newY]);
                            marked[newX][newY] = true;
                        }
                    }
                }
                let check = temp.every((item) => {
                    return item[0] > 0 && item[0] < r - 1 && item[1] > 0 && item[1] < c - 1;
                });
                if (check) {
                    temp.forEach((item, index) => {
                        let x = item[0], y = item[1];
                        board[x][y] = "X";
                    });
                } else {
                    temp = [];      //  注意此处每次检测完以后需要复位
                }
            }
        }
    }
};
let result = solve([
    ["X","O","O","X","X","X","O","X","O","O"],
    ["X","O","X","X","X","X","X","X","X","X"],
    ["X","X","X","X","O","X","X","X","X","X"],
    ["X","O","X","X","X","O","X","X","X","O"],
    ["O","X","X","X","O","X","O","X","O","X"],
    ["X","X","O","X","X","O","O","X","X","X"],
    ["O","X","X","O","O","X","O","X","X","O"],
    ["O","X","X","X","X","X","O","X","X","X"],
    ["X","O","O","X","X","O","X","X","O","O"],
    ["X","X","X","O","O","X","O","X","X","O"]]);
[
    ["X","O","O","X","X","X","O","X","O","O"],
    ["X","O","X","X","X","X","X","X","X","X"],
    ["X","X","X","X","O","X","X","X","X","X"],
    ["X","O","X","X","X","O","X","X","X","O"],
    ["O","X","X","X","O","X","O","X","O","X"],
    ["X","X","O","X","X","O","O","X","X","X"],
    ["O","X","X","O","O","X","O","X","X","O"],
    ["O","X","X","X","X","X","O","X","X","X"],
    ["X","O","O","X","X","O","X","X","O","O"],
    ["X","X","X","O","O","X","O","X","X","O"]]
console.log(result);