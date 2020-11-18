// 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
// 说明: 叶子节点是指没有子节点的节点。
// 示例:
//     给定如下二叉树，以及目标和 sum = 22，
//               5
//               / \
//             4   8
// /   / \
//           11  13  4
// /  \    / \
//         7    2  5   1
// 返回:
//     [
//         [5,4,11,2],
//         [5,8,4,5]
//     ]
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
// 方法一：回溯
var pathSum = function(root, sum) {
    if (!root) return [];
    let res = [];
    let tempPath = [];
    const backtrack = function (node, tempPath, t) {
        if (node === null) return;
        tempPath.push(node.val);
        t -= node.val;
        if (t === 0 && node.left === null && node.right === null) {
            res.push(tempPath);
            return;
        }
        backtrack(node.left, tempPath.slice(), t);
        backtrack(node.right, tempPath.slice(), t);
        tempPath.pop();
    };
    backtrack(root, tempPath, sum);
    return res;
};
// 方法二：DFS
var pathSum2 = function(root, sum) {
    if (!root) return [];
    let res = [];
    let temp = [];
    const dfs = (node, sum) => {
        if (!node){
            return;
        }
        temp.push(node.val);
        sum -= node.val;
        if (sum === 0 && !node.left && !node.right) {
            res.push(temp);
        }
        dfs(node.left, sum);
        dfs(node.right, sum);
    };
    dfs(root, sum);
    return res;
};
