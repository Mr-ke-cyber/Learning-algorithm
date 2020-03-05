// 给定一个二叉树，判断它是否是高度平衡的二叉树。
// 本题中，一棵高度平衡二叉树定义为：
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
// 示例 1:
// 给定二叉树 [3,9,20,null,null,15,7]
//     3
//    / \
//   9  20
//     /  \
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
 * 注意题意是每个节点的左右两个字数的高度差不超过1，所以不能单单判断根节点
 */

var isBalanced = function(root) {
    const getHeight = function (node) {
        if (node === null) return 0;
        return 1 + Math.max(getHeight(node.left), getHeight(node.right));
    };
    if (root === null) return true;
    let l = getHeight(root.left);
    let r = getHeight(root.right);
    return Math.abs(l - r) < 2 && isBalanced(root.left) && isBalanced(root.right);
};
let result = isBalanced({
    val:3,
    left:{val:9,left:null, right:null},
    right:{
        val:20,
        left:{val:15,left:null,right:null},
        right:{val:7,left:null,right:null}
    }});
console.log(result);