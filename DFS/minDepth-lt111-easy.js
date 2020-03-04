// 给定一个二叉树，找出其最小深度。
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
// 说明: 叶子节点是指没有子节点的节点。
// 示例:
//     给定二叉树 [3,9,20,null,null,15,7],
//     3
//     / \
//   9  20
// /  \
//    15   7
// 返回它的最小深度  2.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) {
        return 0;
    } else {
        if (root.left && root.right) {
            return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
        } else if (root.left || root.right) {
            let m = minDepth(root.left), n = minDepth(root.right);
            return m + n + 1;         // 有一边为空，说明m和n中有一个必然为0，所以返回m + n + 1
        } else {
            return 1;              // 两边都为空，和上面这种情况可以合并
        }
    }
};
var minDepth2 = function (root) {
    if (!root) return 0;
    let queue = [root];
    let res = 1;
    while (queue.length) {
        let len = queue.length;
        while (len--) {
            let curr = queue.shift();
            if (!curr.left && !curr.right) {
                return res;
            } else {
                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);
            }
        }
        res++;
    }
};
let result = minDepth2({
    val:3,
    left:{val:9,left:null, right:null},
    right:{
        val:20,
        left:{val:15,left:null,right:null},
        right:{val:7,left:null,right:null}
    }});
console.log(result);






