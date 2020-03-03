// 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
// 例如:
//     给定二叉树: [3,9,20,null,null,15,7],
//      3
//     / \
//    9   20
//       /  \
//      15   7
// 返回其层次遍历结果：
// [
//     [3],
//     [9,20],
//     [15,7]
// ]
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
    if (!root) return [];
    const queue = [root];
    const res = []; // 存放遍历结果
    let level = 0; // 代表当前层数
    while (queue.length) {
        res[level] = []; // 第level层的遍历结果
        let levelNum = queue.length; // 第level层的节点数量
        while (levelNum--) {
            const front = queue.shift();
            res[level].push(front.val);
            if (front.left) queue.push(front.left);
            if (front.right) queue.push(front.right);
        }
        level++;
    }
    return res;
};
let result = levelOrder({val:3,left:{val:9},right:{val:20,left:{val:15}, right:{val:7}}});
console.log(result);
