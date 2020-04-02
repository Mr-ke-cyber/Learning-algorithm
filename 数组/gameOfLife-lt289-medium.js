// 根据 百度百科 ，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。
// 给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：
// 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
// 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
// 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
// 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
// 根据当前状态，写一个函数来计算面板上所有细胞的下一个（一次更新后的）状态。下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。
// 示例：
// 输入：
// [
//     [0,1,0],
//     [0,0,1],
//     [1,1,1],
//     [0,0,0]
// ]
// 输出：
// [
//     [0,0,0],
//     [1,0,1],
//     [0,1,1],
//     [0,1,0]
// ]
// 进阶：
// 你可以使用原地算法解决本题吗？请注意，面板上所有格子需要同时被更新：你不能先更新某些格子，然后使用它们的更新后的值再更新其他格子。
// 本题中，我们使用二维数组来表示面板。原则上，面板是无限的，但当活细胞侵占了面板边界时会造成问题。你将如何解决这些问题？
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let r = board.length;
    let c = board[0].length;
    let temp = {};
    let directions = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];
    const getStatus = function (i, j) {
        let alive = 0;
        let dead = 0;
        for (let k = 0; k < 8; k++) {
            let curr = directions[k];
            let ni = i + curr[0];
            let nj = j + curr[1];
            if (ni >= 0 && ni < r && nj >= 0 && nj < c) {
                let flag = ni * c + nj;
                if (temp[flag]) {
                    board[ni][nj] === 1 && dead++;
                    board[ni][nj] === 0 && alive++;
                } else {
                    board[ni][nj] === 1 && alive++;
                    board[ni][nj] === 0 && dead++;
                }
            }
        }
        return {
            dead, alive
        }
    };
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            let curr = getStatus(i, j);
            let flag = i * c + j;
            if (board[i][j] === 0 && curr.alive === 3) {
                board[i][j] = 1;
                temp[flag] = true;
            } else if (board[i][j] === 1){
                if (curr.alive < 2 || curr.alive > 3) {
                    board[i][j] = 0;
                    temp[flag] = true;
                }
            }
        }
    }
    return board;
};
let result = gameOfLife([
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
]);
console.log(result, 'jkk');