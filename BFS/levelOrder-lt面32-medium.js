// 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
// 例如:
//     给定二叉树: [3,9,20,null,null,15,7],
//     3
//     / \
//   9  20
// /  \
//    15   7
// 返回：
// [3,9,20,15,7]
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
 * @return {number[]}
 */
var levelOrder = function(root) {
    let res = [];
    if (!root) return res;
    let queue = [root];
    while (queue.length) {
        let curr = queue.shift();
        res.push(curr.val);
        if (curr.left) {
            queue.push(curr.left);
        }
        if (curr.right) {
            queue.push(curr.right);
        }
    }
    return res;
};



