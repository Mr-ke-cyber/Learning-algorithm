// 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 说明：每次只能向下或者向右移动一步。
// 示例:
//
//     输入:
//         [
//             [1,3,1],
//             [1,5,1],
//             [4,2,1]
//         ]
// 输出: 7
// 解释: 因为路径 1→3→1→1→1 的总和最小。

/*贪心算法每一步最优解一定包含上一步的最优解，动态规划没有这种推导关系*/
/*局部最优解不一定是全局最优解*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
let minPathSum = function(grid) {
    // if (grid === null || grid.length < 1 || grid[0] === null || grid[0].length < 1){
    //     return 0;
    // }
    // let rowLen = grid.length;
    // let colLen = grid[0].length;
    // let dp=Array(rowLen).fill(0).map(x=>Array(colLen).fill(0));
    // // let dp = Array.from({length:rowLen},x=>Array.from({length:colLen+1}, y=>0));
    // dp[0][0] = grid[0][0];
    // for (let i = 1; i < rowLen; i++) {
    //     dp[i][0] = dp[i - 1][0] + grid[i][0];
    //     console.log(dp[i][0]);
    // }
    // for (let j = 1; j<colLen; j++) {
    //     dp[0][j] = dp[0][j-1] + grid[0][j];
    // }
    // for (let i = 1; i < rowLen; i++) {
    //     for (let j = 1; j< colLen; j++) {
    //         dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    //     }
    // }
    // return dp[rowLen - 1][colLen - 1]
    const l = grid[0].length,h = grid.length;
    const result = Array.from({length:h},_=> []);
    console.log(result,'jkk');
    for(let i = 0;i<h;i++){
        for(let j = 0;j<l;j++){
            if(i === 0 && j === 0){
                result[i][j] = grid[i][j]
            }else if(i === 0){
                result[i][j] = result[i][j-1] + grid[i][j]
            }else if(j === 0){
                result[i][j] = result[i-1][j] + grid[i][j]
            }else{
                result[i][j] = grid[i][j] + Math.min(result[i-1][j],result[i][j-1])
            }

        }
    }
    return result[h-1][l-1]
};
let params = [
            [1,3,1],
            [1,5,1],
            [4,2,1]
        ];
let result = minPathSum(params);
console.log(result);


