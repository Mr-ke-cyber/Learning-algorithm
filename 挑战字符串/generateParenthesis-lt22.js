// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
// 例如，给出 n = 3，生成结果为：
// [
//     "((()))",
//     "(()())",
//     "(())()",
//     "()(())",
//     "()()()"
// ]
/**
 * @param {number} n
 * @return {string[]}
 */
/*方法一：深度优先遍历*/
var generateParenthesis = function(n) {
    let result = [];
    if (n === 0) {
        return result;
    }
    const dfs = function (curStr, l, r, result) {
        if (l === 0 && r === 0) {
            result.push(curStr);
            return;
        }
        if (l > r) {
            return;
        }
        if (l > 0) {
            dfs(curStr + "(", l - 1, r, result);
        }
        if (r > 0) {
            dfs(curStr + ")", l, r - 1, result);
        }
    };
    dfs("", n, n, result);
    return result;
};
let result = generateParenthesis (2);console.log(result);