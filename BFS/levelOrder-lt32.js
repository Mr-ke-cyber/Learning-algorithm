// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
// 例如:
//     给定二叉树: [3,9,20,null,null,15,7],
//     3
//     / \
//   9  20
// /  \
//    15   7
// 返回其层次遍历结果：
// [
//     [3],
//     [20,9],
//     [15,7]
// ]
// 提示：
// 节点总数 <= 1000
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    if (!root) return [];
    let queue = [root];
    let level = 0;
    while (queue.length) {
        res[level] = [];
        let len = queue.length;
        while (len--) {
            let curr = queue.shift();
            res[level].push(curr.val);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
        if (level % 2 === 1) {
            res[level].reverse();
        }
        level++;
    }
    return res;
};