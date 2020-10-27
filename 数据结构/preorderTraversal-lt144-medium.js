// 给定一个二叉树，返回它的 前序 遍历。
//
//  示例:
//      输入: [1,null,2,3]
// 1
//     \
//      2
//      /
//      3
//
// 输出: [1,2,3]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归解法
var preorderTraversal = function(root) {
    let res = [];
    const dfs = (node) => {
        if (node) {
            res.push(node.val);
            if (node.left) {
                dfs(node.left);
            }
            if (node.right) {
                dfs(node.right);
            }
        }
    };
    dfs(root);
    return res;
};
// 迭代解法
var preorderTraversal2 = function(root) {
    if (!root) {
        return [];
    }
    let res = [];
    let queue = [root];
    while (queue.length) {
        let curr = queue.shift();
        res.push(curr.val);
        if (curr.left && curr.right) {
            queue.unshift(curr.left, curr.right);
        } else if (curr.left || curr.right) {
            queue.unshift(curr.left || curr.right);
        }
    }
    return res;
};
