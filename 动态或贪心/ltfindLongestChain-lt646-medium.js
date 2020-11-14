// 给出 n 个数对。 在每一个数对中，第一个数字总是比第二个数字小。
// 现在，我们定义一种跟随关系，当且仅当 b < c 时，数对(c, d) 才可以跟在 (a, b) 后面。我们用这种形式来构造一个数对链。
// 给定一个数对集合，找出能够形成的最长数对链的长度。你不需要用到所有的数对，你可以以任何顺序选择其中的一些数对来构造。
//
//
// 示例：
// 输入：[[1,2], [2,3], [3,4]]
// 输出：2
// 解释：最长的数对链是 [1,2] -> [3,4]
//
// 提示：
// 给出数对的个数在 [1, 1000] 范围内。
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    let len = pairs.length;
    if (!len) {
        return 0;
    }
    pairs.sort((a, b) => {
        return a[0] - b[0];
    });
    let dp = new Array(len).fill(1);
    for(let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (pairs[i][0] > pairs[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp)
};
// 方法二
var findLongestChain2 = function(pairs) {
    let len = pairs.length;
    if (!len) {
        return 0;
    }
    pairs.sort((a, b) => {
        return a[1] - b[1];
    });
    let res = 1;
    let head = pairs[0];
    for (let i = 1; i < len; i++) {
        if (pairs[i][0] > head[1]) {
            res++;
            head = pairs[i];
        }
    }
    return res
};
let result = findLongestChain2([[-10,-8],[8,9],[-5,0],[6,10],[-6,-4],[1,7],[9,10],[-4,7]]);
console.log(result, 'result');
