// 给定一个二叉树，检查它是否是镜像对称的。
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
//     1
//     / \
//   2   2
// / \ / \
// 3  4 4  3
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
//     1
//     / \
//   2   2
//    \   \
//    3    3
// 说明:
//     如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
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
var isSymmetric = function(root) {
    const isMiror = function (a, b) {
        if (a === null && b === null) return true;
        if (a === null || b === null) return false;
        return a.val === b.val && isMiror(a.left, b.right) && isMiror(a.right, b.left);
    };
    return isMiror(root, root);
};
/*方法二：迭代 像极了BFS*/
var isSymmetric2 = function(root) {
    let queue = [root, root];
    while (queue.length) {
        let curr = queue.shift();
        let next = queue.shift();
        if (curr === null && next === null) continue;
        if (curr === null || next === null) return false;
        if (curr.val !== next.val) return false;
        queue.push(curr.left, next.right);
        queue.push(curr.right, next.left);
    }
    return true;
};
