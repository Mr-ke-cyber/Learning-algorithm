/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
    function buildTree(start, end) {
        let ans = [];
        if (start > end) return [null];
        for (let i = start; i <= end; i++) {
            let leftNodes = buildTree(start, i - 1);
            let rightNodes = buildTree(i + 1, end);
            for (const leftNode of leftNodes) {
                for (const rightNode of rightNodes) {
                    let cur = new TreeNode(i);
                    cur.left = leftNode;
                    cur.right = rightNode;
                    ans.push(cur);
                }
            }
        }
        return ans;
    }
    if (n === 0) return [];
    return buildTree(1, n);
};
let result = generateTrees(3);
console.log(result, 'jk')
