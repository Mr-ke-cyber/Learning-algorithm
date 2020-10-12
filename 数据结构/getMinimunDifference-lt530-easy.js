
给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。

 

// 示例：
//
// 输入：
//
//    1
//     \
//      3
//      /
//      2
//
// 输出：
// 1
//
// 解释：
// 最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
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
/*解法一*/
var getMinimumDifference = function(root) {
    let queue = [root];
    let temp = [];
    while(queue.length) {
        let curr = queue.pop();
        temp.push(curr.val);
        if (curr.left) {
            queue.push(curr.left);
        }
        if (curr.right) {
            queue.push(curr.right);
        }
    }
    temp.sort((a, b) => a - b);
    let result = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < temp.length; i++) {
        result = Math.min(result, temp[i] - temp[i - 1]);
    }
    return result;
};
// 解法二： 二叉搜索树的中序遍历是递增的，相比解法一的优点就是不需要再排序了。故需要先对二叉树进行中序遍历，中序遍历通常使用DFS
var getMinimumDifference2 = function(root) {
    let result = Number.MAX_SAFE_INTEGER;
    let pre = -1;
    const dfs = root => {
        if (!root) {
            return;
        }
        dfs(root.left);
        if (pre === -1) {
            pre = root.val;
        } else {
            result = Math.min(result, root.val - pre);
            pre = root.val;
        }
        dfs(root.right);
    };
    dfs(root);
    return result;
};
