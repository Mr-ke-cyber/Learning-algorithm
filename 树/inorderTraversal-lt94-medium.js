// 给定一个二叉树，返回它的中序 遍历。
// 示例:
//     输入: [1,null,2,3]
// 1
//     \
//      2
//      /
//      3
//
// 输出: [1,3,2]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/*方法一：递归*/
var inorderTraversal = function(root) {
    let res = [];
    const helper = function(node) {
        if (node !== null) {
            if (node.left !== null) {
                helper(node.left);
            }
            res.push(node.val);
            if (node.right !== null) {
                helper(node.right);
            }
        }
    };
    helper(root);
    return res;
};
/*方法二：迭代*/
var inorderTraversal2 = function(root) {
    let queue = [];
    let curr = root;
    let res = [];
    while(curr !== null || queue.length) {
        while (curr !== null) {
            queue.push(curr);
            curr = curr.left;
        }
        curr = queue.pop();
        res.push(curr.val);
        curr = curr.right;
    }
    return res;
};


