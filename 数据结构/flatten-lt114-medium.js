// 给定一个二叉树，原地将它展开为一个单链表。
// 例如，给定二叉树
// 1
// / \
//   2   5
// / \   \
// 3   4   6
// 将其展开为：
// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 迭代法
var flatten = function(root) {
    if (!root) {
        return root;
    }
    let queue = [root];
    let temp = root;
    while (queue.length) {
        let curr = queue.shift();
        if (temp !== curr) {
            temp.left = null;
            temp.right = curr;
            temp = curr;
        }
        if (curr.left && curr.right) {
            queue.unshift(curr.left, curr.right);
        } else if (curr.left || curr.right) {
            queue.unshift(curr.left || curr.right);
        }
    }
};

