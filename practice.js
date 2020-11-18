/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let res = [];
    const dfs = (node, currSum, tempPath) => {
        if (!node) {
            return;
        }
        currSum += node.val;
        tempPath.push(node.val);
        if (currSum === sum && !node.left && !node.right) {
            res.push(tempPath);
        }
        if(node.left) {
            dfs(node.left, currSum, tempPath.slice());
        }
        if (node.right) {
            dfs(node.right, currSum, tempPath.slice());
        }
    };
    dfs(root, 0, []);
    return res;
};
let result = pathSum({val: -2, left: null, right: {val: -3}}, -5);
console.log(result, 'jk')
