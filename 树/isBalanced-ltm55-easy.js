// 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
// 示例 1:
// 给定二叉树 [3,9,20,null,null,15,7]
// 3
// / \
//   9  20
// /  \
//    15   7
// 返回 true 。
// 示例 2:
// 给定二叉树 [1,2,2,3,3,null,null,4,4]
//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// 返回 false 。
// 限制：
// 1 <= 树的结点个数 <= 10000
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/*方法一：递归*/
var isBalanced = function(root) {
    if (root === null) return true;
    const getHeight = function (node) {
        if (node === null) return 0;
        return Math.max(getHeight(node.left), getHeight(node.right)) + 1
    };
    return isBalanced(root.left) && isBalanced(root.right) && Math.abs(getHeight(root.left) - getHeight(root.right)) < 1;
};
/*方法二：DFS*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    const getHeight = function (node) {
        if (node === null) return 0;
        return Math.max(getHeight(node.left), getHeight(node.right)) + 1
    };
    if (root === null) return true;
    let queue = [root];
    while (queue.length) {
        let curr = queue.shift();
        let flag = Math.abs(getHeight(curr.left) - getHeight(curr.right));
        if (flag > 1) {
            return false;
        } else {
            if (curr.left) {
                queue.unshift(curr.left)
            }
            if (curr.right) {
                queue.unshift(curr.right);
            }
        }
    }
    return true;
};



