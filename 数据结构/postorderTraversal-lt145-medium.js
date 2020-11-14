// 给定一个二叉树，返回它的 后序 遍历。
// 示例:
//     输入: [1,null,2,3]
// 1
//     \
//      2
//      /
//      3
//
// 输出: [3,2,1]
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
// 方法一：递归解法
var postorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    let res = [];
    const dfs = (node) => {
        if (node.left) {
            dfs(node.left);
        }
        if (node.right) {
            dfs(node.right)
        }
        res.push(node.val);
    };
    dfs(root);
    return res;
};
// 方法二：迭代算法
var postorderTraversal2 = function(root) {
    if (!root) {
        return [];
    }
    let res = [];
    let queue = [root];
    while (queue.length) {
        let curr = queue.shift();
        if (curr.left && curr.right){
            queue.unshift(curr.right, curr.left);
        } else if (curr.left || curr.right) {
            queue.unshift(curr.left || curr.right);
        }
        res.unshift(curr.val);
    }
    return res;
};
let result = postorderTraversal2({val: 3,left: {val: 1,left:null, right: null}, right: {val: 2, left: null, right: null}});
console.log(result, 'jjj')
