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
/*方法二：广度优先遍历*/
var generateParenthesis2 = function (n) {
    class Node {
        constructor(str, l, r) {
            this.res = str;
            this.l = l;
            this.r = r;
        }
    }
    let res = [];
    if (n === 0) {
        return res;
    }
    let queue = [];
    queue.push(new Node("", n, n));
    while (queue.length > 0) {
        let curNode = queue.shift();
        if (curNode.l === 0 && curNode.r === 0) {
            res.push(curNode.res);
        }
        if (curNode.l > 0) {
            queue.push(new Node(curNode.res + "(", curNode.l - 1, curNode.r));
        }
        if (curNode.r > 0 && curNode.l < curNode.r) {
            queue.push(new Node(curNode.res + ")", curNode.l, curNode.r - 1));
        }
    }
    return res;
};
let result = generateParenthesis2 (3);
console.log(result);